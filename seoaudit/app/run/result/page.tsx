'use client'
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import { SeoCheck } from "seord";
import type { KeywordDensity, LinksGroup } from "seord";
import { extractMetaTitle } from "./test/extractMetaTitle";
import { extractMetaDescription } from "./test/extractMetaDescription";
import { performSocialMediaTest } from "./test/performSocialMediaTest";
import { extractMostCommonKeywords } from "./test/Keywords";
import { extractHeadingTagsData } from "./test/extractHeadingTagsData";
import { extractRobotsTxtData } from "./test/extractRobotsTxtData";
import { extractSitemapData } from "./test/extractSitemapData";
import { extractBrokenLinksData } from "./test/extractBrokenLinksData";
import { extractSEOFriendlyUrlData } from "./test/extractSEOFriendlyUrlData";
import { extractImageAltTestData } from "./test/extractImageAltTestData";
import { extractResponsiveImageData } from "./test/extractResponsiveImageData";
import { extractImageAspectRatioData } from "./test/extractImageAspectRatioData";
import { extractInlineCssData } from "./test/extractInlineCssData";
import { extractDeprecatedHtmlTagsData } from "./test/extractDeprecatedHtmlTagsData";
import { performGoogleAnalyticsTest } from "./test/performGoogleAnalyticsTest";
import { performFaviconTest } from "./test/performFaviconTest";
import { performBacklinksTest } from "./test/performBacklinksTest";
import { performJSErrorTest } from "./test/performJSErrorTest";
import { performConsoleErrorsTest } from "./test/performConsoleErrorsTest";
import { performCharsetDeclarationTest } from "./test/performCharsetDeclarationTest";
import { performHTMLPageSizeTest } from "./test/performHTMLPageSizeTest";
import { performDOMSizeTest } from "./test/performDOMSizeTest";
import { performHTMLCompressionTest } from "./test/performHTMLCompressionTest";
import { performSiteLoadingSpeedTest } from "./test/performSiteLoadingSpeedTest";
import { performJSExecutionTimeTest } from "./test/performJSExecutionTimeTest";
import { performPageObjectsTest } from "./test/performPageObjectsTest";
import { performPageCacheTest } from "./test/performPageCacheTest";
import { performFlashTest } from "./test/performFlashTest";
import { performCDNUsageTest } from "./test/performCDNUsageTest";
import { performModernImageFormatTest } from "./test/performModernImageFormatTest";
import { performImageMetadataTest } from "./test/performImageMetadataTest";
import { performImageCachingTest } from "./test/performImageCachingTest";
import { performJavaScriptCachingTest } from "./test/performJavaScriptCachingTest";
import { performCssCachingTest } from "./test/performCssCachingTest";
import { performCssMinificationTest } from "./test/performCssMinificationTest";
import { performRenderBlockingResourcesTest } from "./test/performRenderBlockingResourcesTest";
import { performNestedTablesTest } from "./test/performNestedTablesTest";
import { performFramesetTest } from "./test/performFramesetTest";
import { performDoctypeTest } from "./test/performDoctypeTest";
import { performUrlRedirectsTest } from "./test/performUrlRedirectsTest";
import { performFirstContentfulPaintTest } from "./test/performFirstContentfulPaintTest";
import { performLargestContentfulPaintTest } from "./test/performLargestContentfulPaintTest";
import { performCumulativeLayoutShiftTest } from "./test/performCumulativeLayoutShiftTest";
import { performUrlCanonicalizationTest } from "./test/performUrlCanonicalizationTest";
import { performSslCheckerTest } from "./test/performSslCheckerTest";
import { performMixedContentTest } from "./test/performMixedContentTest";
import { performHttp2Test } from "./test/performHttp2Test";
import { performHstsTest } from "./test/performHstsTest";
import { performSafeBrowsingTest } from "./test/performSafeBrowsingTest";
import { performServerSignatureTest } from "./test/performServerSignatureTest";
import { performDirectoryBrowsingTest } from "./test/performDirectoryBrowsingTest";
import { performPlaintextEmailsTest } from "./test/performPlaintextEmailsTest";
import { performUnsafeCrossOriginLinksTest } from "./test/performUnsafeCrossOriginLinksTest";
import { performMetaViewportTest } from "./test/performMetaViewportTest";
import { performMediaQueryResponsiveTest } from "./test/performMediaQueryResponsiveTest";
import { performMobileSnapshotTest } from "./test/performMobileSnapshotTest";
import { performStructuredDataTest } from "./test/performStructuredDataTest";
import { performCustom404ErrorPageTest } from "./test/performCustom404ErrorPageTest";
import { performNoindexTagTest } from "./test/performNoindexTagTest";
import { performNofollowTagTest } from "./test/performNofollowTagTest";
import { performDisallowDirectiveTest } from "./test/performDisallowDirectiveTest";
import { performMetaRefreshTest } from "./test/performMetaRefreshTest";
import { performSpfRecordsTest } from "./test/performSpfRecordsTest";
import { performAdsTxtValidationTest } from "./test/performAdsTxtValidationTest";
import Nav from "@/app/Nav";
import { getScreenshot } from "./test/getScreenshot";
import { processPSIData } from "./netreq";
import { useResultContext } from "@/app/contexts/Result";


function page() {
    return (
        <Suspense>
            <YourComponent />
        </Suspense>
    );
}


