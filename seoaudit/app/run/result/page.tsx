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
        // fetchData(url);
    }, []);



    const [psiData, setPsiData] = useState({
        "captchaResult": "CAPTCHA_NOT_NEEDED",
        "kind": "pagespeedonline#result",
        "id": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",

        "lighthouseResult": {
            "requestedUrl": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
            "finalUrl": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
            "mainDocumentUrl": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
            "finalDisplayedUrl": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
            "lighthouseVersion": "12.0.0",
            "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/125.0.6422.154 Safari/537.36",
            "fetchTime": "2024-06-20T04:19:52.552Z",

            "runWarnings": [],

            "audits": {
                "canonical": {
                    "id": "canonical",
                    "title": "Document does not have a valid `rel=canonical`",
                    "description": "Canonical links suggest which URL to show in search results. [Learn more about canonical links](https://developer.chrome.com/docs/lighthouse/seo/canonical/).",
                    "score": 0,
                    "scoreDisplayMode": "binary",
                    "explanation": "Multiple conflicting URLs (https://takeuforward.org/, https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/)"
                },
                "paste-preventing-inputs": {
                    "id": "paste-preventing-inputs",
                    "title": "Allows users to paste into input fields",
                    "description": "Preventing input pasting is a bad practice for the UX, and weakens security by blocking password managers.[Learn more about user-friendly input fields](https://developer.chrome.com/docs/lighthouse/best-practices/paste-preventing-inputs/).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "items": [],
                        "type": "table",
                        "headings": []
                    }
                },
                "uses-optimized-images": {
                    "id": "uses-optimized-images",
                    "title": "Efficiently encode images",
                    "description": "Optimized images load faster and consume less cellular data. [Learn how to efficiently encode images](https://developer.chrome.com/docs/lighthouse/performance/uses-optimized-images/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "debugData": {
                            "metricSavings": {
                                "FCP": 0,
                                "LCP": 0
                            },
                            "type": "debugdata"
                        },
                        "items": [],
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "headings": [],
                        "type": "opportunity",
                        "overallSavingsMs": 0,
                        "overallSavingsBytes": 0
                    },
                    "warnings": [],
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "table-fake-caption": {
                    "id": "table-fake-caption",
                    "title": "Tables use `<caption>` instead of cells with the `[colspan]` attribute to indicate a caption.",
                    "description": "Screen readers have features to make navigating tables easier. Ensuring that tables use the actual caption element instead of cells with the `[colspan]` attribute may improve the experience for screen reader users. [Learn more about captions](https://dequeuniversity.com/rules/axe/4.9/table-fake-caption).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "html-lang-valid": {
                    "id": "html-lang-valid",
                    "title": "`<html>` element has a valid value for its `[lang]` attribute",
                    "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.9/html-lang-valid).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "type": "table",
                        "items": [],
                        "headings": []
                    }
                },
                "focus-traps": {
                    "id": "focus-traps",
                    "title": "User focus is not accidentally trapped in a region",
                    "description": "A user can tab into and out of any control or region without accidentally trapping their focus. [Learn how to avoid focus traps](https://developer.chrome.com/docs/lighthouse/accessibility/focus-traps/).",
                    "score": null,
                    "scoreDisplayMode": "manual"
                },
                "unminified-css": {
                    "id": "unminified-css",
                    "title": "Minify CSS",
                    "description": "Minifying CSS files can reduce network payload sizes. [Learn how to minify CSS](https://developer.chrome.com/docs/lighthouse/performance/unminified-css/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "headings": [],
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "debugData": {
                            "type": "debugdata",
                            "metricSavings": {
                                "FCP": 0,
                                "LCP": 0
                            }
                        },
                        "overallSavingsMs": 0,
                        "type": "opportunity",
                        "overallSavingsBytes": 0,
                        "items": []
                    },
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "target-size": {
                    "id": "target-size",
                    "title": "Touch targets have sufficient size and spacing.",
                    "description": "Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets. [Learn more about touch targets](https://dequeuniversity.com/rules/axe/4.9/target-size).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "headings": [],
                        "type": "table",
                        "items": []
                    }
                },
                "geolocation-on-start": {
                    "id": "geolocation-on-start",
                    "title": "Avoids requesting the geolocation permission on page load",
                    "description": "Users are mistrustful of or confused by sites that request their location without context. Consider tying the request to a user action instead. [Learn more about the geolocation permission](https://developer.chrome.com/docs/lighthouse/best-practices/geolocation-on-start/).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "type": "table",
                        "headings": [],
                        "items": []
                    }
                },
                "unminified-javascript": {
                    "id": "unminified-javascript",
                    "title": "Minify JavaScript",
                    "description": "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn how to minify JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "overallSavingsMs": 0,
                        "items": [],
                        "debugData": {
                            "type": "debugdata",
                            "metricSavings": {
                                "FCP": 0,
                                "LCP": 0
                            }
                        },
                        "headings": [],
                        "overallSavingsBytes": 0,
                        "type": "opportunity"
                    },
                    "warnings": [],
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "metrics": {
                    "id": "metrics",
                    "title": "Metrics",
                    "description": "Collects all available metrics.",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "details": {
                        "type": "debugdata",
                        "items": [
                            {
                                "observedFirstVisualChangeTs": 1117067082007,
                                "observedLastVisualChange": 4251,
                                "observedTraceEndTs": 1117072550087,
                                "firstContentfulPaint": 811,
                                "maxPotentialFID": 1534,
                                "observedFirstMeaningfulPaint": 677,
                                "observedTimeOrigin": 0,
                                "observedCumulativeLayoutShiftMainFrame": 0.0007563856875492514,
                                "observedFirstPaint": 677,
                                "largestContentfulPaint": 1545,
                                "observedLargestContentfulPaintTs": 1117067091505,
                                "cumulativeLayoutShift": 0.0007563856875492514,
                                "observedNavigationStartTs": 1117066414007,
                                "observedFirstContentfulPaint": 677,
                                "observedLargestContentfulPaintAllFrames": 677,
                                "observedFirstPaintTs": 1117067091505,
                                "observedFirstContentfulPaintTs": 1117067091505,
                                "observedSpeedIndexTs": 1117068397643,
                                "totalBlockingTime": 2128,
                                "observedCumulativeLayoutShift": 0.0007563856875492514,
                                "observedFirstContentfulPaintAllFrames": 677,
                                "timeToFirstByte": 168,
                                "observedSpeedIndex": 1984,
                                "firstMeaningfulPaint": 990,
                                "observedDomContentLoadedTs": 1117066911960,
                                "observedLargestContentfulPaint": 677,
                                "observedLastVisualChangeTs": 1117070665007,
                                "interactive": 3880,
                                "observedNavigationStart": 0,
                                "observedFirstMeaningfulPaintTs": 1117067091505,
                                "observedLargestContentfulPaintAllFramesTs": 1117067091505,
                                "observedFirstVisualChange": 668,
                                "observedLoad": 830,
                                "observedDomContentLoaded": 498,
                                "speedIndex": 1778,
                                "observedTraceEnd": 6136,
                                "cumulativeLayoutShiftMainFrame": 0.0007563856875492514,
                                "observedLoadTs": 1117067244219,
                                "observedTimeOriginTs": 1117066414007,
                                "observedFirstContentfulPaintAllFramesTs": 1117067091505
                            },
                            {
                                "lcpInvalidated": false
                            }
                        ]
                    },
                    "numericValue": 3880,
                    "numericUnit": "millisecond"
                },
                "bootup-time": {
                    "id": "bootup-time",
                    "title": "Reduce JavaScript execution time",
                    "description": "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to reduce Javascript execution time](https://developer.chrome.com/docs/lighthouse/performance/bootup-time/).",
                    "score": 0,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "2.3 s",
                    "details": {
                        "sortedBy": [
                            "total"
                        ],
                        "items": [
                            {
                                "total": 2603.9739999999983,
                                "url": "https://takeuforward.org/static/js/main.682465b6.js",
                                "scripting": 2153.0309999999986,
                                "scriptParseCompile": 40.589
                            },
                            {
                                "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
                                "scripting": 1.7309999999999997,
                                "scriptParseCompile": 0.41100000000000003,
                                "total": 216.87600000000006
                            },
                            {
                                "scriptParseCompile": 27.315,
                                "scripting": 123.98699999999995,
                                "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0",
                                "total": 152.75599999999994
                            },
                            {
                                "scripting": 2.673,
                                "total": 65.53700000000005,
                                "scriptParseCompile": 0,
                                "url": "Unattributable"
                            }
                        ],
                        "headings": [
                            {
                                "key": "url",
                                "label": "URL",
                                "valueType": "url"
                            },
                            {
                                "key": "total",
                                "label": "Total CPU Time",
                                "granularity": 1,
                                "valueType": "ms"
                            },
                            {
                                "label": "Script Evaluation",
                                "key": "scripting",
                                "valueType": "ms",
                                "granularity": 1
                            },
                            {
                                "key": "scriptParseCompile",
                                "granularity": 1,
                                "valueType": "ms",
                                "label": "Script Parse"
                            }
                        ],
                        "type": "table",
                        "summary": {
                            "wastedMs": 2349.7369999999983
                        }
                    },
                    "numericValue": 2349.7369999999983,
                    "numericUnit": "millisecond"
                },
                "button-name": {
                    "id": "button-name",
                    "title": "Buttons do not have an accessible name",
                    "description": "When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn how to make buttons more accessible](https://dequeuniversity.com/rules/axe/4.9/button-name).",
                    "score": 0,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "type": "table",
                        "headings": [
                            {
                                "valueType": "node",
                                "subItemsHeading": {
                                    "key": "relatedNode",
                                    "valueType": "node"
                                },
                                "label": "Failing Elements",
                                "key": "node"
                            }
                        ],
                        "debugData": {
                            "type": "debugdata",
                            "impact": "critical",
                            "tags": [
                                "cat.name-role-value",
                                "wcag2a",
                                "wcag412",
                                "section508",
                                "section508.22.a",
                                "TTv5",
                                "TT6.a",
                                "EN-301-549",
                                "EN-9.4.1.2",
                                "ACT"
                            ]
                        },
                        "items": [
                            {
                                "node": {
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,0,DIV,1,DIV,0,BUTTON",
                                    "snippet": "<button data-tooltip-id=\"pick-random\" data-tooltip-content=\"Practice a random question\" data-tooltip-place=\"top\" class=\"p-2 border-[1.2px] border-zinc-300 dark:bg-dark_50 bg-white  dark:border-z…\">",
                                    "selector": "div.space-y-6 > div.flex > div.flex > button.p-2",
                                    "explanation": "Fix any of the following:\n  Element does not have inner text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute\n  Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
                                    "boundingRect": {
                                        "bottom": 471,
                                        "left": 1116,
                                        "right": 1156,
                                        "top": 431,
                                        "width": 40,
                                        "height": 40
                                    },
                                    "nodeLabel": "div.space-y-6 > div.flex > div.flex > button.p-2",
                                    "lhId": "1-0-BUTTON"
                                }
                            }
                        ]
                    }
                },
                "select-name": {
                    "id": "select-name",
                    "title": "Select elements have associated label elements.",
                    "description": "Form elements without effective labels can create frustrating experiences for screen reader users. [Learn more about the `select` element](https://dequeuniversity.com/rules/axe/4.9/select-name).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "dlitem": {
                    "id": "dlitem",
                    "title": "Definition list items are wrapped in `<dl>` elements",
                    "description": "Definition list items (`<dt>` and `<dd>`) must be wrapped in a parent `<dl>` element to ensure that screen readers can properly announce them. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.9/dlitem).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "diagnostics": {
                    "id": "diagnostics",
                    "title": "Diagnostics",
                    "description": "Collection of useful page vitals.",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "details": {
                        "type": "debugdata",
                        "items": [
                            {
                                "maxRtt": 37.829519999999995,
                                "throughput": 85165287855.71982,
                                "numTasksOver10ms": 20,
                                "numTasks": 425,
                                "numStylesheets": 7,
                                "numTasksOver100ms": 5,
                                "numTasksOver50ms": 7,
                                "mainDocumentTransferSize": 1506,
                                "numTasksOver25ms": 8,
                                "totalByteWeight": 1118990,
                                "rtt": 0.000699414495650484,
                                "totalTaskTime": 3131.158000000001,
                                "numFonts": 4,
                                "numTasksOver500ms": 2,
                                "numRequests": 21,
                                "maxServerLatency": 347,
                                "numScripts": 3
                            }
                        ]
                    }
                },
                "duplicate-id-aria": {
                    "id": "duplicate-id-aria",
                    "title": "ARIA IDs are unique",
                    "description": "The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn how to fix duplicate ARIA IDs](https://dequeuniversity.com/rules/axe/4.9/duplicate-id-aria).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "server-response-time": {
                    "id": "server-response-time",
                    "title": "Initial server response time was short",
                    "description": "Keep the server response time for the main document short because all other requests depend on it. [Learn more about the Time to First Byte metric](https://developer.chrome.com/docs/lighthouse/performance/time-to-first-byte/).",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "displayValue": "Root document took 50 ms",
                    "details": {
                        "headings": [
                            {
                                "label": "URL",
                                "valueType": "url",
                                "key": "url"
                            },
                            {
                                "valueType": "timespanMs",
                                "label": "Time Spent",
                                "key": "responseTime"
                            }
                        ],
                        "items": [
                            {
                                "responseTime": 45,
                                "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
                            }
                        ],
                        "type": "opportunity",
                        "overallSavingsMs": 0
                    },
                    "numericValue": 45,
                    "numericUnit": "millisecond"
                },
                "network-server-latency": {
                    "id": "network-server-latency",
                    "title": "Server Backend Latencies",
                    "description": "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more about server response time](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "displayValue": "350 ms",
                    "details": {
                        "items": [
                            {
                                "serverResponseTime": 347,
                                "origin": "https://adminapi.takeuforward.org"
                            },
                            {
                                "origin": "https://accounts.google.com",
                                "serverResponseTime": 9
                            },
                            {
                                "origin": "https://takeuforward.org",
                                "serverResponseTime": 8
                            },
                            {
                                "serverResponseTime": 6,
                                "origin": "https://www.googletagmanager.com"
                            },
                            {
                                "origin": "https://www.google-analytics.com",
                                "serverResponseTime": 1
                            },
                            {
                                "serverResponseTime": 1,
                                "origin": "https://fonts.gstatic.com"
                            },
                            {
                                "origin": "https://takeuforward-content-images.s3.ap-south-1.amazonaws.com",
                                "serverResponseTime": 1
                            },
                            {
                                "origin": "https://fonts.googleapis.com",
                                "serverResponseTime": 0
                            }
                        ],
                        "headings": [
                            {
                                "label": "URL",
                                "valueType": "text",
                                "key": "origin"
                            },
                            {
                                "label": "Time Spent",
                                "valueType": "ms",
                                "key": "serverResponseTime",
                                "granularity": 1
                            }
                        ],
                        "sortedBy": [
                            "serverResponseTime"
                        ],
                        "type": "table"
                    },
                    "numericValue": 347,
                    "numericUnit": "millisecond"
                },
                "input-button-name": {
                    "id": "input-button-name",
                    "title": "Input buttons have discernible text.",
                    "description": "Adding discernable and accessible text to input buttons may help screen reader users understand the purpose of the input button. [Learn more about input buttons](https://dequeuniversity.com/rules/axe/4.9/input-button-name).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "video-caption": {
                    "id": "video-caption",
                    "title": "`<video>` elements contain a `<track>` element with `[kind=\"captions\"]`",
                    "description": "When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more about video captions](https://dequeuniversity.com/rules/axe/4.9/video-caption).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "document-title": {
                    "id": "document-title",
                    "title": "Document has a `<title>` element",
                    "description": "The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more about document titles](https://dequeuniversity.com/rules/axe/4.9/document-title).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "headings": [],
                        "items": [],
                        "type": "table"
                    }
                },
                "html-has-lang": {
                    "id": "html-has-lang",
                    "title": "`<html>` element has a `[lang]` attribute",
                    "description": "If a page doesn't specify a `lang` attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.9/html-has-lang).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "headings": [],
                        "type": "table",
                        "items": []
                    }
                },
                "max-potential-fid": {
                    "id": "max-potential-fid",
                    "title": "Max Potential First Input Delay",
                    "description": "The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more about the Maximum Potential First Input Delay metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/).",
                    "score": 0,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "1,530 ms",
                    "details": {
                        "type": "debugdata",
                        "observedLoafs": [
                            {
                                "duration": 72.983,
                                "startTime": 74.702,
                                "blockingDuration": 0
                            },
                            {
                                "startTime": 217.678,
                                "blockingDuration": 12.956,
                                "duration": 62.956
                            },
                            {
                                "startTime": 316.99,
                                "duration": 181.313,
                                "blockingDuration": 131.101
                            },
                            {
                                "duration": 114.933,
                                "blockingDuration": 64.838,
                                "startTime": 534.604
                            },
                            {
                                "startTime": 664.867,
                                "duration": 84.921,
                                "blockingDuration": 28.48
                            },
                            {
                                "blockingDuration": 0,
                                "startTime": 749.846,
                                "duration": 72.504
                            },
                            {
                                "duration": 1556.177,
                                "startTime": 1584.396,
                                "blockingDuration": 1505.171
                            },
                            {
                                "startTime": 3140.631,
                                "duration": 530.934,
                                "blockingDuration": 480.79
                            }
                        ],
                        "observedMaxBlockingLoaf": {
                            "id": "0x2576a7ba81ab64f",
                            "name": "LongAnimationFrame",
                            "scope": "devtools.timeline",
                            "ts": 1117067998403,
                            "pid": 52,
                            "cat": "devtools.timeline",
                            "tid": 52,
                            "args": {
                                "data": {
                                    "numScripts": 1,
                                    "duration": 1556.177,
                                    "blockingDuration": 1505.171,
                                    "renderDuration": 22.573,
                                    "styleAndLayoutDuration": 21.543
                                }
                            },
                            "ph": "b"
                        },
                        "observedMaxDurationLoaf": {
                            "ts": 1117067998403,
                            "ph": "b",
                            "args": {
                                "data": {
                                    "numScripts": 1,
                                    "styleAndLayoutDuration": 21.543,
                                    "blockingDuration": 1505.171,
                                    "duration": 1556.177,
                                    "renderDuration": 22.573
                                }
                            },
                            "name": "LongAnimationFrame",
                            "scope": "devtools.timeline",
                            "id": "0x2576a7ba81ab64f",
                            "tid": 52,
                            "pid": 52,
                            "cat": "devtools.timeline"
                        }
                    },
                    "numericValue": 1534,
                    "numericUnit": "millisecond"
                },
                "aria-roles": {
                    "id": "aria-roles",
                    "title": "`[role]` values are valid",
                    "description": "ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more about valid ARIA roles](https://dequeuniversity.com/rules/axe/4.9/aria-roles).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "interactive-element-affordance": {
                    "id": "interactive-element-affordance",
                    "title": "Interactive elements indicate their purpose and state",
                    "description": "Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn how to decorate interactive elements with affordance hints](https://developer.chrome.com/docs/lighthouse/accessibility/interactive-element-affordance/).",
                    "score": null,
                    "scoreDisplayMode": "manual"
                },
                "custom-controls-labels": {
                    "id": "custom-controls-labels",
                    "title": "Custom controls have associated labels",
                    "description": "Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more about custom controls and labels](https://developer.chrome.com/docs/lighthouse/accessibility/custom-controls-labels/).",
                    "score": null,
                    "scoreDisplayMode": "manual"
                },
                "managed-focus": {
                    "id": "managed-focus",
                    "title": "The user's focus is directed to new content added to the page",
                    "description": "If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn how to direct focus to new content](https://developer.chrome.com/docs/lighthouse/accessibility/managed-focus/).",
                    "score": null,
                    "scoreDisplayMode": "manual"
                },
                "redirects": {
                    "id": "redirects",
                    "title": "Avoid multiple page redirects",
                    "description": "Redirects introduce additional delays before the page can be loaded. [Learn how to avoid page redirects](https://developer.chrome.com/docs/lighthouse/performance/redirects/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "type": "opportunity",
                        "overallSavingsMs": 0,
                        "items": [],
                        "headings": []
                    },
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "image-redundant-alt": {
                    "id": "image-redundant-alt",
                    "title": "Image elements do not have `[alt]` attributes that are redundant text.",
                    "description": "Informative elements should aim for short, descriptive alternative text. Alternative text that is exactly the same as the text adjacent to the link or image is potentially confusing for screen reader users, because the text will be read twice. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.9/image-redundant-alt).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "aria-allowed-attr": {
                    "id": "aria-allowed-attr",
                    "title": "`[aria-*]` attributes match their roles",
                    "description": "Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn how to match ARIA attributes to their roles](https://dequeuniversity.com/rules/axe/4.9/aria-allowed-attr).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "headings": [],
                        "items": [],
                        "type": "table"
                    }
                },
                "user-timings": {
                    "id": "user-timings",
                    "title": "User Timing marks and measures",
                    "description": "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more about User Timing marks](https://developer.chrome.com/docs/lighthouse/performance/user-timings/).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable",
                    "details": {
                        "items": [],
                        "type": "table",
                        "headings": []
                    }
                },
                "valid-lang": {
                    "id": "valid-lang",
                    "title": "`[lang]` attributes have a valid value",
                    "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.9/valid-lang).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "legacy-javascript": {
                    "id": "legacy-javascript",
                    "title": "Avoid serving legacy JavaScript to modern browsers",
                    "description": "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
                    "score": 0.5,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "Potential savings of 9 KiB",
                    "details": {
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "headings": [
                            {
                                "key": "url",
                                "valueType": "url",
                                "subItemsHeading": {
                                    "valueType": "source-location",
                                    "key": "location"
                                },
                                "label": "URL"
                            },
                            {
                                "subItemsHeading": {
                                    "key": "signal"
                                },
                                "valueType": "code",
                                "key": null
                            },
                            {
                                "key": "wastedBytes",
                                "label": "Potential Savings",
                                "valueType": "bytes"
                            }
                        ],
                        "overallSavingsMs": 0,
                        "items": [
                            {
                                "totalBytes": 0,
                                "subItems": {
                                    "type": "subitems",
                                    "items": [
                                        {
                                            "location": {
                                                "urlProvider": "network",
                                                "type": "source-location",
                                                "line": 1,
                                                "url": "https://takeuforward.org/static/js/main.682465b6.js",
                                                "column": 1851
                                            },
                                            "signal": "@babel/plugin-transform-classes"
                                        },
                                        {
                                            "location": {
                                                "type": "source-location",
                                                "urlProvider": "network",
                                                "column": 351901,
                                                "url": "https://takeuforward.org/static/js/main.682465b6.js",
                                                "line": 1
                                            },
                                            "signal": "Date.now"
                                        },
                                        {
                                            "signal": "Array.prototype.find",
                                            "location": {
                                                "urlProvider": "network",
                                                "type": "source-location",
                                                "url": "https://takeuforward.org/static/js/main.682465b6.js",
                                                "column": 579195,
                                                "line": 1
                                            }
                                        }
                                    ]
                                },
                                "url": "https://takeuforward.org/static/js/main.682465b6.js",
                                "wastedBytes": 9549
                            }
                        ],
                        "overallSavingsBytes": 9549,
                        "debugData": {
                            "metricSavings": {
                                "LCP": 0,
                                "FCP": 0
                            },
                            "type": "debugdata"
                        },
                        "type": "opportunity"
                    },
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "font-size": {
                    "id": "font-size",
                    "title": "Document uses legible font sizes",
                    "description": "Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more about legible font sizes](https://developer.chrome.com/docs/lighthouse/seo/font-size/).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "viewport": {
                    "id": "viewport",
                    "title": "Has a `<meta name=\"viewport\">` tag with `width` or `initial-scale`",
                    "description": "A `<meta name=\"viewport\">` not only optimizes your app for mobile screen sizes, but also prevents [a 300 millisecond delay to user input](https://developer.chrome.com/blog/300ms-tap-delay-gone-away/). [Learn more about using the viewport meta tag](https://developer.chrome.com/docs/lighthouse/pwa/viewport/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "type": "debugdata",
                        "viewportContent": "width=device-width,initial-scale=1"
                    },
                    "warnings": []
                },
                "unused-css-rules": {
                    "id": "unused-css-rules",
                    "title": "Reduce unused CSS",
                    "description": "Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn how to reduce unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/).",
                    "score": 0,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "Potential savings of 31 KiB",
                    "details": {
                        "headings": [
                            {
                                "valueType": "url",
                                "key": "url",
                                "label": "URL"
                            },
                            {
                                "key": "totalBytes",
                                "valueType": "bytes",
                                "label": "Transfer Size"
                            },
                            {
                                "valueType": "bytes",
                                "label": "Potential Savings",
                                "key": "wastedBytes"
                            }
                        ],
                        "items": [
                            {
                                "url": "https://takeuforward.org/static/css/main.3b066ee3.css",
                                "totalBytes": 35551,
                                "wastedPercent": 88.18147871545929,
                                "wastedBytes": 31349
                            }
                        ],
                        "overallSavingsMs": 40,
                        "debugData": {
                            "type": "debugdata",
                            "metricSavings": {
                                "LCP": 40,
                                "FCP": 80
                            }
                        },
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "overallSavingsBytes": 31349,
                        "type": "opportunity"
                    },
                    "numericValue": 40,
                    "numericUnit": "millisecond"
                },
                "link-text": {
                    "id": "link-text",
                    "title": "Links have descriptive text",
                    "description": "Descriptive link text helps search engines understand your content. [Learn how to make links more accessible](https://developer.chrome.com/docs/lighthouse/seo/link-text/).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "headings": [],
                        "type": "table",
                        "items": []
                    }
                },
                "aria-valid-attr-value": {
                    "id": "aria-valid-attr-value",
                    "title": "`[aria-*]` attributes have valid values",
                    "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more about valid values for ARIA attributes](https://dequeuniversity.com/rules/axe/4.9/aria-valid-attr-value).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "type": "table",
                        "items": [],
                        "headings": []
                    }
                },
                "link-in-text-block": {
                    "id": "link-in-text-block",
                    "title": "Links are distinguishable without relying on color.",
                    "description": "Low-contrast text is difficult or impossible for many users to read. Link text that is discernible improves the experience for users with low vision. [Learn how to make links distinguishable](https://dequeuniversity.com/rules/axe/4.9/link-in-text-block).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "csp-xss": {
                    "id": "csp-xss",
                    "title": "Ensure CSP is effective against XSS attacks",
                    "description": "A strong Content Security Policy (CSP) significantly reduces the risk of cross-site scripting (XSS) attacks. [Learn how to use a CSP to prevent XSS](https://developer.chrome.com/docs/lighthouse/best-practices/csp-xss/)",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "details": {
                        "type": "table",
                        "headings": [
                            {
                                "label": "Description",
                                "key": "description",
                                "subItemsHeading": {
                                    "key": "description"
                                },
                                "valueType": "text"
                            },
                            {
                                "label": "Directive",
                                "valueType": "code",
                                "subItemsHeading": {
                                    "key": "directive"
                                },
                                "key": "directive"
                            },
                            {
                                "key": "severity",
                                "label": "Severity",
                                "subItemsHeading": {
                                    "key": "severity"
                                },
                                "valueType": "text"
                            }
                        ],
                        "items": [
                            {
                                "description": "No CSP found in enforcement mode",
                                "severity": "High"
                            }
                        ]
                    }
                },
                "aria-valid-attr": {
                    "id": "aria-valid-attr",
                    "title": "`[aria-*]` attributes are valid and not misspelled",
                    "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more about valid ARIA attributes](https://dequeuniversity.com/rules/axe/4.9/aria-valid-attr).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "items": [],
                        "headings": [],
                        "type": "table"
                    }
                },
                "aria-hidden-focus": {
                    "id": "aria-hidden-focus",
                    "title": "`[aria-hidden=\"true\"]` elements do not contain focusable descendents",
                    "description": "Focusable descendents within an `[aria-hidden=\"true\"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers. [Learn how `aria-hidden` affects focusable elements](https://dequeuniversity.com/rules/axe/4.9/aria-hidden-focus).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "headings": [],
                        "items": [],
                        "type": "table"
                    }
                },
                "aria-dialog-name": {
                    "id": "aria-dialog-name",
                    "title": "Elements with `role=\"dialog\"` or `role=\"alertdialog\"` have accessible names.",
                    "description": "ARIA dialog elements without accessible names may prevent screen readers users from discerning the purpose of these elements. [Learn how to make ARIA dialog elements more accessible](https://dequeuniversity.com/rules/axe/4.9/aria-dialog-name).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "table-duplicate-name": {
                    "id": "table-duplicate-name",
                    "title": "Tables have different content in the summary attribute and `<caption>`.",
                    "description": "The summary attribute should describe the table structure, while `<caption>` should have the onscreen title. Accurate table mark-up helps users of screen readers. [Learn more about summary and caption](https://dequeuniversity.com/rules/axe/4.9/table-duplicate-name).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "custom-controls-roles": {
                    "id": "custom-controls-roles",
                    "title": "Custom controls have ARIA roles",
                    "description": "Custom interactive controls have appropriate ARIA roles. [Learn how to add roles to custom controls](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/).",
                    "score": null,
                    "scoreDisplayMode": "manual"
                },
                "offscreen-content-hidden": {
                    "id": "offscreen-content-hidden",
                    "title": "Offscreen content is hidden from assistive technology",
                    "description": "Offscreen content is hidden with display: none or aria-hidden=true. [Learn how to properly hide offscreen content](https://developer.chrome.com/docs/lighthouse/accessibility/offscreen-content-hidden/).",
                    "score": null,
                    "scoreDisplayMode": "manual"
                },
                "structured-data": {
                    "id": "structured-data",
                    "title": "Structured data is valid",
                    "description": "Run the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/) and the [Structured Data Linter](http://linter.structured-data.org/) to validate structured data. [Learn more about Structured Data](https://developer.chrome.com/docs/lighthouse/seo/structured-data/).",
                    "score": null,
                    "scoreDisplayMode": "manual"
                },
                "hreflang": {
                    "id": "hreflang",
                    "title": "Document has a valid `hreflang`",
                    "description": "hreflang links tell search engines what version of a page they should list in search results for a given language or region. [Learn more about `hreflang`](https://developer.chrome.com/docs/lighthouse/seo/hreflang/).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "type": "table",
                        "items": [],
                        "headings": []
                    }
                },
                "label-content-name-mismatch": {
                    "id": "label-content-name-mismatch",
                    "title": "Elements with visible text labels have matching accessible names.",
                    "description": "Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users. [Learn more about accessible names](https://dequeuniversity.com/rules/axe/4.9/label-content-name-mismatch).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "image-alt": {
                    "id": "image-alt",
                    "title": "Image elements have `[alt]` attributes",
                    "description": "Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.9/image-alt).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "input-image-alt": {
                    "id": "input-image-alt",
                    "title": "`<input type=\"image\">` elements have `[alt]` text",
                    "description": "When an image is being used as an `<input>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn about input image alt text](https://dequeuniversity.com/rules/axe/4.9/input-image-alt).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "uses-long-cache-ttl": {
                    "id": "uses-long-cache-ttl",
                    "title": "Serve static assets with an efficient cache policy",
                    "description": "A long cache lifetime can speed up repeat visits to your page. [Learn more about efficient cache policies](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/).",
                    "score": 0.5,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "1 resource found",
                    "details": {
                        "items": [
                            {
                                "totalBytes": 5639,
                                "url": "https://takeuforward-content-images.s3.ap-south-1.amazonaws.com/content/codestudio-ZJxLZjiy",
                                "wastedBytes": 5639,
                                "cacheLifetimeMs": 0,
                                "cacheHitProbability": 0
                            }
                        ],
                        "skipSumming": [
                            "cacheLifetimeMs"
                        ],
                        "type": "table",
                        "headings": [
                            {
                                "label": "URL",
                                "key": "url",
                                "valueType": "url"
                            },
                            {
                                "valueType": "ms",
                                "label": "Cache TTL",
                                "displayUnit": "duration",
                                "key": "cacheLifetimeMs"
                            },
                            {
                                "valueType": "bytes",
                                "granularity": 1,
                                "displayUnit": "kb",
                                "key": "totalBytes",
                                "label": "Transfer Size"
                            }
                        ],
                        "summary": {
                            "wastedBytes": 5639
                        },
                        "sortedBy": [
                            "totalBytes"
                        ]
                    },
                    "numericValue": 5639,
                    "numericUnit": "byte"
                },
                "is-crawlable": {
                    "id": "is-crawlable",
                    "title": "Page isn’t blocked from indexing",
                    "description": "Search engines are unable to include your pages in search results if they don't have permission to crawl them. [Learn more about crawler directives](https://developer.chrome.com/docs/lighthouse/seo/is-crawlable/).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "items": [],
                        "headings": [],
                        "type": "table"
                    },
                    "warnings": []
                },
                "critical-request-chains": {
                    "id": "critical-request-chains",
                    "title": "Avoid chaining critical requests",
                    "description": "The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn how to avoid chaining critical requests](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains/).",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "displayValue": "7 chains found",
                    "details": {
                        "chains": {
                            "8140798B7250D78BF5C047CC30F30903": {
                                "children": {
                                    "52.3": {
                                        "request": {
                                            "startTime": 1117066.492088,
                                            "url": "https://takeuforward.org/static/css/main.3b066ee3.css",
                                            "endTime": 1117066.537538,
                                            "responseReceivedTime": 1117066.537529,
                                            "transferSize": 36393
                                        },
                                        "children": {
                                            "52.10": {
                                                "request": {
                                                    "transferSize": 1596,
                                                    "startTime": 1117066.540473,
                                                    "url": "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
                                                    "responseReceivedTime": 1117066.548488,
                                                    "endTime": 1117066.548492
                                                }
                                            },
                                            "52.13": {
                                                "request": {
                                                    "startTime": 1117066.541169,
                                                    "responseReceivedTime": 1117066.547554,
                                                    "url": "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
                                                    "endTime": 1117066.547558,
                                                    "transferSize": 1100
                                                }
                                            },
                                            "52.12": {
                                                "request": {
                                                    "startTime": 1117066.540949,
                                                    "endTime": 1117066.54904,
                                                    "responseReceivedTime": 1117066.549036,
                                                    "url": "https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap",
                                                    "transferSize": 1304
                                                },
                                                "children": {
                                                    "52.119": {
                                                        "request": {
                                                            "startTime": 1117067.040724,
                                                            "transferSize": 12519,
                                                            "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffHjDGItzY5abuWI.woff2",
                                                            "endTime": 1117067.044086,
                                                            "responseReceivedTime": 1117067.0440810001
                                                        }
                                                    },
                                                    "52.117": {
                                                        "request": {
                                                            "endTime": 1117067.044826,
                                                            "responseReceivedTime": 1117067.044823,
                                                            "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffBzCGItzY5abuWI.woff2",
                                                            "transferSize": 12992,
                                                            "startTime": 1117067.041796
                                                        }
                                                    },
                                                    "52.115": {
                                                        "request": {
                                                            "responseReceivedTime": 1117067.044418,
                                                            "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPecZTIAOhVxoMyOr9n_E7fdMPmDaZRbrw.woff2",
                                                            "endTime": 1117067.044421,
                                                            "transferSize": 13180,
                                                            "startTime": 1117067.040319
                                                        }
                                                    }
                                                }
                                            },
                                            "52.9": {
                                                "children": {
                                                    "52.16": {
                                                        "request": {
                                                            "endTime": 1117067.045356,
                                                            "url": "https://fonts.gstatic.com/s/amaranth/v18/KtkpALODe433f0j1zMF-OMWl42H9FYud.woff2",
                                                            "transferSize": 16487,
                                                            "startTime": 1117067.041381,
                                                            "responseReceivedTime": 1117067.0453529998
                                                        }
                                                    }
                                                },
                                                "request": {
                                                    "endTime": 1117066.545742,
                                                    "responseReceivedTime": 1117066.5457320001,
                                                    "startTime": 1117066.540207,
                                                    "transferSize": 1009,
                                                    "url": "https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&display=swap"
                                                }
                                            },
                                            "52.11": {
                                                "request": {
                                                    "endTime": 1117066.548708,
                                                    "transferSize": 1283,
                                                    "responseReceivedTime": 1117066.5487059997,
                                                    "startTime": 1117066.540698,
                                                    "url": "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
                                                }
                                            }
                                        }
                                    }
                                },
                                "request": {
                                    "responseReceivedTime": 1117066.485698,
                                    "startTime": 1117066.41518,
                                    "endTime": 1117066.485704,
                                    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
                                    "transferSize": 1506
                                }
                            }
                        },
                        "type": "criticalrequestchain",
                        "longestChain": {
                            "length": 4,
                            "transferSize": 16487,
                            "duration": 630.1760001182556
                        }
                    }
                },
                "html-xml-lang-mismatch": {
                    "id": "html-xml-lang-mismatch",
                    "title": "`<html>` element has an `[xml:lang]` attribute with the same base language as the `[lang]` attribute.",
                    "description": "If the webpage does not specify a consistent language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.9/html-xml-lang-mismatch).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "unused-javascript": {
                    "id": "unused-javascript",
                    "title": "Reduce unused JavaScript",
                    "description": "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
                    "score": 0,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "Potential savings of 725 KiB",
                    "details": {
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "debugData": {
                            "metricSavings": {
                                "FCP": 0,
                                "LCP": 490
                            },
                            "type": "debugdata"
                        },
                        "overallSavingsBytes": 742424,
                        "headings": [
                            {
                                "subItemsHeading": {
                                    "key": "source",
                                    "valueType": "code"
                                },
                                "valueType": "url",
                                "label": "URL",
                                "key": "url"
                            },
                            {
                                "key": "totalBytes",
                                "subItemsHeading": {
                                    "key": "sourceBytes"
                                },
                                "label": "Transfer Size",
                                "valueType": "bytes"
                            },
                            {
                                "valueType": "bytes",
                                "label": "Potential Savings",
                                "key": "wastedBytes",
                                "subItemsHeading": {
                                    "key": "sourceWastedBytes"
                                }
                            }
                        ],
                        "items": [
                            {
                                "url": "https://takeuforward.org/static/js/main.682465b6.js",
                                "wastedPercent": 68.13215299231597,
                                "wastedBytes": 500969,
                                "totalBytes": 735290
                            },
                            {
                                "totalBytes": 103568,
                                "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0",
                                "wastedBytes": 72402,
                                "wastedPercent": 69.90793573452666
                            },
                            {
                                "url": "https://accounts.google.com/gsi/client",
                                "wastedPercent": 82.3617966987559,
                                "totalBytes": 84202,
                                "wastedBytes": 69350
                            },
                            {
                                "wastedPercent": 73.57932590292823,
                                "wastedBytes": 61955,
                                "url": "https://accounts.google.com/gsi/client",
                                "totalBytes": 84202
                            },
                            {
                                "totalBytes": 103568,
                                "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0",
                                "wastedBytes": 37748,
                                "wastedPercent": 36.44744771698573
                            }
                        ],
                        "overallSavingsMs": 490,
                        "type": "opportunity"
                    },
                    "numericValue": 490,
                    "numericUnit": "millisecond"
                },
                "skip-link": {
                    "id": "skip-link",
                    "title": "Skip links are focusable.",
                    "description": "Including a skip link can help users skip to the main content to save time. [Learn more about skip links](https://dequeuniversity.com/rules/axe/4.9/skip-link).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "doctype": {
                    "id": "doctype",
                    "title": "Page has the HTML doctype",
                    "description": "Specifying a doctype prevents the browser from switching to quirks-mode. [Learn more about the doctype declaration](https://developer.chrome.com/docs/lighthouse/best-practices/doctype/).",
                    "score": 1,
                    "scoreDisplayMode": "binary"
                },
                "third-party-cookies": {
                    "id": "third-party-cookies",
                    "title": "Avoids third-party cookies",
                    "description": "Support for third-party cookies will be removed in a future version of Chrome. [Learn more about phasing out third-party cookies](https://developer.chrome.com/en/docs/privacy-sandbox/third-party-cookie-phase-out/).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "items": [],
                        "type": "table",
                        "headings": []
                    }
                },
                "aria-required-children": {
                    "id": "aria-required-children",
                    "title": "Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children.",
                    "description": "Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more about roles and required children elements](https://dequeuniversity.com/rules/axe/4.9/aria-required-children).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "notification-on-start": {
                    "id": "notification-on-start",
                    "title": "Avoids requesting the notification permission on page load",
                    "description": "Users are mistrustful of or confused by sites that request to send notifications without context. Consider tying the request to user gestures instead. [Learn more about responsibly getting permission for notifications](https://developer.chrome.com/docs/lighthouse/best-practices/notification-on-start/).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "items": [],
                        "headings": [],
                        "type": "table"
                    }
                },
                "aria-required-parent": {
                    "id": "aria-required-parent",
                    "title": "`[role]`s are contained by their required parent element",
                    "description": "Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more about ARIA roles and required parent element](https://dequeuniversity.com/rules/axe/4.9/aria-required-parent).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "interactive": {
                    "id": "interactive",
                    "title": "Time to Interactive",
                    "description": "Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/).",
                    "score": 0.62,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "3.9 s",
                    "numericValue": 3880.377618736139,
                    "numericUnit": "millisecond"
                },
                "aria-command-name": {
                    "id": "aria-command-name",
                    "title": "`button`, `link`, and `menuitem` elements have accessible names",
                    "description": "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to make command elements more accessible](https://dequeuniversity.com/rules/axe/4.9/aria-command-name).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "aria-allowed-role": {
                    "id": "aria-allowed-role",
                    "title": "Values assigned to `role=\"\"` are valid ARIA roles.",
                    "description": "ARIA `role`s enable assistive technologies to know the role of each element on the web page. If the `role` values are misspelled, not existing ARIA `role` values, or abstract roles, then the purpose of the element will not be communicated to users of assistive technologies. [Learn more about ARIA roles](https://dequeuniversity.com/rules/axe/4.9/aria-allowed-role).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "headings": [],
                        "type": "table",
                        "items": []
                    }
                },
                "first-meaningful-paint": {
                    "id": "first-meaningful-paint",
                    "title": "First Meaningful Paint",
                    "description": "First Meaningful Paint measures when the primary content of a page is visible. [Learn more about the First Meaningful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-meaningful-paint/).",
                    "score": 0.87,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "1.0 s",
                    "numericValue": 989.5363614173348,
                    "numericUnit": "millisecond"
                },
                "aria-deprecated-role": {
                    "id": "aria-deprecated-role",
                    "title": "Deprecated ARIA roles were not used",
                    "description": "Deprecated ARIA roles may not be processed correctly by assistive technology. [Learn more about deprecated ARIA roles](https://dequeuniversity.com/rules/axe/4.9/aria-deprecated-role).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "th-has-data-cells": {
                    "id": "th-has-data-cells",
                    "title": "`<th>` elements and elements with `[role=\"columnheader\"/\"rowheader\"]` have data cells they describe.",
                    "description": "Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.9/th-has-data-cells).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "definition-list": {
                    "id": "definition-list",
                    "title": "`<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>`, `<template>` or `<div>` elements.",
                    "description": "When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.9/definition-list).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "network-rtt": {
                    "id": "network-rtt",
                    "title": "Network Round Trip Times",
                    "description": "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more about the Round Trip Time](https://hpbn.co/primer-on-latency-and-bandwidth/).",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "displayValue": "40 ms",
                    "details": {
                        "items": [
                            {
                                "origin": "https://takeuforward-content-images.s3.ap-south-1.amazonaws.com",
                                "rtt": 37.829519999999995
                            },
                            {
                                "rtt": 0.8999999999999999,
                                "origin": "https://takeuforward.org"
                            },
                            {
                                "origin": "https://fonts.googleapis.com",
                                "rtt": 0.8999999999999999
                            },
                            {
                                "rtt": 0.8999999999999999,
                                "origin": "https://www.google-analytics.com"
                            },
                            {
                                "rtt": 0.8999999999999999,
                                "origin": "https://fonts.gstatic.com"
                            },
                            {
                                "origin": "https://adminapi.takeuforward.org",
                                "rtt": 0.0013591583580764162
                            },
                            {
                                "origin": "https://www.googletagmanager.com",
                                "rtt": 0.000838439023709234
                            },
                            {
                                "rtt": 0.000699414495650484,
                                "origin": "https://accounts.google.com"
                            }
                        ],
                        "sortedBy": [
                            "rtt"
                        ],
                        "type": "table",
                        "headings": [
                            {
                                "key": "origin",
                                "valueType": "text",
                                "label": "URL"
                            },
                            {
                                "valueType": "ms",
                                "granularity": 1,
                                "key": "rtt",
                                "label": "Time Spent"
                            }
                        ]
                    },
                    "numericValue": 37.829519999999995,
                    "numericUnit": "millisecond"
                },
                "errors-in-console": {
                    "id": "errors-in-console",
                    "title": "No browser errors logged to the console",
                    "description": "Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more about this errors in console diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/errors-in-console/)",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "items": [],
                        "headings": [],
                        "type": "table"
                    }
                },
                "layout-shifts": {
                    "id": "layout-shifts",
                    "title": "Avoid large layout shifts",
                    "description": "These are the largest layout shifts observed on the page. Each table item represents a single layout shift, and shows the element that shifted the most. Below each item are possible root causes that led to the layout shift. Some of these layout shifts may not be included in the CLS metric value due to [windowing](https://web.dev/articles/cls#what_is_cls). [Learn how to improve CLS](https://web.dev/articles/optimize-cls)",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "displayValue": "2 layout shifts found",
                    "details": {
                        "type": "table",
                        "headings": [
                            {
                                "key": "node",
                                "label": "Element",
                                "valueType": "node",
                                "subItemsHeading": {
                                    "key": "extra"
                                }
                            },
                            {
                                "key": "score",
                                "label": "Layout shift score",
                                "subItemsHeading": {
                                    "key": "cause",
                                    "valueType": "text"
                                },
                                "valueType": "numeric",
                                "granularity": 0.001
                            }
                        ],
                        "items": [
                            {
                                "score": 0.0007563856875492514,
                                "node": {
                                    "selector": "div.flex > div.relative > section.px-4 > p.text-lg",
                                    "type": "node",
                                    "boundingRect": {
                                        "bottom": 230,
                                        "right": 1303,
                                        "height": 81,
                                        "width": 1191,
                                        "top": 149,
                                        "left": 112
                                    },
                                    "snippet": "<p class=\"text-lg\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,1,P",
                                    "lhId": "page-0-P",
                                    "nodeLabel": "This course is made for people who want to learn DSA from A to Z for free in a …"
                                },
                                "subItems": {
                                    "type": "subitems",
                                    "items": [
                                        {
                                            "extra": {
                                                "type": "url",
                                                "value": "https://fonts.gstatic.com/s/amaranth/v18/KtkpALODe433f0j1zMF-OMWl42H9FYud.woff2"
                                            },
                                            "cause": "Web font loaded"
                                        },
                                        {
                                            "extra": {
                                                "value": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffBzCGItzY5abuWI.woff2",
                                                "type": "url"
                                            },
                                            "cause": "Web font loaded"
                                        },
                                        {
                                            "cause": "Web font loaded",
                                            "extra": {
                                                "type": "url",
                                                "value": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPecZTIAOhVxoMyOr9n_E7fdMPmDaZRbrw.woff2"
                                            }
                                        },
                                        {
                                            "extra": {
                                                "type": "url",
                                                "value": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffHjDGItzY5abuWI.woff2"
                                            },
                                            "cause": "Web font loaded"
                                        }
                                    ]
                                }
                            },
                            {
                                "node": {
                                    "lhId": "page-1-DIV",
                                    "type": "node",
                                    "snippet": "<div class=\"flex items-center space-x-3\">",
                                    "nodeLabel": "Get 1:1 Mentorship\n\nLogin",
                                    "boundingRect": {
                                        "right": 1303,
                                        "width": 310,
                                        "bottom": 59,
                                        "top": 5,
                                        "left": 993,
                                        "height": 54
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,0,HEADER,0,DIV,0,DIV,1,DIV",
                                    "selector": "header.sticky > div.px-4 > div.flex > div.flex"
                                },
                                "score": 0.00040177742754574905
                            }
                        ]
                    }
                },
                "uses-rel-preconnect": {
                    "id": "uses-rel-preconnect",
                    "title": "Preconnect to required origins",
                    "description": "Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn how to preconnect to required origins](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "headings": [],
                        "overallSavingsMs": 0,
                        "sortedBy": [
                            "wastedMs"
                        ],
                        "items": [],
                        "type": "opportunity"
                    },
                    "warnings": [],
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "empty-heading": {
                    "id": "empty-heading",
                    "title": "All heading elements contain content.",
                    "description": "A heading with no content or inaccessible text prevent screen reader users from accessing information on the page's structure. [Learn more about headings](https://dequeuniversity.com/rules/axe/4.9/empty-heading).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "td-has-header": {
                    "id": "td-has-header",
                    "title": "`<td>` elements in a large `<table>` have one or more table headers.",
                    "description": "Screen readers have features to make navigating tables easier. Ensuring that `<td>` elements in a large table (3 or more cells in width and height) have an associated table header may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.9/td-has-header).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "first-contentful-paint": {
                    "id": "first-contentful-paint",
                    "title": "First Contentful Paint",
                    "description": "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
                    "score": 0.94,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "0.8 s",
                    "numericValue": 810.6909076115564,
                    "numericUnit": "millisecond"
                },
                "aria-treeitem-name": {
                    "id": "aria-treeitem-name",
                    "title": "ARIA `treeitem` elements have accessible names",
                    "description": "When a `treeitem` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about labeling `treeitem` elements](https://dequeuniversity.com/rules/axe/4.9/aria-treeitem-name).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "heading-order": {
                    "id": "heading-order",
                    "title": "Heading elements appear in a sequentially-descending order",
                    "description": "Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more about heading order](https://dequeuniversity.com/rules/axe/4.9/heading-order).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "headings": [],
                        "items": [],
                        "type": "table"
                    }
                },
                "non-composited-animations": {
                    "id": "non-composited-animations",
                    "title": "Avoid non-composited animations",
                    "description": "Animations which are not composited can be janky and increase CLS. [Learn how to avoid non-composited animations](https://developer.chrome.com/docs/lighthouse/performance/non-composited-animations/)",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "displayValue": "9 animated elements found",
                    "details": {
                        "items": [
                            {
                                "node": {
                                    "nodeLabel": "div.lg:w-1/3 > div > div.h-2 > div.h-full",
                                    "snippet": "<div class=\"h-full rounded-xl transition-all ease-in-out duration-300 bg-brand_50\" style=\"width: 0%;\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV",
                                    "selector": "div.lg:w-1/3 > div > div.h-2 > div.h-full",
                                    "boundingRect": {
                                        "height": 8,
                                        "top": 462,
                                        "right": 125,
                                        "bottom": 470,
                                        "width": 0,
                                        "left": 125
                                    },
                                    "lhId": "page-2-DIV",
                                    "type": "node"
                                },
                                "subItems": {
                                    "type": "subitems",
                                    "items": [
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: background-color",
                                            "animation": "background-color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: background-color",
                                            "animation": "background-color"
                                        }
                                    ]
                                }
                            },
                            {
                                "subItems": {
                                    "type": "subitems",
                                    "items": [
                                        {
                                            "failureReason": "Unsupported CSS Property: border-top-color",
                                            "animation": "border-top-color"
                                        },
                                        {
                                            "animation": "color",
                                            "failureReason": "Unsupported CSS Property: color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: border-bottom-color",
                                            "animation": "border-bottom-color"
                                        },
                                        {
                                            "animation": "border-left-color",
                                            "failureReason": "Unsupported CSS Property: border-left-color"
                                        },
                                        {
                                            "animation": "border-right-color",
                                            "failureReason": "Unsupported CSS Property: border-right-color"
                                        }
                                    ]
                                },
                                "node": {
                                    "boundingRect": {
                                        "width": 80,
                                        "bottom": 940,
                                        "left": 0,
                                        "top": 0,
                                        "height": 940,
                                        "right": 80
                                    },
                                    "selector": "div > div.flex > div > div#sidebar",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,0,DIV,1,DIV",
                                    "type": "node",
                                    "nodeLabel": "Profile\nBlogs\nDSA Sheets\nSystem Design\nStriver's DSA Playlist\nSDE Core Sheets\nS…",
                                    "snippet": "<div id=\"sidebar\" class=\"flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-aut…\">",
                                    "lhId": "page-3-DIV"
                                }
                            },
                            {
                                "subItems": {
                                    "type": "subitems",
                                    "items": [
                                        {
                                            "animation": "border-top-color",
                                            "failureReason": "Unsupported CSS Property: border-top-color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: background-color",
                                            "animation": "background-color"
                                        },
                                        {
                                            "animation": "color",
                                            "failureReason": "Unsupported CSS Property: color"
                                        },
                                        {
                                            "animation": "border-bottom-color",
                                            "failureReason": "Unsupported CSS Property: border-bottom-color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: border-left-color",
                                            "animation": "border-left-color"
                                        },
                                        {
                                            "animation": "border-right-color",
                                            "failureReason": "Unsupported CSS Property: border-right-color"
                                        }
                                    ]
                                },
                                "node": {
                                    "snippet": "<button data-tooltip-id=\"pick-random\" data-tooltip-content=\"Practice a random question\" data-tooltip-place=\"top\" class=\"p-2 border-[1.2px] border-zinc-300 dark:bg-dark_50 bg-white  dark:border-z…\">",
                                    "boundingRect": {
                                        "top": 431,
                                        "left": 1116,
                                        "width": 40,
                                        "bottom": 471,
                                        "height": 40,
                                        "right": 1156
                                    },
                                    "nodeLabel": "div.space-y-6 > div.flex > div.flex > button.p-2",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,0,DIV,1,DIV,0,BUTTON",
                                    "lhId": "page-4-BUTTON",
                                    "selector": "div.space-y-6 > div.flex > div.flex > button.p-2",
                                    "type": "node"
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<div class=\"absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-l…\">",
                                    "boundingRect": {
                                        "right": 622,
                                        "height": 24,
                                        "top": 94,
                                        "left": 580,
                                        "width": 42,
                                        "bottom": 118
                                    },
                                    "nodeLabel": "div.flex > div.grid > div.relative > div.absolute",
                                    "type": "node",
                                    "lhId": "page-5-DIV",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV",
                                    "selector": "div.flex > div.grid > div.relative > div.absolute"
                                },
                                "subItems": {
                                    "type": "subitems",
                                    "items": [
                                        {
                                            "animation": "color",
                                            "failureReason": "Unsupported CSS Property: color"
                                        }
                                    ]
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "snippet": "<div class=\"px-3 py-2 rounded-lg mb-0.5 last:mb-0 transition-all ease-out duration-300…\">",
                                    "boundingRect": {
                                        "height": 39,
                                        "left": 16,
                                        "width": 47,
                                        "right": 63,
                                        "top": 164,
                                        "bottom": 203
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,0,DIV,1,DIV,1,DIV,1,DIV",
                                    "lhId": "page-6-DIV",
                                    "selector": "div > div#sidebar > div.space-y-4 > div.px-3",
                                    "nodeLabel": "Blogs"
                                },
                                "subItems": {
                                    "type": "subitems",
                                    "items": [
                                        {
                                            "animation": "color",
                                            "failureReason": "Unsupported CSS Property: color"
                                        },
                                        {
                                            "animation": "color",
                                            "failureReason": "Unsupported CSS Property: color"
                                        },
                                        {
                                            "animation": "color",
                                            "failureReason": "Unsupported CSS Property: color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        },
                                        {
                                            "animation": "color",
                                            "failureReason": "Unsupported CSS Property: color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        }
                                    ]
                                }
                            },
                            {
                                "subItems": {
                                    "type": "subitems",
                                    "items": [
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        },
                                        {
                                            "animation": "color",
                                            "failureReason": "Unsupported CSS Property: color"
                                        },
                                        {
                                            "animation": "color",
                                            "failureReason": "Unsupported CSS Property: color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        }
                                    ]
                                },
                                "node": {
                                    "type": "node",
                                    "snippet": "<div class=\"px-[14px] py-2 rounded-lg mb-0.5 last:mb-0  transition-all ease-out durati…\">",
                                    "nodeLabel": "Striver's CP Sheet",
                                    "lhId": "page-7-DIV",
                                    "boundingRect": {
                                        "bottom": 475,
                                        "right": 63,
                                        "height": 39,
                                        "width": 47,
                                        "left": 16,
                                        "top": 437
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,0,DIV,1,DIV,1,DIV,6,DIV",
                                    "selector": "div > div#sidebar > div.space-y-4 > div.px-[14px]"
                                }
                            },
                            {
                                "subItems": {
                                    "items": [
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        },
                                        {
                                            "animation": "color",
                                            "failureReason": "Unsupported CSS Property: color"
                                        },
                                        {
                                            "animation": "color",
                                            "failureReason": "Unsupported CSS Property: color"
                                        },
                                        {
                                            "animation": "color",
                                            "failureReason": "Unsupported CSS Property: color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        }
                                    ],
                                    "type": "subitems"
                                },
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,0,DIV,1,DIV,1,DIV,7,BUTTON",
                                    "nodeLabel": "Saved Notes",
                                    "boundingRect": {
                                        "height": 40,
                                        "right": 63,
                                        "width": 47,
                                        "bottom": 531,
                                        "top": 491,
                                        "left": 16
                                    },
                                    "type": "node",
                                    "snippet": "<button class=\"w-full cursor-pointer px-3 py-2 rounded-lg mb-0.5 last:mb-0 transition-all…\">",
                                    "selector": "div > div#sidebar > div.space-y-4 > button.w-full",
                                    "lhId": "page-8-BUTTON"
                                }
                            },
                            {
                                "subItems": {
                                    "items": [
                                        {
                                            "animation": "color",
                                            "failureReason": "Unsupported CSS Property: color"
                                        },
                                        {
                                            "animation": "color",
                                            "failureReason": "Unsupported CSS Property: color"
                                        },
                                        {
                                            "animation": "color",
                                            "failureReason": "Unsupported CSS Property: color"
                                        },
                                        {
                                            "animation": "color",
                                            "failureReason": "Unsupported CSS Property: color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        }
                                    ],
                                    "type": "subitems"
                                },
                                "node": {
                                    "boundingRect": {
                                        "top": 273,
                                        "bottom": 312,
                                        "right": 63,
                                        "height": 39,
                                        "left": 16,
                                        "width": 47
                                    },
                                    "nodeLabel": "System Design",
                                    "lhId": "page-9-DIV",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,0,DIV,1,DIV,1,DIV,3,DIV",
                                    "selector": "div > div#sidebar > div.space-y-4 > div.px-3",
                                    "snippet": "<div class=\"px-3 py-2 rounded-lg mb-0.5 last:mb-0  transition-all ease-out duration-30…\">"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "page-10-BUTTON",
                                    "snippet": "<button class=\"w-full cursor-pointer px-3 py-2 rounded-lg mb-0.5 last:mb-0 transition-all…\">",
                                    "selector": "div > div#sidebar > div.space-y-4 > button.w-full",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,0,DIV,1,DIV,1,DIV,0,BUTTON",
                                    "boundingRect": {
                                        "right": 63,
                                        "bottom": 146,
                                        "width": 47,
                                        "top": 106,
                                        "left": 16,
                                        "height": 40
                                    },
                                    "type": "node",
                                    "nodeLabel": "Profile"
                                },
                                "subItems": {
                                    "items": [
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        },
                                        {
                                            "animation": "color",
                                            "failureReason": "Unsupported CSS Property: color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        }
                                    ],
                                    "type": "subitems"
                                }
                            }
                        ],
                        "type": "table",
                        "headings": [
                            {
                                "key": "node",
                                "valueType": "node",
                                "label": "Element",
                                "subItemsHeading": {
                                    "key": "failureReason",
                                    "valueType": "text"
                                }
                            },
                            {
                                "subItemsHeading": {
                                    "key": "animation",
                                    "valueType": "text"
                                },
                                "key": null,
                                "valueType": "text",
                                "label": "Name"
                            }
                        ]
                    }
                },
                "accesskeys": {
                    "id": "accesskeys",
                    "title": "`[accesskey]` values are unique",
                    "description": "Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more about access keys](https://dequeuniversity.com/rules/axe/4.9/accesskeys).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "render-blocking-resources": {
                    "id": "render-blocking-resources",
                    "title": "Eliminate render-blocking resources",
                    "description": "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).",
                    "score": 0,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "Potential savings of 590 ms",
                    "details": {
                        "overallSavingsMs": 588,
                        "headings": [
                            {
                                "label": "URL",
                                "key": "url",
                                "valueType": "url"
                            },
                            {
                                "label": "Transfer Size",
                                "key": "totalBytes",
                                "valueType": "bytes"
                            },
                            {
                                "key": "wastedMs",
                                "label": "Potential Savings",
                                "valueType": "timespanMs"
                            }
                        ],
                        "type": "opportunity",
                        "items": [
                            {
                                "totalBytes": 199014,
                                "wastedMs": 82,
                                "url": "https://takeuforward.org/static/css/main.3b066ee3.css"
                            },
                            {
                                "totalBytes": 1580,
                                "wastedMs": 233,
                                "url": "https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&display=swap"
                            }
                        ]
                    },
                    "numericValue": 588,
                    "numericUnit": "millisecond"
                },
                "charset": {
                    "id": "charset",
                    "title": "Properly defines charset",
                    "description": "A character encoding declaration is required. It can be done with a `<meta>` tag in the first 1024 bytes of the HTML or in the Content-Type HTTP response header. [Learn more about declaring the character encoding](https://developer.chrome.com/docs/lighthouse/best-practices/charset/).",
                    "score": 1,
                    "scoreDisplayMode": "binary"
                },
                "inspector-issues": {
                    "id": "inspector-issues",
                    "title": "No issues in the `Issues` panel in Chrome Devtools",
                    "description": "Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems. They can come from network request failures, insufficient security controls, and other browser concerns. Open up the Issues panel in Chrome DevTools for more details on each issue.",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "type": "table",
                        "headings": [],
                        "items": []
                    }
                },
                "label": {
                    "id": "label",
                    "title": "Form elements have associated labels",
                    "description": "Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more about form element labels](https://dequeuniversity.com/rules/axe/4.9/label).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "color-contrast": {
                    "id": "color-contrast",
                    "title": "Background and foreground colors have a sufficient contrast ratio",
                    "description": "Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.9/color-contrast).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "headings": [],
                        "type": "table",
                        "items": []
                    }
                },
                "bypass": {
                    "id": "bypass",
                    "title": "The page contains a heading, skip link, or landmark region",
                    "description": "Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more about bypass blocks](https://dequeuniversity.com/rules/axe/4.9/bypass).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "js-libraries": {
                    "id": "js-libraries",
                    "title": "Detected JavaScript libraries",
                    "description": "All front-end JavaScript libraries detected on the page. [Learn more about this JavaScript library detection diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/js-libraries/).",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "details": {
                        "headings": [
                            {
                                "valueType": "text",
                                "label": "Name",
                                "key": "name"
                            },
                            {
                                "valueType": "text",
                                "label": "Version",
                                "key": "version"
                            }
                        ],
                        "items": [
                            {
                                "npm": "core-js",
                                "name": "core-js",
                                "version": "core-js-pure@2.6.12"
                            }
                        ],
                        "type": "table",
                        "debugData": {
                            "type": "debugdata",
                            "stacks": [
                                {
                                    "id": "corejs",
                                    "version": "core-js-pure@2.6.12"
                                }
                            ]
                        }
                    }
                },
                "uses-passive-event-listeners": {
                    "id": "uses-passive-event-listeners",
                    "title": "Uses passive listeners to improve scrolling performance",
                    "description": "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more about adopting passive event listeners](https://developer.chrome.com/docs/lighthouse/best-practices/uses-passive-event-listeners/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "items": [],
                        "headings": [],
                        "type": "table"
                    }
                },
                "aria-input-field-name": {
                    "id": "aria-input-field-name",
                    "title": "ARIA input fields have accessible names",
                    "description": "When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about input field labels](https://dequeuniversity.com/rules/axe/4.9/aria-input-field-name).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "lcp-lazy-loaded": {
                    "id": "lcp-lazy-loaded",
                    "title": "Largest Contentful Paint image was not lazily loaded",
                    "description": "Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint. [Learn more about optimal lazy loading](https://web.dev/articles/lcp-lazy-loading).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "td-headers-attr": {
                    "id": "td-headers-attr",
                    "title": "Cells in a `<table>` element that use the `[headers]` attribute refer to table cells within the same table.",
                    "description": "Screen readers have features to make navigating tables easier. Ensuring `<td>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more about the `headers` attribute](https://dequeuniversity.com/rules/axe/4.9/td-headers-attr).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "listitem": {
                    "id": "listitem",
                    "title": "List items (`<li>`) are contained within `<ul>`, `<ol>` or `<menu>` parent elements",
                    "description": "Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.9/listitem).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "image-aspect-ratio": {
                    "id": "image-aspect-ratio",
                    "title": "Displays images with correct aspect ratio",
                    "description": "Image display dimensions should match natural aspect ratio. [Learn more about image aspect ratio](https://developer.chrome.com/docs/lighthouse/best-practices/image-aspect-ratio/).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "items": [],
                        "type": "table",
                        "headings": []
                    }
                },
                "font-display": {
                    "id": "font-display",
                    "title": "All text remains visible during webfont loads",
                    "description": "Leverage the `font-display` CSS feature to ensure text is user-visible while webfonts are loading. [Learn more about `font-display`](https://developer.chrome.com/docs/lighthouse/performance/font-display/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "type": "table",
                        "items": [],
                        "headings": []
                    },
                    "warnings": []
                },
                "landmark-one-main": {
                    "id": "landmark-one-main",
                    "title": "Document has a main landmark.",
                    "description": "One main landmark helps screen reader users navigate a web page. [Learn more about landmarks](https://dequeuniversity.com/rules/axe/4.9/landmark-one-main).",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "details": {
                        "headings": [
                            {
                                "key": "node",
                                "valueType": "node",
                                "label": "Failing Elements",
                                "subItemsHeading": {
                                    "valueType": "node",
                                    "key": "relatedNode"
                                }
                            }
                        ],
                        "items": [
                            {
                                "node": {
                                    "selector": "html",
                                    "type": "node",
                                    "snippet": "<html lang=\"en\">",
                                    "nodeLabel": "html",
                                    "lhId": "1-1-HTML",
                                    "boundingRect": {
                                        "bottom": 940,
                                        "top": 0,
                                        "right": 1350,
                                        "height": 940,
                                        "width": 1350,
                                        "left": 0
                                    },
                                    "path": "1,HTML",
                                    "explanation": "Fix all of the following:\n  Document does not have a main landmark"
                                }
                            }
                        ],
                        "debugData": {
                            "tags": [
                                "cat.semantics",
                                "best-practice"
                            ],
                            "impact": "moderate",
                            "type": "debugdata"
                        },
                        "type": "table"
                    }
                },
                "logical-tab-order": {
                    "id": "logical-tab-order",
                    "title": "The page has a logical tab order",
                    "description": "Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more about logical tab ordering](https://developer.chrome.com/docs/lighthouse/accessibility/logical-tab-order/).",
                    "score": null,
                    "scoreDisplayMode": "manual"
                },
                "visual-order-follows-dom": {
                    "id": "visual-order-follows-dom",
                    "title": "Visual order on the page follows DOM order",
                    "description": "DOM order matches the visual order, improving navigation for assistive technology. [Learn more about DOM and visual ordering](https://developer.chrome.com/docs/lighthouse/accessibility/visual-order-follows-dom/).",
                    "score": null,
                    "scoreDisplayMode": "manual"
                },
                "image-size-responsive": {
                    "id": "image-size-responsive",
                    "title": "Serves images with appropriate resolution",
                    "description": "Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity. [Learn how to provide responsive images](https://web.dev/articles/serve-responsive-images).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "items": [],
                        "headings": [],
                        "type": "table"
                    }
                },
                "valid-source-maps": {
                    "id": "valid-source-maps",
                    "title": "Missing source maps for large first-party JavaScript",
                    "description": "Source maps translate minified code to the original source code. This helps developers debug in production. In addition, Lighthouse is able to provide further insights. Consider deploying source maps to take advantage of these benefits. [Learn more about source maps](https://developer.chrome.com/docs/devtools/javascript/source-maps/).",
                    "score": 0,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "headings": [
                            {
                                "valueType": "url",
                                "key": "scriptUrl",
                                "subItemsHeading": {
                                    "key": "error"
                                },
                                "label": "URL"
                            },
                            {
                                "key": "sourceMapUrl",
                                "valueType": "url",
                                "label": "Map URL"
                            }
                        ],
                        "items": [
                            {
                                "scriptUrl": "https://takeuforward.org/static/js/main.682465b6.js",
                                "subItems": {
                                    "items": [
                                        {
                                            "error": "Large JavaScript file is missing a source map"
                                        }
                                    ],
                                    "type": "subitems"
                                }
                            }
                        ],
                        "type": "table"
                    }
                },
                "link-name": {
                    "id": "link-name",
                    "title": "Links do not have a discernible name",
                    "description": "Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn how to make links accessible](https://dequeuniversity.com/rules/axe/4.9/link-name).",
                    "score": 0,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "headings": [
                            {
                                "subItemsHeading": {
                                    "key": "relatedNode",
                                    "valueType": "node"
                                },
                                "key": "node",
                                "label": "Failing Elements",
                                "valueType": "node"
                            }
                        ],
                        "debugData": {
                            "type": "debugdata",
                            "impact": "serious",
                            "tags": [
                                "cat.name-role-value",
                                "wcag2a",
                                "wcag244",
                                "wcag412",
                                "section508",
                                "section508.22.a",
                                "TTv5",
                                "TT6.a",
                                "EN-301-549",
                                "EN-9.2.4.4",
                                "EN-9.4.1.2",
                                "ACT"
                            ]
                        },
                        "items": [
                            {
                                "node": {
                                    "type": "node",
                                    "boundingRect": {
                                        "bottom": 66,
                                        "height": 50,
                                        "left": 15,
                                        "top": 16,
                                        "width": 50,
                                        "right": 65
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,0,DIV,1,DIV,0,DIV,0,A",
                                    "snippet": "<a class=\"flex items-center gap-2 \" href=\"/\">",
                                    "explanation": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute",
                                    "nodeLabel": "div > div#sidebar > div.flex > a.flex",
                                    "lhId": "1-2-A",
                                    "selector": "div > div#sidebar > div.flex > a.flex"
                                }
                            }
                        ],
                        "type": "table"
                    }
                },
                "focusable-controls": {
                    "id": "focusable-controls",
                    "title": "Interactive controls are keyboard focusable",
                    "description": "Custom interactive controls are keyboard focusable and display a focus indicator. [Learn how to make custom controls focusable](https://developer.chrome.com/docs/lighthouse/accessibility/focusable-controls/).",
                    "score": null,
                    "scoreDisplayMode": "manual"
                },
                "third-party-facades": {
                    "id": "third-party-facades",
                    "title": "Lazy load third-party resources with facades",
                    "description": "Some third-party embeds can be lazy loaded. Consider replacing them with a facade until they are required. [Learn how to defer third-parties with a facade](https://developer.chrome.com/docs/lighthouse/performance/third-party-facades/).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "no-document-write": {
                    "id": "no-document-write",
                    "title": "Avoids `document.write()`",
                    "description": "For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn how to avoid document.write()](https://developer.chrome.com/docs/lighthouse/best-practices/no-document-write/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "type": "table",
                        "items": [],
                        "headings": []
                    }
                },
                "duplicated-javascript": {
                    "id": "duplicated-javascript",
                    "title": "Remove duplicate modules in JavaScript bundles",
                    "description": "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "debugData": {
                            "type": "debugdata",
                            "metricSavings": {
                                "LCP": 0,
                                "FCP": 0
                            }
                        },
                        "overallSavingsBytes": 0,
                        "overallSavingsMs": 0,
                        "type": "opportunity",
                        "headings": [],
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "items": []
                    },
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "aria-prohibited-attr": {
                    "id": "aria-prohibited-attr",
                    "title": "Elements use only permitted ARIA attributes",
                    "description": "Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies. [Learn more about prohibited ARIA roles](https://dequeuniversity.com/rules/axe/4.9/aria-prohibited-attr).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "items": [],
                        "headings": [],
                        "type": "table"
                    }
                },
                "unsized-images": {
                    "id": "unsized-images",
                    "title": "Image elements have explicit `width` and `height`",
                    "description": "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "headings": [],
                        "items": [],
                        "type": "table"
                    }
                },
                "offscreen-images": {
                    "id": "offscreen-images",
                    "title": "Defer offscreen images",
                    "description": "Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn how to defer offscreen images](https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/).",
                    "score": 0.5,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "Potential savings of 5 KiB",
                    "details": {
                        "overallSavingsBytes": 5244,
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "items": [
                            {
                                "totalBytes": 5244,
                                "url": "https://takeuforward-content-images.s3.ap-south-1.amazonaws.com/content/codestudio-ZJxLZjiy",
                                "wastedBytes": 5244,
                                "node": {
                                    "selector": "td.px-2 > div.flex > a > img.w-6",
                                    "snippet": "<img src=\"https://takeuforward-content-images.s3.ap-south-1.amazonaws.com/content/co…\" class=\"w-6 h-6 object-contain\" alt=\"code\">",
                                    "type": "node",
                                    "lhId": "1-3525-IMG",
                                    "boundingRect": {
                                        "width": 0,
                                        "right": 0,
                                        "left": 0,
                                        "height": 0,
                                        "bottom": 0,
                                        "top": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,1,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,6,TBODY,0,TR,4,TD,0,DIV,0,A,0,IMG",
                                    "nodeLabel": "code"
                                },
                                "requestStartTime": 1117069527.7549999,
                                "wastedPercent": 100
                            }
                        ],
                        "type": "opportunity",
                        "overallSavingsMs": 0,
                        "headings": [
                            {
                                "key": "node",
                                "valueType": "node"
                            },
                            {
                                "label": "URL",
                                "key": "url",
                                "valueType": "url"
                            },
                            {
                                "key": "totalBytes",
                                "valueType": "bytes",
                                "label": "Resource Size"
                            },
                            {
                                "valueType": "bytes",
                                "label": "Potential Savings",
                                "key": "wastedBytes"
                            }
                        ],
                        "debugData": {
                            "metricSavings": {
                                "FCP": 0,
                                "LCP": 0
                            },
                            "type": "debugdata"
                        }
                    },
                    "warnings": [],
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "meta-viewport": {
                    "id": "meta-viewport",
                    "title": "`[user-scalable=\"no\"]` is not used in the `<meta name=\"viewport\">` element and the `[maximum-scale]` attribute is not less than 5.",
                    "description": "Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more about the viewport meta tag](https://dequeuniversity.com/rules/axe/4.9/meta-viewport).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "headings": [],
                        "items": [],
                        "type": "table"
                    }
                },
                "total-blocking-time": {
                    "id": "total-blocking-time",
                    "title": "Total Blocking Time",
                    "description": "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
                    "score": 0,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "2,130 ms",
                    "numericValue": 2128,
                    "numericUnit": "millisecond"
                },
                "total-byte-weight": {
                    "id": "total-byte-weight",
                    "title": "Avoids enormous network payloads",
                    "description": "Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/).",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "displayValue": "Total size was 1,093 KiB",
                    "details": {
                        "items": [
                            {
                                "url": "https://takeuforward.org/static/js/main.682465b6.js",
                                "totalBytes": 736154
                            },
                            {
                                "totalBytes": 104255,
                                "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0"
                            },
                            {
                                "totalBytes": 85340,
                                "url": "https://accounts.google.com/gsi/client"
                            },
                            {
                                "url": "https://accounts.google.com/gsi/button?type=standard&theme=filled_black&size=large&text=undefined&shape=rectangle&logo_alignment=undefined&width=undefined&locale=undefined&click_listener=undefined&client_id=590234420126-hc9007chffeh5rh8j5gcositk2ia89do.apps.googleusercontent.com&iframe_id=gsi_196391_166040&as=ZPSFfcC8kIK%2B15bS2S5z2Q",
                                "totalBytes": 43846
                            },
                            {
                                "url": "https://adminapi.takeuforward.org/api/sheets/double/strivers_a2z_sheet",
                                "totalBytes": 41834
                            },
                            {
                                "totalBytes": 36393,
                                "url": "https://takeuforward.org/static/css/main.3b066ee3.css"
                            },
                            {
                                "totalBytes": 16487,
                                "url": "https://fonts.gstatic.com/s/amaranth/v18/KtkpALODe433f0j1zMF-OMWl42H9FYud.woff2"
                            },
                            {
                                "totalBytes": 13180,
                                "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPecZTIAOhVxoMyOr9n_E7fdMPmDaZRbrw.woff2"
                            },
                            {
                                "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffBzCGItzY5abuWI.woff2",
                                "totalBytes": 12992
                            },
                            {
                                "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffHjDGItzY5abuWI.woff2",
                                "totalBytes": 12519
                            }
                        ],
                        "sortedBy": [
                            "totalBytes"
                        ],
                        "type": "table",
                        "headings": [
                            {
                                "valueType": "url",
                                "label": "URL",
                                "key": "url"
                            },
                            {
                                "key": "totalBytes",
                                "label": "Transfer Size",
                                "valueType": "bytes"
                            }
                        ]
                    },
                    "numericValue": 1118990,
                    "numericUnit": "byte"
                },
                "aria-meter-name": {
                    "id": "aria-meter-name",
                    "title": "ARIA `meter` elements have accessible names",
                    "description": "When a meter element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `meter` elements](https://dequeuniversity.com/rules/axe/4.9/aria-meter-name).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "final-screenshot": {
                    "id": "final-screenshot",
                    "title": "Final Screenshot",
                    "description": "The last screenshot captured of the pageload.",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "details": {
                        "timestamp": 1117070665386,
                        "timing": 4251,
                        "data": "data:image/jpeg;base64,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",
                        "type": "screenshot"
                    }
                },
                "use-landmarks": {
                    "id": "use-landmarks",
                    "title": "HTML5 landmark elements are used to improve navigation",
                    "description": "Landmark elements (`<main>`, `<nav>`, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more about landmark elements](https://developer.chrome.com/docs/lighthouse/accessibility/use-landmarks/).",
                    "score": null,
                    "scoreDisplayMode": "manual"
                },
                "aria-required-attr": {
                    "id": "aria-required-attr",
                    "title": "`[role]`s have all required `[aria-*]` attributes",
                    "description": "Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more about roles and required attributes](https://dequeuniversity.com/rules/axe/4.9/aria-required-attr).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "uses-responsive-images": {
                    "id": "uses-responsive-images",
                    "title": "Properly size images",
                    "description": "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn how to size images](https://developer.chrome.com/docs/lighthouse/performance/uses-responsive-images/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "overallSavingsBytes": 0,
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "headings": [],
                        "type": "opportunity",
                        "debugData": {
                            "metricSavings": {
                                "FCP": 0,
                                "LCP": 0
                            },
                            "type": "debugdata"
                        },
                        "overallSavingsMs": 0,
                        "items": []
                    },
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "mainthread-work-breakdown": {
                    "id": "mainthread-work-breakdown",
                    "title": "Minimize main-thread work",
                    "description": "Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to minimize main-thread work](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/)",
                    "score": 0,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "3.1 s",
                    "details": {
                        "sortedBy": [
                            "duration"
                        ],
                        "items": [
                            {
                                "duration": 2315.1589999999974,
                                "group": "scriptEvaluation",
                                "groupLabel": "Script Evaluation"
                            },
                            {
                                "group": "garbageCollection",
                                "groupLabel": "Garbage Collection",
                                "duration": 344.9139999999999
                            },
                            {
                                "group": "other",
                                "groupLabel": "Other",
                                "duration": 205.08199999999897
                            },
                            {
                                "duration": 123.74899999999998,
                                "group": "styleLayout",
                                "groupLabel": "Style & Layout"
                            },
                            {
                                "duration": 93.86599999999999,
                                "groupLabel": "Script Parsing & Compilation",
                                "group": "scriptParseCompile"
                            },
                            {
                                "duration": 32.11200000000009,
                                "group": "paintCompositeRender",
                                "groupLabel": "Rendering"
                            },
                            {
                                "groupLabel": "Parse HTML & CSS",
                                "duration": 16.276000000000003,
                                "group": "parseHTML"
                            }
                        ],
                        "type": "table",
                        "headings": [
                            {
                                "label": "Category",
                                "key": "groupLabel",
                                "valueType": "text"
                            },
                            {
                                "label": "Time Spent",
                                "key": "duration",
                                "granularity": 1,
                                "valueType": "ms"
                            }
                        ]
                    },
                    "numericValue": 3131.157999999996,
                    "numericUnit": "millisecond"
                },
                "list": {
                    "id": "list",
                    "title": "Lists contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).",
                    "description": "Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.9/list).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "largest-contentful-paint": {
                    "id": "largest-contentful-paint",
                    "title": "Largest Contentful Paint",
                    "description": "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
                    "score": 0.79,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "1.5 s",
                    "numericValue": 1545.378318150635,
                    "numericUnit": "millisecond"
                },
                "crawlable-anchors": {
                    "id": "crawlable-anchors",
                    "title": "Links are not crawlable",
                    "description": "Search engines may use `href` attributes on links to crawl websites. Ensure that the `href` attribute of anchor elements links to an appropriate destination, so more pages of the site can be discovered. [Learn how to make links crawlable](https://support.google.com/webmasters/answer/9112205)",
                    "score": 0,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "items": [
                            {
                                "node": {
                                    "boundingRect": {
                                        "left": 0,
                                        "height": 0,
                                        "width": 0,
                                        "right": 0,
                                        "top": 0,
                                        "bottom": 0
                                    },
                                    "nodeLabel": "Open in New Tab",
                                    "lhId": "1-4-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\" class=\"btn-brand-2 md:text-[16px] text-[8px]\">",
                                    "selector": "div.px-5 > div.flex > div.flex > a.btn-brand-2",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,4,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,A",
                                    "type": "node"
                                }
                            },
                            {
                                "node": {
                                    "boundingRect": {
                                        "right": 0,
                                        "height": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "width": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\" class=\"btn-brand-2 md:text-[16px] text-[8px]\">",
                                    "lhId": "1-5-A",
                                    "type": "node",
                                    "nodeLabel": "Open in New Tab",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,8,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,A",
                                    "selector": "div.px-5 > div.flex > div.flex > a.btn-brand-2"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Data Types",
                                    "boundingRect": {
                                        "height": 0,
                                        "width": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "top": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,1,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "lhId": "1-24-A"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "What are arrays, strings?",
                                    "type": "node",
                                    "lhId": "1-32-A",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,1,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,5,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "boundingRect": {
                                        "width": 0,
                                        "left": 0,
                                        "bottom": 0,
                                        "height": 0,
                                        "top": 0,
                                        "right": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "lhId": "1-39-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "Functions (Pass by Reference and Value)",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,1,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,8,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "boundingRect": {
                                        "right": 0,
                                        "height": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "width": 0,
                                        "top": 0
                                    }
                                }
                            },
                            {
                                "node": {
                                    "boundingRect": {
                                        "bottom": 0,
                                        "top": 0,
                                        "right": 0,
                                        "left": 0,
                                        "width": 0,
                                        "height": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-48-A",
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,1,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "Java Collections"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-336-A",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,4,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "left": 0,
                                        "height": 0,
                                        "top": 0,
                                        "right": 0,
                                        "width": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "Find Peak Element (2D Matrix)"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,5,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,1,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "left": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "height": 0,
                                        "width": 0,
                                        "top": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "Remove outermost Paranthesis",
                                    "type": "node",
                                    "lhId": "1-341-A"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Largest odd number in a string",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,5,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "boundingRect": {
                                        "top": 0,
                                        "height": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "left": 0,
                                        "right": 0
                                    },
                                    "type": "node",
                                    "lhId": "1-346-A"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "boundingRect": {
                                        "height": 0,
                                        "width": 0,
                                        "right": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "left": 0
                                    },
                                    "lhId": "1-348-A",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,5,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "Longest Common Prefix"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,5,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,5,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "width": 0,
                                        "top": 0,
                                        "left": 0,
                                        "right": 0,
                                        "height": 0
                                    },
                                    "lhId": "1-350-A",
                                    "type": "node",
                                    "nodeLabel": "Isomorphic String",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "lhId": "1-352-A",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "width": 0,
                                        "right": 0,
                                        "height": 0,
                                        "top": 0,
                                        "left": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,5,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,6,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "check whether one string is a rotation of another",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "boundingRect": {
                                        "right": 0,
                                        "left": 0,
                                        "width": 0,
                                        "height": 0,
                                        "top": 0,
                                        "bottom": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-357-A",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,5,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,1,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "Sort Characters by frequency"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "nodeLabel": "Maximum Nesting Depth of Paranthesis",
                                    "boundingRect": {
                                        "height": 0,
                                        "width": 0,
                                        "right": 0,
                                        "left": 0,
                                        "bottom": 0,
                                        "top": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-359-A",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,5,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,5,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "height": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "width": 0,
                                        "right": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "nodeLabel": "Roman Number to Integer and vice versa",
                                    "lhId": "1-361-A"
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-363-A",
                                    "type": "node",
                                    "boundingRect": {
                                        "top": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "left": 0,
                                        "right": 0,
                                        "height": 0
                                    },
                                    "nodeLabel": "Implement Atoi",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,5,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "lhId": "1-365-A",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,5,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,5,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "left": 0,
                                        "top": 0,
                                        "right": 0,
                                        "height": 0,
                                        "width": 0,
                                        "bottom": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "nodeLabel": "Count Number of Substrings"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,5,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,6,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-367-A",
                                    "nodeLabel": "Longest Palindromic Substring[Do it without DP]",
                                    "boundingRect": {
                                        "width": 0,
                                        "top": 0,
                                        "height": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "right": 0
                                    },
                                    "type": "node"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Sum of Beauty of all substring",
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,5,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,7,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "left": 0,
                                        "right": 0,
                                        "height": 0,
                                        "top": 0,
                                        "width": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-369-A"
                                }
                            },
                            {
                                "node": {
                                    "boundingRect": {
                                        "height": 0,
                                        "right": 0,
                                        "left": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "width": 0
                                    },
                                    "nodeLabel": "Reverse Every Word in A String",
                                    "lhId": "1-371-A",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,5,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,8,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,6,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,1,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-373-A",
                                    "nodeLabel": "Introduction to LinkedList, learn about struct, and how is node represented",
                                    "boundingRect": {
                                        "left": 0,
                                        "width": 0,
                                        "height": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "right": 0
                                    }
                                }
                            },
                            {
                                "node": {
                                    "boundingRect": {
                                        "height": 0,
                                        "left": 0,
                                        "width": 0,
                                        "bottom": 0,
                                        "top": 0,
                                        "right": 0
                                    },
                                    "type": "node",
                                    "lhId": "1-381-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "Find the length of the linkedlist [learn traversal]",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,6,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Search an element in the LL",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,6,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,5,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-383-A",
                                    "boundingRect": {
                                        "left": 0,
                                        "right": 0,
                                        "height": 0,
                                        "width": 0,
                                        "bottom": 0,
                                        "top": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Introduction to DLL, learn about struct, and how is node represented",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "left": 0,
                                        "top": 0,
                                        "height": 0,
                                        "right": 0,
                                        "width": 0
                                    },
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-385-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,6,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,1,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Length of Loop in LL",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,6,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,6,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-411-A",
                                    "boundingRect": {
                                        "width": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "height": 0,
                                        "right": 0,
                                        "left": 0
                                    },
                                    "type": "node"
                                }
                            },
                            {
                                "node": {
                                    "boundingRect": {
                                        "left": 0,
                                        "bottom": 0,
                                        "right": 0,
                                        "height": 0,
                                        "width": 0,
                                        "top": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,6,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,8,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-416-A",
                                    "nodeLabel": "Segrregate odd and even nodes in LL"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Delete the middle node of LL",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "boundingRect": {
                                        "height": 0,
                                        "width": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "top": 0
                                    },
                                    "lhId": "1-421-A",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,6,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,10,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "boundingRect": {
                                        "left": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "height": 0,
                                        "width": 0,
                                        "right": 0
                                    },
                                    "nodeLabel": "Sort LL",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,6,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,11,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-423-A",
                                    "type": "node"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "lhId": "1-425-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,6,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,12,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "Sort a LL of 0's 1's and 2's by changing links",
                                    "boundingRect": {
                                        "height": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "right": 0,
                                        "width": 0,
                                        "top": 0
                                    }
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Add 1 to a number represented by LL",
                                    "boundingRect": {
                                        "right": 0,
                                        "height": 0,
                                        "top": 0,
                                        "width": 0,
                                        "bottom": 0,
                                        "left": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-430-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,6,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,14,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,6,DIV,0,DIV,1,DIV,1,DIV,3,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,1,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "Delete all occurrences of a key in DLL",
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-435-A",
                                    "boundingRect": {
                                        "left": 0,
                                        "right": 0,
                                        "top": 0,
                                        "width": 0,
                                        "bottom": 0,
                                        "height": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "nodeLabel": "Find pairs with given sum in DLL",
                                    "boundingRect": {
                                        "right": 0,
                                        "top": 0,
                                        "left": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "height": 0
                                    },
                                    "lhId": "1-437-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,6,DIV,0,DIV,1,DIV,1,DIV,3,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-439-A",
                                    "nodeLabel": "Remove duplicates from sorted DLL",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,6,DIV,0,DIV,1,DIV,1,DIV,3,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "width": 0,
                                        "top": 0,
                                        "left": 0,
                                        "height": 0,
                                        "right": 0,
                                        "bottom": 0
                                    }
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-453-A",
                                    "boundingRect": {
                                        "left": 0,
                                        "top": 0,
                                        "right": 0,
                                        "width": 0,
                                        "height": 0,
                                        "bottom": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,7,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,1,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "Recursive Implementation of atoi()",
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-458-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,7,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "boundingRect": {
                                        "width": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "right": 0,
                                        "height": 0
                                    },
                                    "nodeLabel": "Count Good numbers"
                                }
                            },
                            {
                                "node": {
                                    "boundingRect": {
                                        "right": 0,
                                        "width": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "height": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "Sort a stack using recursion",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "lhId": "1-460-A",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,7,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "lhId": "1-462-A",
                                    "boundingRect": {
                                        "width": 0,
                                        "height": 0,
                                        "right": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "left": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "nodeLabel": "Reverse a stack using recursion",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,7,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,5,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,7,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,1,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-464-A",
                                    "boundingRect": {
                                        "left": 0,
                                        "width": 0,
                                        "top": 0,
                                        "height": 0,
                                        "right": 0,
                                        "bottom": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "nodeLabel": "Generate all binary strings"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Generate Paranthesis",
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,7,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "right": 0,
                                        "width": 0,
                                        "top": 0,
                                        "height": 0,
                                        "left": 0
                                    },
                                    "lhId": "1-466-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "nodeLabel": "Learn All Patterns of Subsequences (Theory)",
                                    "lhId": "1-471-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,7,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "top": 0,
                                        "left": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "right": 0,
                                        "height": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,7,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,5,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "type": "node",
                                    "lhId": "1-473-A",
                                    "nodeLabel": "Count all subsequences with sum K",
                                    "boundingRect": {
                                        "left": 0,
                                        "bottom": 0,
                                        "height": 0,
                                        "right": 0,
                                        "top": 0,
                                        "width": 0
                                    }
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "nodeLabel": "Check if there exists a subsequence with sum K",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "right": 0,
                                        "left": 0,
                                        "top": 0,
                                        "width": 0,
                                        "height": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,7,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,6,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-475-A"
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,7,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,11,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "boundingRect": {
                                        "height": 0,
                                        "right": 0,
                                        "left": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "top": 0
                                    },
                                    "lhId": "1-489-A",
                                    "nodeLabel": "Combination Sum - III"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Letter Combinations of a Phone number",
                                    "boundingRect": {
                                        "width": 0,
                                        "bottom": 0,
                                        "right": 0,
                                        "top": 0,
                                        "left": 0,
                                        "height": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-491-A",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,7,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,12,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "boundingRect": {
                                        "top": 0,
                                        "width": 0,
                                        "left": 0,
                                        "height": 0,
                                        "right": 0,
                                        "bottom": 0
                                    },
                                    "nodeLabel": "Word Break",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,7,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,5,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-505-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "boundingRect": {
                                        "top": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "height": 0,
                                        "left": 0,
                                        "right": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,7,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,8,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "Expression Add Operators",
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-513-A"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,1,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "right": 0,
                                        "left": 0,
                                        "top": 0,
                                        "height": 0,
                                        "width": 0
                                    },
                                    "nodeLabel": "Introduction to Bit Manipulation [Theory]",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-515-A"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-517-A",
                                    "boundingRect": {
                                        "right": 0,
                                        "left": 0,
                                        "top": 0,
                                        "width": 0,
                                        "bottom": 0,
                                        "height": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "type": "node",
                                    "nodeLabel": "Check if the i-th bit is set or not"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Check if a number is odd or not",
                                    "boundingRect": {
                                        "height": 0,
                                        "right": 0,
                                        "width": 0,
                                        "left": 0,
                                        "top": 0,
                                        "bottom": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-519-A"
                                }
                            },
                            {
                                "node": {
                                    "boundingRect": {
                                        "height": 0,
                                        "width": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "right": 0
                                    },
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "Check if a number is power of 2 or not",
                                    "lhId": "1-521-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,5,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "width": 0,
                                        "top": 0,
                                        "height": 0,
                                        "right": 0,
                                        "left": 0,
                                        "bottom": 0
                                    },
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-523-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "Count the number of set bits"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "boundingRect": {
                                        "top": 0,
                                        "right": 0,
                                        "height": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "width": 0
                                    },
                                    "type": "node",
                                    "nodeLabel": "Set/Unset the rightmost unset bit",
                                    "lhId": "1-525-A",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,6,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,7,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "height": 0,
                                        "width": 0,
                                        "left": 0,
                                        "top": 0,
                                        "right": 0,
                                        "bottom": 0
                                    },
                                    "nodeLabel": "Swap two numbers",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-527-A"
                                }
                            },
                            {
                                "node": {
                                    "boundingRect": {
                                        "height": 0,
                                        "left": 0,
                                        "width": 0,
                                        "bottom": 0,
                                        "right": 0,
                                        "top": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,8,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "nodeLabel": "Divide two integers without using multiplication, division and mod operator",
                                    "lhId": "1-529-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Count number of bits to be flipped to convert A to B",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "boundingRect": {
                                        "height": 0,
                                        "top": 0,
                                        "width": 0,
                                        "right": 0,
                                        "left": 0,
                                        "bottom": 0
                                    },
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,1,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-531-A"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "Find the number that appears odd number of times",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "boundingRect": {
                                        "height": 0,
                                        "top": 0,
                                        "width": 0,
                                        "right": 0,
                                        "left": 0,
                                        "bottom": 0
                                    },
                                    "lhId": "1-533-A",
                                    "type": "node"
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "lhId": "1-535-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "right": 0,
                                        "bottom": 0,
                                        "top": 0,
                                        "height": 0,
                                        "width": 0,
                                        "left": 0
                                    },
                                    "nodeLabel": "Power Set"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-537-A",
                                    "type": "node",
                                    "nodeLabel": "Find xor of numbers from L to R",
                                    "boundingRect": {
                                        "right": 0,
                                        "left": 0,
                                        "height": 0,
                                        "width": 0,
                                        "bottom": 0,
                                        "top": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,5,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-539-A",
                                    "nodeLabel": "Find the two numbers appearing odd number of times",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "top": 0,
                                        "left": 0,
                                        "right": 0,
                                        "height": 0,
                                        "width": 0
                                    },
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,1,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "top": 0,
                                        "width": 0,
                                        "right": 0,
                                        "left": 0,
                                        "bottom": 0,
                                        "height": 0
                                    },
                                    "lhId": "1-541-A",
                                    "nodeLabel": "Print Prime Factors of a Number"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "All Divisors of a Number",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "right": 0,
                                        "top": 0,
                                        "left": 0,
                                        "height": 0,
                                        "width": 0
                                    },
                                    "type": "node",
                                    "lhId": "1-543-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "boundingRect": {
                                        "top": 0,
                                        "height": 0,
                                        "width": 0,
                                        "left": 0,
                                        "bottom": 0,
                                        "right": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-545-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "nodeLabel": "Sieve of Eratosthenes"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-547-A",
                                    "boundingRect": {
                                        "height": 0,
                                        "width": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "top": 0,
                                        "left": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "Find Prime Factorisation of a Number using Sieve"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,8,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,5,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "Power(n, x)",
                                    "lhId": "1-549-A",
                                    "type": "node",
                                    "boundingRect": {
                                        "height": 0,
                                        "left": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "top": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "nodeLabel": "Prefix to Infix Conversion",
                                    "type": "node",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "top": 0,
                                        "width": 0,
                                        "height": 0,
                                        "right": 0,
                                        "left": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,9,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-578-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Prefix to Postfix Conversion",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "boundingRect": {
                                        "top": 0,
                                        "height": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "width": 0
                                    },
                                    "type": "node",
                                    "lhId": "1-580-A",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,9,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-582-A",
                                    "nodeLabel": "Postfix to Prefix Conversion",
                                    "type": "node",
                                    "boundingRect": {
                                        "height": 0,
                                        "left": 0,
                                        "right": 0,
                                        "top": 0,
                                        "width": 0,
                                        "bottom": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,9,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,9,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,5,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "nodeLabel": "Postfix to Infix",
                                    "lhId": "1-584-A",
                                    "boundingRect": {
                                        "height": 0,
                                        "width": 0,
                                        "top": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "left": 0
                                    }
                                }
                            },
                            {
                                "node": {
                                    "boundingRect": {
                                        "left": 0,
                                        "height": 0,
                                        "right": 0,
                                        "width": 0,
                                        "top": 0,
                                        "bottom": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-592-A",
                                    "nodeLabel": "Next Greater Element 2",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,9,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Next Smaller Element",
                                    "boundingRect": {
                                        "width": 0,
                                        "right": 0,
                                        "height": 0,
                                        "left": 0,
                                        "bottom": 0,
                                        "top": 0
                                    },
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-594-A",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,9,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,9,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "top": 0,
                                        "right": 0,
                                        "height": 0,
                                        "left": 0,
                                        "bottom": 0,
                                        "width": 0
                                    },
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-596-A",
                                    "nodeLabel": "Number of NGEs to the right"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,9,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,6,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "left": 0,
                                        "height": 0,
                                        "top": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "width": 0
                                    },
                                    "nodeLabel": "Sum of subarray minimum",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "lhId": "1-601-A"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Asteroid Collision",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,9,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,7,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "boundingRect": {
                                        "top": 0,
                                        "height": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "right": 0,
                                        "left": 0
                                    },
                                    "lhId": "1-603-A"
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,9,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,8,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-605-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "boundingRect": {
                                        "left": 0,
                                        "bottom": 0,
                                        "right": 0,
                                        "width": 0,
                                        "top": 0,
                                        "height": 0
                                    },
                                    "nodeLabel": "Sum of subarray ranges",
                                    "type": "node"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,9,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,9,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-607-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "boundingRect": {
                                        "top": 0,
                                        "left": 0,
                                        "width": 0,
                                        "bottom": 0,
                                        "right": 0,
                                        "height": 0
                                    },
                                    "nodeLabel": "Remove k Digits"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "boundingRect": {
                                        "height": 0,
                                        "top": 0,
                                        "width": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "left": 0
                                    },
                                    "nodeLabel": "Maximal Rectangles",
                                    "lhId": "1-612-A",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,9,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,11,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,9,DIV,0,DIV,1,DIV,1,DIV,3,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-617-A",
                                    "nodeLabel": "Stock span problem",
                                    "boundingRect": {
                                        "top": 0,
                                        "height": 0,
                                        "bottom": 0,
                                        "right": 0,
                                        "width": 0,
                                        "left": 0
                                    },
                                    "type": "node"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,9,DIV,0,DIV,1,DIV,1,DIV,3,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "The Celebrity Problem",
                                    "lhId": "1-619-A",
                                    "boundingRect": {
                                        "top": 0,
                                        "left": 0,
                                        "width": 0,
                                        "bottom": 0,
                                        "right": 0,
                                        "height": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,9,DIV,0,DIV,1,DIV,1,DIV,3,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,5,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "width": 0,
                                        "left": 0,
                                        "bottom": 0,
                                        "top": 0,
                                        "height": 0,
                                        "right": 0
                                    },
                                    "type": "node",
                                    "nodeLabel": "LFU cache",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-624-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "boundingRect": {
                                        "top": 0,
                                        "right": 0,
                                        "left": 0,
                                        "width": 0,
                                        "bottom": 0,
                                        "height": 0
                                    },
                                    "nodeLabel": "Max Consecutive Ones III",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,10,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "type": "node",
                                    "lhId": "1-629-A"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Fruit Into Baskets",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "top": 0,
                                        "height": 0,
                                        "right": 0,
                                        "left": 0,
                                        "width": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,10,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-631-A"
                                }
                            },
                            {
                                "node": {
                                    "boundingRect": {
                                        "right": 0,
                                        "bottom": 0,
                                        "top": 0,
                                        "width": 0,
                                        "height": 0,
                                        "left": 0
                                    },
                                    "nodeLabel": "longest repeating character replacement",
                                    "lhId": "1-633-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,10,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,10,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,5,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "Binary subarray with sum",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "left": 0,
                                        "height": 0,
                                        "top": 0,
                                        "right": 0,
                                        "width": 0
                                    },
                                    "lhId": "1-635-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Count number of nice subarrays",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,10,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,6,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-637-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "width": 0,
                                        "height": 0,
                                        "top": 0,
                                        "left": 0,
                                        "right": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Number of substring containing all three characters",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,10,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,7,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "right": 0,
                                        "top": 0,
                                        "height": 0,
                                        "left": 0,
                                        "width": 0
                                    },
                                    "type": "node",
                                    "lhId": "1-639-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "right": 0,
                                        "top": 0,
                                        "width": 0,
                                        "height": 0,
                                        "left": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,10,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,8,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "nodeLabel": "Maximum point you can obtain from cards",
                                    "type": "node",
                                    "lhId": "1-641-A"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Longest Substring with At Most K Distinct Characters",
                                    "type": "node",
                                    "lhId": "1-643-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "boundingRect": {
                                        "left": 0,
                                        "right": 0,
                                        "height": 0,
                                        "width": 0,
                                        "top": 0,
                                        "bottom": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,10,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,1,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Subarray with k different integers",
                                    "lhId": "1-645-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,10,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "left": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "height": 0,
                                        "top": 0,
                                        "width": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,10,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-647-A",
                                    "nodeLabel": "Minimum Window Substring",
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "boundingRect": {
                                        "height": 0,
                                        "right": 0,
                                        "width": 0,
                                        "left": 0,
                                        "bottom": 0,
                                        "top": 0
                                    }
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Minimum Window Subsequence",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,10,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "left": 0,
                                        "top": 0,
                                        "width": 0,
                                        "right": 0,
                                        "height": 0,
                                        "bottom": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "lhId": "1-649-A"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-651-A",
                                    "type": "node",
                                    "boundingRect": {
                                        "width": 0,
                                        "left": 0,
                                        "height": 0,
                                        "bottom": 0,
                                        "top": 0,
                                        "right": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "Introduction to Priority Queues using Binary Heaps",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,11,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,1,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Min Heap and Max Heap Implementation",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,11,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-653-A",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "right": 0,
                                        "height": 0,
                                        "left": 0,
                                        "width": 0,
                                        "top": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-655-A",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,11,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "nodeLabel": "Check if an array represents a min-heap or not",
                                    "boundingRect": {
                                        "left": 0,
                                        "height": 0,
                                        "top": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "width": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "boundingRect": {
                                        "width": 0,
                                        "left": 0,
                                        "top": 0,
                                        "height": 0,
                                        "right": 0,
                                        "bottom": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-657-A",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,11,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "Convert min Heap to max Heap"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-665-A",
                                    "boundingRect": {
                                        "width": 0,
                                        "left": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "height": 0,
                                        "top": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,11,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "Sort K sorted array",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,11,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "left": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "top": 0,
                                        "height": 0
                                    },
                                    "nodeLabel": "Merge M sorted Lists",
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-667-A"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Task Scheduler",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "boundingRect": {
                                        "height": 0,
                                        "top": 0,
                                        "left": 0,
                                        "width": 0,
                                        "right": 0,
                                        "bottom": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,11,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,6,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-672-A"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "nodeLabel": "Hands of Straights",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "right": 0,
                                        "height": 0,
                                        "width": 0,
                                        "top": 0,
                                        "left": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,11,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,7,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-674-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-676-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "boundingRect": {
                                        "right": 0,
                                        "width": 0,
                                        "height": 0,
                                        "bottom": 0,
                                        "top": 0,
                                        "left": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,11,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,1,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "nodeLabel": "Design twitter"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-678-A",
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "nodeLabel": "Connect `n` ropes with minimal cost",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "top": 0,
                                        "right": 0,
                                        "width": 0,
                                        "left": 0,
                                        "height": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,11,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,11,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "boundingRect": {
                                        "top": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "right": 0,
                                        "height": 0,
                                        "width": 0
                                    },
                                    "lhId": "1-680-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "nodeLabel": "Kth largest element in a stream of running integers"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "nodeLabel": "Maximum Sum Combination",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,11,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-682-A",
                                    "boundingRect": {
                                        "width": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "height": 0,
                                        "left": 0,
                                        "right": 0
                                    },
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "nodeLabel": "Find Median from Data Stream",
                                    "boundingRect": {
                                        "height": 0,
                                        "left": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "top": 0,
                                        "right": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,11,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,5,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-684-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,11,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,6,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "K most frequent elements",
                                    "boundingRect": {
                                        "top": 0,
                                        "left": 0,
                                        "bottom": 0,
                                        "height": 0,
                                        "width": 0,
                                        "right": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-686-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-688-A",
                                    "boundingRect": {
                                        "width": 0,
                                        "right": 0,
                                        "left": 0,
                                        "height": 0,
                                        "bottom": 0,
                                        "top": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,12,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,1,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "nodeLabel": "Assign Cookies"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-696-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "Lemonade Change",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,12,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "right": 0,
                                        "height": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "width": 0
                                    }
                                }
                            },
                            {
                                "node": {
                                    "boundingRect": {
                                        "width": 0,
                                        "left": 0,
                                        "bottom": 0,
                                        "height": 0,
                                        "right": 0,
                                        "top": 0
                                    },
                                    "type": "node",
                                    "lhId": "1-698-A",
                                    "nodeLabel": "Valid Paranthesis Checker",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,12,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,5,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "lhId": "1-703-A",
                                    "boundingRect": {
                                        "right": 0,
                                        "height": 0,
                                        "left": 0,
                                        "top": 0,
                                        "width": 0,
                                        "bottom": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,12,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "Jump Game",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Jump Game 2",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-705-A",
                                    "type": "node",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "top": 0,
                                        "height": 0,
                                        "left": 0,
                                        "width": 0,
                                        "right": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,12,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "Candy",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,12,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,6,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "boundingRect": {
                                        "top": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "right": 0,
                                        "width": 0,
                                        "height": 0
                                    },
                                    "lhId": "1-713-A"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-715-A",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,12,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,7,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "left": 0,
                                        "width": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "right": 0,
                                        "height": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "Program for Shortest Job First (or SJF) CPU Scheduling"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,12,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,8,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-717-A",
                                    "boundingRect": {
                                        "height": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "right": 0,
                                        "left": 0,
                                        "top": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "nodeLabel": "Program for Least Recently Used (LRU) Page Replacement Algorithm",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-725-A",
                                    "boundingRect": {
                                        "left": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "right": 0,
                                        "width": 0,
                                        "height": 0
                                    },
                                    "type": "node",
                                    "nodeLabel": "Non-overlapping Intervals",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,12,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,11,TBODY,0,TR,1,TD,0,DIV,0,A"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,13,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,5,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-814-A",
                                    "boundingRect": {
                                        "top": 0,
                                        "width": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "height": 0,
                                        "left": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "Print all the Nodes at a distance of K in a Binary Tree"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-816-A",
                                    "boundingRect": {
                                        "left": 0,
                                        "width": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "top": 0,
                                        "height": 0
                                    },
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,13,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,6,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "Minimum time taken to BURN the Binary Tree from a Node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,13,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,8,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "nodeLabel": "Requirements needed to construct a Unique Binary Tree | Theory",
                                    "lhId": "1-821-A",
                                    "boundingRect": {
                                        "width": 0,
                                        "bottom": 0,
                                        "right": 0,
                                        "height": 0,
                                        "top": 0,
                                        "left": 0
                                    }
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "boundingRect": {
                                        "width": 0,
                                        "left": 0,
                                        "top": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "height": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "Find Min/Max in BST",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,14,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-847-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Insert a given Node in Binary Search Tree",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,14,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "right": 0,
                                        "width": 0,
                                        "top": 0,
                                        "height": 0,
                                        "left": 0
                                    },
                                    "lhId": "1-855-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "Delete a Node in Binary Search Tree",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "right": 0,
                                        "top": 0,
                                        "left": 0,
                                        "height": 0,
                                        "width": 0
                                    },
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,14,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-857-A"
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "boundingRect": {
                                        "height": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "width": 0,
                                        "top": 0,
                                        "right": 0
                                    },
                                    "type": "node",
                                    "nodeLabel": "Check if a tree is a BST or BT",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,14,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,6,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-862-A"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "lhId": "1-864-A",
                                    "nodeLabel": "LCA in Binary Search Tree",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,14,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,7,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "height": 0,
                                        "top": 0,
                                        "width": 0,
                                        "left": 0,
                                        "right": 0,
                                        "bottom": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "boundingRect": {
                                        "top": 0,
                                        "height": 0,
                                        "left": 0,
                                        "width": 0,
                                        "right": 0,
                                        "bottom": 0
                                    },
                                    "type": "node",
                                    "lhId": "1-866-A",
                                    "nodeLabel": "Construct a BST from a preorder traversal",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,14,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,8,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "nodeLabel": "Inorder Successor/Predecessor in BST",
                                    "boundingRect": {
                                        "width": 0,
                                        "right": 0,
                                        "top": 0,
                                        "left": 0,
                                        "height": 0,
                                        "bottom": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,14,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,9,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "lhId": "1-868-A"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "lhId": "1-870-A",
                                    "nodeLabel": "Merge 2 BST's",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,14,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,10,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "boundingRect": {
                                        "bottom": 0,
                                        "height": 0,
                                        "left": 0,
                                        "width": 0,
                                        "top": 0,
                                        "right": 0
                                    }
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,14,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,11,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "height": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "top": 0,
                                        "right": 0,
                                        "left": 0
                                    },
                                    "lhId": "1-872-A",
                                    "nodeLabel": "Two Sum In BST | Check if there exists a pair with Sum K"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-874-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "nodeLabel": "Recover BST | Correct BST with two nodes swapped",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,14,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,12,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "top": 0,
                                        "bottom": 0,
                                        "height": 0,
                                        "right": 0,
                                        "width": 0,
                                        "left": 0
                                    }
                                }
                            },
                            {
                                "node": {
                                    "boundingRect": {
                                        "right": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "left": 0,
                                        "height": 0
                                    },
                                    "nodeLabel": "Largest BST in Binary Tree",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,14,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,13,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "type": "node",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-876-A"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,15,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-884-A",
                                    "type": "node",
                                    "boundingRect": {
                                        "left": 0,
                                        "height": 0,
                                        "right": 0,
                                        "width": 0,
                                        "top": 0,
                                        "bottom": 0
                                    },
                                    "nodeLabel": "Graph Representation | Java",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-898-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "boundingRect": {
                                        "left": 0,
                                        "width": 0,
                                        "right": 0,
                                        "top": 0,
                                        "height": 0,
                                        "bottom": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,15,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "type": "node",
                                    "nodeLabel": "Connected Components Problem in Matrix",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-942-A",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,15,DIV,0,DIV,1,DIV,1,DIV,2,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "height": 0,
                                        "left": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "top": 0,
                                        "right": 0
                                    },
                                    "type": "node",
                                    "nodeLabel": "Cycle Detection in Directed Graph (BFS)"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "boundingRect": {
                                        "width": 0,
                                        "bottom": 0,
                                        "right": 0,
                                        "height": 0,
                                        "top": 0,
                                        "left": 0
                                    },
                                    "lhId": "1-977-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,15,DIV,0,DIV,1,DIV,1,DIV,3,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,8,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "Network Delay time",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,15,DIV,0,DIV,1,DIV,1,DIV,4,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,11,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "Swim in rising water",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-1024-A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "boundingRect": {
                                        "left": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "right": 0,
                                        "height": 0,
                                        "width": 0
                                    }
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,17,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-1209-A",
                                    "nodeLabel": "Longest String with All Prefixes",
                                    "type": "node",
                                    "boundingRect": {
                                        "right": 0,
                                        "top": 0,
                                        "height": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "left": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,17,DIV,0,DIV,1,DIV,1,DIV,1,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-1214-A",
                                    "nodeLabel": "Bit PreRequisites for TRIE Problems",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "boundingRect": {
                                        "height": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "left": 0,
                                        "right": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Minimum number of bracket reversals needed to make an expression balanced",
                                    "type": "node",
                                    "lhId": "1-1222-A",
                                    "boundingRect": {
                                        "height": 0,
                                        "top": 0,
                                        "width": 0,
                                        "bottom": 0,
                                        "right": 0,
                                        "left": 0
                                    },
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,18,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,1,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a"
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "lhId": "1-1224-A",
                                    "nodeLabel": "Count and say",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,18,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,2,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "width": 0,
                                        "left": 0,
                                        "bottom": 0,
                                        "top": 0,
                                        "height": 0,
                                        "right": 0
                                    }
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "boundingRect": {
                                        "height": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "top": 0,
                                        "width": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,18,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,3,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-1226-A",
                                    "nodeLabel": "Hashing In Strings | Theory"
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,18,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,4,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "type": "node",
                                    "nodeLabel": "Rabin Karp",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "lhId": "1-1228-A",
                                    "boundingRect": {
                                        "height": 0,
                                        "bottom": 0,
                                        "right": 0,
                                        "left": 0,
                                        "width": 0,
                                        "top": 0
                                    }
                                }
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,18,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,5,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "nodeLabel": "Z-Function",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "boundingRect": {
                                        "right": 0,
                                        "width": 0,
                                        "left": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "height": 0
                                    },
                                    "type": "node",
                                    "lhId": "1-1230-A"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "nodeLabel": "KMP algo / LPS(pi) array",
                                    "lhId": "1-1232-A",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,18,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,6,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "boundingRect": {
                                        "width": 0,
                                        "right": 0,
                                        "height": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "left": 0
                                    },
                                    "type": "node",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,18,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,7,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "lhId": "1-1234-A",
                                    "boundingRect": {
                                        "right": 0,
                                        "bottom": 0,
                                        "left": 0,
                                        "height": 0,
                                        "top": 0,
                                        "width": 0
                                    },
                                    "nodeLabel": "Shortest Palindrome",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-1236-A",
                                    "boundingRect": {
                                        "top": 0,
                                        "left": 0,
                                        "width": 0,
                                        "bottom": 0,
                                        "right": 0,
                                        "height": 0
                                    },
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,18,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,8,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "nodeLabel": "Longest happy prefix"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Count palindromic subsequence in given string",
                                    "snippet": "<a target=\"_blank\" rel=\"noreferrer\">",
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,18,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,9,TBODY,0,TR,1,TD,0,DIV,0,A",
                                    "selector": "tr.border-t-2 > td.px-2 > div.font-medium > a",
                                    "boundingRect": {
                                        "height": 0,
                                        "top": 0,
                                        "right": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "left": 0
                                    },
                                    "lhId": "1-1238-A"
                                }
                            }
                        ],
                        "headings": [
                            {
                                "label": "Uncrawlable Link",
                                "key": "node",
                                "valueType": "node"
                            }
                        ],
                        "type": "table"
                    }
                },
                "cumulative-layout-shift": {
                    "id": "cumulative-layout-shift",
                    "title": "Cumulative Layout Shift",
                    "description": "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
                    "score": 1,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "0.001",
                    "details": {
                        "type": "debugdata",
                        "items": [
                            {
                                "newEngineResult": {
                                    "cumulativeLayoutShift": 0.0007563856875492514,
                                    "cumulativeLayoutShiftMainFrame": 0.0007563856875492514
                                },
                                "newEngineResultDiffered": false,
                                "cumulativeLayoutShiftMainFrame": 0.0007563856875492514
                            }
                        ]
                    },
                    "numericValue": 0.0007563856875492514,
                    "numericUnit": "unitless"
                },
                "tabindex": {
                    "id": "tabindex",
                    "title": "No element has a `[tabindex]` value greater than 0",
                    "description": "A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more about the `tabindex` attribute](https://dequeuniversity.com/rules/axe/4.9/tabindex).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "screenshot-thumbnails": {
                    "id": "screenshot-thumbnails",
                    "title": "Screenshot Thumbnails",
                    "description": "This is what the load of your site looked like.",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "details": {
                        "type": "filmstrip",
                        "scale": 4251,
                        "items": [
                            {
                                "timestamp": 1117066945382,
                                "timing": 531,
                                "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAFcAfQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k="
                            },
                            {
                                "data": "data:image/jpeg;base64,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ALREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREGCFi3wWyINbfBLfBbIg1t8Et8FsiDFllEQEREBbiR4jdGHuEbiCWg7EjkbLREG8sj5nl8r3PeQBmcbnYWC1byd7fVYWW8ne31QYREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFlvJ3t9VhZbyd7fVBhERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAWW8ne31WFlvJ3t9UGEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBZbyd7fVYWW8ne31QYREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFlvJ3t9VhZbyd7fVBhERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAWW8ne31WFlvJ3t9UGEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBZbyd7fVYWW8ne31QYREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFlvJ3t9VhZbyd7fVBhERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAWW8ne31Xo6anwqXGy3E55I2fxNEQyhuQb5s4N+dhY722PJefkDBJKIXOdGCcpcLEi+1wqVvxNcmKadesx6I0RFdkIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgy4lxu4knqUbyd7fVYWW8ne31QYREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//9k=",
                                "timestamp": 1117067476757,
                                "timing": 1063
                            },
                            {
                                "timing": 1594,
                                "data": "data:image/jpeg;base64,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lqc4+lqrRBZzj6WqHSFwtYBYIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgghRb5LJEGNvklvkskQY2+SW+SyRBFlKIgIiICzEjxG6MPcI3EEtB0JGxssEQZyyPmeXyvc95AGZxudBYLFuzvb7qFLdne33QQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKW7O9vuoUt2d7fdBCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiApbs72+6hS3Z3t90EIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICluzvb7qFLdne33QQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKW7O9vuoUt2d7fdBCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiApbs72+6hS3Z3t90EIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICluzvb7qFLdne33QQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKW7O9vuoUt2d7fdBCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiApbs72+69HTU+FS42W4nPJGz+ZoiGUNyDXNnBvvYWOttDsvPyBgklELnOjBOUuFiRfS4VK34muTFNOvWY9FaIiuyEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQS4lxu4knqUbs72+6hS3Z3t90EIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//2Q==",
                                "timestamp": 1117068008132
                            },
                            {
                                "timestamp": 1117068539507,
                                "timing": 2126,
                                "data": "data:image/jpeg;base64,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lqc4+lqrRBZzj6WqHSFwtYBYIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgghRb5LJEGNvklvkskQY2+SW+SyRBFlKIgIiICzEjxG6MPcI3EEtB0JGxssEQZyyPmeXyvc95AGZxudBYLFuzvb7qFLdne33QQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKW7O9vuoUt2d7fdBCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiApbs72+6hS3Z3t90EIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICluzvb7qFLdne33QQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKW7O9vuoUt2d7fdBCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiApbs72+6hS3Z3t90EIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICluzvb7qFLdne33QQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKW7O9vuoUt2d7fdBCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiApbs72+69HTU+FS42W4nPJGz+ZoiGUNyDXNnBvvYWOttDsvPyBgklELnOjBOUuFiRfS4VK34muTFNOvWY9FaIiuyEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQS4lxu4knqUbs72+6hS3Z3t90EIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//2Q=="
                            },
                            {
                                "data": "data:image/jpeg;base64,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lqc4+lqrRBZzj6WqHSFwtYBYIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgghRb5LJEGNvklvkskQY2+SW+SyRBFlKIgIiICzEjxG6MPcI3EEtB0JGxssEQZyyPmeXyvc95AGZxudBYLFuzvb7qFLdne33QQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKW7O9vuoUt2d7fdBCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiApbs72+6hS3Z3t90EIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICluzvb7qFLdne33QQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKW7O9vuoUt2d7fdBCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiApbs72+6hS3Z3t90EIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICluzvb7qFLdne33QQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKW7O9vuoUt2d7fdBCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiApbs72+69HTU+FS42W4nPJGz+ZoiGUNyDXNnBvvYWOttDsvPyBgklELnOjBOUuFiRfS4VK34muTFNOvWY9FaIiuyEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQS4lxu4knqUbs72+6hS3Z3t90EIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//2Q==",
                                "timing": 2657,
                                "timestamp": 1117069070882
                            },
                            {
                                "timestamp": 1117069602257,
                                "timing": 3188,
                                "data": "data:image/jpeg;base64,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"
                            },
                            {
                                "data": "data:image/jpeg;base64,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",
                                "timestamp": 1117070133632,
                                "timing": 3720
                            },
                            {
                                "data": "data:image/jpeg;base64,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",
                                "timing": 4251,
                                "timestamp": 1117070665007
                            }
                        ]
                    }
                },
                "identical-links-same-purpose": {
                    "id": "identical-links-same-purpose",
                    "title": "Identical links have the same purpose.",
                    "description": "Links with the same destination should have the same description, to help users understand the link's purpose and decide whether to follow it. [Learn more about identical links](https://dequeuniversity.com/rules/axe/4.9/identical-links-same-purpose).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "main-thread-tasks": {
                    "id": "main-thread-tasks",
                    "title": "Tasks",
                    "description": "Lists the toplevel main thread tasks that executed during page load.",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "details": {
                        "type": "table",
                        "headings": [
                            {
                                "key": "startTime",
                                "label": "Start Time",
                                "valueType": "ms",
                                "granularity": 1
                            },
                            {
                                "key": "duration",
                                "label": "End Time",
                                "granularity": 1,
                                "valueType": "ms"
                            }
                        ],
                        "items": [
                            {
                                "startTime": 74.705,
                                "duration": 8.69
                            },
                            {
                                "duration": 7.297,
                                "startTime": 124.438
                            },
                            {
                                "duration": 23.428,
                                "startTime": 139.963
                            },
                            {
                                "startTime": 173.598,
                                "duration": 10.249
                            },
                            {
                                "startTime": 184.07,
                                "duration": 24.95
                            },
                            {
                                "startTime": 210.176,
                                "duration": 7.49
                            },
                            {
                                "duration": 63.158,
                                "startTime": 217.683
                            },
                            {
                                "startTime": 282.604,
                                "duration": 24.786
                            },
                            {
                                "startTime": 317.064,
                                "duration": 181.109
                            },
                            {
                                "duration": 118.155,
                                "startTime": 498.186
                            },
                            {
                                "startTime": 616.373,
                                "duration": 110.885
                            },
                            {
                                "duration": 95.002,
                                "startTime": 727.578
                            },
                            {
                                "duration": 11.738,
                                "startTime": 822.583
                            },
                            {
                                "startTime": 834.46,
                                "duration": 8.703
                            },
                            {
                                "duration": 12.946,
                                "startTime": 863.406
                            },
                            {
                                "startTime": 885.151,
                                "duration": 6.017
                            },
                            {
                                "duration": 6.539,
                                "startTime": 901.861
                            },
                            {
                                "duration": 1533.533,
                                "startTime": 1584.404
                            },
                            {
                                "startTime": 3117.97,
                                "duration": 560.925
                            },
                            {
                                "duration": 11.558,
                                "startTime": 3678.907
                            },
                            {
                                "startTime": 3690.664,
                                "duration": 21.551
                            },
                            {
                                "duration": 21.197,
                                "startTime": 3716.498
                            },
                            {
                                "duration": 14.395,
                                "startTime": 3739.336
                            },
                            {
                                "startTime": 3828.717,
                                "duration": 8.792
                            },
                            {
                                "startTime": 3837.63,
                                "duration": 18.681
                            },
                            {
                                "duration": 27.561,
                                "startTime": 3856.793
                            },
                            {
                                "duration": 6.375,
                                "startTime": 3885.616
                            },
                            {
                                "duration": 6.424,
                                "startTime": 4168.491
                            },
                            {
                                "duration": 10.231,
                                "startTime": 4728.705
                            }
                        ]
                    }
                },
                "is-on-https": {
                    "id": "is-on-https",
                    "title": "Uses HTTPS",
                    "description": "All sites should be protected with HTTPS, even ones that don't handle sensitive data. This includes avoiding [mixed content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content), where some resources are loaded over HTTP despite the initial request being served over HTTPS. HTTPS prevents intruders from tampering with or passively listening in on the communications between your app and your users, and is a prerequisite for HTTP/2 and many new web platform APIs. [Learn more about HTTPS](https://developer.chrome.com/docs/lighthouse/pwa/is-on-https/).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "type": "table",
                        "headings": [],
                        "items": []
                    }
                },
                "aria-tooltip-name": {
                    "id": "aria-tooltip-name",
                    "title": "ARIA `tooltip` elements have accessible names",
                    "description": "When a tooltip element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `tooltip` elements](https://dequeuniversity.com/rules/axe/4.9/aria-tooltip-name).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "deprecations": {
                    "id": "deprecations",
                    "title": "Avoids deprecated APIs",
                    "description": "Deprecated APIs will eventually be removed from the browser. [Learn more about deprecated APIs](https://developer.chrome.com/docs/lighthouse/best-practices/deprecations/).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "type": "table",
                        "items": [],
                        "headings": []
                    }
                },
                "speed-index": {
                    "id": "speed-index",
                    "title": "Speed Index",
                    "description": "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
                    "score": 0.72,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "1.8 s",
                    "numericValue": 1778.386354543999,
                    "numericUnit": "millisecond"
                },
                "meta-refresh": {
                    "id": "meta-refresh",
                    "title": "The document does not use `<meta http-equiv=\"refresh\">`",
                    "description": "Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more about the refresh meta tag](https://dequeuniversity.com/rules/axe/4.9/meta-refresh).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "dom-size": {
                    "id": "dom-size",
                    "title": "Avoid an excessive DOM size",
                    "description": "A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn how to avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size/).",
                    "score": 0.5,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "28,948 elements",
                    "details": {
                        "type": "table",
                        "items": [
                            {
                                "statistic": "Total DOM Elements",
                                "value": {
                                    "type": "numeric",
                                    "granularity": 1,
                                    "value": 28948
                                }
                            },
                            {
                                "node": {
                                    "selector": "form.flex > div.px-5 > div.flex > button.btn-brand-2",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV,1,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,1,TBODY,0,TR,5,TD,0,DIV,2,DIV,0,DIV,1,FORM,1,DIV,0,DIV,0,BUTTON",
                                    "boundingRect": {
                                        "left": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "height": 0,
                                        "right": 0,
                                        "width": 0
                                    },
                                    "type": "node",
                                    "nodeLabel": "Save",
                                    "snippet": "<button type=\"submit\" class=\"btn-brand-2 opacity-50\" disabled=\"\">",
                                    "lhId": "1-1240-BUTTON"
                                },
                                "value": {
                                    "type": "numeric",
                                    "granularity": 1,
                                    "value": 31
                                },
                                "statistic": "Maximum DOM Depth"
                            },
                            {
                                "value": {
                                    "granularity": 1,
                                    "value": 19,
                                    "type": "numeric"
                                },
                                "statistic": "Maximum Child Elements",
                                "node": {
                                    "nodeLabel": "Your Progress: 0/455\n0% complete\nShow Revision\nStep 1 : Learn the basics\n0 /31\n…",
                                    "lhId": "1-1241-DIV",
                                    "snippet": "<div class=\"space-y-6 mt-8 \">",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,4,DIV",
                                    "boundingRect": {
                                        "width": 1191,
                                        "bottom": 1959,
                                        "left": 112,
                                        "top": 418,
                                        "height": 1541,
                                        "right": 1303
                                    },
                                    "selector": "div.flex > div.relative > section.px-4 > div.space-y-6",
                                    "type": "node"
                                }
                            }
                        ],
                        "headings": [
                            {
                                "key": "statistic",
                                "valueType": "text",
                                "label": "Statistic"
                            },
                            {
                                "label": "Element",
                                "valueType": "node",
                                "key": "node"
                            },
                            {
                                "key": "value",
                                "valueType": "numeric",
                                "label": "Value"
                            }
                        ]
                    },
                    "numericValue": 28948,
                    "numericUnit": "element"
                },
                "long-tasks": {
                    "id": "long-tasks",
                    "title": "Avoid long main-thread tasks",
                    "description": "Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn how to avoid long main-thread tasks](https://web.dev/articles/long-tasks-devtools)",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "displayValue": "3 long tasks found",
                    "details": {
                        "debugData": {
                            "type": "debugdata",
                            "urls": [
                                "https://takeuforward.org/static/js/main.682465b6.js",
                                "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0"
                            ],
                            "tasks": [
                                {
                                    "urlIndex": 0,
                                    "other": 1534,
                                    "duration": 1534,
                                    "startTime": 2351.8
                                },
                                {
                                    "other": 181,
                                    "scriptEvaluation": 0,
                                    "urlIndex": 0,
                                    "duration": 181,
                                    "startTime": 1396.8
                                },
                                {
                                    "other": 63,
                                    "startTime": 761.7,
                                    "duration": 63,
                                    "scriptEvaluation": 0,
                                    "urlIndex": 1
                                }
                            ]
                        },
                        "type": "table",
                        "sortedBy": [
                            "duration"
                        ],
                        "headings": [
                            {
                                "key": "url",
                                "label": "URL",
                                "valueType": "url"
                            },
                            {
                                "granularity": 1,
                                "label": "Start Time",
                                "valueType": "ms",
                                "key": "startTime"
                            },
                            {
                                "granularity": 1,
                                "key": "duration",
                                "valueType": "ms",
                                "label": "Duration"
                            }
                        ],
                        "items": [
                            {
                                "duration": 1534,
                                "url": "https://takeuforward.org/static/js/main.682465b6.js",
                                "startTime": 2351.777618736139
                            },
                            {
                                "duration": 181,
                                "url": "https://takeuforward.org/static/js/main.682465b6.js",
                                "startTime": 1396.7776187361392
                            },
                            {
                                "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0",
                                "duration": 63,
                                "startTime": 761.6994310263216
                            }
                        ],
                        "skipSumming": [
                            "startTime"
                        ]
                    }
                },
                "script-treemap-data": {
                    "id": "script-treemap-data",
                    "title": "Script Treemap Data",
                    "description": "Used for treemap app",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "details": {
                        "type": "treemap-data",
                        "nodes": [
                            {
                                "resourceBytes": 310,
                                "children": [
                                    {
                                        "resourceBytes": 129,
                                        "name": "(inline) function gtag()…",
                                        "unusedBytes": 0
                                    },
                                    {
                                        "name": "(inline) \"true\"==localSt…",
                                        "resourceBytes": 181,
                                        "unusedBytes": 0
                                    }
                                ],
                                "name": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
                            },
                            {
                                "name": "https://accounts.google.com/gsi/client",
                                "unusedBytes": 184371,
                                "resourceBytes": 223855
                            },
                            {
                                "name": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0",
                                "resourceBytes": 311956,
                                "unusedBytes": 113700
                            },
                            {
                                "unusedBytes": 1852967,
                                "name": "https://takeuforward.org/static/js/main.682465b6.js",
                                "resourceBytes": 2719666
                            },
                            {
                                "resourceBytes": 311956,
                                "unusedBytes": 218082,
                                "name": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0"
                            },
                            {
                                "name": "https://accounts.google.com/gsi/client",
                                "resourceBytes": 223855,
                                "unusedBytes": 164711
                            },
                            {
                                "unusedBytes": 57670,
                                "children": [
                                    {
                                        "unusedBytes": 57670,
                                        "name": "(inline) \"use strict\";th…",
                                        "resourceBytes": 111515
                                    },
                                    {
                                        "resourceBytes": 428,
                                        "unusedBytes": 0,
                                        "name": "(inline) gis.provider.bu…"
                                    }
                                ],
                                "resourceBytes": 111943,
                                "name": "https://accounts.google.com/gsi/button?type=standard&theme=filled_black&size=large&text=undefined&shape=rectangle&logo_alignment=undefined&width=undefined&locale=undefined&click_listener=undefined&client_id=590234420126-hc9007chffeh5rh8j5gcositk2ia89do.apps.googleusercontent.com&iframe_id=gsi_196391_166040&as=ZPSFfcC8kIK%2B15bS2S5z2Q"
                            }
                        ]
                    }
                },
                "largest-contentful-paint-element": {
                    "id": "largest-contentful-paint-element",
                    "title": "Largest Contentful Paint element",
                    "description": "This is the largest contentful element painted within the viewport. [Learn more about the Largest Contentful Paint element](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
                    "score": 0,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "1,550 ms",
                    "details": {
                        "items": [
                            {
                                "items": [
                                    {
                                        "node": {
                                            "lhId": "page-0-P",
                                            "nodeLabel": "This course is made for people who want to learn DSA from A to Z for free in a …",
                                            "type": "node",
                                            "selector": "div.flex > div.relative > section.px-4 > p.text-lg",
                                            "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,DIV,1,SECTION,1,P",
                                            "snippet": "<p class=\"text-lg\">",
                                            "boundingRect": {
                                                "bottom": 230,
                                                "left": 112,
                                                "top": 149,
                                                "height": 81,
                                                "width": 1191,
                                                "right": 1303
                                            }
                                        }
                                    }
                                ],
                                "type": "table",
                                "headings": [
                                    {
                                        "label": "Element",
                                        "valueType": "node",
                                        "key": "node"
                                    }
                                ]
                            },
                            {
                                "type": "table",
                                "headings": [
                                    {
                                        "valueType": "text",
                                        "key": "phase",
                                        "label": "Phase"
                                    },
                                    {
                                        "key": "percent",
                                        "label": "% of LCP",
                                        "valueType": "text"
                                    },
                                    {
                                        "key": "timing",
                                        "valueType": "ms",
                                        "label": "Timing"
                                    }
                                ],
                                "items": [
                                    {
                                        "timing": 168,
                                        "percent": "11%",
                                        "phase": "TTFB"
                                    },
                                    {
                                        "percent": "0%",
                                        "timing": 0,
                                        "phase": "Load Delay"
                                    },
                                    {
                                        "timing": 0,
                                        "phase": "Load Time",
                                        "percent": "0%"
                                    },
                                    {
                                        "percent": "89%",
                                        "phase": "Render Delay",
                                        "timing": 1377.378318150635
                                    }
                                ]
                            }
                        ],
                        "type": "list"
                    }
                },
                "robots-txt": {
                    "id": "robots-txt",
                    "title": "robots.txt is valid",
                    "description": "If your robots.txt file is malformed, crawlers may not be able to understand how you want your website to be crawled or indexed. [Learn more about robots.txt](https://developer.chrome.com/docs/lighthouse/seo/invalid-robots-txt/).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "items": [],
                        "type": "table",
                        "headings": []
                    }
                },
                "efficient-animated-content": {
                    "id": "efficient-animated-content",
                    "title": "Use video formats for animated content",
                    "description": "Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more about efficient video formats](https://developer.chrome.com/docs/lighthouse/performance/efficient-animated-content/)",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "overallSavingsBytes": 0,
                        "debugData": {
                            "type": "debugdata",
                            "metricSavings": {
                                "LCP": 0,
                                "FCP": 0
                            }
                        },
                        "items": [],
                        "type": "opportunity",
                        "headings": [],
                        "overallSavingsMs": 0
                    },
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "prioritize-lcp-image": {
                    "id": "prioritize-lcp-image",
                    "title": "Preload Largest Contentful Paint image",
                    "description": "If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP. [Learn more about preloading LCP elements](https://web.dev/articles/optimize-lcp#optimize_when_the_resource_is_discovered).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "form-field-multiple-labels": {
                    "id": "form-field-multiple-labels",
                    "title": "No form fields have multiple labels",
                    "description": "Form fields with multiple labels can be confusingly announced by assistive technologies like screen readers which use either the first, the last, or all of the labels. [Learn how to use form labels](https://dequeuniversity.com/rules/axe/4.9/form-field-multiple-labels).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "aria-progressbar-name": {
                    "id": "aria-progressbar-name",
                    "title": "ARIA `progressbar` elements have accessible names",
                    "description": "When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to label `progressbar` elements](https://dequeuniversity.com/rules/axe/4.9/aria-progressbar-name).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "frame-title": {
                    "id": "frame-title",
                    "title": "`<frame>` or `<iframe>` elements have a title",
                    "description": "Screen reader users rely on frame titles to describe the contents of frames. [Learn more about frame titles](https://dequeuniversity.com/rules/axe/4.9/frame-title).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "aria-toggle-field-name": {
                    "id": "aria-toggle-field-name",
                    "title": "ARIA toggle fields have accessible names",
                    "description": "When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about toggle fields](https://dequeuniversity.com/rules/axe/4.9/aria-toggle-field-name).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "resource-summary": {
                    "id": "resource-summary",
                    "title": "Resources Summary",
                    "description": "Aggregates all network requests and groups them by type",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "details": {
                        "headings": [
                            {
                                "label": "Resource Type",
                                "key": "label",
                                "valueType": "text"
                            },
                            {
                                "label": "Requests",
                                "valueType": "numeric",
                                "key": "requestCount"
                            },
                            {
                                "label": "Transfer Size",
                                "valueType": "bytes",
                                "key": "transferSize"
                            }
                        ],
                        "type": "table",
                        "items": [
                            {
                                "label": "Total",
                                "resourceType": "total",
                                "transferSize": 1118990,
                                "requestCount": 21
                            },
                            {
                                "requestCount": 3,
                                "transferSize": 925749,
                                "resourceType": "script",
                                "label": "Script"
                            },
                            {
                                "label": "Font",
                                "requestCount": 4,
                                "resourceType": "font",
                                "transferSize": 55178
                            },
                            {
                                "label": "Document",
                                "resourceType": "document",
                                "requestCount": 2,
                                "transferSize": 45352
                            },
                            {
                                "transferSize": 44041,
                                "requestCount": 7,
                                "resourceType": "stylesheet",
                                "label": "Stylesheet"
                            },
                            {
                                "requestCount": 4,
                                "transferSize": 43031,
                                "resourceType": "other",
                                "label": "Other"
                            },
                            {
                                "resourceType": "image",
                                "requestCount": 1,
                                "transferSize": 5639,
                                "label": "Image"
                            },
                            {
                                "requestCount": 0,
                                "resourceType": "media",
                                "label": "Media",
                                "transferSize": 0
                            },
                            {
                                "requestCount": 17,
                                "transferSize": 303103,
                                "label": "Third-party",
                                "resourceType": "third-party"
                            }
                        ]
                    }
                },
                "redirects-http": {
                    "id": "redirects-http",
                    "title": "Redirects HTTP traffic to HTTPS",
                    "description": "Make sure that you redirect all HTTP traffic to HTTPS in order to enable secure web features for all your users. [Learn more](https://developer.chrome.com/docs/lighthouse/pwa/redirects-http/).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "aria-hidden-body": {
                    "id": "aria-hidden-body",
                    "title": "`[aria-hidden=\"true\"]` is not present on the document `<body>`",
                    "description": "Assistive technologies, like screen readers, work inconsistently when `aria-hidden=\"true\"` is set on the document `<body>`. [Learn how `aria-hidden` affects the document body](https://dequeuniversity.com/rules/axe/4.9/aria-hidden-body).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "items": [],
                        "type": "table",
                        "headings": []
                    }
                },
                "aria-conditional-attr": {
                    "id": "aria-conditional-attr",
                    "title": "ARIA attributes are used as specified for the element's role",
                    "description": "Some ARIA attributes are only allowed on an element under certain conditions. [Learn more about conditional ARIA attributes](https://dequeuniversity.com/rules/axe/4.9/aria-conditional-attr).",
                    "score": 1,
                    "scoreDisplayMode": "binary",
                    "details": {
                        "type": "table",
                        "items": [],
                        "headings": []
                    }
                },
                "http-status-code": {
                    "id": "http-status-code",
                    "title": "Page has successful HTTP status code",
                    "description": "Pages with unsuccessful HTTP status codes may not be indexed properly. [Learn more about HTTP status codes](https://developer.chrome.com/docs/lighthouse/seo/http-status-code/).",
                    "score": 1,
                    "scoreDisplayMode": "binary"
                },
                "network-requests": {
                    "id": "network-requests",
                    "title": "Network Requests",
                    "description": "Lists the network requests that were made during page load.",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "details": {
                        "items": [
                            {
                                "networkEndTime": 71.58000016212463,
                                "entity": "takeuforward.org",
                                "resourceSize": 2551,
                                "experimentalFromMainFrame": true,
                                "mimeType": "text/html",
                                "networkRequestTime": 1.0560002326965332,
                                "transferSize": 1506,
                                "protocol": "h2",
                                "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
                                "resourceType": "Document",
                                "statusCode": 200,
                                "sessionTargetType": "page",
                                "finished": true,
                                "rendererStartTime": 0,
                                "priority": "VeryHigh"
                            },
                            {
                                "rendererStartTime": 77.18500018119812,
                                "transferSize": 736154,
                                "resourceType": "Script",
                                "sessionTargetType": "page",
                                "resourceSize": 2719666,
                                "mimeType": "application/javascript",
                                "finished": true,
                                "networkRequestTime": 77.83000016212463,
                                "protocol": "h2",
                                "entity": "takeuforward.org",
                                "priority": "Low",
                                "statusCode": 200,
                                "url": "https://takeuforward.org/static/js/main.682465b6.js",
                                "experimentalFromMainFrame": true,
                                "networkEndTime": 197.06100010871887
                            },
                            {
                                "experimentalFromMainFrame": true,
                                "resourceType": "Stylesheet",
                                "protocol": "h2",
                                "sessionTargetType": "page",
                                "mimeType": "text/css",
                                "transferSize": 36393,
                                "statusCode": 200,
                                "networkEndTime": 123.41400003433228,
                                "resourceSize": 198172,
                                "entity": "takeuforward.org",
                                "finished": true,
                                "rendererStartTime": 77.57200026512146,
                                "networkRequestTime": 77.96400022506714,
                                "url": "https://takeuforward.org/static/css/main.3b066ee3.css",
                                "priority": "VeryHigh"
                            },
                            {
                                "transferSize": 104255,
                                "experimentalFromMainFrame": true,
                                "statusCode": 200,
                                "resourceSize": 311956,
                                "mimeType": "application/javascript",
                                "rendererStartTime": 77.79100012779236,
                                "entity": "Google Tag Manager",
                                "finished": true,
                                "networkRequestTime": 125.50300025939941,
                                "resourceType": "Script",
                                "protocol": "h2",
                                "sessionTargetType": "page",
                                "priority": "Low",
                                "networkEndTime": 145.35400009155273,
                                "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0"
                            },
                            {
                                "networkRequestTime": 139.22500014305115,
                                "sessionTargetType": "page",
                                "resourceSize": 223855,
                                "networkEndTime": 161.42900013923645,
                                "experimentalFromMainFrame": true,
                                "transferSize": 85340,
                                "mimeType": "application/javascript",
                                "url": "https://accounts.google.com/gsi/client",
                                "statusCode": 200,
                                "protocol": "h2",
                                "finished": true,
                                "entity": "Other Google APIs/SDKs",
                                "rendererStartTime": 77.93000030517578,
                                "resourceType": "Script",
                                "priority": "Low"
                            },
                            {
                                "networkEndTime": 131.61800026893616,
                                "transferSize": 1009,
                                "statusCode": 200,
                                "protocol": "h2",
                                "networkRequestTime": 126.08300018310547,
                                "finished": true,
                                "entity": "Google Fonts",
                                "rendererStartTime": 125.65700006484985,
                                "sessionTargetType": "page",
                                "resourceType": "Stylesheet",
                                "mimeType": "text/css",
                                "experimentalFromMainFrame": true,
                                "priority": "VeryHigh",
                                "url": "https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&display=swap",
                                "resourceSize": 844
                            },
                            {
                                "sessionTargetType": "page",
                                "protocol": "h2",
                                "rendererStartTime": 125.89900016784668,
                                "finished": true,
                                "transferSize": 1596,
                                "networkEndTime": 134.36800003051758,
                                "statusCode": 200,
                                "url": "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
                                "mimeType": "text/css",
                                "experimentalFromMainFrame": true,
                                "networkRequestTime": 126.34899997711182,
                                "resourceSize": 22050,
                                "priority": "VeryHigh",
                                "entity": "Google Fonts",
                                "resourceType": "Stylesheet"
                            },
                            {
                                "experimentalFromMainFrame": true,
                                "statusCode": 200,
                                "networkEndTime": 134.58400011062622,
                                "url": "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
                                "rendererStartTime": 126.12800025939941,
                                "resourceType": "Stylesheet",
                                "networkRequestTime": 126.57400012016296,
                                "finished": true,
                                "priority": "VeryHigh",
                                "sessionTargetType": "page",
                                "entity": "Google Fonts",
                                "protocol": "h2",
                                "resourceSize": 7803,
                                "transferSize": 1283,
                                "mimeType": "text/css"
                            },
                            {
                                "protocol": "h2",
                                "rendererStartTime": 126.34200024604797,
                                "priority": "VeryHigh",
                                "statusCode": 200,
                                "experimentalFromMainFrame": true,
                                "transferSize": 1304,
                                "entity": "Google Fonts",
                                "networkRequestTime": 126.8250002861023,
                                "finished": true,
                                "sessionTargetType": "page",
                                "networkEndTime": 134.91600012779236,
                                "url": "https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap",
                                "resourceType": "Stylesheet",
                                "resourceSize": 9227,
                                "mimeType": "text/css"
                            },
                            {
                                "experimentalFromMainFrame": true,
                                "rendererStartTime": 126.57300019264221,
                                "networkEndTime": 133.43400025367737,
                                "finished": true,
                                "mimeType": "text/css",
                                "resourceType": "Stylesheet",
                                "entity": "Google Fonts",
                                "protocol": "h2",
                                "resourceSize": 1605,
                                "networkRequestTime": 127.04500031471252,
                                "url": "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
                                "transferSize": 1100,
                                "sessionTargetType": "page",
                                "statusCode": 200,
                                "priority": "VeryHigh"
                            },
                            {
                                "sessionTargetType": "page",
                                "entity": "Google Analytics",
                                "statusCode": 204,
                                "priority": "High",
                                "finished": true,
                                "resourceSize": 0,
                                "rendererStartTime": 279.21400022506714,
                                "protocol": "h2",
                                "resourceType": "Fetch",
                                "experimentalFromMainFrame": true,
                                "networkEndTime": 308.7920002937317,
                                "url": "https://www.google-analytics.com/g/collect?v=2&tid=G-51P1R4XNJ0&gtm=45je46h0v9182208068za200&_p=1718857192784&gcd=13l3l3l3l1&npa=0&dma=0&tag_exp=0&cid=1090395997.1718857193&ul=en-us&sr=800x600&uaa=x86&uab=64&uafvl=HeadlessChrome%3B125.0.6422.154%7CChromium%3B125.0.6422.154%7CNot.A%252FBrand%3B24.0.0.0&uamb=0&uam=&uap=macOS&uapv=10.15.7&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&sid=1718857192&sct=1&seg=0&dl=https%3A%2F%2Ftakeuforward.org%2Fstrivers-a2z-dsa-course%2Fstrivers-a2z-dsa-course-sheet-2%2F&dt=takeuforward%20-%20Best%20Coding%20Tutorials%20for%20Free&en=page_view&_fv=1&_nsi=1&_ss=1&_ee=1&tfd=279&_z=fetch",
                                "networkRequestTime": 280.24500012397766,
                                "transferSize": 399,
                                "mimeType": "text/plain"
                            },
                            {
                                "networkEndTime": 630.297000169754,
                                "resourceSize": 12368,
                                "networkRequestTime": 626.1950001716614,
                                "resourceType": "Font",
                                "transferSize": 13180,
                                "sessionTargetType": "page",
                                "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPecZTIAOhVxoMyOr9n_E7fdMPmDaZRbrw.woff2",
                                "experimentalFromMainFrame": true,
                                "finished": true,
                                "rendererStartTime": 625.4760000705719,
                                "mimeType": "font/woff2",
                                "entity": "Google Fonts",
                                "protocol": "h2",
                                "priority": "VeryHigh",
                                "statusCode": 200
                            },
                            {
                                "entity": "Google Fonts",
                                "rendererStartTime": 625.9350001811981,
                                "sessionTargetType": "page",
                                "finished": true,
                                "priority": "VeryHigh",
                                "statusCode": 200,
                                "networkEndTime": 629.962000131607,
                                "resourceType": "Font",
                                "mimeType": "font/woff2",
                                "resourceSize": 11708,
                                "experimentalFromMainFrame": true,
                                "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffHjDGItzY5abuWI.woff2",
                                "protocol": "h2",
                                "networkRequestTime": 626.6000001430511,
                                "transferSize": 12519
                            },
                            {
                                "entity": "Google Fonts",
                                "mimeType": "font/woff2",
                                "url": "https://fonts.gstatic.com/s/amaranth/v18/KtkpALODe433f0j1zMF-OMWl42H9FYud.woff2",
                                "resourceSize": 15676,
                                "networkRequestTime": 627.257000207901,
                                "protocol": "h2",
                                "resourceType": "Font",
                                "sessionTargetType": "page",
                                "experimentalFromMainFrame": true,
                                "transferSize": 16487,
                                "networkEndTime": 631.2320003509521,
                                "rendererStartTime": 626.7920002937317,
                                "statusCode": 200,
                                "priority": "VeryHigh",
                                "finished": true
                            },
                            {
                                "resourceType": "Font",
                                "resourceSize": 12180,
                                "networkEndTime": 630.7020001411438,
                                "finished": true,
                                "mimeType": "font/woff2",
                                "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffBzCGItzY5abuWI.woff2",
                                "transferSize": 12992,
                                "priority": "VeryHigh",
                                "sessionTargetType": "page",
                                "networkRequestTime": 627.672000169754,
                                "protocol": "h2",
                                "experimentalFromMainFrame": true,
                                "statusCode": 200,
                                "rendererStartTime": 627.172000169754,
                                "entity": "Google Fonts"
                            },
                            {
                                "entity": "Google Analytics",
                                "finished": true,
                                "statusCode": 204,
                                "priority": "High",
                                "networkRequestTime": 687.0610001087189,
                                "protocol": "h2",
                                "networkEndTime": 822.5850002765656,
                                "sessionTargetType": "page",
                                "resourceType": "Fetch",
                                "url": "https://www.google-analytics.com/g/collect?v=2&tid=G-51P1R4XNJ0&gtm=45je46h0v9182208068za200&_p=1718857192784&gcd=13l3l3l3l1&npa=0&dma=0&tag_exp=0&cid=1090395997.1718857193&ul=en-us&sr=800x600&uaa=x86&uab=64&uafvl=HeadlessChrome%3B125.0.6422.154%7CChromium%3B125.0.6422.154%7CNot.A%252FBrand%3B24.0.0.0&uamb=0&uam=&uap=macOS&uapv=10.15.7&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEA&_s=2&sid=1718857192&sct=1&seg=0&dl=https%3A%2F%2Ftakeuforward.org%2Fstrivers-a2z-dsa-course%2Fstrivers-a2z-dsa-course-sheet-2%2F&dt=takeuforward%20-%20Best%20Coding%20Tutorials%20for%20Free&en=scroll&epn.percent_scrolled=90&_et=12&tfd=686&_z=fetch",
                                "resourceSize": 0,
                                "experimentalFromMainFrame": true,
                                "mimeType": "text/plain",
                                "rendererStartTime": 685.9900002479553,
                                "transferSize": 399
                            },
                            {
                                "protocol": "h2",
                                "networkEndTime": 1583.3870000839233,
                                "url": "https://adminapi.takeuforward.org/api/sheets/double/strivers_a2z_sheet",
                                "entity": "takeuforward.org",
                                "finished": true,
                                "rendererStartTime": 694.5600001811981,
                                "resourceSize": 355907,
                                "mimeType": "application/json",
                                "sessionTargetType": "page",
                                "networkRequestTime": 695.3450002670288,
                                "priority": "High",
                                "statusCode": 200,
                                "experimentalFromMainFrame": true,
                                "resourceType": "XHR",
                                "transferSize": 41834
                            },
                            {
                                "networkRequestTime": 3113.6310000419617,
                                "url": "https://takeuforward-content-images.s3.ap-south-1.amazonaws.com/content/codestudio-ZJxLZjiy",
                                "entity": "Amazon Web Services",
                                "resourceSize": 5244,
                                "experimentalFromMainFrame": true,
                                "sessionTargetType": "page",
                                "resourceType": "Image",
                                "mimeType": "image/png",
                                "statusCode": 200,
                                "rendererStartTime": 3112.6189999580383,
                                "transferSize": 5639,
                                "priority": "Low",
                                "finished": true,
                                "protocol": "http/1.1",
                                "networkEndTime": 3954.292999982834
                            },
                            {
                                "resourceSize": 533,
                                "mimeType": "text/css",
                                "networkEndTime": 3758.5700001716614,
                                "protocol": "h2",
                                "entity": "Other Google APIs/SDKs",
                                "url": "https://accounts.google.com/gsi/style",
                                "sessionTargetType": "page",
                                "resourceType": "Stylesheet",
                                "finished": true,
                                "statusCode": 200,
                                "priority": "VeryHigh",
                                "networkRequestTime": 3745.2900002002716,
                                "transferSize": 1356,
                                "rendererStartTime": 3744.481000185013,
                                "experimentalFromMainFrame": true
                            },
                            {
                                "statusCode": 200,
                                "resourceSize": 120911,
                                "resourceType": "Document",
                                "entity": "Other Google APIs/SDKs",
                                "priority": "VeryHigh",
                                "url": "https://accounts.google.com/gsi/button?type=standard&theme=filled_black&size=large&text=undefined&shape=rectangle&logo_alignment=undefined&width=undefined&locale=undefined&click_listener=undefined&client_id=590234420126-hc9007chffeh5rh8j5gcositk2ia89do.apps.googleusercontent.com&iframe_id=gsi_196391_166040&as=ZPSFfcC8kIK%2B15bS2S5z2Q",
                                "finished": true,
                                "transferSize": 43846,
                                "networkEndTime": 3821.8990001678467,
                                "sessionTargetType": "page",
                                "protocol": "h2",
                                "networkRequestTime": 3756.1790001392365,
                                "mimeType": "text/html",
                                "rendererStartTime": 3754.1640000343323
                            },
                            {
                                "rendererStartTime": 5687.530000209808,
                                "transferSize": 399,
                                "priority": "High",
                                "statusCode": 204,
                                "resourceSize": 0,
                                "finished": true,
                                "experimentalFromMainFrame": true,
                                "mimeType": "text/plain",
                                "url": "https://www.google-analytics.com/g/collect?v=2&tid=G-51P1R4XNJ0&gtm=45je46h0v9182208068za200&_p=1718857192784&gcd=13l3l3l3l1&npa=0&dma=0&tag_exp=0&cid=1090395997.1718857193&ul=en-us&sr=800x600&uaa=x86&uab=64&uafvl=HeadlessChrome%3B125.0.6422.154%7CChromium%3B125.0.6422.154%7CNot.A%252FBrand%3B24.0.0.0&uamb=0&uam=&uap=macOS&uapv=10.15.7&uaw=0&are=1&frm=0&pscdl=noapi&_s=3&dp=%2Fstrivers-a2z-dsa-course%2Fstrivers-a2z-dsa-course-sheet-2%2F&sid=1718857192&sct=1&seg=1&dl=https%3A%2F%2Ftakeuforward.org%2Fstrivers-a2z-dsa-course%2Fstrivers-a2z-dsa-course-sheet-2%2F&dt=Strivers%20A2Z%20DSA%20Course%2FSheet%20-%20Crack%20Any%20FAANG%20or%20PBCs&en=page_view&_ee=1&_et=362&tfd=5687&_z=fetch",
                                "sessionTargetType": "page",
                                "networkEndTime": 5693.59900021553,
                                "entity": "Google Analytics",
                                "resourceType": "Fetch",
                                "protocol": "h2",
                                "networkRequestTime": 5688.503000259399
                            }
                        ],
                        "debugData": {
                            "networkStartTimeTs": 1117066414123.9998,
                            "type": "debugdata"
                        },
                        "type": "table",
                        "headings": [
                            {
                                "key": "url",
                                "valueType": "url",
                                "label": "URL"
                            },
                            {
                                "valueType": "text",
                                "label": "Protocol",
                                "key": "protocol"
                            },
                            {
                                "key": "networkRequestTime",
                                "granularity": 1,
                                "valueType": "ms",
                                "label": "Network Request Time"
                            },
                            {
                                "valueType": "ms",
                                "granularity": 1,
                                "key": "networkEndTime",
                                "label": "Network End Time"
                            },
                            {
                                "label": "Transfer Size",
                                "valueType": "bytes",
                                "key": "transferSize",
                                "displayUnit": "kb",
                                "granularity": 1
                            },
                            {
                                "key": "resourceSize",
                                "valueType": "bytes",
                                "displayUnit": "kb",
                                "granularity": 1,
                                "label": "Resource Size"
                            },
                            {
                                "key": "statusCode",
                                "valueType": "text",
                                "label": "Status Code"
                            },
                            {
                                "valueType": "text",
                                "key": "mimeType",
                                "label": "MIME Type"
                            },
                            {
                                "key": "resourceType",
                                "label": "Resource Type",
                                "valueType": "text"
                            }
                        ]
                    }
                },
                "uses-text-compression": {
                    "id": "uses-text-compression",
                    "title": "Enable text compression",
                    "description": "Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more about text compression](https://developer.chrome.com/docs/lighthouse/performance/uses-text-compression/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "headings": [],
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "debugData": {
                            "metricSavings": {
                                "FCP": 0,
                                "LCP": 0
                            },
                            "type": "debugdata"
                        },
                        "items": [],
                        "type": "opportunity",
                        "overallSavingsMs": 0,
                        "overallSavingsBytes": 0
                    },
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "object-alt": {
                    "id": "object-alt",
                    "title": "`<object>` elements have alternate text",
                    "description": "Screen readers cannot translate non-text content. Adding alternate text to `<object>` elements helps screen readers convey meaning to users. [Learn more about alt text for `object` elements](https://dequeuniversity.com/rules/axe/4.9/object-alt).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "aria-text": {
                    "id": "aria-text",
                    "title": "Elements with the `role=text` attribute do not have focusable descendents.",
                    "description": "Adding `role=text` around a text node split by markup enables VoiceOver to treat it as one phrase, but the element's focusable descendents will not be announced. [Learn more about the `role=text` attribute](https://dequeuniversity.com/rules/axe/4.9/aria-text).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "meta-description": {
                    "id": "meta-description",
                    "title": "Document has a meta description",
                    "description": "Meta descriptions may be included in search results to concisely summarize page content. [Learn more about the meta description](https://developer.chrome.com/docs/lighthouse/seo/meta-description/).",
                    "score": 1,
                    "scoreDisplayMode": "binary"
                },
                "third-party-summary": {
                    "id": "third-party-summary",
                    "title": "Minimize third-party usage",
                    "description": "Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn how to minimize third-party impact](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "displayValue": "Third-party code blocked the main thread for 10 ms",
                    "details": {
                        "items": [
                            {
                                "entity": "Google Tag Manager",
                                "transferSize": 104255,
                                "tbtImpact": 0,
                                "mainThreadTime": 152.75600000000003,
                                "blockingTime": 10.598999999999997,
                                "subItems": {
                                    "type": "subitems",
                                    "items": [
                                        {
                                            "mainThreadTime": 152.75600000000003,
                                            "tbtImpact": 0,
                                            "blockingTime": 10.598999999999997,
                                            "transferSize": 104255,
                                            "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0"
                                        }
                                    ]
                                }
                            },
                            {
                                "entity": "Other Google APIs/SDKs",
                                "subItems": {
                                    "type": "subitems",
                                    "items": [
                                        {
                                            "url": "https://accounts.google.com/gsi/client",
                                            "blockingTime": 0,
                                            "transferSize": 85340,
                                            "tbtImpact": 0,
                                            "mainThreadTime": 46.521000000000015
                                        },
                                        {
                                            "tbtImpact": 0,
                                            "transferSize": 43846,
                                            "url": "https://accounts.google.com/gsi/button?type=standard&theme=filled_black&size=large&text=undefined&shape=rectangle&logo_alignment=undefined&width=undefined&locale=undefined&click_listener=undefined&client_id=590234420126-hc9007chffeh5rh8j5gcositk2ia89do.apps.googleusercontent.com&iframe_id=gsi_196391_166040&as=ZPSFfcC8kIK%2B15bS2S5z2Q",
                                            "mainThreadTime": 24.447000000000006,
                                            "blockingTime": 0
                                        },
                                        {
                                            "mainThreadTime": 0.8180000000000001,
                                            "url": "https://accounts.google.com/gsi/style",
                                            "blockingTime": 0,
                                            "transferSize": 1356,
                                            "tbtImpact": 0
                                        }
                                    ]
                                },
                                "transferSize": 130542,
                                "mainThreadTime": 71.78600000000002,
                                "tbtImpact": 0,
                                "blockingTime": 0
                            },
                            {
                                "blockingTime": 0,
                                "subItems": {
                                    "type": "subitems",
                                    "items": [
                                        {
                                            "mainThreadTime": 0,
                                            "url": "https://fonts.gstatic.com/s/amaranth/v18/KtkpALODe433f0j1zMF-OMWl42H9FYud.woff2",
                                            "transferSize": 16487,
                                            "tbtImpact": 0,
                                            "blockingTime": 0
                                        },
                                        {
                                            "transferSize": 13180,
                                            "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPecZTIAOhVxoMyOr9n_E7fdMPmDaZRbrw.woff2",
                                            "mainThreadTime": 0,
                                            "tbtImpact": 0,
                                            "blockingTime": 0
                                        },
                                        {
                                            "tbtImpact": 0,
                                            "transferSize": 12992,
                                            "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffBzCGItzY5abuWI.woff2",
                                            "mainThreadTime": 0,
                                            "blockingTime": 0
                                        },
                                        {
                                            "tbtImpact": 0,
                                            "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffHjDGItzY5abuWI.woff2",
                                            "mainThreadTime": 0,
                                            "transferSize": 12519,
                                            "blockingTime": 0
                                        },
                                        {
                                            "blockingTime": 0,
                                            "tbtImpact": 0,
                                            "transferSize": 1596,
                                            "mainThreadTime": 1.08,
                                            "url": "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                                        },
                                        {
                                            "url": "https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap",
                                            "tbtImpact": 0,
                                            "transferSize": 1304,
                                            "mainThreadTime": 0.685,
                                            "blockingTime": 0
                                        },
                                        {
                                            "blockingTime": 0,
                                            "url": "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
                                            "transferSize": 1283,
                                            "mainThreadTime": 0.778,
                                            "tbtImpact": 0
                                        },
                                        {
                                            "blockingTime": 0,
                                            "transferSize": 1100,
                                            "tbtImpact": 0,
                                            "url": "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
                                            "mainThreadTime": 1.9660000000000002
                                        },
                                        {
                                            "transferSize": 1009,
                                            "blockingTime": 0,
                                            "mainThreadTime": 0.6420000000000001,
                                            "tbtImpact": 0,
                                            "url": "https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&display=swap"
                                        }
                                    ]
                                },
                                "transferSize": 61470,
                                "mainThreadTime": 5.151,
                                "entity": "Google Fonts",
                                "tbtImpact": 0
                            },
                            {
                                "entity": "Amazon Web Services",
                                "mainThreadTime": 0,
                                "subItems": {
                                    "items": [
                                        {
                                            "blockingTime": 0,
                                            "tbtImpact": 0,
                                            "url": "https://takeuforward-content-images.s3.ap-south-1.amazonaws.com/content/codestudio-ZJxLZjiy",
                                            "mainThreadTime": 0,
                                            "transferSize": 5639
                                        }
                                    ],
                                    "type": "subitems"
                                },
                                "blockingTime": 0,
                                "transferSize": 5639,
                                "tbtImpact": 0
                            },
                            {
                                "mainThreadTime": 0,
                                "entity": "Google Analytics",
                                "subItems": {
                                    "items": [
                                        {
                                            "url": "https://www.google-analytics.com/g/collect?v=2&tid=G-51P1R4XNJ0&gtm=45je46h0v9182208068za200&_p=1718857192784&gcd=13l3l3l3l1&npa=0&dma=0&tag_exp=0&cid=1090395997.1718857193&ul=en-us&sr=800x600&uaa=x86&uab=64&uafvl=HeadlessChrome%3B125.0.6422.154%7CChromium%3B125.0.6422.154%7CNot.A%252FBrand%3B24.0.0.0&uamb=0&uam=&uap=macOS&uapv=10.15.7&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&sid=1718857192&sct=1&seg=0&dl=https%3A%2F%2Ftakeuforward.org%2Fstrivers-a2z-dsa-course%2Fstrivers-a2z-dsa-course-sheet-2%2F&dt=takeuforward%20-%20Best%20Coding%20Tutorials%20for%20Free&en=page_view&_fv=1&_nsi=1&_ss=1&_ee=1&tfd=279&_z=fetch",
                                            "blockingTime": 0,
                                            "tbtImpact": 0,
                                            "mainThreadTime": 0,
                                            "transferSize": 399
                                        },
                                        {
                                            "mainThreadTime": 0,
                                            "tbtImpact": 0,
                                            "blockingTime": 0,
                                            "url": "https://www.google-analytics.com/g/collect?v=2&tid=G-51P1R4XNJ0&gtm=45je46h0v9182208068za200&_p=1718857192784&gcd=13l3l3l3l1&npa=0&dma=0&tag_exp=0&cid=1090395997.1718857193&ul=en-us&sr=800x600&uaa=x86&uab=64&uafvl=HeadlessChrome%3B125.0.6422.154%7CChromium%3B125.0.6422.154%7CNot.A%252FBrand%3B24.0.0.0&uamb=0&uam=&uap=macOS&uapv=10.15.7&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEA&_s=2&sid=1718857192&sct=1&seg=0&dl=https%3A%2F%2Ftakeuforward.org%2Fstrivers-a2z-dsa-course%2Fstrivers-a2z-dsa-course-sheet-2%2F&dt=takeuforward%20-%20Best%20Coding%20Tutorials%20for%20Free&en=scroll&epn.percent_scrolled=90&_et=12&tfd=686&_z=fetch",
                                            "transferSize": 399
                                        },
                                        {
                                            "url": "https://www.google-analytics.com/g/collect?v=2&tid=G-51P1R4XNJ0&gtm=45je46h0v9182208068za200&_p=1718857192784&gcd=13l3l3l3l1&npa=0&dma=0&tag_exp=0&cid=1090395997.1718857193&ul=en-us&sr=800x600&uaa=x86&uab=64&uafvl=HeadlessChrome%3B125.0.6422.154%7CChromium%3B125.0.6422.154%7CNot.A%252FBrand%3B24.0.0.0&uamb=0&uam=&uap=macOS&uapv=10.15.7&uaw=0&are=1&frm=0&pscdl=noapi&_s=3&dp=%2Fstrivers-a2z-dsa-course%2Fstrivers-a2z-dsa-course-sheet-2%2F&sid=1718857192&sct=1&seg=1&dl=https%3A%2F%2Ftakeuforward.org%2Fstrivers-a2z-dsa-course%2Fstrivers-a2z-dsa-course-sheet-2%2F&dt=Strivers%20A2Z%20DSA%20Course%2FSheet%20-%20Crack%20Any%20FAANG%20or%20PBCs&en=page_view&_ee=1&_et=362&tfd=5687&_z=fetch",
                                            "mainThreadTime": 0,
                                            "blockingTime": 0,
                                            "tbtImpact": 0,
                                            "transferSize": 399
                                        }
                                    ],
                                    "type": "subitems"
                                },
                                "tbtImpact": 0,
                                "blockingTime": 0,
                                "transferSize": 1197
                            }
                        ],
                        "type": "table",
                        "summary": {
                            "wastedBytes": 303103,
                            "wastedMs": 10.598999999999997
                        },
                        "isEntityGrouped": true,
                        "headings": [
                            {
                                "key": "entity",
                                "label": "Third-Party",
                                "valueType": "text",
                                "subItemsHeading": {
                                    "valueType": "url",
                                    "key": "url"
                                }
                            },
                            {
                                "subItemsHeading": {
                                    "key": "transferSize"
                                },
                                "label": "Transfer Size",
                                "valueType": "bytes",
                                "key": "transferSize",
                                "granularity": 1
                            },
                            {
                                "label": "Main-Thread Blocking Time",
                                "key": "blockingTime",
                                "granularity": 1,
                                "subItemsHeading": {
                                    "key": "blockingTime"
                                },
                                "valueType": "ms"
                            }
                        ]
                    }
                },
                "modern-image-formats": {
                    "id": "modern-image-formats",
                    "title": "Serve images in next-gen formats",
                    "description": "Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more about modern image formats](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "headings": [],
                        "type": "opportunity",
                        "items": [],
                        "overallSavingsBytes": 0,
                        "overallSavingsMs": 0,
                        "debugData": {
                            "type": "debugdata",
                            "metricSavings": {
                                "FCP": 0,
                                "LCP": 0
                            }
                        },
                        "sortedBy": [
                            "wastedBytes"
                        ]
                    },
                    "warnings": [],
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                }
            },
            "categories": {
                "performance": {
                    "id": "performance",
                    "title": "Performance",
                    "score": 0.61,
                    "auditRefs": [
                        {
                            "id": "first-contentful-paint",
                            "weight": 10,
                            "group": "metrics",
                            "acronym": "FCP"
                        },
                        {
                            "id": "largest-contentful-paint",
                            "weight": 25,
                            "group": "metrics",
                            "acronym": "LCP"
                        },
                        {
                            "id": "total-blocking-time",
                            "weight": 30,
                            "group": "metrics",
                            "acronym": "TBT"
                        },
                        {
                            "id": "cumulative-layout-shift",
                            "weight": 25,
                            "group": "metrics",
                            "acronym": "CLS"
                        },
                        {
                            "id": "speed-index",
                            "weight": 10,
                            "group": "metrics",
                            "acronym": "SI"
                        },
                        {
                            "id": "interactive",
                            "weight": 0,
                            "group": "hidden",
                            "acronym": "TTI"
                        },
                        {
                            "id": "max-potential-fid",
                            "weight": 0,
                            "group": "hidden"
                        },
                        {
                            "id": "first-meaningful-paint",
                            "weight": 0,
                            "group": "hidden",
                            "acronym": "FMP"
                        },
                        {
                            "id": "render-blocking-resources",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "uses-responsive-images",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "offscreen-images",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "unminified-css",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "unminified-javascript",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "unused-css-rules",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "unused-javascript",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "uses-optimized-images",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "modern-image-formats",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "uses-text-compression",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "uses-rel-preconnect",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "server-response-time",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "redirects",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "efficient-animated-content",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "duplicated-javascript",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "legacy-javascript",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "prioritize-lcp-image",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "total-byte-weight",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "uses-long-cache-ttl",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "dom-size",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "critical-request-chains",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "user-timings",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "bootup-time",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "mainthread-work-breakdown",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "font-display",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "third-party-summary",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "third-party-facades",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "largest-contentful-paint-element",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "lcp-lazy-loaded",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "layout-shifts",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "uses-passive-event-listeners",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "no-document-write",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "long-tasks",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "non-composited-animations",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "unsized-images",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "viewport",
                            "weight": 0,
                            "group": "diagnostics"
                        },
                        {
                            "id": "network-requests",
                            "weight": 0,
                            "group": "hidden"
                        },
                        {
                            "id": "network-rtt",
                            "weight": 0,
                            "group": "hidden"
                        },
                        {
                            "id": "network-server-latency",
                            "weight": 0,
                            "group": "hidden"
                        },
                        {
                            "id": "main-thread-tasks",
                            "weight": 0,
                            "group": "hidden"
                        },
                        {
                            "id": "diagnostics",
                            "weight": 0,
                            "group": "hidden"
                        },
                        {
                            "id": "metrics",
                            "weight": 0,
                            "group": "hidden"
                        },
                        {
                            "id": "screenshot-thumbnails",
                            "weight": 0,
                            "group": "hidden"
                        },
                        {
                            "id": "final-screenshot",
                            "weight": 0,
                            "group": "hidden"
                        },
                        {
                            "id": "script-treemap-data",
                            "weight": 0,
                            "group": "hidden"
                        },
                        {
                            "id": "resource-summary",
                            "weight": 0,
                            "group": "hidden"
                        }
                    ]
                },
                "accessibility": {
                    "id": "accessibility",
                    "title": "Accessibility",
                    "description": "These checks highlight opportunities to [improve the accessibility of your web app](https://developer.chrome.com/docs/lighthouse/accessibility/). Automatic detection can only detect a subset of issues and does not guarantee the accessibility of your web app, so [manual testing](https://web.dev/articles/how-to-review) is also encouraged.",
                    "score": 0.87,
                    "manualDescription": "These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://web.dev/articles/how-to-review).",
                    "auditRefs": [
                        {
                            "id": "accesskeys",
                            "weight": 0,
                            "group": "a11y-navigation"
                        },
                        {
                            "id": "aria-allowed-attr",
                            "weight": 10,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-allowed-role",
                            "weight": 1,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-command-name",
                            "weight": 0,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-conditional-attr",
                            "weight": 7,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-deprecated-role",
                            "weight": 0,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-dialog-name",
                            "weight": 0,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-hidden-body",
                            "weight": 10,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-hidden-focus",
                            "weight": 7,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-input-field-name",
                            "weight": 0,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-meter-name",
                            "weight": 0,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-progressbar-name",
                            "weight": 0,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-prohibited-attr",
                            "weight": 7,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-required-attr",
                            "weight": 0,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-required-children",
                            "weight": 0,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-required-parent",
                            "weight": 0,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-roles",
                            "weight": 0,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-text",
                            "weight": 0,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-toggle-field-name",
                            "weight": 0,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-tooltip-name",
                            "weight": 0,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-treeitem-name",
                            "weight": 0,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-valid-attr-value",
                            "weight": 10,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "aria-valid-attr",
                            "weight": 10,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "button-name",
                            "weight": 10,
                            "group": "a11y-names-labels"
                        },
                        {
                            "id": "bypass",
                            "weight": 0,
                            "group": "a11y-navigation"
                        },
                        {
                            "id": "color-contrast",
                            "weight": 7,
                            "group": "a11y-color-contrast"
                        },
                        {
                            "id": "definition-list",
                            "weight": 0,
                            "group": "a11y-tables-lists"
                        },
                        {
                            "id": "dlitem",
                            "weight": 0,
                            "group": "a11y-tables-lists"
                        },
                        {
                            "id": "document-title",
                            "weight": 7,
                            "group": "a11y-names-labels"
                        },
                        {
                            "id": "duplicate-id-aria",
                            "weight": 0,
                            "group": "a11y-aria"
                        },
                        {
                            "id": "form-field-multiple-labels",
                            "weight": 0,
                            "group": "a11y-names-labels"
                        },
                        {
                            "id": "frame-title",
                            "weight": 0,
                            "group": "a11y-names-labels"
                        },
                        {
                            "id": "heading-order",
                            "weight": 3,
                            "group": "a11y-navigation"
                        },
                        {
                            "id": "html-has-lang",
                            "weight": 7,
                            "group": "a11y-language"
                        },
                        {
                            "id": "html-lang-valid",
                            "weight": 7,
                            "group": "a11y-language"
                        },
                        {
                            "id": "html-xml-lang-mismatch",
                            "weight": 0,
                            "group": "a11y-language"
                        },
                        {
                            "id": "image-alt",
                            "weight": 0,
                            "group": "a11y-names-labels"
                        },
                        {
                            "id": "image-redundant-alt",
                            "weight": 0,
                            "group": "a11y-names-labels"
                        },
                        {
                            "id": "input-button-name",
                            "weight": 0,
                            "group": "a11y-names-labels"
                        },
                        {
                            "id": "input-image-alt",
                            "weight": 0,
                            "group": "a11y-names-labels"
                        },
                        {
                            "id": "label",
                            "weight": 0,
                            "group": "a11y-names-labels"
                        },
                        {
                            "id": "link-in-text-block",
                            "weight": 0,
                            "group": "a11y-color-contrast"
                        },
                        {
                            "id": "link-name",
                            "weight": 7,
                            "group": "a11y-names-labels"
                        },
                        {
                            "id": "list",
                            "weight": 0,
                            "group": "a11y-tables-lists"
                        },
                        {
                            "id": "listitem",
                            "weight": 0,
                            "group": "a11y-tables-lists"
                        },
                        {
                            "id": "meta-refresh",
                            "weight": 0,
                            "group": "a11y-best-practices"
                        },
                        {
                            "id": "meta-viewport",
                            "weight": 10,
                            "group": "a11y-best-practices"
                        },
                        {
                            "id": "object-alt",
                            "weight": 0,
                            "group": "a11y-names-labels"
                        },
                        {
                            "id": "select-name",
                            "weight": 0,
                            "group": "a11y-names-labels"
                        },
                        {
                            "id": "skip-link",
                            "weight": 0,
                            "group": "a11y-names-labels"
                        },
                        {
                            "id": "tabindex",
                            "weight": 0,
                            "group": "a11y-navigation"
                        },
                        {
                            "id": "table-duplicate-name",
                            "weight": 0,
                            "group": "a11y-tables-lists"
                        },
                        {
                            "id": "target-size",
                            "weight": 7,
                            "group": "a11y-best-practices"
                        },
                        {
                            "id": "td-headers-attr",
                            "weight": 0,
                            "group": "a11y-tables-lists"
                        },
                        {
                            "id": "th-has-data-cells",
                            "weight": 0,
                            "group": "a11y-tables-lists"
                        },
                        {
                            "id": "valid-lang",
                            "weight": 0,
                            "group": "a11y-language"
                        },
                        {
                            "id": "video-caption",
                            "weight": 0,
                            "group": "a11y-audio-video"
                        },
                        {
                            "id": "focusable-controls",
                            "weight": 0
                        },
                        {
                            "id": "interactive-element-affordance",
                            "weight": 0
                        },
                        {
                            "id": "logical-tab-order",
                            "weight": 0
                        },
                        {
                            "id": "visual-order-follows-dom",
                            "weight": 0
                        },
                        {
                            "id": "focus-traps",
                            "weight": 0
                        },
                        {
                            "id": "managed-focus",
                            "weight": 0
                        },
                        {
                            "id": "use-landmarks",
                            "weight": 0
                        },
                        {
                            "id": "offscreen-content-hidden",
                            "weight": 0
                        },
                        {
                            "id": "custom-controls-labels",
                            "weight": 0
                        },
                        {
                            "id": "custom-controls-roles",
                            "weight": 0
                        },
                        {
                            "id": "empty-heading",
                            "weight": 0,
                            "group": "hidden"
                        },
                        {
                            "id": "identical-links-same-purpose",
                            "weight": 0,
                            "group": "hidden"
                        },
                        {
                            "id": "landmark-one-main",
                            "weight": 0,
                            "group": "hidden"
                        },
                        {
                            "id": "label-content-name-mismatch",
                            "weight": 0,
                            "group": "hidden"
                        },
                        {
                            "id": "table-fake-caption",
                            "weight": 0,
                            "group": "hidden"
                        },
                        {
                            "id": "td-has-header",
                            "weight": 0,
                            "group": "hidden"
                        }
                    ]
                },
                "best-practices": {
                    "id": "best-practices",
                    "title": "Best Practices",
                    "score": 1,
                    "auditRefs": [
                        {
                            "id": "is-on-https",
                            "weight": 5,
                            "group": "best-practices-trust-safety"
                        },
                        {
                            "id": "redirects-http",
                            "weight": 0,
                            "group": "best-practices-trust-safety"
                        },
                        {
                            "id": "geolocation-on-start",
                            "weight": 1,
                            "group": "best-practices-trust-safety"
                        },
                        {
                            "id": "notification-on-start",
                            "weight": 1,
                            "group": "best-practices-trust-safety"
                        },
                        {
                            "id": "csp-xss",
                            "weight": 0,
                            "group": "best-practices-trust-safety"
                        },
                        {
                            "id": "paste-preventing-inputs",
                            "weight": 3,
                            "group": "best-practices-ux"
                        },
                        {
                            "id": "image-aspect-ratio",
                            "weight": 1,
                            "group": "best-practices-ux"
                        },
                        {
                            "id": "image-size-responsive",
                            "weight": 1,
                            "group": "best-practices-ux"
                        },
                        {
                            "id": "viewport",
                            "weight": 1,
                            "group": "best-practices-ux"
                        },
                        {
                            "id": "font-size",
                            "weight": 0,
                            "group": "best-practices-ux"
                        },
                        {
                            "id": "doctype",
                            "weight": 1,
                            "group": "best-practices-browser-compat"
                        },
                        {
                            "id": "charset",
                            "weight": 1,
                            "group": "best-practices-browser-compat"
                        },
                        {
                            "id": "js-libraries",
                            "weight": 0,
                            "group": "best-practices-general"
                        },
                        {
                            "id": "deprecations",
                            "weight": 5,
                            "group": "best-practices-general"
                        },
                        {
                            "id": "third-party-cookies",
                            "weight": 5,
                            "group": "best-practices-general"
                        },
                        {
                            "id": "errors-in-console",
                            "weight": 1,
                            "group": "best-practices-general"
                        },
                        {
                            "id": "valid-source-maps",
                            "weight": 0,
                            "group": "best-practices-general"
                        },
                        {
                            "id": "inspector-issues",
                            "weight": 1,
                            "group": "best-practices-general"
                        }
                    ]
                },
                "seo": {
                    "id": "seo",
                    "title": "SEO",
                    "description": "These checks ensure that your page is following basic search engine optimization advice. There are many additional factors Lighthouse does not score here that may affect your search ranking, including performance on [Core Web Vitals](https://web.dev/explore/vitals). [Learn more about Google Search Essentials](https://support.google.com/webmasters/answer/35769).",
                    "score": 0.83,
                    "manualDescription": "Run these additional validators on your site to check additional SEO best practices.",
                    "auditRefs": [
                        {
                            "id": "is-crawlable",
                            "weight": 4.043478260869565,
                            "group": "seo-crawl"
                        },
                        {
                            "id": "document-title",
                            "weight": 1,
                            "group": "seo-content"
                        },
                        {
                            "id": "meta-description",
                            "weight": 1,
                            "group": "seo-content"
                        },
                        {
                            "id": "http-status-code",
                            "weight": 1,
                            "group": "seo-crawl"
                        },
                        {
                            "id": "link-text",
                            "weight": 1,
                            "group": "seo-content"
                        },
                        {
                            "id": "crawlable-anchors",
                            "weight": 1,
                            "group": "seo-crawl"
                        },
                        {
                            "id": "robots-txt",
                            "weight": 1,
                            "group": "seo-crawl"
                        },
                        {
                            "id": "image-alt",
                            "weight": 0,
                            "group": "seo-content"
                        },
                        {
                            "id": "hreflang",
                            "weight": 1,
                            "group": "seo-content"
                        },
                        {
                            "id": "canonical",
                            "weight": 1,
                            "group": "seo-content"
                        },
                        {
                            "id": "structured-data",
                            "weight": 0
                        }
                    ]
                }
            },

            "timing": {
                "total": 35778.9
            },

        },
        "analysisUTCTimestamp": "2024-06-20T04:19:52.552Z"
    });
    const [scrapeData, setScrapeData] = useState<scrapeData | undefined>({
        "title": "Strivers A2Z DSA Course/Sheet - Crack Any FAANG or PBCs",
        "keywords": null,
        "countryCode": null,
        "subKeywords": [],
        "metaDescription": "takeuforward is the best place to learn data structures, algorithms, most asked coding interview questions, real interview experiences free of cost.",
        "languageCode": "en",
        "htmlText": "<head><meta charset=\"utf-8\"><link rel=\"icon\" type=\"image/x-icon\" href=\"ht</body>"
    });
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
    const { Success, Failed, appendToFailed, appendToSuccess } = useResultContext();
    console.log(Failed, Success);

    const [BrokenLink, setBrokenLink] = useState<any>({});
    const [MetaTitle, setMetaTitle] = useState<any>({});


    useEffect(() => {
        setBrokenLink(extractBrokenLinksData(psiData, appendToFailed, appendToSuccess));
    }, [psiData]);
    useEffect(() => {
        setMetaTitle(extractMetaTitle(scrapeData, appendToFailed, appendToSuccess))
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
                                                <td className="p-4">50</td>

                                            </tr>
                                            <tr>
                                                <td className="text-red-400 p-4">Failed</td>
                                                <td className="p-4">5</td>

                                            </tr>
                                            <tr>
                                                <td className="text-yellow-500 p-4">Warnings</td>
                                                <td className="p-4">10</td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="grow flex mt-10">
                                <div className=" flex flex-col justify-center mr-2 bg-white  rounded-lg grow items-center">
                                    <div className="radial-progress bg-yellow-100 text-yellow-400" style={{ "--value": psiData?.lighthouseResult.categories.performance.score * 100 } as React.CSSProperties} role="progressbar">{psiData?.lighthouseResult.categories.performance.score * 100}</div>
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
                    <div className="w-4/5  my-10 mt-0  p-20 pt-0 rounded bg-white">
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
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white" id="Minor Warnings">
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
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white" id="Warnings">
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
                                    <div className="text-sm">{MetaTitle.Length}</div>
                                    <a href={MetaTitle.Link} className="text-sm">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {extractMetaDescription(scrapeData).Result == "Success" ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    : extractMetaDescription(scrapeData).Result == "Error" ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 m-2 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    ) : <></>}
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Meta Description Test</div>
                            <div className="flex flex-col overflow-auto">
                                <div className="text-sm">{extractMetaDescription(scrapeData).Description}</div>
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    <div className="text-sm">Text: {extractMetaDescription(scrapeData).Text}</div>
                                    <div className="text-sm">{extractMetaDescription(scrapeData).Length}</div>
                                    <a href={extractMetaDescription(scrapeData).Link} className="text-sm">Learn More</a>

                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {extractMetaDescription(scrapeData).Result == "Success" ?
                                    <div className="text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    : extractMetaDescription(scrapeData).Result == "Error" ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 m-2 text-red-400">
                                            <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                    ) : <></>}
                            </div>
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Google Search Result Preview Test</div>
                            <div className="flex flex-col overflow-auto">
                                {/* <div className="text-sm">{extractMetaDescription(scrapeData).Description}</div> */}
                                <div className="bg-white border-4 border-slate-200 text-slate-700 p-3 my-3">
                                    <div className="text-sm  font-base text-blue-500  text-[#008744] truncate">{psiData ? psiData?.id : <></>}</div>

                                    <div className="text-base text-[#0057e7] truncate font-medium	">{MetaTitle.Text}</div>
                                    <div className="text-sm line-clamp-2">{extractMetaDescription(scrapeData).Text}</div>
                                    {/* <a href={extractMetaDescription(scrapeData).Link} className="text-sm">Learn More</a> */}

                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performSocialMediaTest(psiData).HasSocialMediaTags ?
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

                                    <div className="text-sm">{performSocialMediaTest(psiData).Description}</div>
                                    {/* <div className="text-sm">{performSocialMediaTest(psiData).HasSocialMediaTags}</div> */}
                                    <a className="text-sm" href={performSocialMediaTest(psiData).Link}>Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performSocialMediaTest(psiData).HasSocialMediaTags ?
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
                                <div className="text-sm"> {extractMostCommonKeywords(scrapeData).Description}</div>
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    <div className="text-sm">{extractMostCommonKeywords(scrapeData).Keywords}</div>
                                    <a className="text-sm" href={extractMostCommonKeywords(scrapeData).Link}>Learn More</a>

                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {extractHeadingTagsData(scrapeData?.htmlText).HasH1Tags ?
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

                                    <div className="text-sm">{extractHeadingTagsData(scrapeData?.htmlText).Description}</div>
                                    <a className="text-sm" href={extractHeadingTagsData(scrapeData?.htmlText).Link}>Learn More</a>
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
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {extractSEOFriendlyUrlData(psiData).URLs.length == 0 ?
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

                                    {/* <div className="text-sm">Text: {extractSEOFriendlyUrlData(psiData).Link}</div> */}
                                    <div className="text-sm">{extractSEOFriendlyUrlData(psiData).Description}</div>
                                    <a className="text-sm" href={extractSEOFriendlyUrlData(psiData).Link}>Learn More</a>
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
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {extractSEOFriendlyUrlData(psiData).URLs.length == 0 ?
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

                                    <div className="text-sm">{extractImageAltTestData(psiData).Images}</div>
                                    {/* <div className="text-sm">{extractImageAltTestData(psiData).Images}</div> */}
                                    <a className="text-sm" href={extractImageAltTestData(psiData).Link}>Learn More</a>

                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
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
                            <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Responsive Image Test</div>
                            <div className="flex flex-col">
                                <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

                                    {/* <div className="text-sm">Text: {extractResponsiveImageData(psiData).Link}</div> */}
                                    <div className="text-sm">{extractResponsiveImageData(psiData).Description}</div>
                                    <a className="text-sm" href={extractResponsiveImageData(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {extractImageAspectRatioData(psiData).Images.length == 0 ?
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

                                    {/* <div className="text-sm">Text: {extractImageAspectRatioData(psiData).Link}</div> */}
                                    <div className="text-sm">{extractImageAspectRatioData(psiData).Description}</div>
                                    <a className="text-sm" href={extractImageAspectRatioData(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {extractInlineCssData(psiData).Importance == "High" ?
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

                                    {/* <div className="text-sm">Text: {extractInlineCssData(psiData).Link}</div> */}
                                    <div className="text-sm">{extractInlineCssData(psiData).Description}</div>
                                    <a className="text-sm" href={extractInlineCssData(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {extractDeprecatedHtmlTagsData(psiData).DeprecatedTags.length == 0 ?
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

                                    {/* <div className="text-sm">Text: {extractDeprecatedHtmlTagsData(psiData).Link}</div> */}
                                    <div className="text-sm">{extractDeprecatedHtmlTagsData(psiData).Description}</div>
                                    <a className="text-sm" href={extractDeprecatedHtmlTagsData(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performGoogleAnalyticsTest(psiData).HasGoogleAnalytics ?
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

                                    {/* <div className="text-sm">Text: {performGoogleAnalyticsTest(psiData).Link}</div> */}
                                    <div className="text-sm">{performGoogleAnalyticsTest(psiData).Description}</div>
                                    <a className="text-sm" href={performGoogleAnalyticsTest(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performFaviconTest(psiData).HasFavicon ?
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

                                    {/* <div className="text-sm">Text: {performFaviconTest(psiData).Link}</div> */}
                                    <div className="text-sm">{performFaviconTest(psiData).Description}</div>
                                    <a className="text-sm" href={performFaviconTest(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performBacklinksTest(psiData).TotalBacklinks ?
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

                                    {/* <div className="text-sm">Text: {performBacklinksTest(psiData).Link}</div> */}
                                    <div className="text-sm">{performBacklinksTest(psiData).Description}</div>
                                    <a className="text-sm" href={performBacklinksTest(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {!performJSErrorTest(psiData).HasJSErrors ?
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

                                    {/* <div className="text-sm">Text: {performJSErrorTest(psiData).Link}</div> */}
                                    <div className="text-sm">{performJSErrorTest(psiData).Description}</div>
                                    <a className="text-sm" href={performJSErrorTest(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {!performConsoleErrorsTest(psiData).HasConsoleErrors ?
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

                                    {/* <div className="text-sm">Text: {performConsoleErrorsTest(psiData).Link}</div> */}
                                    <div className="text-sm">{performConsoleErrorsTest(psiData).Description}</div>
                                    <a className="text-sm" href={performConsoleErrorsTest(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performCharsetDeclarationTest(psiData).HasCharsetDeclaration ?
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

                                    {/* <div className="text-sm">Text: {performCharsetDeclarationTest(psiData).Link}</div> */}
                                    <div className="text-sm">{performCharsetDeclarationTest(psiData).Description}</div>
                                    <a className="text-sm" href={performCharsetDeclarationTest(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                    </div>
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white" id="Speed optimizations">

                        <div className="text-2xl my-10 font-semibold">Speed optimizations</div>


                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performHTMLPageSizeTest(psiData).HTMLPageSizeBytes ?
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

                                    {/* <div className="text-sm">Text: {performHTMLPageSizeTest(psiData).Link}</div> */}
                                    <div className="text-sm">{performHTMLPageSizeTest(psiData).Description}</div>
                                    <a className="text-sm" href={performHTMLPageSizeTest(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performDOMSizeTest(psiData).DOMSize ?
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

                                    {/* <div className="text-sm">Text: {performDOMSizeTest(psiData).Link}</div> */}
                                    <div className="text-sm">{performDOMSizeTest(psiData).Description}</div>
                                    <a className="text-sm" href={performDOMSizeTest(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performHTMLCompressionTest(psiData).IsCompressed ?
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

                                    {/* <div className="text-sm">Text: {performHTMLCompressionTest(psiData).Link}</div> */}
                                    <div className="text-sm">{performHTMLCompressionTest(psiData).Description}</div>
                                    <a className="text-sm" href={performHTMLCompressionTest(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performSiteLoadingSpeedTest(psiData).FirstContentfulPaint ?
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

                                    {/* <div className="text-sm">Text: {performSiteLoadingSpeedTest(psiData).Link}</div> */}
                                    <div className="text-sm">{performSiteLoadingSpeedTest(psiData).Description}</div>
                                    <a className="text-sm" href={performSiteLoadingSpeedTest(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performJSExecutionTimeTest(psiData).ScriptBootUpTime ?
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

                                    {/* <div className="text-sm">Text: {performJSExecutionTimeTest(psiData).Link}</div> */}
                                    <div className="text-sm">{performJSExecutionTimeTest(psiData).Description}</div>
                                    <a className="text-sm" href={performJSExecutionTimeTest(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performPageObjectsTest(psiData).ResourceSummary ?
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

                                    {/* <div className="text-sm">Text: {performPageObjectsTest(psiData).Link}</div> */}
                                    <div className="text-sm">{performPageObjectsTest(psiData).Description}</div>
                                    <a className="text-sm" href={performPageObjectsTest(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performPageCacheTest(psiData).CacheLifetimeMs ?
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

                                    {/* <div className="text-sm">Text: {performPageCacheTest(psiData).Link}</div> */}
                                    <div className="text-sm">{performPageCacheTest(psiData).Description}</div>
                                    <a className="text-sm" href={performPageCacheTest(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {!performFlashTest(psiData).HasFlashContent ?
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

                                    {/* <div className="text-sm">Text: {performFlashTest(psiData).Link}</div> */}
                                    <div className="text-sm">{performFlashTest(psiData).Description}</div>
                                    <a className="text-sm" href={performFlashTest(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performCDNUsageTest(psiData).HasCDNUsage ?
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

                                    {/* <div className="text-sm">Text: {performCDNUsageTest(psiData).Link}</div> */}
                                    <div className="text-sm">{performCDNUsageTest(psiData).Description}</div>
                                    <a className="text-sm" href={performCDNUsageTest(psiData).Link}>Learn More</a>

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

                                {!performRenderBlockingResourcesTest(psiData).HasRenderBlockingResources ?
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

                                    {/* <div className="text-sm">Text: {performRenderBlockingResourcesTest(psiData).Link}</div> */}
                                    <div className="text-sm">{performRenderBlockingResourcesTest(psiData).Description}</div>
                                    <a className="text-sm" href={performRenderBlockingResourcesTest(psiData).Link}>Learn More</a>

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performNestedTablesTest(scrapeData?.htmlText).HasNestedTables ?
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

                                    {/* <div className="text-sm">Text: {performNestedTablesTest(scrapeData?.htmlText).HasNestedTables}</div> */}
                                    <div className="text-sm">{performNestedTablesTest(scrapeData?.htmlText).Description}</div>
                                    {/* <a className="text-sm" href={performNestedTablesTest(scrapeData?.htmlText).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performFramesetTest(scrapeData?.htmlText).HasFrameset ?
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

                                    {/* <div className="text-sm">Text: {performFramesetTest(scrapeData?.htmlText).HasFrameset}</div> */}
                                    <div className="text-sm">{performFramesetTest(scrapeData?.htmlText).Description}</div>
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>

                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performDoctypeTest(scrapeData?.htmlText).HasCorrectDoctype ?
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

                                    {/* <div className="text-sm">Text: {performDoctypeTest(scrapeData?.htmlText).HasCorrectDoctype}</div> */}
                                    <div className="text-sm">{performDoctypeTest(scrapeData?.htmlText).Description}</div>
                                    {/* <a className="text-sm" href={performDoctypeTest(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performUrlRedirectsTest(psiData).HasRedirects ?
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

                                    {/* <div className="text-sm">Text: {performUrlRedirectsTest(psiData).HasRedirects}</div> */}
                                    <div className="text-sm">{performUrlRedirectsTest(psiData).Description}</div>
                                    {/* <a className="text-sm" href={performUrlRedirectsTest(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performFirstContentfulPaintTest(psiData).Fcp != -1 ?
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

                                    {/* <div className="text-sm">Text: {performFirstContentfulPaintTest(psiData).Fcp}</div> */}
                                    <div className="text-sm">{performFirstContentfulPaintTest(psiData).Description}</div>
                                    {/* <a className="text-sm" href={performFirstContentfulPaintTest(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performLargestContentfulPaintTest(psiData).Lcp != -1 ?
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

                                    {/* <div className="text-sm">Text: {performLargestContentfulPaintTest(psiData).Lcp}</div> */}
                                    <div className="text-sm">{performLargestContentfulPaintTest(psiData).Description}</div>
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performCumulativeLayoutShiftTest(psiData).Cls != -1 ?
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

                                    {/* <div className="text-sm">Text: {performCumulativeLayoutShiftTest(psiData).Cls}</div> */}
                                    <div className="text-sm">{performCumulativeLayoutShiftTest(psiData).Description}</div>
                                    {/* <a className="text-sm" href={performCumulativeLayoutShiftTest(psiData).Link}>Learn More</a> */}

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

                                {performUrlCanonicalizationTest(scrapeData?.htmlText).IsCanonicalized ?
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

                                    {/* <div className="text-sm">Text: {performUrlCanonicalizationTest(scrapeData?.htmlText).IsCanonicalized}</div> */}
                                    <div className="text-sm">{performUrlCanonicalizationTest(scrapeData?.htmlText).Description}</div>
                                    {/* <a className="text-sm" href={performUrlCanonicalizationTest(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performSslCheckerTest(scrapeData?.htmlText).IsSecure ?
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

                                    {/* <div className="text-sm">Text: {performSslCheckerTest(scrapeData?.htmlText).IsSecure}</div> */}
                                    <div className="text-sm">{performSslCheckerTest(scrapeData?.htmlText).Description}</div>
                                    {/* <a className="text-sm" href={performSslCheckerTest(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performMixedContentTest(scrapeData?.htmlText).HasMixedContent ?
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

                                    {/* <div className="text-sm">Text: {performMixedContentTest(scrapeData?.htmlText).HasMixedContent}</div> */}
                                    <div className="text-sm">{performMixedContentTest(scrapeData?.htmlText).Description}</div>
                                    {/* <a className="text-sm" href={performMixedContentTest(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performHttp2Test(psiData).IsHttp2 ?
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

                                    {/* <div className="text-sm">Text: {performHttp2Test(psiData).IsHttp2}</div> */}
                                    <div className="text-sm">{performHttp2Test(psiData).Description}</div>
                                    {/* <a className="text-sm" href={performHttp2Test(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performHstsTest(psiData).IsHstsEnabled ?
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

                                    {/* <div className="text-sm">Text: {performHstsTest(psiData).IsHstsEnabled}</div> */}
                                    <div className="text-sm">{performHstsTest(psiData).Description}</div>
                                    {/* <a className="text-sm" href={performHstsTest(psiData).Link}>Learn More</a> */}

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

                                {performServerSignatureTest(psiData).IsServerSignaturePresent ?
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

                                    {/* <div className="text-sm">Text: {performServerSignatureTest(psiData).IsServerSignaturePresent}</div> */}
                                    <div className="text-sm">{performServerSignatureTest(psiData).Description}</div>
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

                                {performPlaintextEmailsTest(scrapeData?.htmlText).HasPlaintextEmails ?
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

                                    {/* <div className="text-sm">Text: {performPlaintextEmailsTest(scrapeData?.htmlText).HasPlaintextEmails}</div> */}
                                    <div className="text-sm">{performPlaintextEmailsTest(scrapeData?.htmlText).Description}</div>
                                    {/* <a className="text-sm" href={performPlaintextEmailsTest(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>

                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performUnsafeCrossOriginLinksTest(scrapeData?.htmlText).HasUnsafeCrossOriginLinks ?
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

                                    {/* <div className="text-sm">Text: {performUnsafeCrossOriginLinksTest(scrapeData?.htmlText).HasUnsafeCrossOriginLinks}</div> */}
                                    <div className="text-sm">{performUnsafeCrossOriginLinksTest(scrapeData?.htmlText).Description}</div>
                                    {/* <a className="text-sm" href={performUnsafeCrossOriginLinksTest(psiData).Link}>Learn More</a> */}

                                </div>                           </div>
                        </div>
                    </div>
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white" id="Mobile Test">

                        <div className="text-2xl my-10 font-semibold">Mobile Test</div>

                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performMetaViewportTest(psiData).HasMetaViewport ?
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

                                    {/* <div className="text-sm">Text: {performMetaViewportTest(psiData).HasMetaViewport}</div> */}
                                    <div className="text-sm">{performMetaViewportTest(psiData).Description}</div>
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performMediaQueryResponsiveTest(psiData).HasMediaQueries ?
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

                                    {/* <div className="text-sm">Text: {performMediaQueryResponsiveTest(psiData).HasMediaQueries}</div> */}
                                    <div className="text-sm">{performMediaQueryResponsiveTest(psiData).Description}</div>
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performMobileSnapshotTest(psiData).IsMobileSnapshotValid ?
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

                                    {/* <div className="text-sm">Text: {performMobileSnapshotTest(psiData).IsMobileSnapshotValid}</div> */}
                                    <div className="text-sm">{performMobileSnapshotTest(psiData).Description}</div>
                                    {/* <a className="text-sm" href={performMobileSnapshotTest(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                    </div>
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white" id="Advanced SEO">

                        <div className="text-2xl my-10 font-semibold">Advanced SEO</div>

                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performStructuredDataTest(psiData).HasStructuredData ?
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

                                    {/* <div className="text-sm">Text: {performStructuredDataTest(psiData).HasStructuredData}</div> */}
                                    <div className="text-sm">{performStructuredDataTest(psiData).Description}</div>
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {await (await performCustom404ErrorPageTest(psiData.lighthouseResult.finalUrl)).HasCustom404ErrorPage ?
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

                                {performNoindexTagTest(psiData).HasNoindexTag ?
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

                                    {/* <div className="text-sm">Text: {performNoindexTagTest(psiData).HasNoindexTag}</div> */}
                                    <div className="text-sm">{performNoindexTagTest(psiData).Description}</div>
                                    {/* <a className="text-sm" href={extractBrokenLinksData(psiData).Link}>Learn More</a> */}

                                </div>                            </div>
                        </div>
                        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center  p-4 px-2">
                            <div className="mx-4">

                                {performNofollowTagTest(scrapeData?.htmlText).HasNofollowTag ?
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

                                    {/* <div className="text-sm">Text: {performNofollowTagTest(scrapeData?.htmlText).HasNofollowTag}</div> */}
                                    <div className="text-sm">{performNofollowTagTest(scrapeData?.htmlText).Description}</div>
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

                                {performMetaRefreshTest(scrapeData?.htmlText).HasMetaRefreshTag ?
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

                                    {/* <div className="text-sm">Text: {performMetaRefreshTest(scrapeData?.htmlText).HasMetaRefreshTag}</div> */}
                                    <div className="text-sm">{performMetaRefreshTest(scrapeData?.htmlText).Description}</div>
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