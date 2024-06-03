// brokenLinksTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        audits: {
            'final-screenshot': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        url: string;
                        status: number;
                        isViewedAsFailure: boolean;
                    }[];
                };
            };
        };
    };
}

// Function to extract broken links data from PSI data
export function extractBrokenLinksData(data: PSIData): { BrokenLinks: { url: string; status: number }[]; Importance: string; Description: string; Link: string } {
    const brokenLinksAudit = data?.lighthouseResult?.audits?.['final-screenshot'];

    // Check if the broken links audit data is available
    if (!brokenLinksAudit) {
        // Return default data if broken links audit data is missing
        return {
            BrokenLinks: [],
            Importance: 'Low',
            Description: 'No broken links audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract broken links information
    const brokenLinks = brokenLinksAudit.details.items.filter(link => link.isViewedAsFailure);

    const importance = brokenLinks.length > 0 ? 'High' : 'Low';
    const description = brokenLinks.length > 0 ? `This website has ${brokenLinks.length} broken link(s).` : 'This website does not have any broken links.';
    const link = 'https://developers.google.com/search/console';

    console.log({
        message: 'Broken Links Test',
        description,
        link,
        importance
    });

    return {
        BrokenLinks: brokenLinks.map(link => ({ url: link.url, status: link.status })),
        Importance: importance,
        Description: description,
        Link: link
    };
}
