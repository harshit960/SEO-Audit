// sitemapTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        audits: {
            sitemap: {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        label: string;
                        value: string;
                    }[];
                };
            };
        };
    };
}

// Function to extract sitemap data from PSI data
export function extractSitemapData(data: any): { HasSitemap: boolean; Importance: string; Description: string; Link: string } {
    const sitemapAudit = data?.lighthouseResult?.audits?.["robots-txt"];

    // Check if the sitemap audit data is available
    if (!sitemapAudit) {
        // Return default data if sitemap audit data is missing
        return {
            HasSitemap: false,
            Importance: 'Low',
            Description: 'No sitemap audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Check if a sitemap is present
    const hasSitemap = sitemapAudit.score === 1;

    const importance = hasSitemap ? 'High' : 'Low';
    const description = hasSitemap ? 'This website has a sitemap.' : 'This website does not have a sitemap.';
    const link = 'https://developers.google.com/search/docs/advanced/sitemaps/build-sitemap';

    // console.log({
    //     message: 'Sitemap Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        HasSitemap: hasSitemap,
        Importance: importance,
        Description: description,
        Link: link
    };
}
