// directoryBrowsingTest.ts

import fetch from 'node-fetch';

// Function to perform Directory Browsing Test
export async function performDirectoryBrowsingTest(url: string): Promise<{ IsDirectoryBrowsingEnabled: boolean; Importance: string; Description: string }> {
    try {
        // Send request to the URL and check for directory listing
        const response = await fetch(url);

        if (response.ok) {
            // Check if the response body contains directory listing
            const responseBody = await response.text();
            const isDirectoryBrowsingEnabled = responseBody.includes('Index of /');

            // Determine the importance and description based on directory browsing configuration
            const importance = isDirectoryBrowsingEnabled ? 'Medium' : 'Low';
            const description = isDirectoryBrowsingEnabled ? 'Directory browsing is enabled, which may expose sensitive information. Consider disabling it.' : 'Directory browsing is not enabled, which is a good security practice.';

            // console.log({
            //     message: 'Directory Browsing Test',
            //     IsDirectoryBrowsingEnabled: isDirectoryBrowsingEnabled,
            //     Importance: importance,
            //     Description: description
            // });

            return {
                IsDirectoryBrowsingEnabled: isDirectoryBrowsingEnabled,
                Importance: importance,
                Description: description
            };
        } else {
            // console.error('Failed to fetch URL:', response.statusText);
        }
    } catch (error) {
        // console.error('Error occurred while performing Directory Browsing Test:', error);
    }

    // Return default data in case of errors
    return {
        IsDirectoryBrowsingEnabled: false,
        Importance: 'Low',
        Description: 'Failed to perform Directory Browsing Test.'
    };
}
