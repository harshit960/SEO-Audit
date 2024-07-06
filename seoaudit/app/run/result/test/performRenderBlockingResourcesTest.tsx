// renderBlockingResourcesTest.ts

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

// Function to perform Render Blocking Resources Test using PSI data
export function performRenderBlockingResourcesTest(data: any,appendToSuccess:any,appendToFailed:any): { HasRenderBlockingResources: boolean; Importance: string; Description: string; Link: string } {
    const networkRequestsAudit = data?.lighthouseResult?.audits?.['network-requests'];

    // Check if the Network Requests audit data is available
    if (!networkRequestsAudit) {
        // Return default data if the audit data is missing
        return {
            HasRenderBlockingResources: false,
            Importance: 'Low',
            Description: 'No Render Blocking Resources Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract CSS and JavaScript requests
    const cssRequests = networkRequestsAudit.details.items.filter((item: { mimeType: string; }) => item.mimeType === 'text/css');
    const jsRequests = networkRequestsAudit.details.items.filter((item: { mimeType: string; }) => item.mimeType === 'application/javascript');

    // Check if there are any render-blocking resources
    const hasRenderBlockingResources = cssRequests.length > 0 || jsRequests.length > 0;
    hasRenderBlockingResources ? appendToFailed('Render Blocking Resources Test') : appendToSuccess('Render Blocking Resources Test');

    // Determine the importance and description based on render-blocking resources
    const importance = hasRenderBlockingResources ? 'High' : 'Low';
    const description = hasRenderBlockingResources ? 'There are render-blocking resources on the webpage, which may delay page rendering and impact user experience.' : 'No render-blocking resources detected on the webpage.';
    const link = 'https://web.dev/render-blocking-resources/';

    // console.log({
    //     message: 'Render Blocking Resources Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        HasRenderBlockingResources: hasRenderBlockingResources,
        Importance: importance,
        Description: description,
        Link: link
    };
}
