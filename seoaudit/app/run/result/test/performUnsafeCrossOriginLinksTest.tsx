// unsafeCrossOriginLinksTest.ts

// Function to perform Unsafe Cross-Origin Links Test
export function performUnsafeCrossOriginLinksTest(htmlContent: string, appendToFailed:any, appendToSuccess:any): { HasUnsafeCrossOriginLinks: boolean; Importance: string; Description: string } {
    // Regular expression to match links using the 'http://' protocol
    const httpLinksRegex = /<a\s+(?:[^>]*?\s+)?href=["']http:\/\/[^"']*["']/gi;

    // Search for links using 'http://' protocol in the HTML content
    const httpLinksMatches = htmlContent.match(httpLinksRegex);

    // Determine if unsafe cross-origin links were found
    const hasUnsafeCrossOriginLinks = httpLinksMatches !== null && httpLinksMatches.length > 0;
    !hasUnsafeCrossOriginLinks ? appendToSuccess('Unsafe Cross-Origin Links Test') : appendToFailed('Unsafe Cross-Origin Links Test');

    // Determine the importance and description based on the presence of unsafe cross-origin links
    const importance = hasUnsafeCrossOriginLinks ? 'Medium' : 'Low';
    const description = hasUnsafeCrossOriginLinks ? 'Unsafe cross-origin links were found on the webpage. Consider updating them to use the HTTPS protocol to prevent mixed content issues and improve security.' : 'No unsafe cross-origin links were found on the webpage, which is a good practice to prevent mixed content issues and improve security.';

    // console.log({
    //     message: 'Unsafe Cross-Origin Links Test',
    //     HasUnsafeCrossOriginLinks: hasUnsafeCrossOriginLinks,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        HasUnsafeCrossOriginLinks: hasUnsafeCrossOriginLinks,
        Importance: importance,
        Description: description
    };
}
