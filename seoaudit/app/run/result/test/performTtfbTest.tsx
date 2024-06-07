// ttfbTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        requestedUrl: string;
        audits: {
            'server-response-time': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    overallSavingsMs: number;
                    items: {
                        firstContentfulPaint: number;
                        url: string;
                        totalBytes: number;
                        wastedMs: number;
                    }[];
                };
            };
        };
    };
}

// Function to perform Time To First Byte Test using PSI data
export function performTtfbTest(data: PSIData): { Ttfb: number; Importance: string; Description: string } {
    const serverResponseTimeAudit = data?.lighthouseResult?.audits?.['server-response-time'];

    // Check if the Server Response Time audit data is available
    if (!serverResponseTimeAudit) {
        // Return default data if the audit data is missing
        return {
            Ttfb: -1,
            Importance: 'Low',
            Description: 'No Time To First Byte Test audit data found in PSI data.'
        };
    }

    // Extract TTFB data
    const ttfb = serverResponseTimeAudit.details.items[0].firstContentfulPaint;

    // Determine the importance and description based on the TTFB value
    let importance: string;
    let description: string;

    if (ttfb <= 100) {
        importance = 'High';
        description = 'The Time To First Byte (TTFB) is excellent, indicating fast server response times.';
    } else if (ttfb <= 300) {
        importance = 'Medium';
        description = 'The Time To First Byte (TTFB) is acceptable, but there is room for improvement to enhance server response times.';
    } else {
        importance = 'Low';
        description = 'The Time To First Byte (TTFB) is high, indicating slow server response times. Consider optimizing server performance.';
    }

    // console.log({
    //     message: 'Time To First Byte Test',
    //     Ttfb: ttfb,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        Ttfb: ttfb,
        Importance: importance,
        Description: description
    };
}
