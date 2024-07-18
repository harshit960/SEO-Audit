// pageObjectsTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        audits: {
            'resource-summary': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        resourceType: string;
                        size: number;
                        count: number;
                    }[];
                };
            };
            // Add more audits if needed for detailed analysis
        };
    };
}

// Function to perform Page Objects Test using PSI data
export function performPageObjectsTest(data: any,appendToSuccess:any,appendToFailed:any): { ResourceSummary: { ResourceType: string; Size: number; Count: number }[]; Importance: string; Description: string; Link: string } {
    const resourceSummaryAudit = data?.lighthouseResult?.audits?.['resource-summary'];

    // Check if the Resource Summary audit data is available
    if (!resourceSummaryAudit) {
        // Return default data if the audit data is missing
        return {
            ResourceSummary: [],
            Importance: 'Low',
            Description: 'No Page Objects Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract detailed data about page objects
    const resourceSummary = resourceSummaryAudit.details.items.map((item: { resourceType: any; size: any; count: any; }) => ({
        ResourceType: item.resourceType,
        Size: item.size,
        Count: item.count
    }));

    // Analyze the data to determine the importance and description
    // You can add your own logic based on the specific requirements and goals of your project

    // For example, you might consider the count and size of different resource types,
    // and determine if they meet certain thresholds for performance and optimization.

    // As an example, let's assume we are primarily interested in image resources and their sizes:

    const imageResources = resourceSummary.filter((item: { ResourceType: string; }) => item.ResourceType === 'image');
    const totalImageCount = imageResources.reduce((sum: any, item: { Count: any; }) => sum + item.Count, 0);
    const totalImageSize = imageResources.reduce((sum: any, item: { Size: any; }) => sum + item.Size, 0);

    let importance: string;
    let description: string;

    if (totalImageCount === 0 || Number.isNaN(totalImageCount)) {
        importance = 'Low';
        description = 'No image resources found on the page.';
    } else if (totalImageSize < 1024 * 1024) { // Assuming threshold of 1 MB for total image size
        importance = 'Medium';
        description = `Total ${totalImageCount} images found on the page with a combined size of ${totalImageSize} bytes.`;
    } else {
        importance = 'High';
        description = `Total ${totalImageCount} images found on the page with a combined size of ${totalImageSize} bytes, which may impact performance.`;
    }

    const link = 'https://developers.google.com/web/fundamentals/performance/get-started';

    // console.log({
    //     message: 'Page Objects Test',
    //     description,
    //     link,
    //     importance
    // });
    importance == 'Low' ? appendToFailed('Image Object Test') : appendToSuccess('Image Object Test');

    return {
        ResourceSummary: resourceSummary,
        Importance: importance,
        Description: description,
        Link: link
    };
}
