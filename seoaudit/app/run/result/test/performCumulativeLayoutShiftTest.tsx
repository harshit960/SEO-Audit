// cumulativeLayoutShiftTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        requestedUrl: string;
        audits: {
            'cumulative-layout-shift': {
                id: string;
                title: string;
                description: string;
                score: number;
                numericValue: number;
            };
        };
    };
}

// Function to perform Cumulative Layout Shift Test using PSI data
export function performCumulativeLayoutShiftTest(data: any,appendToSuccess:any,appendToFailed:any): { Cls: number; Importance: string; Description: string } {
    const clsAudit = data?.lighthouseResult?.audits?.['cumulative-layout-shift'];

    // Check if the Cumulative Layout Shift audit data is available
    if (!clsAudit) {
        // Return default data if the audit data is missing
        return {
            Cls: -1,
            Importance: 'Low',
            Description: 'No Cumulative Layout Shift Test audit data found in PSI data.'
        };
    }

    // Extract CLS value
    const cls = clsAudit.numericValue;

    // Determine the importance and description based on the CLS value
    let importance: string;
    let description: string;

    if (cls <= 0.1) {
        importance = 'High';
        description = 'The Cumulative Layout Shift (CLS) score is excellent, indicating excellent visual stability.';
    } else if (cls <= 0.25) {
        importance = 'Medium';
        description = 'The Cumulative Layout Shift (CLS) score is acceptable, but there is room for improvement to enhance visual stability.';
    } else {
        importance = 'Low';
        description = 'The Cumulative Layout Shift (CLS) score is high, indicating poor visual stability. Consider optimizing layout rendering.';
    }
    importance == 'Low' ? appendToFailed('Cumulative Layout Shift Test') : appendToSuccess('Cumulative Layout Shift Test');

    // console.log({
    //     message: 'Cumulative Layout Shift Test',
    //     Cls: cls,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        Cls: cls,
        Importance: importance,
        Description: description
    };
}
