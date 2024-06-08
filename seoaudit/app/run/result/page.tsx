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


function page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
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
    keyword: any;
    subKeywords: any;
    metaDescription: any;
    languageCode: any;
    countryCode: any;
}
interface psiData{
    id:any
}
function YourComponent() {
    const searchParams = useSearchParams();
    const [url, seturl] = useState<string | null>(null);
    useEffect(() => {
        let url = searchParams.get("url");
        seturl(url)
        fetchData(url);
    }, []);



    const [psiData, setPsiData] = useState<psiData>();
    const [scrapeData, setScrapeData] = useState<scrapeData | undefined>();
    const [outdata1, setoutdata1] = useState<Outdata | null>(null);;

    const fetchData = async (url: any) => {
        try {
            const [psiRes, scrapeRes] = await Promise.all([
                fetch(`http://localhost:10000/psi?url=${encodeURIComponent(url)}`),
                fetch(`http://localhost:10000/scrape?url=${encodeURIComponent(url)}`)
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
        if (!scrapeData) return;

        const fetchData = async () => {
            console.log(scrapeData);

            const contentJson = {
                title: scrapeData?.title,
                htmlText: scrapeData?.htmlText,
                keyword: scrapeData?.title,
                subKeywords: scrapeData?.subKeywords,
                metaDescription: scrapeData?.metaDescription,
                languageCode: scrapeData?.languageCode,
                countryCode: scrapeData?.countryCode
            };

            const seoCheck = new SeoCheck(contentJson, 'liveinabroad.com');

            try {
                const result: Outdata = await seoCheck.analyzeSeo();
                setoutdata1(result);
            } catch (error) {
                console.error("SEO analysis failed", error);
            }
        };
        fetchData();

    }, [scrapeData]);



    return (
        <Suspense fallback={<div>Loading...</div>}>
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
            <div className="flex">
                
                <div className=' flex grow  flex-col items-center justify-center bg-[#c9d2fc55] text-[#2D2D2D] ' >
                    <div className="flex justify-between items-center self-start p-10 w-full">
                        <div className="flex flex-col self-start grow">

                            <div className="text-xl  font-semibold">{scrapeData ? scrapeData.title : <></>}</div>
                            <div className="text-xs  font-base text-blue-500 underline">{psiData ? psiData?.id : <></>}</div>
                        </div>
                        <div className="flex  ">
                            <input type="text" placeholder="Search Anything" className="px-4 p-2 border-0 border-gray-300  rounded" />
                        </div>
                    </div>
                    <div className="flex w-4/5 justify-between mt-10 text-[#2D2D2D]">

                        <div className=" flex flex-col justify-center mr-2 bg-white p-10 rounded-lg grow items-center ">
                            <div className="radial-progress bg-green-100 text-green-500" style={{ "--value": outdata1 ? outdata1.seoScore : 0 } as React.CSSProperties} role="progressbar">{outdata1 ? Math.floor(outdata1.seoScore) : null}</div>
                            <div className="text-base mt-2 font-semibold ">SEO</div>
                        </div>
                        <div className=" flex flex-col justify-center mx-2 bg-white p-10 rounded-lg grow items-center">
                            <div className="radial-progress bg-yellow-100 text-yellow-400" style={{ "--value": 40 } as React.CSSProperties} role="progressbar">40</div>
                            <div className="text-base mt-2 font-semibold ">Performaance</div>

                        </div>
                        <div className=" flex flex-col justify-center mx-2 bg-white p-10 rounded-lg grow items-center">
                            <div className="radial-progress bg-red-100 text-red-400" style={{ "--value": 10 } as React.CSSProperties} role="progressbar">10</div>
                            <div className="text-base mt-2 font-semibold ">Accessibility</div>

                        </div>
                        <div className=" flex flex-col justify-center ml-2 bg-white p-10 rounded-lg grow items-center">
                            <div className="radial-progress bg-yellow-100 text-yellow-400" style={{ "--value": 32 } as React.CSSProperties} role="progressbar">32</div>
                            <div className="text-base mt-2 font-semibold ">Best Practices</div>

                        </div>
                    </div>
                    <div className="w-4/5 flex mt-4 flex-wrap justify-between">

                        <div className="grow mr-4 rounded-lg flex bg-white    ">
                            <div className="w-80 mx-2  h-96 flex items-center justify-center">
                            </div>

                        </div>
                        <div className="w-2/5 flex rounded-lg bg-white  ">
                            <div className="w-80 mx-2  h-96 flex items-center justify-center">
                            </div>

                        </div>
                    </div>
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white">
                        <div className="text-2xl my-10 font-semibold">Good Points</div>
                        {outdata1 ? outdata1.messages.goodPoints.map((item: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (

                            <div key={index} className=" flex  my-1 rounded items-center bg-slate-100  p-4 px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 m-2 text-green-500">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                </svg>


                                <div className="text-sm  font-semibold  whitespace-nowrap truncate">{item}</div>
                                {/* <div className="text-sm">Remark</div> */}
                            </div>
                        )) : <></>}

                    </div>
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white">
                        <div className="text-2xl my-10 font-semibold">Minor Warnings</div>
                        {outdata1 ? outdata1.messages.minorWarnings.map((item: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (

                            <div key={index} className=" flex mx-2 my-1 rounded items-center bg-slate-100 p-4 px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 m-2 text-yellow-300">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                </svg>

                                <div className="text-sm  font-semibold  whitespace-nowrap truncate">{item}</div>
                                {/* <div className="text-sm">Remark</div> */}
                            </div>
                        )) : <></>}

                    </div>
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white">
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
        </Suspense>

    )
}

export default page