// charsetDeclarationTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        requestedUrl: string;
        finalUrl: string;
        audits: {
            'charset': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        charset: string;
                        source: string;
                    }[];
                };
            };
        };
    };
}

// Function to perform Charset Declaration Test using PSI data
export function performCharsetDeclarationTest(data: PSIData): { Charset: string; HasCharsetDeclaration: boolean; Importance: string; Description: string; Link: string } {
    const charsetAudit = data?.lighthouseResult?.audits?.['charset'];

    // Check if the Charset Declaration Test audit data is available
    if (!charsetAudit) {
        // Return default data if the audit data is missing
        return {
            Charset: '',
            HasCharsetDeclaration: false,
            Importance: 'Low',
            Description: 'No Charset Declaration Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract charset declaration information
    const charset = charsetAudit.details.items[0]?.charset || '';
    const hasCharsetDeclaration = charset !== '';

    const importance = hasCharsetDeclaration ? 'High' : 'Low';
    const description = hasCharsetDeclaration ? `The charset declaration is set to "${charset}" in the ${charsetAudit.details.items[0].source}.` : 'No charset declaration found.';
    const link = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-http-equiv';

    console.log({
        message: 'Charset Declaration Test',
        description,
        link,
        importance
    });

    return {
        Charset: charset,
        HasCharsetDeclaration: hasCharsetDeclaration,
        Importance: importance,
        Description: description,
        Link: link
    };
}
