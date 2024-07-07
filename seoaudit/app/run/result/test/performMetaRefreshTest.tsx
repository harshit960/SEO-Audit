// metaRefreshTest.ts

interface HTMLData {
    // Define the structure of the HTML data
    htmlContent: string;
}

// Function to perform Meta Refresh Test
export function performMetaRefreshTest(data: any, appendToFailed:any, appendToSuccess:any): { HasMetaRefreshTag: boolean; Importance: string; Description: string; RedirectURL: string | null } {
    const htmlContent = data.htmlContent;

    // Regular expression to match meta refresh tag
    const metaRefreshTagRegex = /<meta\s+http-equiv=["']refresh["'][^>]*content=["']\d+;\s*url=([^"']+)["'][^>]*>/i;

    // Match the meta refresh tag in the HTML content
    const match = metaRefreshTagRegex.exec(htmlContent);

    // Check if meta refresh tag is present
    const hasMetaRefreshTag = !!match;

    // Extract the redirect URL from the match
    const redirectURL = match ? match[1] : null;
    !hasMetaRefreshTag ? appendToFailed('Meta Refresh Test') : appendToSuccess('Meta Refresh Test');

    // Determine the importance and description based on the presence of meta refresh tag
    const importance = hasMetaRefreshTag ? 'Medium' : 'Low';
    const description = hasMetaRefreshTag ? `The webpage contains a meta refresh tag, redirecting to the following URL after a specified time interval: ${redirectURL}` : 'No meta refresh tag was found on the webpage. Ensure that automatic redirects are implemented appropriately if needed.';

    // console.log({
    //     message: 'Meta Refresh Test',
    //     HasMetaRefreshTag: hasMetaRefreshTag,
    //     Importance: importance,
    //     Description: description,
    //     RedirectURL: redirectURL
    // });

    return {
        HasMetaRefreshTag: hasMetaRefreshTag,
        Importance: importance,
        Description: description,
        RedirectURL: redirectURL
    };
}
