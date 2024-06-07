// safeBrowsingTest.ts

import fetch from 'node-fetch';

// Function to perform Safe Browsing Test
export async function performSafeBrowsingTest(url: string): Promise<{ IsSafe: boolean; Importance: string; Description: string }> {
    const safeBrowsingApiUrl = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=YOUR_API_KEY`; // Replace with your actual API key

    try {
        // Send request to Safe Browsing API
        const response = await fetch(safeBrowsingApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                client: {
                    clientId: 'YOUR_CLIENT_ID', // Replace with your actual client ID
                    clientVersion: '1.0.0'
                },
                threatInfo: {
                    threatTypes: ['MALWARE', 'SOCIAL_ENGINEERING', 'UNWANTED_SOFTWARE', 'POTENTIALLY_HARMFUL_APPLICATION', 'THREAT_TYPE_UNSPECIFIED'],
                    platformTypes: ['ANY_PLATFORM'],
                    threatEntryTypes: ['URL'],
                    threatEntries: [{ url: url }]
                }
            })
        });

        // Check if the website is flagged as safe
        if (response.ok) {
            const data:any = await response.json();
            const isSafe = !data.matches || data.matches.length === 0;
            const importance = isSafe ? 'High' : 'Medium';
            const description = isSafe ? 'The website is not flagged as potentially harmful by Google Safe Browsing.' : 'The website is flagged as potentially harmful by Google Safe Browsing. Exercise caution when visiting this website.';

            console.log({
                message: 'Safe Browsing Test',
                IsSafe: isSafe,
                Importance: importance,
                Description: description
            });

            return {
                IsSafe: isSafe,
                Importance: importance,
                Description: description
            };
        } else {
            // console.error('Failed to fetch data from Safe Browsing API:', response.statusText);
        }
    } catch (error) {
        // console.error('Error occurred while performing Safe Browsing Test:', error);
    }

    // Return default data in case of errors
    return {
        IsSafe: false,
        Importance: 'Low',
        Description: 'Failed to perform Safe Browsing Test.'
    };
}
