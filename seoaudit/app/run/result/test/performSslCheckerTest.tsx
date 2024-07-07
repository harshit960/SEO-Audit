// sslCheckerTest.ts

interface HTMLData {
    // Define the structure of the HTML data
    htmlContent: string;
}

// Function to perform SSL Checker and HTTPS Test using HTML data
export function performSslCheckerTest(data: any, appendToFailed:any, appendToSuccess:any): { IsSecure: boolean; Importance: string; Description: string } {
    const htmlContent = data;

    // Check if the webpage is served over HTTPS
    const isSecure = htmlContent.toLowerCase().includes('https');
    !isSecure ? appendToFailed('SSL Checker and HTTPS Test') : appendToSuccess('SSL Checker and HTTPS Test');

    // Determine the importance and description based on the security status
    const importance = isSecure ? 'High' : 'Medium';
    const description = isSecure ? 'The webpage is securely served over HTTPS, ensuring data confidentiality and integrity.' : 'The webpage is not served over HTTPS. Consider enabling HTTPS to enhance security and user trust.';

    // console.log({
    //     message: 'SSL Checker and HTTPS Test',
    //     IsSecure: isSecure,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        IsSecure: isSecure,
        Importance: importance,
        Description: description
    };
}
