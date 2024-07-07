// metaViewportTest.ts

interface PSIData {
    // Define the structure of the PSI data
    lighthouseResult: {
        requestedUrl: string;
        finalUrl: string;
        audits: {
            'viewport': {
                id: string;
                title: string;
                description: string;
                score: null | number;
            };
        };
    };
}

// Function to perform Meta Viewport Test using PSI data
export function performMetaViewportTest(data: any,appendToSuccess:any,appendToFailed:any): { HasMetaViewport: boolean; Importance: string; Description: string } {
    const viewportAudit = data?.lighthouseResult?.audits?.['viewport'];

    // Check if the viewport audit data is available
    if (!viewportAudit) {
        // Return default data if the audit data is missing
        return {
            HasMetaViewport: false,
            Importance: 'Low',
            Description: 'No viewport audit data found in PSI data.'
        };
    }

    // Check the score of the viewport audit to determine if the viewport meta tag is present
    const hasMetaViewport = viewportAudit.score !== null && viewportAudit.score === 1;
    !hasMetaViewport ? appendToFailed('Meta Viewport Test') : appendToSuccess('Meta Viewport Test');

    // Determine the importance and description based on the presence of the viewport meta tag
    const importance = hasMetaViewport ? 'High' : 'Medium';
    const description = hasMetaViewport ? 'The webpage includes a viewport meta tag, which is essential for responsive web design and ensuring proper display across devices.' : 'The webpage does not include a viewport meta tag. Consider adding one to ensure proper display across devices, especially on mobile devices.';

    // console.log({
    //     message: 'Meta Viewport Test',
    //     HasMetaViewport: hasMetaViewport,
    //     Importance: importance,
    //     Description: description
    // });

    return {
        HasMetaViewport: hasMetaViewport,
        Importance: importance,
        Description: description
    };
}
