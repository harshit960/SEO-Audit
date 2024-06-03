// doctypeTest.ts

interface HTMLData {
    // Define the structure of the HTML data
    htmlContent: string;
}

// Function to perform Doctype Test using HTML data
export function performDoctypeTest(data: HTMLData): { HasCorrectDoctype: boolean; Importance: string; Description: string } {
    const htmlContent = data.htmlContent;

    // Check if the HTML content contains the correct DOCTYPE declaration
    const hasCorrectDoctype = htmlContent.includes('<!DOCTYPE html>');

    // Determine the importance and description based on the correctness of the DOCTYPE declaration
    const importance = hasCorrectDoctype ? 'High' : 'Medium';
    const description = hasCorrectDoctype ? 'The webpage has a correct and valid DOCTYPE declaration, ensuring proper rendering in browsers.' : 'The webpage does not have a correct DOCTYPE declaration, which may result in rendering issues in some browsers.';

    console.log({
        message: 'Doctype Test',
        description,
        importance
    });

    return {
        HasCorrectDoctype: hasCorrectDoctype,
        Importance: importance,
        Description: description
    };
}
