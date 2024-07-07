export function extractMetaDescription(data: any, appendToFailed:any, appendToSuccess:any): { Text: string; Length: number; Result: string; Importance: string; Description: string;Link:string } {
    const descriptionAudit = data?.metaDescription ?? 'No meta description found';
    // console.log(descriptionAudit);

    const descriptionText = descriptionAudit;
    const descriptionLength = descriptionText.length;

    const isValid = descriptionText !== 'No meta description found' && descriptionText.length > 0;
    const resultType = isValid ? 'Success' : 'Error';
    !isValid ? appendToFailed('Meta Description') : appendToSuccess('Meta Description');

    const importance = 'High';
    const description = 'Provide a summary of the page content so that search engines can include it in search results.';
    const link = 'https://developer.chrome.com/docs/lighthouse/seo/meta-description';

    // console.log({
    //     message: 'meta[name="description"]',
    //     description,
    //     link: 'https://cutt.ly/9jP5y3F',
    //     resultType,
    //     importance
    // });

    return {
        Text: descriptionText,
        Length: descriptionLength,
        Result: resultType,
        Importance: importance,
        Description: description,
        Link:link
    };
}