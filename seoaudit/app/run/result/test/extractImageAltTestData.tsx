// imageAltTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        audits: {
            'image-alt': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        url: string;
                        alt: string;
                        isAltPresent: boolean;
                    }[];
                };
            };
        };
    };
}

// Function to extract Image Alt Test data from PSI data
export function extractImageAltTestData(data: PSIData): { Images: { url: string; alt: string; isAltPresent: boolean }[]; Importance: string; Description: string; Link: string } {
    const imageAltAudit = data?.lighthouseResult?.audits?.['image-alt'];

    // Check if the Image Alt Test audit data is available
    if (!imageAltAudit) {
        // Return default data if the audit data is missing
        return {
            Images: [],
            Importance: 'Low',
            Description: 'No Image Alt Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract image alt attribute information
    const images = imageAltAudit.details.items;

    // Check if all images have alt attributes
    const allImagesHaveAlt = images.every(image => image.isAltPresent);

    const importance = allImagesHaveAlt ? 'High' : 'Low';
    const description = allImagesHaveAlt ? 'All images on this website have appropriate alt attributes.' : 'Some images on this website do not have appropriate alt attributes.';
    const link = 'https://developers.google.com/web/fundamentals/accessibility';

    // console.log({
    //     message: 'Image Alt Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        Images: images.map(image => ({ url: image.url, alt: image.alt, isAltPresent: image.isAltPresent })),
        Importance: importance,
        Description: description,
        Link: link
    };
}
