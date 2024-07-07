// htmlCompressionTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        audits: {
            'uses-text-compression': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        overallSavingsMs: number;
                    }[];
                };
            };
        };
    };
}

// Function to perform HTML Compression/GZIP Test using PSI data
export function performHTMLCompressionTest(data: any,appendToSuccess:any,appendToFailed:any): { IsCompressed: boolean; CompressionSavings: number; Importance: string; Description: string; Link: string } {
    const usesTextCompressionAudit = data?.lighthouseResult?.audits?.['uses-text-compression'];

    // Check if the Uses Text Compression audit data is available
    if (!usesTextCompressionAudit) {
        // Return default data if the audit data is missing
        return {
            IsCompressed: false,
            CompressionSavings: 0,
            Importance: 'Low',
            Description: 'No HTML Compression/GZIP Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract compression savings
    const compressionSavings = usesTextCompressionAudit.details.items[0]?.overallSavingsMs || 0;

    // Check if compression savings are significant
    const isCompressed = compressionSavings > 0;
    !isCompressed ? appendToFailed('html Compression Test') : appendToSuccess('html Compression Test');

    const importance = isCompressed ? 'High' : 'Low';
    const description = isCompressed ? `The HTML content is compressed using GZIP compression, resulting in ${compressionSavings} ms of overall savings.` : 'The HTML content is not compressed using GZIP compression.';
    const link = 'https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer#enable-text-compression';

    // console.log({
    //     message: 'HTML Compression/GZIP Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        IsCompressed: isCompressed,
        CompressionSavings: compressionSavings,
        Importance: importance,
        Description: description,
        Link: link
    };
}
