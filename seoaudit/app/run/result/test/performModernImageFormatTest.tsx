// modernImageFormatTest.ts

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
                        mimeType: string;
                    }[];
                };
            };
        };
    };
}

// Function to perform Modern Image Format Test using PSI data
export function performModernImageFormatTest(data: PSIData): { HasModernImageFormats: boolean; Importance: string; Description: string; Link: string } {
    const networkRequestsAudit = data?.lighthouseResult?.audits?.['network-requests'];

    // Check if the Network Requests audit data is available
    if (!networkRequestsAudit) {
        // Return default data if the audit data is missing
        return {
            HasModernImageFormats: false,
            Importance: 'Low',
            Description: 'No Modern Image Format Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract image URLs and their MIME types
    const imageRequests = networkRequestsAudit.details.items.filter(item => item.mimeType.startsWith('image/'));

    // Check if any image URL uses a modern image format
    const hasModernImageFormats = imageRequests.some(request => isModernImageFormat(request.url));

    // Determine the importance and description based on modern image format usage
    const importance = hasModernImageFormats ? 'High' : 'Low';
    const description = hasModernImageFormats ? 'The webpage is utilizing modern image formats effectively.' : 'No modern image formats detected on the webpage.';
    const link = 'https://web.dev/avif-av1/';

    // console.log({
    //     message: 'Modern Image Format Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        HasModernImageFormats: hasModernImageFormats,
        Importance: importance,
        Description: description,
        Link: link
    };
}

// Function to check if an image URL uses a modern image format
function isModernImageFormat(url: string): boolean {
    // Define modern image formats
    const modernImageFormats = ['image/webp', 'image/avif', 'image/jpeg2000'];
    // Extract the image format from the URL or MIME type
    const format = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    // Check if the image format is modern
    return modernImageFormats.some(modernFormat => format === modernFormat.split('/')[1]);
}
