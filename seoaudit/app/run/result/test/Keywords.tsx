// keywordsTest.ts

// Function to extract keywords from HTML text
function extractKeywords(htmlText: string): string[] {
    // Implement your logic to extract keywords here, e.g., using natural language processing libraries
    // For demonstration, let's assume we split text into words and return the most frequent ones
    const words = htmlText.split(/\s+/);
    const wordFrequencyMap = new Map<string, number>();
    words.forEach(word => {
        const normalizedWord = word.toLowerCase().replace(/[^\w\s]/g, '');
        if (normalizedWord.length > 0) {
            const count = wordFrequencyMap.get(normalizedWord) || 0;
            wordFrequencyMap.set(normalizedWord, count + 1);
        }
    });
    const sortedWords = Array.from(wordFrequencyMap.entries())
                            .sort((a, b) => b[1] - a[1])
                            .map(entry => entry[0]+" ");
    return sortedWords.slice(0, 10); // Returning top 10 most frequent words as keywords
}

// Function to extract the most common keywords from HTML text data
export function extractMostCommonKeywords(data: any, appendToFailed:any, appendToSuccess:any): { Keywords: string[]; Importance: string; Description: string; Link: string } {
    const htmlText = data?.htmlText ?? '';
    const extractedKeywords = extractKeywords(htmlText);
    !extractedKeywords ? appendToFailed('Most Common Keywords') : appendToSuccess('Most Common Keywords');
    
    const importance = 'Low';
    const description = 'Keywords found on your site according to the Text Rank algorithm.';
    const link = 'https://cutt.ly/MjP5nu7';

    // console.log({
    //     message: 'Keywords (Text Rank)',
    //     description,
    //     link,
    //     importance
    // });

    return {
        Keywords: extractedKeywords,
        Importance: importance,
        Description: description,
        Link: link
    };
}
