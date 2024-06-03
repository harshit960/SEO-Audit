// nestedTablesTest.ts

interface HTMLData {
    // Define the structure of the HTML data
    htmlContent: string;
}

// Function to perform Nested Tables Test using HTML data
export function performNestedTablesTest(data: HTMLData): { HasNestedTables: boolean; Importance: string; Description: string } {
    const htmlContent = data.htmlContent;

    // Check if the HTML content contains nested tables
    const hasNestedTables = htmlContent.includes('<table') && htmlContent.includes('<table', htmlContent.indexOf('<table') + 1);

    // Determine the importance and description based on nested tables
    const importance = hasNestedTables ? 'Medium' : 'Low';
    const description = hasNestedTables ? 'The webpage contains nested tables, which can lead to accessibility and performance issues.' : 'No nested tables detected on the webpage.';

    console.log({
        message: 'Nested Tables Test',
        description,
        importance
    });

    return {
        HasNestedTables: hasNestedTables,
        Importance: importance,
        Description: description
    };
}
