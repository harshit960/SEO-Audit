// socialMediaTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        finalUrl: string;
        requestedUrl: string;
        audits: {
            'meta-description': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        name: string;
                        content: string;
                    }[];
                };
            };
            'has-twitter-card': {
                id: string;
                title: string;
                description: string;
                score: number;
            };
            'has-facebook-card': {
                id: string;
                title: string;
                description: string;
                score: number;
            };
        };
    };
}

// Function to perform Social Media Test using PSI data
export function performSocialMediaTest(data: PSIData): { HasSocialMediaTags: boolean; Importance: string; Description: string; Link: string } {
    const metaDescriptionAudit = data?.lighthouseResult?.audits?.['meta-description'];
    const twitterCardAudit = data?.lighthouseResult?.audits?.['has-twitter-card'];
    const facebookCardAudit = data?.lighthouseResult?.audits?.['has-facebook-card'];

    // Check if the required audits data is available
    if (!metaDescriptionAudit || !twitterCardAudit || !facebookCardAudit) {
        // Return default data if the required audit data is missing
        return {
            HasSocialMediaTags: false,
            Importance: 'Low',
            Description: 'No Social Media Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Check if social media meta tags are present
    const hasSocialMediaTags = metaDescriptionAudit.score === 1 && twitterCardAudit.score === 1 && facebookCardAudit.score === 1;

    const importance = hasSocialMediaTags ? 'High' : 'Low';
    const description = hasSocialMediaTags ? 'The website has properly configured social media meta tags.' : 'The website does not have properly configured social media meta tags.';
    const link = 'https://developers.facebook.com/docs/sharing/webmasters/';
    
    console.log({
        message: 'Social Media Test',
        description,
        link,
        importance
    });

    return {
        HasSocialMediaTags: hasSocialMediaTags,
        Importance: importance,
        Description: description,
        Link: link
    };
}
