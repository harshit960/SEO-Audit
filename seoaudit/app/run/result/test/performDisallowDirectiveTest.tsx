// import fetch from 'node-fetch';

// Function to perform Disallow Directive Test
export async function performDisallowDirectiveTest(baseUrl: string): Promise<{ HasDisallowDirective: boolean; Importance: string; Description: string }> {
    // URL of the robots.txt file
    const robotsTxtUrl = `${baseUrl}/robots.txt`;

    try {
        // Fetch the robots.txt file
        const response = await fetch(robotsTxtUrl);

        // Check if the response status is OK
        if (response.ok) {
            // Extract the contents of the robots.txt file
            const robotsTxtContent = await response.text();

            // Check if any Disallow directives are present
            const hasDisallowDirective = robotsTxtContent.includes('Disallow:');

            // Determine the importance and description based on the presence of Disallow directives
            const importance = hasDisallowDirective ? 'Medium' : 'Low';
            const description = hasDisallowDirective ? 'The robots.txt file contains one or more Disallow directives, specifying areas of the website that should not be accessed by web crawlers. This can affect the indexing and visibility of these areas in search engine results.' : 'No Disallow directives were found in the robots.txt file. Ensure that appropriate directives are included to control web crawler access to specific areas of the website.';

            // console.log({
            //     message: 'Disallow Directive Test',
            //     HasDisallowDirective: hasDisallowDirective,
            //     Importance: importance,
            //     Description: description
            // });

            return {
                HasDisallowDirective: hasDisallowDirective,
                Importance: importance,
                Description: description
            };
        } else {
            // Return default data if failed to fetch the robots.txt file
            // console.log({
            //     message: 'Disallow Directive Test',
            //     HasDisallowDirective: false,
            //     Importance: 'Low',
            //     Description: 'Failed to fetch the robots.txt file, so the Disallow Directive Test cannot be performed.'
            // });

            return {
                HasDisallowDirective: false,
                Importance: 'Low',
                Description: 'Failed to fetch the robots.txt file, so the Disallow Directive Test cannot be performed.'
            };
        }
    } catch (error) {
        // Handle errors
        // console.error('Error occurred during Disallow Directive Test:', error);
        return {
            HasDisallowDirective: false,
            Importance: 'Low',
            Description: 'An error occurred while performing the Disallow Directive Test.'
        };
    }
}
