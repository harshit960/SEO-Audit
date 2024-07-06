// cdnUsageTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        requestedUrl: string;
        audits: {
            'resource-summary': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        resourceType: string;
                        url: string;
                    }[];
                };
            };
        };
    };
}

// Function to perform CDN Usage Test using PSI data
export function performCDNUsageTest(data: any,appendToSuccess:any,appendToFailed:any): { HasCDNUsage: boolean; Importance: string; Description: string; Link: string } {
    const resourceSummaryAudit = data?.lighthouseResult?.audits?.['network-requests'];

    // Check if the Resource Summary audit data is available
    if (!resourceSummaryAudit) {
        // Return default data if the audit data is missing
        return {
            HasCDNUsage: false,
            Importance: 'Low',
            Description: 'No CDN Usage Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract resource URLs
    const resourceUrls = resourceSummaryAudit.details.items.map((item: { url: any; }) => item.url);

    // Check if any resource URL belongs to a known CDN domain
    const hasCDNUsage = resourceUrls.some((url: string) => isCDNUrl(url));
    !hasCDNUsage ? appendToFailed('CDN Usage Test') : appendToSuccess('CDN Usage Test');

    // Determine the importance and description based on CDN usage
    const importance = hasCDNUsage ? 'High' : 'Low';
    const description = hasCDNUsage ? 'The webpage is utilizing a Content Delivery Network (CDN) effectively.' : 'No CDN usage detected on the webpage.';
    const link = 'https://www.cloudflare.com/learning/cdn/what-is-a-cdn/';

    // console.log({
    //     message: 'CDN Usage Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        HasCDNUsage: hasCDNUsage,
        Importance: importance,
        Description: description,
        Link: link
    };
}

// Function to check if a URL belongs to a known CDN domain
function isCDNUrl(url: string): boolean {
    // Define known CDN domains
    const cdnDomains = [
        'maxcdn.bootstrapcdn.com', // Example: Bootstrap CDN
        'cdnjs.cloudflare.com',      // Example: Cloudflare CDN
        // Add more known CDN domains as needed
    ];

    // Check if the URL belongs to any known CDN domain
    return cdnDomains.some(domain => url.includes(domain));
}
