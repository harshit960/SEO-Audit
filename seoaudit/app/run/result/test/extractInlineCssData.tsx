// inlineCssTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        audits: {
            'uses-inline-css': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        url: string;
                        totalBytes: number;
                        totalKb: number;
                        totalCssResources: number;
                    }[];
                };
            };
        };
    };
}

// Function to extract Inline CSS Test data from PSI data
export function extractInlineCssData(data: any,appendToSuccess:any,appendToFailed:any): { TotalCssResources: number; TotalCssBytes: number; TotalCssKb: number; Importance: string; Description: string; Link: string } {
    const inlineCssAudit = data?.lighthouseResult?.audits?.['uses-inline-css'];

    // Check if the Inline CSS Test audit data is available
    if (!inlineCssAudit) {
        // Return default data if the audit data is missing
        return {
            TotalCssResources: 0,
            TotalCssBytes: 0,
            TotalCssKb: 0,
            Importance: 'Low',
            Description: 'No Inline CSS Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract inline CSS information
    const totalCssResources = inlineCssAudit.details.items[0]?.totalCssResources ?? 0;
    const totalCssBytes = inlineCssAudit.details.items[0]?.totalBytes ?? 0;
    const totalCssKb = inlineCssAudit.details.items[0]?.totalKb ?? 0;

    // Check if inline CSS is used sparingly or minimally
    const importance = totalCssResources > 0 ? 'Low' : 'High';
    totalCssResources ? appendToFailed('Inline CSS') : appendToSuccess('Inline CSS');

    const description = totalCssResources > 0 ? 'This website uses inline CSS. Consider optimizing CSS delivery by removing or minimizing inline CSS.' : 'This website does not use inline CSS, which is good for performance.';
    const link = 'https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery#inline_css';

    // console.log({
    //     message: 'Inline CSS Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        TotalCssResources: totalCssResources,
        TotalCssBytes: totalCssBytes,
        TotalCssKb: totalCssKb,
        Importance: importance,
        Description: description,
        Link: link
    };
}
