// jsErrorTest.ts

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

// Function to perform JavaScript Error Test using PSI data
export function performJSErrorTest(data: any,appendToSuccess:any,appendToFailed:any): { HasJSErrors: boolean; ErrorMessages: string[]; Importance: string; Description: string; Link: string } {
    const jsErrorAudit = data?.lighthouseResult?.audits?.['errors-in-console'];

    // Check if the JavaScript Error Test audit data is available
    if (!jsErrorAudit) {
        // Return default data if the audit data is missing
        return {
            HasJSErrors: false,
            ErrorMessages: [],
            Importance: 'Low',
            Description: 'No JavaScript Error Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract JavaScript error messages
    const errorMessages = jsErrorAudit.details.items.map((item: { message: any; }) => item.message);

    // Check if there are any JavaScript errors
    const hasJSErrors = errorMessages.length > 0;
    hasJSErrors ? appendToFailed('JS Error') : appendToSuccess('JS Error');

    const importance = hasJSErrors ? 'High' : 'Low';
    const description = hasJSErrors ? `JavaScript errors were found in the browser console: ${errorMessages.join(', ')}` : 'No JavaScript errors were found in the browser console.';
    const link = 'https://developer.mozilla.org/en-US/docs/Web/API/Console/error';

    // console.log({
    //     message: 'JavaScript Error Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        HasJSErrors: hasJSErrors,
        ErrorMessages: errorMessages,
        Importance: importance,
        Description: description,
        Link: link
    };
}
