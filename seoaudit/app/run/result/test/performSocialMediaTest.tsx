// socialMediaTest.ts


// Function to perform Social Media Test using PSI data
export function performSocialMediaTest(data: any,appendToSuccess:any,appendToFailed:any): { HasSocialMediaTags: boolean; Importance: string; Description: string; Link: string } {
    const metaDescriptionAudit = data?.lighthouseResult?.audits?.['meta-description'];
    // const twitterCardAudit = data?.lighthouseResult?.audits?.['has-twitter-card'];
    // const facebookCardAudit = data?.lighthouseResult?.audits?.['has-facebook-card'];

    // Check if the required audits data is available
    if (!metaDescriptionAudit) {
        // Return default data if the required audit data is missing
        return {
            HasSocialMediaTags: false,
            Importance: 'Low',
            Description: 'No Social Media Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Check if social media meta tags are present
    const hasSocialMediaTags = metaDescriptionAudit.score === 1 ;
    hasSocialMediaTags ? appendToFailed('Social Media Test') : appendToSuccess('Social Media Test');

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
