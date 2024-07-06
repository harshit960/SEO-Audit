// hstsTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        requestedUrl: string;
        audits: {
            'network-requests': {
                id: string;
                title: string;
                description: string;
                details: {
                    items: {
                        url: string;
                        responseHeaders: Record<string, string>;
                    }[];
                };
            };
        };
    };
}

// Function to perform HSTS Test using PSI data
export function performHstsTest(data: any,appendToSuccess:any,appendToFailed:any): { IsHstsEnabled: boolean; MaxAge: number | null; Importance: string; Description: string } {
    const networkRequestsAudit = data?.lighthouseResult?.audits?.['network-requests'];

    // Check if the Network Requests audit data is available
    if (!networkRequestsAudit) {
        // Return default data if the audit data is missing
        return {
            IsHstsEnabled: false,
            MaxAge: null,
            Importance: 'Low',
            Description: 'No Network Requests audit data found in PSI data.'
        };
    }

    // Find the main document URL
    const mainDocumentUrl = data.lighthouseResult.requestedUrl;

    // Find the response headers for the main document
    const mainDocumentResponseHeaders = networkRequestsAudit.details.items.find((item: { url: any; }) => item.url === mainDocumentUrl)?.responseHeaders;

    // Check if the 'Strict-Transport-Security' header is present
    const hstsHeader = mainDocumentResponseHeaders?.['strict-transport-security'];

    // Determine if HSTS is enabled and extract max-age value
    const isHstsEnabled = !!hstsHeader;
    const maxAge = isHstsEnabled ? extractMaxAge(hstsHeader) : null;
    !isHstsEnabled ? appendToFailed('HSTS Test') : appendToSuccess('HSTS Test');

    // Determine the importance and description based on HSTS configuration
    const importance = isHstsEnabled ? 'High' : 'Medium';
    const description = isHstsEnabled ? `HTTP Strict Transport Security (HSTS) is enabled with a max-age of ${maxAge} seconds.` : 'HTTP Strict Transport Security (HSTS) is not enabled. Consider enabling it to improve security.';

    // console.log({
    //     message: 'HSTS Test',
    //     IsHstsEnabled: isHstsEnabled,
    //     MaxAge: maxAge,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        IsHstsEnabled: isHstsEnabled,
        MaxAge: maxAge,
        Importance: importance,
        Description: description
    };
}

// Helper function to extract max-age value from HSTS header
function extractMaxAge(header: string): number {
    const maxAgeMatch = header.match(/max-age=(\d+)/i);
    return maxAgeMatch ? parseInt(maxAgeMatch[1]) : NaN;
}
