
export function getScreenshot(psiData: any): string {
    return psiData?.lighthouseResult.audits['final-screenshot']?.details.data;
}