// import fetch from 'node-fetch';

// Function to perform Custom 404 Error Page Test
export async function performCustom404ErrorPageTest(baseUrl: string): Promise<{ HasCustom404ErrorPage: boolean; Importance: string; Description: string }> {
    // URL of a non-existing page to trigger a 404 error
    // console.log(baseUrl);
    
    const nonExistingPageUrl = `${baseUrl}/non-existing-page`;

    try {
        // Fetch the non-existing page
        const response = await fetch(nonExistingPageUrl);
        
        // Check if the response status is 404
        if (response.status === 404) {
            // console.log(response.status);
            // Extract the response body text
            const responseBodyText = await response.text();

            // Check if the response body contains custom 404 error page content
            const hasCustom404ErrorPage = responseBodyText.includes('404');

            // Determine the importance and description based on the presence of a custom 404 error page
            const importance = hasCustom404ErrorPage ? 'High' : 'Medium';
            const description = hasCustom404ErrorPage ? 'The server responds with a custom 404 error page, providing a more user-friendly experience for visitors encountering a page not found error.' : 'The server does not respond with a custom 404 error page. Consider implementing one to improve the user experience for visitors encountering a page not found error.';

            // console.log({
            //     message: 'Custom 404 Error Page Test',
            //     HasCustom404ErrorPage: hasCustom404ErrorPage,
            //     Importance: importance,
            //     Description: description
            // });

            return {
                HasCustom404ErrorPage: hasCustom404ErrorPage,
                Importance: importance,
                Description: description
            };
        } else {
            // Return default data if the response status is not 404
            // console.log({
            //     message: 'Custom 404 Error Page Test',
            //     HasCustom404ErrorPage: false,
            //     Importance: 'Low',
            //     Description: 'The server does not respond with a 404 status code for the non-existing page, so the custom 404 error page test cannot be performed.'
            // });

            return {
                HasCustom404ErrorPage: false,
                Importance: 'Low',
                Description: 'The server does not respond with a 404 status code for the non-existing page, so the custom 404 error page test cannot be performed.'
            };
        }
    } catch (error) {
        // Handle errors
        // console.error('Error occurred during Custom 404 Error Page Test:', error);
        return {
            HasCustom404ErrorPage: false,
            Importance: 'Low',
            Description: 'An error occurred while performing the Custom 404 Error Page Test.'
        };
    }
}
