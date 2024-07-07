// urlCanonicalizationTest.ts

interface HTMLData {
    // Define the structure of the HTML data
    htmlContent: string;
}

// Function to perform URL Canonicalization Test using HTML data
export function performUrlCanonicalizationTest(data: any, appendToFailed:any, appendToSuccess:any): { IsCanonicalized: boolean; Importance: string; Description: string } {
    const htmlContent = data;

    // Extract canonical link from the HTML content
    const canonicalLinkMatches = htmlContent.match(/<link[^>]*rel="canonical"([^>]*)>/);

    // Check if a canonical link is found
    const isCanonicalized = !!canonicalLinkMatches;
    !isCanonicalized ? appendToFailed('Canonicalized Test') : appendToSuccess('Canonicalized Test');

    // Determine the importance and description based on the presence of a canonical link
    const importance = isCanonicalized ? 'High' : 'Medium';
    const description = isCanonicalized ? 'The webpage is correctly canonicalized, ensuring proper indexing and avoiding duplicate content issues.' : 'No canonical link found on the webpage. Consider implementing canonicalization for better SEO performance.';

    // console.log({
    //     message: 'URL Canonicalization Test',
    //     IsCanonicalized: isCanonicalized,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        IsCanonicalized: isCanonicalized,
        Importance: importance,
        Description: description
    };
}
