'use client';

import { useEffect, useState } from 'react';
import { jsonData as tests } from '../../../data/data';


// test imports
import { extractBrokenLinksData } from '@/app/run/result/test/extractBrokenLinksData';
import { extractDeprecatedHtmlTagsData } from '@/app/run/result/test/extractDeprecatedHtmlTagsData';
import { extractHeadingTagsData } from '@/app/run/result/test/extractHeadingTagsData';
import { extractImageAltTestData } from '@/app/run/result/test/extractImageAltTestData';
import { extractImageAspectRatioData } from '@/app/run/result/test/extractImageAspectRatioData';
import { extractInlineCssData } from '@/app/run/result/test/extractInlineCssData';
import { extractMetaDescription } from '@/app/run/result/test/extractMetaDescription';
import { extractMetaTitle } from '@/app/run/result/test/extractMetaTitle';
import { extractResponsiveImageData } from '@/app/run/result/test/extractResponsiveImageData';
import { extractRobotsTxtData } from '@/app/run/result/test/extractRobotsTxtData';
import { extractSEOFriendlyUrlData } from '@/app/run/result/test/extractSEOFriendlyUrlData';
import { extractSitemapData } from '@/app/run/result/test/extractSitemapData';
import { getScreenshot } from '@/app/run/result/test/getScreenshot';
import { extractMostCommonKeywords } from '@/app/run/result/test/Keywords';
import { performAdsTxtValidationTest } from '@/app/run/result/test/performAdsTxtValidationTest';
import { performBacklinksTest } from '@/app/run/result/test/performBacklinksTest';
import { performCanonicalTagTest } from '@/app/run/result/test/performCanonicalTagTest';
import { performCDNUsageTest } from '@/app/run/result/test/performCDNUsageTest';
import { performCharsetDeclarationTest } from '@/app/run/result/test/performCharsetDeclarationTest';
import { performConsoleErrorsTest } from '@/app/run/result/test/performConsoleErrorsTest';
import { performCssCachingTest } from '@/app/run/result/test/performCssCachingTest';
import { performCssMinificationTest } from '@/app/run/result/test/performCssMinificationTest';
import { performCumulativeLayoutShiftTest } from '@/app/run/result/test/performCumulativeLayoutShiftTest';
import { performCustom404ErrorPageTest } from '@/app/run/result/test/performCustom404ErrorPageTest';
// import { performDirectoryBrowsingTest } from '@/app/run/result/test/performDirectoryBrowsingTest';
import { performDisallowDirectiveTest } from '@/app/run/result/test/performDisallowDirectiveTest';
import { performDoctypeTest } from '@/app/run/result/test/performDoctypeTest';
import { performDOMSizeTest } from '@/app/run/result/test/performDOMSizeTest';
import { performFaviconTest } from '@/app/run/result/test/performFaviconTest';
import { performFirstContentfulPaintTest } from '@/app/run/result/test/performFirstContentfulPaintTest';
import { performFlashTest } from '@/app/run/result/test/performFlashTest';
import { performFramesetTest } from '@/app/run/result/test/performFramesetTest';
import { performGoogleAnalyticsTest } from '@/app/run/result/test/performGoogleAnalyticsTest';
import { performHstsTest } from '@/app/run/result/test/performHstsTest';
import { performHTMLCompressionTest } from '@/app/run/result/test/performHTMLCompressionTest';
import { performHTMLPageSizeTest } from '@/app/run/result/test/performHTMLPageSizeTest';
import { performHttp2Test } from '@/app/run/result/test/performHttp2Test';
import { performImageCachingTest } from '@/app/run/result/test/performImageCachingTest';
import { performImageMetadataTest } from '@/app/run/result/test/performImageMetadataTest';
import { performJavaScriptCachingTest } from '@/app/run/result/test/performJavaScriptCachingTest';
import { performJavaScriptMinificationTest } from '@/app/run/result/test/performJavaScriptMinificationTest';
import { performJSErrorTest } from '@/app/run/result/test/performJSErrorTest';
import { performJSExecutionTimeTest } from '@/app/run/result/test/performJSExecutionTimeTest';
import { performLargestContentfulPaintTest } from '@/app/run/result/test/performLargestContentfulPaintTest';
import { performMediaQueryResponsiveTest } from '@/app/run/result/test/performMediaQueryResponsiveTest';
import { performMetaRefreshTest } from '@/app/run/result/test/performMetaRefreshTest';
import { performMetaViewportTest } from '@/app/run/result/test/performMetaViewportTest';
import { performMixedContentTest } from '@/app/run/result/test/performMixedContentTest';
import { performMobileSnapshotTest } from '@/app/run/result/test/performMobileSnapshotTest';
import { performModernImageFormatTest } from '@/app/run/result/test/performModernImageFormatTest';
import { performNestedTablesTest } from '@/app/run/result/test/performNestedTablesTest';
import { performNofollowTagTest } from '@/app/run/result/test/performNofollowTagTest';
import { performNoindexTagTest } from '@/app/run/result/test/performNoindexTagTest';
import { performPageCacheTest } from '@/app/run/result/test/performPageCacheTest';
import { performPageObjectsTest } from '@/app/run/result/test/performPageObjectsTest';
import { performPlaintextEmailsTest } from '@/app/run/result/test/performPlaintextEmailsTest';
import { performRenderBlockingResourcesTest } from '@/app/run/result/test/performRenderBlockingResourcesTest';
// import { performSafeBrowsingTest } from '@/app/run/result/test/performSafeBrowsingTest';
import { performServerSignatureTest } from '@/app/run/result/test/performServerSignatureTest';
import { performSiteLoadingSpeedTest } from '@/app/run/result/test/performSiteLoadingSpeedTest';
import { performSocialMediaTest } from '@/app/run/result/test/performSocialMediaTest';
// import { performSpfRecordsTest } from '@/app/run/result/test/performSpfRecordsTest';
import { performSslCheckerTest } from '@/app/run/result/test/performSslCheckerTest';
import { performStructuredDataTest } from '@/app/run/result/test/performStructuredDataTest';
import { performTtfbTest } from '@/app/run/result/test/performTtfbTest';
import { performUnsafeCrossOriginLinksTest } from '@/app/run/result/test/performUnsafeCrossOriginLinksTest';
import { performUrlCanonicalizationTest } from '@/app/run/result/test/performUrlCanonicalizationTest';
import { performUrlRedirectsTest } from '@/app/run/result/test/performUrlRedirectsTest';
// ..............................................

