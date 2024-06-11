// robotsTxtTest.ts

// Function to extract robots.txt data from PSI data
export function extractRobotsTxtData(data: any): { HasRobotsTxt: boolean; Importance: string; Description: string; Link: string } {
    const robotsTxtAudit = data?.lighthouseResult?.audits?.["robots-txt"];

    // Check if the robots.txt audit data is available
    if (!robotsTxtAudit) {
        // Return default data if robots.txt audit data is missing
        return {
            HasRobotsTxt: false,
            Importance: 'Low',
            Description: 'No robots.txt audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Check if a robots.txt file is present
    const hasRobotsTxt = robotsTxtAudit.score === 1;

    const importance = hasRobotsTxt ? 'High' : 'Low';
    const description = hasRobotsTxt ? 'This website is using a robots.txt file.' : 'This website is not using a robots.txt file.';
    const link = 'https://www.robotstxt.org/robotstxt.html';

    // console.log({
    //     message: 'Robots.txt Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        HasRobotsTxt: hasRobotsTxt,
        Importance: importance,
        Description: description,
        Link: link
    };
}
