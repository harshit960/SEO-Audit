// flashTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        requestedUrl: string;
        audits: {
            'legacy-javascript': {
                id: string;
                title: string;
                description: string;
                score: number;
            };
            // You can add more audits related to Flash content if available
        };
    };
}

// Function to perform Flash Test using PSI data
export function performFlashTest(data: any,appendToSuccess:any,appendToFailed:any): { HasFlashContent: boolean; Importance: string; Description: string; Link: string } {
    const legacyJavascriptAudit = data?.lighthouseResult?.audits?.['legacy-javascript'];

    // Check if the Legacy JavaScript audit data is available
    if (!legacyJavascriptAudit) {
        // Return default data if the audit data is missing
        return {
            HasFlashContent: false,
            Importance: 'Low',
            Description: 'No Flash Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Determine if there's Flash content based on the presence of legacy JavaScript
    const hasFlashContent = legacyJavascriptAudit.score !== 1;
    hasFlashContent ? appendToFailed('Flash Test') : appendToSuccess('Flash Test');

    // Determine the importance and description based on the presence of Flash content
    const importance = hasFlashContent ? 'High' : 'Low';
    const description = hasFlashContent ? 'The webpage contains Flash content, which is deprecated and not recommended for use.' : 'No Flash content found on the webpage.';
    const link = 'https://www.adobe.com/products/flashplayer/end-of-life.html';

    // console.log({
    //     message: 'Flash Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        HasFlashContent: hasFlashContent,
        Importance: importance,
        Description: description,
        Link: link
    };
}
