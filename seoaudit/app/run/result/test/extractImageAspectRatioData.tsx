// imageAspectRatioTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        audits: {
            'image-aspect-ratio': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        url: string;
                        aspectRatio: number;
                        isAspectRatioOptimized: boolean;
                    }[];
                };
            };
        };
    };
}

// Function to extract Image Aspect Ratio Test data from PSI data
export function extractImageAspectRatioData(data: any,appendToSuccess:any,appendToFailed:any): { Images: { url: string; aspectRatio: number; isAspectRatioOptimized: boolean }[]; Importance: string; Description: string; Link: string } {
    const imageAspectRatioAudit = data?.lighthouseResult?.audits?.['image-aspect-ratio'];

    // Check if the Image Aspect Ratio Test audit data is available
    if (!imageAspectRatioAudit) {
        // Return default data if the audit data is missing
        return {
            Images: [],
            Importance: 'Low',
            Description: 'No Image Aspect Ratio Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract image aspect ratio information
    const images = imageAspectRatioAudit.details.items;

    // Check if all images have optimized aspect ratios
    const allImagesHaveOptimizedAspectRatio = images.every((image: { isAspectRatioOptimized: any; }) => image.isAspectRatioOptimized);
    allImagesHaveOptimizedAspectRatio ? appendToFailed('Image Aspect Ratio') : appendToSuccess('Image Aspect Ratio');

    const importance = allImagesHaveOptimizedAspectRatio ? 'High' : 'Low';
    const description = allImagesHaveOptimizedAspectRatio ? 'All images on this website have optimized aspect ratios.' : 'Some images on this website do not have optimized aspect ratios.';
    const link = 'https://developers.google.com/speed/docs/insights/OptimizeImages#image_aspect_ratio';

    // console.log({
    //     message: 'Image Aspect Ratio Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        Images: images.map((image: { url: any; aspectRatio: any; isAspectRatioOptimized: any; }) => ({ url: image.url, aspectRatio: image.aspectRatio, isAspectRatioOptimized: image.isAspectRatioOptimized })),
        Importance: importance,
        Description: description,
        Link: link
    };
}
