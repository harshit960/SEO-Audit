// consoleErrorsTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        audits: {
            'errors-in-console': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        message: string;
                    }[];
                };
            };
        };
    };
}

// Function to perform Console Errors Test using PSI data
export function performConsoleErrorsTest(data: any,appendToSuccess:any,appendToFailed:any): { HasConsoleErrors: boolean; ErrorMessages: string[]; Importance: string; Description: string; Link: string } {
    const consoleErrorAudit = data?.lighthouseResult?.audits?.['errors-in-console'];

    // Check if the Console Errors Test audit data is available
    if (!consoleErrorAudit) {
        // Return default data if the audit data is missing
        return {
            HasConsoleErrors: false,
            ErrorMessages: [],
            Importance: 'Low',
            Description: 'No Console Errors Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract console error messages
    const errorMessages = consoleErrorAudit.details.items.map((item: { message: any; }) => item.message);

    // Check if there are any console errors
    const hasConsoleErrors = errorMessages.length > 0;
    hasConsoleErrors ? appendToFailed('Console Errors') : appendToSuccess('Console Errors');

    const importance = hasConsoleErrors ? 'High' : 'Low';
    const description = hasConsoleErrors ? `Console errors were found: ${errorMessages.join(', ')}` : 'No console errors were found.';
    const link = 'https://developer.mozilla.org/en-US/docs/Web/API/Console/error';

    // console.log({
    //     message: 'Console Errors Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        HasConsoleErrors: hasConsoleErrors,
        ErrorMessages: errorMessages,
        Importance: importance,
        Description: description,
        Link: link
    };
}
