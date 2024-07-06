// urlRedirectsTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        requestedUrl: string;
        audits: {
            redirects: {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    chains: {
                        finalUrl: string;
                        redirectedUrl: string;
                        responseStatusCode: number;
                    }[];
                };
            };
        };
    };
}

// Function to perform URL Redirects Test using PSI data
export function performUrlRedirectsTest(data: any,appendToSuccess:any,appendToFailed:any): { HasRedirects: boolean; Importance: string; Description: string } {
    const redirectsAudit = data?.lighthouseResult?.audits?.redirects;

    // Check if the Redirects audit data is available
    if (!redirectsAudit) {
        // Return default data if the audit data is missing
        return {
            HasRedirects: false,
            Importance: 'Low',
            Description: 'No URL Redirects Test audit data found in PSI data.'
        };
    }

    // Extract redirect chains
    const redirectChains = redirectsAudit.details.items;

    // Check if there are any redirect chains
    const hasRedirects = redirectChains.length > 0;
    hasRedirects ? appendToFailed('Redirects Test') : appendToSuccess('Redirects Test');

    // Determine the importance and description based on the presence of redirects
    const importance = hasRedirects ? 'Medium' : 'Low';
    const description = hasRedirects ? 'The webpage contains URL redirects, which may affect performance and user experience.' : 'No URL redirects detected on the webpage.';

    // console.log({
    //     message: 'URL Redirects Test',
    //     description,
    //     importance
    // });

    return {
        HasRedirects: hasRedirects,
        Importance: importance,
        Description: description
    };
}
