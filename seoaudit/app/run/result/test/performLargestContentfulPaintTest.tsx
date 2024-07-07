// largestContentfulPaintTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        requestedUrl: string;
        audits: {
            'largest-contentful-paint': {
                id: string;
                title: string;
                description: string;
                score: number;
                numericValue: number;
            };
        };
    };
}

// Function to perform Largest Contentful Paint Test using PSI data
export function performLargestContentfulPaintTest(data: any,appendToSuccess:any,appendToFailed:any): { Lcp: number; Importance: string; Description: string } {
    const lcpAudit = data?.lighthouseResult?.audits?.['largest-contentful-paint'];

    // Check if the Largest Contentful Paint audit data is available
    if (!lcpAudit) {
        // Return default data if the audit data is missing
        return {
            Lcp: -1,
            Importance: 'Low',
            Description: 'No Largest Contentful Paint Test audit data found in PSI data.'
        };
    }

    // Extract LCP value
    const lcp = lcpAudit.numericValue;

    // Determine the importance and description based on the LCP value
    let importance: string;
    let description: string;

    if (lcp <= 2500) {
        importance = 'High';
        description = 'The Largest Contentful Paint (LCP) occurred within 2.5 seconds, indicating excellent page load speed.';
    } else if (lcp <= 4000) {
        importance = 'Medium';
        description = 'The Largest Contentful Paint (LCP) occurred within 4 seconds, indicating acceptable page load speed.';
    } else {
        importance = 'Low';
        description = 'The Largest Contentful Paint (LCP) occurred after 4 seconds, indicating slow page load speed. Consider optimizing content delivery.';
    }
    importance == 'Low' ? appendToFailed('Large Contentful Paint Test') : appendToSuccess('Large Contentful Paint Test');

    // console.log({
    //     message: 'Largest Contentful Paint Test',
    //     Lcp: lcp,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        Lcp: lcp,
        Importance: importance,
        Description: description
    };
}
