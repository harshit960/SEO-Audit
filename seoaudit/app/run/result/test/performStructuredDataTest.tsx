// structuredDataTest.ts

interface HTMLData {
    // Define the structure of the HTML data
    htmlContent: string;
}

// Function to perform Structured Data Test
export function performStructuredDataTest(data: any,appendToSuccess:any,appendToFailed:any): { HasStructuredData: boolean; Importance: string; Description: string } {
    const htmlContent = data.htmlContent;

    // Regular expressions to match JSON-LD, RDFa, and Microdata
    const jsonLdRegex = /<script type="application\/ld\+json">(.*?)<\/script>/gis;
    const rdfaRegex = /<[^>]+?property=['"](.*?)['"][^>]*>(.*?)<\/[^>]+?>/gis;
    const microdataRegex = /<[^>]+?itemprop=['"](.*?)['"][^>]*>(.*?)<\/[^>]+?>/gis;

    // Check if structured data is present in the HTML content
    const hasStructuredData = jsonLdRegex.test(htmlContent) || rdfaRegex.test(htmlContent) || microdataRegex.test(htmlContent);
    hasStructuredData ? appendToFailed('Structured Data Test') : appendToSuccess('Structured Data Test');

    // Determine the importance and description based on the presence of structured data
    const importance = hasStructuredData ? 'High' : 'Low';
    const description = hasStructuredData ? 'Structured data was found on the webpage, providing search engines with specific information about the content. This can improve the webpage\'s visibility and appearance in search results.' : 'No structured data was found on the webpage, which may limit the webpage\'s visibility and appearance in search results. Consider adding structured data to provide search engines with more information about the content.';

    // console.log({
    //     message: 'Structured Data Test',
    //     HasStructuredData: hasStructuredData,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        HasStructuredData: hasStructuredData,
        Importance: importance,
        Description: description
    };
}
