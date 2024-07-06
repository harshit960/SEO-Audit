// noindexTagTest.ts

interface HTMLData {
    // Define the structure of the HTML data
    htmlContent: string;
}

// Function to perform Noindex Tag Test
export function performNoindexTagTest(data: any,appendToSuccess:any,appendToFailed:any): { HasNoindexTag: boolean; Importance: string; Description: string } {
    const htmlContent = data.htmlContent;

    // Regular expression to match noindex meta tag
    const noindexTagRegex = /<meta\s+name=["']robots["']\s+content=["']noindex["'][^>]*?>/i;

    // Check if noindex meta tag is present in the HTML content
    const hasNoindexTag = noindexTagRegex.test(htmlContent);
    hasNoindexTag ? appendToFailed('No index Tag Test') : appendToSuccess('No index Tag Test');
    // Determine the importance and description based on the presence of noindex tag
    const importance = hasNoindexTag ? 'High' : 'Medium';
    const description = hasNoindexTag ? 'The webpage contains a noindex meta tag, instructing search engine crawlers not to index the page. This could impact the webpage\'s visibility in search engine results.' : 'No noindex meta tag was found on the webpage. Ensure that search engine indexing is intended for the page content.';

    // console.log({
    //     message: 'Noindex Tag Test',
    //     HasNoindexTag: hasNoindexTag,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        HasNoindexTag: hasNoindexTag,
        Importance: importance,
        Description: description
    };
}
