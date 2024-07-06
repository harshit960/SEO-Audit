// backlinksTest.ts

interface BacklinksData {
    // Define the structure of the backlinks data
    // You may need to adjust this based on the API or service you're using
    totalBacklinks: number;
    referringDomains: number;
    backlinkAnalysis: {
        url: string;
        anchorText: string;
    }[];
}

// Function to perform Backlinks Test using backlinks data
export function performBacklinksTest(backlinksData: any,appendToSuccess:any,appendToFailed:any): { TotalBacklinks: number; ReferringDomains: number; Importance: string; Description: string; Link: string } {
    // Extract backlinks information
    const totalBacklinks = backlinksData.totalBacklinks;
    const referringDomains = backlinksData.referringDomains;

    // Check if there are any backlinks
    const hasBacklinks = totalBacklinks > 0;

    const importance = hasBacklinks ? 'High' : 'Low';
    !hasBacklinks ? appendToFailed('Backlinks') : appendToSuccess('Backlinks');

    const description = hasBacklinks ? `This website has ${totalBacklinks} backlink(s) from ${referringDomains} referring domain(s).` : 'This website does not have any backlinks.';
    const link = 'https://moz.com/learn/seo/backlinks';


    return {
        TotalBacklinks: totalBacklinks,
        ReferringDomains: referringDomains,
        Importance: importance,
        Description: description,
        Link: link
    };
}
