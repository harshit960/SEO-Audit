// import fetch from 'node-fetch';

// Function to perform Ads.txt Validation Test
export async function performAdsTxtValidationTest(domain: string): Promise<{ IsValidAdsTxt: boolean; Importance: string; Description: string }> {
    // Construct the URL of the ads.txt file
    const adsTxtUrl = `${domain}/ads.txt`;

    try {
        // Fetch the ads.txt file
        const response = await fetch(adsTxtUrl);

        // Check if the response status is OK
        if (response.ok) {
            // Extract the content of the ads.txt file
            const adsTxtContent = await response.text();

            // Check if the ads.txt file follows the Ads.txt specification
            const isValidAdsTxt = adsTxtContent.includes('ads.txt');

            // Determine the importance and description based on the validity of the ads.txt file
            const importance = isValidAdsTxt ? 'High' : 'Medium';
            const description = isValidAdsTxt ? 'The ads.txt file follows the Ads.txt specification, enhancing transparency in programmatic advertising.' : 'The ads.txt file does not follow the Ads.txt specification. Ensure that the file is correctly formatted to improve transparency in programmatic advertising.';

            // console.log({
            //     message: 'Ads.txt Validation Test',
            //     IsValidAdsTxt: isValidAdsTxt,
            //     Importance: importance,
            //     Description: description
            // });

            return {
                IsValidAdsTxt: isValidAdsTxt,
                Importance: importance,
                Description: description
            };
        } else {
            // Return default data if failed to fetch the ads.txt file
            // console.log({
            //     message: 'Ads.txt Validation Test',
            //     IsValidAdsTxt: false,
            //     Importance: 'Low',
            //     Description: 'Failed to fetch the ads.txt file, so the Ads.txt Validation Test cannot be performed.'
            // });

            return {
                IsValidAdsTxt: false,
                Importance: 'Low',
                Description: 'Failed to fetch the ads.txt file, so the Ads.txt Validation Test cannot be performed.'
            };
        }
    } catch (error) {
        // Handle errors
        // console.error('Error occurred during Ads.txt Validation Test:', error);
        return {
            IsValidAdsTxt: false,
            Importance: 'Low',
            Description: 'An error occurred while performing the Ads.txt Validation Test.'
        };
    }
}
