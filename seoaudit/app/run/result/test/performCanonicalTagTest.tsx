// canonicalTagTest.ts

interface HTMLData {
    // Define the structure of the HTML data
    htmlContent: string;
}

// Function to perform Canonical Tag Test
export function performCanonicalTagTest(data: HTMLData): { HasCanonicalTag: boolean; Importance: string; Description: string; CanonicalURL: string | null } {
    const htmlContent = data.htmlContent;

    // Regular expression to match canonical link tag
    const canonicalTagRegex = /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["'][^>]*?>/i;

    // Match the canonical link tag in the HTML content
    const match = canonicalTagRegex.exec(htmlContent);

    // Check if canonical link tag is present
    const hasCanonicalTag = !!match;

    // Extract the canonical URL from the match
    const canonicalURL = match ? match[1] : null;

    // Determine the importance and description based on the presence of canonical tag
    const importance = hasCanonicalTag ? 'High' : 'Medium';
    const description = hasCanonicalTag ? `The webpage contains a canonical link tag pointing to the preferred version of the URL: ${canonicalURL}` : 'No canonical link tag was found on the webpage. Ensure that a preferred version of the URL is specified for indexing purposes.';

    // console.log({
    //     message: 'Canonical Tag Test',
    //     HasCanonicalTag: hasCanonicalTag,
    //     Importance: importance,
    //     Description: description,
    //     CanonicalURL: canonicalURL
    // });

    return {
        HasCanonicalTag: hasCanonicalTag,
        Importance: importance,
        Description: description,
        CanonicalURL: canonicalURL
    };
}
