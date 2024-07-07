// faviconTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
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

// Function to perform Favicon Test using PSI data
export function performFaviconTest(data: any,appendToSuccess:any,appendToFailed:any): { HasFavicon: boolean; Importance: string; Description: string; Link: string } {
    const networkRequestsAudit = data?.lighthouseResult?.audits?.['network-requests'];

    // Check if the Network Requests audit data is available
    if (!networkRequestsAudit) {
        // Return default data if the audit data is missing
        return {
            HasFavicon: false,
            Importance: 'Low',
            Description: 'No Network Requests audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract network request URLs
    const networkRequestURLs = networkRequestsAudit.details.items.map((item: { url: any; }) => item.url);

    // Check if a favicon is present in the network requests
    const hasFavicon = networkRequestURLs.some((url: string) => url.toLowerCase().includes('favicon.ico'));

    const importance = hasFavicon ? 'High' : 'Low';
    !hasFavicon ? appendToFailed('Favicon') : appendToSuccess('Favicon');

    const description = hasFavicon ? 'This website has a favicon properly configured.' : 'This website does not have a favicon properly configured.';
    const link = 'https://www.favicon-generator.org/';

    // console.log({
    //     message: 'Favicon Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        HasFavicon: hasFavicon,
        Importance: importance,
        Description: description,
        Link: link
    };
}
