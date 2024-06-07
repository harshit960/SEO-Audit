// javascriptMinificationTest.ts

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

// Function to perform JavaScript Minification Test using PSI data
export function performJavaScriptMinificationTest(data: PSIData): { IsJavaScriptMinified: boolean; Importance: string; Description: string; Link: string } {
    const networkRequestsAudit = data?.lighthouseResult?.audits?.['network-requests'];

    // Check if the Network Requests audit data is available
    if (!networkRequestsAudit) {
        // Return default data if the audit data is missing
        return {
            IsJavaScriptMinified: false,
            Importance: 'Low',
            Description: 'No JavaScript Minification Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract JavaScript requests
    const javascriptRequests = networkRequestsAudit.details.items.filter(item => item.mimeType === 'application/javascript');

    // Check if JavaScript is minified for all requests
    const isJavaScriptMinified = javascriptRequests.every(request => isMinified(request));

    // Determine the importance and description based on JavaScript minification
    const importance = isJavaScriptMinified ? 'High' : 'Medium';
    const description = isJavaScriptMinified ? 'JavaScript is minified, reducing file size and improving page load times.' : 'Some JavaScript files on the webpage may not be minified, impacting page load performance.';
    const link = 'https://web.dev/minify-javascript/';

    // console.log({
    //     message: 'JavaScript Minification Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        IsJavaScriptMinified: isJavaScriptMinified,
        Importance: importance,
        Description: description,
        Link: link
    };
}

// Function to check if JavaScript is minified
function isMinified(request: any): boolean {
    // Extract the content of the JavaScript file
    const javascriptContent = request.responseHeaders.find((header: { name: string; }) => header.name.toLowerCase() === 'content-length');

    // Check if the content length of the minified JavaScript is significantly smaller than the original
    if (javascriptContent) {
        const originalSize = Number(javascriptContent.value);
        // Here you would define a threshold to determine if the file is minified
        const minifiedThreshold = 0.8; // For example, consider minified if it's at least 80% smaller
        // You may adjust the threshold according to your specific requirements
        return request.responseHeaders.find((header: { name: string; }) => header.name.toLowerCase() === 'content-length') / originalSize < minifiedThreshold;
    }

    // If no content length found, assume it's not minified
    return false;
}
