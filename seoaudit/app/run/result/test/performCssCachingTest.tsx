// cssCachingTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        requestedUrl: string;
        audits: {
            'network-requests': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        url: string;
                        responseHeaders: { name: string; value: string }[];
                        mimeType: string;
                    }[];
                };
            };
        };
    };
}

// Function to perform CSS Caching Test using PSI data
export function performCssCachingTest(data: PSIData): { IsCssCachingOptimized: boolean; Importance: string; Description: string; Link: string } {
    const networkRequestsAudit = data?.lighthouseResult?.audits?.['network-requests'];

    // Check if the Network Requests audit data is available
    if (!networkRequestsAudit) {
        // Return default data if the audit data is missing
        return {
            IsCssCachingOptimized: false,
            Importance: 'Low',
            Description: 'No CSS Caching Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract CSS requests
    const cssRequests = networkRequestsAudit.details.items.filter(item => item.mimeType === 'text/css');

    // Check if CSS caching is optimized for all requests
    const isCssCachingOptimized = cssRequests.every(request => isCachingOptimized(request));

    // Determine the importance and description based on CSS caching optimization
    const importance = isCssCachingOptimized ? 'High' : 'Medium';
    const description = isCssCachingOptimized ? 'CSS caching is optimized, improving page load times for returning visitors.' : 'Some CSS files on the webpage may not be effectively cached, impacting page load performance for returning visitors.';
    const link = 'https://web.dev/uses-long-cache-ttl/';

    // console.log({
    //     message: 'CSS Caching Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        IsCssCachingOptimized: isCssCachingOptimized,
        Importance: importance,
        Description: description,
        Link: link
    };
}

// Function to check if CSS caching is optimized
function isCachingOptimized(request: any): boolean {
    // Extract response headers from the request
    const responseHeaders = request.responseHeaders;

    // Check if caching headers are present and indicate effective caching
    const cacheControlHeader = responseHeaders.find((header: { name: string; }) => header.name.toLowerCase() === 'cache-control');

    if (cacheControlHeader) {
        // Check if cache-control header indicates long-term caching
        if (cacheControlHeader.value.includes('max-age=') || cacheControlHeader.value.includes('immutable')) {
            return true;
        }
    }

    // Check if expires header indicates caching
    const expiresHeader = responseHeaders.find((header: { name: string; }) => header.name.toLowerCase() === 'expires');

    if (expiresHeader) {
        // Check if expires header indicates a future expiration date
        const expiresDate = new Date(expiresHeader.value);
        if (expiresDate > new Date()) {
            return true;
        }
    }

    // If no effective caching instructions found, return false
    return false;
}
