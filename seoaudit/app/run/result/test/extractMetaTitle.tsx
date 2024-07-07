export function extractMetaTitle(data: any, appendToFailed:any, appendToSuccess:any): { Text: string; Length: number; Result: string; Importance: string ;Description: string,Link :string } {

    const titleAudit = data?.title ?? { title: 'No title found' };
    // console.log(titleAudit);

    const titleText = titleAudit;
    const titleLength = titleText.length;
    const isValid = titleText !== 'No title found' && titleText.length > 0;
    const resultType = isValid ? 'Success' : 'Error';
    isValid ? appendToSuccess('MetaTitle') : appendToFailed('MetaTitle');
    const importance = 'High';
    const link = 'https://developer.chrome.com/docs/lighthouse/seo/meta-description';
    const description = 'HTML contains a non-empty <title> tag inside <head>';


    return {
        Text: titleText,
        Length: titleLength,
        Result: resultType,
        Importance: importance,
        Description: description,
        Link:link
    };
}