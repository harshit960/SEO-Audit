// plaintextEmailsTest.ts

// Regular expression to match email addresses
const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

// Function to perform Plaintext Emails Test
export function performPlaintextEmailsTest(htmlContent: string, appendToFailed:any, appendToSuccess:any): { HasPlaintextEmails: boolean; Importance: string; Description: string } {
    // Search for email addresses in the HTML content
    const matches = htmlContent.match(emailRegex);

    // Determine if plaintext email addresses were found
    const hasPlaintextEmails = matches !== null && matches.length > 0;
    !hasPlaintextEmails ? appendToSuccess('Plaintext Emails Test') : appendToFailed('Plaintext Emails Test');

    // Determine the importance and description based on the presence of plaintext email addresses
    const importance = hasPlaintextEmails ? 'Medium' : 'Low';
    const description = hasPlaintextEmails ? 'Plaintext email addresses were found on the webpage. Consider obfuscating or removing them to prevent email harvesting by spammers.' : 'No plaintext email addresses were found on the webpage, which is a good practice to prevent email harvesting.';

    // console.log({
    //     message: 'Plaintext Emails Test',
    //     HasPlaintextEmails: hasPlaintextEmails,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        HasPlaintextEmails: hasPlaintextEmails,
        Importance: importance,
        Description: description
    };
}
