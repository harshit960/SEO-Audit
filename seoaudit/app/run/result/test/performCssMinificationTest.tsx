// cssMinificationTest.ts

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

// Function to perform CSS Minification Test using PSI data
export function performCssMinificationTest(data: any): { IsCssMinified: boolean; Importance: string; Description: string; Link: string } {
    const networkRequestsAudit = data?.lighthouseResult?.audits?.['network-requests'];

    // Check if the Network Requests audit data is available
    if (!networkRequestsAudit) {
        // Return default data if the audit data is missing
        return {
            IsCssMinified: false,
            Importance: 'Low',
            Description: 'No CSS Minification Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract CSS requests
    const cssRequests = networkRequestsAudit.details.items.filter((item: { mimeType: string; }) => item.mimeType === 'text/css');
    console.log(cssRequests);

    // Check if CSS is minified for all requests
    const isCssMinified = cssRequests.every((request: any) => isMinified(request));

    // Determine the importance and description based on CSS minification
    const importance = isCssMinified ? 'High' : 'Medium';
    const description = isCssMinified ? 'CSS is minified, reducing file size and improving page load times.' : 'Some CSS files on the webpage may not be minified, impacting page load performance.';
    const link = 'https://web.dev/minify-css/';

    // console.log({
    //     message: 'CSS Minification Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        IsCssMinified: isCssMinified,
        Importance: importance,
        Description: description,
        Link: link
    };
}

// Function to check if CSS is minified
function isMinified(request: any): boolean {
    // Extract the content of the CSS file
    const cssContent = request.responseHeaders.find((header: { name: string; }) => header.name.toLowerCase() === 'content-length');

    // Check if the content length of the minified CSS is significantly smaller than the original
    if (cssContent) {
        const originalSize = Number(cssContent.value);
        // Here you would define a threshold to determine if the file is minified
        const minifiedThreshold = 0.8; // For example, consider minified if it's at least 80% smaller
        // You may adjust the threshold according to your specific requirements
        return request.responseHeaders.find((header: { name: string; }) => header.name.toLowerCase() === 'content-length') / originalSize < minifiedThreshold;
    }

    // If no content length found, assume it's not minified
    return false;
}
