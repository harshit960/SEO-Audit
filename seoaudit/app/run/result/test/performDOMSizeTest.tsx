// domSizeTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        audits: {
            'dom-size': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        value: number;
                    }[];
                };
            };
        };
    };
}

// Function to perform DOM Size Test using PSI data
export function performDOMSizeTest(data: any,appendToSuccess:any,appendToFailed:any): { DOMSize: number; Importance: string; Description: string; Link: string } {
    const domSizeAudit = data?.lighthouseResult?.audits?.['dom-size'];

    // Check if the DOM Size audit data is available
    if (!domSizeAudit) {
        // Return default data if the audit data is missing
        return {
            DOMSize: 0,
            Importance: 'Low',
            Description: 'No DOM Size Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract the size of the DOM
    const DOMSize = domSizeAudit.details.items[0]?.value || 0;

    // Determine the importance based on the DOM size
    let importance: string;
    if (DOMSize < 1500) {
        importance = 'Low';
    } else if (DOMSize < 3000) {
        importance = 'Medium';
    } else {
        importance = 'High';
    }
    importance == 'Low' ? appendToFailed('html DOM Size Test') : appendToSuccess('html DOM Size Test');

    const description = `The size of the DOM is ${JSON.stringify(DOMSize.value)} elements.`;
    const link = 'https://web.dev/dom-size/';

    // console.log({
    //     message: 'DOM Size Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        DOMSize: DOMSize,
        Importance: importance,
        Description: description,
        Link: link
    };
}
