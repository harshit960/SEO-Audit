// framesetTest.ts

interface HTMLData {
    // Define the structure of the HTML data
    htmlContent: string;
}

// Function to perform Frameset Test using HTML data
export function performFramesetTest(data: any, appendToFailed:any, appendToSuccess:any): { HasFrameset: boolean; Importance: string; Description: string } {
    const htmlContent = data;

    // Check if the HTML content contains frameset
    const hasFrameset = htmlContent.includes('<frameset');
    !hasFrameset ? appendToFailed('Frameset Test') : appendToSuccess('Frameset Test');

    // Determine the importance and description based on frameset
    const importance = hasFrameset ? 'High' : 'Low';
    const description = hasFrameset ? 'The webpage uses the deprecated frameset element, which is no longer supported in HTML5 and can cause various issues including accessibility problems and SEO challenges.' : 'No frameset detected on the webpage.';

    // console.log({
    //     message: 'Frameset Test',
    //     description,
    //     importance
    // });

    return {
        HasFrameset: hasFrameset,
        Importance: importance,
        Description: description
    };
}
