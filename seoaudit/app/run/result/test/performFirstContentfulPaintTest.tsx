// firstContentfulPaintTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        requestedUrl: string;
        audits: {
            'first-contentful-paint': {
                id: string;
                title: string;
                description: string;
                score: number;
                numericValue: number;
            };
        };
    };
}

// Function to perform First Contentful Paint Test using PSI data
export function performFirstContentfulPaintTest(data: any,appendToSuccess:any,appendToFailed:any): { Fcp: number; Importance: string; Description: string } {
    const fcpAudit = data?.lighthouseResult?.audits?.['first-contentful-paint'];

    // Check if the First Contentful Paint audit data is available
    if (!fcpAudit) {
        // Return default data if the audit data is missing
        return {
            Fcp: -1,
            Importance: 'Low',
            Description: 'No First Contentful Paint Test audit data found in PSI data.'
        };
    }

    // Extract FCP value
    const fcp = fcpAudit.numericValue;

    // Determine the importance and description based on the FCP value
    let importance: string;
    let description: string;

    if (fcp <= 1000) {
        importance = 'High';
        description = 'The First Contentful Paint (FCP) occurred within one second, indicating excellent page load speed.';
    } else if (fcp <= 3000) {
        importance = 'Medium';
        description = 'The First Contentful Paint (FCP) occurred within three seconds, indicating acceptable page load speed.';
    } else {
        importance = 'Low';
        description = 'The First Contentful Paint (FCP) occurred after three seconds, indicating slow page load speed. Consider optimizing content delivery.';
    }
    importance == 'Low' ? appendToFailed('First Contentful Paint Test') : appendToSuccess('First Contentful Paint Test');

    // console.log({
    //     message: 'First Contentful Paint Test',
    //     Fcp: fcp,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        Fcp: fcp,
        Importance: importance,
        Description: description
    };
}
