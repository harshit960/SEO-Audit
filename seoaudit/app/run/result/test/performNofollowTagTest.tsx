// nofollowTagTest.ts

interface HTMLData {
    // Define the structure of the HTML data
    htmlContent: string;
}

// Function to perform Nofollow Tag Test
export function performNofollowTagTest(data: any, appendToFailed:any, appendToSuccess:any): { HasNofollowTag: boolean; Importance: string; Description: string } {
    const htmlContent = data.htmlContent;

    // Regular expression to match <a> tags with rel="nofollow" attribute
    const nofollowTagRegex = /<a[^>]*\srel=["']nofollow["'][^>]*>/gi;

    // Check if any <a> tags with rel="nofollow" attribute are present in the HTML content
    const hasNofollowTag = nofollowTagRegex.test(htmlContent);
    !hasNofollowTag ? appendToFailed('Nofollow Tag Test') : appendToSuccess('Nofollow Tag Test');

    // Determine the importance and description based on the presence of nofollow tag
    const importance = hasNofollowTag ? 'Medium' : 'Low';
    const description = hasNofollowTag ? 'The webpage contains one or more <a> tags with rel="nofollow" attribute. This may impact the way search engines crawl and index the linked pages.' : 'No <a> tags with rel="nofollow" attribute were found on the webpage. Ensure that links are appropriately marked as nofollow if needed to control search engine crawling behavior.';

    // console.log({
    //     message: 'Nofollow Tag Test',
    //     HasNofollowTag: hasNofollowTag,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        HasNofollowTag: hasNofollowTag,
        Importance: importance,
        Description: description
    };
}
