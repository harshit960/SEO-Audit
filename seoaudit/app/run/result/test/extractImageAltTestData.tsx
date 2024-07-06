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
/**
 * Extracts image alt attribute information from PSI data.
 * @param data - The PSI data object.
 * @returns An object containing the extracted image alt attribute information.
 */
export function extractImageAltTestData(data: any,appendToSuccess:any,appendToFailed:any): { Images: string; Description: string; Link: string } {
    const imageAltAudit = data?.lighthouseResult?.audits?.['image-alt'];

    // Check if the Image Alt Test audit data is available
    if (!imageAltAudit) {
        // Return default data if the audit data is missing
        return {
            Images: 'No Image Alt Test audit data found',
            Description: 'No Image Alt Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract image alt attribute information
    const images = imageAltAudit.title;
    const description = imageAltAudit.description;
    const link = 'https://developers.google.com/web/fundamentals/accessibility';

    const status = imageAltAudit.score >= 0.5 ? 'Pass' : 'Fail';
    imageAltAudit.score >= 0.5 ? appendToFailed('Image Alt Test') : appendToSuccess('Image Alt Test');

    
    return {
        Images: images,
        Description: description,
        Link: link
    };
}
