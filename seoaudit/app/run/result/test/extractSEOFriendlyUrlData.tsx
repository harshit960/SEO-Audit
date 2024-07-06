// seoFriendlyUrlTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        audits: {
            'seo-friendly-url': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        url: string;
                        isSEOFriendly: boolean;
                    }[];
                };
            };
        };
    };
}

// Function to extract SEO-friendly URL data from PSI data
export function extractSEOFriendlyUrlData(data: any,appendToSuccess:any,appendToFailed:any): { URLs: { url: string; isSEOFriendly: boolean }[]; Importance: string; Description: string; Link: string } {
    const seoFriendlyUrlAudit = data?.lighthouseResult?.audits?.['seo-friendly-url'];

    // Check if the SEO-friendly URL audit data is available
    if (!seoFriendlyUrlAudit) {
        // Return default data if the audit data is missing
        return {
            URLs: [],
            Importance: 'Low',
            Description: 'No SEO-friendly URL audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract URL information
    const URLs = seoFriendlyUrlAudit.details.items;
    URLs.some((url: { isSEOFriendly: any; }) => !url.isSEOFriendly) ? appendToFailed('SEO Friendly URL') : appendToSuccess('SEO Friendly URL');

    const importance = URLs.some((url: { isSEOFriendly: any; }) => !url.isSEOFriendly) ? 'Low' : 'High';
    const description = importance === 'High' ? 'All URLs on this website are SEO-friendly.' : 'Some URLs on this website are not SEO-friendly.';
    const link = 'https://developers.google.com/search/docs/advanced/robots/intro';

    // console.log({
    //     message: 'SEO Friendly URL Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        URLs: URLs.map((url: { url: any; isSEOFriendly: any; }) => ({ url: url.url, isSEOFriendly: url.isSEOFriendly })),
        Importance: importance,
        Description: description,
        Link: link
    };
}
