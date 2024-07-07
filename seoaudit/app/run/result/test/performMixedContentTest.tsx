// mixedContentTest.ts

interface HTMLData {
    // Define the structure of the HTML data
    htmlContent: string;
}

// Function to perform Mixed Content Test using HTML data
export function performMixedContentTest(data: any, appendToFailed:any, appendToSuccess:any): { HasMixedContent:number | boolean; Importance: string; Description: string } {
    const htmlContent = data;

    // Check if the webpage contains mixed content (HTTP resources loaded over HTTPS)
    // const hasMixedContent = htmlContent.match(/<[^>]+(?=src|href)\s+(?:src|href)=(['"]http:\/\/[^'"]+['"])/gi)?.length > 0;
    const hasMixedContent = htmlContent.match(/<[^>]+(?=src|href)\s+(?:src|href)=(['"]http:\/\/[^'"]+['"])/gi)?.length ?? 0 > 0;
    !hasMixedContent ? appendToFailed('Mixed Content Test') : appendToSuccess('Mixed Content Test');


    // Determine the importance and description based on the presence of mixed content
    const importance = hasMixedContent ? 'High' : 'Medium';
    const description = hasMixedContent ? 'The webpage contains mixed content (HTTP resources loaded over HTTPS), posing a security risk. Consider migrating all resources to HTTPS.' : 'No mixed content detected on the webpage.';

    // console.log({
    //     message: 'Mixed Content Test',
    //     HasMixedContent: hasMixedContent,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        HasMixedContent: hasMixedContent,
        Importance: importance,
        Description: description
    };
}
