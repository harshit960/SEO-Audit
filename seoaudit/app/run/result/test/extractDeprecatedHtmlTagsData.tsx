// deprecatedHtmlTagsTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        audits: {
            'deprecated-html-tags': {
                id: string;
                title: string;
                description: string;
                score: number;
                details: {
                    items: {
                        tagName: string;
                        occurrences: number;
                    }[];
                };
            };
        };
    };
}

// Function to extract Deprecated HTML Tags Test data from PSI data
export function extractDeprecatedHtmlTagsData(data: any,appendToSuccess:any,appendToFailed:any): { DeprecatedTags: { tagName: string; occurrences: number }[]; Importance: string; Description: string; Link: string } {
    const deprecatedHtmlTagsAudit = data?.lighthouseResult?.audits?.['deprecated-html-tags'];

    // Check if the Deprecated HTML Tags Test audit data is available
    if (!deprecatedHtmlTagsAudit) {
        // Return default data if the audit data is missing
        return {
            DeprecatedTags: [],
            Importance: 'Low',
            Description: 'No Deprecated HTML Tags Test audit data found in PSI data.',
            Link: 'https://developers.google.com/speed/pagespeed/insights/'
        };
    }

    // Extract deprecated HTML tags information
    const deprecatedTags = deprecatedHtmlTagsAudit.details.items;

    // Check if any deprecated HTML tags are present
    const importance = deprecatedTags.length > 0 ? 'Low' : 'High';
    deprecatedTags.length > 0 ? appendToFailed('deprecatedHtmlTagsAudit') : appendToSuccess('deprecatedHtmlTagsAudit');

    const description = deprecatedTags.length > 0 ? 'This website uses deprecated HTML tags. Consider replacing them with modern equivalents for better compatibility and performance.' : 'This website does not use any deprecated HTML tags.';
    const link = 'https://www.w3.org/wiki/HTML/Elements';

    // console.log({
    //     message: 'Deprecated HTML Tags Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        DeprecatedTags: deprecatedTags.map((tag: { tagName: any; occurrences: any; }) => ({ tagName: tag.tagName, occurrences: tag.occurrences })),
        Importance: importance,
        Description: description,
        Link: link
    };
}
