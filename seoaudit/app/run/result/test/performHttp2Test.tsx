// http2Test.ts

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
                        protocol: string;
                    }[];
                };
            };
        };
    };
}

// Function to perform HTTP/2 Test using PSI data
export function performHttp2Test(data: any,appendToSuccess:any,appendToFailed:any): { IsHttp2: boolean; Importance: string; Description: string } {
    const networkRequestsAudit = data?.lighthouseResult?.audits?.['network-requests'];

    // Check if the Network Requests audit data is available
    if (!networkRequestsAudit) {
        // Return default data if the audit data is missing
        return {
            IsHttp2: false,
            Importance: 'Low',
            Description: 'No Network Requests audit data found in PSI data.'
        };
    }

    // Extract protocol information for each resource
    const resources = networkRequestsAudit.details.items;

    // Check if any resource is served over HTTP/2
    const isHttp2 = resources.some((resource: { protocol: string; }) => resource.protocol === 'h2');
    !isHttp2 ? appendToFailed('HTTP/2 Test') : appendToSuccess('HTTP/2 Test');

    // Determine the importance and description based on HTTP/2 usage
    const importance = isHttp2 ? 'High' : 'Medium';
    const description = isHttp2 ? 'The website is served over HTTP/2, providing improved performance and efficiency.' : 'The website is not served over HTTP/2. Consider upgrading to HTTP/2 for better performance.';

    // console.log({
    //     message: 'HTTP/2 Test',
    //     IsHttp2: isHttp2,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        IsHttp2: isHttp2,
        Importance: importance,
        Description: description
    };
}
