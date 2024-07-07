// htmlPageSizeTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        audits: {
            'total-byte-weight': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        totalBytes: number;
                    }[];
                };
            };
        };
    };
}

// Function to perform HTML Page Size Test using PSI data
export function performHTMLPageSizeTest(data: any,appendToSuccess:any,appendToFailed:any): { HTMLPageSizeBytes: number; Importance: string; Description: string; Link: string } {
    const totalByteWeightAudit = data?.lighthouseResult?.audits?.['total-byte-weight'];

    // Check if the Total Byte Weight audit data is available
    if (!totalByteWeightAudit) {
        // Return default data if the audit data is missing
        return {
            HTMLPageSizeBytes: 0,
            Importance: 'Low',
            Description: 'No HTML Page Size Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract the total size of the HTML content in bytes
    const htmlPageSizeBytes = totalByteWeightAudit.details.items[0]?.totalBytes || 0;

    // Determine the importance based on the HTML page size
    let importance: string;
    if (htmlPageSizeBytes < 10000) {
        importance = 'Low';
    } else if (htmlPageSizeBytes < 50000) {
        importance = 'Medium';
    } else {
        importance = 'High';
    }
    importance == 'Low' ? appendToFailed('html Page Size Test') : appendToSuccess('html Page Size Test');

    const description = `The HTML page size is ${htmlPageSizeBytes} bytes.`;
    const link = 'https://web.dev/total-byte-weight/';

    // console.log({
    //     message: 'HTML Page Size Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        HTMLPageSizeBytes: htmlPageSizeBytes,
        Importance: importance,
        Description: description,
        Link: link
    };
}
