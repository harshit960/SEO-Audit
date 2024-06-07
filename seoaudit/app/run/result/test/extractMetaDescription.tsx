export function extractMetaDescription(data: { title?: any; keywords?: null; subKeywords?: never[]; metaDescription?: string; languageCode?: string; htmlText?: string; countryCode?: string; }): { Text: string; Length: number; ResultType: string; Importance: string; Description: string } {
    const descriptionAudit = data?.metaDescription ?? 'No meta description found';
    // console.log(descriptionAudit);

    const descriptionText = descriptionAudit;
    const descriptionLength = descriptionText.length;

    const isValid = descriptionText !== 'No meta description found' && descriptionText.length > 0;
    const resultType = isValid ? 'Success' : 'Error';
    const importance = 'High';
    const description = 'Provide a summary of the page content so that search engines can include it in search results.';

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
        ResultType: resultType,
        Importance: importance,
        Description: description
    };
}