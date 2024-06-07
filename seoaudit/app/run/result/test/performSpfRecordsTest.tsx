import { promisify } from 'util';
import dns from 'dns';

// Promisify DNS functions
const resolveTxtAsync = promisify(dns.resolveTxt);

// Function to perform SPF Records Test
export async function performSpfRecordsTest(domain: string): Promise<{ HasSpfRecords: boolean; Importance: string; Description: string }> {
    try {
        // Query SPF records for the domain
        const txtRecords = await resolveTxtAsync(domain);

        // Check if any SPF records are present
        const hasSpfRecords = txtRecords.some(record => record.some(txt => txt.includes('v=spf1')));

        // Determine the importance and description based on the presence of SPF records
        const importance = hasSpfRecords ? 'High' : 'Medium';
        const description = hasSpfRecords ? 'The domain has SPF records configured, specifying which mail servers are authorized to send emails on behalf of the domain. This helps prevent email spoofing and phishing attacks.' : 'No SPF records were found for the domain. Consider configuring SPF records to enhance email security and prevent email spoofing.';

        // console.log({
        //     message: 'SPF Records Test',
        //     HasSpfRecords: hasSpfRecords,
        //     Importance: importance,
        //     Description: description
        // });

        return {
            HasSpfRecords: hasSpfRecords,
            Importance: importance,
            Description: description
        };
    } catch (error) {
        // Handle DNS lookup errors
        // console.error('Error occurred during SPF Records Test:', error);
        return {
            HasSpfRecords: false,
            Importance: 'Low',
            Description: 'An error occurred while performing the SPF Records Test.'
        };
    }
}
