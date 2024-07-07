// headingTagsTest.ts
import cheerio from 'cheerio';

// Function to extract information about H1 tags from HTML text
export function extractHeadingTagsData(htmlText: any, appendToFailed:any, appendToSuccess:any): { HasH1Tags: boolean; Importance: string; Description: string; Link: string } {
    // Load the HTML text into Cheerio
    const $ = cheerio.load(htmlText);

    // Check if there are any H1 tags
    const hasH1Tags = $('h1').length > 0;

    const importance = hasH1Tags ? 'High' : 'Low';
    !hasH1Tags ? appendToFailed('Heading Tags Data') : appendToSuccess('Heading Tags Data');

    const description = hasH1Tags ? 'This webpage contains H1 tags.' : 'This webpage does not contain any H1 tags.';
    const link = 'https://developers.google.com/search/docs/advanced/performance/optimize-content#headings';

    // console.log({
    //     message: 'Heading Tags Test',
    //     description,
    //     link,
    //     importance
    // });

    return {
        HasH1Tags: hasH1Tags,
        Importance: importance,
        Description: description,
        Link: link
    };
}
