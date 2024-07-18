// jsExecutionTimeTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        audits: {
            'bootup-time': {
                id: string;
                title: string;
                description: string;
                score: number;
                numericValue: number;
            };
            
        };
    };
}

// Function to perform JavaScript Execution Time Test using PSI data
export function performJSExecutionTimeTest(data: any,appendToSuccess:any,appendToFailed:any): { BootupTime: number;  Importance: string; Description: string; Link: string } {
    const bootupTimeAudit = data?.lighthouseResult?.audits?.['bootup-time'];
    // const scriptBootUpTimeAudit = data?.lighthouseResult?.audits?.['script-boot-up-time'];

    // Check if the required audit data is available
    if (!bootupTimeAudit ) {
        // Return default data if the required audit data is missing
        return {
            BootupTime: 0,
            Importance: 'Low',
            Description: 'No JavaScript Execution Time Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract JavaScript execution time metrics
    const bootupTime = bootupTimeAudit.numericValue || 0;
    // const scriptBootUpTime = scriptBootUpTimeAudit.numericValue || 0;

    // Determine the importance based on JavaScript execution time metrics
    let importance: string;
    if (bootupTime < 1000) {
        importance = 'Low';
    } else if (bootupTime < 3000 ) {
        importance = 'Medium';
    } else {
        importance = 'High';
    }
    importance == 'High' ? appendToFailed('JS Execution Time Test') : appendToSuccess('JS Execution Time Test');

    const description = `JavaScript execution time is optimized with a Bootup Time of ${bootupTime} ms.`;
    const link = 'https://web.dev/bootup-time/';

    // console.log({
    //     message: 'JavaScript Execution Time Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        BootupTime: bootupTime,
        Importance: importance,
        Description: description,
        Link: link
    };
}