interface Outdata {
    seoScore: number,
    wordCount: number,
    keywordSeoScore: number,
    keywordFrequency: number,
    messages: { warnings: string[], goodPoints: string[], minorWarnings: string[] },
    keywordDensity: number,
    subKeywordDensity: KeywordDensity[],
    totalLinks: number,
    internalLinks: LinksGroup,
    outboundLinks: LinksGroup,
    titleSEO: {
        subKeywordsWithTitle: KeywordDensity[],
        keywordWithTitle: KeywordDensity,
        wordCount: number
    }
}
interface scrapeData {
    title: any;
    htmlText: any;
    keywords: any;
    subKeywords: any;
    metaDescription: any;
    languageCode: any;
    countryCode: any;
}
interface psiData {
    id: any
}
async function YourComponent() {
    const searchParams = useSearchParams();
    const [loading, setloading] = useState(true);
    const [url, seturl] = useState<string | null>(null);
    useEffect(() => {
        let url = searchParams.get("url");
        seturl(url)
        fetchData(url);
    }, []);


    const [psiData, setPsiData] = useState({ id: "", lighthouseResult: { audits: {}, finalUrl: "", requestedUrl: "", categories: { performance: { score: 0 }, accessibility: { score: 0 }, "best-practices": { score: 0 } }, categoryGroups: {}, environment: {}, fetchTime: "", finalScreenshot: "", i18n: {}, runWarnings: [], timing: {}, userAgent: "" } });
    const [scrapeData, setScrapeData] = useState<scrapeData | undefined>();
    const [outdata1, setoutdata1] = useState<Outdata | null>(null);;

    const fetchData = async (url: any) => {
        try {
            console.log(process.env.NEXT_PUBLIC_API_HOST);
            
            const [psiRes, scrapeRes] = await Promise.all([
                fetch(`${process.env.NEXT_PUBLIC_API_HOST}/psi?url=${encodeURIComponent(url)}`),
                fetch(`${process.env.NEXT_PUBLIC_API_HOST}/scrape?url=${encodeURIComponent(url)}`)
            ]);

            const [psiData, scrapeData] = await Promise.all([
                psiRes.json(),
                scrapeRes.json()
            ])
            console.log(psiData);
            console.log(scrapeData);

            setPsiData(psiData);
            setScrapeData(scrapeData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    useEffect(() => {

        console.log("fuckk",scrapeData);
        if (!scrapeData) return;
        console.log("fuckk2",scrapeData);

        const fetchData = async () => {

            const contentJson = {
                title: scrapeData?.title,
                htmlText: scrapeData?.htmlText,
                keyword: scrapeData?.title,
                subKeywords: scrapeData?.subKeywords,
                metaDescription: scrapeData?.metaDescription ? scrapeData?.metaDescription: "",
                languageCode: scrapeData?.languageCode ? scrapeData?.languageCode : "",
                countryCode: scrapeData?.countryCode ? scrapeData?.countryCode : ""
            };


            try {
                const seoCheck = new SeoCheck(contentJson, 'liveinabroad.com');
                const result: Outdata = await seoCheck.analyzeSeo();
                setoutdata1(result);
            } catch (error) {
                console.error("SEO analysis failed", error);
            }
        };
        fetchData().then(() => {
            setloading(false)
        })

    }, [scrapeData]);
    const { Failed, appendToFailed, appendToSuccess, Success } = useResultContext();

    const [BrokenLink, setBrokenLink] = useState<any>({});
    const [MetaTitle, setMetaTitle] = useState<any>({});
    const [MetaDesc, setMetaDesc] = useState<any>({});
    const [SocialMedia, setSocialMedia] = useState<any>({});
    const [MostCommonKeyword, setMostCommonKeyword] = useState<any>({});
    const [HeadingTagData, setHeadingTagData] = useState<any>({});
    const [SEOFriendlyUrl, setSEOFriendlyUrl] = useState<any>({});
    const [ImageAltData, setImageAltData] = useState<any>({});
    const [ResponsiveImgData, setResponsiveImgData] = useState<any>({});
    const [ImageAspectRatioData, setImageAspectRatioData] = useState<any>({});
    const [InlineCssData, setInlineCssData] = useState<any>({});
    const [DeprecatedHtmlTagsData, setDeprecatedHtmlTagsData] = useState<any>({});
    const [GoogleAnalyticsData, setGoogleAnalyticsData] = useState<any>({});
    const [FaviconData, setFaviconData] = useState<any>({});
    const [BacklinksData, setBacklinksData] = useState<any>({});
    const [JSErrorData, setJSErrorData] = useState<any>({});
    const [ConsoleErrorsData, setConsoleErrorsData] = useState<any>({});
    const [CharsetDeclarationData, setCharsetDeclarationData] = useState<any>({});
    const [HTMLPageSizeData, setHTMLPageSizeData] = useState<any>({});
    const [DOMSizeData, setDOMSizeData] = useState<any>({});
    const [HTMLCompressionData, setHTMLCompressionData] = useState<any>({});
    const [SiteLoadingSpeedData, setSiteLoadingSpeedData] = useState<any>({});
    const [JSExecutionTimeData, setJSExecutionTimeData] = useState<any>({});
    const [PageObjectsData, setPageObjectsData] = useState<any>({});
    const [PageCacheData, setPageCacheData] = useState<any>({});
    const [FlashData, setFlashData] = useState<any>({});
    const [CDNUsageData, setCDNUsageData] = useState<any>({});
    const [RenderBlockingResourcesData, setRenderBlockingResourcesData] = useState<any>({});
    const [NestedTableTest, setNestedTableTest] = useState<any>({});
    const [FramesetTest, setFramesetTest] = useState<any>({});
    const [DoctypeTest, setDoctypeTest] = useState<any>({});
    const [UrlRedirectsTest, setUrlRedirectsTest] = useState<any>({});
    const [FirstContentfulPaintTest, setFirstContentfulPaintTest] = useState<any>({});
    const [LargestContentfulPaintTest, setLargestContentfulPaintTest] = useState<any>({});
    const [CumulativeLayoutShiftTest, setCumulativeLayoutShiftTest] = useState<any>({});
    const [URLCaninicalization, setURLCaninicalization] = useState<any>({});
    const [SslCheckerTest, setSslCheckerTest] = useState<any>({});
    const [MixedContentTest, setMixedContentTest] = useState<any>({});
    const [Http2Test, setHttp2Test] = useState<any>({});
    const [HstsTest, setHstsTest] = useState<any>({});
    const [ServerSignatureTest, setServerSignatureTest] = useState<any>({});
    const [PlaintextEmailsTest, setPlaintextEmailsTest] = useState<any>({});
    const [UnsafeCrossOriginLinksTest, setUnsafeCrossOriginLinksTest] = useState<any>({});
    const [MetaViewport, setMetaViewport] = useState<any>({});
    const [MediaQuery, setMediaQuery] = useState<any>({});
    const [MobileSnapshot, setMobileSnapshot] = useState<any>({});
    const [StructuredData, setStructuredData] = useState<any>({});
    const [NoindexTag, setNoindexTag] = useState<any>({});
    const [NoFollowTag, setNoFollowTag] = useState<any>({});
    const [MetaRefreshData, setMetaRefreshData] = useState<any>({});


    useEffect(() => {     
        if (!loading) return;
        setBrokenLink(extractBrokenLinksData(psiData, appendToSuccess, appendToFailed,));
        setSocialMedia(performSocialMediaTest(psiData, appendToSuccess, appendToFailed))
        // setSEOFriendlyUrl(extractSEOFriendlyUrlData(psiData, appendToSuccess, appendToFailed))
        setImageAltData(extractImageAltTestData(psiData, appendToSuccess, appendToFailed))
        setResponsiveImgData(extractResponsiveImageData(psiData, appendToSuccess, appendToFailed))
        setImageAspectRatioData(extractImageAspectRatioData(psiData, appendToSuccess, appendToFailed))
        // setInlineCssData(extractInlineCssData(psiData, appendToSuccess, appendToFailed))
        // setDeprecatedHtmlTagsData(extractDeprecatedHtmlTagsData(psiData, appendToSuccess, appendToFailed))
        setGoogleAnalyticsData(performGoogleAnalyticsTest(psiData, appendToSuccess, appendToFailed))
        setFaviconData(performFaviconTest(psiData, appendToSuccess, appendToFailed))
        setBacklinksData(performBacklinksTest(psiData, appendToSuccess, appendToFailed))
        setJSErrorData(performJSErrorTest(psiData, appendToSuccess, appendToFailed))
        setConsoleErrorsData(performConsoleErrorsTest(psiData, appendToSuccess, appendToFailed))
        setCharsetDeclarationData(performCharsetDeclarationTest(psiData, appendToSuccess, appendToFailed))
        setHTMLPageSizeData(performHTMLPageSizeTest(psiData, appendToSuccess, appendToFailed))
        setDOMSizeData(performDOMSizeTest(psiData, appendToSuccess, appendToFailed))
        setHTMLCompressionData(performHTMLCompressionTest(psiData, appendToSuccess, appendToFailed))
        setSiteLoadingSpeedData(performSiteLoadingSpeedTest(psiData, appendToSuccess, appendToFailed))
        setJSExecutionTimeData(performJSExecutionTimeTest(psiData, appendToSuccess, appendToFailed))
        setPageObjectsData(performPageObjectsTest(psiData, appendToSuccess, appendToFailed))
        // setPageCacheData(performPageCacheTest(psiData, appendToSuccess, appendToFailed))
        setFlashData(performFlashTest(psiData, appendToSuccess, appendToFailed))
        setCDNUsageData(performCDNUsageTest(psiData, appendToSuccess, appendToFailed))
        setRenderBlockingResourcesData(performRenderBlockingResourcesTest(psiData, appendToSuccess, appendToFailed))
        setUrlRedirectsTest(performUrlRedirectsTest(psiData, appendToSuccess, appendToFailed))
        setFirstContentfulPaintTest(performFirstContentfulPaintTest(psiData, appendToSuccess, appendToFailed))
        setLargestContentfulPaintTest(performLargestContentfulPaintTest(psiData, appendToSuccess, appendToFailed))
        setCumulativeLayoutShiftTest(performCumulativeLayoutShiftTest(psiData, appendToSuccess, appendToFailed))
        setHttp2Test(performHttp2Test(psiData, appendToSuccess, appendToFailed))
        setHstsTest(performHstsTest(psiData, appendToSuccess, appendToFailed))
        setServerSignatureTest(performServerSignatureTest(psiData, appendToSuccess, appendToFailed))
        setMetaViewport(performMetaViewportTest(psiData, appendToSuccess, appendToFailed))
        setMediaQuery(performMediaQueryResponsiveTest(psiData, appendToSuccess, appendToFailed))
        setMobileSnapshot(performMobileSnapshotTest(psiData, appendToSuccess, appendToFailed))
        setStructuredData(performStructuredDataTest(psiData, appendToSuccess, appendToFailed))
        setNoindexTag(performNoindexTagTest(psiData, appendToSuccess, appendToFailed))
    }, [psiData]);
    useEffect(() => {
        if (!scrapeData) return;
        setMetaTitle(extractMetaTitle(scrapeData, appendToFailed, appendToSuccess))
        setMetaDesc(extractMetaDescription(scrapeData, appendToFailed, appendToSuccess))
        setMostCommonKeyword(extractMostCommonKeywords(scrapeData, appendToFailed, appendToSuccess))
        setHeadingTagData(extractHeadingTagsData(scrapeData?.htmlText, appendToFailed, appendToSuccess))
        setNestedTableTest(performNestedTablesTest(scrapeData?.htmlText, appendToFailed, appendToSuccess))
        setFramesetTest(performFramesetTest(scrapeData?.htmlText, appendToFailed, appendToSuccess))
        setDoctypeTest(performDoctypeTest(scrapeData?.htmlText, appendToFailed, appendToSuccess))
        setURLCaninicalization(performUrlCanonicalizationTest(scrapeData?.htmlText, appendToFailed, appendToSuccess))
        setSslCheckerTest(performSslCheckerTest(scrapeData?.htmlText, appendToFailed, appendToSuccess))
        setMixedContentTest(performMixedContentTest(scrapeData?.htmlText, appendToFailed, appendToSuccess))
        setPlaintextEmailsTest(performPlaintextEmailsTest(scrapeData?.htmlText, appendToFailed, appendToSuccess))
        setUnsafeCrossOriginLinksTest(performUnsafeCrossOriginLinksTest(scrapeData?.htmlText, appendToFailed, appendToSuccess))
        setNoFollowTag(performNofollowTagTest(scrapeData?.htmlText, appendToFailed, appendToSuccess))
        setMetaRefreshData(performMetaRefreshTest(scrapeData?.htmlText, appendToFailed, appendToSuccess))
    }, [scrapeData]);


    if (loading) {
        return (
            <div className="flex h-screen w-screen items-center justify-center fixed bg-white">
                <div className="loader">
                    <div>
                        <ul>
                            <li>
                                <svg fill="currentColor" viewBox="0 0 90 120">
                                    <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                                </svg>
                            </li>
                            <li>
                                <svg fill="currentColor" viewBox="0 0 90 120">
                                    <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                                </svg>
                            </li>
                            <li>
                                <svg fill="currentColor" viewBox="0 0 90 120">
                                    <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                                </svg>
                            </li>
                            <li>
                                <svg fill="currentColor" viewBox="0 0 90 120">
                                    <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                                </svg>
                            </li>
                            <li>
                                <svg fill="currentColor" viewBox="0 0 90 120">
                                    <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                                </svg>
                            </li>
                            <li>
                                <svg fill="currentColor" viewBox="0 0 90 120">
                                    <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                                </svg>
                            </li>
                        </ul>
                    </div><span>Loading</span></div>
            </div>
        )
    }
    return (
        // <Suspense fallback={<div></div>}>
        <><Nav />
            <div className="hidden fixed  flex-col top-0 left-0 min-w-80 bg-[#F8F9FF] h-full border-r">
                <div className="flex items-center justify-center h-14 border-b p-10 font-semibold">
                    <div>LOGO</div>
                </div>
                <div className="overflow-y-auto overflow-x-hidden flex-grow mx-2">
                    <div className="flex flex-col py-4 space-y-5 text-[#4E4D4D] font-semibold">

                        <a href="#" className="relative flex  items-center justify-center focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center  bg-[#2D2D2D] rounded-2xl text-white">

                                {/* <img svg="/appGrid.svg" className="hover:fill-white" alt="" srcSet="" /> */}
                                <svg width="21px" height="20px" viewBox="0 0 21 20" version="1.1" xmlns="http://www.w3.org/2000/svg" className="fill-white">

                                    <g id="Page-1" stroke="none" strokeWidth="1" >
                                        <g id="Dribbble-Light-Preview" transform="translate(-99.000000, -200.000000)" >
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M60.85,51 L57.7,51 C55.96015,51 54.55,52.343 54.55,54 L54.55,57 C54.55,58.657 55.96015,60 57.7,60 L60.85,60 C62.58985,60 64,58.657 64,57 L64,54 C64,52.343 62.58985,51 60.85,51 M49.3,51 L46.15,51 C44.41015,51 43,52.343 43,54 L43,57 C43,58.657 44.41015,60 46.15,60 L49.3,60 C51.03985,60 52.45,58.657 52.45,57 L52.45,54 C52.45,52.343 51.03985,51 49.3,51 M60.85,40 L57.7,40 C55.96015,40 54.55,41.343 54.55,43 L54.55,46 C54.55,47.657 55.96015,49 57.7,49 L60.85,49 C62.58985,49 64,47.657 64,46 L64,43 C64,41.343 62.58985,40 60.85,40 M52.45,43 L52.45,46 C52.45,47.657 51.03985,49 49.3,49 L46.15,49 C44.41015,49 43,47.657 43,46 L43,43 C43,41.343 44.41015,40 46.15,40 L49.3,40 C51.03985,40 52.45,41.343 52.45,43" id="menu_navigation_grid-[#1529]"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <span className="ml-4 text-sm tracking-wide truncate">Overview</span>
                            </div>
                        </a>

                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center hover:bg-[#2D2D2D] duration-150 rounded-2xl hover:text-white">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                </svg>

                                <span className="ml-4 text-sm tracking-wide truncate">Issues</span>
                                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">10+</span>
                            </div>
                        </a>

                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center hover:bg-[#2D2D2D] duration-150 rounded-2xl hover:text-white">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
                                </svg>

                                <span className="ml-4 text-sm tracking-wide truncate">Scrp</span>
                                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
                            </div></a>


                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center hover:bg-[#2D2D2D] duration-150 rounded-2xl hover:text-white">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM15.375 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                                </svg>

                                <span className="ml-4 text-sm tracking-wide truncate">Crawler</span>
                            </div>   </a>





                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center hover:bg-[#2D2D2D] duration-150 rounded-2xl hover:text-white">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                                </svg>

                                <span className="ml-4 text-sm tracking-wide truncate">Images</span>
                            </div>      </a>


                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center hover:bg-[#2D2D2D] duration-150 rounded-2xl hover:text-white">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" />
                                    <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z" clipRule="evenodd" />
                                    <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                                </svg>

                                <span className="ml-4 text-sm tracking-wide truncate">Content</span>
                                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">15</span>
                            </div>         </a>



                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center hover:bg-[#2D2D2D] duration-150 rounded-2xl hover:text-white">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
                                </svg>

                                <span className="ml-4 text-sm tracking-wide truncate">Performance</span>
                            </div> </a>



                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center hover:bg-[#2D2D2D] duration-150 rounded-2xl hover:text-white">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                </svg>



                                <span className="ml-4 text-sm tracking-wide truncate">Download</span>
                            </div>      </a>


                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center hover:bg-[#2D2D2D] duration-150 rounded-2xl hover:text-white">

                                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>

                                <span className="ml-4 text-sm tracking-wide truncate">New</span>
                            </div>      </a>

                    </div>
                </div>
            </div>
            <div className="flex pt-32 bg-[#c9d2fc55]">

                <div className=' flex grow  flex-col items-center justify-center  text-[#2D2D2D] \' >
                    <div className="w-4/5 flex justify-between items-center py-10 ">
                        <div className="flex flex-col self-start grow ">

                            <div className="text-xl  font-semibold">{scrapeData ? scrapeData.title : <></>}</div>
                            <a className="text-xs  font-base text-blue-500 underline" href={psiData && psiData?.id}>{psiData ? psiData?.id : <></>}</a>
                        </div>
                        {/* <button >Print Page</button> */}

                        <button onClick={() => window.print()} className="flex bg-[#2D2D2D] rounded-2xl p-2 text-white px-4">
                            Download

                        </button>
                    </div>
                    <div className="w-4/5 flex mt-4 flex-wrap justify-between">

                        <div className="grow mr-4 rounded-lg flex flex-col bg-white justify-around p-10  text-[#2D2D2D] flex ">
                            <div className="flex items-center justify-around ">

                                <div className=" flex flex-col justify-center mr-2 bg-white  rounded-lg  items-center ">
                                    <div className="radial-progress bg-green-100 text-green-500 text-2xl" style={{ "--size": "12rem", "--thickness": "10px", "--value": outdata1 ? outdata1.seoScore : 0 } as React.CSSProperties} role="progressbar">{outdata1 ? Math.floor(outdata1.seoScore) : null}</div>
                                    <div className="text-2xl mt-2 font-semibold ">SEO</div>
                                </div>
                                <div className=" flex items-center justify-center">
                                    <table className="table-fixed table-zebra font-medium">
                                        <tbody>
                                            <tr>
                                                <td className="w-40 text-green-500 p-4">Passed</td>
                                                <td className="p-4">{Success.length}</td>

                                            </tr>
                                            <tr>
                                                <td className="text-red-400 p-4">Failed</td>
                                                <td className="p-4">{Failed.length}</td>

                                            </tr>
                                            <tr>
                                                <td className="text-yellow-500 p-4">Warnings</td>
                                                <td className="p-4">{outdata1 && outdata1.messages.warnings.length}</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="grow flex mt-10">
                                <div className=" flex flex-col justify-center mr-2 bg-white  rounded-lg grow items-center">
                                    <div className="radial-progress bg-yellow-100 text-yellow-400" style={{ "--value": psiData?.lighthouseResult.categories.performance.score * 100 } as React.CSSProperties} role="progressbar">{Math.floor(psiData?.lighthouseResult.categories.performance.score * 100)}</div>
                                    <div className="text-base mt-2 font-semibold ">Performaance</div>

                                </div>
                                <div className=" flex flex-col justify-center mx-2 bg-white  rounded-lg grow items-center">
                                    <div className="radial-progress bg-red-100 text-red-400" style={{ "--value": psiData?.lighthouseResult.categories.accessibility.score * 100 } as React.CSSProperties} role="progressbar">{psiData?.lighthouseResult.categories.accessibility.score * 100}</div>
                                    <div className="text-base mt-2 font-semibold ">Accessibility</div>

                                </div>
                                <div className=" flex flex-col justify-center ml-2 bg-white  rounded-lg grow items-center">
                                    <div className="radial-progress bg-yellow-100 text-yellow-400" style={{ "--value": psiData?.lighthouseResult.categories?.["best-practices"].score * 100 } as React.CSSProperties} role="progressbar">{psiData?.lighthouseResult.categories?.["best-practices"].score * 100}</div>
                                    <div className="text-base mt-2 font-semibold ">Best Practices</div>

                                </div>
                            </div>

                        </div>
                        <div className=" flex rounded-lg bg-white  ">
                            <div className=" p-4  flex items-center justify-center">
                                <img src={getScreenshot(psiData)} alt="" srcSet="" />
                            </div>

                        </div>
                    </div>

                    <div className="flex w-4/5 justify-between mt-10 text-[#2D2D2D] overflow-x-hidden">

                        <div className=" flex flex-col justify-center mr-2 bg-white p-10 rounded-lg grow items-center ">
                            <div className="text-green-500 text-xl font-semibold" >1.5 s</div>
                            <div className="text-base mt-2 font-semibold whitespace-nowrap	">First Contentful Paint</div>
                        </div>
                        <div className=" flex flex-col justify-center mx-2 bg-white p-10 rounded-lg grow items-center">
                            <div className=" text-red-400 text-xl font-semibold" role="progressbar">2,120 ms</div>
                            <div className="text-base mt-2 font-semibold whitespace-nowrap	 ">Total Blocking Time</div>

                        </div>
                        <div className=" flex flex-col justify-center mx-2 bg-white p-10 rounded-lg grow items-center">
                            <div className="text-red-400 text-xl font-semibold" role="progressbar">5.1 s</div>
                            <div className="text-base mt-2 font-semibold whitespace-nowrap	">Speed Index</div>

                        </div>
                        <div className=" flex flex-col justify-center mx-2 bg-white p-10 rounded-lg grow items-center">
                            <div className=" text-yellow-400 text-xl font-semibold" role="progressbar">13.5 s</div>
                            <div className="text-base mt-2 font-semibold whitespace-nowrap	">Largest Contentful Paint</div>

                        </div>
                        <div className=" flex flex-col justify-center ml-2 bg-white p-10 rounded-lg grow items-center">
                            <div className=" text-green-500 text-xl font-semibold" role="progressbar">0</div>
                            <div className="text-base mt-2 font-semibold whitespace-nowrap	">Cumulative Layout Shift</div>

                        </div>
                    </div>
                    <div className="w-4/5  mt-10 p-4 rounded bg-white">
                        <div role="tablist" className="tabs tabs-lifted grow font-medium ">
                            <a role="tab" className="tab tab-active p-4">Good Points</a>
                            <a role="tab" className="tab p-4" href="#Minor Warnings">Minor Warnings</a>
                            <a role="tab" className="tab p-4" href="#Warnings">Warnings</a>
                            <a role="tab" className="tab p-4" href="#Common SEO Issues">Common SEO Issues</a>
                            <a role="tab" className="tab p-4" href="#Speed optimizations">Speed optimizations</a>
                            <a role="tab" className="tab p-4" href="#Server and Security">Server and Security</a>
                            <a role="tab" className="tab p-4" href="#Mobile Test">Mobile Test</a>
                            <a role="tab" className="tab p-4" href="#Advanced SEO">Advanced SEO</a>
                        </div>
                    </div>
                    <div className="w-4/5  my-10 mt-0  p-20 pt-0 rounded bg-white max-h-[100vh] overflow-y-auto overflow-x-hidden">
                        <div className="text-2xl my-10 font-semibold">Good Points</div>
                        {outdata1 ? outdata1.messages.goodPoints.map((item: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (

                            <div key={index} className=" flex  my-1 rounded items-center bg-slate-100  p-4 px-2 px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 m-2 text-green-500">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                </svg>


                                <div className="text-sm  font-semibold  whitespace-nowrap truncate">{item}</div>
                                {/* <div className="text-sm">Remark</div> */}
                            </div>
                        )) : <></>}

                    </div>
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white max-h-[100vh] overflow-y-auto overflow-x-auto" id="Minor Warnings" >
                        <div className="text-2xl my-10 font-semibold">Minor Warnings</div>
                        {outdata1 ? outdata1.messages.minorWarnings.map((item: string , index: React.Key | null | undefined) => (

                            <div key={index} className=" flex mx-2 my-1 rounded items-center bg-slate-100 p-4 px-2 overflow-x-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 m-2 text-yellow-300">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                </svg>

                                <div className="text-sm  font-semibold  whitespace-nowrap max-w-full truncate">{item?.slice(0,100)}</div>
                                {/* <div className="text-sm">Remark</div> */}
                            </div>
                        )) : <></>}

                    </div>
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white max-h-[100vh] overflow-y-auto overflow-x-hidden" id="Warnings">
                        <div className="text-2xl my-10 font-semibold">Warnings</div>
                        {outdata1 ? outdata1.messages.warnings.map((item: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (

                            <div key={index} className="flex mx-2 my-1 rounded items-center p-4 px-2 bg-slate-100">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 m-2 text-red-400">
                                    <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                </svg>


                                <div className="text-sm  font-semibold  whitespace-nowrap truncate">{item}</div>
                                {/* <div className="text-sm">Remark</div> */}
                            </div>
                        )) : <></>}

                    </div>
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white" id="Common SEO Issues">
                        <div className="text-2xl my-10 font-semibold">Common SEO Issues</div>


                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center p-4 px-2">
                            <div className="mx-4">

                                {MetaTitle.Result == "Success" ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    : MetaTitle.Result == "Error" ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 m-2 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    ) : <></>}
                            </div>

                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Meta Title Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">{MetaTitle.Description}</div>
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    <div className="text-sm">Text: {MetaTitle.Text}</div>
                                    <div className="text-sm">Length:{MetaTitle.Length}</div>
                                    <a href={MetaTitle.Link} className="text-sm">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
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
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Meta Description Test</div>
                            <div className="flex flex-col overflow-auto">
                                <div className="text-sm">{MetaDesc.Description}</div>
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    <div className="text-sm">Text: {MetaDesc.Text}</div>
                                    <div className="text-sm">{MetaDesc.Length}</div>
                                    <a href={MetaDesc.Link} className="text-sm">Learn More</a>

                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
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
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Google Search Result Preview Test</div>
                            <div className="flex flex-col overflow-auto">
                                {/* <div className="text-sm">{MetaDesc.Description}</div> */}
                                <div className="bg-white border-4 border-slate-200 text-slate-700 p-3 my-3">
                                    <div className="text-sm  font-base text-blue-500  text-[#008744] truncate">{psiData ? psiData?.id : <></>}</div>

                                    <div className="text-base text-[#0057e7] truncate font-medium	">{MetaTitle.Text}</div>
                                    <div className="text-sm line-clamp-2">{MetaDesc.Text}</div>
                                    {/* <a href={extractMetaDescription(scrapeData).Link} className="text-sm">Learn More</a> */}

                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {SocialMedia.HasSocialMediaTags ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 m-2 text-red-400">
                                        <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                    </svg>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Social Media Meta Tags Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    <div className="text-sm">{SocialMedia.Description}</div>
                                    {/* <div className="text-sm">{SocialMedia.HasSocialMediaTags}</div> */}
                                    <a className="text-sm" href={SocialMedia.Link}>Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {SocialMedia.HasSocialMediaTags ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 m-2 text-red-400">
                                        <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                    </svg>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Most Common keyword Test</div>
                            <div className="flex flex-col">
                                <div className="text-sm"> {MostCommonKeyword.Description}</div>
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    <div className="text-sm">{MostCommonKeyword.Keywords}</div>
                                    <a className="text-sm" href={MostCommonKeyword.Link}>Learn More</a>

                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {HeadingTagData.HasH1Tags ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Heading Tags Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    <div className="text-sm">{HeadingTagData.Description}</div>
                                    <a className="text-sm" href={HeadingTagData.Link}>Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {extractRobotsTxtData(psiData).HasRobotsTxt ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Robots.txt Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    <div className="text-sm">{extractRobotsTxtData(psiData).Description}</div>
                                    <a className="text-sm" href={extractRobotsTxtData(psiData).Link}>Leran more</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {extractSitemapData(psiData).HasSitemap ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Sitemap Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    <div className="text-sm">{extractSitemapData(psiData).Description}</div>
                                    <a className="text-sm" href={extractSitemapData(psiData).Link}>Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2 hidden">
                            <div className="mx-4">

                                {SEOFriendlyUrl.URLs && SEOFriendlyUrl.URLs.length == 0 ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">SEO Friendly URL Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {SEOFriendlyUrl.Link}</div> */}
                                    <div className="text-sm">{SEOFriendlyUrl.Description}</div>
                                    <a className="text-sm" href={SEOFriendlyUrl.Link}>Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {!BrokenLink?.BrokenLink ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Broken Link Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {JSON.stringify(extractBrokenLinksData(psiData).BrokenLinks)}</div> */}
                                    <div className="text-sm">{BrokenLink?.Description}</div>
                                    {/* <div className="text-sm">{JSON.stringify(BrokenLink?.BrokenLinks)}</div> */}
                                    <a className="text-sm" href={BrokenLink?.Link}>Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2 hidden">
                            <div className="mx-4">

                                {SEOFriendlyUrl.URLs && SEOFriendlyUrl.URLs.length == 0 ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Image Alt Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    <div className="text-sm">{ImageAltData.Images}</div>
                                    {/* <div className="text-sm">{ImageAltData.Images}</div> */}
                                    <a className="text-sm" href={ImageAltData.Link}>Learn More</a>

                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {ResponsiveImgData.Images && ResponsiveImgData.Images.length == 0 ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Responsive Image Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {ResponsiveImgData.Link}</div> */}
                                    <div className="text-sm">{ResponsiveImgData.Description}</div>
                                    <a className="text-sm" href={ResponsiveImgData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {ImageAspectRatioData.Images && ImageAspectRatioData.Images.length == 0 ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Image Aspect Ratio Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {ImageAspectRatioData.Link}</div> */}
                                    <div className="text-sm">{ImageAspectRatioData.Description}</div>
                                    <a className="text-sm" href={ImageAspectRatioData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2 hidden">
                            <div className="mx-4">

                                {InlineCssData.Importance == "High" ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Inline CSS Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {InlineCssData.Link}</div> */}
                                    <div className="text-sm">{InlineCssData.Description}</div>
                                    <a className="text-sm" href={InlineCssData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2 hidden">
                            <div className="mx-4">

                                {DeprecatedHtmlTagsData.DeprecatedTags && DeprecatedHtmlTagsData.DeprecatedTags.length == 0 ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Deprecated HTML Tags Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {DeprecatedHtmlTagsData.Link}</div> */}
                                    <div className="text-sm">{DeprecatedHtmlTagsData.Description}</div>
                                    <a className="text-sm" href={DeprecatedHtmlTagsData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {GoogleAnalyticsData.HasGoogleAnalytics ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Google Analysis Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {GoogleAnalyticsData.Link}</div> */}
                                    <div className="text-sm">{GoogleAnalyticsData.Description}</div>
                                    <a className="text-sm" href={GoogleAnalyticsData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {FaviconData.HasFavicon ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Favicon Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {FaviconData.Link}</div> */}
                                    <div className="text-sm">{FaviconData.Description}</div>
                                    <a className="text-sm" href={FaviconData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {BacklinksData.TotalBacklinks ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Backlink Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {BacklinksData.Link}</div> */}
                                    <div className="text-sm">{BacklinksData.Description}</div>
                                    <a className="text-sm" href={BacklinksData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {!JSErrorData.HasJSErrors ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">JS Error Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {JSErrorData.Link}</div> */}
                                    <div className="text-sm">{JSErrorData.Description}</div>
                                    <a className="text-sm" href={JSErrorData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {!ConsoleErrorsData.HasConsoleErrors ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Console Errors Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {ConsoleErrorsData.Link}</div> */}
                                    <div className="text-sm">{ConsoleErrorsData.Description}</div>
                                    <a className="text-sm" href={ConsoleErrorsData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {CharsetDeclarationData.HasCharsetDeclaration ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Charset Decleration Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {CharsetDeclarationData.Link}</div> */}
                                    <div className="text-sm">{CharsetDeclarationData.Description}</div>
                                    <a className="text-sm" href={CharsetDeclarationData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                    </div>
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white" id="Speed optimizations">

                        <div className="text-2xl my-10 font-semibold">Speed optimizations</div>


                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {HTMLPageSizeData.HTMLPageSizeBytes ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">HTML Page Size Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {HTMLPageSizeData.Link}</div> */}
                                    <div className="text-sm">{HTMLPageSizeData.Description}</div>
                                    <a className="text-sm" href={HTMLPageSizeData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {DOMSizeData.DOMSize ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">DOM Size Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {DOMSizeData.Link}</div> */}
                                    <div className="text-sm">{DOMSizeData.Description}</div>
                                    <a className="text-sm" href={DOMSizeData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {HTMLCompressionData.IsCompressed ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">HTML Compression/GZIP Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {HTMLCompressionData.Link}</div> */}
                                    <div className="text-sm">{HTMLCompressionData.Description}</div>
                                    <a className="text-sm" href={HTMLCompressionData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {SiteLoadingSpeedData.FirstContentfulPaint ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Site Loading Speed Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {SiteLoadingSpeedData.Link}</div> */}
                                    <div className="text-sm">{SiteLoadingSpeedData.Description}</div>
                                    <a className="text-sm" href={SiteLoadingSpeedData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {JSExecutionTimeData.ScriptBootUpTime ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">JS Execution Time Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {JSExecutionTimeData.Link}</div> */}
                                    <div className="text-sm">{JSExecutionTimeData.Description}</div>
                                    <a className="text-sm" href={JSExecutionTimeData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {PageObjectsData.ResourceSummary ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Page Objects Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {PageObjectsData.Link}</div> */}
                                    <div className="text-sm">{PageObjectsData.Description}</div>
                                    <a className="text-sm" href={PageObjectsData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2 hidden">
                            <div className="mx-4">

                                {PageCacheData.CacheLifetimeMs ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Page Cache Test (Server Side Caching )</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {PageCacheData.Link}</div> */}
                                    <div className="text-sm">{PageCacheData.Description}</div>
                                    <a className="text-sm" href={PageCacheData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {!FlashData.HasFlashContent ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Flash Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {FlashData.Link}</div> */}
                                    <div className="text-sm">{FlashData.Description}</div>
                                    <a className="text-sm" href={FlashData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {CDNUsageData.HasCDNUsage ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">CDN Usage Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {CDNUsageData.Link}</div> */}
                                    <div className="text-sm">{CDNUsageData.Description}</div>
                                    <a className="text-sm" href={CDNUsageData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        {/* <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {extractResponsiveImageData(psiData).Images.length == 0 ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Modern Image Format Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    <div className="text-sm">Text: {performModernImageFormatTest(psiData).Link}</div>
                                <div className="text-sm">{performModernImageFormatTest(psiData).Description}</div>
                                    <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a>
                                
                                </div>                            </div>
                        </div> */}
                        {/* <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {extractResponsiveImageData(psiData).Images.length == 0 ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Image Metadata Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    <div className="text-sm">Text: {performImageMetadataTest(psiData).Link}</div>
                                    <div className="text-sm">{performImageMetadataTest(psiData).Description}</div> 
                                    <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a>
                                   
                                </div>                            </div>
                        </div> */}
                        {/* <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Image Caching Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                <div className="text-sm">Text: {performImageCachingTest(psiData).Link}</div>
                                <div className="text-sm">{performImageCachingTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        {/* <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">JavaScript Caching Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                <div className="text-sm">Text: {performJavaScriptCachingTest(psiData).Link}</div>
                                <div className="text-sm">{performJavaScriptCachingTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        {/* <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">CSS Caching Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                <div className="text-sm">Text: {performCssCachingTest(psiData).Link}</div>
                                <div className="text-sm">{performCssCachingTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        {/* <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Javascript Minification Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                <div className="text-sm">Text: {performCssMinificationTest(psiData).Link}</div>
                                <div className="text-sm">{performCssMinificationTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        {/* <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">JS  Minification Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                <div className="text-sm">Text: {performCssMinificationTest(psiData).Link}</div>
                                <div className="text-sm">{performCssMinificationTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {!RenderBlockingResourcesData.HasRenderBlockingResources ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Render Blocking Resources Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {RenderBlockingResourcesData.Link}</div> */}
                                    <div className="text-sm">{RenderBlockingResourcesData.Description}</div>
                                    <a className="text-sm" href={RenderBlockingResourcesData.Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {NestedTableTest.HasNestedTables ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Nested Table Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {NestedTableTest.HasNestedTables}</div> */}
                                    <div className="text-sm">{NestedTableTest.Description}</div>
                                    {/* <a className="text-sm" href={NestedTableTest.Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {FramesetTest.HasFrameset ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Frameset Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {FramesetTest.HasFrameset}</div> */}
                                    <div className="text-sm">{FramesetTest.Description}</div>
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>

                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {DoctypeTest.HasCorrectDoctype ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Doctype Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {DoctypeTest.HasCorrectDoctype}</div> */}
                                    <div className="text-sm">{DoctypeTest.Description}</div>
                                    {/* <a className="text-sm" href={performDoctypeTest(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {UrlRedirectsTest.HasRedirects ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">URL Redirects Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {UrlRedirectsTest.HasRedirects}</div> */}
                                    <div className="text-sm">{UrlRedirectsTest.Description}</div>
                                    {/* <a className="text-sm" href={UrlRedirectsTest.Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {FirstContentfulPaintTest.Fcp != -1 ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">First Contentful Paint Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {FirstContentfulPaintTest.Fcp}</div> */}
                                    <div className="text-sm">{FirstContentfulPaintTest.Description}</div>
                                    {/* <a className="text-sm" href={performFirstContentfulPaintTest(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {LargestContentfulPaintTest.Lcp != -1 ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Largest Contentful Paint Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {LargestContentfulPaintTest.Lcp}</div> */}
                                    <div className="text-sm">{LargestContentfulPaintTest.Description}</div>
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {CumulativeLayoutShiftTest.Cls != -1 ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Cumulative Layout Shift Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {CumulativeLayoutShiftTest.Cls}</div> */}
                                    <div className="text-sm">{CumulativeLayoutShiftTest.Description}</div>
                                    {/* <a className="text-sm" href={CumulativeLayoutShiftTest.Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="w-full mx-2 grow p-0 my-5 mb-10">
                            <div className="text-xl text-left font-semibold w-full px-4 mt-4 m-0 h-10">Network Requests</div>
                            <div className="overflow-auto max-h-96">
                                <table className="table w-full table-fixed table-zebra winter table-pin-rows text-[#2D2D2D]	table-pin-cols">
                                    <thead className="fixed-header">
                                        <tr>
                                            <th className="bg-white w-60">URL</th>
                                            <th className="bg-white w-16">Status Code</th>
                                            <th className="bg-white w-16">Protocol</th>
                                            <th className="bg-white w-24">Transfer Size (KB)</th>
                                            <th className="bg-white w-24">Resource Size (KB)</th>
                                            <th className="bg-white w-20">Priority</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {processPSIData(psiData).map((item: { url: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; statusCode: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; protocol: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; transferSizeKB: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; resourceSizeKB: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; priority: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
                                            <tr key={index}>
                                                <td className="w-60 truncate">{item.url}</td>
                                                <td>{item.statusCode}</td>
                                                <td>{item.protocol}</td>
                                                <td>{item.transferSizeKB}</td>
                                                <td>{item.resourceSizeKB}</td>
                                                <td>{item.priority}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white" id="Server and Security">

                        <div className="text-2xl my-10 font-semibold">Server and Security</div>

                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {URLCaninicalization.IsCanonicalized ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">URL Caninicalization Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {URLCaninicalization.IsCanonicalized}</div> */}
                                    <div className="text-sm">{URLCaninicalization.Description}</div>
                                    {/* <a className="text-sm" href={performUrlCanonicalizationTest(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {SslCheckerTest.IsSecure ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">SSL Checker and HTTPS Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {SslCheckerTest.IsSecure}</div> */}
                                    <div className="text-sm">{SslCheckerTest.Description}</div>
                                    {/* <a className="text-sm" href={performSslCheckerTest(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {MixedContentTest.HasMixedContent ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Mixed Content Test (HTTP over HTTPS)</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {MixedContentTest.HasMixedContent}</div> */}
                                    <div className="text-sm">{MixedContentTest.Description}</div>
                                    {/* <a className="text-sm" href={performMixedContentTest(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {Http2Test.IsHttp2 ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">HTTP2 Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {Http2Test.IsHttp2}</div> */}
                                    <div className="text-sm">{Http2Test.Description}</div>
                                    {/* <a className="text-sm" href={Http2Test.Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {HstsTest.IsHstsEnabled ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">HSTS Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {HstsTest.IsHstsEnabled}</div> */}
                                    <div className="text-sm">{HstsTest.Description}</div>
                                    {/* <a className="text-sm" href={HstsTest.Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        {/* <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Safe Browsing Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">
                            
                            <div className="text-sm">Text: {JSON.stringify(performSafeBrowsingTest(psiData.lighthouseResult.requestedUrl))}</div>
                            {/* <div className="text-sm">{performSafeBrowsingTest(psiData.lighthouseResult.requestedUrl).Description}</div> */}
                        {/* </div>
                        </div> */}
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {!ServerSignatureTest.IsServerSignaturePresent ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Server Signature Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {ServerSignatureTest.IsServerSignaturePresent}</div> */}
                                    <div className="text-sm">{ServerSignatureTest.Description}</div>
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                         </div>
                        </div>
                        {/* <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Directory Browsing Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                <div className="text-sm">Text: {performDirectoryBrowsingTest(psiData).IsServerSignaturePresent}</div>
                                <div className="text-sm">{performDirectoryBrowsingTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {!PlaintextEmailsTest.HasPlaintextEmails ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Plaintext Emails Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {PlaintextEmailsTest.HasPlaintextEmails}</div> */}
                                    <div className="text-sm">{PlaintextEmailsTest.Description}</div>
                                    {/* <a className="text-sm" href={performPlaintextEmailsTest(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>

                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {!UnsafeCrossOriginLinksTest.HasUnsafeCrossOriginLinks ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Unsafe Cross-Origin Links Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {UnsafeCrossOriginLinksTest.HasUnsafeCrossOriginLinks}</div> */}
                                    <div className="text-sm">{UnsafeCrossOriginLinksTest.Description}</div>
                                    {/* <a className="text-sm" href={performUnsafeCrossOriginLinksTest(psiData).Link}>Learn More</a> */}

                                </div>                           </div>
                        </div>
                    </div>
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white" id="Mobile Test">

                        <div className="text-2xl my-10 font-semibold">Mobile Test</div>

                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {MetaViewport.HasMetaViewport ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Meta Viewport Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {MetaViewport.HasMetaViewport}</div> */}
                                    <div className="text-sm">{MetaViewport.Description}</div>
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {MediaQuery.HasMediaQueries ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Media Query Responsive Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {MediaQuery.HasMediaQueries}</div> */}
                                    <div className="text-sm">{MediaQuery.Description}</div>
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {MobileSnapshot.IsMobileSnapshotValid ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Mobile Snapshot Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {MobileSnapshot.IsMobileSnapshotValid}</div> */}
                                    <div className="text-sm">{MobileSnapshot.Description}</div>
                                    {/* <a className="text-sm" href={MobileSnapshot.Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                    </div>
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white" id="Advanced SEO">

                        <div className="text-2xl my-10 font-semibold">Advanced SEO</div>

                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {StructuredData.HasStructuredData ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Structured Data Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {StructuredData.HasStructuredData}</div> */}
                                    <div className="text-sm">{StructuredData.Description}</div>
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {(await performCustom404ErrorPageTest(psiData && psiData?.lighthouseResult.finalUrl)).HasCustom404ErrorPage ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Custom 404 Error Page Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    <div className="text-sm">{await (await performCustom404ErrorPageTest(psiData.lighthouseResult.finalUrl)).Description}</div>
                                    {/* <div className="text-sm">{performCustom404ErrorPageTest(psiData.lighthouseResult.finalUrl)}</div> */}
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {NoindexTag.HasNoindexTag ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Noindex Tag Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {NoindexTag.HasNoindexTag}</div> */}
                                    <div className="text-sm">{NoindexTag.Description}</div>
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {NoFollowTag.HasNofollowTag ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">NoFollow Tag Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {NoFollowTag.HasNofollowTag}</div> */}
                                    <div className="text-sm">{NoFollowTag.Description}</div>
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {await (await performDisallowDirectiveTest(psiData.lighthouseResult.finalUrl)).HasDisallowDirective ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Disallow Directive Tag Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {await performDisallowDirectiveTest(scrapeData?.htmlText).HasNofollowTag}</div> */}
                                    <div className="text-sm">{await (await performDisallowDirectiveTest(psiData.lighthouseResult.finalUrl)).Description}</div>
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {MetaRefreshData.HasMetaRefreshTag ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Meta Refresh Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {MetaRefreshData.HasMetaRefreshTag}</div> */}
                                    <div className="text-sm">{MetaRefreshData.Description}</div>
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        {/* <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">SPF Records Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                {/* <div className="text-sm">Text: {performSpfRecordsTest(scrapeData?.htmlText).HasMetaRefreshTag}</div> */}
                        {/* <div className="text-sm">{await (await performSpfRecordsTest(scrapeData?.htmlText)).Description}</div>
                            </div>
                        </div> */}

                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {await (await performAdsTxtValidationTest(psiData.lighthouseResult.finalUrl)).IsValidAdsTxt ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    :
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                }
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Ads.txt Validation Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {performAdsTxtValidationTest(scrapeData.htmlText).HasMetaRefreshTag}</div> */}
                                    <div className="text-sm">{await (await performAdsTxtValidationTest(psiData.lighthouseResult.finalUrl)).Description}</div>
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>



                    </div>
                    {/* <div className="flex flex-col my-10 p-1 bg-white">
                        {test.map((item, index) => (

                            <div key={index} className="flex mx-2 my-1 rounded items-center border p-2">
                                <div className="rounded-full bg-slate-500 h-10 mx-2 w-10"></div>
                                <div className="text-sm min-w-80 font-semibold mx-2">{item.title}</div>
                                <div className="text-sm">Remark</div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </>
        // </Suspense>

    )
}

export default page