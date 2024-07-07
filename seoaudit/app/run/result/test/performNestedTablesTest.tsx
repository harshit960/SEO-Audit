// nestedTablesTest.ts

interface HTMLData {
    // Define the structure of the HTML data
    htmlContent: string;
}

// Function to perform Nested Tables Test using HTML data
export function performNestedTablesTest(data: any, appendToFailed:any, appendToSuccess:any): { HasNestedTables: boolean; Importance: string; Description: string } {
    const htmlContent = data;

    // Check if the HTML content contains nested tables
    const hasNestedTables = htmlContent.includes('<table') && htmlContent.includes('<table', htmlContent.indexOf('<table') + 1);

    // Determine the importance and description based on nested tables
    const importance = hasNestedTables ? 'Medium' : 'Low';
    !hasNestedTables ? appendToFailed('Nested Tables Test') : appendToSuccess('Nested Tables Test');

    const description = hasNestedTables ? 'The webpage contains nested tables, which can lead to accessibility and performance issues.' : 'No nested tables detected on the webpage.';

    // console.log({
    //     message: 'Nested Tables Test',
    //     description,
    //     importance
    // });

    return {
        HasNestedTables: hasNestedTables,
        Importance: importance,
        Description: description
    };
}
