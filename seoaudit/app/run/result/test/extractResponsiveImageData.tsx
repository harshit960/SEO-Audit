// responsiveImageTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        audits: {
            'uses-responsive-images': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        url: string;
                        isResponsive: boolean;
                    }[];
                };
            };
        };
    };
}

// Function to extract Responsive Image Test data from PSI data
export function extractResponsiveImageData(data: any,appendToSuccess:any,appendToFailed:any): { Images: { url: string; isResponsive: boolean }[]; Importance: string; Description: string; Link: string } {
    const responsiveImageAudit = data?.lighthouseResult?.audits?.['uses-responsive-images'];

    // Check if the Responsive Image Test audit data is available
    if (!responsiveImageAudit) {
        // Return default data if the audit data is missing
        return {
            Images: [],
            Importance: 'Low',
            Description: 'No Responsive Image Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract responsive image information
    const images = responsiveImageAudit.details.items;

    // Check if all images are responsive
    const allImagesAreResponsive = images.every((image: { isResponsive: any; }) => image.isResponsive);
    allImagesAreResponsive ? appendToFailed('Responsive Image Test') : appendToSuccess('Responsive Image Test');

    const importance = allImagesAreResponsive ? 'High' : 'Low';
    const description = allImagesAreResponsive ? 'All images on this website are responsive.' : 'Some images on this website are not responsive.';
    const link = 'https://developers.google.com/web/fundamentals/responsive-images';

    // console.log({
    //     message: 'Responsive Image Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        Images: images.map((image: { url: any; isResponsive: any; }) => ({ url: image.url, isResponsive: image.isResponsive })),
        Importance: importance,
        Description: description,
        Link: link
    };
}
