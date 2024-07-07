// googleAnalyticsTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        finalUrl: string;
        requestedUrl: string;
        audits: {
            'network-requests': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        url: string;
                    }[];
                };
            };
        };
    };
}

// Function to perform Google Analytics Test using PSI dataappendToFailed
export function performGoogleAnalyticsTest(data: any,appendToSuccess:any,appendToFailed:any): { HasGoogleAnalytics: boolean; Importance: string; Description: string; Link: string } {
    const networkRequestsAudit = data?.lighthouseResult?.audits?.['network-requests'];

    // Check if the Network Requests audit data is available
    if (!networkRequestsAudit) {
        // Return default data if the audit data is missing
        return {
            HasGoogleAnalytics: false,
            Importance: 'Low',
            Description: 'No Network Requests audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract network request URLs
    const networkRequestURLs = networkRequestsAudit.details.items.map((item: { url: any; }) => item.url);

    // Check if Google Analytics tracking code is present in the network requests
    const hasGoogleAnalytics = networkRequestURLs.some((url: string | string[]) => url.includes('google-analytics.com'));

    const importance = hasGoogleAnalytics ? 'High' : 'Low';
    console.log(hasGoogleAnalytics);
    hasGoogleAnalytics ? appendToSuccess('Google Analytics hhjsma') : appendToFailed('Google Analytics hwyyy');

    // (!hasGoogleAnalytics) ? appendToFailed('Google Analytics') : appendToSuccess('Google Analytics');

    const description = hasGoogleAnalytics ? 'This website has Google Analytics tracking code embedded.' : 'This website does not have Google Analytics tracking code embedded.';
    const link = 'https://analytics.google.com/';

    // console.log({
    //     message: 'Google Analytics Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        HasGoogleAnalytics: hasGoogleAnalytics,
        Importance: importance,
        Description: description,
        Link: link
    };
}
