// mediaQueryResponsiveTest.ts

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
                        mimeType: string;
                    }[];
                };
            };
        };
    };
}

// Function to perform Media Query Responsive Test using PSI data
export function performMediaQueryResponsiveTest(data: any,appendToSuccess:any,appendToFailed:any): { HasMediaQueries: boolean; Importance: string; Description: string } {
    const networkRequestsAudit = data?.lighthouseResult?.audits?.['network-requests'];

    // Check if the network requests audit data is available
    if (!networkRequestsAudit) {
        // Return default data if the audit data is missing
        return {
            HasMediaQueries: false,
            Importance: 'Low',
            Description: 'No network requests audit data found in PSI data.'
        };
    }

    // Find CSS resources fetched by the PSI service
    const cssResources = networkRequestsAudit.details.items.filter((item: { mimeType: string; }) => item.mimeType === 'text/css');

    // Check if any CSS resources contain media queries
    const hasMediaQueries = cssResources.some((resource: { url: string | string[]; }) => resource.url.includes('@media'));
    !hasMediaQueries ? appendToFailed('Media Queries Test') : appendToSuccess('Media Queries Test');

    // Determine the importance and description based on the presence of media queries
    const importance = hasMediaQueries ? 'High' : 'Medium';
    const description = hasMediaQueries ? 'The webpage uses media queries in its CSS, indicating responsive design implementation. This enables the webpage to adapt its layout and styles based on different devices and screen sizes.' : 'No media queries were found in the CSS resources fetched by PSI, which suggests that the webpage may not be fully optimized for responsiveness across various devices and screen sizes. Consider implementing responsive design techniques using media queries.';

    // console.log({
    //     message: 'Media Query Responsive Test',
    //     HasMediaQueries: hasMediaQueries,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        HasMediaQueries: hasMediaQueries,
        Importance: importance,
        Description: description
    };
}