export default function TestPage({ params }) {
  const { test, index } = params;  // Dynamic route parameter
  const [testData, setTestData] = useState(null);
  const [PsiData, setPsiData] = useState();
  const [ScrapeData, setScrapeData] = useState();
  const [loading, setLoading] = useState(false);
  const [url, seturl] = useState('');
  const [MetaDesc, setMetaDesc] = useState({});
  // alert(test);
  const [testTitle, setTestTitle] = useState(index);
  const [testResult, setTestResult] = useState({});

    const fetchData = async (url) => {
        try {
            console.log(process.env.NEXT_PUBLIC_API_HOST);

            const [psiRes, scrapeRes] = await Promise.all([
                fetch(`${process.env.NEXT_PUBLIC_API_HOST}/psi?url=${encodeURIComponent(url)}`),
                fetch(`${process.env.NEXT_PUBLIC_API_HOST}/scrape?url=${encodeURIComponent(url)}`)
            ]);

      const [psiData, scrapeData] = await Promise.all([
        psiRes.json(),
        scrapeRes.json()
      ]);

      console.log(psiData);
      console.log(scrapeData);

      setPsiData(psiData);
      setScrapeData(scrapeData);

      // Fetch the test result data
      // const data = extractMetaTitle(scrapeData, appendToSuccess, appendToFailed);
      // alert(test);
      const data = getData(scrapeData, parseInt(test), url);
      console.log(url);
      setTestResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  // Fetch data on the client side
  useEffect(() => {
    fetchData(test);
  }, [test]);

  // useEffect(()=>{
  //   alert(extractMetaTitle(test));
  // });

  if (loading) {
    return <div>Loading...{test}</div>;
  }

    // if (!testData) {
    //   return <div>Test not found</div>;
    // }

    return (
        <div className='flex flex-col w-full items-center min-h-screen justify-center p-20 space-y-10'>
            <div className="text-3xl font-bold">

                {tests[test - 1].title}
            </div>
            <div className="text-md text-center w-1/2">
                {tests[test - 1].desc}

            </div>

            <div className="flex">

                <input type="text" onChange={(e) => seturl(e.target.value)} value={url} className='border w-96 p-4' placeholder='Url' />
                <button onClick={() => fetchData(url)} className='bg-[#009379] text-white p-4'>Run Test</button>
            </ div>
            <div className="flex h-40 w-full">
                <div className="bg-slate-100 flex mx-2 my-1 rounded items-center w-full  p-4 px-2">
                    <div className="mx-4">

            {MetaDesc.Result == "Success" ?
              <div className="text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
              </div>
              : MetaDesc.Result == "Error" ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 m-2 text-red-400">
                  <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>
              ) : <></>}
          </div>
          <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">{testTitle}</div>
          <div className="flex grow flex-col overflow-auto">
            <div className="text-sm">{MetaDesc.Description}</div>
            <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

              <div className="text-sm">
                {Object.entries(testResult).map(([key, value]) => (
                  <div key={key}>
                    <span className="font-bold">{key}:</span> <span className="font-light">{value}</span>
                  </div>
                ))}
                {/* {MetaDesc.Text} */}
              </div>
              <div className="text-sm">{MetaDesc.Length}</div>
              <a href={MetaDesc.Link} className="text-sm">Learn More</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const appendToSuccess = (message) => {
  console.log(`Success: ${message}`);
  // Additional success handling logic (e.g., storing in an array)
};

const appendToFailed = (message) => {
  console.log(`Failed: ${message}`);
  // Additional failure handling logic (e.g., storing in an array)
};
const getData = (data, index, url) => {
  switch (index) {
    case 1:
      return extractMetaTitle(data, appendToSuccess, appendToFailed);
    case 2:
      return extractMetaDescription(data, appendToSuccess, appendToFailed);
    case 3:
      return extractGoogleSearchResultsPreview(data, appendToSuccess, appendToFailed);
    case 4:
      return extractSocialMediaMetaTags(data, appendToSuccess, appendToFailed);
    case 5:
      return extractMostCommonKeywords(data, appendToSuccess, appendToFailed);
    case 6:
      return extractKeywordsUsage(data, appendToSuccess, appendToFailed);
    case 7:
      return extractKeywordsCloud(data, appendToSuccess, appendToFailed);
    case 8:
      return extractRelatedKeywords(data, appendToSuccess, appendToFailed);
    case 9:
      return extractCompetitorDomains(data, appendToSuccess, appendToFailed);
    case 10:
      return extractHeadingTagsData(data, appendToSuccess, appendToFailed);
    case 11:
      return extractRobotsTxtData(data, appendToSuccess, appendToFailed);
    case 12:
      return extractSitemapData(data, appendToSuccess, appendToFailed);
    case 13:
      return extractSEOFriendlyUrlData(data, appendToSuccess, appendToFailed);
    case 14:
      return extractImageAltTestData(data, appendToSuccess, appendToFailed);
    case 15:
      return extractResponsiveImageData(data, appendToSuccess, appendToFailed);
    case 16:
      return extractImageAspectRatioData(data, appendToSuccess, appendToFailed);
    case 17:
      return extractInlineCssData(data, appendToSuccess, appendToFailed);
    case 18:
      return extractDeprecatedHtmlTagsData(data, appendToSuccess, appendToFailed);
    case 19:
      return performGoogleAnalyticsTest(data, appendToSuccess, appendToFailed);
    case 20:
      return performFaviconTest(data, appendToSuccess, appendToFailed);
    case 21:
      return performBacklinksTest(data, appendToSuccess, appendToFailed);
    case 22:
      return performJSErrorTest(data, appendToSuccess, appendToFailed);
    case 23:
      return performConsoleErrorsTest(data, appendToSuccess, appendToFailed);
    case 24:
      return performCharsetDeclarationTest(data, appendToSuccess, appendToFailed);
    case 25:
      return performSocialMediaTest(data, appendToSuccess, appendToFailed);
    case 26:
      return performHTMLPageSizeTest(data, appendToSuccess, appendToFailed);
    case 27:
      return performDOMSizeTest(data, appendToSuccess, appendToFailed);
    case 28:
      return performHTMLCompressionTest(data, appendToSuccess, appendToFailed);
    case 29:
      return performSiteLoadingSpeedTest(data, appendToSuccess, appendToFailed);
    case 30:
      return performJSExecutionTimeTest(data, appendToSuccess, appendToFailed);
    case 31:
      return performPageObjectsTest(data, appendToSuccess, appendToFailed);
    case 32:
      return performPageCacheTest(data, appendToSuccess, appendToFailed);
    case 33:
      return performFlashTest(data, appendToSuccess, appendToFailed);
    case 34:
      return performCDNUsageTest(data, appendToSuccess, appendToFailed);
    case 35:
      return performModernImageFormatTest(data, appendToSuccess, appendToFailed);
    case 36:
      return performImageMetadataTest(data, appendToSuccess, appendToFailed);
    case 37:
      return performImageCachingTest(data, appendToSuccess, appendToFailed);
    case 38:
      return performJavaScriptCachingTest(data, appendToSuccess, appendToFailed);
    case 39:
      return performCssCachingTest(data, appendToSuccess, appendToFailed);
    case 40:
      return performJavaScriptMinificationTest(data, appendToSuccess, appendToFailed);
    case 41:
      return performCssMinificationTest(data, appendToSuccess, appendToFailed);
    case 42:
      return performRenderBlockingResourcesTest(data, appendToSuccess, appendToFailed);
    case 43:
      return performNestedTablesTest(data, appendToSuccess, appendToFailed);
    case 44:
      return performFramesetTest(data, appendToSuccess, appendToFailed);
    case 45:
      return performDoctypeTest(data, appendToSuccess, appendToFailed);
    case 46:
      return performUrlRedirectsTest(data, appendToSuccess, appendToFailed);
    case 47:
      return performTtfbTest(data, appendToSuccess, appendToFailed);
    case 48:
      return performFirstContentfulPaintTest(data, appendToSuccess, appendToFailed);
    case 49:
      return performLargestContentfulPaintTest(data, appendToSuccess, appendToFailed);
    case 50:
      return performCumulativeLayoutShiftTest(data, appendToSuccess, appendToFailed);
    case 51:
      return performUrlCanonicalizationTest(data, appendToSuccess, appendToFailed);
    case 52:
      return performSslCheckerTest(data, appendToSuccess, appendToFailed);
    case 53:
      return performMixedContentTest(data, appendToSuccess, appendToFailed);
    case 54:
      return performHttp2Test(data, appendToSuccess, appendToFailed);
    case 55:
      return performHstsTest(data, appendToSuccess, appendToFailed);
    case 56:
      return performSafeBrowsingTest(data, appendToSuccess, appendToFailed);
    case 57:
      return performServerSignatureTest(data, appendToSuccess, appendToFailed);
    case 58:
      return performDirectoryBrowsingTest(url);
    case 59:
      return performPlaintextEmailsTest(data, appendToSuccess, appendToFailed);
    case 60:
      return performUnsafeCrossOriginLinksTest(data, appendToSuccess, appendToFailed);
    case 61:
      return performMetaViewportTest(data, appendToSuccess, appendToFailed);
    case 62:
      return performMediaQueryResponsiveTest(data, appendToSuccess, appendToFailed);
    case 63:
      return performMobileSnapshotTest(data, appendToSuccess, appendToFailed);
    case 64:
      return performStructuredDataTest(data, appendToSuccess, appendToFailed);
    case 65:
      return performCustom404ErrorPageTest(data, appendToSuccess, appendToFailed);
    case 66:
      return performNoindexTagTest(data, appendToSuccess, appendToFailed);
    case 67:
      return performCanonicalTagTest(data, appendToSuccess, appendToFailed);
    case 68:
      return performNofollowTagTest(data, appendToSuccess, appendToFailed);
    case 69:
      return performDisallowDirectiveTest(data, appendToSuccess, appendToFailed);
    case 70:
      return performMetaRefreshTest(data, appendToSuccess, appendToFailed);
    case 71:
      return performSpfRecordsTest(data, appendToSuccess, appendToFailed);
    case 72:
      return performAdsTxtValidationTest(data, appendToSuccess, appendToFailed);
    case 73:
      return performSpellCheckTest(data, appendToSuccess, appendToFailed);
    default:
      throw new Error("Invalid index");
  }
};
