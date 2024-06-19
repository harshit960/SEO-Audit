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
export function extractBrokenLinksData(data: any,appendToSuccess:any,appendToFailed:any): { BrokenLinks: { url: string; status: number }[]; Importance: string; Description: string; Link: string } {
    const brokenLinksAudit = data?.lighthouseResult.audits['network-requests'];
    // console.log(brokenLinksAudit);

    let brokenLinks = []
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
    if (brokenLinksAudit && brokenLinksAudit.details && brokenLinksAudit.details.items) {
        for (const request of brokenLinksAudit.details.items) {
            if (request.statusCode === 404) {
                brokenLinks.push(request.url);
            }
        }
    }
    const importance = brokenLinks.length > 0 ? 'High' : 'Low';

    brokenLinks.length > 0 ? appendToFailed('Broken Link Test') : appendToSuccess('Broken Link Test');
    const description = brokenLinks.length > 0 ? `This website has ${brokenLinks.length} broken link(s).` : 'This website does not have any broken links.';
    const link = 'https://developers.google.com/search/console';

    // console.log({
    //     message: 'Broken Links Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        BrokenLinks: brokenLinks.map((link: { url: any; status: any; }) => ({ url: link.url, status: link.status })),
        Importance: importance,
        Description: description,
        Link: link
    };
}

