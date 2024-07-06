// mobileSnapshotTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        requestedUrl: string;
        audits: {
            'final-screenshot': {
                id: string;
                title: string;
                description: string;
                details: {
                    screenshot: string;
                    type: string;
                };
            };
        };
    };
}

// Function to perform Mobile Snapshot Test using PSI data
export function performMobileSnapshotTest(data: any,appendToSuccess:any,appendToFailed:any): { IsMobileSnapshotValid: boolean; Importance: string; Description: string } {
    const mobileSnapshotAudit = data?.lighthouseResult?.audits?.['final-screenshot'];

    // Check if the mobile snapshot audit data is available
    if (!mobileSnapshotAudit) {
        // Return default data if the audit data is missing
        return {
            IsMobileSnapshotValid: false,
            Importance: 'Low',
            Description: 'No mobile snapshot audit data found in PSI data.'
        };
    }

    // Check if the mobile snapshot is valid
    const isMobileSnapshotValid = mobileSnapshotAudit.details.type === 'screenshot' && mobileSnapshotAudit.details.screenshot !== '';
    !isMobileSnapshotValid ? appendToFailed('Mobile Snapshot Valid Test') : appendToSuccess('Mobile Snapshot Valid Test');

    // Determine the importance and description based on the validity of the mobile snapshot
    const importance = isMobileSnapshotValid ? 'High' : 'Medium';
    const description = isMobileSnapshotValid ? 'The mobile snapshot captured by PSI is valid, indicating that the mobile version of the webpage is displayed correctly.' : 'The mobile snapshot captured by PSI is not valid, suggesting potential issues with the display of the mobile version of the webpage.';

    // console.log({
    //     message: 'Mobile Snapshot Test',
    //     IsMobileSnapshotValid: isMobileSnapshotValid,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        IsMobileSnapshotValid: isMobileSnapshotValid,
        Importance: importance,
        Description: description
    };
}
