// serverSignatureTest.ts

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

// Function to perform Server Signature Test using PSI data
export function performServerSignatureTest(data: any,appendToSuccess:any,appendToFailed:any): { IsServerSignaturePresent: boolean; Importance: string; Description: string } {
    const networkRequestsAudit = data?.lighthouseResult?.audits?.['network-requests'];

    // Check if the Network Requests audit data is available
    if (!networkRequestsAudit) {
        // Return default data if the audit data is missing
        return {
            IsServerSignaturePresent: false,
            Importance: 'Low',
            Description: 'No Network Requests audit data found in PSI data.'
        };
    }

    // Find the main document URL
    const mainDocumentUrl = data.lighthouseResult.requestedUrl;

    // Find the response headers for the main document
    const mainDocumentResponseHeaders = networkRequestsAudit.details.items.find((item: { url: any; }) => item.url === mainDocumentUrl)?.responseHeaders;

    // Check if the 'Server' header is present
    const serverHeader = mainDocumentResponseHeaders?.['server'];

    // Determine if the Server Signature is present
    const isServerSignaturePresent = !!serverHeader;
    isServerSignaturePresent ? appendToFailed('Server Signature Test') : appendToSuccess('Server Signature Test');

    // Determine the importance and description based on the presence of Server Signature
    const importance = isServerSignaturePresent ? 'Medium' : 'Low';
    const description = isServerSignaturePresent ? 'The Server Signature is present in the response headers. Consider removing or obfuscating it to improve security.' : 'The Server Signature is not present in the response headers, which is a good security practice.';

    // console.log({
    //     message: 'Server Signature Test',
    //     IsServerSignaturePresent: isServerSignaturePresent,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        IsServerSignaturePresent: isServerSignaturePresent,
        Importance: importance,
        Description: description
    };
}
