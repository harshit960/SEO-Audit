// imageMetadataTest.ts

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
                        resourceSize: number;
                        mimeType: string;
                    }[];
                };
            };
        };
    };
}

// Function to perform Image Metadata Test using PSI data
export function performImageMetadataTest(data: PSIData): { HasOptimizedImageMetadata: boolean; Importance: string; Description: string; Link: string } {
    const networkRequestsAudit = data?.lighthouseResult?.audits?.['network-requests'];

    // Check if the Network Requests audit data is available
    if (!networkRequestsAudit) {
        // Return default data if the audit data is missing
        return {
            HasOptimizedImageMetadata: false,
            Importance: 'Low',
            Description: 'No Image Metadata Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract image URLs and their MIME types
    const imageRequests = networkRequestsAudit.details.items.filter(item => item.mimeType.startsWith('image/'));

    // Check if any image URL has optimized metadata
    const hasOptimizedImageMetadata = imageRequests.every(request => hasOptimizedMetadata(request.url));

    // Determine the importance and description based on image metadata optimization
    const importance = hasOptimizedImageMetadata ? 'High' : 'Low';
    const description = hasOptimizedImageMetadata ? 'The webpage contains images with optimized metadata.' : 'Some images on the webpage have metadata that can be further optimized.';
    const link = 'https://developers.google.com/speed/docs/insights/OptimizeImages';

    // console.log({
    //     message: 'Image Metadata Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        HasOptimizedImageMetadata: hasOptimizedImageMetadata,
        Importance: importance,
        Description: description,
        Link: link
    };
}

// Function to check if an image has optimized metadata
function hasOptimizedMetadata(url: string): boolean {
    // Here you would implement your logic to check for optimized metadata
    // You might use a library to parse the image metadata and check for unnecessary or excessive information
    // For simplicity, this function always returns true
    return true;
}
