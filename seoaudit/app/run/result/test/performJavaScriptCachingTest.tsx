// javascriptCachingTest.ts

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

// Function to perform JavaScript Caching Test using PSI data
export function performJavaScriptCachingTest(data: PSIData): { IsJavaScriptCachingOptimized: boolean; Importance: string; Description: string; Link: string } {
    const networkRequestsAudit = data?.lighthouseResult?.audits?.['network-requests'];

    // Check if the Network Requests audit data is available
    if (!networkRequestsAudit) {
        // Return default data if the audit data is missing
        return {
            IsJavaScriptCachingOptimized: false,
            Importance: 'Low',
            Description: 'No JavaScript Caching Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract JavaScript requests
    const javascriptRequests = networkRequestsAudit.details.items.filter(item => item.mimeType === 'application/javascript');

    // Check if JavaScript caching is optimized for all requests
    const isJavaScriptCachingOptimized = javascriptRequests.every(request => isCachingOptimized(request));

    // Determine the importance and description based on JavaScript caching optimization
    const importance = isJavaScriptCachingOptimized ? 'High' : 'Medium';
    const description = isJavaScriptCachingOptimized ? 'JavaScript caching is optimized, improving page load times for returning visitors.' : 'Some JavaScript files on the webpage may not be effectively cached, impacting page load performance for returning visitors.';
    const link = 'https://web.dev/uses-long-cache-ttl/';

    // console.log({
    //     message: 'JavaScript Caching Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        IsJavaScriptCachingOptimized: isJavaScriptCachingOptimized,
        Importance: importance,
        Description: description,
        Link: link
    };
}

// Function to check if JavaScript caching is optimized
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
