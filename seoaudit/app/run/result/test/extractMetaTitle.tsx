export function extractMetaTitle(data: { title: any; keywords?: null; subKeywords?: never[]; metaDescription?: string; languageCode?: string; htmlText?: string; countryCode?: string; }): { Text: string; Length: number; ResultType: string; Importance: string ;Description: string } {

    const titleAudit = data?.title ?? { title: 'No title found' };
    // console.log(titleAudit);

    const titleText = titleAudit;
    const titleLength = titleText.length;
    const isValid = titleText !== 'No title found' && titleText.length > 0;
    const resultType = isValid ? 'Success' : 'Error';
    const importance = 'High';
    const description = 'HTML contains a non-empty <title> tag inside <head>';


    return {
        Text: titleText,
        Length: titleLength,
        ResultType: resultType,
        Importance: importance,
        Description: description
    };
}