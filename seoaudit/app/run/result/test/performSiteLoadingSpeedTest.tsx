// siteLoadingSpeedTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        audits: {
            'first-contentful-paint': {
                id: string;
                title: string;
                description: string;
                score: number;
                numericValue: number;
            };
            'interactive': {
                id: string;
                title: string;
                description: string;
                score: number;
                numericValue: number;
            };
        };
    };
}

// Function to perform Site Loading Speed Test using PSI data
export function performSiteLoadingSpeedTest(data: any,appendToSuccess:any,appendToFailed:any): { TimeToInteractive: number; FirstContentfulPaint: number; Importance: string; Description: string; Link: string } {
    const firstContentfulPaintAudit = data?.lighthouseResult?.audits?.['first-contentful-paint'];
    const interactiveAudit = data?.lighthouseResult?.audits?.['interactive'];

    // Check if the required audit data is available
    if (!firstContentfulPaintAudit || !interactiveAudit) {
        // Return default data if the required audit data is missing
        return {
            TimeToInteractive: 0,
            FirstContentfulPaint: 0,
            Importance: 'Low',
            Description: 'No Site Loading Speed Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract loading speed metrics
    const timeToInteractive = interactiveAudit.numericValue || 0;
    const firstContentfulPaint = firstContentfulPaintAudit.numericValue || 0;

    // Determine the importance based on loading speed metrics
    let importance: string;
    if (timeToInteractive < 2000) {
        importance = 'High';
    } else if (timeToInteractive < 4000) {
        importance = 'Medium';
    } else {
        importance = 'Low';
    }
    importance == 'Low' ? appendToFailed('Site Loading Speed Test') : appendToSuccess('Site Loading Speed Test');

    const description = `The site's loading speed is optimized with a Time to Interactive of ${timeToInteractive} ms and a First Contentful Paint of ${firstContentfulPaint} ms.`;
    const link = 'https://web.dev/first-contentful-paint/';

    // console.log({
    //     message: 'Site Loading Speed Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        TimeToInteractive: timeToInteractive,
        FirstContentfulPaint: firstContentfulPaint,
        Importance: importance,
        Description: description,
        Link: link
    };
}
