import express from 'express';
import axios from 'axios';
import puppeteer from 'puppeteer';
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import nodemailer from 'nodemailer';
const prisma = new PrismaClient()

const app = express();
const port = 10000;
// Replace with your actual Google PSI API key
const API_KEY = 'AIzaSyACLmKUkHHdaqeaIznrqBibQ2XQGw1HEks';

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors())
app.get('/psi', async (req, res) => {
    console.log("psi");
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'URL parameter is required' });
    }

    try {
        
        res.json({
            "captchaResult": "CAPTCHA_NOT_NEEDED",
            "kind": "pagespeedonline#result",
            "id": "https://takeuforward.org/",
            "loadingExperience": {
                "id": "https://takeuforward.org/",
                "metrics": {
                    "CUMULATIVE_LAYOUT_SHIFT_SCORE": {
                        "percentile": 7,
                        "distributions": [
                            {
                                "min": 0,
                                "max": 10,
                                "proportion": 0.9258
                            },
                            {
                                "min": 10,
                                "max": 25,
                                "proportion": 0.0612
                            },
                            {
                                "min": 25,
                                "proportion": 0.013
                            }
                        ],
                        "category": "FAST"
                    },
                    "EXPERIMENTAL_TIME_TO_FIRST_BYTE": {
                        "percentile": 546,
                        "distributions": [
                            {
                                "min": 0,
                                "max": 800,
                                "proportion": 0.83
                            },
                            {
                                "min": 800,
                                "max": 1800,
                                "proportion": 0.0992
                            },
                            {
                                "min": 1800,
                                "proportion": 0.0708
                            }
                        ],
                        "category": "FAST"
                    },
                    "FIRST_CONTENTFUL_PAINT_MS": {
                        "percentile": 2545,
                        "distributions": [
                            {
                                "min": 0,
                                "max": 1800,
                                "proportion": 0.5991
                            },
                            {
                                "min": 1800,
                                "max": 3000,
                                "proportion": 0.209
                            },
                            {
                                "min": 3000,
                                "proportion": 0.1919
                            }
                        ],
                        "category": "AVERAGE"
                    },
                    "INTERACTION_TO_NEXT_PAINT": {
                        "percentile": 316,
                        "distributions": [
                            {
                                "min": 0,
                                "max": 200,
                                "proportion": 0.5618
                            },
                            {
                                "min": 200,
                                "max": 500,
                                "proportion": 0.2878
                            },
                            {
                                "min": 500,
                                "proportion": 0.1504
                            }
                        ],
                        "category": "AVERAGE"
                    },
                    "LARGEST_CONTENTFUL_PAINT_MS": {
                        "percentile": 2511,
                        "distributions": [
                            {
                                "min": 0,
                                "max": 2500,
                                "proportion": 0.7532
                            },
                            {
                                "min": 2500,
                                "max": 4000,
                                "proportion": 0.1253
                            },
                            {
                                "min": 4000,
                                "proportion": 0.1214
                            }
                        ],
                        "category": "AVERAGE"
                    }
                },
                "overall_category": "AVERAGE",
                "initial_url": "https://takeuforward.org/"
            },
            "originLoadingExperience": {
                "id": "https://takeuforward.org",
                "metrics": {
                    "CUMULATIVE_LAYOUT_SHIFT_SCORE": {
                        "percentile": 2,
                        "distributions": [
                            {
                                "min": 0,
                                "max": 10,
                                "proportion": 0.9158
                            },
                            {
                                "min": 10,
                                "max": 25,
                                "proportion": 0.0493
                            },
                            {
                                "min": 25,
                                "proportion": 0.0349
                            }
                        ],
                        "category": "FAST"
                    },
                    "EXPERIMENTAL_TIME_TO_FIRST_BYTE": {
                        "percentile": 422,
                        "distributions": [
                            {
                                "min": 0,
                                "max": 800,
                                "proportion": 0.8812
                            },
                            {
                                "min": 800,
                                "max": 1800,
                                "proportion": 0.0759
                            },
                            {
                                "min": 1800,
                                "proportion": 0.0429
                            }
                        ],
                        "category": "FAST"
                    },
                    "FIRST_CONTENTFUL_PAINT_MS": {
                        "percentile": 1656,
                        "distributions": [
                            {
                                "min": 0,
                                "max": 1800,
                                "proportion": 0.7815
                            },
                            {
                                "min": 1800,
                                "max": 3000,
                                "proportion": 0.1203
                            },
                            {
                                "min": 3000,
                                "proportion": 0.0983
                            }
                        ],
                        "category": "FAST"
                    },
                    "INTERACTION_TO_NEXT_PAINT": {
                        "percentile": 165,
                        "distributions": [
                            {
                                "min": 0,
                                "max": 200,
                                "proportion": 0.7951
                            },
                            {
                                "min": 200,
                                "max": 500,
                                "proportion": 0.1248
                            },
                            {
                                "min": 500,
                                "proportion": 0.0801
                            }
                        ],
                        "category": "FAST"
                    },
                    "LARGEST_CONTENTFUL_PAINT_MS": {
                        "percentile": 2079,
                        "distributions": [
                            {
                                "min": 0,
                                "max": 2500,
                                "proportion": 0.8196
                            },
                            {
                                "min": 2500,
                                "max": 4000,
                                "proportion": 0.1011
                            },
                            {
                                "min": 4000,
                                "proportion": 0.0794
                            }
                        ],
                        "category": "FAST"
                    }
                },
                "overall_category": "FAST",
                "initial_url": "https://takeuforward.org/"
            },
            "lighthouseResult": {
                "requestedUrl": "https://takeuforward.org/",
                "finalUrl": "https://takeuforward.org/",
                "mainDocumentUrl": "https://takeuforward.org/",
                "finalDisplayedUrl": "https://takeuforward.org/",
                "lighthouseVersion": "12.2.1",
                "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/128.0.6613.113 Safari/537.36",
                "fetchTime": "2024-09-25T12:57:26.623Z",
                "environment": {
                    "networkUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
                    "hostUserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/128.0.6613.113 Safari/537.36",
                    "benchmarkIndex": 293.5,
                    "credits": {
                        "axe-core": "4.10.0"
                    }
                },
                "runWarnings": [],
                "configSettings": {
                    "emulatedFormFactor": "desktop",
                    "formFactor": "desktop",
                    "locale": "en-US",
                    "onlyCategories": [
                        "pwa",
                        "performance",
                        "accessibility",
                        "best-practices",
                        "seo"
                    ],
                    "channel": "lr"
                },
                "audits": {
                    "interactive": {
                        "id": "interactive",
                        "title": "Time to Interactive",
                        "description": "Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/).",
                        "score": 0.82,
                        "scoreDisplayMode": "numeric",
                        "displayValue": "2.9 s",
                        "numericValue": 2894.493016862246,
                        "numericUnit": "millisecond"
                    },
                    "aria-command-name": {
                        "id": "aria-command-name",
                        "title": "`button`, `link`, and `menuitem` elements have accessible names",
                        "description": "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to make command elements more accessible](https://dequeuniversity.com/rules/axe/4.10/aria-command-name).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "user-timings": {
                        "id": "user-timings",
                        "title": "User Timing marks and measures",
                        "description": "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more about User Timing marks](https://developer.chrome.com/docs/lighthouse/performance/user-timings/).",
                        "score": 1,
                        "scoreDisplayMode": "informative",
                        "displayValue": "4 user timings",
                        "details": {
                            "headings": [
                                {
                                    "valueType": "text",
                                    "label": "Name",
                                    "key": "name"
                                },
                                {
                                    "key": "timingType",
                                    "valueType": "text",
                                    "label": "Type"
                                },
                                {
                                    "label": "Start Time",
                                    "valueType": "ms",
                                    "granularity": 0.01,
                                    "key": "startTime"
                                },
                                {
                                    "valueType": "ms",
                                    "label": "Duration",
                                    "granularity": 0.01,
                                    "key": "duration"
                                }
                            ],
                            "items": [
                                {
                                    "timingType": "Mark",
                                    "name": "public-page-init",
                                    "startTime": 2499.382
                                },
                                {
                                    "name": "add-asset-init",
                                    "startTime": 2500.012,
                                    "timingType": "Mark"
                                },
                                {
                                    "timingType": "Mark",
                                    "startTime": 2567.344,
                                    "name": "v2-entry-init"
                                },
                                {
                                    "name": "load-event-init",
                                    "startTime": 2568.238,
                                    "timingType": "Mark"
                                }
                            ],
                            "type": "table"
                        }
                    },
                    "aria-conditional-attr": {
                        "id": "aria-conditional-attr",
                        "title": "ARIA attributes are used as specified for the element's role",
                        "description": "Some ARIA attributes are only allowed on an element under certain conditions. [Learn more about conditional ARIA attributes](https://dequeuniversity.com/rules/axe/4.10/aria-conditional-attr).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "items": [],
                            "type": "table",
                            "headings": []
                        }
                    },
                    "lcp-lazy-loaded": {
                        "id": "lcp-lazy-loaded",
                        "title": "Largest Contentful Paint image was not lazily loaded",
                        "description": "Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint. [Learn more about optimal lazy loading](https://web.dev/articles/lcp-lazy-loading).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable",
                        "metricSavings": {
                            "LCP": 0
                        }
                    },
                    "aria-valid-attr-value": {
                        "id": "aria-valid-attr-value",
                        "title": "`[aria-*]` attributes have valid values",
                        "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more about valid values for ARIA attributes](https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr-value).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "headings": [],
                            "type": "table",
                            "items": []
                        }
                    },
                    "aria-allowed-attr": {
                        "id": "aria-allowed-attr",
                        "title": "`[aria-*]` attributes match their roles",
                        "description": "Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn how to match ARIA attributes to their roles](https://dequeuniversity.com/rules/axe/4.10/aria-allowed-attr).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "headings": [],
                            "items": [],
                            "type": "table"
                        }
                    },
                    "final-screenshot": {
                        "id": "final-screenshot",
                        "title": "Final Screenshot",
                        "description": "The last screenshot captured of the pageload.",
                        "score": 1,
                        "scoreDisplayMode": "informative",
                        "details": {
                            "timing": 3032,
                            "data": "data:image/jpeg;base64,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",
                            "type": "screenshot",
                            "timestamp": 1653190153082
                        }
                    },
                    "form-field-multiple-labels": {
                        "id": "form-field-multiple-labels",
                        "title": "No form fields have multiple labels",
                        "description": "Form fields with multiple labels can be confusingly announced by assistive technologies like screen readers which use either the first, the last, or all of the labels. [Learn how to use form labels](https://dequeuniversity.com/rules/axe/4.10/form-field-multiple-labels).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "network-server-latency": {
                        "id": "network-server-latency",
                        "title": "Server Backend Latencies",
                        "description": "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more about server response time](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
                        "score": 1,
                        "scoreDisplayMode": "informative",
                        "displayValue": "140 ms",
                        "details": {
                            "type": "table",
                            "items": [
                                {
                                    "origin": "https://checkout.razorpay.com",
                                    "serverResponseTime": 139
                                },
                                {
                                    "origin": "https://accounts.google.com",
                                    "serverResponseTime": 10
                                },
                                {
                                    "serverResponseTime": 5,
                                    "origin": "https://www.googletagmanager.com"
                                },
                                {
                                    "origin": "https://images.unsplash.com",
                                    "serverResponseTime": 4
                                },
                                {
                                    "serverResponseTime": 2,
                                    "origin": "https://takeuforward.org"
                                },
                                {
                                    "serverResponseTime": 2,
                                    "origin": "https://api.razorpay.com"
                                },
                                {
                                    "origin": "https://static.takeuforward.org",
                                    "serverResponseTime": 1.5
                                },
                                {
                                    "serverResponseTime": 1,
                                    "origin": "https://fonts.googleapis.com"
                                },
                                {
                                    "origin": "https://backend.takeuforward.org",
                                    "serverResponseTime": 1
                                },
                                {
                                    "origin": "https://checkout-static-next.razorpay.com",
                                    "serverResponseTime": 1
                                },
                                {
                                    "serverResponseTime": 0.5,
                                    "origin": "https://www.google-analytics.com"
                                },
                                {
                                    "serverResponseTime": 0.5,
                                    "origin": "https://fonts.gstatic.com"
                                }
                            ],
                            "headings": [
                                {
                                    "valueType": "text",
                                    "key": "origin",
                                    "label": "URL"
                                },
                                {
                                    "valueType": "ms",
                                    "key": "serverResponseTime",
                                    "label": "Time Spent",
                                    "granularity": 1
                                }
                            ],
                            "sortedBy": [
                                "serverResponseTime"
                            ]
                        },
                        "numericValue": 139,
                        "numericUnit": "millisecond"
                    },
                    "largest-contentful-paint-element": {
                        "id": "largest-contentful-paint-element",
                        "title": "Largest Contentful Paint element",
                        "description": "This is the largest contentful element painted within the viewport. [Learn more about the Largest Contentful Paint element](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
                        "score": 0,
                        "scoreDisplayMode": "metricSavings",
                        "displayValue": "2,450 ms",
                        "metricSavings": {
                            "LCP": 1250
                        },
                        "details": {
                            "type": "list",
                            "items": [
                                {
                                    "type": "table",
                                    "headings": [
                                        {
                                            "key": "node",
                                            "label": "Element",
                                            "valueType": "node"
                                        }
                                    ],
                                    "items": [
                                        {
                                            "node": {
                                                "boundingRect": {
                                                    "top": 168,
                                                    "width": 1169,
                                                    "bottom": 243,
                                                    "height": 75,
                                                    "left": 83,
                                                    "right": 1252
                                                },
                                                "nodeLabel": "Gear Up for Success: Your Ultimate Preparation Hub!",
                                                "selector": "div.max-w-8xl > div.pt-24 > div.flex > h1.md:text-[50px]",
                                                "snippet": "<h1 class=\"md:text-[50px]  text-[26px] xs:text-[22px] font-dmSans text-center font-bo…\">",
                                                "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,0,H1",
                                                "type": "node",
                                                "lhId": "page-0-H1"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "headings": [
                                        {
                                            "label": "Phase",
                                            "key": "phase",
                                            "valueType": "text"
                                        },
                                        {
                                            "valueType": "text",
                                            "key": "percent",
                                            "label": "% of LCP"
                                        },
                                        {
                                            "label": "Timing",
                                            "valueType": "ms",
                                            "key": "timing"
                                        }
                                    ],
                                    "type": "table",
                                    "items": [
                                        {
                                            "percent": "7%",
                                            "phase": "TTFB",
                                            "timing": 162
                                        },
                                        {
                                            "timing": 0,
                                            "percent": "0%",
                                            "phase": "Load Delay"
                                        },
                                        {
                                            "percent": "0%",
                                            "phase": "Load Time",
                                            "timing": 0
                                        },
                                        {
                                            "percent": "93%",
                                            "timing": 2288.7852681752083,
                                            "phase": "Render Delay"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    "definition-list": {
                        "id": "definition-list",
                        "title": "`<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>`, `<template>` or `<div>` elements.",
                        "description": "When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.10/definition-list).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "robots-txt": {
                        "id": "robots-txt",
                        "title": "robots.txt is valid",
                        "description": "If your robots.txt file is malformed, crawlers may not be able to understand how you want your website to be crawled or indexed. [Learn more about robots.txt](https://developer.chrome.com/docs/lighthouse/seo/invalid-robots-txt/).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "headings": [],
                            "items": [],
                            "type": "table"
                        }
                    },
                    "uses-text-compression": {
                        "id": "uses-text-compression",
                        "title": "Enable text compression",
                        "description": "Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more about text compression](https://developer.chrome.com/docs/lighthouse/performance/uses-text-compression/).",
                        "score": 0.5,
                        "scoreDisplayMode": "metricSavings",
                        "displayValue": "Potential savings of 2 KiB",
                        "metricSavings": {
                            "LCP": 0,
                            "FCP": 0
                        },
                        "details": {
                            "debugData": {
                                "type": "debugdata",
                                "metricSavings": {
                                    "FCP": 0,
                                    "LCP": 0
                                }
                            },
                            "overallSavingsMs": 0,
                            "overallSavingsBytes": 2452,
                            "headings": [
                                {
                                    "key": "url",
                                    "valueType": "url",
                                    "label": "URL"
                                },
                                {
                                    "valueType": "bytes",
                                    "label": "Transfer Size",
                                    "key": "totalBytes"
                                },
                                {
                                    "valueType": "bytes",
                                    "label": "Potential Savings",
                                    "key": "wastedBytes"
                                }
                            ],
                            "type": "opportunity",
                            "sortedBy": [
                                "wastedBytes"
                            ],
                            "items": [
                                {
                                    "totalBytes": 4206,
                                    "wastedBytes": 2452,
                                    "url": "https://api.razorpay.com/v1/checkout/public?traffic_env=baseline&build=520af2b9922ab248d9c032514f474eee5c598aa2&modern=1&unified_lite=1&checkout_v2=1&new_session=1"
                                }
                            ]
                        },
                        "numericValue": 0,
                        "numericUnit": "millisecond"
                    },
                    "font-display": {
                        "id": "font-display",
                        "title": "All text remains visible during webfont loads",
                        "description": "Leverage the `font-display` CSS feature to ensure text is user-visible while webfonts are loading. [Learn more about `font-display`](https://developer.chrome.com/docs/lighthouse/performance/font-display/).",
                        "score": 1,
                        "scoreDisplayMode": "metricSavings",
                        "details": {
                            "items": [],
                            "type": "table",
                            "headings": []
                        },
                        "warnings": []
                    },
                    "aria-required-children": {
                        "id": "aria-required-children",
                        "title": "Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children.",
                        "description": "Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more about roles and required children elements](https://dequeuniversity.com/rules/axe/4.10/aria-required-children).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "list": {
                        "id": "list",
                        "title": "Lists contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).",
                        "description": "Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.10/list).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "listitem": {
                        "id": "listitem",
                        "title": "List items (`<li>`) are not contained within `<ul>`, `<ol>` or `<menu>` parent elements.",
                        "description": "Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.10/listitem).",
                        "score": 0,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "debugData": {
                                "impact": "serious",
                                "tags": [
                                    "cat.structure",
                                    "wcag2a",
                                    "wcag131",
                                    "EN-301-549",
                                    "EN-9.1.3.1"
                                ],
                                "type": "debugdata"
                            },
                            "items": [
                                {
                                    "node": {
                                        "lhId": "1-35-LI",
                                        "type": "node",
                                        "boundingRect": {
                                            "right": 1143,
                                            "left": 692,
                                            "top": 3949,
                                            "height": 22,
                                            "width": 451,
                                            "bottom": 3971
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,2,DIV,1,DIV,1,DIV,0,LI",
                                        "explanation": "Fix any of the following:\n  List item does not have a <ul>, <ol> parent element",
                                        "snippet": "<li>",
                                        "selector": "div.flex > div.sm:p-10 > div.mt-8 > li",
                                        "nodeLabel": "Software Engineer at Google."
                                    }
                                },
                                {
                                    "node": {
                                        "snippet": "<li>",
                                        "explanation": "Fix any of the following:\n  List item does not have a <ul>, <ol> parent element",
                                        "selector": "div.flex > div.sm:p-10 > div.mt-8 > li",
                                        "nodeLabel": "Offers from Facebook London and other startups.",
                                        "lhId": "1-36-LI",
                                        "boundingRect": {
                                            "left": 692,
                                            "top": 3987,
                                            "height": 22,
                                            "bottom": 4009,
                                            "right": 1143,
                                            "width": 451
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,2,DIV,1,DIV,1,DIV,1,LI",
                                        "type": "node"
                                    }
                                },
                                {
                                    "node": {
                                        "selector": "div.flex > div.sm:p-10 > div.mt-8 > li",
                                        "type": "node",
                                        "boundingRect": {
                                            "width": 451,
                                            "left": 692,
                                            "height": 22,
                                            "bottom": 4047,
                                            "top": 4025,
                                            "right": 1143
                                        },
                                        "lhId": "1-37-LI",
                                        "explanation": "Fix any of the following:\n  List item does not have a <ul>, <ol> parent element",
                                        "nodeLabel": "Previously worked with Amazon, Media.net.",
                                        "snippet": "<li>",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,2,DIV,1,DIV,1,DIV,2,LI"
                                    }
                                },
                                {
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,2,DIV,1,DIV,1,DIV,3,LI",
                                        "snippet": "<li>",
                                        "explanation": "Fix any of the following:\n  List item does not have a <ul>, <ol> parent element",
                                        "nodeLabel": "Followed by 1 M+ people across YT, Linkedin and other socials.",
                                        "lhId": "1-38-LI",
                                        "type": "node",
                                        "selector": "div.flex > div.sm:p-10 > div.mt-8 > li",
                                        "boundingRect": {
                                            "bottom": 4085,
                                            "width": 451,
                                            "left": 692,
                                            "top": 4063,
                                            "height": 22,
                                            "right": 1143
                                        }
                                    }
                                },
                                {
                                    "node": {
                                        "boundingRect": {
                                            "bottom": 4123,
                                            "left": 692,
                                            "width": 451,
                                            "height": 22,
                                            "top": 4101,
                                            "right": 1143
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,2,DIV,1,DIV,1,DIV,4,LI",
                                        "snippet": "<li>",
                                        "type": "node",
                                        "nodeLabel": "Candidate Master at Codeforces.",
                                        "lhId": "1-39-LI",
                                        "selector": "div.flex > div.sm:p-10 > div.mt-8 > li",
                                        "explanation": "Fix any of the following:\n  List item does not have a <ul>, <ol> parent element"
                                    }
                                },
                                {
                                    "node": {
                                        "type": "node",
                                        "snippet": "<li>",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,2,DIV,1,DIV,1,DIV,5,LI",
                                        "boundingRect": {
                                            "left": 692,
                                            "width": 451,
                                            "bottom": 4161,
                                            "height": 22,
                                            "right": 1143,
                                            "top": 4139
                                        },
                                        "nodeLabel": "6* at Codechef.",
                                        "lhId": "1-40-LI",
                                        "selector": "div.flex > div.sm:p-10 > div.mt-8 > li",
                                        "explanation": "Fix any of the following:\n  List item does not have a <ul>, <ol> parent element"
                                    }
                                }
                            ],
                            "type": "table",
                            "headings": [
                                {
                                    "label": "Failing Elements",
                                    "key": "node",
                                    "valueType": "node",
                                    "subItemsHeading": {
                                        "valueType": "node",
                                        "key": "relatedNode"
                                    }
                                }
                            ]
                        }
                    },
                    "screenshot-thumbnails": {
                        "id": "screenshot-thumbnails",
                        "title": "Screenshot Thumbnails",
                        "description": "This is what the load of your site looked like.",
                        "score": 1,
                        "scoreDisplayMode": "informative",
                        "details": {
                            "scale": 3032,
                            "items": [
                                {
                                    "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2MBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//AABEIAVwB9AMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APQKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA//9k=",
                                    "timing": 379,
                                    "timestamp": 1653187499888
                                },
                                {
                                    "timestamp": 1653187878888,
                                    "timing": 758,
                                    "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAFcAfQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k="
                                },
                                {
                                    "timing": 1137,
                                    "timestamp": 1653188257888,
                                    "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAFcAfQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k="
                                },
                                {
                                    "timestamp": 1653188636888,
                                    "timing": 1516,
                                    "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAFcAfQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k="
                                },
                                {
                                    "timestamp": 1653189015888,
                                    "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAFcAfQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=",
                                    "timing": 1895
                                },
                                {
                                    "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAFcAfQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=",
                                    "timing": 2274,
                                    "timestamp": 1653189394888
                                },
                                {
                                    "timestamp": 1653189773888,
                                    "timing": 2653,
                                    "data": "data:image/jpeg;base64,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"
                                },
                                {
                                    "timestamp": 1653190152888,
                                    "timing": 3032,
                                    "data": "data:image/jpeg;base64,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"
                                }
                            ],
                            "type": "filmstrip"
                        }
                    },
                    "td-has-header": {
                        "id": "td-has-header",
                        "title": "`<td>` elements in a large `<table>` have one or more table headers.",
                        "description": "Screen readers have features to make navigating tables easier. Ensuring that `<td>` elements in a large table (3 or more cells in width and height) have an associated table header may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.10/td-has-header).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "cumulative-layout-shift": {
                        "id": "cumulative-layout-shift",
                        "title": "Cumulative Layout Shift",
                        "description": "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
                        "score": 0.94,
                        "scoreDisplayMode": "numeric",
                        "displayValue": "0.083",
                        "details": {
                            "type": "debugdata",
                            "items": [
                                {
                                    "newEngineResult": {
                                        "cumulativeLayoutShiftMainFrame": 0.08266650908215079,
                                        "cumulativeLayoutShift": 0.08266650908215079
                                    },
                                    "cumulativeLayoutShiftMainFrame": 0.08266650908215079,
                                    "newEngineResultDiffered": false
                                }
                            ]
                        },
                        "numericValue": 0.08266650908215079,
                        "numericUnit": "unitless"
                    },
                    "label-content-name-mismatch": {
                        "id": "label-content-name-mismatch",
                        "title": "Elements with visible text labels do not have matching accessible names.",
                        "description": "Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users. [Learn more about accessible names](https://dequeuniversity.com/rules/axe/4.10/label-content-name-mismatch).",
                        "score": 0,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "debugData": {
                                "impact": "serious",
                                "tags": [
                                    "cat.semantics",
                                    "wcag21a",
                                    "wcag253",
                                    "EN-301-549",
                                    "EN-9.2.5.3",
                                    "experimental"
                                ],
                                "type": "debugdata"
                            },
                            "items": [
                                {
                                    "node": {
                                        "nodeLabel": "0\n\nYoutube",
                                        "boundingRect": {
                                            "top": 1494,
                                            "left": 24,
                                            "height": 270,
                                            "width": 287,
                                            "bottom": 1764,
                                            "right": 311
                                        },
                                        "lhId": "1-30-A",
                                        "selector": "div.flex > div.md:flex > div.grid > a.bg-gradient-to-tl",
                                        "type": "node",
                                        "snippet": "<a aria-label=\"YouTube: https://www.youtube.com/channel/UCJskGeByzRRSvmOyZOz61ig\" class=\"bg-gradient-to-tl from-[#FFCDC7] via-[#FFF5F3] rounded-[18px] to-[#FFFBFA]…\" href=\"https://www.youtube.com/channel/UCJskGeByzRRSvmOyZOz61ig\" target=\"_blank\">",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,A",
                                        "explanation": "Fix any of the following:\n  Text inside the element is not included in the accessible name"
                                    }
                                },
                                {
                                    "node": {
                                        "nodeLabel": "0\n\nTwitter",
                                        "explanation": "Fix any of the following:\n  Text inside the element is not included in the accessible name",
                                        "snippet": "<a aria-label=\"Twitter: https://bit.ly/32QbLD6\" class=\"bg-gradient-to-tl from-[#FFCDC7] via-[#FFF5F3] rounded-[18px] to-[#FFFBFA]…\" href=\"https://bit.ly/32QbLD6\" target=\"_blank\">",
                                        "lhId": "1-31-A",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,1,A",
                                        "type": "node",
                                        "selector": "div.flex > div.md:flex > div.grid > a.bg-gradient-to-tl",
                                        "boundingRect": {
                                            "height": 270,
                                            "width": 287,
                                            "bottom": 1764,
                                            "top": 1494,
                                            "left": 370,
                                            "right": 657
                                        }
                                    }
                                },
                                {
                                    "node": {
                                        "lhId": "1-32-A",
                                        "type": "node",
                                        "boundingRect": {
                                            "right": 1003,
                                            "width": 287,
                                            "height": 270,
                                            "top": 1494,
                                            "left": 716,
                                            "bottom": 1764
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,2,A",
                                        "selector": "div.flex > div.md:flex > div.grid > a.bg-gradient-to-tl",
                                        "nodeLabel": "0\n\nInstagram",
                                        "explanation": "Fix any of the following:\n  Text inside the element is not included in the accessible name",
                                        "snippet": "<a aria-label=\"Instagram: https://www.instagram.com/striver_79/\" class=\"bg-gradient-to-tl from-[#FFCDC7] via-[#FFF5F3] rounded-[18px] to-[#FFFBFA]…\" href=\"https://www.instagram.com/striver_79/\" target=\"_blank\">"
                                    }
                                },
                                {
                                    "node": {
                                        "nodeLabel": "0\n\nLinkedIn",
                                        "snippet": "<a aria-label=\"LinkedIn: https://www.linkedin.com/company/takeuforward/\" class=\"bg-gradient-to-tl from-[#FFCDC7] via-[#FFF5F3] rounded-[18px] to-[#FFFBFA]…\" href=\"https://www.linkedin.com/company/takeuforward/\" target=\"_blank\">",
                                        "type": "node",
                                        "boundingRect": {
                                            "bottom": 1764,
                                            "top": 1494,
                                            "right": 1348,
                                            "height": 270,
                                            "left": 1061,
                                            "width": 287
                                        },
                                        "explanation": "Fix any of the following:\n  Text inside the element is not included in the accessible name",
                                        "selector": "div.flex > div.md:flex > div.grid > a.bg-gradient-to-tl",
                                        "lhId": "1-33-A",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,3,A"
                                    }
                                }
                            ],
                            "type": "table",
                            "headings": [
                                {
                                    "key": "node",
                                    "valueType": "node",
                                    "label": "Failing Elements",
                                    "subItemsHeading": {
                                        "key": "relatedNode",
                                        "valueType": "node"
                                    }
                                }
                            ]
                        }
                    },
                    "first-meaningful-paint": {
                        "id": "first-meaningful-paint",
                        "title": "First Meaningful Paint",
                        "description": "First Meaningful Paint measures when the primary content of a page is visible. [Learn more about the First Meaningful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-meaningful-paint/).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "structured-data": {
                        "id": "structured-data",
                        "title": "Structured data is valid",
                        "description": "Run the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/) and the [Structured Data Linter](http://linter.structured-data.org/) to validate structured data. [Learn more about Structured Data](https://developer.chrome.com/docs/lighthouse/seo/structured-data/).",
                        "score": null,
                        "scoreDisplayMode": "manual"
                    },
                    "aria-progressbar-name": {
                        "id": "aria-progressbar-name",
                        "title": "ARIA `progressbar` elements have accessible names",
                        "description": "When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to label `progressbar` elements](https://dequeuniversity.com/rules/axe/4.10/aria-progressbar-name).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "aria-dialog-name": {
                        "id": "aria-dialog-name",
                        "title": "Elements with `role=\"dialog\"` or `role=\"alertdialog\"` have accessible names.",
                        "description": "ARIA dialog elements without accessible names may prevent screen readers users from discerning the purpose of these elements. [Learn how to make ARIA dialog elements more accessible](https://dequeuniversity.com/rules/axe/4.10/aria-dialog-name).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "geolocation-on-start": {
                        "id": "geolocation-on-start",
                        "title": "Avoids requesting the geolocation permission on page load",
                        "description": "Users are mistrustful of or confused by sites that request their location without context. Consider tying the request to a user action instead. [Learn more about the geolocation permission](https://developer.chrome.com/docs/lighthouse/best-practices/geolocation-on-start/).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "headings": [],
                            "items": [],
                            "type": "table"
                        }
                    },
                    "uses-passive-event-listeners": {
                        "id": "uses-passive-event-listeners",
                        "title": "Uses passive listeners to improve scrolling performance",
                        "description": "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more about adopting passive event listeners](https://developer.chrome.com/docs/lighthouse/best-practices/uses-passive-event-listeners/).",
                        "score": 1,
                        "scoreDisplayMode": "metricSavings",
                        "details": {
                            "type": "table",
                            "headings": [],
                            "items": []
                        }
                    },
                    "uses-optimized-images": {
                        "id": "uses-optimized-images",
                        "title": "Efficiently encode images",
                        "description": "Optimized images load faster and consume less cellular data. [Learn how to efficiently encode images](https://developer.chrome.com/docs/lighthouse/performance/uses-optimized-images/).",
                        "score": 0.5,
                        "scoreDisplayMode": "metricSavings",
                        "displayValue": "Potential savings of 161 KiB",
                        "metricSavings": {
                            "LCP": 0,
                            "FCP": 0
                        },
                        "details": {
                            "headings": [
                                {
                                    "key": "node",
                                    "valueType": "node"
                                },
                                {
                                    "key": "url",
                                    "valueType": "url",
                                    "label": "URL"
                                },
                                {
                                    "valueType": "bytes",
                                    "label": "Resource Size",
                                    "key": "totalBytes"
                                },
                                {
                                    "label": "Potential Savings",
                                    "key": "wastedBytes",
                                    "valueType": "bytes"
                                }
                            ],
                            "overallSavingsBytes": 165072,
                            "type": "opportunity",
                            "sortedBy": [
                                "wastedBytes"
                            ],
                            "debugData": {
                                "type": "debugdata",
                                "metricSavings": {
                                    "LCP": 0,
                                    "FCP": 0
                                }
                            },
                            "overallSavingsMs": 0,
                            "items": [
                                {
                                    "totalBytes": 125675,
                                    "fromProtocol": true,
                                    "node": {
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/K-Sanketh-kumar-DfeETlQ3\" alt=\"img\">",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,3,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "nodeLabel": "img",
                                        "lhId": "1-85-IMG",
                                        "boundingRect": {
                                            "width": 40,
                                            "bottom": 3244,
                                            "top": 3204,
                                            "height": 40,
                                            "right": 1426,
                                            "left": 1386
                                        },
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "type": "node"
                                    },
                                    "wastedBytes": 83454,
                                    "isCrossOrigin": true,
                                    "url": "https://static.takeuforward.org/content/K-Sanketh-kumar-DfeETlQ3"
                                },
                                {
                                    "totalBytes": 71148,
                                    "url": "https://static.takeuforward.org/content/Aniket-jyP64DXX",
                                    "wastedBytes": 48746,
                                    "isCrossOrigin": true,
                                    "fromProtocol": true,
                                    "node": {
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "nodeLabel": "img",
                                        "type": "node",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Aniket-jyP64DXX\" alt=\"img\">",
                                        "boundingRect": {
                                            "height": 40,
                                            "right": 5341,
                                            "width": 40,
                                            "top": 3182,
                                            "left": 5301,
                                            "bottom": 3222
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,12,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "lhId": "1-94-IMG"
                                    }
                                },
                                {
                                    "isCrossOrigin": true,
                                    "node": {
                                        "boundingRect": {
                                            "height": 40,
                                            "top": 3204,
                                            "bottom": 3244,
                                            "left": 3126,
                                            "width": 40,
                                            "right": 3166
                                        },
                                        "lhId": "1-89-IMG",
                                        "type": "node",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,7,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "nodeLabel": "img",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Aditya-Mane-D8T2NtA-\" alt=\"img\">"
                                    },
                                    "totalBytes": 46234,
                                    "wastedBytes": 17521,
                                    "url": "https://static.takeuforward.org/content/Aditya-Mane-D8T2NtA-",
                                    "fromProtocol": true
                                },
                                {
                                    "wastedBytes": 15351,
                                    "url": "https://static.takeuforward.org/content/Avish-Mittal--1MO7Fba",
                                    "totalBytes": 72163,
                                    "fromProtocol": true,
                                    "node": {
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Avish-Mittal--1MO7Fba\" alt=\"img\">",
                                        "lhId": "1-93-IMG",
                                        "boundingRect": {
                                            "bottom": 3244,
                                            "height": 40,
                                            "left": 4866,
                                            "top": 3204,
                                            "width": 40,
                                            "right": 4906
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,11,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "nodeLabel": "img",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "type": "node"
                                    },
                                    "isCrossOrigin": true
                                }
                            ]
                        },
                        "warnings": [],
                        "numericValue": 0,
                        "numericUnit": "millisecond"
                    },
                    "table-duplicate-name": {
                        "id": "table-duplicate-name",
                        "title": "Tables have different content in the summary attribute and `<caption>`.",
                        "description": "The summary attribute should describe the table structure, while `<caption>` should have the onscreen title. Accurate table mark-up helps users of screen readers. [Learn more about summary and caption](https://dequeuniversity.com/rules/axe/4.10/table-duplicate-name).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "use-landmarks": {
                        "id": "use-landmarks",
                        "title": "HTML5 landmark elements are used to improve navigation",
                        "description": "Landmark elements (`<main>`, `<nav>`, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more about landmark elements](https://developer.chrome.com/docs/lighthouse/accessibility/use-landmarks/).",
                        "score": null,
                        "scoreDisplayMode": "manual"
                    },
                    "font-size": {
                        "id": "font-size",
                        "title": "Document uses legible font sizes",
                        "description": "Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more about legible font sizes](https://developer.chrome.com/docs/lighthouse/seo/font-size/).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "button-name": {
                        "id": "button-name",
                        "title": "Buttons have an accessible name",
                        "description": "When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn how to make buttons more accessible](https://dequeuniversity.com/rules/axe/4.10/button-name).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "type": "table",
                            "headings": [],
                            "items": []
                        }
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
                                    "key": "name",
                                    "label": "Name",
                                    "valueType": "text"
                                },
                                {
                                    "label": "Version",
                                    "key": "version",
                                    "valueType": "text"
                                }
                            ],
                            "debugData": {
                                "type": "debugdata",
                                "stacks": [
                                    {
                                        "id": "lodash",
                                        "version": "4.17.21"
                                    },
                                    {
                                        "id": "corejs",
                                        "version": "core-js-pure@2.6.12"
                                    }
                                ]
                            },
                            "type": "table",
                            "items": [
                                {
                                    "version": "4.17.21",
                                    "name": "Lo-Dash",
                                    "npm": "lodash"
                                },
                                {
                                    "npm": "core-js",
                                    "version": "core-js-pure@2.6.12",
                                    "name": "core-js"
                                }
                            ]
                        }
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
                    "logical-tab-order": {
                        "id": "logical-tab-order",
                        "title": "The page has a logical tab order",
                        "description": "Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more about logical tab ordering](https://developer.chrome.com/docs/lighthouse/accessibility/logical-tab-order/).",
                        "score": null,
                        "scoreDisplayMode": "manual"
                    },
                    "link-in-text-block": {
                        "id": "link-in-text-block",
                        "title": "Links are distinguishable without relying on color.",
                        "description": "Low-contrast text is difficult or impossible for many users to read. Link text that is discernible improves the experience for users with low vision. [Learn how to make links distinguishable](https://dequeuniversity.com/rules/axe/4.10/link-in-text-block).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "unminified-css": {
                        "id": "unminified-css",
                        "title": "Minify CSS",
                        "description": "Minifying CSS files can reduce network payload sizes. [Learn how to minify CSS](https://developer.chrome.com/docs/lighthouse/performance/unminified-css/).",
                        "score": 1,
                        "scoreDisplayMode": "metricSavings",
                        "metricSavings": {
                            "LCP": 0,
                            "FCP": 0
                        },
                        "details": {
                            "overallSavingsMs": 0,
                            "overallSavingsBytes": 0,
                            "headings": [],
                            "items": [],
                            "type": "opportunity",
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
                        "numericValue": 0,
                        "numericUnit": "millisecond"
                    },
                    "color-contrast": {
                        "id": "color-contrast",
                        "title": "Background and foreground colors do not have a sufficient contrast ratio.",
                        "description": "Low-contrast text is difficult or impossible for many users to read. [Learn how to provide sufficient color contrast](https://dequeuniversity.com/rules/axe/4.10/color-contrast).",
                        "score": 0,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "debugData": {
                                "tags": [
                                    "cat.color",
                                    "wcag2aa",
                                    "wcag143",
                                    "TTv5",
                                    "TT13.c",
                                    "EN-301-549",
                                    "EN-9.1.4.3",
                                    "ACT"
                                ],
                                "impact": "serious",
                                "type": "debugdata"
                            },
                            "headings": [
                                {
                                    "label": "Failing Elements",
                                    "valueType": "node",
                                    "key": "node",
                                    "subItemsHeading": {
                                        "key": "relatedNode",
                                        "valueType": "node"
                                    }
                                }
                            ],
                            "type": "table",
                            "items": [
                                {
                                    "node": {
                                        "lhId": "1-0-SPAN",
                                        "snippet": "<span class=\"text-[#7A7A7A] font-medium md:text-[16px] text-[12px] text-center  mt-1\">",
                                        "type": "node",
                                        "selector": "div.max-w-8xl > div.pt-24 > div.flex > span.text-[#7A7A7A]",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,1,SPAN",
                                        "nodeLabel": "Navigate Your Learning Adventure: Explore DSA, Master CS Concepts, Design Syste…",
                                        "boundingRect": {
                                            "top": 247,
                                            "width": 1085,
                                            "bottom": 271,
                                            "height": 24,
                                            "left": 125,
                                            "right": 1210
                                        },
                                        "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.46 (foreground color: #7a7a7a, background color: #0f0f0f, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1"
                                    },
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "relatedNode": {
                                                    "snippet": "<div class=\"bg-white relative z-[10] dark:bg-[#0F0F0F]\">",
                                                    "nodeLabel": "Gear Up for Success: Your Ultimate Preparation Hub!\nNavigate Your Learning Adve…",
                                                    "selector": "div > div.flex > main.flex-grow > div.bg-white",
                                                    "type": "node",
                                                    "lhId": "1-1-DIV",
                                                    "boundingRect": {
                                                        "width": 1335,
                                                        "height": 1211,
                                                        "right": 1335,
                                                        "left": 0,
                                                        "bottom": 1251,
                                                        "top": 40
                                                    },
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "node": {
                                        "selector": "div.border > div.flex > div.flex > p.text-[#7A7A7A]",
                                        "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.09 (foreground color: #7a7a7a, background color: #191919, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
                                        "type": "node",
                                        "snippet": "<p class=\"text-[#7A7A7A] text-center font-medium md:text-[16px] text-[12px] md:mt-0 …\">",
                                        "lhId": "1-2-P",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,1,DIV,1,P",
                                        "boundingRect": {
                                            "left": 308,
                                            "top": 383,
                                            "width": 430,
                                            "right": 738,
                                            "bottom": 407,
                                            "height": 24
                                        },
                                        "nodeLabel": "Curated learning, approach-wise solutions, personalized"
                                    },
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "relatedNode": {
                                                    "nodeLabel": "Elevate Your Learning Journey with TUF+ Course\n\nCurated learning, approach-wise…",
                                                    "boundingRect": {
                                                        "height": 164,
                                                        "top": 311,
                                                        "left": 153,
                                                        "width": 1030,
                                                        "right": 1182,
                                                        "bottom": 475
                                                    },
                                                    "selector": "div.max-w-8xl > div.pt-24 > div.flex > div.border",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV",
                                                    "snippet": "<div class=\"border xl:w-4/5 lg:w-5/6 w-full border-zinc-800 bg-[#191919] lg:px-12 lg:p…\">",
                                                    "lhId": "1-3-DIV",
                                                    "type": "node"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "relatedNode": {
                                                    "nodeLabel": "Elevate Your Learning Journey with TUF+ Course\n\nCurated learning, approach-wise…",
                                                    "type": "node",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV",
                                                    "lhId": "1-3-DIV",
                                                    "snippet": "<div class=\"border xl:w-4/5 lg:w-5/6 w-full border-zinc-800 bg-[#191919] lg:px-12 lg:p…\">",
                                                    "selector": "div.max-w-8xl > div.pt-24 > div.flex > div.border",
                                                    "boundingRect": {
                                                        "right": 1182,
                                                        "left": 153,
                                                        "width": 1030,
                                                        "height": 164,
                                                        "bottom": 475,
                                                        "top": 311
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    "node": {
                                        "nodeLabel": "roadmaps, expert doubt assistance, and more!",
                                        "type": "node",
                                        "snippet": "<p class=\"text-[#7A7A7A] text-center font-medium md:text-[16px] text-[12px]\">",
                                        "lhId": "1-4-P",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,1,DIV,2,P",
                                        "selector": "div.border > div.flex > div.flex > p.text-[#7A7A7A]",
                                        "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.09 (foreground color: #7a7a7a, background color: #191919, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
                                        "boundingRect": {
                                            "left": 308,
                                            "width": 352,
                                            "height": 24,
                                            "top": 407,
                                            "right": 660,
                                            "bottom": 431
                                        }
                                    }
                                },
                                {
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV,0,A,2,P",
                                        "snippet": "<p class=\"md:text-[14px] text-[10px] text-[#7A7A7A] font-medium\">",
                                        "lhId": "1-5-P",
                                        "selector": "div.flex > div.grid > a.dark:bg-[#ffffff0d] > p.md:text-[14px]",
                                        "nodeLabel": "Boost your DSA skills with our handy cheat sheets.",
                                        "boundingRect": {
                                            "height": 42,
                                            "width": 278,
                                            "left": 177,
                                            "bottom": 724,
                                            "right": 455,
                                            "top": 682
                                        },
                                        "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.01 (foreground color: #7a7a7a, background color: #1b1b1b, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
                                        "type": "node"
                                    },
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "relatedNode": {
                                                    "snippet": "<a class=\" dark:bg-[#ffffff0d] border dark:border-[#3D3D3D] dark:backdrop-blur-lg  r…\" href=\"/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/\">",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV,0,A",
                                                    "lhId": "1-6-A",
                                                    "boundingRect": {
                                                        "top": 515,
                                                        "bottom": 807,
                                                        "right": 480,
                                                        "left": 152,
                                                        "height": 292,
                                                        "width": 328
                                                    },
                                                    "selector": "div.pt-24 > div.flex > div.grid > a.dark:bg-[#ffffff0d]",
                                                    "type": "node",
                                                    "nodeLabel": "Striver’s DSA Sheet\n\nBoost your DSA skills with our handy cheat sheets.\n\nTry it…"
                                                }
                                            },
                                            {
                                                "relatedNode": {
                                                    "nodeLabel": "Gear Up for Success: Your Ultimate Preparation Hub!\nNavigate Your Learning Adve…",
                                                    "lhId": "1-1-DIV",
                                                    "boundingRect": {
                                                        "right": 1335,
                                                        "height": 1211,
                                                        "bottom": 1251,
                                                        "left": 0,
                                                        "width": 1335,
                                                        "top": 40
                                                    },
                                                    "selector": "div > div.flex > main.flex-grow > div.bg-white",
                                                    "type": "node",
                                                    "snippet": "<div class=\"bg-white relative z-[10] dark:bg-[#0F0F0F]\">",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "subItems": {
                                        "items": [
                                            {
                                                "relatedNode": {
                                                    "nodeLabel": "System Design\n\nDesign better systems with our simplified approach.\n\nTry it free",
                                                    "lhId": "1-8-A",
                                                    "snippet": "<a class=\"dark:bg-[#ffffff0d] border dark:border-[#3D3D3D] dark:backdrop-blur-lg rou…\" href=\"/system-design/complete-system-design-roadmap-with-videos-for-sdes/\">",
                                                    "selector": "div.pt-24 > div.flex > div.grid > a.dark:bg-[#ffffff0d]",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV,1,A",
                                                    "boundingRect": {
                                                        "height": 292,
                                                        "bottom": 807,
                                                        "width": 328,
                                                        "left": 504,
                                                        "right": 832,
                                                        "top": 515
                                                    },
                                                    "type": "node"
                                                }
                                            },
                                            {
                                                "relatedNode": {
                                                    "type": "node",
                                                    "boundingRect": {
                                                        "right": 1335,
                                                        "bottom": 1251,
                                                        "height": 1211,
                                                        "top": 40,
                                                        "width": 1335,
                                                        "left": 0
                                                    },
                                                    "lhId": "1-1-DIV",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV",
                                                    "snippet": "<div class=\"bg-white relative z-[10] dark:bg-[#0F0F0F]\">",
                                                    "selector": "div > div.flex > main.flex-grow > div.bg-white",
                                                    "nodeLabel": "Gear Up for Success: Your Ultimate Preparation Hub!\nNavigate Your Learning Adve…"
                                                }
                                            }
                                        ],
                                        "type": "subitems"
                                    },
                                    "node": {
                                        "nodeLabel": "Design better systems with our simplified approach.",
                                        "lhId": "1-7-P",
                                        "boundingRect": {
                                            "top": 682,
                                            "bottom": 724,
                                            "height": 42,
                                            "width": 278,
                                            "left": 529,
                                            "right": 807
                                        },
                                        "snippet": "<p class=\"md:text-[14px] text-[10px] text-[#7A7A7A] font-medium\">",
                                        "type": "node",
                                        "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.01 (foreground color: #7a7a7a, background color: #1b1b1b, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV,1,A,2,P",
                                        "selector": "div.flex > div.grid > a.dark:bg-[#ffffff0d] > p.md:text-[14px]"
                                    }
                                },
                                {
                                    "subItems": {
                                        "items": [
                                            {
                                                "relatedNode": {
                                                    "nodeLabel": "Technical Blogs\n\nDive Deep into Tech Innovation with Our Engaging Blogs.\n\nTry i…",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV,2,A",
                                                    "selector": "div.pt-24 > div.flex > div.grid > a.dark:bg-[#ffffff0d]",
                                                    "snippet": "<a class=\"dark:bg-[#ffffff0d] border dark:border-[#3D3D3D] dark:backdrop-blur-lg rou…\" href=\"/blogs\">",
                                                    "type": "node",
                                                    "boundingRect": {
                                                        "height": 292,
                                                        "top": 515,
                                                        "bottom": 807,
                                                        "right": 1184,
                                                        "width": 328,
                                                        "left": 856
                                                    },
                                                    "lhId": "1-10-A"
                                                }
                                            },
                                            {
                                                "relatedNode": {
                                                    "selector": "div > div.flex > main.flex-grow > div.bg-white",
                                                    "type": "node",
                                                    "boundingRect": {
                                                        "left": 0,
                                                        "height": 1211,
                                                        "width": 1335,
                                                        "right": 1335,
                                                        "top": 40,
                                                        "bottom": 1251
                                                    },
                                                    "lhId": "1-1-DIV",
                                                    "nodeLabel": "Gear Up for Success: Your Ultimate Preparation Hub!\nNavigate Your Learning Adve…",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV",
                                                    "snippet": "<div class=\"bg-white relative z-[10] dark:bg-[#0F0F0F]\">"
                                                }
                                            }
                                        ],
                                        "type": "subitems"
                                    },
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV,2,A,2,P",
                                        "selector": "div.flex > div.grid > a.dark:bg-[#ffffff0d] > p.md:text-[14px]",
                                        "lhId": "1-9-P",
                                        "snippet": "<p class=\"md:text-[14px] text-[10px] text-[#7A7A7A] font-medium\">",
                                        "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.01 (foreground color: #7a7a7a, background color: #1b1b1b, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
                                        "boundingRect": {
                                            "width": 278,
                                            "bottom": 724,
                                            "top": 682,
                                            "right": 1159,
                                            "left": 881,
                                            "height": 42
                                        },
                                        "type": "node",
                                        "nodeLabel": "Dive Deep into Tech Innovation with Our Engaging Blogs."
                                    }
                                },
                                {
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV,3,A,2,P",
                                        "snippet": "<p class=\"md:text-[14px] text-[10px] text-[#7A7A7A] font-medium\">",
                                        "lhId": "1-11-P",
                                        "boundingRect": {
                                            "height": 42,
                                            "left": 177,
                                            "width": 278,
                                            "bottom": 1040,
                                            "right": 455,
                                            "top": 998
                                        },
                                        "type": "node",
                                        "selector": "div.flex > div.grid > a.dark:bg-[#ffffff0d] > p.md:text-[14px]",
                                        "nodeLabel": "Master algorithms effortlessly with our curated DSA playlist.",
                                        "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.01 (foreground color: #7a7a7a, background color: #1b1b1b, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
                                    },
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "relatedNode": {
                                                    "boundingRect": {
                                                        "width": 328,
                                                        "height": 292,
                                                        "top": 831,
                                                        "bottom": 1123,
                                                        "right": 480,
                                                        "left": 152
                                                    },
                                                    "lhId": "1-12-A",
                                                    "snippet": "<a class=\" dark:bg-[#ffffff0d] border dark:border-[#3D3D3D] dark:backdrop-blur-lg ro…\" href=\"/array/top-array-interview-questions-structured-path-with-video-solutions/\">",
                                                    "selector": "div.pt-24 > div.flex > div.grid > a.dark:bg-[#ffffff0d]",
                                                    "type": "node",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV,3,A",
                                                    "nodeLabel": "Striver’s DSA Playlist\n\nMaster algorithms effortlessly with our curated DSA pla…"
                                                }
                                            },
                                            {
                                                "relatedNode": {
                                                    "type": "node",
                                                    "lhId": "1-1-DIV",
                                                    "selector": "div > div.flex > main.flex-grow > div.bg-white",
                                                    "nodeLabel": "Gear Up for Success: Your Ultimate Preparation Hub!\nNavigate Your Learning Adve…",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV",
                                                    "boundingRect": {
                                                        "width": 1335,
                                                        "height": 1211,
                                                        "right": 1335,
                                                        "left": 0,
                                                        "top": 40,
                                                        "bottom": 1251
                                                    },
                                                    "snippet": "<div class=\"bg-white relative z-[10] dark:bg-[#0F0F0F]\">"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "node": {
                                        "type": "node",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV,4,A,2,P",
                                        "boundingRect": {
                                            "right": 807,
                                            "left": 529,
                                            "width": 278,
                                            "height": 42,
                                            "top": 998,
                                            "bottom": 1040
                                        },
                                        "lhId": "1-13-P",
                                        "selector": "div.flex > div.grid > a.dark:bg-[#ffffff0d] > p.md:text-[14px]",
                                        "snippet": "<p class=\"md:text-[14px] text-[10px] text-[#7A7A7A] font-medium\">",
                                        "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.01 (foreground color: #7a7a7a, background color: #1b1b1b, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
                                        "nodeLabel": "Demystify CS topics with our easy-to-understand guides."
                                    },
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "relatedNode": {
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV,4,A",
                                                    "lhId": "1-14-A",
                                                    "selector": "div.pt-24 > div.flex > div.grid > a.dark:bg-[#ffffff0d]",
                                                    "type": "node",
                                                    "boundingRect": {
                                                        "width": 328,
                                                        "top": 831,
                                                        "left": 504,
                                                        "height": 292,
                                                        "right": 832,
                                                        "bottom": 1123
                                                    },
                                                    "snippet": "<a class=\"dark:bg-[#ffffff0d] border dark:border-[#3D3D3D] dark:backdrop-blur-lg rou…\" href=\"/dbms/most-asked-dbms-interview-questions/\">",
                                                    "nodeLabel": "CS Subjects\n\nDemystify CS topics with our easy-to-understand guides.\n\nTry it fr…"
                                                }
                                            },
                                            {
                                                "relatedNode": {
                                                    "boundingRect": {
                                                        "top": 40,
                                                        "height": 1211,
                                                        "right": 1335,
                                                        "left": 0,
                                                        "bottom": 1251,
                                                        "width": 1335
                                                    },
                                                    "selector": "div > div.flex > main.flex-grow > div.bg-white",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV",
                                                    "type": "node",
                                                    "lhId": "1-1-DIV",
                                                    "snippet": "<div class=\"bg-white relative z-[10] dark:bg-[#0F0F0F]\">",
                                                    "nodeLabel": "Gear Up for Success: Your Ultimate Preparation Hub!\nNavigate Your Learning Adve…"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV,5,A,2,P",
                                        "lhId": "1-15-P",
                                        "selector": "div.flex > div.grid > a.dark:bg-[#ffffff0d] > p.md:text-[14px]",
                                        "snippet": "<p class=\"md:text-[14px] text-[10px] text-[#7A7A7A] font-medium\">",
                                        "boundingRect": {
                                            "top": 998,
                                            "right": 1159,
                                            "height": 42,
                                            "width": 278,
                                            "left": 881,
                                            "bottom": 1040
                                        },
                                        "nodeLabel": "Level up your coding game with our practice resources.",
                                        "type": "node",
                                        "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.01 (foreground color: #7a7a7a, background color: #1b1b1b, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
                                    },
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "relatedNode": {
                                                    "snippet": "<a class=\"dark:bg-[#ffffff0d] border dark:border-[#3D3D3D] dark:backdrop-blur-lg rou…\" href=\"/interview-experience/strivers-cp-sheet/\">",
                                                    "selector": "div.pt-24 > div.flex > div.grid > a.dark:bg-[#ffffff0d]",
                                                    "boundingRect": {
                                                        "height": 292,
                                                        "left": 856,
                                                        "bottom": 1123,
                                                        "top": 831,
                                                        "right": 1184,
                                                        "width": 328
                                                    },
                                                    "nodeLabel": "Striver’s CP Sheet\n\nLevel up your coding game with our practice resources.\n\nTry…",
                                                    "lhId": "1-16-A",
                                                    "type": "node",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV,5,A"
                                                }
                                            },
                                            {
                                                "relatedNode": {
                                                    "lhId": "1-1-DIV",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV",
                                                    "type": "node",
                                                    "boundingRect": {
                                                        "height": 1211,
                                                        "top": 40,
                                                        "width": 1335,
                                                        "left": 0,
                                                        "right": 1335,
                                                        "bottom": 1251
                                                    },
                                                    "snippet": "<div class=\"bg-white relative z-[10] dark:bg-[#0F0F0F]\">",
                                                    "selector": "div > div.flex > main.flex-grow > div.bg-white",
                                                    "nodeLabel": "Gear Up for Success: Your Ultimate Preparation Hub!\nNavigate Your Learning Adve…"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "node": {
                                        "snippet": "<p class=\"text-[#7A7A7A] md:text-lg text-[12px] text-center font-medium mt-4\">",
                                        "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.46 (foreground color: #7a7a7a, background color: #0f0f0f, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,2,DIV,0,DIV,0,DIV,0,DIV,1,P",
                                        "nodeLabel": "Unlock Your Potential with Our Comprehensive Learning Approach",
                                        "boundingRect": {
                                            "left": 393,
                                            "right": 942,
                                            "top": 2111,
                                            "width": 549,
                                            "height": 27,
                                            "bottom": 2138
                                        },
                                        "selector": "div.max-w-8xl > div.pt-10 > div.flex > p.text-[#7A7A7A]",
                                        "type": "node",
                                        "lhId": "1-17-P"
                                    },
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "relatedNode": {
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,2,DIV",
                                                    "selector": "div > div.flex > main.flex-grow > div.bg-[#FAFAFA]",
                                                    "nodeLabel": "Why choose us?\n\nUnlock Your Potential with Our Comprehensive Learning Approach\n…",
                                                    "lhId": "1-18-DIV",
                                                    "type": "node",
                                                    "boundingRect": {
                                                        "left": 0,
                                                        "bottom": 2711,
                                                        "height": 819,
                                                        "right": 1335,
                                                        "top": 1892,
                                                        "width": 1335
                                                    },
                                                    "snippet": "<div class=\"bg-[#FAFAFA] dark:bg-[#0F0F0F]\">"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "node": {
                                        "type": "node",
                                        "boundingRect": {
                                            "height": 30,
                                            "width": 120,
                                            "right": 727,
                                            "left": 608,
                                            "top": 2766,
                                            "bottom": 2796
                                        },
                                        "nodeLabel": "Testimonials",
                                        "lhId": "1-19-H5",
                                        "selector": "div.max-w-8xl > div.pt-10 > div.flex > h5.text-xl",
                                        "snippet": "<h5 class=\"text-xl text-red-600 capitalize font-semibold\">",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,0,H5",
                                        "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.08 (foreground color: #e11d48, background color: #0f0f0f, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1"
                                    },
                                    "subItems": {
                                        "items": [
                                            {
                                                "relatedNode": {
                                                    "lhId": "1-20-DIV",
                                                    "nodeLabel": "Testimonials\nDiscover the Success Stories of Our Students\nDP and Graphs? Used t…",
                                                    "boundingRect": {
                                                        "left": 0,
                                                        "right": 1335,
                                                        "width": 1335,
                                                        "bottom": 3514,
                                                        "height": 803,
                                                        "top": 2711
                                                    },
                                                    "snippet": "<div class=\"dark:bg-[#0F0F0F] \">",
                                                    "type": "node",
                                                    "selector": "div > div.flex > main.flex-grow > div.dark:bg-[#0F0F0F]",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV"
                                                }
                                            }
                                        ],
                                        "type": "subitems"
                                    }
                                },
                                {
                                    "node": {
                                        "nodeLabel": "INSTRUCTOR",
                                        "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.08 (foreground color: #e11d48, background color: #0f0f0f, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
                                        "snippet": "<h5 class=\"text-xl text-red-600 capitalize font-semibold\">",
                                        "lhId": "1-21-H5",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,0,H5",
                                        "boundingRect": {
                                            "right": 729,
                                            "left": 607,
                                            "bottom": 3687,
                                            "width": 122,
                                            "height": 30,
                                            "top": 3657
                                        },
                                        "selector": "div.max-w-8xl > div.pt-10 > div.flex > h5.text-xl",
                                        "type": "node"
                                    },
                                    "subItems": {
                                        "items": [
                                            {
                                                "relatedNode": {
                                                    "boundingRect": {
                                                        "bottom": 4445,
                                                        "top": 3514,
                                                        "left": 0,
                                                        "right": 1335,
                                                        "height": 931,
                                                        "width": 1335
                                                    },
                                                    "selector": "div > div.flex > main.flex-grow > div.bg-[#FAFAFA]",
                                                    "nodeLabel": "INSTRUCTOR\nMeet Our Exceptional Instructor\nRaj Vikramaditya\nSWE-III @ Google | …",
                                                    "snippet": "<div class=\"bg-[#FAFAFA] dark:bg-[#0F0F0F]\">",
                                                    "lhId": "1-22-DIV",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,4,DIV",
                                                    "type": "node"
                                                }
                                            }
                                        ],
                                        "type": "subitems"
                                    }
                                },
                                {
                                    "subItems": {
                                        "items": [
                                            {
                                                "relatedNode": {
                                                    "nodeLabel": "Raj Vikramaditya\nSWE-III @ Google | Founder takeUforward\nSoftware Engineer at G…",
                                                    "selector": "div.max-w-8xl > div.pt-10 > div.flex > div.flex",
                                                    "snippet": "<div class=\"flex flex-wrap lg:flex-row flex-col-reverse md:flex-nowrap bg-white dark:b…\">",
                                                    "boundingRect": {
                                                        "width": 1031,
                                                        "top": 3817,
                                                        "bottom": 4317,
                                                        "right": 1183,
                                                        "height": 500,
                                                        "left": 152
                                                    },
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,2,DIV",
                                                    "lhId": "1-24-DIV",
                                                    "type": "node"
                                                }
                                            },
                                            {
                                                "relatedNode": {
                                                    "nodeLabel": "INSTRUCTOR\nMeet Our Exceptional Instructor\nRaj Vikramaditya\nSWE-III @ Google | …",
                                                    "type": "node",
                                                    "selector": "div > div.flex > main.flex-grow > div.bg-[#FAFAFA]",
                                                    "boundingRect": {
                                                        "bottom": 4445,
                                                        "height": 931,
                                                        "right": 1335,
                                                        "left": 0,
                                                        "top": 3514,
                                                        "width": 1335
                                                    },
                                                    "snippet": "<div class=\"bg-[#FAFAFA] dark:bg-[#0F0F0F]\">",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,4,DIV",
                                                    "lhId": "1-22-DIV"
                                                }
                                            }
                                        ],
                                        "type": "subitems"
                                    },
                                    "node": {
                                        "type": "node",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,2,DIV,1,DIV,0,DIV,1,DIV,1,H1",
                                        "boundingRect": {
                                            "left": 760,
                                            "bottom": 3914,
                                            "height": 27,
                                            "width": 353,
                                            "top": 3887,
                                            "right": 1113
                                        },
                                        "selector": "div.sm:p-10 > div.flex > div.flex > h1.sm:text-[18px]",
                                        "lhId": "1-23-H1",
                                        "nodeLabel": "SWE-III @ Google | Founder takeUforward",
                                        "snippet": "<h1 class=\"sm:text-[18px] text-[12px] text-[#7A7A7A] font-medium\">",
                                        "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.21 (foreground color: #7a7a7a, background color: #161616, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1"
                                    }
                                },
                                {
                                    "node": {
                                        "selector": "footer.mx-auto > div.flex > div.lg:w-1/4 > h2.title-font",
                                        "nodeLabel": "Company",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,2,DIV,2,FOOTER,1,DIV,0,DIV,0,H2",
                                        "type": "node",
                                        "boundingRect": {
                                            "top": 5978,
                                            "bottom": 6000,
                                            "width": 182,
                                            "left": 456,
                                            "right": 638,
                                            "height": 22
                                        },
                                        "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.47 (foreground color: #e11d48, background color: #000000, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
                                        "lhId": "1-25-H2",
                                        "snippet": "<h2 class=\"title-font font-bold  text-red-600 tracking-widest text-sm mb-3\">"
                                    },
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "relatedNode": {
                                                    "type": "node",
                                                    "snippet": "<div class=\"bg-[#FAFAFA] dark:bg-[#000000] relative z-[10] w-full mx-auto pt-20 border…\">",
                                                    "nodeLabel": "3,00,000+\n\nPeople Have ALREADY Signed Up Across The Globe\n\nGet Started Now\ntake…",
                                                    "lhId": "1-26-DIV",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,2,DIV",
                                                    "selector": "div#root > div > div.flex > div.bg-[#FAFAFA]",
                                                    "boundingRect": {
                                                        "width": 1335,
                                                        "bottom": 6348,
                                                        "right": 1335,
                                                        "height": 605,
                                                        "top": 5743,
                                                        "left": 0
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "relatedNode": {
                                                    "nodeLabel": "3,00,000+\n\nPeople Have ALREADY Signed Up Across The Globe\n\nGet Started Now\ntake…",
                                                    "lhId": "1-26-DIV",
                                                    "boundingRect": {
                                                        "width": 1335,
                                                        "bottom": 6348,
                                                        "height": 605,
                                                        "top": 5743,
                                                        "left": 0,
                                                        "right": 1335
                                                    },
                                                    "selector": "div#root > div > div.flex > div.bg-[#FAFAFA]",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,2,DIV",
                                                    "type": "node",
                                                    "snippet": "<div class=\"bg-[#FAFAFA] dark:bg-[#000000] relative z-[10] w-full mx-auto pt-20 border…\">"
                                                }
                                            }
                                        ]
                                    },
                                    "node": {
                                        "type": "node",
                                        "snippet": "<h2 class=\"title-font font-bold  text-red-600 tracking-widest text-sm mb-3\">",
                                        "selector": "footer.mx-auto > div.flex > div.lg:w-1/4 > h2.title-font",
                                        "nodeLabel": "Quick Access",
                                        "boundingRect": {
                                            "left": 670,
                                            "right": 852,
                                            "width": 182,
                                            "bottom": 6000,
                                            "top": 5978,
                                            "height": 22
                                        },
                                        "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.47 (foreground color: #e11d48, background color: #000000, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
                                        "lhId": "1-27-H2",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,2,DIV,2,FOOTER,1,DIV,1,DIV,0,H2"
                                    }
                                },
                                {
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "relatedNode": {
                                                    "type": "node",
                                                    "snippet": "<div class=\"bg-[#FAFAFA] dark:bg-[#000000] relative z-[10] w-full mx-auto pt-20 border…\">",
                                                    "selector": "div#root > div > div.flex > div.bg-[#FAFAFA]",
                                                    "boundingRect": {
                                                        "right": 1335,
                                                        "width": 1335,
                                                        "top": 5743,
                                                        "left": 0,
                                                        "height": 605,
                                                        "bottom": 6348
                                                    },
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,2,DIV",
                                                    "nodeLabel": "3,00,000+\n\nPeople Have ALREADY Signed Up Across The Globe\n\nGet Started Now\ntake…",
                                                    "lhId": "1-26-DIV"
                                                }
                                            }
                                        ]
                                    },
                                    "node": {
                                        "lhId": "1-28-H2",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,2,DIV,2,FOOTER,1,DIV,2,DIV,0,H2",
                                        "type": "node",
                                        "selector": "footer.mx-auto > div.flex > div.lg:w-1/4 > h2.title-font",
                                        "boundingRect": {
                                            "left": 884,
                                            "width": 182,
                                            "top": 5978,
                                            "bottom": 6000,
                                            "right": 1065,
                                            "height": 22
                                        },
                                        "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.47 (foreground color: #e11d48, background color: #000000, font size: 10.5pt (14px), font weight: bold). Expected contrast ratio of 4.5:1",
                                        "nodeLabel": "DSA Sheets",
                                        "snippet": "<h2 class=\"title-font font-bold  text-red-600 tracking-widest text-sm mb-3\">"
                                    }
                                },
                                {
                                    "node": {
                                        "type": "node",
                                        "lhId": "1-29-P",
                                        "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 4.34 (foreground color: #6b7280, background color: #000000, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
                                        "boundingRect": {
                                            "height": 22,
                                            "right": 826,
                                            "left": 509,
                                            "width": 317,
                                            "top": 6318,
                                            "bottom": 6340
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,2,DIV,3,DIV,0,P",
                                        "nodeLabel": "Copyright © 2024 takeuforward | All rights reserved",
                                        "selector": "div.flex > div.bg-[#FAFAFA] > div.border-t-2 > p.text-gray-500",
                                        "snippet": "<p class=\"text-gray-500 text-sm text-center sm:text-left\">"
                                    },
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "relatedNode": {
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,2,DIV",
                                                    "boundingRect": {
                                                        "height": 605,
                                                        "top": 5743,
                                                        "right": 1335,
                                                        "left": 0,
                                                        "width": 1335,
                                                        "bottom": 6348
                                                    },
                                                    "type": "node",
                                                    "nodeLabel": "3,00,000+\n\nPeople Have ALREADY Signed Up Across The Globe\n\nGet Started Now\ntake…",
                                                    "selector": "div#root > div > div.flex > div.bg-[#FAFAFA]",
                                                    "lhId": "1-26-DIV",
                                                    "snippet": "<div class=\"bg-[#FAFAFA] dark:bg-[#000000] relative z-[10] w-full mx-auto pt-20 border…\">"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    "max-potential-fid": {
                        "id": "max-potential-fid",
                        "title": "Max Potential First Input Delay",
                        "description": "The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more about the Maximum Potential First Input Delay metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/).",
                        "score": 0.37,
                        "scoreDisplayMode": "numeric",
                        "displayValue": "300 ms",
                        "numericValue": 295,
                        "numericUnit": "millisecond"
                    },
                    "aria-input-field-name": {
                        "id": "aria-input-field-name",
                        "title": "ARIA input fields have accessible names",
                        "description": "When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about input field labels](https://dequeuniversity.com/rules/axe/4.10/aria-input-field-name).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "link-text": {
                        "id": "link-text",
                        "title": "Links have descriptive text",
                        "description": "Descriptive link text helps search engines understand your content. [Learn how to make links more accessible](https://developer.chrome.com/docs/lighthouse/seo/link-text/).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "type": "table",
                            "items": [],
                            "headings": []
                        }
                    },
                    "html-lang-valid": {
                        "id": "html-lang-valid",
                        "title": "`<html>` element has a valid value for its `[lang]` attribute",
                        "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/html-lang-valid).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "type": "table",
                            "headings": [],
                            "items": []
                        }
                    },
                    "deprecations": {
                        "id": "deprecations",
                        "title": "Avoids deprecated APIs",
                        "description": "Deprecated APIs will eventually be removed from the browser. [Learn more about deprecated APIs](https://developer.chrome.com/docs/lighthouse/best-practices/deprecations/).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "headings": [],
                            "items": [],
                            "type": "table"
                        }
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
                                    "valueType": "text",
                                    "key": "label"
                                },
                                {
                                    "key": "requestCount",
                                    "valueType": "numeric",
                                    "label": "Requests"
                                },
                                {
                                    "label": "Transfer Size",
                                    "key": "transferSize",
                                    "valueType": "bytes"
                                }
                            ],
                            "type": "table",
                            "items": [
                                {
                                    "transferSize": 2724426,
                                    "requestCount": 57,
                                    "resourceType": "total",
                                    "label": "Total"
                                },
                                {
                                    "requestCount": 10,
                                    "resourceType": "script",
                                    "transferSize": 1595202,
                                    "label": "Script"
                                },
                                {
                                    "resourceType": "image",
                                    "requestCount": 19,
                                    "label": "Image",
                                    "transferSize": 860662
                                },
                                {
                                    "label": "Font",
                                    "resourceType": "font",
                                    "transferSize": 80051,
                                    "requestCount": 2
                                },
                                {
                                    "requestCount": 15,
                                    "transferSize": 68121,
                                    "label": "Other",
                                    "resourceType": "other"
                                },
                                {
                                    "label": "Stylesheet",
                                    "transferSize": 67063,
                                    "resourceType": "stylesheet",
                                    "requestCount": 8
                                },
                                {
                                    "requestCount": 3,
                                    "resourceType": "document",
                                    "transferSize": 53327,
                                    "label": "Document"
                                },
                                {
                                    "transferSize": 0,
                                    "label": "Media",
                                    "resourceType": "media",
                                    "requestCount": 0
                                },
                                {
                                    "requestCount": 35,
                                    "label": "Third-party",
                                    "transferSize": 722344,
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
                    "speed-index": {
                        "id": "speed-index",
                        "title": "Speed Index",
                        "description": "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
                        "score": 0.38,
                        "scoreDisplayMode": "numeric",
                        "displayValue": "2.6 s",
                        "numericValue": 2621.895929346354,
                        "numericUnit": "millisecond"
                    },
                    "is-on-https": {
                        "id": "is-on-https",
                        "title": "Uses HTTPS",
                        "description": "All sites should be protected with HTTPS, even ones that don't handle sensitive data. This includes avoiding [mixed content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content), where some resources are loaded over HTTP despite the initial request being served over HTTPS. HTTPS prevents intruders from tampering with or passively listening in on the communications between your app and your users, and is a prerequisite for HTTP/2 and many new web platform APIs. [Learn more about HTTPS](https://developer.chrome.com/docs/lighthouse/pwa/is-on-https/).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "type": "table",
                            "items": [],
                            "headings": []
                        }
                    },
                    "aria-roles": {
                        "id": "aria-roles",
                        "title": "`[role]` values are valid",
                        "description": "ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more about valid ARIA roles](https://dequeuniversity.com/rules/axe/4.10/aria-roles).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "items": [],
                            "type": "table",
                            "headings": []
                        }
                    },
                    "valid-source-maps": {
                        "id": "valid-source-maps",
                        "title": "Missing source maps for large first-party JavaScript",
                        "description": "Source maps translate minified code to the original source code. This helps developers debug in production. In addition, Lighthouse is able to provide further insights. Consider deploying source maps to take advantage of these benefits. [Learn more about source maps](https://developer.chrome.com/docs/devtools/javascript/source-maps/).",
                        "score": 0,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "items": [
                                {
                                    "scriptUrl": "https://takeuforward.org/static/js/main.e1dada2b.js",
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "error": "Large JavaScript file is missing a source map"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "headings": [
                                {
                                    "subItemsHeading": {
                                        "key": "error"
                                    },
                                    "key": "scriptUrl",
                                    "valueType": "url",
                                    "label": "URL"
                                },
                                {
                                    "label": "Map URL",
                                    "key": "sourceMapUrl",
                                    "valueType": "url"
                                }
                            ],
                            "type": "table"
                        }
                    },
                    "duplicated-javascript": {
                        "id": "duplicated-javascript",
                        "title": "Remove duplicate modules in JavaScript bundles",
                        "description": "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
                        "score": 1,
                        "scoreDisplayMode": "metricSavings",
                        "metricSavings": {
                            "LCP": 0,
                            "FCP": 0
                        },
                        "details": {
                            "debugData": {
                                "type": "debugdata",
                                "metricSavings": {
                                    "LCP": 0,
                                    "FCP": 0
                                }
                            },
                            "headings": [],
                            "type": "opportunity",
                            "items": [],
                            "sortedBy": [
                                "wastedBytes"
                            ],
                            "overallSavingsMs": 0,
                            "overallSavingsBytes": 0
                        },
                        "numericValue": 0,
                        "numericUnit": "millisecond"
                    },
                    "focusable-controls": {
                        "id": "focusable-controls",
                        "title": "Interactive controls are keyboard focusable",
                        "description": "Custom interactive controls are keyboard focusable and display a focus indicator. [Learn how to make custom controls focusable](https://developer.chrome.com/docs/lighthouse/accessibility/focusable-controls/).",
                        "score": null,
                        "scoreDisplayMode": "manual"
                    },
                    "unsized-images": {
                        "id": "unsized-images",
                        "title": "Image elements have explicit `width` and `height`",
                        "description": "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
                        "score": 1,
                        "scoreDisplayMode": "metricSavings",
                        "metricSavings": {
                            "CLS": 0
                        },
                        "details": {
                            "type": "table",
                            "headings": [],
                            "items": []
                        }
                    },
                    "managed-focus": {
                        "id": "managed-focus",
                        "title": "The user's focus is directed to new content added to the page",
                        "description": "If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn how to direct focus to new content](https://developer.chrome.com/docs/lighthouse/accessibility/managed-focus/).",
                        "score": null,
                        "scoreDisplayMode": "manual"
                    },
                    "aria-hidden-body": {
                        "id": "aria-hidden-body",
                        "title": "`[aria-hidden=\"true\"]` is not present on the document `<body>`",
                        "description": "Assistive technologies, like screen readers, work inconsistently when `aria-hidden=\"true\"` is set on the document `<body>`. [Learn how `aria-hidden` affects the document body](https://dequeuniversity.com/rules/axe/4.10/aria-hidden-body).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "headings": [],
                            "items": [],
                            "type": "table"
                        }
                    },
                    "bootup-time": {
                        "id": "bootup-time",
                        "title": "JavaScript execution time",
                        "description": "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to reduce Javascript execution time](https://developer.chrome.com/docs/lighthouse/performance/bootup-time/).",
                        "score": 1,
                        "scoreDisplayMode": "informative",
                        "displayValue": "0.9 s",
                        "metricSavings": {
                            "TBT": 350
                        },
                        "details": {
                            "summary": {
                                "wastedMs": 857.7529999999958
                            },
                            "headings": [
                                {
                                    "label": "URL",
                                    "key": "url",
                                    "valueType": "url"
                                },
                                {
                                    "key": "total",
                                    "label": "Total CPU Time",
                                    "valueType": "ms",
                                    "granularity": 1
                                },
                                {
                                    "granularity": 1,
                                    "label": "Script Evaluation",
                                    "valueType": "ms",
                                    "key": "scripting"
                                },
                                {
                                    "key": "scriptParseCompile",
                                    "label": "Script Parse",
                                    "granularity": 1,
                                    "valueType": "ms"
                                }
                            ],
                            "items": [
                                {
                                    "total": 862.4459999999962,
                                    "url": "https://takeuforward.org/static/js/main.e1dada2b.js",
                                    "scripting": 567.9829999999961,
                                    "scriptParseCompile": 72.673
                                },
                                {
                                    "scriptParseCompile": 5.295,
                                    "total": 156.8549999999998,
                                    "scripting": 150.3279999999998,
                                    "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0"
                                },
                                {
                                    "scripting": 1.774,
                                    "total": 103.09299999999999,
                                    "scriptParseCompile": 0.396,
                                    "url": "https://takeuforward.org/"
                                },
                                {
                                    "total": 100.38900000000041,
                                    "scriptParseCompile": 0,
                                    "scripting": 4.504999999999997,
                                    "url": "Unattributable"
                                },
                                {
                                    "scriptParseCompile": 3.428,
                                    "total": 55.76899999999996,
                                    "scripting": 51.37099999999997,
                                    "url": "https://checkout.razorpay.com/v1/checkout.js"
                                }
                            ],
                            "sortedBy": [
                                "total"
                            ],
                            "type": "table"
                        },
                        "numericValue": 857.7529999999958,
                        "numericUnit": "millisecond"
                    },
                    "frame-title": {
                        "id": "frame-title",
                        "title": "`<frame>` or `<iframe>` elements have a title",
                        "description": "Screen reader users rely on frame titles to describe the contents of frames. [Learn more about frame titles](https://dequeuniversity.com/rules/axe/4.10/frame-title).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "video-caption": {
                        "id": "video-caption",
                        "title": "`<video>` elements contain a `<track>` element with `[kind=\"captions\"]`",
                        "description": "When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more about video captions](https://dequeuniversity.com/rules/axe/4.10/video-caption).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "inspector-issues": {
                        "id": "inspector-issues",
                        "title": "No issues in the `Issues` panel in Chrome Devtools",
                        "description": "Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems. They can come from network request failures, insufficient security controls, and other browser concerns. Open up the Issues panel in Chrome DevTools for more details on each issue.",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "items": [],
                            "headings": [],
                            "type": "table"
                        }
                    },
                    "image-redundant-alt": {
                        "id": "image-redundant-alt",
                        "title": "Image elements do not have `[alt]` attributes that are redundant text.",
                        "description": "Informative elements should aim for short, descriptive alternative text. Alternative text that is exactly the same as the text adjacent to the link or image is potentially confusing for screen reader users, because the text will be read twice. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.10/image-redundant-alt).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "type": "table",
                            "items": [],
                            "headings": []
                        }
                    },
                    "doctype": {
                        "id": "doctype",
                        "title": "Page has the HTML doctype",
                        "description": "Specifying a doctype prevents the browser from switching to quirks-mode. [Learn more about the doctype declaration](https://developer.chrome.com/docs/lighthouse/best-practices/doctype/).",
                        "score": 1,
                        "scoreDisplayMode": "binary"
                    },
                    "meta-refresh": {
                        "id": "meta-refresh",
                        "title": "The document does not use `<meta http-equiv=\"refresh\">`",
                        "description": "Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more about the refresh meta tag](https://dequeuniversity.com/rules/axe/4.10/meta-refresh).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "aria-required-parent": {
                        "id": "aria-required-parent",
                        "title": "`[role]`s are contained by their required parent element",
                        "description": "Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more about ARIA roles and required parent element](https://dequeuniversity.com/rules/axe/4.10/aria-required-parent).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
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
                                            "bottom": 0,
                                            "top": 0,
                                            "height": 0,
                                            "right": 0,
                                            "width": 0
                                        },
                                        "selector": "div.px-5 > div.flex > div.flex > a.btn-brand-2",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,4,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,A",
                                        "lhId": "1-43-A",
                                        "nodeLabel": "Open in New Tab",
                                        "type": "node",
                                        "snippet": "<a target=\"_blank\" rel=\"noreferrer\" class=\"btn-brand-2 md:text-[16px] text-[8px]\">"
                                    }
                                },
                                {
                                    "node": {
                                        "type": "node",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,8,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,A",
                                        "lhId": "1-44-A",
                                        "selector": "div.px-5 > div.flex > div.flex > a.btn-brand-2",
                                        "boundingRect": {
                                            "height": 0,
                                            "left": 0,
                                            "top": 0,
                                            "right": 0,
                                            "bottom": 0,
                                            "width": 0
                                        },
                                        "snippet": "<a target=\"_blank\" rel=\"noreferrer\" class=\"btn-brand-2 md:text-[16px] text-[8px]\">",
                                        "nodeLabel": "Open in New Tab"
                                    }
                                }
                            ],
                            "type": "table",
                            "headings": [
                                {
                                    "valueType": "node",
                                    "label": "Uncrawlable Link",
                                    "key": "node"
                                }
                            ]
                        }
                    },
                    "uses-responsive-images": {
                        "id": "uses-responsive-images",
                        "title": "Properly size images",
                        "description": "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn how to size images](https://developer.chrome.com/docs/lighthouse/performance/uses-responsive-images/).",
                        "score": 0.5,
                        "scoreDisplayMode": "metricSavings",
                        "displayValue": "Potential savings of 758 KiB",
                        "metricSavings": {
                            "LCP": 0,
                            "FCP": 0
                        },
                        "details": {
                            "sortedBy": [
                                "wastedBytes"
                            ],
                            "overallSavingsMs": 0,
                            "headings": [
                                {
                                    "key": "node",
                                    "valueType": "node"
                                },
                                {
                                    "valueType": "url",
                                    "label": "URL",
                                    "key": "url"
                                },
                                {
                                    "valueType": "bytes",
                                    "label": "Resource Size",
                                    "key": "totalBytes"
                                },
                                {
                                    "valueType": "bytes",
                                    "label": "Potential Savings",
                                    "key": "wastedBytes"
                                }
                            ],
                            "overallSavingsBytes": 776151,
                            "debugData": {
                                "type": "debugdata",
                                "metricSavings": {
                                    "FCP": 0,
                                    "LCP": 0
                                }
                            },
                            "items": [
                                {
                                    "totalBytes": 133198,
                                    "wastedBytes": 131869,
                                    "node": {
                                        "type": "node",
                                        "lhId": "1-83-IMG",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "nodeLabel": "img",
                                        "boundingRect": {
                                            "bottom": 3244,
                                            "right": 556,
                                            "left": 516,
                                            "width": 40,
                                            "height": 40,
                                            "top": 3204
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/id_photo_white_compressed-Gaurav%2…\" alt=\"img\">"
                                    },
                                    "wastedPercent": 99.00249376558602,
                                    "url": "https://static.takeuforward.org/content/id_photo_white_compressed-Gaurav%20Poosarla-BZGWU5pZ"
                                },
                                {
                                    "url": "https://static.takeuforward.org/content/K-Sanketh-kumar-DfeETlQ3",
                                    "totalBytes": 125675,
                                    "wastedBytes": 124577,
                                    "wastedPercent": 99.12663755458514,
                                    "node": {
                                        "boundingRect": {
                                            "left": 1386,
                                            "height": 40,
                                            "bottom": 3244,
                                            "width": 40,
                                            "right": 1426,
                                            "top": 3204
                                        },
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/K-Sanketh-kumar-DfeETlQ3\" alt=\"img\">",
                                        "nodeLabel": "img",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,3,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "lhId": "1-85-IMG",
                                        "type": "node"
                                    }
                                },
                                {
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,11,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "lhId": "1-93-IMG",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "nodeLabel": "img",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Avish-Mittal--1MO7Fba\" alt=\"img\">",
                                        "boundingRect": {
                                            "top": 3204,
                                            "height": 40,
                                            "right": 4906,
                                            "width": 40,
                                            "bottom": 3244,
                                            "left": 4866
                                        },
                                        "type": "node"
                                    },
                                    "wastedPercent": 99,
                                    "url": "https://static.takeuforward.org/content/Avish-Mittal--1MO7Fba",
                                    "wastedBytes": 71441,
                                    "totalBytes": 72163
                                },
                                {
                                    "wastedPercent": 98.9501312335958,
                                    "node": {
                                        "type": "node",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Aniket-jyP64DXX\" alt=\"img\">",
                                        "lhId": "1-94-IMG",
                                        "boundingRect": {
                                            "height": 40,
                                            "top": 3182,
                                            "width": 40,
                                            "bottom": 3222,
                                            "right": 5341,
                                            "left": 5301
                                        },
                                        "nodeLabel": "img",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,12,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10"
                                    },
                                    "url": "https://static.takeuforward.org/content/Aniket-jyP64DXX",
                                    "totalBytes": 71148,
                                    "wastedBytes": 70401
                                },
                                {
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "type": "node",
                                        "lhId": "1-82-IMG",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Athang-Kulkarni-BkK4feX-\" alt=\"img\">",
                                        "nodeLabel": "img",
                                        "boundingRect": {
                                            "height": 40,
                                            "top": 3182,
                                            "left": 81,
                                            "bottom": 3222,
                                            "width": 40,
                                            "right": 121
                                        }
                                    },
                                    "totalBytes": 63176,
                                    "url": "https://static.takeuforward.org/content/Athang-Kulkarni-BkK4feX-",
                                    "wastedPercent": 99.24953095684803,
                                    "wastedBytes": 62702
                                },
                                {
                                    "wastedPercent": 98.31223628691983,
                                    "wastedBytes": 45454,
                                    "totalBytes": 46234,
                                    "url": "https://static.takeuforward.org/content/Aditya-Mane-D8T2NtA-",
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,7,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "nodeLabel": "img",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "type": "node",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Aditya-Mane-D8T2NtA-\" alt=\"img\">",
                                        "lhId": "1-89-IMG",
                                        "boundingRect": {
                                            "right": 3166,
                                            "top": 3204,
                                            "height": 40,
                                            "bottom": 3244,
                                            "width": 40,
                                            "left": 3126
                                        }
                                    }
                                },
                                {
                                    "totalBytes": 43688,
                                    "wastedBytes": 43105,
                                    "wastedPercent": 98.66666666666667,
                                    "node": {
                                        "lhId": "1-84-IMG",
                                        "nodeLabel": "img",
                                        "boundingRect": {
                                            "bottom": 3222,
                                            "left": 951,
                                            "right": 991,
                                            "height": 40,
                                            "width": 40,
                                            "top": 3182
                                        },
                                        "type": "node",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Prajwal-Shah-xZVUY0qj\" alt=\"img\">",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10"
                                    },
                                    "url": "https://static.takeuforward.org/content/Prajwal-Shah-xZVUY0qj"
                                },
                                {
                                    "totalBytes": 35665,
                                    "url": "https://takeuforward.org/static/media/profile.d6f93e1529485b96f009.jpg",
                                    "wastedBytes": 35278,
                                    "wastedPercent": 98.91493055555556,
                                    "node": {
                                        "nodeLabel": "striver",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,2,DIV,1,DIV,0,DIV,0,IMG",
                                        "snippet": "<img src=\"/static/media/profile.d6f93e1529485b96f009.jpg\" alt=\"striver\" class=\"sm:w-[60px] w-[40px] sm:h-[60px] h-[40px] rounded-full\">",
                                        "type": "node",
                                        "lhId": "1-97-IMG",
                                        "boundingRect": {
                                            "left": 692,
                                            "width": 60,
                                            "bottom": 3917,
                                            "right": 752,
                                            "top": 3857,
                                            "height": 60
                                        },
                                        "selector": "div.flex > div.sm:p-10 > div.flex > img.sm:w-[60px]"
                                    }
                                },
                                {
                                    "node": {
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "lhId": "1-90-IMG",
                                        "nodeLabel": "img",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/IMG20221028085802~2%20-%20KUNDAN%2…\" alt=\"img\">",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,8,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "boundingRect": {
                                            "top": 3215,
                                            "height": 40,
                                            "bottom": 3255,
                                            "right": 3600,
                                            "left": 3561,
                                            "width": 39
                                        },
                                        "type": "node"
                                    },
                                    "wastedBytes": 33926,
                                    "totalBytes": 34373,
                                    "url": "https://static.takeuforward.org/content/IMG20221028085802~2%20-%20KUNDAN%20KUMAR-JG4BAazS",
                                    "wastedPercent": 98.7
                                },
                                {
                                    "node": {
                                        "type": "node",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Lalit-sharma-OUIHbXCu\" alt=\"img\">",
                                        "nodeLabel": "img",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,9,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "boundingRect": {
                                            "right": 4036,
                                            "bottom": 3244,
                                            "height": 40,
                                            "left": 3996,
                                            "top": 3204,
                                            "width": 40
                                        },
                                        "lhId": "1-91-IMG",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10"
                                    },
                                    "totalBytes": 30176,
                                    "wastedPercent": 98.66666666666667,
                                    "wastedBytes": 29774,
                                    "url": "https://static.takeuforward.org/content/Lalit-sharma-OUIHbXCu"
                                },
                                {
                                    "totalBytes": 21736,
                                    "wastedPercent": 98.22222222222223,
                                    "wastedBytes": 21350,
                                    "url": "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
                                    "node": {
                                        "lhId": "1-99-IMG",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,5,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,1,IMG",
                                        "selector": "div.flex > div.max-w-6xl > div.flex > img.w-10",
                                        "boundingRect": {
                                            "height": 40,
                                            "bottom": 5326,
                                            "right": 688,
                                            "left": 648,
                                            "width": 40,
                                            "top": 5286
                                        },
                                        "snippet": "<img class=\"w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800\" src=\"https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.…\" alt=\"Image Description\">",
                                        "type": "node",
                                        "nodeLabel": "Image Description"
                                    }
                                },
                                {
                                    "wastedBytes": 21056,
                                    "url": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
                                    "wastedPercent": 98.22222222222223,
                                    "totalBytes": 21437,
                                    "node": {
                                        "type": "node",
                                        "selector": "div.flex > div.max-w-6xl > div.flex > img.w-10",
                                        "nodeLabel": "Image Description",
                                        "boundingRect": {
                                            "right": 656,
                                            "width": 40,
                                            "left": 616,
                                            "bottom": 5326,
                                            "top": 5286,
                                            "height": 40
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,5,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,IMG",
                                        "lhId": "1-98-IMG",
                                        "snippet": "<img class=\"w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800\" src=\"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.…\" alt=\"Image Description\">"
                                    }
                                },
                                {
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,13,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "type": "node",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "nodeLabel": "img",
                                        "lhId": "1-95-IMG",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Madhab-Kafle-rhMxLzaA\" alt=\"img\">",
                                        "boundingRect": {
                                            "top": 3204,
                                            "right": 5776,
                                            "left": 5736,
                                            "height": 40,
                                            "width": 40,
                                            "bottom": 3244
                                        }
                                    },
                                    "wastedPercent": 98.70967741935483,
                                    "url": "https://static.takeuforward.org/content/Madhab-Kafle-rhMxLzaA",
                                    "totalBytes": 20943,
                                    "wastedBytes": 20673
                                },
                                {
                                    "node": {
                                        "snippet": "<img class=\"w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800\" src=\"https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.…\" alt=\"Image Description\">",
                                        "nodeLabel": "Image Description",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,5,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,2,IMG",
                                        "boundingRect": {
                                            "bottom": 5326,
                                            "height": 40,
                                            "left": 680,
                                            "top": 5286,
                                            "width": 40,
                                            "right": 720
                                        },
                                        "selector": "div.flex > div.max-w-6xl > div.flex > img.w-10",
                                        "type": "node",
                                        "lhId": "1-100-IMG"
                                    },
                                    "wastedBytes": 17189,
                                    "wastedPercent": 98.22222222222223,
                                    "url": "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
                                    "totalBytes": 17500
                                },
                                {
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,5,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "nodeLabel": "img",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "type": "node",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Anubhuti-Pandey-couG3Rtw\" alt=\"img\">",
                                        "boundingRect": {
                                            "right": 2296,
                                            "left": 2256,
                                            "top": 3182,
                                            "bottom": 3222,
                                            "width": 40,
                                            "height": 40
                                        },
                                        "lhId": "1-87-IMG"
                                    },
                                    "url": "https://static.takeuforward.org/content/Anubhuti-Pandey-couG3Rtw",
                                    "wastedPercent": 99.2248062015504,
                                    "wastedBytes": 16427,
                                    "totalBytes": 16555
                                },
                                {
                                    "wastedBytes": 12358,
                                    "wastedPercent": 99.00990099009901,
                                    "totalBytes": 12482,
                                    "node": {
                                        "lhId": "1-88-IMG",
                                        "boundingRect": {
                                            "left": 2691,
                                            "bottom": 3222,
                                            "right": 2731,
                                            "top": 3182,
                                            "height": 40,
                                            "width": 40
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,6,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "type": "node",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "nodeLabel": "img",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/IMG_7930%20-%20Sudipta%20Basak-28W…\" alt=\"img\">"
                                    },
                                    "url": "https://static.takeuforward.org/content/IMG_7930%20-%20Sudipta%20Basak-28We2pgU"
                                },
                                {
                                    "wastedPercent": 98.66666666666667,
                                    "wastedBytes": 12339,
                                    "url": "https://static.takeuforward.org/content/Sankalp-jain-eLecJpHl",
                                    "totalBytes": 12506,
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,4,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "lhId": "1-86-IMG",
                                        "type": "node",
                                        "boundingRect": {
                                            "top": 3182,
                                            "height": 40,
                                            "bottom": 3222,
                                            "left": 1821,
                                            "right": 1861,
                                            "width": 40
                                        },
                                        "nodeLabel": "img",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Sankalp-jain-eLecJpHl\" alt=\"img\">"
                                    }
                                },
                                {
                                    "totalBytes": 6316,
                                    "url": "https://static.takeuforward.org/content/IMG20240322132442%20-%20JYOTI%20PATIL-BhG5Ptn0",
                                    "wastedBytes": 6232,
                                    "wastedPercent": 98.66666666666667,
                                    "node": {
                                        "lhId": "1-92-IMG",
                                        "boundingRect": {
                                            "width": 40,
                                            "right": 4471,
                                            "left": 4431,
                                            "top": 3182,
                                            "height": 40,
                                            "bottom": 3222
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,10,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "type": "node",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/IMG20240322132442%20-%20JYOTI%20PA…\" alt=\"img\">",
                                        "nodeLabel": "img"
                                    }
                                }
                            ],
                            "type": "opportunity"
                        },
                        "numericValue": 0,
                        "numericUnit": "millisecond"
                    },
                    "empty-heading": {
                        "id": "empty-heading",
                        "title": "All heading elements contain content.",
                        "description": "A heading with no content or inaccessible text prevent screen reader users from accessing information on the page's structure. [Learn more about headings](https://dequeuniversity.com/rules/axe/4.10/empty-heading).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "aria-toggle-field-name": {
                        "id": "aria-toggle-field-name",
                        "title": "ARIA toggle fields have accessible names",
                        "description": "When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about toggle fields](https://dequeuniversity.com/rules/axe/4.10/aria-toggle-field-name).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "image-size-responsive": {
                        "id": "image-size-responsive",
                        "title": "Serves images with appropriate resolution",
                        "description": "Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity. [Learn how to provide responsive images](https://web.dev/articles/serve-responsive-images).",
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
                        "description": "Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more about form element labels](https://dequeuniversity.com/rules/axe/4.10/label).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "object-alt": {
                        "id": "object-alt",
                        "title": "`<object>` elements have alternate text",
                        "description": "Screen readers cannot translate non-text content. Adding alternate text to `<object>` elements helps screen readers convey meaning to users. [Learn more about alt text for `object` elements](https://dequeuniversity.com/rules/axe/4.10/object-alt).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "link-name": {
                        "id": "link-name",
                        "title": "Links do not have a discernible name",
                        "description": "Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn how to make links accessible](https://dequeuniversity.com/rules/axe/4.10/link-name).",
                        "score": 0,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "type": "table",
                            "debugData": {
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
                                ],
                                "type": "debugdata"
                            },
                            "headings": [
                                {
                                    "key": "node",
                                    "subItemsHeading": {
                                        "valueType": "node",
                                        "key": "relatedNode"
                                    },
                                    "label": "Failing Elements",
                                    "valueType": "node"
                                }
                            ],
                            "items": [
                                {
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,0,DIV,0,DIV,0,A",
                                        "selector": "div.flex > div.fixed > div.relative > a.flex",
                                        "lhId": "1-34-A",
                                        "explanation": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute",
                                        "type": "node",
                                        "snippet": "<a class=\"flex   items-center gap-2\" href=\"/\">",
                                        "nodeLabel": "div.flex > div.fixed > div.relative > a.flex",
                                        "boundingRect": {
                                            "left": 12,
                                            "width": 125,
                                            "top": 24,
                                            "height": 26,
                                            "right": 137,
                                            "bottom": 50
                                        }
                                    }
                                }
                            ]
                        }
                    },
                    "total-blocking-time": {
                        "id": "total-blocking-time",
                        "title": "Total Blocking Time",
                        "description": "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
                        "score": 0.46,
                        "scoreDisplayMode": "numeric",
                        "displayValue": "370 ms",
                        "numericValue": 372.4999999999996,
                        "numericUnit": "millisecond"
                    },
                    "http-status-code": {
                        "id": "http-status-code",
                        "title": "Page has successful HTTP status code",
                        "description": "Pages with unsuccessful HTTP status codes may not be indexed properly. [Learn more about HTTP status codes](https://developer.chrome.com/docs/lighthouse/seo/http-status-code/).",
                        "score": 1,
                        "scoreDisplayMode": "binary"
                    },
                    "landmark-one-main": {
                        "id": "landmark-one-main",
                        "title": "Document has a main landmark.",
                        "description": "One main landmark helps screen reader users navigate a web page. [Learn more about landmarks](https://dequeuniversity.com/rules/axe/4.10/landmark-one-main).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "non-composited-animations": {
                        "id": "non-composited-animations",
                        "title": "Avoid non-composited animations",
                        "description": "Animations which are not composited can be janky and increase CLS. [Learn how to avoid non-composited animations](https://developer.chrome.com/docs/lighthouse/performance/non-composited-animations/)",
                        "score": 1,
                        "scoreDisplayMode": "informative",
                        "displayValue": "23 animated elements found",
                        "metricSavings": {
                            "CLS": 0
                        },
                        "details": {
                            "headings": [
                                {
                                    "label": "Element",
                                    "valueType": "node",
                                    "key": "node",
                                    "subItemsHeading": {
                                        "key": "failureReason",
                                        "valueType": "text"
                                    }
                                },
                                {
                                    "label": "Name",
                                    "valueType": "text",
                                    "key": null,
                                    "subItemsHeading": {
                                        "valueType": "text",
                                        "key": "animation"
                                    }
                                }
                            ],
                            "type": "table",
                            "items": [
                                {
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "animation": "border-right-color",
                                                "failureReason": "Unsupported CSS Property: border-right-color"
                                            },
                                            {
                                                "animation": "border-top-color",
                                                "failureReason": "Unsupported CSS Property: border-top-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: background-color",
                                                "animation": "background-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: color",
                                                "animation": "color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: border-bottom-color",
                                                "animation": "border-bottom-color"
                                            },
                                            {
                                                "animation": "border-left-color",
                                                "failureReason": "Unsupported CSS Property: border-left-color"
                                            }
                                        ]
                                    },
                                    "node": {
                                        "snippet": "<div class=\"p-10 flex rounded-xl dark:bg-[#ffffff08] dark:border-zinc-800 border borde…\">",
                                        "lhId": "page-5-DIV",
                                        "type": "node",
                                        "boundingRect": {
                                            "left": 1780,
                                            "bottom": 3266,
                                            "right": 2165,
                                            "top": 2974,
                                            "height": 292,
                                            "width": 385
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,4,DIV,0,DIV",
                                        "nodeLabel": "Despite facing rejection in three final coding interviews, I persevered. Strive…",
                                        "selector": "div.swiper > div#swiper-wrapper-ee71d2a4e46bbaa1 > div.swiper-slide > div.p-10"
                                    }
                                },
                                {
                                    "node": {
                                        "snippet": "<div class=\"p-10 flex rounded-xl dark:bg-[#ffffff08] dark:border-zinc-800 border borde…\">",
                                        "selector": "div.swiper > div#swiper-wrapper-ee71d2a4e46bbaa1 > div.swiper-slide > div.p-10",
                                        "nodeLabel": "Striver's SDE Sheet and takeUforward's resources were instrumental in securing …",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,5,DIV,0,DIV",
                                        "boundingRect": {
                                            "right": 2600,
                                            "height": 292,
                                            "top": 2974,
                                            "left": 2215,
                                            "width": 385,
                                            "bottom": 3266
                                        },
                                        "lhId": "page-6-DIV",
                                        "type": "node"
                                    },
                                    "subItems": {
                                        "items": [
                                            {
                                                "failureReason": "Unsupported CSS Property: border-right-color",
                                                "animation": "border-right-color"
                                            },
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
                                                "failureReason": "Unsupported CSS Property: border-bottom-color",
                                                "animation": "border-bottom-color"
                                            },
                                            {
                                                "animation": "border-left-color",
                                                "failureReason": "Unsupported CSS Property: border-left-color"
                                            }
                                        ],
                                        "type": "subitems"
                                    }
                                },
                                {
                                    "node": {
                                        "nodeLabel": "I utilized takeUforward's DSA sheet, particularly focusing on math, array, and …",
                                        "lhId": "page-7-DIV",
                                        "selector": "div.swiper > div#swiper-wrapper-ee71d2a4e46bbaa1 > div.swiper-slide > div.p-10",
                                        "type": "node",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,10,DIV,0,DIV",
                                        "boundingRect": {
                                            "height": 292,
                                            "width": 385,
                                            "left": 4390,
                                            "top": 2974,
                                            "bottom": 3266,
                                            "right": 4775
                                        },
                                        "snippet": "<div class=\"p-10 flex rounded-xl dark:bg-[#ffffff08] dark:border-zinc-800 border borde…\">"
                                    },
                                    "subItems": {
                                        "items": [
                                            {
                                                "failureReason": "Unsupported CSS Property: border-right-color",
                                                "animation": "border-right-color"
                                            },
                                            {
                                                "animation": "border-top-color",
                                                "failureReason": "Unsupported CSS Property: border-top-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: background-color",
                                                "animation": "background-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: color",
                                                "animation": "color"
                                            },
                                            {
                                                "animation": "border-bottom-color",
                                                "failureReason": "Unsupported CSS Property: border-bottom-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: border-left-color",
                                                "animation": "border-left-color"
                                            }
                                        ],
                                        "type": "subitems"
                                    }
                                },
                                {
                                    "node": {
                                        "type": "node",
                                        "lhId": "page-8-A",
                                        "snippet": "<a aria-label=\"YouTube: https://www.youtube.com/channel/UCJskGeByzRRSvmOyZOz61ig\" class=\"px-1.5 py-2 rounded-full border-zinc-300 dark:border-[#f0f0f060] border-2 …\" href=\"https://www.youtube.com/channel/UCJskGeByzRRSvmOyZOz61ig\" target=\"_blank\">",
                                        "nodeLabel": "YouTube: https://www.youtube.com/channel/UCJskGeByzRRSvmOyZOz61ig",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,2,DIV,2,FOOTER,0,DIV,0,SPAN,2,DIV,3,A",
                                        "boundingRect": {
                                            "height": 30,
                                            "top": 6086,
                                            "bottom": 6116,
                                            "right": 190,
                                            "width": 31,
                                            "left": 159
                                        },
                                        "selector": "div.w-80 > span.flex > div.flex > a.px-1.5"
                                    },
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "failureReason": "Unsupported CSS Property: border-right-color",
                                                "animation": "border-right-color"
                                            },
                                            {
                                                "animation": "border-top-color",
                                                "failureReason": "Unsupported CSS Property: border-top-color"
                                            },
                                            {
                                                "animation": "border-bottom-color",
                                                "failureReason": "Unsupported CSS Property: border-bottom-color"
                                            },
                                            {
                                                "animation": "border-left-color",
                                                "failureReason": "Unsupported CSS Property: border-left-color"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "subItems": {
                                        "items": [
                                            {
                                                "failureReason": "Unsupported CSS Property: background-color",
                                                "animation": "background-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: color",
                                                "animation": "color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: box-shadow",
                                                "animation": "box-shadow"
                                            }
                                        ],
                                        "type": "subitems"
                                    },
                                    "node": {
                                        "nodeLabel": "0\n\nLinkedIn",
                                        "selector": "div.grid > a.bg-gradient-to-tl > div.bg-gradient-to-tl > div.z-30",
                                        "boundingRect": {
                                            "width": 151,
                                            "bottom": 1725,
                                            "top": 1534,
                                            "left": 1129,
                                            "height": 191,
                                            "right": 1280
                                        },
                                        "type": "node",
                                        "snippet": "<div class=\"z-30 group transition-all ease-in-out duration-200 cursor-pointer hover:bg…\">",
                                        "lhId": "page-9-DIV",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,3,A,0,DIV,0,DIV"
                                    }
                                },
                                {
                                    "node": {
                                        "selector": "div.swiper > div#swiper-wrapper-ee71d2a4e46bbaa1 > div.swiper-slide > div.p-10",
                                        "snippet": "<div class=\"p-10 flex rounded-xl dark:bg-[#ffffff08] dark:border-zinc-800 border borde…\">",
                                        "type": "node",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,7,DIV,0,DIV",
                                        "nodeLabel": "I've been following takeUforward since the introduction of the SDE sheet. Pract…",
                                        "boundingRect": {
                                            "top": 2974,
                                            "bottom": 3288,
                                            "left": 3085,
                                            "width": 385,
                                            "right": 3470,
                                            "height": 314
                                        },
                                        "lhId": "page-10-DIV"
                                    },
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "animation": "border-right-color",
                                                "failureReason": "Unsupported CSS Property: border-right-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: border-top-color",
                                                "animation": "border-top-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: background-color",
                                                "animation": "background-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: color",
                                                "animation": "color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: border-bottom-color",
                                                "animation": "border-bottom-color"
                                            },
                                            {
                                                "animation": "border-left-color",
                                                "failureReason": "Unsupported CSS Property: border-left-color"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "node": {
                                        "selector": "div.w-80 > span.flex > div.flex > a.p-2",
                                        "lhId": "page-11-A",
                                        "boundingRect": {
                                            "width": 31,
                                            "height": 32,
                                            "right": 151,
                                            "left": 120,
                                            "bottom": 6117,
                                            "top": 6085
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,2,DIV,2,FOOTER,0,DIV,0,SPAN,2,DIV,2,A",
                                        "type": "node",
                                        "snippet": "<a aria-label=\"Instagram: https://www.instagram.com/striver_79/\" class=\"p-2 rounded-full border-zinc-300 dark:border-[#f0f0f060] border-2 group ho…\" href=\"https://www.instagram.com/striver_79/\" target=\"_blank\">",
                                        "nodeLabel": "Instagram: https://www.instagram.com/striver_79/"
                                    },
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "animation": "border-right-color",
                                                "failureReason": "Unsupported CSS Property: border-right-color"
                                            },
                                            {
                                                "animation": "border-top-color",
                                                "failureReason": "Unsupported CSS Property: border-top-color"
                                            },
                                            {
                                                "animation": "border-bottom-color",
                                                "failureReason": "Unsupported CSS Property: border-bottom-color"
                                            },
                                            {
                                                "animation": "border-left-color",
                                                "failureReason": "Unsupported CSS Property: border-left-color"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "node": {
                                        "type": "node",
                                        "nodeLabel": "DP and Graphs? Used to terrify me! I'd skip problems related to them without a …",
                                        "lhId": "page-12-DIV",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV",
                                        "selector": "div.swiper > div#swiper-wrapper-ee71d2a4e46bbaa1 > div.swiper-slide > div.p-10",
                                        "snippet": "<div class=\"p-10 flex rounded-xl dark:bg-[#ffffff08] dark:border-zinc-800 border borde…\">",
                                        "boundingRect": {
                                            "bottom": 3266,
                                            "width": 385,
                                            "left": 40,
                                            "top": 2974,
                                            "height": 292,
                                            "right": 425
                                        }
                                    },
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "animation": "border-right-color",
                                                "failureReason": "Unsupported CSS Property: border-right-color"
                                            },
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
                                                "failureReason": "Unsupported CSS Property: border-bottom-color",
                                                "animation": "border-bottom-color"
                                            },
                                            {
                                                "animation": "border-left-color",
                                                "failureReason": "Unsupported CSS Property: border-left-color"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "node": {
                                        "boundingRect": {
                                            "height": 336,
                                            "left": 3520,
                                            "right": 3905,
                                            "bottom": 3310,
                                            "top": 2974,
                                            "width": 385
                                        },
                                        "type": "node",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,8,DIV,0,DIV",
                                        "snippet": "<div class=\"p-10 flex rounded-xl dark:bg-[#ffffff08] dark:border-zinc-800 border borde…\">",
                                        "selector": "div.swiper > div#swiper-wrapper-ee71d2a4e46bbaa1 > div.swiper-slide > div.p-10",
                                        "nodeLabel": "TakeUforward played a pivotal role in my transition from a service-based to a p…",
                                        "lhId": "page-13-DIV"
                                    },
                                    "subItems": {
                                        "items": [
                                            {
                                                "failureReason": "Unsupported CSS Property: border-right-color",
                                                "animation": "border-right-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: border-top-color",
                                                "animation": "border-top-color"
                                            },
                                            {
                                                "animation": "background-color",
                                                "failureReason": "Unsupported CSS Property: background-color"
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
                                            }
                                        ],
                                        "type": "subitems"
                                    }
                                },
                                {
                                    "subItems": {
                                        "items": [
                                            {
                                                "animation": "border-right-color",
                                                "failureReason": "Unsupported CSS Property: border-right-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: border-top-color",
                                                "animation": "border-top-color"
                                            },
                                            {
                                                "animation": "background-color",
                                                "failureReason": "Unsupported CSS Property: background-color"
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
                                                "failureReason": "Unsupported CSS Property: border-left-color",
                                                "animation": "border-left-color"
                                            }
                                        ],
                                        "type": "subitems"
                                    },
                                    "node": {
                                        "type": "node",
                                        "lhId": "page-14-DIV",
                                        "nodeLabel": "Striver's A-Z sheet was the single most valuable resource I used during my job …",
                                        "snippet": "<div class=\"p-10 flex rounded-xl dark:bg-[#ffffff08] dark:border-zinc-800 border borde…\">",
                                        "selector": "div.swiper > div#swiper-wrapper-ee71d2a4e46bbaa1 > div.swiper-slide > div.p-10",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,11,DIV,0,DIV",
                                        "boundingRect": {
                                            "top": 2974,
                                            "width": 385,
                                            "height": 314,
                                            "left": 4825,
                                            "right": 5210,
                                            "bottom": 3288
                                        }
                                    }
                                },
                                {
                                    "node": {
                                        "lhId": "page-15-DIV",
                                        "boundingRect": {
                                            "left": 1345,
                                            "height": 314,
                                            "width": 385,
                                            "right": 1730,
                                            "bottom": 3288,
                                            "top": 2974
                                        },
                                        "nodeLabel": "Striver's videos provided immense motivation and knowledge throughout my coding…",
                                        "snippet": "<div class=\"p-10 flex rounded-xl dark:bg-[#ffffff08] dark:border-zinc-800 border borde…\">",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,3,DIV,0,DIV",
                                        "selector": "div.swiper > div#swiper-wrapper-ee71d2a4e46bbaa1 > div.swiper-slide > div.p-10",
                                        "type": "node"
                                    },
                                    "subItems": {
                                        "items": [
                                            {
                                                "animation": "border-right-color",
                                                "failureReason": "Unsupported CSS Property: border-right-color"
                                            },
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
                                            }
                                        ],
                                        "type": "subitems"
                                    }
                                },
                                {
                                    "node": {
                                        "nodeLabel": "Twitter: https://bit.ly/32QbLD6",
                                        "type": "node",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,2,DIV,2,FOOTER,0,DIV,0,SPAN,2,DIV,1,A",
                                        "lhId": "page-16-A",
                                        "boundingRect": {
                                            "width": 32,
                                            "bottom": 6117,
                                            "left": 80,
                                            "right": 112,
                                            "top": 6085,
                                            "height": 32
                                        },
                                        "snippet": "<a aria-label=\"Twitter: https://bit.ly/32QbLD6\" class=\"p-2 rounded-full border-zinc-300 dark:border-[#f0f0f060] border-2 group ho…\" href=\"https://bit.ly/32QbLD6\" target=\"_blank\">",
                                        "selector": "div.w-80 > span.flex > div.flex > a.p-2"
                                    },
                                    "subItems": {
                                        "items": [
                                            {
                                                "failureReason": "Unsupported CSS Property: border-right-color",
                                                "animation": "border-right-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: border-top-color",
                                                "animation": "border-top-color"
                                            },
                                            {
                                                "animation": "border-bottom-color",
                                                "failureReason": "Unsupported CSS Property: border-bottom-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: border-left-color",
                                                "animation": "border-left-color"
                                            }
                                        ],
                                        "type": "subitems"
                                    }
                                },
                                {
                                    "node": {
                                        "lhId": "page-17-A",
                                        "selector": "div.w-80 > span.flex > div.flex > a.p-2",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,2,DIV,2,FOOTER,0,DIV,0,SPAN,2,DIV,0,A",
                                        "snippet": "<a aria-label=\"LinkedIn: https://www.linkedin.com/company/takeuforward/\" class=\"p-2 rounded-full border-zinc-300 dark:border-[#f0f0f060] border-2 group ho…\" href=\"https://www.linkedin.com/company/takeuforward/\" target=\"_blank\">",
                                        "nodeLabel": "LinkedIn: https://www.linkedin.com/company/takeuforward/",
                                        "type": "node",
                                        "boundingRect": {
                                            "height": 32,
                                            "top": 6085,
                                            "right": 72,
                                            "bottom": 6117,
                                            "width": 32,
                                            "left": 40
                                        }
                                    },
                                    "subItems": {
                                        "items": [
                                            {
                                                "failureReason": "Unsupported CSS Property: border-right-color",
                                                "animation": "border-right-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: border-top-color",
                                                "animation": "border-top-color"
                                            },
                                            {
                                                "animation": "border-bottom-color",
                                                "failureReason": "Unsupported CSS Property: border-bottom-color"
                                            },
                                            {
                                                "animation": "border-left-color",
                                                "failureReason": "Unsupported CSS Property: border-left-color"
                                            }
                                        ],
                                        "type": "subitems"
                                    }
                                },
                                {
                                    "subItems": {
                                        "items": [
                                            {
                                                "animation": "border-right-color",
                                                "failureReason": "Unsupported CSS Property: border-right-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: border-top-color",
                                                "animation": "border-top-color"
                                            },
                                            {
                                                "animation": "background-color",
                                                "failureReason": "Unsupported CSS Property: background-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: color",
                                                "animation": "color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: border-bottom-color",
                                                "animation": "border-bottom-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: border-left-color",
                                                "animation": "border-left-color"
                                            }
                                        ],
                                        "type": "subitems"
                                    },
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,9,DIV,0,DIV",
                                        "selector": "div.swiper > div#swiper-wrapper-ee71d2a4e46bbaa1 > div.swiper-slide > div.p-10",
                                        "boundingRect": {
                                            "bottom": 3288,
                                            "width": 385,
                                            "height": 314,
                                            "top": 2974,
                                            "right": 4340,
                                            "left": 3955
                                        },
                                        "snippet": "<div class=\"p-10 flex rounded-xl dark:bg-[#ffffff08] dark:border-zinc-800 border borde…\">",
                                        "nodeLabel": "Coming from a mechanical engineering background, I found studying DSA particula…",
                                        "type": "node",
                                        "lhId": "page-18-DIV"
                                    }
                                },
                                {
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "failureReason": "Unsupported CSS Property: border-right-color",
                                                "animation": "border-right-color"
                                            },
                                            {
                                                "animation": "border-top-color",
                                                "failureReason": "Unsupported CSS Property: border-top-color"
                                            },
                                            {
                                                "animation": "background-color",
                                                "failureReason": "Unsupported CSS Property: background-color"
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
                                                "failureReason": "Unsupported CSS Property: border-left-color",
                                                "animation": "border-left-color"
                                            }
                                        ]
                                    },
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,12,DIV,0,DIV",
                                        "lhId": "page-19-DIV",
                                        "type": "node",
                                        "boundingRect": {
                                            "right": 5645,
                                            "left": 5260,
                                            "height": 292,
                                            "width": 385,
                                            "bottom": 3266,
                                            "top": 2974
                                        },
                                        "nodeLabel": "TakeUforward's guidance played a pivotal role in landing my first SWE job in 20…",
                                        "selector": "div.swiper > div#swiper-wrapper-ee71d2a4e46bbaa1 > div.swiper-slide > div.p-10",
                                        "snippet": "<div class=\"p-10 flex rounded-xl dark:bg-[#ffffff08] dark:border-zinc-800 border borde…\">"
                                    }
                                },
                                {
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "animation": "background-color",
                                                "failureReason": "Unsupported CSS Property: background-color"
                                            },
                                            {
                                                "animation": "color",
                                                "failureReason": "Unsupported CSS Property: color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: box-shadow",
                                                "animation": "box-shadow"
                                            }
                                        ]
                                    },
                                    "node": {
                                        "lhId": "page-20-DIV",
                                        "type": "node",
                                        "selector": "div.grid > a.bg-gradient-to-tl > div.bg-gradient-to-tl > div.z-30",
                                        "nodeLabel": "0\n\nInstagram",
                                        "boundingRect": {
                                            "height": 191,
                                            "left": 778,
                                            "bottom": 1725,
                                            "width": 163,
                                            "top": 1534,
                                            "right": 941
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,2,A,0,DIV,0,DIV",
                                        "snippet": "<div class=\"z-30 group transition-all ease-in-out duration-200 cursor-pointer hover:bg…\">"
                                    }
                                },
                                {
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "animation": "background-color",
                                                "failureReason": "Unsupported CSS Property: background-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: color",
                                                "animation": "color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: box-shadow",
                                                "animation": "box-shadow"
                                            }
                                        ]
                                    },
                                    "node": {
                                        "lhId": "page-21-DIV",
                                        "boundingRect": {
                                            "width": 152,
                                            "left": 92,
                                            "bottom": 1725,
                                            "right": 244,
                                            "top": 1534,
                                            "height": 191
                                        },
                                        "snippet": "<div class=\"z-30 group transition-all ease-in-out duration-200 cursor-pointer hover:bg…\">",
                                        "selector": "div.grid > a.bg-gradient-to-tl > div.bg-gradient-to-tl > div.z-30",
                                        "type": "node",
                                        "nodeLabel": "0\n\nYoutube",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,A,0,DIV,0,DIV"
                                    }
                                },
                                {
                                    "node": {
                                        "boundingRect": {
                                            "height": 292,
                                            "right": 1295,
                                            "left": 910,
                                            "width": 385,
                                            "bottom": 3266,
                                            "top": 2974
                                        },
                                        "selector": "div.swiper > div#swiper-wrapper-ee71d2a4e46bbaa1 > div.swiper-slide > div.p-10",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,2,DIV,0,DIV",
                                        "lhId": "page-22-DIV",
                                        "snippet": "<div class=\"p-10 flex rounded-xl dark:bg-[#ffffff08] dark:border-zinc-800 border borde…\">",
                                        "nodeLabel": "I was entirely new to the world of DSA and CP when I discovered Striver's chann…",
                                        "type": "node"
                                    },
                                    "subItems": {
                                        "items": [
                                            {
                                                "animation": "border-right-color",
                                                "failureReason": "Unsupported CSS Property: border-right-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: border-top-color",
                                                "animation": "border-top-color"
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
                                                "failureReason": "Unsupported CSS Property: border-bottom-color",
                                                "animation": "border-bottom-color"
                                            },
                                            {
                                                "animation": "border-left-color",
                                                "failureReason": "Unsupported CSS Property: border-left-color"
                                            }
                                        ],
                                        "type": "subitems"
                                    }
                                },
                                {
                                    "subItems": {
                                        "items": [
                                            {
                                                "failureReason": "Unsupported CSS Property: border-right-color",
                                                "animation": "border-right-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: border-top-color",
                                                "animation": "border-top-color"
                                            },
                                            {
                                                "animation": "background-color",
                                                "failureReason": "Unsupported CSS Property: background-color"
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
                                                "animation": "border-left-color",
                                                "failureReason": "Unsupported CSS Property: border-left-color"
                                            }
                                        ],
                                        "type": "subitems"
                                    },
                                    "node": {
                                        "selector": "div.swiper > div#swiper-wrapper-ee71d2a4e46bbaa1 > div.swiper-slide > div.p-10",
                                        "lhId": "page-23-DIV",
                                        "nodeLabel": "With no prior knowledge of programming or DSA, the takeUforward channel was ins…",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,1,DIV,0,DIV",
                                        "type": "node",
                                        "boundingRect": {
                                            "left": 475,
                                            "width": 385,
                                            "right": 860,
                                            "top": 2974,
                                            "bottom": 3288,
                                            "height": 314
                                        },
                                        "snippet": "<div class=\"p-10 flex rounded-xl dark:bg-[#ffffff08] dark:border-zinc-800 border borde…\">"
                                    }
                                },
                                {
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,6,DIV,0,DIV",
                                        "nodeLabel": "While I possessed coding skills, I felt lost when it came to interview preparat…",
                                        "snippet": "<div class=\"p-10 flex rounded-xl dark:bg-[#ffffff08] dark:border-zinc-800 border borde…\">",
                                        "selector": "div.swiper > div#swiper-wrapper-ee71d2a4e46bbaa1 > div.swiper-slide > div.p-10",
                                        "lhId": "page-24-DIV",
                                        "boundingRect": {
                                            "left": 2650,
                                            "width": 385,
                                            "bottom": 3266,
                                            "height": 292,
                                            "right": 3035,
                                            "top": 2974
                                        },
                                        "type": "node"
                                    },
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "animation": "border-right-color",
                                                "failureReason": "Unsupported CSS Property: border-right-color"
                                            },
                                            {
                                                "animation": "border-top-color",
                                                "failureReason": "Unsupported CSS Property: border-top-color"
                                            },
                                            {
                                                "animation": "background-color",
                                                "failureReason": "Unsupported CSS Property: background-color"
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
                                                "failureReason": "Unsupported CSS Property: border-left-color",
                                                "animation": "border-left-color"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "node": {
                                        "selector": "div.grid > a.bg-gradient-to-tl > div.bg-gradient-to-tl > div.z-30",
                                        "boundingRect": {
                                            "height": 191,
                                            "left": 429,
                                            "width": 168,
                                            "bottom": 1725,
                                            "right": 597,
                                            "top": 1534
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,1,A,0,DIV,0,DIV",
                                        "snippet": "<div class=\"z-30 group transition-all ease-in-out duration-200 cursor-pointer hover:bg…\">",
                                        "type": "node",
                                        "lhId": "page-25-DIV",
                                        "nodeLabel": "0\n\nTwitter"
                                    },
                                    "subItems": {
                                        "items": [
                                            {
                                                "failureReason": "Unsupported CSS Property: background-color",
                                                "animation": "background-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: color",
                                                "animation": "color"
                                            },
                                            {
                                                "animation": "box-shadow",
                                                "failureReason": "Unsupported CSS Property: box-shadow"
                                            }
                                        ],
                                        "type": "subitems"
                                    }
                                },
                                {
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,0,DIV,0,DIV",
                                        "snippet": "<div class=\"relative  mx-auto px-3 flex h-[73px] max-w-8xl items-center justify-betwee…\">",
                                        "type": "node",
                                        "boundingRect": {
                                            "left": 0,
                                            "height": 73,
                                            "width": 1335,
                                            "bottom": 73,
                                            "right": 1335,
                                            "top": 0
                                        },
                                        "nodeLabel": "Get 1:1 Mentorship\n\nLogin",
                                        "selector": "div > div.flex > div.fixed > div.relative",
                                        "lhId": "page-26-DIV"
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
                                    "subItems": {
                                        "items": [
                                            {
                                                "failureReason": "Unsupported CSS Property: border-right-color",
                                                "animation": "border-right-color"
                                            },
                                            {
                                                "failureReason": "Unsupported CSS Property: border-top-color",
                                                "animation": "border-top-color"
                                            },
                                            {
                                                "animation": "background-color",
                                                "failureReason": "Unsupported CSS Property: background-color"
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
                                                "failureReason": "Unsupported CSS Property: border-left-color",
                                                "animation": "border-left-color"
                                            }
                                        ],
                                        "type": "subitems"
                                    },
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,13,DIV,0,DIV",
                                        "boundingRect": {
                                            "width": 385,
                                            "left": 5695,
                                            "bottom": 3288,
                                            "right": 6080,
                                            "top": 2974,
                                            "height": 314
                                        },
                                        "snippet": "<div class=\"p-10 flex rounded-xl dark:bg-[#ffffff08] dark:border-zinc-800 border borde…\">",
                                        "type": "node",
                                        "lhId": "page-27-DIV",
                                        "selector": "div.swiper > div#swiper-wrapper-ee71d2a4e46bbaa1 > div.swiper-slide > div.p-10",
                                        "nodeLabel": "I maximized my use of takeUforward's resources – reading blogs, reviewing solut…"
                                    }
                                }
                            ]
                        }
                    },
                    "aria-text": {
                        "id": "aria-text",
                        "title": "Elements with the `role=text` attribute do not have focusable descendents.",
                        "description": "Adding `role=text` around a text node split by markup enables VoiceOver to treat it as one phrase, but the element's focusable descendents will not be announced. [Learn more about the `role=text` attribute](https://dequeuniversity.com/rules/axe/4.10/aria-text).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "visual-order-follows-dom": {
                        "id": "visual-order-follows-dom",
                        "title": "Visual order on the page follows DOM order",
                        "description": "DOM order matches the visual order, improving navigation for assistive technology. [Learn more about DOM and visual ordering](https://developer.chrome.com/docs/lighthouse/accessibility/visual-order-follows-dom/).",
                        "score": null,
                        "scoreDisplayMode": "manual"
                    },
                    "redirects": {
                        "id": "redirects",
                        "title": "Avoid multiple page redirects",
                        "description": "Redirects introduce additional delays before the page can be loaded. [Learn how to avoid page redirects](https://developer.chrome.com/docs/lighthouse/performance/redirects/).",
                        "score": 1,
                        "scoreDisplayMode": "metricSavings",
                        "metricSavings": {
                            "LCP": 0,
                            "FCP": 0
                        },
                        "details": {
                            "type": "opportunity",
                            "items": [],
                            "headings": [],
                            "overallSavingsMs": 0
                        },
                        "numericValue": 0,
                        "numericUnit": "millisecond"
                    },
                    "aria-valid-attr": {
                        "id": "aria-valid-attr",
                        "title": "`[aria-*]` attributes are valid and not misspelled",
                        "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more about valid ARIA attributes](https://dequeuniversity.com/rules/axe/4.10/aria-valid-attr).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "items": [],
                            "headings": [],
                            "type": "table"
                        }
                    },
                    "third-party-summary": {
                        "id": "third-party-summary",
                        "title": "Minimize third-party usage",
                        "description": "Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn how to minimize third-party impact](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).",
                        "score": 1,
                        "scoreDisplayMode": "informative",
                        "displayValue": "Third-party code blocked the main thread for 50 ms",
                        "metricSavings": {
                            "TBT": 50
                        },
                        "details": {
                            "items": [
                                {
                                    "tbtImpact": 44.84122877711418,
                                    "transferSize": 105916,
                                    "blockingTime": 44.84122877711418,
                                    "mainThreadTime": 156.85499999999965,
                                    "entity": "Google Tag Manager",
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "blockingTime": 44.84122877711418,
                                                "transferSize": 105916,
                                                "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0",
                                                "mainThreadTime": 156.85499999999965,
                                                "tbtImpact": 44.84122877711418
                                            }
                                        ]
                                    }
                                },
                                {
                                    "mainThreadTime": 104.187,
                                    "tbtImpact": 0,
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "tbtImpact": 0,
                                                "transferSize": 48959,
                                                "mainThreadTime": 55.76899999999998,
                                                "url": "https://checkout.razorpay.com/v1/checkout.js",
                                                "blockingTime": 4
                                            },
                                            {
                                                "mainThreadTime": 17.273000000000007,
                                                "tbtImpact": 0,
                                                "blockingTime": 0,
                                                "transferSize": 141195,
                                                "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-app-b5e67f2a.modern.js"
                                            },
                                            {
                                                "mainThreadTime": 0,
                                                "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-4a6243b5.modern.js",
                                                "transferSize": 23183,
                                                "tbtImpact": 0,
                                                "blockingTime": 0
                                            },
                                            {
                                                "mainThreadTime": 17.482999999999997,
                                                "transferSize": 21911,
                                                "url": "https://checkout-static-next.razorpay.com/build/520af2b9922ab248d9c032514f474eee5c598aa2/v2-entry.modern.js",
                                                "blockingTime": 0,
                                                "tbtImpact": 0
                                            },
                                            {
                                                "url": "https://checkout-static-next.razorpay.com/build/chunks/v2.65fa66fd.2143.css",
                                                "transferSize": 16069,
                                                "tbtImpact": 0,
                                                "mainThreadTime": 2.928,
                                                "blockingTime": 0
                                            },
                                            {
                                                "tbtImpact": 0,
                                                "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-5ff9663b.modern.js",
                                                "mainThreadTime": 0.89,
                                                "blockingTime": 0,
                                                "transferSize": 13020
                                            },
                                            {
                                                "tbtImpact": 0,
                                                "blockingTime": 0,
                                                "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-saved-card-modal-content-da7bb494.modern.js",
                                                "transferSize": 12373,
                                                "mainThreadTime": 0
                                            },
                                            {
                                                "mainThreadTime": 0.953,
                                                "blockingTime": 0,
                                                "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-97124b6c.modern.js",
                                                "transferSize": 8149,
                                                "tbtImpact": 0
                                            },
                                            {
                                                "blockingTime": 0,
                                                "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-loader-50d766bb.modern.js",
                                                "transferSize": 6399,
                                                "mainThreadTime": 2.1099999999999994,
                                                "tbtImpact": 0
                                            },
                                            {
                                                "transferSize": 5822,
                                                "tbtImpact": 0,
                                                "blockingTime": 0,
                                                "mainThreadTime": 0,
                                                "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-upi-block-0792ad9c.modern.js"
                                            },
                                            {
                                                "blockingTime": 0,
                                                "tbtImpact": 0,
                                                "transferSize": 5808,
                                                "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-cd8008e3.modern.js",
                                                "mainThreadTime": 0.519
                                            },
                                            {
                                                "transferSize": 4468,
                                                "tbtImpact": 0,
                                                "mainThreadTime": 6.261999999999998,
                                                "url": "https://api.razorpay.com/v1/checkout/public?traffic_env=baseline&build=520af2b9922ab248d9c032514f474eee5c598aa2&modern=1&unified_lite=1&checkout_v2=1&new_session=1",
                                                "blockingTime": 0
                                            },
                                            {
                                                "transferSize": 3985,
                                                "mainThreadTime": 0,
                                                "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-c36a1055.modern.js",
                                                "blockingTime": 0,
                                                "tbtImpact": 0
                                            },
                                            {
                                                "mainThreadTime": 0,
                                                "tbtImpact": 0,
                                                "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-d9b284ea.modern.js",
                                                "blockingTime": 0,
                                                "transferSize": 3819
                                            },
                                            {
                                                "transferSize": 3460,
                                                "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-card-block-16c322ba.modern.js",
                                                "mainThreadTime": 0,
                                                "blockingTime": 0,
                                                "tbtImpact": 0
                                            },
                                            {
                                                "mainThreadTime": 0,
                                                "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-emi-block-d62018ec.modern.js",
                                                "blockingTime": 0,
                                                "tbtImpact": 0,
                                                "transferSize": 3305
                                            },
                                            {
                                                "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-netbanking-block-dfa46b3f.modern.js",
                                                "tbtImpact": 0,
                                                "blockingTime": 0,
                                                "mainThreadTime": 0,
                                                "transferSize": 3214
                                            },
                                            {
                                                "mainThreadTime": 0,
                                                "transferSize": 2380,
                                                "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-paylater-block-5cbc66fe.modern.js",
                                                "tbtImpact": 0,
                                                "blockingTime": 0
                                            },
                                            {
                                                "tbtImpact": 0,
                                                "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-wallet-block-cef2c979.modern.js",
                                                "blockingTime": 0,
                                                "transferSize": 1833,
                                                "mainThreadTime": 0
                                            }
                                        ]
                                    },
                                    "blockingTime": 4,
                                    "transferSize": 329352,
                                    "entity": "razorpay.com"
                                },
                                {
                                    "transferSize": 137597,
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "mainThreadTime": 36.23699999999999,
                                                "url": "https://accounts.google.com/gsi/client",
                                                "blockingTime": 0.6255290906752804,
                                                "transferSize": 88852,
                                                "tbtImpact": 0.6255290906752804
                                            },
                                            {
                                                "blockingTime": 0,
                                                "url": "https://accounts.google.com/gsi/button?type=standard&theme=filled_black&size=large&text=undefined&shape=rectangle&logo_alignment=undefined&width=undefined&locale=undefined&click_listener=undefined&client_id=590234420126-hc9007chffeh5rh8j5gcositk2ia89do.apps.googleusercontent.com&iframe_id=gsi_50034_323059&as=rWZBN80hXuCp8Ns58oWcZw",
                                                "mainThreadTime": 27.84300000000003,
                                                "tbtImpact": 0,
                                                "transferSize": 47335
                                            },
                                            {
                                                "blockingTime": 0,
                                                "mainThreadTime": 0.7000000000000001,
                                                "tbtImpact": 0,
                                                "transferSize": 1410,
                                                "url": "https://accounts.google.com/gsi/style"
                                            }
                                        ]
                                    },
                                    "mainThreadTime": 64.78000000000002,
                                    "tbtImpact": 0.6255290906752804,
                                    "blockingTime": 0.6255290906752804,
                                    "entity": "Other Google APIs/SDKs"
                                },
                                {
                                    "transferSize": 86343,
                                    "tbtImpact": 0,
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "mainThreadTime": 0,
                                                "url": "https://fonts.gstatic.com/s/dmsans/v15/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2",
                                                "tbtImpact": 0,
                                                "blockingTime": 0,
                                                "transferSize": 63563
                                            },
                                            {
                                                "transferSize": 16488,
                                                "tbtImpact": 0,
                                                "blockingTime": 0,
                                                "mainThreadTime": 0,
                                                "url": "https://fonts.gstatic.com/s/amaranth/v18/KtkpALODe433f0j1zMF-OMWl42H9FYud.woff2"
                                            },
                                            {
                                                "blockingTime": 0,
                                                "transferSize": 1596,
                                                "mainThreadTime": 0.968,
                                                "url": "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
                                                "tbtImpact": 0
                                            },
                                            {
                                                "tbtImpact": 0,
                                                "transferSize": 1304,
                                                "url": "https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap",
                                                "blockingTime": 0,
                                                "mainThreadTime": 0.628
                                            },
                                            {
                                                "transferSize": 1283,
                                                "url": "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
                                                "tbtImpact": 0,
                                                "blockingTime": 0,
                                                "mainThreadTime": 0.7890000000000001
                                            },
                                            {
                                                "mainThreadTime": 0.5740000000000001,
                                                "url": "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
                                                "tbtImpact": 0,
                                                "transferSize": 1100,
                                                "blockingTime": 0
                                            },
                                            {
                                                "transferSize": 1009,
                                                "mainThreadTime": 0.7250000000000001,
                                                "blockingTime": 0,
                                                "url": "https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&display=swap",
                                                "tbtImpact": 0
                                            }
                                        ]
                                    },
                                    "mainThreadTime": 3.684,
                                    "blockingTime": 0,
                                    "entity": "Google Fonts"
                                },
                                {
                                    "tbtImpact": 0,
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "url": "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
                                                "tbtImpact": 0,
                                                "transferSize": 22291,
                                                "mainThreadTime": 0,
                                                "blockingTime": 0
                                            },
                                            {
                                                "tbtImpact": 0,
                                                "mainThreadTime": 0,
                                                "transferSize": 21992,
                                                "blockingTime": 0,
                                                "url": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                            },
                                            {
                                                "mainThreadTime": 0,
                                                "url": "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
                                                "transferSize": 18055,
                                                "blockingTime": 0,
                                                "tbtImpact": 0
                                            }
                                        ]
                                    },
                                    "blockingTime": 0,
                                    "entity": "unsplash.com",
                                    "mainThreadTime": 0,
                                    "transferSize": 62338
                                },
                                {
                                    "blockingTime": 0,
                                    "entity": "Google Analytics",
                                    "transferSize": 798,
                                    "tbtImpact": 0,
                                    "subItems": {
                                        "items": [
                                            {
                                                "tbtImpact": 0,
                                                "transferSize": 399,
                                                "url": "https://www.google-analytics.com/g/collect?v=2&tid=G-51P1R4XNJ0&gtm=45je49n0v9182208068za200&_p=1727269047132&gcd=13l3l3l3l1l1&npa=0&dma=0&tag_exp=0&cid=824757533.1727269047&ul=en-us&sr=800x600&uaa=x86&uab=64&uafvl=Chromium%3B128.0.6613.113%7CNot%253BA%253DBrand%3B24.0.0.0%7CHeadlessChrome%3B128.0.6613.113&uamb=0&uam=&uap=macOS&uapv=10.15.7&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&sid=1727269047&sct=1&seg=0&dl=https%3A%2F%2Ftakeuforward.org%2F&dt=takeuforward%20-%20Best%20Coding%20Tutorials%20for%20Free&en=page_view&_fv=1&_nsi=1&_ss=1&_ee=1&tfd=564",
                                                "mainThreadTime": 0,
                                                "blockingTime": 0
                                            },
                                            {
                                                "url": "https://www.google-analytics.com/g/collect?v=2&tid=G-51P1R4XNJ0&gtm=45je49n0v9182208068za200&_p=1727269047132&gcd=13l3l3l3l1l1&npa=0&dma=0&tag_exp=0&cid=824757533.1727269047&ul=en-us&sr=800x600&uaa=x86&uab=64&uafvl=Chromium%3B128.0.6613.113%7CNot%253BA%253DBrand%3B24.0.0.0%7CHeadlessChrome%3B128.0.6613.113&uamb=0&uam=&uap=macOS&uapv=10.15.7&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEA&_s=2&sid=1727269047&sct=1&seg=0&dl=https%3A%2F%2Ftakeuforward.org%2F&dt=takeuforward%20-%20Best%20Coding%20Tutorials%20for%20Free&en=scroll&epn.percent_scrolled=90&_et=7&tfd=2277",
                                                "mainThreadTime": 0,
                                                "tbtImpact": 0,
                                                "transferSize": 399,
                                                "blockingTime": 0
                                            }
                                        ],
                                        "type": "subitems"
                                    },
                                    "mainThreadTime": 0
                                }
                            ],
                            "isEntityGrouped": true,
                            "type": "table",
                            "summary": {
                                "wastedBytes": 722344,
                                "wastedMs": 49.46675786778946
                            },
                            "headings": [
                                {
                                    "key": "entity",
                                    "valueType": "text",
                                    "subItemsHeading": {
                                        "valueType": "url",
                                        "key": "url"
                                    },
                                    "label": "Third-Party"
                                },
                                {
                                    "label": "Transfer Size",
                                    "valueType": "bytes",
                                    "key": "transferSize",
                                    "subItemsHeading": {
                                        "key": "transferSize"
                                    },
                                    "granularity": 1
                                },
                                {
                                    "key": "blockingTime",
                                    "valueType": "ms",
                                    "granularity": 1,
                                    "subItemsHeading": {
                                        "key": "blockingTime"
                                    },
                                    "label": "Main-Thread Blocking Time"
                                }
                            ]
                        }
                    },
                    "unminified-javascript": {
                        "id": "unminified-javascript",
                        "title": "Minify JavaScript",
                        "description": "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn how to minify JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript/).",
                        "score": 1,
                        "scoreDisplayMode": "metricSavings",
                        "metricSavings": {
                            "LCP": 0,
                            "FCP": 0
                        },
                        "details": {
                            "items": [],
                            "type": "opportunity",
                            "overallSavingsMs": 0,
                            "sortedBy": [
                                "wastedBytes"
                            ],
                            "headings": [],
                            "debugData": {
                                "metricSavings": {
                                    "LCP": 0,
                                    "FCP": 0
                                },
                                "type": "debugdata"
                            },
                            "overallSavingsBytes": 0
                        },
                        "warnings": [],
                        "numericValue": 0,
                        "numericUnit": "millisecond"
                    },
                    "html-xml-lang-mismatch": {
                        "id": "html-xml-lang-mismatch",
                        "title": "`<html>` element has an `[xml:lang]` attribute with the same base language as the `[lang]` attribute.",
                        "description": "If the webpage does not specify a consistent language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/html-xml-lang-mismatch).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "select-name": {
                        "id": "select-name",
                        "title": "Select elements have associated label elements.",
                        "description": "Form elements without effective labels can create frustrating experiences for screen reader users. [Learn more about the `select` element](https://dequeuniversity.com/rules/axe/4.10/select-name).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "critical-request-chains": {
                        "id": "critical-request-chains",
                        "title": "Avoid chaining critical requests",
                        "description": "The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn how to avoid chaining critical requests](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains/).",
                        "score": 1,
                        "scoreDisplayMode": "informative",
                        "displayValue": "6 chains found",
                        "details": {
                            "longestChain": {
                                "transferSize": 16488,
                                "length": 4,
                                "duration": 2170.226000070572
                            },
                            "chains": {
                                "76C9E3F33F4C53A93C407AC9EC31DFED": {
                                    "request": {
                                        "url": "https://takeuforward.org/",
                                        "endTime": 1653187.319937,
                                        "startTime": 1653187.121792,
                                        "transferSize": 1524,
                                        "responseReceivedTime": 1653187.31993
                                    },
                                    "children": {
                                        "52.3": {
                                            "request": {
                                                "responseReceivedTime": 1653187.4895269999,
                                                "url": "https://takeuforward.org/static/css/main.96be7ba9.css",
                                                "transferSize": 43292,
                                                "startTime": 1653187.330932,
                                                "endTime": 1653187.489535
                                            },
                                            "children": {
                                                "52.13": {
                                                    "request": {
                                                        "startTime": 1653187.492367,
                                                        "endTime": 1653187.502047,
                                                        "responseReceivedTime": 1653187.5020430002,
                                                        "transferSize": 1304,
                                                        "url": "https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
                                                    }
                                                },
                                                "52.10": {
                                                    "children": {
                                                        "52.17": {
                                                            "request": {
                                                                "responseReceivedTime": 1653189.292011,
                                                                "url": "https://fonts.gstatic.com/s/amaranth/v18/KtkpALODe433f0j1zMF-OMWl42H9FYud.woff2",
                                                                "startTime": 1653189.286531,
                                                                "endTime": 1653189.292018,
                                                                "transferSize": 16488
                                                            }
                                                        }
                                                    },
                                                    "request": {
                                                        "transferSize": 1009,
                                                        "startTime": 1653187.491651,
                                                        "responseReceivedTime": 1653187.497622,
                                                        "endTime": 1653187.497628,
                                                        "url": "https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&display=swap"
                                                    }
                                                },
                                                "52.14": {
                                                    "request": {
                                                        "transferSize": 1100,
                                                        "url": "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
                                                        "endTime": 1653187.498139,
                                                        "startTime": 1653187.492464,
                                                        "responseReceivedTime": 1653187.498136
                                                    },
                                                    "children": {
                                                        "52.126": {
                                                            "request": {
                                                                "transferSize": 63563,
                                                                "responseReceivedTime": 1653189.2759679998,
                                                                "url": "https://fonts.gstatic.com/s/dmsans/v15/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2",
                                                                "endTime": 1653189.275974,
                                                                "startTime": 1653189.271054
                                                            }
                                                        }
                                                    }
                                                },
                                                "52.11": {
                                                    "request": {
                                                        "startTime": 1653187.491927,
                                                        "endTime": 1653187.504604,
                                                        "responseReceivedTime": 1653187.5045989999,
                                                        "url": "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
                                                        "transferSize": 1596
                                                    }
                                                },
                                                "52.12": {
                                                    "request": {
                                                        "endTime": 1653187.498988,
                                                        "url": "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
                                                        "responseReceivedTime": 1653187.498985,
                                                        "startTime": 1653187.492046,
                                                        "transferSize": 1283
                                                    }
                                                }
                                            }
                                        },
                                        "52.5": {
                                            "request": {
                                                "startTime": 1653187.332006,
                                                "endTime": 1653188.760702,
                                                "url": "https://checkout.razorpay.com/v1/checkout.js",
                                                "responseReceivedTime": 1653188.760697,
                                                "transferSize": 48959
                                            }
                                        }
                                    }
                                }
                            },
                            "type": "criticalrequestchain"
                        }
                    },
                    "aria-required-attr": {
                        "id": "aria-required-attr",
                        "title": "`[role]`s have all required `[aria-*]` attributes",
                        "description": "Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more about roles and required attributes](https://dequeuniversity.com/rules/axe/4.10/aria-required-attr).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "headings": [],
                            "items": [],
                            "type": "table"
                        }
                    },
                    "paste-preventing-inputs": {
                        "id": "paste-preventing-inputs",
                        "title": "Allows users to paste into input fields",
                        "description": "Preventing input pasting is a bad practice for the UX, and weakens security by blocking password managers.[Learn more about user-friendly input fields](https://developer.chrome.com/docs/lighthouse/best-practices/paste-preventing-inputs/).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "items": [],
                            "headings": [],
                            "type": "table"
                        }
                    },
                    "mainthread-work-breakdown": {
                        "id": "mainthread-work-breakdown",
                        "title": "Minimizes main-thread work",
                        "description": "Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to minimize main-thread work](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/)",
                        "score": 1,
                        "scoreDisplayMode": "informative",
                        "displayValue": "1.4 s",
                        "metricSavings": {
                            "TBT": 350
                        },
                        "details": {
                            "items": [
                                {
                                    "duration": 835.8549999999941,
                                    "groupLabel": "Script Evaluation",
                                    "group": "scriptEvaluation"
                                },
                                {
                                    "duration": 227.02399999999906,
                                    "group": "other",
                                    "groupLabel": "Other"
                                },
                                {
                                    "duration": 153.379,
                                    "groupLabel": "Style & Layout",
                                    "group": "styleLayout"
                                },
                                {
                                    "groupLabel": "Script Parsing & Compilation",
                                    "group": "scriptParseCompile",
                                    "duration": 129.327
                                },
                                {
                                    "groupLabel": "Garbage Collection",
                                    "duration": 32.51,
                                    "group": "garbageCollection"
                                },
                                {
                                    "groupLabel": "Rendering",
                                    "duration": 16.58900000000003,
                                    "group": "paintCompositeRender"
                                },
                                {
                                    "group": "parseHTML",
                                    "groupLabel": "Parse HTML & CSS",
                                    "duration": 15.251000000000003
                                }
                            ],
                            "sortedBy": [
                                "duration"
                            ],
                            "headings": [
                                {
                                    "label": "Category",
                                    "valueType": "text",
                                    "key": "groupLabel"
                                },
                                {
                                    "key": "duration",
                                    "label": "Time Spent",
                                    "valueType": "ms",
                                    "granularity": 1
                                }
                            ],
                            "type": "table"
                        },
                        "numericValue": 1409.934999999993,
                        "numericUnit": "millisecond"
                    },
                    "image-aspect-ratio": {
                        "id": "image-aspect-ratio",
                        "title": "Displays images with correct aspect ratio",
                        "description": "Image display dimensions should match natural aspect ratio. [Learn more about image aspect ratio](https://developer.chrome.com/docs/lighthouse/best-practices/image-aspect-ratio/).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "headings": [],
                            "type": "table",
                            "items": []
                        }
                    },
                    "aria-tooltip-name": {
                        "id": "aria-tooltip-name",
                        "title": "ARIA `tooltip` elements have accessible names",
                        "description": "When a tooltip element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `tooltip` elements](https://dequeuniversity.com/rules/axe/4.10/aria-tooltip-name).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "input-image-alt": {
                        "id": "input-image-alt",
                        "title": "`<input type=\"image\">` elements have `[alt]` text",
                        "description": "When an image is being used as an `<input>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn about input image alt text](https://dequeuniversity.com/rules/axe/4.10/input-image-alt).",
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
                                    "numStylesheets": 8,
                                    "numTasksOver500ms": 0,
                                    "numRequests": 57,
                                    "numTasksOver25ms": 11,
                                    "maxServerLatency": 139,
                                    "numTasks": 546,
                                    "numTasksOver100ms": 3,
                                    "numFonts": 2,
                                    "maxRtt": 5.211300000000002,
                                    "mainDocumentTransferSize": 1524,
                                    "totalByteWeight": 2724426,
                                    "numTasksOver10ms": 20,
                                    "rtt": 0.0007979521932383815,
                                    "numScripts": 10,
                                    "totalTaskTime": 1409.9350000000006,
                                    "throughput": 75393972625.89807,
                                    "numTasksOver50ms": 6
                                }
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
                            "nodes": [
                                {
                                    "children": [
                                        {
                                            "resourceBytes": 129,
                                            "name": "(inline) function gtag()…",
                                            "unusedBytes": 0
                                        },
                                        {
                                            "resourceBytes": 181,
                                            "unusedBytes": 0,
                                            "name": "(inline) \"true\"==localSt…"
                                        }
                                    ],
                                    "resourceBytes": 310,
                                    "name": "https://takeuforward.org/"
                                },
                                {
                                    "resourceBytes": 317825,
                                    "unusedBytes": 116872,
                                    "name": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0"
                                },
                                {
                                    "unusedBytes": 70467,
                                    "name": "https://checkout.razorpay.com/v1/checkout.js",
                                    "resourceBytes": 169898
                                },
                                {
                                    "unusedBytes": 190587,
                                    "name": "https://accounts.google.com/gsi/client",
                                    "resourceBytes": 232832
                                },
                                {
                                    "name": "https://takeuforward.org/static/js/main.e1dada2b.js",
                                    "resourceBytes": 4456980,
                                    "unusedBytes": 3125794
                                },
                                {
                                    "name": "https://accounts.google.com/gsi/client",
                                    "resourceBytes": 232832,
                                    "unusedBytes": 170877
                                },
                                {
                                    "resourceBytes": 3929,
                                    "children": [
                                        {
                                            "resourceBytes": 3929,
                                            "name": "(inline) window.session_…",
                                            "unusedBytes": 504
                                        }
                                    ],
                                    "unusedBytes": 504,
                                    "name": "https://api.razorpay.com/v1/checkout/public?traffic_env=baseline&build=520af2b9922ab248d9c032514f474eee5c598aa2&modern=1&unified_lite=1&checkout_v2=1&new_session=1"
                                },
                                {
                                    "unusedBytes": 28902,
                                    "name": "https://checkout-static-next.razorpay.com/build/520af2b9922ab248d9c032514f474eee5c598aa2/v2-entry.modern.js",
                                    "resourceBytes": 63758
                                },
                                {
                                    "resourceBytes": 19094,
                                    "name": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-97124b6c.modern.js",
                                    "unusedBytes": 18992
                                },
                                {
                                    "resourceBytes": 22579,
                                    "name": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-cd8008e3.modern.js",
                                    "unusedBytes": 22470
                                },
                                {
                                    "unusedBytes": 557,
                                    "resourceBytes": 42553,
                                    "name": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-loader-50d766bb.modern.js"
                                },
                                {
                                    "resourceBytes": 38546,
                                    "name": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-5ff9663b.modern.js",
                                    "unusedBytes": 38404
                                },
                                {
                                    "unusedBytes": 542045,
                                    "name": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-app-b5e67f2a.modern.js",
                                    "resourceBytes": 544537
                                },
                                {
                                    "name": "https://accounts.google.com/gsi/button?type=standard&theme=filled_black&size=large&text=undefined&shape=rectangle&logo_alignment=undefined&width=undefined&locale=undefined&click_listener=undefined&client_id=590234420126-hc9007chffeh5rh8j5gcositk2ia89do.apps.googleusercontent.com&iframe_id=gsi_50034_323059&as=rWZBN80hXuCp8Ns58oWcZw",
                                    "children": [
                                        {
                                            "unusedBytes": 62123,
                                            "name": "(inline) \"use strict\";th…",
                                            "resourceBytes": 120474
                                        },
                                        {
                                            "resourceBytes": 418,
                                            "unusedBytes": 0,
                                            "name": "(inline) gis.provider.bu…"
                                        }
                                    ],
                                    "resourceBytes": 120892,
                                    "unusedBytes": 62123
                                }
                            ],
                            "type": "treemap-data"
                        }
                    },
                    "main-thread-tasks": {
                        "id": "main-thread-tasks",
                        "title": "Tasks",
                        "description": "Lists the toplevel main thread tasks that executed during page load.",
                        "score": 1,
                        "scoreDisplayMode": "informative",
                        "details": {
                            "headings": [
                                {
                                    "valueType": "ms",
                                    "granularity": 1,
                                    "label": "Start Time",
                                    "key": "startTime"
                                },
                                {
                                    "valueType": "ms",
                                    "label": "End Time",
                                    "key": "duration",
                                    "granularity": 1
                                }
                            ],
                            "items": [
                                {
                                    "duration": 14.568,
                                    "startTime": 204.472
                                },
                                {
                                    "duration": 6.602,
                                    "startTime": 369.304
                                },
                                {
                                    "startTime": 386.517,
                                    "duration": 8.122
                                },
                                {
                                    "duration": 29.183,
                                    "startTime": 430.134
                                },
                                {
                                    "duration": 10.274,
                                    "startTime": 459.487
                                },
                                {
                                    "startTime": 471.063,
                                    "duration": 94.385
                                },
                                {
                                    "startTime": 566.049,
                                    "duration": 29.513
                                },
                                {
                                    "duration": 53.596,
                                    "startTime": 1649.649
                                },
                                {
                                    "duration": 11.204,
                                    "startTime": 1706.698
                                },
                                {
                                    "duration": 295.318,
                                    "startTime": 1717.916
                                },
                                {
                                    "startTime": 2014.544,
                                    "duration": 285.084
                                },
                                {
                                    "startTime": 2299.648,
                                    "duration": 5.63
                                },
                                {
                                    "duration": 114.763,
                                    "startTime": 2307.362
                                },
                                {
                                    "duration": 23.274,
                                    "startTime": 2425.506
                                },
                                {
                                    "duration": 8.482,
                                    "startTime": 2452.866
                                },
                                {
                                    "duration": 34.899,
                                    "startTime": 2461.364
                                },
                                {
                                    "duration": 26.582,
                                    "startTime": 2501.777
                                },
                                {
                                    "startTime": 2532.722,
                                    "duration": 17.784
                                },
                                {
                                    "duration": 16.834,
                                    "startTime": 2552.375
                                },
                                {
                                    "duration": 17.338,
                                    "startTime": 2614.158
                                },
                                {
                                    "duration": 6.724,
                                    "startTime": 2811.9
                                },
                                {
                                    "duration": 60.994,
                                    "startTime": 2874.98
                                },
                                {
                                    "startTime": 2937.817,
                                    "duration": 44.64
                                },
                                {
                                    "duration": 6.377,
                                    "startTime": 2982.469
                                },
                                {
                                    "startTime": 3280.378,
                                    "duration": 12.906
                                },
                                {
                                    "duration": 9.814,
                                    "startTime": 3362.693
                                },
                                {
                                    "duration": 20.117,
                                    "startTime": 3373.079
                                },
                                {
                                    "duration": 6.541,
                                    "startTime": 3395.101
                                },
                                {
                                    "duration": 6.516,
                                    "startTime": 3402.89
                                }
                            ],
                            "type": "table"
                        }
                    },
                    "td-headers-attr": {
                        "id": "td-headers-attr",
                        "title": "Cells in a `<table>` element that use the `[headers]` attribute refer to table cells within the same table.",
                        "description": "Screen readers have features to make navigating tables easier. Ensuring `<td>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more about the `headers` attribute](https://dequeuniversity.com/rules/axe/4.10/td-headers-attr).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "unused-css-rules": {
                        "id": "unused-css-rules",
                        "title": "Reduce unused CSS",
                        "description": "Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn how to reduce unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/).",
                        "score": 0,
                        "scoreDisplayMode": "metricSavings",
                        "displayValue": "Potential savings of 50 KiB",
                        "metricSavings": {
                            "LCP": 50,
                            "FCP": 100
                        },
                        "details": {
                            "headings": [
                                {
                                    "label": "URL",
                                    "key": "url",
                                    "valueType": "url"
                                },
                                {
                                    "key": "totalBytes",
                                    "label": "Transfer Size",
                                    "valueType": "bytes"
                                },
                                {
                                    "key": "wastedBytes",
                                    "valueType": "bytes",
                                    "label": "Potential Savings"
                                }
                            ],
                            "items": [
                                {
                                    "wastedBytes": 36308,
                                    "url": "https://takeuforward.org/static/css/main.96be7ba9.css",
                                    "wastedPercent": 85.52337119452773,
                                    "totalBytes": 42454
                                },
                                {
                                    "wastedPercent": 100,
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2.65fa66fd.2143.css",
                                    "totalBytes": 15377,
                                    "wastedBytes": 15377
                                }
                            ],
                            "overallSavingsBytes": 51685,
                            "debugData": {
                                "type": "debugdata",
                                "metricSavings": {
                                    "FCP": 80,
                                    "LCP": 70
                                }
                            },
                            "sortedBy": [
                                "wastedBytes"
                            ],
                            "type": "opportunity",
                            "overallSavingsMs": 70
                        },
                        "numericValue": 70,
                        "numericUnit": "millisecond"
                    },
                    "aria-hidden-focus": {
                        "id": "aria-hidden-focus",
                        "title": "`[aria-hidden=\"true\"]` elements do not contain focusable descendents",
                        "description": "Focusable descendents within an `[aria-hidden=\"true\"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers. [Learn how `aria-hidden` affects focusable elements](https://dequeuniversity.com/rules/axe/4.10/aria-hidden-focus).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "type": "table",
                            "items": [],
                            "headings": []
                        }
                    },
                    "accesskeys": {
                        "id": "accesskeys",
                        "title": "`[accesskey]` values are unique",
                        "description": "Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more about access keys](https://dequeuniversity.com/rules/axe/4.10/accesskeys).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "identical-links-same-purpose": {
                        "id": "identical-links-same-purpose",
                        "title": "Identical links have the same purpose.",
                        "description": "Links with the same destination should have the same description, to help users understand the link's purpose and decide whether to follow it. [Learn more about identical links](https://dequeuniversity.com/rules/axe/4.10/identical-links-same-purpose).",
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
                            "headings": [
                                {
                                    "label": "Description",
                                    "subItemsHeading": {
                                        "key": "description"
                                    },
                                    "key": "description",
                                    "valueType": "text"
                                },
                                {
                                    "key": "directive",
                                    "valueType": "code",
                                    "subItemsHeading": {
                                        "key": "directive"
                                    },
                                    "label": "Directive"
                                },
                                {
                                    "subItemsHeading": {
                                        "key": "severity"
                                    },
                                    "valueType": "text",
                                    "key": "severity",
                                    "label": "Severity"
                                }
                            ],
                            "items": [
                                {
                                    "severity": "High",
                                    "description": "No CSP found in enforcement mode"
                                }
                            ],
                            "type": "table"
                        }
                    },
                    "uses-long-cache-ttl": {
                        "id": "uses-long-cache-ttl",
                        "title": "Serve static assets with an efficient cache policy",
                        "description": "A long cache lifetime can speed up repeat visits to your page. [Learn more about efficient cache policies](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/).",
                        "score": 0.5,
                        "scoreDisplayMode": "metricSavings",
                        "displayValue": "15 resources found",
                        "details": {
                            "skipSumming": [
                                "cacheLifetimeMs"
                            ],
                            "items": [
                                {
                                    "totalBytes": 134086,
                                    "cacheHitProbability": 0,
                                    "wastedBytes": 134086,
                                    "url": "https://static.takeuforward.org/content/id_photo_white_compressed-Gaurav%20Poosarla-BZGWU5pZ",
                                    "cacheLifetimeMs": 0
                                },
                                {
                                    "wastedBytes": 126563,
                                    "url": "https://static.takeuforward.org/content/K-Sanketh-kumar-DfeETlQ3",
                                    "cacheHitProbability": 0,
                                    "cacheLifetimeMs": 0,
                                    "totalBytes": 126563
                                },
                                {
                                    "cacheLifetimeMs": 0,
                                    "url": "https://static.takeuforward.org/content/Avish-Mittal--1MO7Fba",
                                    "wastedBytes": 73047,
                                    "totalBytes": 73047,
                                    "cacheHitProbability": 0
                                },
                                {
                                    "cacheHitProbability": 0,
                                    "wastedBytes": 72036,
                                    "totalBytes": 72036,
                                    "url": "https://static.takeuforward.org/content/Aniket-jyP64DXX",
                                    "cacheLifetimeMs": 0
                                },
                                {
                                    "totalBytes": 64070,
                                    "cacheHitProbability": 0,
                                    "url": "https://static.takeuforward.org/content/Athang-Kulkarni-BkK4feX-",
                                    "wastedBytes": 64070,
                                    "cacheLifetimeMs": 0
                                },
                                {
                                    "cacheLifetimeMs": 0,
                                    "totalBytes": 47117,
                                    "cacheHitProbability": 0,
                                    "wastedBytes": 47117,
                                    "url": "https://static.takeuforward.org/content/Aditya-Mane-D8T2NtA-"
                                },
                                {
                                    "wastedBytes": 44582,
                                    "url": "https://static.takeuforward.org/content/Prajwal-Shah-xZVUY0qj",
                                    "totalBytes": 44582,
                                    "cacheHitProbability": 0,
                                    "cacheLifetimeMs": 0
                                },
                                {
                                    "url": "https://static.takeuforward.org/content/IMG20221028085802~2%20-%20KUNDAN%20KUMAR-JG4BAazS",
                                    "totalBytes": 35256,
                                    "cacheHitProbability": 0,
                                    "wastedBytes": 35256,
                                    "cacheLifetimeMs": 0
                                },
                                {
                                    "totalBytes": 31068,
                                    "url": "https://static.takeuforward.org/content/Lalit-sharma-OUIHbXCu",
                                    "cacheLifetimeMs": 0,
                                    "cacheHitProbability": 0,
                                    "wastedBytes": 31068
                                },
                                {
                                    "wastedBytes": 21835,
                                    "cacheHitProbability": 0,
                                    "cacheLifetimeMs": 0,
                                    "totalBytes": 21835,
                                    "url": "https://static.takeuforward.org/content/Madhab-Kafle-rhMxLzaA"
                                },
                                {
                                    "url": "https://static.takeuforward.org/content/Anubhuti-Pandey-couG3Rtw",
                                    "wastedBytes": 17441,
                                    "cacheHitProbability": 0,
                                    "totalBytes": 17441,
                                    "cacheLifetimeMs": 0
                                },
                                {
                                    "url": "https://static.takeuforward.org/content/Sankalp-jain-eLecJpHl",
                                    "totalBytes": 13394,
                                    "wastedBytes": 13394,
                                    "cacheHitProbability": 0,
                                    "cacheLifetimeMs": 0
                                },
                                {
                                    "wastedBytes": 13376,
                                    "cacheHitProbability": 0,
                                    "cacheLifetimeMs": 0,
                                    "url": "https://static.takeuforward.org/content/IMG_7930%20-%20Sudipta%20Basak-28We2pgU",
                                    "totalBytes": 13376
                                },
                                {
                                    "totalBytes": 7199,
                                    "url": "https://static.takeuforward.org/content/IMG20240322132442%20-%20JYOTI%20PATIL-BhG5Ptn0",
                                    "wastedBytes": 7199,
                                    "cacheHitProbability": 0,
                                    "cacheLifetimeMs": 0
                                },
                                {
                                    "debugData": {
                                        "max-age": 120,
                                        "type": "debugdata"
                                    },
                                    "totalBytes": 48959,
                                    "cacheLifetimeMs": 120000,
                                    "url": "https://checkout.razorpay.com/v1/checkout.js",
                                    "cacheHitProbability": 0.016666666666666666,
                                    "wastedBytes": 48143.01666666666
                                }
                            ],
                            "summary": {
                                "wastedBytes": 749213.0166666666
                            },
                            "sortedBy": [
                                "totalBytes"
                            ],
                            "headings": [
                                {
                                    "valueType": "url",
                                    "label": "URL",
                                    "key": "url"
                                },
                                {
                                    "label": "Cache TTL",
                                    "valueType": "ms",
                                    "key": "cacheLifetimeMs",
                                    "displayUnit": "duration"
                                },
                                {
                                    "granularity": 1,
                                    "valueType": "bytes",
                                    "displayUnit": "kb",
                                    "key": "totalBytes",
                                    "label": "Transfer Size"
                                }
                            ],
                            "type": "table"
                        },
                        "numericValue": 749213.0166666666,
                        "numericUnit": "byte"
                    },
                    "aria-treeitem-name": {
                        "id": "aria-treeitem-name",
                        "title": "ARIA `treeitem` elements have accessible names",
                        "description": "When a `treeitem` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about labeling `treeitem` elements](https://dequeuniversity.com/rules/axe/4.10/aria-treeitem-name).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "duplicate-id-aria": {
                        "id": "duplicate-id-aria",
                        "title": "ARIA IDs are unique",
                        "description": "The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn how to fix duplicate ARIA IDs](https://dequeuniversity.com/rules/axe/4.10/duplicate-id-aria).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "network-requests": {
                        "id": "network-requests",
                        "title": "Network Requests",
                        "description": "Lists the network requests that were made during page load.",
                        "score": 1,
                        "scoreDisplayMode": "informative",
                        "details": {
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
                                    "label": "Network Request Time",
                                    "valueType": "ms"
                                },
                                {
                                    "granularity": 1,
                                    "key": "networkEndTime",
                                    "valueType": "ms",
                                    "label": "Network End Time"
                                },
                                {
                                    "displayUnit": "kb",
                                    "key": "transferSize",
                                    "label": "Transfer Size",
                                    "granularity": 1,
                                    "valueType": "bytes"
                                },
                                {
                                    "granularity": 1,
                                    "valueType": "bytes",
                                    "label": "Resource Size",
                                    "displayUnit": "kb",
                                    "key": "resourceSize"
                                },
                                {
                                    "label": "Status Code",
                                    "key": "statusCode",
                                    "valueType": "text"
                                },
                                {
                                    "label": "MIME Type",
                                    "valueType": "text",
                                    "key": "mimeType"
                                },
                                {
                                    "key": "resourceType",
                                    "label": "Resource Type",
                                    "valueType": "text"
                                }
                            ],
                            "type": "table",
                            "items": [
                                {
                                    "resourceSize": 2619,
                                    "statusCode": 200,
                                    "protocol": "h2",
                                    "mimeType": "text/html",
                                    "experimentalFromMainFrame": true,
                                    "priority": "VeryHigh",
                                    "sessionTargetType": "page",
                                    "transferSize": 1524,
                                    "finished": true,
                                    "networkEndTime": 198.9670000076294,
                                    "resourceType": "Document",
                                    "rendererStartTime": 0,
                                    "entity": "takeuforward.org",
                                    "url": "https://takeuforward.org/",
                                    "networkRequestTime": 0.8220000267028809
                                },
                                {
                                    "rendererStartTime": 207.00099992752075,
                                    "networkEndTime": 443.6840000152588,
                                    "finished": true,
                                    "resourceSize": 4456980,
                                    "experimentalFromMainFrame": true,
                                    "transferSize": 1154993,
                                    "priority": "Low",
                                    "statusCode": 200,
                                    "mimeType": "application/javascript",
                                    "resourceType": "Script",
                                    "protocol": "h2",
                                    "networkRequestTime": 209.7020001411438,
                                    "sessionTargetType": "page",
                                    "entity": "takeuforward.org",
                                    "url": "https://takeuforward.org/static/js/main.e1dada2b.js"
                                },
                                {
                                    "transferSize": 43292,
                                    "finished": true,
                                    "networkEndTime": 368.5649998188019,
                                    "priority": "VeryHigh",
                                    "entity": "takeuforward.org",
                                    "rendererStartTime": 207.3710000514984,
                                    "sessionTargetType": "page",
                                    "resourceType": "Stylesheet",
                                    "url": "https://takeuforward.org/static/css/main.96be7ba9.css",
                                    "statusCode": 200,
                                    "resourceSize": 236830,
                                    "protocol": "h2",
                                    "networkRequestTime": 209.96199989318848,
                                    "mimeType": "text/css",
                                    "experimentalFromMainFrame": true
                                },
                                {
                                    "experimentalFromMainFrame": true,
                                    "transferSize": 105916,
                                    "priority": "Low",
                                    "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0",
                                    "finished": true,
                                    "networkRequestTime": 385.62800002098083,
                                    "rendererStartTime": 207.5569999217987,
                                    "resourceSize": 317825,
                                    "mimeType": "application/javascript",
                                    "entity": "Google Tag Manager",
                                    "statusCode": 200,
                                    "networkEndTime": 406.5900001525879,
                                    "protocol": "h2",
                                    "sessionTargetType": "page",
                                    "resourceType": "Script"
                                },
                                {
                                    "sessionTargetType": "page",
                                    "networkEndTime": 1639.731999874115,
                                    "transferSize": 48959,
                                    "resourceType": "Script",
                                    "resourceSize": 170085,
                                    "mimeType": "application/javascript",
                                    "networkRequestTime": 211.03600001335144,
                                    "rendererStartTime": 207.66099977493286,
                                    "experimentalFromMainFrame": true,
                                    "statusCode": 200,
                                    "url": "https://checkout.razorpay.com/v1/checkout.js",
                                    "protocol": "http/1.1",
                                    "entity": "razorpay.com",
                                    "finished": true,
                                    "priority": "High"
                                },
                                {
                                    "networkEndTime": 450.6510000228882,
                                    "sessionTargetType": "page",
                                    "resourceSize": 232832,
                                    "statusCode": 200,
                                    "finished": true,
                                    "networkRequestTime": 385.720999956131,
                                    "experimentalFromMainFrame": true,
                                    "transferSize": 88852,
                                    "entity": "Other Google APIs/SDKs",
                                    "priority": "Low",
                                    "resourceType": "Script",
                                    "url": "https://accounts.google.com/gsi/client",
                                    "mimeType": "application/javascript",
                                    "protocol": "h2",
                                    "rendererStartTime": 207.83899998664856
                                },
                                {
                                    "resourceSize": 844,
                                    "resourceType": "Stylesheet",
                                    "experimentalFromMainFrame": true,
                                    "networkEndTime": 376.6579999923706,
                                    "finished": true,
                                    "mimeType": "text/css",
                                    "priority": "VeryHigh",
                                    "networkRequestTime": 370.68099999427795,
                                    "sessionTargetType": "page",
                                    "rendererStartTime": 370.33399987220764,
                                    "transferSize": 1009,
                                    "entity": "Google Fonts",
                                    "url": "https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&display=swap",
                                    "statusCode": 200,
                                    "protocol": "h2"
                                },
                                {
                                    "networkRequestTime": 370.95700001716614,
                                    "sessionTargetType": "page",
                                    "protocol": "h2",
                                    "url": "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
                                    "finished": true,
                                    "priority": "VeryHigh",
                                    "resourceSize": 22050,
                                    "entity": "Google Fonts",
                                    "mimeType": "text/css",
                                    "transferSize": 1596,
                                    "networkEndTime": 383.6339998245239,
                                    "statusCode": 200,
                                    "resourceType": "Stylesheet",
                                    "experimentalFromMainFrame": true,
                                    "rendererStartTime": 370.55399990081787
                                },
                                {
                                    "resourceType": "Stylesheet",
                                    "entity": "Google Fonts",
                                    "transferSize": 1283,
                                    "mimeType": "text/css",
                                    "statusCode": 200,
                                    "networkRequestTime": 371.07599997520447,
                                    "protocol": "h2",
                                    "resourceSize": 7803,
                                    "url": "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
                                    "priority": "VeryHigh",
                                    "finished": true,
                                    "sessionTargetType": "page",
                                    "rendererStartTime": 370.74199986457825,
                                    "networkEndTime": 378.01799988746643,
                                    "experimentalFromMainFrame": true
                                },
                                {
                                    "protocol": "h2",
                                    "resourceSize": 9227,
                                    "resourceType": "Stylesheet",
                                    "url": "https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap",
                                    "transferSize": 1304,
                                    "sessionTargetType": "page",
                                    "networkRequestTime": 371.3970000743866,
                                    "entity": "Google Fonts",
                                    "statusCode": 200,
                                    "mimeType": "text/css",
                                    "priority": "VeryHigh",
                                    "networkEndTime": 381.0769999027252,
                                    "finished": true,
                                    "rendererStartTime": 370.8829998970032,
                                    "experimentalFromMainFrame": true
                                },
                                {
                                    "networkRequestTime": 371.49399995803833,
                                    "priority": "VeryHigh",
                                    "url": "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
                                    "entity": "Google Fonts",
                                    "mimeType": "text/css",
                                    "resourceType": "Stylesheet",
                                    "rendererStartTime": 371.085000038147,
                                    "networkEndTime": 377.1689999103546,
                                    "protocol": "h2",
                                    "finished": true,
                                    "transferSize": 1100,
                                    "statusCode": 200,
                                    "experimentalFromMainFrame": true,
                                    "sessionTargetType": "page",
                                    "resourceSize": 1605
                                },
                                {
                                    "resourceSize": 0,
                                    "rendererStartTime": 563.9379999637604,
                                    "statusCode": 204,
                                    "mimeType": "text/plain",
                                    "experimentalFromMainFrame": true,
                                    "resourceType": "Fetch",
                                    "priority": "High",
                                    "finished": true,
                                    "entity": "Google Analytics",
                                    "url": "https://www.google-analytics.com/g/collect?v=2&tid=G-51P1R4XNJ0&gtm=45je49n0v9182208068za200&_p=1727269047132&gcd=13l3l3l3l1l1&npa=0&dma=0&tag_exp=0&cid=824757533.1727269047&ul=en-us&sr=800x600&uaa=x86&uab=64&uafvl=Chromium%3B128.0.6613.113%7CNot%253BA%253DBrand%3B24.0.0.0%7CHeadlessChrome%3B128.0.6613.113&uamb=0&uam=&uap=macOS&uapv=10.15.7&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&sid=1727269047&sct=1&seg=0&dl=https%3A%2F%2Ftakeuforward.org%2F&dt=takeuforward%20-%20Best%20Coding%20Tutorials%20for%20Free&en=page_view&_fv=1&_nsi=1&_ss=1&_ee=1&tfd=564",
                                    "networkEndTime": 596.9060001373291,
                                    "protocol": "h2",
                                    "transferSize": 399,
                                    "sessionTargetType": "page",
                                    "networkRequestTime": 564.8639998435974
                                },
                                {
                                    "transferSize": 4468,
                                    "protocol": "http/1.1",
                                    "mimeType": "text/html",
                                    "sessionTargetType": "page",
                                    "networkRequestTime": 1704.8179998397827,
                                    "rendererStartTime": 1703.5699999332428,
                                    "url": "https://api.razorpay.com/v1/checkout/public?traffic_env=baseline&build=520af2b9922ab248d9c032514f474eee5c598aa2&modern=1&unified_lite=1&checkout_v2=1&new_session=1",
                                    "resourceType": "Document",
                                    "networkEndTime": 2399.659999847412,
                                    "entity": "razorpay.com",
                                    "priority": "VeryHigh",
                                    "resourceSize": 4206,
                                    "finished": true,
                                    "statusCode": 200
                                },
                                {
                                    "statusCode": 200,
                                    "experimentalFromMainFrame": true,
                                    "transferSize": 63563,
                                    "resourceType": "Font",
                                    "networkRequestTime": 2150.0839998722076,
                                    "rendererStartTime": 2149.3420000076294,
                                    "networkEndTime": 2155.00400018692,
                                    "entity": "Google Fonts",
                                    "url": "https://fonts.gstatic.com/s/dmsans/v15/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2",
                                    "protocol": "h2",
                                    "priority": "VeryHigh",
                                    "resourceSize": 62752,
                                    "sessionTargetType": "page",
                                    "finished": true,
                                    "mimeType": "font/woff2"
                                },
                                {
                                    "protocol": "h2",
                                    "rendererStartTime": 2164.8369998931885,
                                    "statusCode": 200,
                                    "resourceSize": 15676,
                                    "networkEndTime": 2171.048000097275,
                                    "resourceType": "Font",
                                    "transferSize": 16488,
                                    "experimentalFromMainFrame": true,
                                    "entity": "Google Fonts",
                                    "mimeType": "font/woff2",
                                    "priority": "VeryHigh",
                                    "sessionTargetType": "page",
                                    "url": "https://fonts.gstatic.com/s/amaranth/v18/KtkpALODe433f0j1zMF-OMWl42H9FYud.woff2",
                                    "networkRequestTime": 2165.5609998703003,
                                    "finished": true
                                },
                                {
                                    "transferSize": 399,
                                    "finished": true,
                                    "experimentalFromMainFrame": true,
                                    "url": "https://www.google-analytics.com/g/collect?v=2&tid=G-51P1R4XNJ0&gtm=45je49n0v9182208068za200&_p=1727269047132&gcd=13l3l3l3l1l1&npa=0&dma=0&tag_exp=0&cid=824757533.1727269047&ul=en-us&sr=800x600&uaa=x86&uab=64&uafvl=Chromium%3B128.0.6613.113%7CNot%253BA%253DBrand%3B24.0.0.0%7CHeadlessChrome%3B128.0.6613.113&uamb=0&uam=&uap=macOS&uapv=10.15.7&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEA&_s=2&sid=1727269047&sct=1&seg=0&dl=https%3A%2F%2Ftakeuforward.org%2F&dt=takeuforward%20-%20Best%20Coding%20Tutorials%20for%20Free&en=scroll&epn.percent_scrolled=90&_et=7&tfd=2277",
                                    "protocol": "h2",
                                    "resourceType": "Fetch",
                                    "sessionTargetType": "page",
                                    "mimeType": "text/plain",
                                    "statusCode": 204,
                                    "priority": "High",
                                    "resourceSize": 0,
                                    "networkRequestTime": 2277.9939999580383,
                                    "entity": "Google Analytics",
                                    "rendererStartTime": 2277.055999994278,
                                    "networkEndTime": 2497.4560000896454
                                },
                                {
                                    "entity": "takeuforward.org",
                                    "rendererStartTime": 2284.228999853134,
                                    "url": "https://backend.takeuforward.org/api/homepage/reviews",
                                    "resourceType": "XHR",
                                    "experimentalFromMainFrame": true,
                                    "protocol": "h2",
                                    "resourceSize": 2763,
                                    "transferSize": 2137,
                                    "priority": "High",
                                    "networkEndTime": 2731.1429998874664,
                                    "finished": true,
                                    "mimeType": "application/json",
                                    "networkRequestTime": 2284.8689999580383,
                                    "sessionTargetType": "page",
                                    "statusCode": 200
                                },
                                {
                                    "protocol": "h2",
                                    "url": "https://backend.takeuforward.org/api/featureFlag/features",
                                    "transferSize": 968,
                                    "experimentalFromMainFrame": true,
                                    "rendererStartTime": 2285.2730000019073,
                                    "networkEndTime": 2895.4260001182556,
                                    "entity": "takeuforward.org",
                                    "resourceSize": 348,
                                    "networkRequestTime": 2286.2039999961853,
                                    "statusCode": 200,
                                    "sessionTargetType": "page",
                                    "priority": "High",
                                    "mimeType": "application/json",
                                    "finished": true,
                                    "resourceType": "XHR"
                                },
                                {
                                    "transferSize": 844,
                                    "networkEndTime": 2874.37299990654,
                                    "entity": "takeuforward.org",
                                    "experimentalFromMainFrame": true,
                                    "statusCode": 200,
                                    "url": "https://backend.takeuforward.org/api/featureFlag/get-active-banner",
                                    "sessionTargetType": "page",
                                    "networkRequestTime": 2287.6539998054504,
                                    "mimeType": "application/json",
                                    "rendererStartTime": 2286.2720000743866,
                                    "resourceSize": 28,
                                    "protocol": "h2",
                                    "finished": true,
                                    "priority": "High",
                                    "resourceType": "XHR"
                                },
                                {
                                    "sessionTargetType": "page",
                                    "resourceSize": 63176,
                                    "priority": "Low",
                                    "networkRequestTime": 2294.3209998607635,
                                    "url": "https://static.takeuforward.org/content/Athang-Kulkarni-BkK4feX-",
                                    "transferSize": 64070,
                                    "statusCode": 200,
                                    "resourceType": "Image",
                                    "experimentalFromMainFrame": true,
                                    "entity": "takeuforward.org",
                                    "mimeType": "image/jpeg",
                                    "protocol": "h2",
                                    "networkEndTime": 2805.531000137329,
                                    "rendererStartTime": 2293.625,
                                    "finished": true
                                },
                                {
                                    "sessionTargetType": "page",
                                    "transferSize": 134086,
                                    "finished": true,
                                    "networkRequestTime": 2294.444000005722,
                                    "statusCode": 200,
                                    "protocol": "h2",
                                    "resourceType": "Image",
                                    "networkEndTime": 2808.9769999980927,
                                    "url": "https://static.takeuforward.org/content/id_photo_white_compressed-Gaurav%20Poosarla-BZGWU5pZ",
                                    "entity": "takeuforward.org",
                                    "resourceSize": 133198,
                                    "mimeType": "image/png",
                                    "experimentalFromMainFrame": true,
                                    "priority": "Low",
                                    "rendererStartTime": 2294.018999814987
                                },
                                {
                                    "finished": true,
                                    "sessionTargetType": "page",
                                    "transferSize": 44582,
                                    "networkEndTime": 2738.686000108719,
                                    "rendererStartTime": 2294.2460000514984,
                                    "statusCode": 200,
                                    "entity": "takeuforward.org",
                                    "mimeType": "image/jpeg",
                                    "networkRequestTime": 2294.6749999523163,
                                    "protocol": "h2",
                                    "priority": "Low",
                                    "url": "https://static.takeuforward.org/content/Prajwal-Shah-xZVUY0qj",
                                    "resourceSize": 43688,
                                    "resourceType": "Image",
                                    "experimentalFromMainFrame": true
                                },
                                {
                                    "networkEndTime": 2900.082999944687,
                                    "entity": "takeuforward.org",
                                    "finished": true,
                                    "resourceSize": 125675,
                                    "rendererStartTime": 2294.4680001735687,
                                    "url": "https://static.takeuforward.org/content/K-Sanketh-kumar-DfeETlQ3",
                                    "statusCode": 200,
                                    "experimentalFromMainFrame": true,
                                    "transferSize": 126563,
                                    "priority": "Low",
                                    "protocol": "h2",
                                    "resourceType": "Image",
                                    "sessionTargetType": "page",
                                    "networkRequestTime": 2294.8810000419617,
                                    "mimeType": "image/jpeg"
                                },
                                {
                                    "entity": "takeuforward.org",
                                    "url": "https://static.takeuforward.org/content/Sankalp-jain-eLecJpHl",
                                    "finished": true,
                                    "mimeType": "image/jpeg",
                                    "protocol": "h2",
                                    "experimentalFromMainFrame": true,
                                    "networkEndTime": 2724.0629999637604,
                                    "priority": "Low",
                                    "sessionTargetType": "page",
                                    "transferSize": 13394,
                                    "resourceSize": 12506,
                                    "resourceType": "Image",
                                    "statusCode": 200,
                                    "networkRequestTime": 2295.164999961853,
                                    "rendererStartTime": 2294.680999994278
                                },
                                {
                                    "networkRequestTime": 2295.449999809265,
                                    "resourceType": "Image",
                                    "transferSize": 17441,
                                    "mimeType": "image/jpeg",
                                    "finished": true,
                                    "experimentalFromMainFrame": true,
                                    "protocol": "h2",
                                    "rendererStartTime": 2294.923000097275,
                                    "networkEndTime": 2762.399999856949,
                                    "statusCode": 200,
                                    "priority": "Low",
                                    "resourceSize": 16555,
                                    "url": "https://static.takeuforward.org/content/Anubhuti-Pandey-couG3Rtw",
                                    "entity": "takeuforward.org",
                                    "sessionTargetType": "page"
                                },
                                {
                                    "transferSize": 13376,
                                    "protocol": "h2",
                                    "networkEndTime": 2741.3389999866486,
                                    "resourceSize": 12482,
                                    "experimentalFromMainFrame": true,
                                    "statusCode": 200,
                                    "networkRequestTime": 2295.630999803543,
                                    "resourceType": "Image",
                                    "entity": "takeuforward.org",
                                    "sessionTargetType": "page",
                                    "mimeType": "image/jpeg",
                                    "url": "https://static.takeuforward.org/content/IMG_7930%20-%20Sudipta%20Basak-28We2pgU",
                                    "rendererStartTime": 2295.2089998722076,
                                    "priority": "Low",
                                    "finished": true
                                },
                                {
                                    "rendererStartTime": 2295.478999853134,
                                    "transferSize": 47117,
                                    "networkEndTime": 2882.572000026703,
                                    "experimentalFromMainFrame": true,
                                    "mimeType": "image/jpeg",
                                    "priority": "Low",
                                    "url": "https://static.takeuforward.org/content/Aditya-Mane-D8T2NtA-",
                                    "entity": "takeuforward.org",
                                    "protocol": "h2",
                                    "resourceType": "Image",
                                    "resourceSize": 46234,
                                    "statusCode": 200,
                                    "finished": true,
                                    "sessionTargetType": "page",
                                    "networkRequestTime": 2295.944000005722
                                },
                                {
                                    "mimeType": "image/jpeg",
                                    "finished": true,
                                    "resourceSize": 34373,
                                    "entity": "takeuforward.org",
                                    "protocol": "h2",
                                    "url": "https://static.takeuforward.org/content/IMG20221028085802~2%20-%20KUNDAN%20KUMAR-JG4BAazS",
                                    "sessionTargetType": "page",
                                    "priority": "Low",
                                    "transferSize": 35256,
                                    "experimentalFromMainFrame": true,
                                    "resourceType": "Image",
                                    "networkRequestTime": 2296.095999956131,
                                    "statusCode": 200,
                                    "networkEndTime": 2906.529000043869,
                                    "rendererStartTime": 2295.733999967575
                                },
                                {
                                    "transferSize": 31068,
                                    "statusCode": 200,
                                    "experimentalFromMainFrame": true,
                                    "protocol": "h2",
                                    "url": "https://static.takeuforward.org/content/Lalit-sharma-OUIHbXCu",
                                    "resourceSize": 30176,
                                    "resourceType": "Image",
                                    "sessionTargetType": "page",
                                    "networkEndTime": 2488.8760001659393,
                                    "priority": "Low",
                                    "entity": "takeuforward.org",
                                    "networkRequestTime": 2296.2999999523163,
                                    "mimeType": "image/jpeg",
                                    "finished": true,
                                    "rendererStartTime": 2295.9500000476837
                                },
                                {
                                    "protocol": "h2",
                                    "rendererStartTime": 2296.167000055313,
                                    "resourceSize": 6316,
                                    "mimeType": "image/jpeg",
                                    "statusCode": 200,
                                    "networkRequestTime": 2296.6050000190735,
                                    "transferSize": 7199,
                                    "resourceType": "Image",
                                    "priority": "Low",
                                    "experimentalFromMainFrame": true,
                                    "networkEndTime": 2520.507999897003,
                                    "sessionTargetType": "page",
                                    "entity": "takeuforward.org",
                                    "url": "https://static.takeuforward.org/content/IMG20240322132442%20-%20JYOTI%20PATIL-BhG5Ptn0",
                                    "finished": true
                                },
                                {
                                    "resourceType": "Image",
                                    "sessionTargetType": "page",
                                    "entity": "takeuforward.org",
                                    "networkRequestTime": 2296.9349999427795,
                                    "finished": true,
                                    "rendererStartTime": 2296.422000169754,
                                    "statusCode": 200,
                                    "resourceSize": 72163,
                                    "mimeType": "image/jpeg",
                                    "protocol": "h2",
                                    "priority": "Low",
                                    "networkEndTime": 2525.816999912262,
                                    "experimentalFromMainFrame": true,
                                    "url": "https://static.takeuforward.org/content/Avish-Mittal--1MO7Fba",
                                    "transferSize": 73047
                                },
                                {
                                    "sessionTargetType": "page",
                                    "entity": "takeuforward.org",
                                    "protocol": "h2",
                                    "networkRequestTime": 2297.2409999370575,
                                    "finished": true,
                                    "rendererStartTime": 2296.654000043869,
                                    "transferSize": 72036,
                                    "statusCode": 200,
                                    "mimeType": "image/jpeg",
                                    "resourceSize": 71148,
                                    "experimentalFromMainFrame": true,
                                    "url": "https://static.takeuforward.org/content/Aniket-jyP64DXX",
                                    "resourceType": "Image",
                                    "networkEndTime": 2819.9900000095367,
                                    "priority": "Low"
                                },
                                {
                                    "mimeType": "image/jpeg",
                                    "priority": "Low",
                                    "transferSize": 21835,
                                    "experimentalFromMainFrame": true,
                                    "statusCode": 200,
                                    "rendererStartTime": 2296.9469997882843,
                                    "protocol": "h2",
                                    "networkRequestTime": 2297.3949999809265,
                                    "entity": "takeuforward.org",
                                    "sessionTargetType": "page",
                                    "networkEndTime": 2497.582000017166,
                                    "resourceSize": 20943,
                                    "resourceType": "Image",
                                    "finished": true,
                                    "url": "https://static.takeuforward.org/content/Madhab-Kafle-rhMxLzaA"
                                },
                                {
                                    "networkRequestTime": 2297.6770000457764,
                                    "rendererStartTime": 2297.194000005722,
                                    "priority": "Low",
                                    "statusCode": 200,
                                    "finished": true,
                                    "resourceType": "Image",
                                    "mimeType": "image/jpeg",
                                    "url": "https://takeuforward.org/static/media/img.e05e06671578591d1613.jpg",
                                    "entity": "takeuforward.org",
                                    "resourceSize": 60035,
                                    "transferSize": 60830,
                                    "sessionTargetType": "page",
                                    "networkEndTime": 2398.5999999046326,
                                    "experimentalFromMainFrame": true,
                                    "protocol": "h2"
                                },
                                {
                                    "resourceType": "Image",
                                    "protocol": "h2",
                                    "priority": "Low",
                                    "entity": "takeuforward.org",
                                    "networkEndTime": 2515.848999977112,
                                    "finished": true,
                                    "resourceSize": 35665,
                                    "url": "https://takeuforward.org/static/media/profile.d6f93e1529485b96f009.jpg",
                                    "mimeType": "image/jpeg",
                                    "transferSize": 36424,
                                    "statusCode": 200,
                                    "sessionTargetType": "page",
                                    "rendererStartTime": 2297.412999868393,
                                    "networkRequestTime": 2297.861999988556,
                                    "experimentalFromMainFrame": true
                                },
                                {
                                    "transferSize": 21992,
                                    "experimentalFromMainFrame": true,
                                    "mimeType": "image/avif",
                                    "sessionTargetType": "page",
                                    "url": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
                                    "resourceSize": 21437,
                                    "networkRequestTime": 2298.176999807358,
                                    "rendererStartTime": 2297.6150000095367,
                                    "statusCode": 200,
                                    "priority": "Low",
                                    "entity": "unsplash.com",
                                    "networkEndTime": 2372.4639999866486,
                                    "protocol": "h2",
                                    "finished": true,
                                    "resourceType": "Image"
                                },
                                {
                                    "sessionTargetType": "page",
                                    "protocol": "h2",
                                    "resourceType": "Image",
                                    "rendererStartTime": 2297.9110000133514,
                                    "experimentalFromMainFrame": true,
                                    "entity": "unsplash.com",
                                    "url": "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
                                    "mimeType": "image/avif",
                                    "networkEndTime": 2323.316999912262,
                                    "resourceSize": 21736,
                                    "transferSize": 22291,
                                    "statusCode": 200,
                                    "networkRequestTime": 2298.415999889374,
                                    "priority": "Low",
                                    "finished": true
                                },
                                {
                                    "resourceType": "Image",
                                    "priority": "Low",
                                    "url": "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
                                    "networkEndTime": 2364.0859999656677,
                                    "resourceSize": 17500,
                                    "experimentalFromMainFrame": true,
                                    "mimeType": "image/avif",
                                    "sessionTargetType": "page",
                                    "finished": true,
                                    "protocol": "h2",
                                    "statusCode": 200,
                                    "rendererStartTime": 2298.148999929428,
                                    "transferSize": 18055,
                                    "networkRequestTime": 2298.686000108719,
                                    "entity": "unsplash.com"
                                },
                                {
                                    "protocol": "h2",
                                    "url": "https://checkout-static-next.razorpay.com/build/520af2b9922ab248d9c032514f474eee5c598aa2/v2-entry.modern.js",
                                    "finished": true,
                                    "transferSize": 21911,
                                    "mimeType": "application/javascript",
                                    "rendererStartTime": 2500.611999988556,
                                    "priority": "Low",
                                    "resourceType": "Script",
                                    "statusCode": 200,
                                    "networkEndTime": 2512.3389999866486,
                                    "networkRequestTime": 2503.7279999256134,
                                    "resourceSize": 63758,
                                    "entity": "razorpay.com",
                                    "sessionTargetType": "page"
                                },
                                {
                                    "mimeType": "application/javascript",
                                    "rendererStartTime": 2562.553999900818,
                                    "statusCode": 200,
                                    "sessionTargetType": "page",
                                    "resourceSize": 42553,
                                    "networkRequestTime": 2564.2269999980927,
                                    "finished": true,
                                    "priority": "Low",
                                    "networkEndTime": 2588.9210000038147,
                                    "protocol": "h2",
                                    "entity": "razorpay.com",
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-loader-50d766bb.modern.js",
                                    "transferSize": 6399,
                                    "resourceType": "Script"
                                },
                                {
                                    "priority": "Low",
                                    "protocol": "h2",
                                    "networkRequestTime": 2564.353999853134,
                                    "networkEndTime": 2571.885999917984,
                                    "statusCode": 200,
                                    "transferSize": 8149,
                                    "resourceSize": 19094,
                                    "rendererStartTime": 2563.2969999313354,
                                    "entity": "razorpay.com",
                                    "resourceType": "Script",
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-97124b6c.modern.js",
                                    "sessionTargetType": "page",
                                    "finished": true,
                                    "mimeType": "application/javascript"
                                },
                                {
                                    "priority": "Low",
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-5ff9663b.modern.js",
                                    "entity": "razorpay.com",
                                    "statusCode": 200,
                                    "resourceSize": 38663,
                                    "networkEndTime": 2589.3849999904633,
                                    "protocol": "h2",
                                    "mimeType": "application/javascript",
                                    "sessionTargetType": "page",
                                    "networkRequestTime": 2564.561999797821,
                                    "transferSize": 13020,
                                    "finished": true,
                                    "rendererStartTime": 2564.039999961853,
                                    "resourceType": "Script"
                                },
                                {
                                    "sessionTargetType": "page",
                                    "protocol": "h2",
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-cd8008e3.modern.js",
                                    "entity": "razorpay.com",
                                    "mimeType": "application/javascript",
                                    "resourceSize": 22582,
                                    "resourceType": "Script",
                                    "networkEndTime": 2574.9049999713898,
                                    "finished": true,
                                    "transferSize": 5808,
                                    "networkRequestTime": 2565.1930000782013,
                                    "statusCode": 200,
                                    "priority": "Low",
                                    "rendererStartTime": 2564.5090000629425
                                },
                                {
                                    "priority": "VeryHigh",
                                    "protocol": "h2",
                                    "mimeType": "text/css",
                                    "networkRequestTime": 2568.462000131607,
                                    "networkEndTime": 2580.6859998703003,
                                    "resourceSize": 86757,
                                    "sessionTargetType": "page",
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2.65fa66fd.2143.css",
                                    "transferSize": 16069,
                                    "statusCode": 200,
                                    "rendererStartTime": 2565.4619998931885,
                                    "entity": "razorpay.com",
                                    "finished": true,
                                    "resourceType": "Stylesheet"
                                },
                                {
                                    "resourceSize": 544620,
                                    "statusCode": 200,
                                    "rendererStartTime": 2565.9930000305176,
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-app-b5e67f2a.modern.js",
                                    "finished": true,
                                    "mimeType": "application/javascript",
                                    "networkRequestTime": 2568.611000061035,
                                    "transferSize": 141195,
                                    "entity": "razorpay.com",
                                    "protocol": "h2",
                                    "priority": "Low",
                                    "resourceType": "Script",
                                    "sessionTargetType": "page",
                                    "networkEndTime": 2588.1429998874664
                                },
                                {
                                    "priority": "VeryLow",
                                    "mimeType": "application/javascript",
                                    "transferSize": 3985,
                                    "protocol": "h2",
                                    "sessionTargetType": "page",
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-c36a1055.modern.js",
                                    "resourceType": "Other",
                                    "statusCode": 200,
                                    "entity": "razorpay.com",
                                    "finished": true,
                                    "networkEndTime": 2640.664999961853,
                                    "networkRequestTime": 2627.753000020981,
                                    "rendererStartTime": 2626.8749997615814,
                                    "resourceSize": 0
                                },
                                {
                                    "protocol": "h2",
                                    "networkEndTime": 2641.2549998760223,
                                    "resourceType": "Other",
                                    "resourceSize": 0,
                                    "statusCode": 200,
                                    "mimeType": "application/javascript",
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-4a6243b5.modern.js",
                                    "sessionTargetType": "page",
                                    "priority": "VeryLow",
                                    "rendererStartTime": 2627.3280000686646,
                                    "entity": "razorpay.com",
                                    "finished": true,
                                    "networkRequestTime": 2628.1279997825623,
                                    "transferSize": 23183
                                },
                                {
                                    "networkEndTime": 2646.3099999427795,
                                    "sessionTargetType": "page",
                                    "protocol": "h2",
                                    "networkRequestTime": 2628.545000076294,
                                    "statusCode": 200,
                                    "rendererStartTime": 2627.6310000419617,
                                    "transferSize": 12373,
                                    "entity": "razorpay.com",
                                    "mimeType": "application/javascript",
                                    "priority": "VeryLow",
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-saved-card-modal-content-da7bb494.modern.js",
                                    "finished": true,
                                    "resourceType": "Other",
                                    "resourceSize": 0
                                },
                                {
                                    "entity": "razorpay.com",
                                    "transferSize": 3819,
                                    "mimeType": "application/javascript",
                                    "priority": "VeryLow",
                                    "networkRequestTime": 2628.954999923706,
                                    "networkEndTime": 2644.1419999599457,
                                    "rendererStartTime": 2628.215000152588,
                                    "sessionTargetType": "page",
                                    "protocol": "h2",
                                    "resourceSize": 0,
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-d9b284ea.modern.js",
                                    "resourceType": "Other",
                                    "finished": true,
                                    "statusCode": 200
                                },
                                {
                                    "sessionTargetType": "page",
                                    "statusCode": 200,
                                    "rendererStartTime": 2628.5169999599457,
                                    "networkRequestTime": 2629.3789999485016,
                                    "priority": "VeryLow",
                                    "finished": true,
                                    "mimeType": "application/javascript",
                                    "entity": "razorpay.com",
                                    "resourceType": "Other",
                                    "resourceSize": 0,
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-card-block-16c322ba.modern.js",
                                    "networkEndTime": 2644.3580000400543,
                                    "transferSize": 3460,
                                    "protocol": "h2"
                                },
                                {
                                    "resourceSize": 0,
                                    "rendererStartTime": 2628.7829999923706,
                                    "networkEndTime": 2646.8819999694824,
                                    "sessionTargetType": "page",
                                    "resourceType": "Other",
                                    "protocol": "h2",
                                    "transferSize": 3305,
                                    "entity": "razorpay.com",
                                    "statusCode": 200,
                                    "priority": "VeryLow",
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-emi-block-d62018ec.modern.js",
                                    "finished": true,
                                    "mimeType": "application/javascript",
                                    "networkRequestTime": 2630.0920000076294
                                },
                                {
                                    "resourceSize": 0,
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-upi-block-0792ad9c.modern.js",
                                    "statusCode": 200,
                                    "mimeType": "application/javascript",
                                    "transferSize": 5822,
                                    "sessionTargetType": "page",
                                    "resourceType": "Other",
                                    "networkRequestTime": 2630.2960000038147,
                                    "finished": true,
                                    "protocol": "h2",
                                    "networkEndTime": 2647.0920000076294,
                                    "priority": "VeryLow",
                                    "rendererStartTime": 2629.0650000572205,
                                    "entity": "razorpay.com"
                                },
                                {
                                    "sessionTargetType": "page",
                                    "networkEndTime": 2647.955999851227,
                                    "resourceType": "Other",
                                    "entity": "razorpay.com",
                                    "transferSize": 3214,
                                    "mimeType": "application/javascript",
                                    "protocol": "h2",
                                    "rendererStartTime": 2629.3940000534058,
                                    "priority": "VeryLow",
                                    "resourceSize": 0,
                                    "networkRequestTime": 2630.773999929428,
                                    "finished": true,
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-netbanking-block-dfa46b3f.modern.js",
                                    "statusCode": 200
                                },
                                {
                                    "networkRequestTime": 2633.143999814987,
                                    "rendererStartTime": 2629.6989998817444,
                                    "resourceSize": 0,
                                    "entity": "razorpay.com",
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-paylater-block-5cbc66fe.modern.js",
                                    "statusCode": 200,
                                    "mimeType": "application/javascript",
                                    "networkEndTime": 2666.858999967575,
                                    "priority": "VeryLow",
                                    "finished": true,
                                    "sessionTargetType": "page",
                                    "protocol": "h2",
                                    "transferSize": 2380,
                                    "resourceType": "Other"
                                },
                                {
                                    "resourceType": "Other",
                                    "entity": "razorpay.com",
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-wallet-block-cef2c979.modern.js",
                                    "rendererStartTime": 2629.996999979019,
                                    "finished": true,
                                    "networkEndTime": 2648.151999950409,
                                    "statusCode": 200,
                                    "mimeType": "application/javascript",
                                    "networkRequestTime": 2635.555999994278,
                                    "resourceSize": 0,
                                    "transferSize": 1833,
                                    "priority": "VeryLow",
                                    "sessionTargetType": "page",
                                    "protocol": "h2"
                                },
                                {
                                    "resourceSize": 533,
                                    "url": "https://accounts.google.com/gsi/style",
                                    "mimeType": "text/css",
                                    "entity": "Other Google APIs/SDKs",
                                    "networkRequestTime": 3286.444000005722,
                                    "protocol": "h2",
                                    "priority": "VeryHigh",
                                    "resourceType": "Stylesheet",
                                    "transferSize": 1410,
                                    "statusCode": 200,
                                    "finished": true,
                                    "rendererStartTime": 3285.9030001163483,
                                    "networkEndTime": 3301.5319998264313,
                                    "sessionTargetType": "page",
                                    "experimentalFromMainFrame": true
                                },
                                {
                                    "priority": "VeryHigh",
                                    "networkEndTime": 3360.0240001678467,
                                    "resourceType": "Document",
                                    "rendererStartTime": 3293.555999994278,
                                    "entity": "Other Google APIs/SDKs",
                                    "mimeType": "text/html",
                                    "sessionTargetType": "page",
                                    "networkRequestTime": 3294.861999988556,
                                    "resourceSize": 129861,
                                    "statusCode": 200,
                                    "transferSize": 47335,
                                    "url": "https://accounts.google.com/gsi/button?type=standard&theme=filled_black&size=large&text=undefined&shape=rectangle&logo_alignment=undefined&width=undefined&locale=undefined&click_listener=undefined&client_id=590234420126-hc9007chffeh5rh8j5gcositk2ia89do.apps.googleusercontent.com&iframe_id=gsi_50034_323059&as=rWZBN80hXuCp8Ns58oWcZw",
                                    "finished": true,
                                    "protocol": "h2"
                                }
                            ],
                            "debugData": {
                                "networkStartTimeTs": 1653187120970,
                                "type": "debugdata"
                            }
                        }
                    },
                    "notification-on-start": {
                        "id": "notification-on-start",
                        "title": "Avoids requesting the notification permission on page load",
                        "description": "Users are mistrustful of or confused by sites that request to send notifications without context. Consider tying the request to user gestures instead. [Learn more about responsibly getting permission for notifications](https://developer.chrome.com/docs/lighthouse/best-practices/notification-on-start/).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
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
                        "displayValue": "Potential savings of 153 KiB",
                        "metricSavings": {
                            "LCP": 0,
                            "FCP": 0
                        },
                        "details": {
                            "items": [
                                {
                                    "wastedPercent": 100,
                                    "wastedBytes": 60035,
                                    "requestStartTime": 1653189418.647,
                                    "node": {
                                        "nodeLabel": "div.pt-10 > div.flex > div.flex > img.xl:w-[500px]",
                                        "boundingRect": {
                                            "width": 500,
                                            "left": 152,
                                            "right": 652,
                                            "top": 3817,
                                            "height": 500,
                                            "bottom": 4317
                                        },
                                        "type": "node",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,IMG",
                                        "lhId": "1-96-IMG",
                                        "snippet": "<img class=\"xl:w-[500px] xl:h-[500px] lg:w-[545px] lg:h-[545px]  sm:h-[350px] sm:w-[45…\" src=\"/static/media/img.e05e06671578591d1613.jpg\" alt=\"\">",
                                        "selector": "div.pt-10 > div.flex > div.flex > img.xl:w-[500px]"
                                    },
                                    "url": "https://takeuforward.org/static/media/img.e05e06671578591d1613.jpg",
                                    "totalBytes": 60035
                                },
                                {
                                    "wastedPercent": 100,
                                    "totalBytes": 35665,
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,2,DIV,1,DIV,0,DIV,0,IMG",
                                        "selector": "div.flex > div.sm:p-10 > div.flex > img.sm:w-[60px]",
                                        "lhId": "1-97-IMG",
                                        "snippet": "<img src=\"/static/media/profile.d6f93e1529485b96f009.jpg\" alt=\"striver\" class=\"sm:w-[60px] w-[40px] sm:h-[60px] h-[40px] rounded-full\">",
                                        "nodeLabel": "striver",
                                        "boundingRect": {
                                            "right": 752,
                                            "width": 60,
                                            "bottom": 3917,
                                            "top": 3857,
                                            "height": 60,
                                            "left": 692
                                        },
                                        "type": "node"
                                    },
                                    "requestStartTime": 1653189418.832,
                                    "wastedBytes": 35665,
                                    "url": "https://takeuforward.org/static/media/profile.d6f93e1529485b96f009.jpg"
                                },
                                {
                                    "requestStartTime": 1653189419.386,
                                    "url": "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
                                    "node": {
                                        "type": "node",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,5,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,1,IMG",
                                        "selector": "div.flex > div.max-w-6xl > div.flex > img.w-10",
                                        "lhId": "1-99-IMG",
                                        "boundingRect": {
                                            "width": 40,
                                            "top": 5286,
                                            "right": 688,
                                            "left": 648,
                                            "height": 40,
                                            "bottom": 5326
                                        },
                                        "snippet": "<img class=\"w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800\" src=\"https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.…\" alt=\"Image Description\">",
                                        "nodeLabel": "Image Description"
                                    },
                                    "wastedPercent": 100,
                                    "wastedBytes": 21736,
                                    "totalBytes": 21736
                                },
                                {
                                    "requestStartTime": 1653189419.1469998,
                                    "node": {
                                        "selector": "div.flex > div.max-w-6xl > div.flex > img.w-10",
                                        "snippet": "<img class=\"w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800\" src=\"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.…\" alt=\"Image Description\">",
                                        "lhId": "1-98-IMG",
                                        "boundingRect": {
                                            "bottom": 5326,
                                            "height": 40,
                                            "right": 656,
                                            "left": 616,
                                            "width": 40,
                                            "top": 5286
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,5,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,IMG",
                                        "type": "node",
                                        "nodeLabel": "Image Description"
                                    },
                                    "url": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
                                    "wastedPercent": 100,
                                    "wastedBytes": 21437,
                                    "totalBytes": 21437
                                },
                                {
                                    "node": {
                                        "selector": "div.flex > div.max-w-6xl > div.flex > img.w-10",
                                        "boundingRect": {
                                            "width": 40,
                                            "bottom": 5326,
                                            "left": 680,
                                            "top": 5286,
                                            "right": 720,
                                            "height": 40
                                        },
                                        "nodeLabel": "Image Description",
                                        "type": "node",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,5,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,2,IMG",
                                        "lhId": "1-100-IMG",
                                        "snippet": "<img class=\"w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800\" src=\"https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.…\" alt=\"Image Description\">"
                                    },
                                    "wastedPercent": 100,
                                    "requestStartTime": 1653189419.6560001,
                                    "totalBytes": 17500,
                                    "url": "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
                                    "wastedBytes": 17500
                                }
                            ],
                            "sortedBy": [
                                "wastedBytes"
                            ],
                            "headings": [
                                {
                                    "valueType": "node",
                                    "key": "node"
                                },
                                {
                                    "valueType": "url",
                                    "label": "URL",
                                    "key": "url"
                                },
                                {
                                    "label": "Resource Size",
                                    "key": "totalBytes",
                                    "valueType": "bytes"
                                },
                                {
                                    "valueType": "bytes",
                                    "key": "wastedBytes",
                                    "label": "Potential Savings"
                                }
                            ],
                            "type": "opportunity",
                            "overallSavingsBytes": 156373,
                            "debugData": {
                                "type": "debugdata",
                                "metricSavings": {
                                    "FCP": 0,
                                    "LCP": 0
                                }
                            },
                            "overallSavingsMs": 0
                        },
                        "warnings": [],
                        "numericValue": 0,
                        "numericUnit": "millisecond"
                    },
                    "canonical": {
                        "id": "canonical",
                        "title": "Document has a valid `rel=canonical`",
                        "description": "Canonical links suggest which URL to show in search results. [Learn more about canonical links](https://developer.chrome.com/docs/lighthouse/seo/canonical/).",
                        "score": 1,
                        "scoreDisplayMode": "binary"
                    },
                    "total-byte-weight": {
                        "id": "total-byte-weight",
                        "title": "Avoids enormous network payloads",
                        "description": "Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/).",
                        "score": 1,
                        "scoreDisplayMode": "informative",
                        "displayValue": "Total size was 2,661 KiB",
                        "details": {
                            "type": "table",
                            "items": [
                                {
                                    "url": "https://takeuforward.org/static/js/main.e1dada2b.js",
                                    "totalBytes": 1154993
                                },
                                {
                                    "totalBytes": 141195,
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-app-b5e67f2a.modern.js"
                                },
                                {
                                    "totalBytes": 134086,
                                    "url": "https://static.takeuforward.org/content/id_photo_white_compressed-Gaurav%20Poosarla-BZGWU5pZ"
                                },
                                {
                                    "totalBytes": 126563,
                                    "url": "https://static.takeuforward.org/content/K-Sanketh-kumar-DfeETlQ3"
                                },
                                {
                                    "totalBytes": 105916,
                                    "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0"
                                },
                                {
                                    "url": "https://accounts.google.com/gsi/client",
                                    "totalBytes": 88852
                                },
                                {
                                    "url": "https://static.takeuforward.org/content/Avish-Mittal--1MO7Fba",
                                    "totalBytes": 73047
                                },
                                {
                                    "url": "https://static.takeuforward.org/content/Aniket-jyP64DXX",
                                    "totalBytes": 72036
                                },
                                {
                                    "url": "https://static.takeuforward.org/content/Athang-Kulkarni-BkK4feX-",
                                    "totalBytes": 64070
                                },
                                {
                                    "url": "https://fonts.gstatic.com/s/dmsans/v15/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2",
                                    "totalBytes": 63563
                                }
                            ],
                            "sortedBy": [
                                "totalBytes"
                            ],
                            "headings": [
                                {
                                    "key": "url",
                                    "valueType": "url",
                                    "label": "URL"
                                },
                                {
                                    "key": "totalBytes",
                                    "valueType": "bytes",
                                    "label": "Transfer Size"
                                }
                            ]
                        },
                        "numericValue": 2724426,
                        "numericUnit": "byte"
                    },
                    "image-alt": {
                        "id": "image-alt",
                        "title": "Image elements have `[alt]` attributes",
                        "description": "Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.10/image-alt).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "headings": [],
                            "type": "table",
                            "items": []
                        }
                    },
                    "legacy-javascript": {
                        "id": "legacy-javascript",
                        "title": "Avoid serving legacy JavaScript to modern browsers",
                        "description": "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
                        "score": 0,
                        "scoreDisplayMode": "metricSavings",
                        "displayValue": "Potential savings of 21 KiB",
                        "metricSavings": {
                            "LCP": 50,
                            "FCP": 0
                        },
                        "details": {
                            "headings": [
                                {
                                    "key": "url",
                                    "label": "URL",
                                    "valueType": "url",
                                    "subItemsHeading": {
                                        "valueType": "source-location",
                                        "key": "location"
                                    }
                                },
                                {
                                    "subItemsHeading": {
                                        "key": "signal"
                                    },
                                    "valueType": "code",
                                    "key": null
                                },
                                {
                                    "valueType": "bytes",
                                    "key": "wastedBytes",
                                    "label": "Potential Savings"
                                }
                            ],
                            "debugData": {
                                "metricSavings": {
                                    "FCP": 0,
                                    "LCP": 40
                                },
                                "type": "debugdata"
                            },
                            "type": "opportunity",
                            "sortedBy": [
                                "wastedBytes"
                            ],
                            "overallSavingsMs": 40,
                            "overallSavingsBytes": 21576,
                            "items": [
                                {
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "signal": "Array.prototype.find",
                                                "location": {
                                                    "column": 86520,
                                                    "url": "https://checkout.razorpay.com/v1/checkout.js",
                                                    "line": 0,
                                                    "urlProvider": "network",
                                                    "type": "source-location"
                                                }
                                            },
                                            {
                                                "signal": "Array.prototype.findIndex",
                                                "location": {
                                                    "line": 0,
                                                    "column": 87348,
                                                    "urlProvider": "network",
                                                    "url": "https://checkout.razorpay.com/v1/checkout.js",
                                                    "type": "source-location"
                                                }
                                            },
                                            {
                                                "signal": "Array.from",
                                                "location": {
                                                    "type": "source-location",
                                                    "column": 87862,
                                                    "line": 0,
                                                    "urlProvider": "network",
                                                    "url": "https://checkout.razorpay.com/v1/checkout.js"
                                                }
                                            },
                                            {
                                                "signal": "Array.prototype.fill",
                                                "location": {
                                                    "column": 88740,
                                                    "url": "https://checkout.razorpay.com/v1/checkout.js",
                                                    "urlProvider": "network",
                                                    "type": "source-location",
                                                    "line": 0
                                                }
                                            },
                                            {
                                                "signal": "Function.prototype.name",
                                                "location": {
                                                    "type": "source-location",
                                                    "url": "https://checkout.razorpay.com/v1/checkout.js",
                                                    "column": 89461,
                                                    "line": 0,
                                                    "urlProvider": "network"
                                                }
                                            },
                                            {
                                                "location": {
                                                    "url": "https://checkout.razorpay.com/v1/checkout.js",
                                                    "column": 89706,
                                                    "line": 0,
                                                    "type": "source-location",
                                                    "urlProvider": "network"
                                                },
                                                "signal": "Array.prototype.filter"
                                            },
                                            {
                                                "signal": "Object.entries",
                                                "location": {
                                                    "type": "source-location",
                                                    "line": 0,
                                                    "urlProvider": "network",
                                                    "column": 90257,
                                                    "url": "https://checkout.razorpay.com/v1/checkout.js"
                                                }
                                            },
                                            {
                                                "location": {
                                                    "type": "source-location",
                                                    "column": 90387,
                                                    "urlProvider": "network",
                                                    "line": 0,
                                                    "url": "https://checkout.razorpay.com/v1/checkout.js"
                                                },
                                                "signal": "Object.values"
                                            }
                                        ]
                                    },
                                    "wastedBytes": 12274,
                                    "totalBytes": 0,
                                    "url": "https://checkout.razorpay.com/v1/checkout.js"
                                },
                                {
                                    "wastedBytes": 9302,
                                    "url": "https://takeuforward.org/static/js/main.e1dada2b.js",
                                    "totalBytes": 0,
                                    "subItems": {
                                        "items": [
                                            {
                                                "location": {
                                                    "column": 2930,
                                                    "line": 1,
                                                    "url": "https://takeuforward.org/static/js/main.e1dada2b.js",
                                                    "type": "source-location",
                                                    "urlProvider": "network"
                                                },
                                                "signal": "@babel/plugin-transform-classes"
                                            },
                                            {
                                                "location": {
                                                    "type": "source-location",
                                                    "urlProvider": "network",
                                                    "column": 636384,
                                                    "line": 1,
                                                    "url": "https://takeuforward.org/static/js/main.e1dada2b.js"
                                                },
                                                "signal": "Object.keys"
                                            },
                                            {
                                                "signal": "Array.prototype.find",
                                                "location": {
                                                    "url": "https://takeuforward.org/static/js/main.e1dada2b.js",
                                                    "line": 1,
                                                    "urlProvider": "network",
                                                    "type": "source-location",
                                                    "column": 822323
                                                }
                                            },
                                            {
                                                "signal": "Date.now",
                                                "location": {
                                                    "url": "https://takeuforward.org/static/js/main.e1dada2b.js",
                                                    "column": 1989501,
                                                    "urlProvider": "network",
                                                    "type": "source-location",
                                                    "line": 171
                                                }
                                            }
                                        ],
                                        "type": "subitems"
                                    }
                                }
                            ]
                        },
                        "numericValue": 40,
                        "numericUnit": "millisecond"
                    },
                    "layout-shifts": {
                        "id": "layout-shifts",
                        "title": "Avoid large layout shifts",
                        "description": "These are the largest layout shifts observed on the page. Each table item represents a single layout shift, and shows the element that shifted the most. Below each item are possible root causes that led to the layout shift. Some of these layout shifts may not be included in the CLS metric value due to [windowing](https://web.dev/articles/cls#what_is_cls). [Learn how to improve CLS](https://web.dev/articles/optimize-cls)",
                        "score": 1,
                        "scoreDisplayMode": "informative",
                        "displayValue": "1 layout shift found",
                        "metricSavings": {
                            "CLS": 0.083
                        },
                        "details": {
                            "items": [
                                {
                                    "subItems": {
                                        "type": "subitems",
                                        "items": [
                                            {
                                                "cause": "Media element lacking an explicit size",
                                                "extra": {
                                                    "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                                    "nodeLabel": "img",
                                                    "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Aditya-Mane-D8T2NtA-\" alt=\"img\">",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,7,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                                    "lhId": "page-2-IMG",
                                                    "boundingRect": {
                                                        "height": 40,
                                                        "width": 40,
                                                        "left": 3126,
                                                        "right": 3166,
                                                        "top": 3204,
                                                        "bottom": 3244
                                                    },
                                                    "type": "node"
                                                }
                                            },
                                            {
                                                "extra": {
                                                    "nodeLabel": "img",
                                                    "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                                    "type": "node",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,3,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                                    "boundingRect": {
                                                        "right": 1426,
                                                        "bottom": 3244,
                                                        "top": 3204,
                                                        "left": 1386,
                                                        "width": 40,
                                                        "height": 40
                                                    },
                                                    "lhId": "page-3-IMG",
                                                    "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/K-Sanketh-kumar-DfeETlQ3\" alt=\"img\">"
                                                },
                                                "cause": "Media element lacking an explicit size"
                                            },
                                            {
                                                "cause": "Media element lacking an explicit size",
                                                "extra": {
                                                    "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                                    "lhId": "page-4-IMG",
                                                    "boundingRect": {
                                                        "left": 3561,
                                                        "top": 3215,
                                                        "width": 39,
                                                        "height": 40,
                                                        "right": 3600,
                                                        "bottom": 3255
                                                    },
                                                    "nodeLabel": "img",
                                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,8,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                                    "type": "node",
                                                    "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/IMG20221028085802~2%20-%20KUNDAN%2…\" alt=\"img\">"
                                                }
                                            },
                                            {
                                                "extra": {
                                                    "type": "url",
                                                    "value": "https://checkout-static-next.razorpay.com/build/chunks/v2.65fa66fd.2143.css"
                                                },
                                                "cause": "A late network request adjusted the page layout"
                                            }
                                        ]
                                    },
                                    "score": 0.08266650908215079,
                                    "node": {
                                        "snippet": "<div class=\"grid grid-cols-2 lg:grid-cols-3 gap-6 mt-10\">",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV",
                                        "selector": "div.max-w-8xl > div.pt-24 > div.flex > div.grid",
                                        "nodeLabel": "Striver’s DSA Sheet\n\nBoost your DSA skills with our handy cheat sheets.\n\nTry it…",
                                        "type": "node",
                                        "boundingRect": {
                                            "right": 1184,
                                            "height": 608,
                                            "left": 152,
                                            "width": 1032,
                                            "top": 515,
                                            "bottom": 1123
                                        },
                                        "lhId": "page-1-DIV"
                                    }
                                }
                            ],
                            "type": "table",
                            "headings": [
                                {
                                    "valueType": "node",
                                    "subItemsHeading": {
                                        "key": "extra"
                                    },
                                    "label": "Element",
                                    "key": "node"
                                },
                                {
                                    "granularity": 0.001,
                                    "key": "score",
                                    "subItemsHeading": {
                                        "key": "cause",
                                        "valueType": "text"
                                    },
                                    "valueType": "numeric",
                                    "label": "Layout shift score"
                                }
                            ]
                        }
                    },
                    "heading-order": {
                        "id": "heading-order",
                        "title": "Heading elements are not in a sequentially-descending order",
                        "description": "Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more about heading order](https://dequeuniversity.com/rules/axe/4.10/heading-order).",
                        "score": 0,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "type": "table",
                            "items": [
                                {
                                    "node": {
                                        "explanation": "Fix any of the following:\n  Heading order invalid",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,0,H5",
                                        "snippet": "<h5 class=\"text-xl text-red-600 capitalize font-semibold\">",
                                        "nodeLabel": "Testimonials",
                                        "type": "node",
                                        "selector": "div.max-w-8xl > div.pt-10 > div.flex > h5.text-xl",
                                        "boundingRect": {
                                            "width": 120,
                                            "right": 727,
                                            "left": 608,
                                            "bottom": 2796,
                                            "top": 2766,
                                            "height": 30
                                        },
                                        "lhId": "1-19-H5"
                                    }
                                },
                                {
                                    "node": {
                                        "explanation": "Fix any of the following:\n  Heading order invalid",
                                        "type": "node",
                                        "boundingRect": {
                                            "height": 30,
                                            "width": 122,
                                            "bottom": 3687,
                                            "top": 3657,
                                            "left": 607,
                                            "right": 729
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,0,H5",
                                        "lhId": "1-21-H5",
                                        "snippet": "<h5 class=\"text-xl text-red-600 capitalize font-semibold\">",
                                        "selector": "div.max-w-8xl > div.pt-10 > div.flex > h5.text-xl",
                                        "nodeLabel": "INSTRUCTOR"
                                    }
                                }
                            ],
                            "debugData": {
                                "impact": "moderate",
                                "type": "debugdata",
                                "tags": [
                                    "cat.semantics",
                                    "best-practice"
                                ]
                            },
                            "headings": [
                                {
                                    "key": "node",
                                    "subItemsHeading": {
                                        "key": "relatedNode",
                                        "valueType": "node"
                                    },
                                    "valueType": "node",
                                    "label": "Failing Elements"
                                }
                            ]
                        }
                    },
                    "aria-meter-name": {
                        "id": "aria-meter-name",
                        "title": "ARIA `meter` elements have accessible names",
                        "description": "When a meter element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `meter` elements](https://dequeuniversity.com/rules/axe/4.10/aria-meter-name).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "th-has-data-cells": {
                        "id": "th-has-data-cells",
                        "title": "`<th>` elements and elements with `[role=\"columnheader\"/\"rowheader\"]` have data cells they describe.",
                        "description": "Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.10/th-has-data-cells).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "first-contentful-paint": {
                        "id": "first-contentful-paint",
                        "title": "First Contentful Paint",
                        "description": "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
                        "score": 0.88,
                        "scoreDisplayMode": "numeric",
                        "displayValue": "1.0 s",
                        "numericValue": 956.3600317197145,
                        "numericUnit": "millisecond"
                    },
                    "third-party-cookies": {
                        "id": "third-party-cookies",
                        "title": "Avoids third-party cookies",
                        "description": "Chrome is moving towards a new experience that allows users to choose to browse without third-party cookies. [Learn more about third-party cookies](https://developers.google.com/privacy-sandbox/cookies).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "headings": [],
                            "type": "table",
                            "items": []
                        }
                    },
                    "aria-deprecated-role": {
                        "id": "aria-deprecated-role",
                        "title": "Deprecated ARIA roles were not used",
                        "description": "Deprecated ARIA roles may not be processed correctly by assistive technology. [Learn more about deprecated ARIA roles](https://dequeuniversity.com/rules/axe/4.10/aria-deprecated-role).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "items": [],
                            "headings": [],
                            "type": "table"
                        }
                    },
                    "aria-prohibited-attr": {
                        "id": "aria-prohibited-attr",
                        "title": "Elements use only permitted ARIA attributes",
                        "description": "Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies. [Learn more about prohibited ARIA roles](https://dequeuniversity.com/rules/axe/4.10/aria-prohibited-attr).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "type": "table",
                            "items": [],
                            "headings": []
                        }
                    },
                    "dom-size": {
                        "id": "dom-size",
                        "title": "Avoid an excessive DOM size",
                        "description": "A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn how to avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size/).",
                        "score": 0,
                        "scoreDisplayMode": "metricSavings",
                        "displayValue": "983 elements",
                        "metricSavings": {
                            "TBT": 50
                        },
                        "details": {
                            "items": [
                                {
                                    "statistic": "Total DOM Elements",
                                    "value": {
                                        "granularity": 1,
                                        "value": 983,
                                        "type": "numeric"
                                    }
                                },
                                {
                                    "value": {
                                        "granularity": 1,
                                        "value": 19,
                                        "type": "numeric"
                                    },
                                    "statistic": "Maximum DOM Depth",
                                    "node": {
                                        "boundingRect": {
                                            "height": 0,
                                            "bottom": 0,
                                            "top": 0,
                                            "right": 0,
                                            "left": 0,
                                            "width": 0
                                        },
                                        "type": "node",
                                        "lhId": "1-72-stop",
                                        "snippet": "<stop stop-color=\"#FFDD55\">",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,2,A,0,DIV,0,DIV,1,DIV,1,svg,3,defs,0,radialGradient,0,stop",
                                        "selector": "svg.md:w-[24px] > defs > radialgradient#paint0_radial_404_3127 > stop",
                                        "nodeLabel": "svg.md:w-[24px] > defs > radialgradient#paint0_radial_404_3127 > stop"
                                    }
                                },
                                {
                                    "statistic": "Maximum Child Elements",
                                    "node": {
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,0,DIV,0,DIV,0,DIV,0,DIV,3,DIV,2,A,0,DIV,0,svg",
                                        "boundingRect": {
                                            "left": 897,
                                            "top": 556,
                                            "bottom": 620,
                                            "width": 65,
                                            "height": 64,
                                            "right": 962
                                        },
                                        "type": "node",
                                        "nodeLabel": "div.grid > a.dark:bg-[#ffffff0d] > div.p-4 > svg.md:w-[65px]",
                                        "lhId": "1-73-svg",
                                        "snippet": "<svg class=\"md:w-[65px] md:h-[64px] w-[40px] h-[40px]\" viewBox=\"0 0 64 64\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">",
                                        "selector": "div.grid > a.dark:bg-[#ffffff0d] > div.p-4 > svg.md:w-[65px]"
                                    },
                                    "value": {
                                        "granularity": 1,
                                        "value": 14,
                                        "type": "numeric"
                                    }
                                }
                            ],
                            "headings": [
                                {
                                    "label": "Statistic",
                                    "valueType": "text",
                                    "key": "statistic"
                                },
                                {
                                    "key": "node",
                                    "label": "Element",
                                    "valueType": "node"
                                },
                                {
                                    "valueType": "numeric",
                                    "label": "Value",
                                    "key": "value"
                                }
                            ],
                            "type": "table"
                        },
                        "numericValue": 983,
                        "numericUnit": "element"
                    },
                    "no-document-write": {
                        "id": "no-document-write",
                        "title": "Avoids `document.write()`",
                        "description": "For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn how to avoid document.write()](https://developer.chrome.com/docs/lighthouse/best-practices/no-document-write/).",
                        "score": 1,
                        "scoreDisplayMode": "metricSavings",
                        "details": {
                            "headings": [],
                            "items": [],
                            "type": "table"
                        }
                    },
                    "input-button-name": {
                        "id": "input-button-name",
                        "title": "Input buttons have discernible text.",
                        "description": "Adding discernable and accessible text to input buttons may help screen reader users understand the purpose of the input button. [Learn more about input buttons](https://dequeuniversity.com/rules/axe/4.10/input-button-name).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "skip-link": {
                        "id": "skip-link",
                        "title": "Skip links are focusable.",
                        "description": "Including a skip link can help users skip to the main content to save time. [Learn more about skip links](https://dequeuniversity.com/rules/axe/4.10/skip-link).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "unused-javascript": {
                        "id": "unused-javascript",
                        "title": "Reduce unused JavaScript",
                        "description": "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
                        "score": 0,
                        "scoreDisplayMode": "metricSavings",
                        "displayValue": "Potential savings of 1,119 KiB",
                        "metricSavings": {
                            "LCP": 700,
                            "FCP": 0
                        },
                        "details": {
                            "headings": [
                                {
                                    "label": "URL",
                                    "valueType": "url",
                                    "key": "url",
                                    "subItemsHeading": {
                                        "valueType": "code",
                                        "key": "source"
                                    }
                                },
                                {
                                    "label": "Transfer Size",
                                    "valueType": "bytes",
                                    "subItemsHeading": {
                                        "key": "sourceBytes"
                                    },
                                    "key": "totalBytes"
                                },
                                {
                                    "label": "Potential Savings",
                                    "key": "wastedBytes",
                                    "subItemsHeading": {
                                        "key": "sourceWastedBytes"
                                    },
                                    "valueType": "bytes"
                                }
                            ],
                            "items": [
                                {
                                    "totalBytes": 1154158,
                                    "wastedBytes": 809441,
                                    "url": "https://takeuforward.org/static/js/main.e1dada2b.js",
                                    "wastedPercent": 70.13255612544818
                                },
                                {
                                    "totalBytes": 140466,
                                    "url": "https://checkout-static-next.razorpay.com/build/chunks/v2-entry-app-b5e67f2a.modern.js",
                                    "wastedPercent": 99.54236351248859,
                                    "wastedBytes": 139823
                                },
                                {
                                    "wastedPercent": 81.85601635514018,
                                    "wastedBytes": 71756,
                                    "totalBytes": 87661,
                                    "url": "https://accounts.google.com/gsi/client"
                                },
                                {
                                    "url": "https://accounts.google.com/gsi/client",
                                    "wastedBytes": 64335,
                                    "totalBytes": 87661,
                                    "wastedPercent": 73.39068512919187
                                },
                                {
                                    "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0",
                                    "totalBytes": 105229,
                                    "wastedPercent": 36.77243766223551,
                                    "wastedBytes": 38695
                                },
                                {
                                    "url": "https://accounts.google.com/gsi/button?type=standard&theme=filled_black&size=large&text=undefined&shape=rectangle&logo_alignment=undefined&width=undefined&locale=undefined&click_listener=undefined&client_id=590234420126-hc9007chffeh5rh8j5gcositk2ia89do.apps.googleusercontent.com&iframe_id=gsi_50034_323059&as=rWZBN80hXuCp8Ns58oWcZw",
                                    "wastedBytes": 22055,
                                    "totalBytes": 42771,
                                    "wastedPercent": 51.565483008781975
                                }
                            ],
                            "overallSavingsMs": 710,
                            "sortedBy": [
                                "wastedBytes"
                            ],
                            "overallSavingsBytes": 1146105,
                            "type": "opportunity",
                            "debugData": {
                                "metricSavings": {
                                    "FCP": 0,
                                    "LCP": 710
                                },
                                "type": "debugdata"
                            }
                        },
                        "numericValue": 710,
                        "numericUnit": "millisecond"
                    },
                    "meta-viewport": {
                        "id": "meta-viewport",
                        "title": "`[user-scalable=\"no\"]` is not used in the `<meta name=\"viewport\">` element and the `[maximum-scale]` attribute is not less than 5.",
                        "description": "Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more about the viewport meta tag](https://dequeuniversity.com/rules/axe/4.10/meta-viewport).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "items": [],
                            "headings": [],
                            "type": "table"
                        }
                    },
                    "custom-controls-roles": {
                        "id": "custom-controls-roles",
                        "title": "Custom controls have ARIA roles",
                        "description": "Custom interactive controls have appropriate ARIA roles. [Learn how to add roles to custom controls](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/).",
                        "score": null,
                        "scoreDisplayMode": "manual"
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
                                    "observedFirstPaint": 2594,
                                    "observedFirstVisualChangeTs": 1653189652888,
                                    "interactive": 2894,
                                    "observedTraceEnd": 5674,
                                    "observedSpeedIndex": 2587,
                                    "observedLargestContentfulPaintAllFramesTs": 1653189715311,
                                    "observedLastVisualChange": 3032,
                                    "observedTimeOrigin": 0,
                                    "observedCumulativeLayoutShift": 0.08266650908215079,
                                    "totalBlockingTime": 372,
                                    "observedNavigationStart": 0,
                                    "firstContentfulPaint": 956,
                                    "cumulativeLayoutShift": 0.08266650908215079,
                                    "observedFirstContentfulPaintAllFrames": 2594,
                                    "observedFirstContentfulPaintAllFramesTs": 1653189715311,
                                    "observedSpeedIndexTs": 1653189708100,
                                    "timeToFirstByte": 162,
                                    "observedLoadTs": 1653190114963,
                                    "observedLargestContentfulPaintAllFrames": 2594,
                                    "observedDomContentLoadedTs": 1653189133843,
                                    "observedLargestContentfulPaint": 2594,
                                    "observedFirstVisualChange": 2532,
                                    "observedTraceEndTs": 1653192795380,
                                    "observedLastVisualChangeTs": 1653190152888,
                                    "observedCumulativeLayoutShiftMainFrame": 0.08266650908215079,
                                    "speedIndex": 2622,
                                    "observedTimeOriginTs": 1653187120888,
                                    "observedFirstContentfulPaint": 2594,
                                    "cumulativeLayoutShiftMainFrame": 0.08266650908215079,
                                    "observedDomContentLoaded": 2013,
                                    "observedFirstPaintTs": 1653189715311,
                                    "observedLoad": 2994,
                                    "observedFirstContentfulPaintTs": 1653189715311,
                                    "observedLargestContentfulPaintTs": 1653189715311,
                                    "maxPotentialFID": 295,
                                    "largestContentfulPaint": 2451,
                                    "observedNavigationStartTs": 1653187120888
                                },
                                {
                                    "lcpInvalidated": false
                                }
                            ]
                        },
                        "numericValue": 2894,
                        "numericUnit": "millisecond"
                    },
                    "document-title": {
                        "id": "document-title",
                        "title": "Document has a `<title>` element",
                        "description": "The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more about document titles](https://dequeuniversity.com/rules/axe/4.10/document-title).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "type": "table",
                            "items": [],
                            "headings": []
                        }
                    },
                    "tabindex": {
                        "id": "tabindex",
                        "title": "No element has a `[tabindex]` value greater than 0",
                        "description": "A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more about the `tabindex` attribute](https://dequeuniversity.com/rules/axe/4.10/tabindex).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "custom-controls-labels": {
                        "id": "custom-controls-labels",
                        "title": "Custom controls have associated labels",
                        "description": "Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more about custom controls and labels](https://developer.chrome.com/docs/lighthouse/accessibility/custom-controls-labels/).",
                        "score": null,
                        "scoreDisplayMode": "manual"
                    },
                    "long-tasks": {
                        "id": "long-tasks",
                        "title": "Avoid long main-thread tasks",
                        "description": "Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn how to avoid long main-thread tasks](https://web.dev/articles/optimize-long-tasks)",
                        "score": 1,
                        "scoreDisplayMode": "informative",
                        "displayValue": "6 long tasks found",
                        "metricSavings": {
                            "TBT": 350
                        },
                        "details": {
                            "headings": [
                                {
                                    "key": "url",
                                    "valueType": "url",
                                    "label": "URL"
                                },
                                {
                                    "granularity": 1,
                                    "key": "startTime",
                                    "valueType": "ms",
                                    "label": "Start Time"
                                },
                                {
                                    "label": "Duration",
                                    "valueType": "ms",
                                    "granularity": 1,
                                    "key": "duration"
                                }
                            ],
                            "sortedBy": [
                                "duration"
                            ],
                            "debugData": {
                                "type": "debugdata",
                                "urls": [
                                    "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0",
                                    "https://takeuforward.org/static/js/main.e1dada2b.js",
                                    "https://checkout.razorpay.com/v1/checkout.js"
                                ],
                                "tasks": [
                                    {
                                        "other": 295,
                                        "parseHTML": 0,
                                        "scriptEvaluation": 0,
                                        "duration": 295,
                                        "urlIndex": 0,
                                        "startTime": 2114.8
                                    },
                                    {
                                        "urlIndex": 1,
                                        "other": 143,
                                        "startTime": 2409.8,
                                        "duration": 143
                                    },
                                    {
                                        "urlIndex": 0,
                                        "duration": 94,
                                        "startTime": 855.5,
                                        "other": 94,
                                        "scriptEvaluation": 0
                                    },
                                    {
                                        "other": 61,
                                        "duration": 61,
                                        "startTime": 2852.2,
                                        "urlIndex": 1
                                    },
                                    {
                                        "styleLayout": 0,
                                        "duration": 57,
                                        "other": 57,
                                        "startTime": 2552.8,
                                        "paintCompositeRender": 0,
                                        "scriptEvaluation": 0,
                                        "urlIndex": 1
                                    },
                                    {
                                        "duration": 54,
                                        "startTime": 720.5,
                                        "urlIndex": 2,
                                        "scriptEvaluation": 0,
                                        "other": 54
                                    }
                                ]
                            },
                            "type": "table",
                            "skipSumming": [
                                "startTime"
                            ],
                            "items": [
                                {
                                    "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0",
                                    "duration": 295,
                                    "startTime": 2114.776615342532
                                },
                                {
                                    "duration": 142.99999999999955,
                                    "startTime": 2409.776615342532,
                                    "url": "https://takeuforward.org/static/js/main.e1dada2b.js"
                                },
                                {
                                    "startTime": 855.4561517283574,
                                    "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0",
                                    "duration": 94.00000000000011
                                },
                                {
                                    "url": "https://takeuforward.org/static/js/main.e1dada2b.js",
                                    "startTime": 2852.1613735337587,
                                    "duration": 61
                                },
                                {
                                    "duration": 57,
                                    "startTime": 2552.7766153425314,
                                    "url": "https://takeuforward.org/static/js/main.e1dada2b.js"
                                },
                                {
                                    "duration": 54,
                                    "url": "https://checkout.razorpay.com/v1/checkout.js",
                                    "startTime": 720.4560510498612
                                }
                            ]
                        }
                    },
                    "dlitem": {
                        "id": "dlitem",
                        "title": "Definition list items are wrapped in `<dl>` elements",
                        "description": "Definition list items (`<dt>` and `<dd>`) must be wrapped in a parent `<dl>` element to ensure that screen readers can properly announce them. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.10/dlitem).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "server-response-time": {
                        "id": "server-response-time",
                        "title": "Initial server response time was short",
                        "description": "Keep the server response time for the main document short because all other requests depend on it. [Learn more about the Time to First Byte metric](https://developer.chrome.com/docs/lighthouse/performance/time-to-first-byte/).",
                        "score": 1,
                        "scoreDisplayMode": "informative",
                        "displayValue": "Root document took 80 ms",
                        "metricSavings": {
                            "LCP": 0,
                            "FCP": 0
                        },
                        "details": {
                            "items": [
                                {
                                    "url": "https://takeuforward.org/",
                                    "responseTime": 77
                                }
                            ],
                            "headings": [
                                {
                                    "label": "URL",
                                    "valueType": "url",
                                    "key": "url"
                                },
                                {
                                    "label": "Time Spent",
                                    "key": "responseTime",
                                    "valueType": "timespanMs"
                                }
                            ],
                            "type": "opportunity",
                            "overallSavingsMs": 0
                        },
                        "numericValue": 77,
                        "numericUnit": "millisecond"
                    },
                    "table-fake-caption": {
                        "id": "table-fake-caption",
                        "title": "Tables use `<caption>` instead of cells with the `[colspan]` attribute to indicate a caption.",
                        "description": "Screen readers have features to make navigating tables easier. Ensuring that tables use the actual caption element instead of cells with the `[colspan]` attribute may improve the experience for screen reader users. [Learn more about captions](https://dequeuniversity.com/rules/axe/4.10/table-fake-caption).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "html-has-lang": {
                        "id": "html-has-lang",
                        "title": "`<html>` element has a `[lang]` attribute",
                        "description": "If a page doesn't specify a `lang` attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/html-has-lang).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "items": [],
                            "type": "table",
                            "headings": []
                        }
                    },
                    "hreflang": {
                        "id": "hreflang",
                        "title": "Document has a valid `hreflang`",
                        "description": "hreflang links tell search engines what version of a page they should list in search results for a given language or region. [Learn more about `hreflang`](https://developer.chrome.com/docs/lighthouse/seo/hreflang/).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "headings": [],
                            "type": "table",
                            "items": []
                        }
                    },
                    "errors-in-console": {
                        "id": "errors-in-console",
                        "title": "No browser errors logged to the console",
                        "description": "Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more about this errors in console diagnostic audit](https://developer.chrome.com/docs/lighthouse/best-practices/errors-in-console/)",
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
                        "metricSavings": {
                            "LCP": 0,
                            "FCP": 0
                        },
                        "details": {
                            "type": "opportunity",
                            "overallSavingsMs": 0,
                            "sortedBy": [
                                "wastedBytes"
                            ],
                            "items": [],
                            "debugData": {
                                "type": "debugdata",
                                "metricSavings": {
                                    "FCP": 0,
                                    "LCP": 0
                                }
                            },
                            "overallSavingsBytes": 0,
                            "headings": []
                        },
                        "numericValue": 0,
                        "numericUnit": "millisecond"
                    },
                    "charset": {
                        "id": "charset",
                        "title": "Properly defines charset",
                        "description": "A character encoding declaration is required. It can be done with a `<meta>` tag in the first 1024 bytes of the HTML or in the Content-Type HTTP response header. [Learn more about declaring the character encoding](https://developer.chrome.com/docs/lighthouse/best-practices/charset/).",
                        "score": 1,
                        "scoreDisplayMode": "binary"
                    },
                    "focus-traps": {
                        "id": "focus-traps",
                        "title": "User focus is not accidentally trapped in a region",
                        "description": "A user can tab into and out of any control or region without accidentally trapping their focus. [Learn how to avoid focus traps](https://developer.chrome.com/docs/lighthouse/accessibility/focus-traps/).",
                        "score": null,
                        "scoreDisplayMode": "manual"
                    },
                    "uses-rel-preconnect": {
                        "id": "uses-rel-preconnect",
                        "title": "Preconnect to required origins",
                        "description": "Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn how to preconnect to required origins](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/).",
                        "score": 1,
                        "scoreDisplayMode": "metricSavings",
                        "metricSavings": {
                            "LCP": 0,
                            "FCP": 0
                        },
                        "details": {
                            "overallSavingsMs": 0,
                            "type": "opportunity",
                            "sortedBy": [
                                "wastedMs"
                            ],
                            "headings": [],
                            "items": []
                        },
                        "warnings": [],
                        "numericValue": 0,
                        "numericUnit": "millisecond"
                    },
                    "modern-image-formats": {
                        "id": "modern-image-formats",
                        "title": "Serve images in next-gen formats",
                        "description": "Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more about modern image formats](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images/).",
                        "score": 0.5,
                        "scoreDisplayMode": "metricSavings",
                        "displayValue": "Potential savings of 494 KiB",
                        "metricSavings": {
                            "LCP": 0,
                            "FCP": 0
                        },
                        "details": {
                            "sortedBy": [
                                "wastedBytes"
                            ],
                            "type": "opportunity",
                            "items": [
                                {
                                    "wastedWebpBytes": 120648,
                                    "node": {
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "lhId": "1-83-IMG",
                                        "boundingRect": {
                                            "height": 40,
                                            "left": 516,
                                            "top": 3204,
                                            "right": 556,
                                            "width": 40,
                                            "bottom": 3244
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "nodeLabel": "img",
                                        "type": "node",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/id_photo_white_compressed-Gaurav%2…\" alt=\"img\">"
                                    },
                                    "wastedBytes": 121418.25,
                                    "isCrossOrigin": true,
                                    "totalBytes": 133198,
                                    "fromProtocol": true,
                                    "url": "https://static.takeuforward.org/content/id_photo_white_compressed-Gaurav%20Poosarla-BZGWU5pZ"
                                },
                                {
                                    "fromProtocol": true,
                                    "totalBytes": 125675,
                                    "url": "https://static.takeuforward.org/content/K-Sanketh-kumar-DfeETlQ3",
                                    "wastedWebpBytes": 109163,
                                    "node": {
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/K-Sanketh-kumar-DfeETlQ3\" alt=\"img\">",
                                        "boundingRect": {
                                            "left": 1386,
                                            "height": 40,
                                            "right": 1426,
                                            "top": 3204,
                                            "bottom": 3244,
                                            "width": 40
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,3,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "nodeLabel": "img",
                                        "type": "node",
                                        "lhId": "1-85-IMG",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10"
                                    },
                                    "wastedBytes": 108514.95,
                                    "isCrossOrigin": true
                                },
                                {
                                    "node": {
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Aniket-jyP64DXX\" alt=\"img\">",
                                        "nodeLabel": "img",
                                        "lhId": "1-94-IMG",
                                        "boundingRect": {
                                            "left": 5301,
                                            "width": 40,
                                            "right": 5341,
                                            "top": 3182,
                                            "height": 40,
                                            "bottom": 3222
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,12,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "type": "node"
                                    },
                                    "isCrossOrigin": true,
                                    "wastedWebpBytes": 63358,
                                    "fromProtocol": true,
                                    "totalBytes": 71148,
                                    "wastedBytes": 62431.5,
                                    "url": "https://static.takeuforward.org/content/Aniket-jyP64DXX"
                                },
                                {
                                    "fromProtocol": true,
                                    "isCrossOrigin": true,
                                    "url": "https://static.takeuforward.org/content/Avish-Mittal--1MO7Fba",
                                    "node": {
                                        "lhId": "1-93-IMG",
                                        "nodeLabel": "img",
                                        "boundingRect": {
                                            "height": 40,
                                            "width": 40,
                                            "top": 3204,
                                            "bottom": 3244,
                                            "right": 4906,
                                            "left": 4866
                                        },
                                        "type": "node",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Avish-Mittal--1MO7Fba\" alt=\"img\">",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,11,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10"
                                    },
                                    "wastedBytes": 43502.4,
                                    "totalBytes": 72163,
                                    "wastedWebpBytes": 36019
                                },
                                {
                                    "wastedBytes": 35247.3,
                                    "wastedWebpBytes": 30658,
                                    "node": {
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "type": "node",
                                        "lhId": "1-82-IMG",
                                        "nodeLabel": "img",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Athang-Kulkarni-BkK4feX-\" alt=\"img\">",
                                        "boundingRect": {
                                            "right": 121,
                                            "height": 40,
                                            "top": 3182,
                                            "width": 40,
                                            "left": 81,
                                            "bottom": 3222
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,IMG"
                                    },
                                    "url": "https://static.takeuforward.org/content/Athang-Kulkarni-BkK4feX-",
                                    "totalBytes": 63176,
                                    "fromProtocol": true,
                                    "isCrossOrigin": true
                                },
                                {
                                    "totalBytes": 46234,
                                    "wastedWebpBytes": 30044,
                                    "wastedBytes": 32579.75,
                                    "url": "https://static.takeuforward.org/content/Aditya-Mane-D8T2NtA-",
                                    "fromProtocol": true,
                                    "node": {
                                        "lhId": "1-89-IMG",
                                        "boundingRect": {
                                            "top": 3204,
                                            "right": 3166,
                                            "left": 3126,
                                            "height": 40,
                                            "width": 40,
                                            "bottom": 3244
                                        },
                                        "nodeLabel": "img",
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Aditya-Mane-D8T2NtA-\" alt=\"img\">",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,7,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "type": "node"
                                    },
                                    "isCrossOrigin": true
                                },
                                {
                                    "isCrossOrigin": true,
                                    "wastedWebpBytes": 21076,
                                    "fromProtocol": true,
                                    "totalBytes": 43688,
                                    "wastedBytes": 24276.7,
                                    "url": "https://static.takeuforward.org/content/Prajwal-Shah-xZVUY0qj",
                                    "node": {
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Prajwal-Shah-xZVUY0qj\" alt=\"img\">",
                                        "type": "node",
                                        "nodeLabel": "img",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "boundingRect": {
                                            "bottom": 3222,
                                            "top": 3182,
                                            "left": 951,
                                            "right": 991,
                                            "width": 40,
                                            "height": 40
                                        },
                                        "lhId": "1-84-IMG"
                                    }
                                },
                                {
                                    "fromProtocol": true,
                                    "wastedBytes": 19918.6,
                                    "totalBytes": 35665,
                                    "url": "https://takeuforward.org/static/media/profile.d6f93e1529485b96f009.jpg",
                                    "node": {
                                        "nodeLabel": "striver",
                                        "lhId": "1-97-IMG",
                                        "selector": "div.flex > div.sm:p-10 > div.flex > img.sm:w-[60px]",
                                        "type": "node",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,2,DIV,1,DIV,0,DIV,0,IMG",
                                        "snippet": "<img src=\"/static/media/profile.d6f93e1529485b96f009.jpg\" alt=\"striver\" class=\"sm:w-[60px] w-[40px] sm:h-[60px] h-[40px] rounded-full\">",
                                        "boundingRect": {
                                            "width": 60,
                                            "bottom": 3917,
                                            "height": 60,
                                            "left": 692,
                                            "right": 752,
                                            "top": 3857
                                        }
                                    },
                                    "wastedWebpBytes": 20049,
                                    "isCrossOrigin": false
                                },
                                {
                                    "isCrossOrigin": true,
                                    "wastedBytes": 18354,
                                    "url": "https://static.takeuforward.org/content/IMG20221028085802~2%20-%20KUNDAN%20KUMAR-JG4BAazS",
                                    "wastedWebpBytes": 15813,
                                    "totalBytes": 34373,
                                    "fromProtocol": true,
                                    "node": {
                                        "boundingRect": {
                                            "height": 40,
                                            "left": 3561,
                                            "width": 39,
                                            "bottom": 3255,
                                            "top": 3215,
                                            "right": 3600
                                        },
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/IMG20221028085802~2%20-%20KUNDAN%2…\" alt=\"img\">",
                                        "nodeLabel": "img",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,8,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "type": "node",
                                        "lhId": "1-90-IMG"
                                    }
                                },
                                {
                                    "isCrossOrigin": false,
                                    "node": {
                                        "boundingRect": {
                                            "top": 3817,
                                            "right": 652,
                                            "bottom": 4317,
                                            "left": 152,
                                            "width": 500,
                                            "height": 500
                                        },
                                        "selector": "div.pt-10 > div.flex > div.flex > img.xl:w-[500px]",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,4,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,IMG",
                                        "snippet": "<img class=\"xl:w-[500px] xl:h-[500px] lg:w-[545px] lg:h-[545px]  sm:h-[350px] sm:w-[45…\" src=\"/static/media/img.e05e06671578591d1613.jpg\" alt=\"\">",
                                        "lhId": "1-96-IMG",
                                        "nodeLabel": "div.pt-10 > div.flex > div.flex > img.xl:w-[500px]",
                                        "type": "node"
                                    },
                                    "wastedBytes": 18251.85,
                                    "wastedWebpBytes": 1099,
                                    "url": "https://takeuforward.org/static/media/img.e05e06671578591d1613.jpg",
                                    "fromProtocol": true,
                                    "totalBytes": 60035
                                },
                                {
                                    "node": {
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Madhab-Kafle-rhMxLzaA\" alt=\"img\">",
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,13,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "boundingRect": {
                                            "height": 40,
                                            "top": 3204,
                                            "width": 40,
                                            "right": 5776,
                                            "left": 5736,
                                            "bottom": 3244
                                        },
                                        "nodeLabel": "img",
                                        "lhId": "1-95-IMG",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "type": "node"
                                    },
                                    "totalBytes": 20943,
                                    "fromProtocol": true,
                                    "wastedWebpBytes": 11611,
                                    "url": "https://static.takeuforward.org/content/Madhab-Kafle-rhMxLzaA",
                                    "wastedBytes": 12072.45,
                                    "isCrossOrigin": true
                                },
                                {
                                    "isCrossOrigin": true,
                                    "wastedBytes": 9123.599999999999,
                                    "wastedWebpBytes": 790,
                                    "totalBytes": 30176,
                                    "node": {
                                        "snippet": "<img class=\"w-10 h-10 object-cover rounded-full\" src=\"https://static.takeuforward.org/content/Lalit-sharma-OUIHbXCu\" alt=\"img\">",
                                        "selector": "div.p-10 > div.flex > div.flex > img.w-10",
                                        "nodeLabel": "img",
                                        "type": "node",
                                        "boundingRect": {
                                            "left": 3996,
                                            "width": 40,
                                            "bottom": 3244,
                                            "top": 3204,
                                            "height": 40,
                                            "right": 4036
                                        },
                                        "path": "1,HTML,1,BODY,0,DIV,0,DIV,9,DIV,1,MAIN,3,DIV,0,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,9,DIV,0,DIV,0,DIV,1,DIV,0,IMG",
                                        "lhId": "1-91-IMG"
                                    },
                                    "fromProtocol": true,
                                    "url": "https://static.takeuforward.org/content/Lalit-sharma-OUIHbXCu"
                                }
                            ],
                            "overallSavingsBytes": 505691.35,
                            "debugData": {
                                "type": "debugdata",
                                "metricSavings": {
                                    "LCP": 0,
                                    "FCP": 0
                                }
                            },
                            "headings": [
                                {
                                    "valueType": "node",
                                    "key": "node"
                                },
                                {
                                    "label": "URL",
                                    "valueType": "url",
                                    "key": "url"
                                },
                                {
                                    "label": "Resource Size",
                                    "key": "totalBytes",
                                    "valueType": "bytes"
                                },
                                {
                                    "label": "Potential Savings",
                                    "key": "wastedBytes",
                                    "valueType": "bytes"
                                }
                            ],
                            "overallSavingsMs": 0
                        },
                        "warnings": [],
                        "numericValue": 0,
                        "numericUnit": "millisecond"
                    },
                    "viewport": {
                        "id": "viewport",
                        "title": "Has a `<meta name=\"viewport\">` tag with `width` or `initial-scale`",
                        "description": "A `<meta name=\"viewport\">` not only optimizes your app for mobile screen sizes, but also prevents [a 300 millisecond delay to user input](https://developer.chrome.com/blog/300ms-tap-delay-gone-away/). [Learn more about using the viewport meta tag](https://developer.chrome.com/docs/lighthouse/pwa/viewport/).",
                        "score": 1,
                        "scoreDisplayMode": "metricSavings",
                        "metricSavings": {
                            "INP": 0
                        },
                        "details": {
                            "type": "debugdata",
                            "viewportContent": "width=device-width,initial-scale=1"
                        },
                        "warnings": []
                    },
                    "aria-allowed-role": {
                        "id": "aria-allowed-role",
                        "title": "Uses ARIA roles only on compatible elements",
                        "description": "Many HTML elements can only be assigned certain ARIA roles. Using ARIA roles where they are not allowed can interfere with the accessibility of the web page. [Learn more about ARIA roles](https://dequeuniversity.com/rules/axe/4.10/aria-allowed-role).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "items": [],
                            "headings": [],
                            "type": "table"
                        }
                    },
                    "valid-lang": {
                        "id": "valid-lang",
                        "title": "`[lang]` attributes have a valid value",
                        "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.10/valid-lang).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "prioritize-lcp-image": {
                        "id": "prioritize-lcp-image",
                        "title": "Preload Largest Contentful Paint image",
                        "description": "If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP. [Learn more about preloading LCP elements](https://web.dev/articles/optimize-lcp#optimize_when_the_resource_is_discovered).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable",
                        "metricSavings": {
                            "LCP": 0
                        }
                    },
                    "largest-contentful-paint": {
                        "id": "largest-contentful-paint",
                        "title": "Largest Contentful Paint",
                        "description": "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
                        "score": 0.48,
                        "scoreDisplayMode": "numeric",
                        "displayValue": "2.5 s",
                        "numericValue": 2450.7852681752083,
                        "numericUnit": "millisecond"
                    },
                    "network-rtt": {
                        "id": "network-rtt",
                        "title": "Network Round Trip Times",
                        "description": "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more about the Round Trip Time](https://hpbn.co/primer-on-latency-and-bandwidth/).",
                        "score": 1,
                        "scoreDisplayMode": "informative",
                        "displayValue": "10 ms",
                        "details": {
                            "type": "table",
                            "items": [
                                {
                                    "rtt": 5.211300000000002,
                                    "origin": "https://api.razorpay.com"
                                },
                                {
                                    "origin": "https://backend.takeuforward.org",
                                    "rtt": 3.3469874999999973
                                },
                                {
                                    "rtt": 1.4860349999999989,
                                    "origin": "https://takeuforward.org"
                                },
                                {
                                    "rtt": 0.8999999999999999,
                                    "origin": "https://fonts.googleapis.com"
                                },
                                {
                                    "origin": "https://www.google-analytics.com",
                                    "rtt": 0.8999999999999999
                                },
                                {
                                    "origin": "https://checkout-static-next.razorpay.com",
                                    "rtt": 0.0029411449393818654
                                },
                                {
                                    "rtt": 0.0029158399988676934,
                                    "origin": "https://images.unsplash.com"
                                },
                                {
                                    "origin": "https://static.takeuforward.org",
                                    "rtt": 0.0009722577317412633
                                },
                                {
                                    "rtt": 0.0008465102562233666,
                                    "origin": "https://checkout.razorpay.com"
                                },
                                {
                                    "rtt": 0.000837820332367427,
                                    "origin": "https://fonts.gstatic.com"
                                },
                                {
                                    "origin": "https://www.googletagmanager.com",
                                    "rtt": 0.0008318433422502811
                                },
                                {
                                    "origin": "https://accounts.google.com",
                                    "rtt": 0.0007979521932383815
                                }
                            ],
                            "headings": [
                                {
                                    "valueType": "text",
                                    "label": "URL",
                                    "key": "origin"
                                },
                                {
                                    "granularity": 1,
                                    "label": "Time Spent",
                                    "key": "rtt",
                                    "valueType": "ms"
                                }
                            ],
                            "sortedBy": [
                                "rtt"
                            ]
                        },
                        "numericValue": 5.211300000000002,
                        "numericUnit": "millisecond"
                    },
                    "third-party-facades": {
                        "id": "third-party-facades",
                        "title": "Lazy load third-party resources with facades",
                        "description": "Some third-party embeds can be lazy loaded. Consider replacing them with a facade until they are required. [Learn how to defer third-parties with a facade](https://developer.chrome.com/docs/lighthouse/performance/third-party-facades/).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable",
                        "metricSavings": {
                            "TBT": 0
                        }
                    },
                    "bypass": {
                        "id": "bypass",
                        "title": "The page contains a heading, skip link, or landmark region",
                        "description": "Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more about bypass blocks](https://dequeuniversity.com/rules/axe/4.10/bypass).",
                        "score": null,
                        "scoreDisplayMode": "notApplicable"
                    },
                    "target-size": {
                        "id": "target-size",
                        "title": "Touch targets have sufficient size and spacing.",
                        "description": "Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets. [Learn more about touch targets](https://dequeuniversity.com/rules/axe/4.10/target-size).",
                        "score": 1,
                        "scoreDisplayMode": "binary",
                        "details": {
                            "type": "table",
                            "items": [],
                            "headings": []
                        }
                    },
                    "meta-description": {
                        "id": "meta-description",
                        "title": "Document has a meta description",
                        "description": "Meta descriptions may be included in search results to concisely summarize page content. [Learn more about the meta description](https://developer.chrome.com/docs/lighthouse/seo/meta-description/).",
                        "score": 1,
                        "scoreDisplayMode": "binary"
                    },
                    "interactive-element-affordance": {
                        "id": "interactive-element-affordance",
                        "title": "Interactive elements indicate their purpose and state",
                        "description": "Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn how to decorate interactive elements with affordance hints](https://developer.chrome.com/docs/lighthouse/accessibility/interactive-element-affordance/).",
                        "score": null,
                        "scoreDisplayMode": "manual"
                    },
                    "render-blocking-resources": {
                        "id": "render-blocking-resources",
                        "title": "Eliminate render-blocking resources",
                        "description": "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).",
                        "score": 0,
                        "scoreDisplayMode": "metricSavings",
                        "displayValue": "Potential savings of 590 ms",
                        "metricSavings": {
                            "LCP": 600,
                            "FCP": 600
                        },
                        "details": {
                            "items": [
                                {
                                    "totalBytes": 43292,
                                    "url": "https://takeuforward.org/static/css/main.96be7ba9.css",
                                    "wastedMs": 83
                                },
                                {
                                    "wastedMs": 419,
                                    "totalBytes": 48959,
                                    "url": "https://checkout.razorpay.com/v1/checkout.js"
                                },
                                {
                                    "url": "https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&display=swap",
                                    "totalBytes": 1009,
                                    "wastedMs": 204
                                }
                            ],
                            "headings": [
                                {
                                    "label": "URL",
                                    "valueType": "url",
                                    "key": "url"
                                },
                                {
                                    "label": "Transfer Size",
                                    "key": "totalBytes",
                                    "valueType": "bytes"
                                },
                                {
                                    "label": "Potential Savings",
                                    "key": "wastedMs",
                                    "valueType": "timespanMs"
                                }
                            ],
                            "type": "opportunity",
                            "overallSavingsMs": 587
                        },
                        "numericValue": 587,
                        "numericUnit": "millisecond"
                    },
                    "offscreen-content-hidden": {
                        "id": "offscreen-content-hidden",
                        "title": "Offscreen content is hidden from assistive technology",
                        "description": "Offscreen content is hidden with display: none or aria-hidden=true. [Learn how to properly hide offscreen content](https://developer.chrome.com/docs/lighthouse/accessibility/offscreen-content-hidden/).",
                        "score": null,
                        "scoreDisplayMode": "manual"
                    }
                },
                "categories": {
                    "performance": {
                        "id": "performance",
                        "title": "Performance",
                        "score": 0.62,
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
                        "score": 0.85,
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
                                "weight": 1,
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
                                "weight": 10,
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
                                "weight": 7,
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
                                "weight": 10,
                                "group": "a11y-names-labels"
                            },
                            {
                                "id": "image-redundant-alt",
                                "weight": 1,
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
                                "weight": 7,
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
                        "score": 0.92,
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
                                "weight": 1,
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
                "categoryGroups": {
                    "seo-crawl": {
                        "title": "Crawling and Indexing",
                        "description": "To appear in search results, crawlers need access to your app."
                    },
                    "a11y-names-labels": {
                        "title": "Names and labels",
                        "description": "These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader."
                    },
                    "a11y-tables-lists": {
                        "title": "Tables and lists",
                        "description": "These are opportunities to improve the experience of reading tabular or list data using assistive technology, like a screen reader."
                    },
                    "metrics": {
                        "title": "Metrics"
                    },
                    "a11y-navigation": {
                        "title": "Navigation",
                        "description": "These are opportunities to improve keyboard navigation in your application."
                    },
                    "diagnostics": {
                        "title": "Diagnostics",
                        "description": "More information about the performance of your application. These numbers don't [directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) the Performance score."
                    },
                    "a11y-aria": {
                        "title": "ARIA",
                        "description": "These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader."
                    },
                    "a11y-audio-video": {
                        "title": "Audio and video",
                        "description": "These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments."
                    },
                    "best-practices-trust-safety": {
                        "title": "Trust and Safety"
                    },
                    "a11y-best-practices": {
                        "title": "Best practices",
                        "description": "These items highlight common accessibility best practices."
                    },
                    "seo-mobile": {
                        "title": "Mobile Friendly",
                        "description": "Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn how to make pages mobile-friendly](https://developers.google.com/search/mobile-sites/)."
                    },
                    "seo-content": {
                        "title": "Content Best Practices",
                        "description": "Format your HTML in a way that enables crawlers to better understand your app’s content."
                    },
                    "best-practices-browser-compat": {
                        "title": "Browser Compatibility"
                    },
                    "best-practices-ux": {
                        "title": "User Experience"
                    },
                    "best-practices-general": {
                        "title": "General"
                    },
                    "a11y-language": {
                        "title": "Internationalization and localization",
                        "description": "These are opportunities to improve the interpretation of your content by users in different locales."
                    },
                    "a11y-color-contrast": {
                        "title": "Contrast",
                        "description": "These are opportunities to improve the legibility of your content."
                    }
                },
                "timing": {
                    "total": 21617
                },
                "i18n": {
                    "rendererFormattedStrings": {
                        "varianceDisclaimer": "Values are estimated and may vary. The [performance score is calculated](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) directly from these metrics.",
                        "opportunityResourceColumnLabel": "Opportunity",
                        "opportunitySavingsColumnLabel": "Estimated Savings",
                        "errorMissingAuditInfo": "Report error: no audit information",
                        "errorLabel": "Error!",
                        "warningHeader": "Warnings: ",
                        "passedAuditsGroupTitle": "Passed audits",
                        "notApplicableAuditsGroupTitle": "Not applicable",
                        "manualAuditsGroupTitle": "Additional items to manually check",
                        "toplevelWarningsMessage": "There were issues affecting this run of Lighthouse:",
                        "crcLongestDurationLabel": "Maximum critical path latency:",
                        "crcInitialNavigation": "Initial Navigation",
                        "lsPerformanceCategoryDescription": "[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.",
                        "labDataTitle": "Lab Data",
                        "warningAuditsGroupTitle": "Passed audits but with warnings",
                        "snippetExpandButtonLabel": "Expand snippet",
                        "snippetCollapseButtonLabel": "Collapse snippet",
                        "thirdPartyResourcesLabel": "Show 3rd-party resources",
                        "runtimeDesktopEmulation": "Emulated Desktop",
                        "runtimeMobileEmulation": "Emulated Moto G Power",
                        "runtimeNoEmulation": "No emulation",
                        "runtimeSettingsBenchmark": "Unthrottled CPU/Memory Power",
                        "runtimeSettingsCPUThrottling": "CPU throttling",
                        "runtimeSettingsDevice": "Device",
                        "runtimeSettingsNetworkThrottling": "Network throttling",
                        "runtimeSettingsUANetwork": "User agent (network)",
                        "runtimeUnknown": "Unknown",
                        "dropdownCopyJSON": "Copy JSON",
                        "dropdownDarkTheme": "Toggle Dark Theme",
                        "dropdownPrintExpanded": "Print Expanded",
                        "dropdownPrintSummary": "Print Summary",
                        "dropdownSaveGist": "Save as Gist",
                        "dropdownSaveHTML": "Save as HTML",
                        "dropdownSaveJSON": "Save as JSON",
                        "dropdownViewer": "Open in Viewer",
                        "footerIssue": "File an issue",
                        "throttlingProvided": "Provided by environment",
                        "calculatorLink": "See calculator.",
                        "runtimeSettingsAxeVersion": "Axe version",
                        "viewTreemapLabel": "View Treemap",
                        "showRelevantAudits": "Show audits relevant to:"
                    }
                },
                "entities": [
                    {
                        "name": "takeuforward.org",
                        "isFirstParty": true,
                        "isUnrecognized": true,
                        "origins": [
                            "https://takeuforward.org",
                            "https://backend.takeuforward.org",
                            "https://static.takeuforward.org"
                        ]
                    },
                    {
                        "name": "Google Tag Manager",
                        "homepage": "https://marketingplatform.google.com/about/tag-manager/",
                        "category": "tag-manager",
                        "origins": [
                            "https://www.googletagmanager.com"
                        ]
                    },
                    {
                        "name": "razorpay.com",
                        "isUnrecognized": true,
                        "origins": [
                            "https://checkout.razorpay.com",
                            "https://api.razorpay.com",
                            "https://checkout-static-next.razorpay.com"
                        ]
                    },
                    {
                        "name": "Other Google APIs/SDKs",
                        "homepage": "https://developers.google.com/apis-explorer/#p/",
                        "category": "utility",
                        "origins": [
                            "https://accounts.google.com"
                        ]
                    },
                    {
                        "name": "Google Fonts",
                        "homepage": "https://fonts.google.com/",
                        "category": "cdn",
                        "origins": [
                            "https://fonts.googleapis.com",
                            "https://fonts.gstatic.com"
                        ]
                    },
                    {
                        "name": "Google Analytics",
                        "homepage": "https://marketingplatform.google.com/about/analytics/",
                        "category": "analytics",
                        "origins": [
                            "https://www.google-analytics.com"
                        ]
                    },
                    {
                        "name": "unsplash.com",
                        "isUnrecognized": true,
                        "origins": [
                            "https://images.unsplash.com"
                        ]
                    }
                ],
                "fullPageScreenshot": {
                    "screenshot": {
                        "height": 6348,
                        "width": 1350,
                        "data": "data:image/webp;base64,UklGRhigAgBXRUJQVlA4WAoAAAAgAAAARQUAyxgASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggKp4CADCpEZ0BKkYFzBg/EYi9WSwov7Shsmjr8CIJaW7/lul/QrwOqcuniGBxpvcSbltA1FDu/N2PurM2YMGzZCfOl5Hprfq91Tusr/8P/9Pz39x/7vm99Pebr/n/tT7xf6R/uvYM/tXlu+uL/HehT9wfVl/337n+7X+5/872J/6F/sPXL/8Hsg/5P/qf//3JP3L///r5fvP8NH+A/+PrEegB///bk6Ufx7+zf5z/Af5r/lf4D92vrn8v/d/9N/f/9J/yP7t+/Hub+ZfZf73/Efkb8sP5h/x/57yPey/3P/m/3Pqx/PfxL/M/w/7//8f5r/zf/W/1H5aelPzZ/5v9R7BH6J/U//H/hf3//7nyo/ff9b/Y/6TwVN1/53/q/1/sEe/H378qPYR+j/8P+Z/y/s3+xf6L/1f6L/XfuD9gP9C/w//l9f/+Z+0nlo/jf+d+3v+e+QX+j/6H/8f6n/d/Dp/nf/z/feir7H+v77FP6r/mP/7/rf+x+//x////4cfvp/////8Wf7rf/8O/Vba21trbW2ttba21trbW2ttba21trbW2ttba21phd7H9t/bf2VtgIW9ezKJXrpvpXpPQsIlZC4BY9DXQMnPTIjqTs5/bAJ+X+NrbW2ttba21trbW2ttba21trbW2ttbaoTsA2PPMeZx0mVNwhW6TakvF6iC4y3u22ogRKnB/zRnWk9EBPHYwbMJUOPPHCBFw+UKuJYK3EVcOpaxxh7xlpOnN+mHsTf8Inw1bfC9UiXuk64dVtrbW2ttba21trbW2ttba21ttL5wGW5vZT2aIFv0pPC0ID2CTjarjaHEBho63dAyroIbY+RHsdQmYkAuFHCeuRm5qZJlujyVds63neHQ4UX3K3Wfv32XGtlIAas512tiGxlamW3KZtaUBz7fCoCplZegtUpgTBU5sq21trbW2ttba21trbW2ttba21tra+NfIBKdET2e9nseggQcMZWiafIAeJECJdIxnMfmpWox7Tx7u3NCCSd4ZUtVLVhKVqpaqSDV4d2FUtVLVS1UtVLVS1UtVLVS1UtVLVRZUtVLVS1UtWC1HATSKtUmrwb6PYFgQZcUdgQhtLvosBYCwFgLAWAsBYCwFgLAzAWAsBYCwFgLAWAsBb+vpBlhoPYLz1GVlL3SdcOq21trbW2ttba21trbW2ttba21trbtbiVBU5srb0Elti40GNj3SdcOq21trbW2ttba21trbW2ttba21tsyRLRxBYc3Fxaf+7acpyuyEICwFgLAWAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgOQSnJ+ALLIpWw2tw/KXuk64dVtrbW2ttba21trbW2ttba21trbW2ttba27HvXIIV5EnizJJFW2ttba21trbW2ttba21trbW2ttba21trbW/VQH+6i8mJga6qnVPew8OiI7QYBYuZkLH9avrvtKOt/mNzFt5621PfAVpgV49GdczbJL7MESfgehhTCTotfPLOtZ6hT0fzzGPAfayJJ/osBVvRrbK0VhkVByKev/ni5ITY/Tx7ab+L3PJFC9PYeGS7vNOEbb2HpYVit46YCej/cU8f9iHF6bF12ByKAmTmbPlbgyS7eL218+USB70eNhGoMWXpG8ecThxZQqVa2kN3Gthp2t4cEtGrwuHf7d+WH+U7g8cZG3P99cEU32rgwGyIAobghvV3S2GB5DFVchBVU4HAiSc9PmzwFGEtG5Uz07R3Sq5S1DIx9G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ttc4qE7Ieba55i9E80doFtrbW4oIF2DPezupEvdJ47ZzocZYYHAWAsBdjrh1cdFsyISJfj3qLFqzCB0dcyzmo5qD0YaxWHJOU7SaydcOq550lbYEOw5uKA3qgcNoUiJWAaag56vF+ESTFW2ttuvTMtyFO1rAV4K9TknnlsywiRdqVL9vabjEBYCwF7psHMBet1kEFToAE/AY/UCRoB3tpC5HZFBaYcIdpENg9d0I7yA3p6JkVbQL/ATLb2o5QYny9bhr2d/x1W2uedMX1ALwa4CyHrP5iTNq/j5R+9VLT8IoUx6+C0PhGBRVavjXC7pjFbDL3SeO0kX1ALwa4CyHrP5k4znh7dGRLu3VW/kWHlm6dgZNYbAftdtVlBAAOMnL3Sdduu4dVuO1prLVtt0JKzTpl554Oq3JyAgDL6v2P6kk4Ze6Tx2kdhrZVNIS3JyAgalasXjBAECH76LAWIAnLTf/wvPPB1W5OP6EBdv/TxoAt6LQw0AsBYE8oSIIKlK0cutn9E88kS90nXDqqjrfcSE2TaK5GhCyVBU5sq21thaZT1WpznCt3QxEm2tsMlw81SKECIKlB5e6TsAL0BqttW4OVet09a6uukjq66uuEQZLUxRfQRK1UtVLVS1UtUrchcqCyAFDJWqlqpaqWwq3TAKqt6LAWDRy20wVObKttba21trbXdXdW2ttba21trbW2ttbap+ittbrT9qRL3SnVHLnXSdcOq21trbW2ttba21trbW2ttba21trbW2yMOx7pOuK1KXAZxBJ24ueSJe6Trh1W2ttba21trbW2ttba21trbW2ttt5636pE2KSbAwawJgsOrPNlW2ttba21trbW2ttba21trbW2ttba21trbYkUTXp2cCj6piCStu0TW2ttba21trbW2ttba21trbW2ttba21trbW2uJEWJWJo1qVgpYJ9SKE1trbW2ttba21trbW2ttba21trbW2ttba21t8lbbMm9pNTVzAgqxIsByFtIsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWAsCBrIIlaCJSysUlfHHrFxc8kS90nXDqttba21tr2v7b+202ttba21trbXEiK4E6dj1tztVFgX9TB4sEsBYCwFgLAWAsBYCwPx5oCwFgaT4MNHEFTmyrbZleDBSLRYlfc6Oi0WLxq2X+NrbW2ttba21tw2VtrbW2ttb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aUwFgLAchbSLAWAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWAtpgLf19FgLAWDWcX0WAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWKEONi6Trh1W2ttba21trbW2ttba21trbW2ttba21trbW2ttba2+Sttb9ZbY90nXDqttba21trbW2ttba21trbW2ttba21trbW2ttb+SKttba27RNba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2xOrbZuIdW/VIl7pOuHVba21trbW2ttba21trbW2ttba21trfqkS90nXDqtuyb7EkRtba21trbW2ttba21trbU/XKyBJPswmsPr0c2CxtsmNZCJkQhEG7UE9cHNbrDTumAsBYCwFgLAWAsBYCwFh87zZeba21trbW2ttba21trbW2qBDWBeL5jip7BFoiPGjsGl4jFdmKO2ODVjCmaLE8TzZVtrbW2ttiRL3TLvosBYE+7+OIKnNlW2ttba21trbW2ttba3PNtptba21trbW2ttba22iFbbMkS3m0ynFgLAWAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWAsByCCpzv7qK38kVa0W5zCtspFJ1q08AMSairYR1vApZ+WdmZshGhIrMK+lbFRyJbt7RmVXAoWl0MHU+4bg2ajalTEaOhoJjMzacoteWlVpGtazkOcVRnLIf2D+TN/aDGIBArm9t4ZwM6/QGYVWBVz9dywUgqa2yOiSI1jPe5Mowxm3EUqIBiBsEBe38kP+hDwdjG+Oc3OLEvW2tcHzK0jCQxbnbh6KUHX7gE+kVABQRpdQCikfRg9DUtgxqwSPR3QxEN6DnJvv3b79MgPMRmXZGOvNryabs3DI/04bYwFcypjt8qOY+wc7lVZjXUcgJqBbkQ9eA+CCO1pGl4AFTG682V/nnx0z8M7nCRhkObbabG9pBRTypQKNdC6QAVwrX+G7zYSeGXFfweot1csUCqmlmafPAhUTv2SPHADeL1HnqzTgu1a0MTWGtreVCjDkV/RlUfjLRX/amAf43qZUhTpk03+hxs4nznADCp626oS3afziJ9vcAzs9WaXvAZgtKkMKGpSRj/6eLdNB2AaW5SY6lZb7htECNcRQHSIeMu4J062G3hiGl9kpXgR4bwFf55yUunEynpRUMvPf7gwdVLuD2x2f5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tba21trbW2t+stW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttbdomttba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba22JEvdJ1w6rbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21t2Q821trbW2ttba21trbW2ttU+mha7C0ctEG6oKnNlW2ttba21trbW2ttba22J1ba21trbW2ttba21trbW2qef7GKf0OGYwpdyEp4Vme2zG8Y/AGvNaBb1Xn67iCpzZVtrbW2ttba21trbW2tux7pOuHVba21trbW2ttba21P1aVQ8MndmVspSPDVhuRatnJgNcOBfoPrDq2wy90nXDqttba21trbW2ttba36y1ba21trbW2ttba21trbW16H3W3yP2U9JAseeib8bdMbhwHY0suWnFlW2ttba21trbW2ttba21trbtE1trbW2ttba21trbW2ttba3SLe8F0dRl7pOuHVba21trbW2ttba22JEvdJ1w6rbW2ttba21trbW2ttbfQZrlW2ttba21trbW2ttba21trbsh5trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2xOrbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttb9UiXuk64dVtrbW2ttba21trbW2ttba21trbW2ttba21trbW2ttbbEkRtba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21v5Iq21trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21trbse6Trh1W2ttba21trbW2ttba21trbW2ttba21trbW2ttba21trbW/WWrbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2tu0TW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttbbEiXuk64dVtrbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba27Ieba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21tsTq21trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21trbW/VIl7pOuHVba21trbW2ttbXoZ+/NiEkySHGZL/iD14KGrDU1q634AogYPHZUIfBKZbU28vXDCQV9QUPNwkHoN4TXs+rwsG484KnNlW2ttba21trbW2ttba22JIja21trbW2ttba21trbW2vJnUNmo4BjXDqttba21trbW2ttba21trbYnVtrbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2t+qRL3SdcOq21trbU8PNiUFTmyrbWvHil7pOuHVba21trbW2ttba21trfrLVtrbW2tr/VemeOeXVFDb5Xs6+Tvxag8MYfHfUXi0v6RbR4gjmadBdf+9NubrKy80frRUWHme+Aj7t3zSg4xOkSZ1Ra5O5pD/ebHe5LY4zD7qL6Zpi8iNWQkNqxNLSi7IgQgaDJdN++PsRYyKNevu4tLW/5rTUAN2q4qjlGzUOytBJtdtJ2B0w8ttXY392WF0WCyxHOwkLnqwdomdKDRHwz3XQbh5/AYj65qC3tPr4tDNQOnFX3tGOp4KOoAj0HNlW2ttba21v5Iq21trbW1/bEVrjuTC8mzOd4dPF6mU5xbEOez3Dfqn+BrA+wefNiMpwn9e6pwyCLwVxo6yoMW6EKiqdU1E13JGT9tna9nS4HDXtDz3njD2zcJ2iQkS7wmzATT/uD9Kp03GogS33/k46Mf9AAG83Ja7B1qFjJsW4vyC+gKLASQaG2a6Juy5dYvRUMSC1GvssIlXKACrjeaf3vL74M8948rel+5SJFnFQMhEfik4SfUFqoYG9q6arm9PVQE/BhKLWbq0LNIZ3zRGxC4SrViZ8BkhL1sElMKWoxN29nIrGc7KsQR+gb1Hbd6hFX3d1K1cHT9vCJgyC/MB0fPKROUeIQK+OU2Vba21trbW3Y90nXDqtta10MSTxqma3htqUWSiBAUx4gh5aSUGFYdbGaY6fjGGD5eqKHUrZWeM4+Q+nP74Aq8SEB2/3BvXAd3FQ4JaDdCzQ9quQO7nFqq40HSB7iV5apcQrESZJOl/T6OrbHEM9JfAorfj4XPGNOBhGY6sBsMMKnT7GIJcFEBNvH0RYOyScLzSiAdEAL+cG2xQCB3WOfaUbi/c8kS90nXDqtuyHm2ttba21ueUl3uzkveQPaO3btD5tbtrdeaO0D2lptba21trbW2ttba38kVba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21t2PdJ1sk+RQlz2C9QPhRaTOgLvYS/Xb+eJFHjCqHKW8Euq9QdmgzJlFtqVSiQ2inz7sTmBwTpfHaeMMQszBFpBG88akHCydAZYDQT8iQWSIH21UthXyl8pfKXyl8pfKXyl8pbh4SoKnNlsh5trcT80vB1zFoP99hh4GXtbMaRY//4P1q1uHKZa+6Y7qWBU6gAwfVZeSHlbyIVou5dJ3TKs1n+KSCKmdGaE5hYhJxSrJ3KvcTitFeBETzVQP7h/UMCdmbXd7mSHJ5WV56whcFTW0K4rKXuk64dVtrbW2ttba55ittba27RNba1msP5axOSDlxfv+nLSLXOy/rzNKP0H2iqPdjORt6UF46yo3+/i8/EpJ8crc1h5RQD7Jmaw5o/kXlV/3E/luaCaEzxvRYCwFgLAWAsBYCwFgTydcOq22JEvdJmUrwydIRdjc3WQiUViUoJC0giVPLbQt6Rg1kIHDHk3ypcI7DIFa8O7w8sgjyD9wIYSZledJb54TSmQ9HTDzl+pG7rJc+NwAPG1L7+If8LK+fkbhZ8YkoBWz5HGPYv/qNEAOldh/q5G44vg61P+keJTNVSJ01mOzvXxO4dlLiXiW5o4PRdpHC9kQmRDS5UMmVq2LZQJNK2SoKnNlW2ucUvdJ1w81lq21Ni3CxWbeCfExxHAJ1WM2B+vBcbaRmrFBQgY5EWsPBJoNUVrE32aFaEoQ9ShxaDeuOVflydbl9oBqXNZiLC7gUDhZ/jsPE61f0folV9UCDRLgBAbQGJMiVmyLiMKlnMi6TV868+UQ4yUE+WFL8Qp9BhaA1aWPSoFYmmmVKBcmFEM6LNvD2bAnbcqVYJzPV5DRGYdn3mBtMUIDD88HMh+YVUkbAS6oF7jKiCwJtzY9m6nDyb/83WSnUqAgwzt4ETHKYJOfM0eltylB7Kp23u+LH0HR1T+hCVuG/KnXDqttba5xS90nXDzkirbU1zcj/ZRceS08Isat33VMgv92nVe7G12bzUp0q4dFvI0ysHXvIFAFgiKXfZZmqSP2GCR4h1uCVTOBZxsCDWE8PPL9sbYR7DYQ2hJwuhueYNQCYNIhNxWYkaXkDndBt+lHwPYklevvBs9AJAG8kvvl5MERPU4DZrF4RwFiWSF6sefIghUJ7kjrA2y1s1qBqP6/fduyqi3Irs0ogqu5UIEZgwHkRIJeaJG68cjt4qiJJgWp2c680JLdjpzhVH3eWMXxVnQ8dLcydW75YuLMqpYHu38lI8/Fo89Ef4wUBLnvWvvPAPz0Rebvk5JYkixirbW2tux7pOtR5FeAwFkRyGUMC/0dFkUgAElr4KrcaWIasVe1FPkue7nIojjtyiungCe8o7inRF8rZ02zQqnDkciM2nv2Fofu3hLte1noFMmMXhSCRBGbTjdIAraEYLyFfITqJ8lYa0hl4BZTqTgbgIUxrxpfJM0VE2krSI9oOHILsggggqrf/UBDq/ofLCHIXb0Z7+0zYXXdMFZP4T5ZE/r0YeSSHVEbJ5XZVqBeNk4hBcdGw+vSAU0AXwcwONSZfgQydx2//tnEWYtfDb6GxY4yIF4AjcLKBkR7kpFVdHg+QMRsXEyi/R8eg5/YZe6TrisxG1teOAI09v7oUHkAC4rViBRIlyZ5mEmuN0Oxq0dVBD10LwVb6dgbZvYi8NCqr3vMrJ7fv4qtn8RWai9fYBn2NoDUgLANmfFC0aAXGokpnn2IMydCBk+zCO5WK1PigTVuKRTj8xgAOuTGpryuopAF/aoxMEnYvte4KSrde3KiNmBjhdnn8UHM4QPjl5GrWP2rX7ti6/QY+G/zPpGjPpK7UhWYkf9pMaWWkxpK88sittba22J1ba2wEQJF7ScojxXe0y7ckxWo3hdTKGGsj++YONkaHI6DBaYq+IfBhS+o7ytrVBQ7zREVozb7UIvcJ0QZp+RnO2WpghMKJzodWu6bgEk8us4+gvqpXQaqZdQdANzfE8eEN6ZORDlx75vcHle3NLsHH/pvqwUk1lLOu+dxONItNTwcCezC2kuMWYAYTtmDQSJe6Trh1W2txFSJe6Trs/Nwy3gZ1G1w3sqD5pxKNlrtKwrgt0i4/V447eUgCEpgT9P9rTWbukeF/WwdHZrk94CI6kQjBA++2ZFbNT2N1iP9zJlOfc0oFW2GVs/MdD1PN80PQW6J8MCC8H6zldLlN/Y4XEhVepr2H2T14CbQAF/k8x9FMZpcZlvIHSWQeG3PoAk+GyWGGnMdOivwVxGD3QxHRpN6sLGEvrVnRA8Mb0mgBdBYbmUPUH6LoD7gmFow/ps/jWScDIoqsCo1BdtUZokS0lWfLkz6fZLJNnzGmlHaCtba21trbW228MvdJ1xWYja2vnWE5n9aElkQQZ601rVtQGIDi7sbOMu52bD/QZcXXREXbk9982N00FX5Nn6T8+STXGYS/M3XB8hn8tiOQiwU30HyvAdh3K2HtcFRAwBolGAEL38bQ6RGfdudlhO0kBt6d2PBfCAZplTmyrbW2txFSJe6TrtTYdVrGhTS03myQMSyGiaUQUaMeITJUVVSktkMuAeQfivCESn/6eeses+JL5iAsZt3ohqfkC8Lfg6zZsl8AyO5/qqCDfXKDEnRiBj7/N3Y1zzWhKC+2d0YCs83ij8rNspWRKqonBSLNLMVX3geMuk5VasKqRLzah/ijHVMLvERCF8OkoIDQ+m58IJOaX2fEPf+hz3CKrlz9nX3dF8zuGa0kxoZZPPJFjFW2ttbdj3SdalLXmfozniL3SW8mpiDSGEYiRYKYerd8RxuXYceaDM6y9P6K9DwY4OKDCBsQ5CO5hGXeKdznCctE3UU6VwkafwCtyerh9S379xtUSB0wEVzeXNjq/UZNZmDzAZQyp/6p+tvlsS2ojsse2xG2HsiyqWuw3IGcVOXeBvYUKcQiD+6QGbk0LymGAVJHEhdxC6xbLcyMFFMzQS9zg4IeTTUDvKFQIUanKLRWaKmQEBQ4/NRDSZKp0h2HxIl71vRYCwFg0iF9FWK9Swe6RGa59rtBGeHaj5CugueysZKIfgT3EC1eGlljUnGqOS37DDLtCqWUuHodSfdb5VyCV1u0l3h1a9TmWqNKBX+3D7VRQCK25oDPT1dJ/HFfhRT6dEL9mGjwvwZl9lVA6qgeVYABAqEJ5xuhUFTn9hl7pOuK4rbW16W4RwmI6abMgHG7k5YtTfAB/KmW9p6xYKdMAMCIL1Q8pytDYyiog5j8sfsj2++B9mqdE1VYJ6MMxRi473HZp38c9CMJiEv4RkE3D8KTUi2064vo8/91/0+DP/Yt+71QeKJEdzOBs8XNiVxEoXv1kFHXxaPB3AySOMiyKLXy9YMpir5JBJ+DBNBKDk1g3C1PEWBokh07q925qxXIujikABXSqwSsow6wcJ+LXV4ynOsILsaJO5eDEEDQnXgwBI4BvFdOhIQgrnXNQNU1gJ4BjNoymWtUzbDL3SnKwFgLAWhgqc2A6Chi8Ulbu4UNCeExA2g8eQbw9Obq64mXgb5yQwO+dULp3D9fp3TJuoSs857IcB2hHTJ6RZ8E1hCqbHVN4adW9m4QG3STqo9SfGKxR9rGAkIIxJvhpj6GaZQ1hXimKHViyNi0MWOC1KxSg9vfiRL3SeMm4Ze6Ttxw4dVRCXdCjAdhzebyttbrH7zcEPjpSrBsDODPnbBnHVVYfBqpjGu8BPG83j7hVG9xyjyS85NUq5Zj0QOoCr5t59dZV+Ow8//pepZdXxvD//bi1EWb7dQLAFmJIxGRKMdDyv0bOK3MdLROuIvUcDbgSMoITdUC/h/VcbtS99WyfpMbJ1VMzfGHsMffWYcAKl4RXAN7EVtdgPYto4cm8/n48Xt/S7x1t0H/5AnOgb6clelkjWx6CuTRc15bbFscXNAflrczPFvAG6sQw99+vyn6U8uEow1nR0DPjT7a6acU5vAY1tI9JZ/n2Vx+wy90nXFcVtrbBW1GH35KeyAmF7Se3KaGFy4jxpL/vIyyOumAM0921X17pr28PV4OAn77LFavG15IAfl0WFGFlUJM7WTNClhRJhn2S81Ijbk2DjhDnG2GYWWZu/hIMyW9NZAFKOMIOBUkC+NJfzOa765dY4AYzS28u6AVRsCzK01mg4zx1Oj5gMAeTq41JLRnIdruIpe6Trh5qkS9yU5b3h11KoKq+NOtLgCy2BwSCZcf8Cq+uNth37VXmm5oUMTbmKsfIHzcj4WqKzApFQ6u8uPzm8zmybQGWoItRG7Yqigo0wsRtYSH+7tTxUWuFMiiKj6+kfjLmfd9oO/699CmLH0c/+9PPbTxmr3EOkKVZMEEl+Q339x6Dpfqpo2vXtvkCx6mDIRgz6jsi83+u8BU5sq21ttvDL3SdcVmI2tr0vm/YtMKUZn2JLuCTXs2ATBCRC+38r5AmsWs23uEjCXNB86qt3tepAgZigcQMXpXG1WbCmw3Yn8YkweftkUgPPI7smNCaxxESn4YLkSWUqSepEuIqZaaE4KTxiMRrOIiUUjrrPhI+pj3PdgARzG9POONG7aZ2J4/AnTKgVkLQP6GHtVCaP04LUA+SP4k2zr355gU+Xp2vGHI7chcgKglIdfkPYu9Pk0gwaHD7A3FGa8dnwPocvaCJQZDS/inr12HrXpXi2fvqIb1rYpYDA+zWLFtYf6Legqc2Vba3EVIl7pOu1Nh1WsY13T/l6Fgv+sYsMKOma3ibeqvNXbDFmn+UxAV7/MAK6Ebz6MJ+GumfgV+FRuyPrII5RIRxakLut7BGzwD3b+z6Aaop42aeuShM6IvF3cd770pgrjgSbTwn/YDNFIh/7kQQ+49G2+uIeHfxC0beh+y5y5FhXV7mq2FARE+VsdpCyESadKyP4YkwD+8oGw/Tifx0PdFwugKV/BXNncFfda3dRIIKCdKdkIkXUks2Vba21ttvDL3SdcVlL3SZM2eVJct2/4mOGk5mS58+6Ku06NkPqDNEBP3F0j7AgZpXr75T/13SmqNSi4uZKO0N9FIwrDbfQCd1v02P0PAWmHdAGx9xGhqBACL/S3dELbaBOnLdWsjdw7Kz224VRc50HWV7rW/5m9U8LBKfYPhDZ7717xzAJgQpkGaqHq94XNq2ioJRtS/sgXuT6V4gcbum26IBiiXLyHUN9cupUNYXYN2LbdP/oZhGP543wlFJzt0uQqSvW1Me0a6IeP11LeBhLdlcemrZiRL3SdcOq223hl7pOuKzEbW15v0wVGxkbB8OIMyte2Cq3MLnv/Z6T/SdvIwjw7D91RJtCOF7vW8fTXE26b0rJQkkXCrM50SeWZBMm3RWVPrGES+3pC1v5mGvUHSK7Qx1VJjOcfnOdNhPddhFa9vKIXc9RFLaiQX8FZcX4/yGeqjsUmayVm3Hih2ILf3PijbOD1yEiMqnAOzDwBb1c6m1xneiKEraLMFXPQvNpFgLAWAsBdjrh1W2t/JFW2prfEIXdi1W7ir42/kN6YBSrtyxAZTNhFTOyAAfeBXRNXWOXafVq9SSnynADjRFWtfdpf3iu6LyDb7JqfvUnDbpReU92k9Kagc76iP+MdwX0J7uWRl5neladNddKH1Ako8emo7zAat+SlorUlckaMsOcWYq9Mjp+2gKl6S7y7ckW+/7DE4nMojNLBbUKXAoh4q0UoIdvhWWSLIgLCAX1rZgXj5SS1ba21trbW4ipEvdJ12fm4ZbZCNG94qHr0ufB8MJMAnEAo4qIFR56b7pEwIPg6mZetU+xtNRgZh2MnelKwuJwAttBBNZkHxYi2ZrKEvM7XhYTxi4lLJRvH2oSlOuWl2AYlW9/9lnHwS454PI7oAaIRfyrtFbmMigrsryYNSEjJpRxxVBKtFQTNAhux88MrjVGgRRWfPTfx5XClFQeIyAigVYqxT0wPLdzchxYewhebSLAWAsBYC7HXDqttb9ZattTclRdP3fokaxCDS9nnFKHYTr/tpclqxSFUb1GUCDc5GucZXl/zzlN6om6SH1EmzfoCtGHsS9Vdaqzh3mqa70M/gbYWLugJl+TWLSq4XxZfsIrozWmMHRsiBb7T8IYHaMOcSL+nZaGmXqBf3F4gxevFVVOfD7vr4puHsegQAtbelpmCC3jFNMl5uWhZlXySxMffJPaQbn+ObBkSvq+N4IoPlmnPqvJeDKSzcyNAKgNsI/j5sqZS4RTDx37NQtd2kJcX36h61OaHiDSZPM8Ks0+7fQARHgmEWQT58tNJ+KCRYCwFom0iwDoN8UPqYkmqViCCMQiyi7ZFCiFNOoc2SCOg9GL7jh63u/X5iPV+nX9A6U7PqhIGrH3Q1ZrCFDeF5Y+WO2JvIOrZ7FxX9ufvXNjOLG7fh/6AB3Fbn4OhFq0yS8uY3KzPXPEBzHlCvT9vafdaXkkCniJiaykr52DEmXnmHNcJSdhX+LVAJ+ota/AGOYQap9VTD9WNTUBeAdlOuV1MGmO4sC1ZaC8sOtFnMFi9cCzb5gJHKrzZwTKDegp5eM0A14FbquPvi/ZUWtnGqZ6zUIDiG+UC6kCKTgYCH3j07rZa4sWNbSEjH6O1l9x1fh2b90u2jXpHxZVtrbW/VIl7jpbgPLYpI2FbBdqSz+ty1RZVMT88lkBKBq751au4rYzzY8dEh+21/yRXuDVbB+wBiea+39UFrTORjh+5AgQgKTRgymOu0hlpvg9tmrFNkPxcmjDC5DujnvVlJ7/K+tyPv7TaGWa7HLrSioD0/iMAUiZ70rtvr6DNv3iRhRN2NJAfb2YkS90nXFZiNra8kM//SnGo1Dch5+xyg8MzHM6hcsmiKdlvsfiEOnx/TlKUwR3KZRL7WU8V3sbFO4YVK2TVEmeydLSe0HMvr3NMqVS64CFsDlBYY80LukS8etp8o8cR8yP6+I1W7irGDT5APYwzjvKeaekflIMK+hjGSmhF0LS2eU5z1LKttba21trbW2tvoIEUvdJ1w85Iq21NfG39mH9J2xU05teZfm7JsU/h5+VRJhAO9n1Y5ttACuCqQ3c2tmhhgUb04poww+2Azj9enVpbk075RUOLH1eij3XBaRtmR07iC6FFL6qkXwI8W7fifu8gz0C4UeMhUki9q32h1sbPSBbBo4tATBU5sq21trcRUiXuk67PzcMt//LU5LS60jNxYiSePmlfi5GFVHbPaJhmKkYRFWc9VF+o2/YoJ1DLNe+ABtJ9lyOwiQQwBJSm+q/+cxnxFPSufmLnSkcIuDkrMICA+ceiMdsqQNklIehgUz/wfqJnYa2TjqnVtrbW2ttba21zil7pOuHmstW2pns8erD5NmYv3in0o4f8sALea61+VuPWPYUo9nBEmeRPODItG5rYAaOz4rjx8NyGszZPnaHXNcu7wb5t6UNKBv2HJEnx3BWhREK2rcg9Znt2fio6lFZKtDzl2YBC+0RROk7mHAIkMrZtUKpXKYbmFLBSwUsFLBSwUsFLBQ+Oq21trfyRVtrc44dpfzbUv0+3z8Ib492KKY4ChZYVdGtgpYKWCl2FUtVLVS1UtVLTDqttba27Huk64zXYdVtrbW2xIl7/BJs2ByB6niqu1ba21v1SJe6Trh1W2ttba21t2Q821tsyRIsBYDCSwc+Qk7eFcfiXbAvosBYCwFgLAWAsBYCwFgLAWAsBywvosBYCwmlMBYGbYTqB8hMvoX0WDvaEnXDqttba21trbW2ttba21trfqkS90nXDqttcR1e6sybpzhZhGBDw0LaYCwaOIKnNlW2ttba21trbW2ttiSI2ttba21trbW2tzyyzXKttcR1W2t2VDzbW2ttba21trbW2ttba21v5Iq21trbW2ttbbNGummsTthbzaLAWRBgWAsBYCwFgLAWAsBYCwFgLAWhgqc2Vba21trbW2uI6vd39uBk6uusy4Ze6Trh1W2ttba21trbW2ttbbEkRtba21trbW2ttbbMkSLAWAsCCrvb2BfRYCwFgLAWAsBYCwFgLAWAtE2kWAsBYCwFgLAWAsBYCwnbC0UwFgLAWAsBYCwFgLAWAsBYCwFgLAcggqc2Vba21trbW2ttcTNcq2+Sttba21trbW2ttba21trbW2ttba27Ieba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21tsTq21trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21trbW/VIl7pOuHVba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2xJEbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttb+SKttba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba27Huk64dVtrbWtBE8F4LXDL3SZWLuReM4fhEwbuWJVPDkoaSKd/KJFfdF76ObKttba21trbW2ttb9Zattba21tra/9juntgZYRhYKB0YjTHYX8iEGPp1e3boY0P6BjaAw/cOG2vUzZR1hlXI4HZ95i++aedusHrf06tGGOAKvg24w87E91J8v0u0LEVfCEvU/3lYDxn23EbcjlVvZy9hxItiDPnvmoJMJqQ1TX/ym86tl1NuIKJloGTYup7iYX1pnNjVuVIKrQD+3u2MCIIKztdvW3+1uqjQpNQiqEsFX+OKjHj/zA2kvz4GL4M5sq21trbW2ttb+SKttba21tra/PkMNk4U6GwcCjh8HFVwXxDB8dnP+iihu//K5CUylZwrpc00nJl8Vc+CCOocJj2Y9W7F46fNEyG8Cz2YgosK68LDT4eg7+GU7aqCzw4xIgY8ExQHysV0npsu8+kfKfwF9PZBuSbB9BqWcmIwgasKUErJyHalWkh9iA195J6tl/CDowiqgHLQZoGM5X6HHd3cOfSQhntkNRM4IRTMezH35dmE8x+c0T3Etioal+YIcEsJA4SSBO6fRYQMcf+xjkkNeesSbkN6DdiBTaoy0gdTqfekNS1uX3HMxyt79YtlrpnGi+SJe6Trh1W2ttiRL3SdcOq21tf0cZWQaqcdg+jW30ux4sGTTO/duTlUATjlbWzSbHjL5eFIjFyArl5VIbajng4zQZDbORnxwWWzz/J9zkEIdPmVFwComZGpPn4i0kW3wtFL0mG1qgSmnlxW8eLsS+fGlkP4vROQcm0YYD/ej62WML6qSyj5OzyPhKgqc2Vba21trbsh5trbW2ttba7r3bdzt27Q9s70EMzd1/M3urvdtHbR5SW2ttba21trbW2xOrbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttb9UiXuk64dVtrbW2ttba21trbW2ttba21trbW2ttba21trbW2ttbbEkRtba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21v5Iq21trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21trbse6Trh1VPpr0Di2pEB/6b6XM2Vba1oNvjkUfsBwXxSGw1W2ttba21trbWsPUqELWHVba21trbsh5trbW2ejQkbYjuHJuiCcev5F4US1qNKlr76i8yznAQtTG6iwP/knbbBtJCZ1dxb1MrglJNzKKUqceXxQ+QZhq47qzQMThuQYOLejOFy1z3xnOx4mkzVJxvsJAYq8n6I94LZfGlEhKsfxS4d+ks7doFBqAeGB4X4YliwI4eBuoHegA+cHgkH32FjUBEIPrdS1apCrEjIwIN4B8ElXK37qAvX86dcWJ2d5FFDMCKcD9UnrBNKNNDHLTAWAsBYCwFgK+wqtO5OSWpOrtOZVk17pOuHVbbE6ttba21Ynu5DuQ7kO5DuQ7kO5DuQ7kO5Grrq66uurrq66uurrp+2gWVNreRUiXuk64dbHuk64dVQAhGAYM1xrYKWClgpYKWClgpYKWClgpYKWClgpYKWClgo+5TG0C+iwFgLAchbSLAWAww3Hwx8MfDHwx8MfDHwx8MfDHwx8MfDHwx8MfDHwx8MeaAsBYCwFgLRNpFgLAWAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWAsBYCwFgLAWDRxBU5sq1oV07/+BMGIRT2bOn+J06pJ0trOF8to59lXDFDP6oSZUvMr3BRZri8M0BaS89kt+8trky36bYREkgFNt2Az+ezLKOlgylpeozxdF51+Cg1Ozeq/ToXRGmLZ00G6H5AV2vYtvR4gZjjNOv3KQRiYOSYzE3ezhQXwSbuzUToBE9YwarcfIqoXFfRYCwFgLAWAqwRfDSQj6EwAbhl7pOuHViSI2ttba1tizlCakFzMIWT/aeHRA36/Rvju/L/H4+8hDhmHYbkM7SDxp5y2+C3CL6EP3+T8Jzu4ydbvkyyCL1NvzCZXH/kl1NX7wVEAh3ebbCfex04ct1tVfD9JgmtM682HM37B7wWWByoFWJNwSPKKoD8Muft9UGUUswMda+xV64xsfUm2vNlW2ttba21rAVwuGCQUqo/e4dVtrbW2xOrbW2ttWzJbmfYKVx9go+qVylcfYHvZ76pXKWClgpYKWClgpYKV4ftDq65Kgqc2Vbdj3SdcOq7q21trbW2ttba21trbW2ttba21trbW2ttbfJW2ttba21t2Q821trbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21trbYnVtrbW2ttba21trbW2ttba21trbW2ttba21trbW2p5GT937myrbW2ttb9UiXuk610eOb6W2hGx/KIXJkRD0Qcs0bHx/aoYIRx4C9y6RnbDyYLqWHtZjKibxus1GI4Zs+9p8d2vJ8EyIQdo4cXowRhyF0O4DT3646eGC1TliRZegghm47WQ5ll6nnqY8rS//twuxHSdKXzfrpVuYHy0eEY1JVRKuGFwESoLpo+X4+2qjMtJDbZGj2EogMcsgiztrW4WUiCDdVEVhL4mppvW2lHJMUWmw1P6PUWcrJc+0jSHci2p4jKV7CahsOXOSGxYJlcS/oH64CnuyPDXBp6pkUpRhrtTDPRYCwFgKsIBNhhIsS4ptaeIRkYBqttba21tsSRG1trbW29o7aO2jtndkGXs6L2gJ++z2OvTAQokA7juGdPTlNT7WXjm7a21trbWsghqwyDEL6LAWAsBYNZxfRYCv/KIIlaqWqlqpaqKtlqpYxjKlqpY2KtlqpaqWqlqpaqWqlTLDqttba21v1SJe6Trh1W2ttba21trbW2ttba21trbW2ttba21tritnja21trbW/WWrbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21trbW2tu0TW2ttbanpahIMskW3gro2JvPSRWPPb5l7aYKI6jhEP2bCyengERpU97yUeH0bkJ+JGXRKGWLYf7NwguiVeuD4XaF8eLoUELhGhOOnEbao14K/nUNCgFMnQuWZuuaonWFoBYCwFgLAWAqwN4KjeDL7UZxtrbW2ttbbEiXuk64dQCK90MEFhvZhILNqkFNNMixWbB4bVr3r/0h8Farg+K1n1iuq6CAJUY454JuvpFgNnEVrCTcVYhkqX+Z94OxiN4UkgxerXof2FKJZxJS+QnUadgYVTZtcC0GqmyBO8XFABjzs4DxoH1KU7UOKQM7qoZ7Sqrq/0es1R0cn8BNgIuZS5BGog6zmCeVuV3twFUD9XDqttba21tqYLj9ruDtADY/6WeSJe6Trh1sh5trbW2Ql59LHvZ72e9nvZ9ce9nvZ72e9nvqlgpYKWClgpYKWCmIfdppVNtba21trfyRVtrbW5u2ttba21trbhtv7b+2/tv7b+2/tv7b+2/tv7b+2/lrbW2ttba27Huk64dVtrbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21v1lq21trbW2ttba21trbW2ttba21trbW2ttba21trXj0VtrbW2ttbdomttba2ys6BFJQjHHXQIL/h4+9iZ9+ys3eOA0tjvjERMFS+FKiunZlX+/cDxxhrTRcG6ZEQqRyeeLDBdLp8rv85ym9hGQEQllW+f8trZ82jZuwWtewuOrHbT1/epX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trbW2tu0TW2ttba21trbW2ta6NcAUdQabBQxmk6LceLFNRtnKFRGDnN+pdFHQAniRD7gQxtY0CMApR4geyYTvpwj9eAw36WWQyKhI3nbhl7pOuHVba21trc82VtrbW2ttetbdj3SdcOq21trbW2tt6He92zvQLbW2ttba21trbZkiRYzcfHMGPhj4MCwazi+iwFgLAWAsBYCrgufwESuCJISHVzexGcbLLm3MLHuDGW0FFwciyJa3L3SdcOq21trbW2ttba21trbW2ttbbEiXuk64dVtrbW2tr+dGcBI1cGnCjibijKsEb0hqIoNP2K6PBgJ4Rn7KfnBEN0EHzf+RmlDNJKCRL3SdcOq21trbXEzXKttba21trbYnVtrbW2ttba21tra/sWawhwI8a8vQlxNLlBNOiYPrqJQs2Vba21trbW2ttba21trbW2ttba21tsSJe6Trh1W2ttba23sZIVI6rbW2ttba21trbW2ttba2+SuJmuVb9UiYfx7pOuHVba21trbW2ttba21trbW2ttba21trbW2ttba21trb5K21t2PdJ1w6rbW2ttba21trbW2ttba21trbW2ttba21trbW2ttba21tUloQwI4KWClgpYKWClgpYKWClgpYKWClgpYKWClgpYKWClgpYKWClgpYKWClgpYKWClgpURCNrbW2ttba21trbW2tZubVeg/IE6QYxwQXbYV5q1q7y3+XxiuRpurK0lKkVAHIZvC+1hyhOEiqjQeChQSiQfPIW/X4UmnFHmykX5NWt4cVQUpdxhHyy5Rn56j1Dwagcxud3Evp0QJbqBrObKttba21trbW2ttba38kVba21trbW2ttba21tf9ygmpHRUz3BJmj8vW80Q0tn61Mqc2Vba21trbW2ttba2vAAA/v5bmgAAXfI8bRf6l2a97xl9k6R3ol7l/Rc9wTh5nnL2mDEpFHMcnhTqKPtAzl74FJFpVq4aJeecfk9iEheydqTaOp7mI/K3++v1gWWOgO3zGjjDxnRpD6o/lFHP84z5Cr/1Cqk7CXjGhxHzQWxW0RZnVu63CIeIt+tK7dPfPREEZ6yA7azOb+6wwhdLkMVVuAAAO3qP5Yo6qlK/TsATAqdEMSMSWR8nwcZm33C+s+g3z6Zquf1LdKF1qW6Cu6Sj8r5JYSatixjSnuf3Y/vkPO9tZTu0/cjd9mi1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"
                    },
                    "nodes": {
                        "1-64-A": {
                            "left": 891,
                            "right": 1077,
                            "bottom": 6036,
                            "width": 186,
                            "height": 24,
                            "top": 6012
                        },
                        "1-36-LI": {
                            "left": 700,
                            "top": 3987,
                            "bottom": 4009,
                            "height": 22,
                            "right": 1151,
                            "width": 451
                        },
                        "1-78-INPUT": {
                            "id": "name",
                            "bottom": 0,
                            "width": 0,
                            "left": 0,
                            "height": 0,
                            "right": 0,
                            "top": 0
                        },
                        "1-88-IMG": {
                            "height": 40,
                            "bottom": 3222,
                            "right": 2761,
                            "width": 40,
                            "left": 2721,
                            "top": 3182
                        },
                        "1-92-IMG": {
                            "top": 3182,
                            "bottom": 3222,
                            "left": 4481,
                            "height": 40,
                            "right": 4521,
                            "width": 40
                        },
                        "1-115-META": {
                            "width": 0,
                            "height": 0,
                            "right": 0,
                            "bottom": 0,
                            "left": 0,
                            "top": 0
                        },
                        "1-27-H2": {
                            "width": 186,
                            "height": 22,
                            "left": 674,
                            "top": 5978,
                            "bottom": 6000,
                            "right": 859
                        },
                        "1-18-DIV": {
                            "right": 1350,
                            "bottom": 2711,
                            "top": 1892,
                            "left": 0,
                            "width": 1350,
                            "height": 819
                        },
                        "page-15-DIV": {
                            "top": 2974,
                            "left": 1360,
                            "height": 314,
                            "right": 1750,
                            "bottom": 3288,
                            "width": 390
                        },
                        "1-80-INPUT": {
                            "width": 0,
                            "top": 0,
                            "height": 0,
                            "id": "phone",
                            "bottom": 0,
                            "right": 0,
                            "left": 0
                        },
                        "1-91-IMG": {
                            "top": 3182,
                            "bottom": 3222,
                            "left": 4041,
                            "right": 4081,
                            "width": 40,
                            "height": 40
                        },
                        "1-101-LINK": {
                            "width": 0,
                            "bottom": 0,
                            "right": 0,
                            "height": 0,
                            "left": 0,
                            "top": 0
                        },
                        "1-119-META": {
                            "left": 0,
                            "width": 0,
                            "top": 0,
                            "height": 0,
                            "right": 0,
                            "bottom": 0
                        },
                        "1-24-DIV": {
                            "top": 3817,
                            "left": 160,
                            "right": 1191,
                            "width": 1031,
                            "bottom": 4317,
                            "height": 500
                        },
                        "1-100-IMG": {
                            "right": 727,
                            "bottom": 5326,
                            "height": 40,
                            "left": 687,
                            "width": 40,
                            "top": 5286
                        },
                        "1-54-A": {
                            "left": 456,
                            "top": 6012,
                            "width": 186,
                            "height": 24,
                            "right": 642,
                            "bottom": 6036
                        },
                        "1-47-A": {
                            "bottom": 417,
                            "left": 995,
                            "right": 1147,
                            "top": 369,
                            "width": 152,
                            "height": 48
                        },
                        "1-16-A": {
                            "height": 292,
                            "width": 328,
                            "left": 863,
                            "bottom": 1123,
                            "top": 831,
                            "right": 1191
                        },
                        "1-73-svg": {
                            "top": 556,
                            "height": 64,
                            "left": 904,
                            "right": 969,
                            "bottom": 620,
                            "width": 65
                        },
                        "1-84-IMG": {
                            "left": 961,
                            "top": 3182,
                            "right": 1001,
                            "bottom": 3222,
                            "width": 40,
                            "height": 40
                        },
                        "page-8-A": {
                            "width": 31,
                            "left": 159,
                            "top": 6087,
                            "bottom": 6117,
                            "height": 30,
                            "right": 190
                        },
                        "1-70-A": {
                            "left": 1109,
                            "bottom": 6116,
                            "width": 186,
                            "right": 1294,
                            "height": 24,
                            "top": 6092
                        },
                        "1-87-IMG": {
                            "bottom": 3222,
                            "width": 40,
                            "height": 40,
                            "top": 3182,
                            "left": 2281,
                            "right": 2321
                        },
                        "1-1-DIV": {
                            "width": 1350,
                            "bottom": 1251,
                            "right": 1350,
                            "top": 40,
                            "left": 0,
                            "height": 1211
                        },
                        "1-34-A": {
                            "left": 12,
                            "top": 24,
                            "right": 137,
                            "width": 125,
                            "height": 26,
                            "bottom": 50
                        },
                        "1-40-LI": {
                            "top": 4139,
                            "left": 700,
                            "width": 451,
                            "right": 1151,
                            "bottom": 4161,
                            "height": 22
                        },
                        "1-2-P": {
                            "left": 309,
                            "bottom": 407,
                            "height": 24,
                            "top": 383,
                            "right": 739,
                            "width": 430
                        },
                        "1-106-LINK": {
                            "bottom": 0,
                            "height": 0,
                            "top": 0,
                            "id": "googleidentityservice",
                            "left": 0,
                            "right": 0,
                            "width": 0
                        },
                        "1-112-META": {
                            "width": 0,
                            "left": 0,
                            "top": 0,
                            "height": 0,
                            "bottom": 0,
                            "right": 0
                        },
                        "page-20-DIV": {
                            "top": 1534,
                            "bottom": 1725,
                            "right": 970,
                            "left": 763,
                            "height": 191,
                            "width": 207
                        },
                        "1-42-BUTTON": {
                            "left": 1263,
                            "bottom": 60,
                            "height": 46,
                            "top": 14,
                            "right": 1338,
                            "width": 75
                        },
                        "1-104-LINK": {
                            "bottom": 0,
                            "left": 0,
                            "right": 0,
                            "height": 0,
                            "top": 0,
                            "width": 0
                        },
                        "1-76-INPUT": {
                            "height": 0,
                            "bottom": 0,
                            "left": 0,
                            "right": 0,
                            "width": 0,
                            "top": 0
                        },
                        "1-86-IMG": {
                            "left": 1841,
                            "top": 3182,
                            "width": 40,
                            "height": 40,
                            "right": 1881,
                            "bottom": 3222
                        },
                        "1-61-A": {
                            "left": 674,
                            "right": 859,
                            "width": 186,
                            "bottom": 6076,
                            "height": 24,
                            "top": 6052
                        },
                        "page-4-IMG": {
                            "right": 3640,
                            "bottom": 3255,
                            "top": 3215,
                            "height": 40,
                            "width": 39,
                            "left": 3601
                        },
                        "1-30-A": {
                            "height": 270,
                            "left": 24,
                            "bottom": 1764,
                            "top": 1494,
                            "width": 287,
                            "right": 311
                        },
                        "1-111-META": {
                            "height": 0,
                            "width": 0,
                            "bottom": 0,
                            "right": 0,
                            "left": 0,
                            "top": 0
                        },
                        "1-66-A": {
                            "left": 891,
                            "width": 186,
                            "height": 24,
                            "right": 1077,
                            "top": 6092,
                            "bottom": 6116
                        },
                        "1-60-A": {
                            "width": 186,
                            "left": 674,
                            "top": 6012,
                            "right": 859,
                            "bottom": 6036,
                            "height": 24
                        },
                        "page-10-DIV": {
                            "bottom": 3266,
                            "top": 2974,
                            "height": 292,
                            "left": 3120,
                            "width": 390,
                            "right": 3510
                        },
                        "1-69-A": {
                            "width": 186,
                            "height": 24,
                            "bottom": 6076,
                            "right": 1294,
                            "left": 1109,
                            "top": 6052
                        },
                        "1-67-A": {
                            "bottom": 6156,
                            "width": 186,
                            "top": 6132,
                            "height": 24,
                            "right": 1077,
                            "left": 891
                        },
                        "1-10-A": {
                            "right": 1191,
                            "height": 292,
                            "top": 515,
                            "bottom": 807,
                            "width": 328,
                            "left": 863
                        },
                        "1-37-LI": {
                            "top": 4025,
                            "left": 700,
                            "height": 22,
                            "width": 451,
                            "bottom": 4047,
                            "right": 1151
                        },
                        "1-5-P": {
                            "left": 184,
                            "height": 42,
                            "right": 462,
                            "top": 682,
                            "width": 278,
                            "bottom": 724
                        },
                        "page-13-DIV": {
                            "height": 336,
                            "width": 390,
                            "bottom": 3310,
                            "right": 3950,
                            "top": 2974,
                            "left": 3560
                        },
                        "1-41-SPAN": {
                            "top": 24,
                            "right": 1320,
                            "left": 1281,
                            "height": 24,
                            "width": 39,
                            "bottom": 48
                        },
                        "1-20-DIV": {
                            "width": 1350,
                            "bottom": 3514,
                            "top": 2711,
                            "height": 803,
                            "right": 1350,
                            "left": 0
                        },
                        "1-99-IMG": {
                            "width": 40,
                            "bottom": 5326,
                            "top": 5286,
                            "left": 655,
                            "height": 40,
                            "right": 695
                        },
                        "1-103-LINK": {
                            "height": 0,
                            "left": 0,
                            "bottom": 0,
                            "right": 0,
                            "top": 0,
                            "width": 0
                        },
                        "1-32-A": {
                            "left": 723,
                            "top": 1494,
                            "width": 287,
                            "height": 270,
                            "bottom": 1764,
                            "right": 1010
                        },
                        "1-72-stop": {
                            "bottom": 0,
                            "right": 0,
                            "left": 0,
                            "top": 0,
                            "width": 0,
                            "height": 0
                        },
                        "1-51-A": {
                            "bottom": 6118,
                            "right": 112,
                            "width": 32,
                            "top": 6086,
                            "height": 32,
                            "left": 80
                        },
                        "page-16-A": {
                            "left": 80,
                            "width": 32,
                            "top": 6086,
                            "bottom": 6118,
                            "right": 112,
                            "height": 32
                        },
                        "page-3-IMG": {
                            "top": 3204,
                            "bottom": 3244,
                            "left": 1401,
                            "right": 1441,
                            "width": 40,
                            "height": 40
                        },
                        "1-117-META": {
                            "right": 0,
                            "width": 0,
                            "left": 0,
                            "height": 0,
                            "bottom": 0,
                            "top": 0
                        },
                        "page-14-DIV": {
                            "bottom": 3266,
                            "height": 292,
                            "top": 2974,
                            "width": 390,
                            "left": 4880,
                            "right": 5270
                        },
                        "1-116-META": {
                            "right": 0,
                            "height": 0,
                            "width": 0,
                            "left": 0,
                            "top": 0,
                            "bottom": 0
                        },
                        "1-77-INPUT": {
                            "top": 0,
                            "bottom": 0,
                            "height": 0,
                            "right": 0,
                            "width": 0,
                            "left": 0
                        },
                        "1-79-INPUT": {
                            "height": 0,
                            "id": "useremail",
                            "right": 0,
                            "top": 0,
                            "bottom": 0,
                            "left": 0,
                            "width": 0
                        },
                        "1-62-A": {
                            "width": 186,
                            "right": 859,
                            "height": 24,
                            "bottom": 6116,
                            "left": 674,
                            "top": 6092
                        },
                        "page-6-DIV": {
                            "top": 2974,
                            "right": 2630,
                            "height": 292,
                            "left": 2240,
                            "bottom": 3266,
                            "width": 390
                        },
                        "1-4-P": {
                            "bottom": 431,
                            "left": 309,
                            "right": 661,
                            "width": 352,
                            "height": 24,
                            "top": 407
                        },
                        "1-105-LINK": {
                            "height": 0,
                            "bottom": 0,
                            "width": 0,
                            "right": 0,
                            "left": 0,
                            "top": 0
                        },
                        "1-71-A": {
                            "height": 24,
                            "right": 1294,
                            "top": 6132,
                            "left": 1109,
                            "bottom": 6156,
                            "width": 186
                        },
                        "1-121-META": {
                            "left": 0,
                            "right": 0,
                            "top": 0,
                            "height": 0,
                            "bottom": 0,
                            "width": 0
                        },
                        "1-50-A": {
                            "height": 32,
                            "right": 72,
                            "left": 40,
                            "width": 32,
                            "bottom": 6118,
                            "top": 6086
                        },
                        "page-23-DIV": {
                            "height": 314,
                            "left": 480,
                            "bottom": 3288,
                            "right": 870,
                            "top": 2974,
                            "width": 390
                        },
                        "page-11-A": {
                            "top": 6086,
                            "right": 151,
                            "width": 31,
                            "left": 120,
                            "bottom": 6118,
                            "height": 32
                        },
                        "1-0-SPAN": {
                            "width": 1085,
                            "top": 247,
                            "bottom": 271,
                            "height": 24,
                            "left": 133,
                            "right": 1218
                        },
                        "1-38-LI": {
                            "width": 451,
                            "bottom": 4085,
                            "left": 700,
                            "top": 4063,
                            "right": 1151,
                            "height": 22
                        },
                        "1-65-A": {
                            "width": 186,
                            "left": 891,
                            "right": 1077,
                            "bottom": 6076,
                            "top": 6052,
                            "height": 24
                        },
                        "1-57-A": {
                            "right": 642,
                            "left": 456,
                            "bottom": 6156,
                            "width": 186,
                            "height": 24,
                            "top": 6132
                        },
                        "1-58-A": {
                            "left": 456,
                            "height": 24,
                            "bottom": 6196,
                            "top": 6172,
                            "width": 186,
                            "right": 642
                        },
                        "1-13-P": {
                            "left": 536,
                            "height": 42,
                            "width": 278,
                            "right": 814,
                            "top": 998,
                            "bottom": 1040
                        },
                        "1-44-A": {
                            "bottom": 0,
                            "height": 0,
                            "top": 0,
                            "right": 0,
                            "width": 0,
                            "left": 0
                        },
                        "1-23-H1": {
                            "height": 27,
                            "bottom": 3914,
                            "top": 3887,
                            "left": 768,
                            "width": 353,
                            "right": 1121
                        },
                        "1-21-H5": {
                            "width": 122,
                            "right": 736,
                            "top": 3657,
                            "height": 30,
                            "left": 614,
                            "bottom": 3687
                        },
                        "1-59-A": {
                            "right": 642,
                            "top": 6212,
                            "left": 456,
                            "bottom": 6260,
                            "height": 48,
                            "width": 186
                        },
                        "1-17-P": {
                            "bottom": 2138,
                            "right": 949,
                            "height": 27,
                            "width": 549,
                            "top": 2111,
                            "left": 401
                        },
                        "1-43-A": {
                            "width": 0,
                            "bottom": 0,
                            "height": 0,
                            "top": 0,
                            "right": 0,
                            "left": 0
                        },
                        "1-68-A": {
                            "left": 1109,
                            "right": 1294,
                            "bottom": 6036,
                            "width": 186,
                            "top": 6012,
                            "height": 24
                        },
                        "1-49-A": {
                            "width": 176,
                            "right": 216,
                            "height": 40,
                            "top": 5968,
                            "bottom": 6008,
                            "left": 40
                        },
                        "1-83-IMG": {
                            "right": 561,
                            "width": 40,
                            "top": 3204,
                            "left": 521,
                            "height": 40,
                            "bottom": 3244
                        },
                        "1-48-A": {
                            "bottom": 0,
                            "width": 0,
                            "height": 0,
                            "right": 0,
                            "left": 0,
                            "top": 0
                        },
                        "1-29-P": {
                            "top": 6318,
                            "height": 22,
                            "right": 833,
                            "bottom": 6340,
                            "width": 317,
                            "left": 517
                        },
                        "1-28-H2": {
                            "width": 186,
                            "right": 1077,
                            "bottom": 6000,
                            "top": 5978,
                            "height": 22,
                            "left": 891
                        },
                        "page-1-DIV": {
                            "width": 1032,
                            "top": 515,
                            "right": 1191,
                            "bottom": 1123,
                            "left": 159,
                            "height": 608
                        },
                        "1-56-A": {
                            "left": 456,
                            "height": 24,
                            "bottom": 6116,
                            "width": 186,
                            "top": 6092,
                            "right": 642
                        },
                        "1-110-META": {
                            "bottom": 0,
                            "width": 0,
                            "height": 0,
                            "left": 0,
                            "top": 0,
                            "right": 0
                        },
                        "1-7-P": {
                            "height": 42,
                            "bottom": 724,
                            "left": 536,
                            "width": 278,
                            "top": 682,
                            "right": 814
                        },
                        "1-22-DIV": {
                            "width": 1350,
                            "height": 931,
                            "right": 1350,
                            "left": 0,
                            "top": 3514,
                            "bottom": 4445
                        },
                        "1-74-FORM": {
                            "width": 0,
                            "right": 0,
                            "top": 0,
                            "bottom": 0,
                            "left": 0,
                            "height": 0
                        },
                        "1-93-IMG": {
                            "right": 4961,
                            "width": 40,
                            "top": 3182,
                            "bottom": 3222,
                            "left": 4921,
                            "height": 40
                        },
                        "1-82-IMG": {
                            "width": 40,
                            "left": 81,
                            "top": 3182,
                            "height": 40,
                            "bottom": 3222,
                            "right": 121
                        },
                        "page-27-DIV": {
                            "left": 5760,
                            "height": 314,
                            "top": 2974,
                            "width": 390,
                            "right": 6150,
                            "bottom": 3288
                        },
                        "1-45-A": {
                            "width": 176,
                            "bottom": 59,
                            "right": 1209,
                            "height": 44,
                            "top": 15,
                            "left": 1033
                        },
                        "1-63-A": {
                            "width": 186,
                            "left": 674,
                            "bottom": 6156,
                            "right": 859,
                            "height": 24,
                            "top": 6132
                        },
                        "page-2-IMG": {
                            "width": 40,
                            "bottom": 3222,
                            "right": 3201,
                            "left": 3161,
                            "height": 40,
                            "top": 3182
                        },
                        "1-6-A": {
                            "top": 515,
                            "right": 487,
                            "height": 292,
                            "left": 159,
                            "bottom": 807,
                            "width": 328
                        },
                        "1-9-P": {
                            "height": 42,
                            "left": 888,
                            "bottom": 724,
                            "top": 682,
                            "width": 278,
                            "right": 1166
                        },
                        "1-39-LI": {
                            "width": 451,
                            "bottom": 4123,
                            "height": 22,
                            "left": 700,
                            "top": 4101,
                            "right": 1151
                        },
                        "1-8-A": {
                            "bottom": 807,
                            "left": 511,
                            "height": 292,
                            "width": 328,
                            "top": 515,
                            "right": 839
                        },
                        "1-109-META": {
                            "height": 0,
                            "bottom": 0,
                            "left": 0,
                            "right": 0,
                            "width": 0,
                            "top": 0
                        },
                        "page-25-DIV": {
                            "height": 191,
                            "bottom": 1725,
                            "top": 1534,
                            "right": 633,
                            "width": 231,
                            "left": 402
                        },
                        "1-95-IMG": {
                            "left": 5801,
                            "top": 3204,
                            "width": 40,
                            "bottom": 3244,
                            "height": 40,
                            "right": 5841
                        },
                        "1-81-TEXTAREA": {
                            "left": 0,
                            "right": 0,
                            "width": 0,
                            "id": "message",
                            "bottom": 0,
                            "height": 0,
                            "top": 0
                        },
                        "page-7-DIV": {
                            "height": 292,
                            "bottom": 3266,
                            "right": 4830,
                            "left": 4440,
                            "top": 2974,
                            "width": 390
                        },
                        "1-75-FORM": {
                            "bottom": 0,
                            "width": 0,
                            "right": 0,
                            "height": 0,
                            "top": 0,
                            "left": 0
                        },
                        "page-5-DIV": {
                            "left": 1800,
                            "top": 2974,
                            "height": 292,
                            "width": 390,
                            "bottom": 3266,
                            "right": 2190
                        },
                        "1-14-A": {
                            "left": 511,
                            "right": 839,
                            "height": 292,
                            "top": 831,
                            "bottom": 1123,
                            "width": 328
                        },
                        "1-53-A": {
                            "right": 190,
                            "width": 31,
                            "bottom": 6117,
                            "height": 30,
                            "left": 159,
                            "top": 6087
                        },
                        "page-19-DIV": {
                            "width": 390,
                            "height": 292,
                            "left": 5320,
                            "top": 2974,
                            "bottom": 3266,
                            "right": 5710
                        },
                        "1-114-META": {
                            "top": 0,
                            "height": 0,
                            "right": 0,
                            "left": 0,
                            "width": 0,
                            "bottom": 0
                        },
                        "1-89-IMG": {
                            "bottom": 3222,
                            "left": 3161,
                            "height": 40,
                            "right": 3201,
                            "top": 3182,
                            "width": 40
                        },
                        "1-15-P": {
                            "top": 998,
                            "bottom": 1040,
                            "width": 278,
                            "left": 888,
                            "right": 1166,
                            "height": 42
                        },
                        "1-35-LI": {
                            "bottom": 3971,
                            "left": 700,
                            "height": 22,
                            "right": 1151,
                            "top": 3949,
                            "width": 451
                        },
                        "1-118-META": {
                            "right": 0,
                            "top": 0,
                            "height": 0,
                            "left": 0,
                            "bottom": 0,
                            "width": 0
                        },
                        "1-96-IMG": {
                            "top": 3817,
                            "bottom": 4317,
                            "height": 500,
                            "width": 500,
                            "right": 660,
                            "left": 160
                        },
                        "1-25-H2": {
                            "left": 456,
                            "right": 642,
                            "width": 186,
                            "height": 22,
                            "top": 5978,
                            "bottom": 6000
                        },
                        "page-9-DIV": {
                            "bottom": 1725,
                            "right": 1328,
                            "top": 1534,
                            "height": 191,
                            "width": 223,
                            "left": 1105
                        },
                        "1-12-A": {
                            "left": 159,
                            "right": 487,
                            "width": 328,
                            "height": 292,
                            "bottom": 1123,
                            "top": 831
                        },
                        "1-46-A": {
                            "right": 0,
                            "bottom": 0,
                            "left": 0,
                            "top": 0,
                            "height": 0,
                            "width": 0
                        },
                        "1-120-META": {
                            "width": 0,
                            "top": 0,
                            "bottom": 0,
                            "height": 0,
                            "right": 0,
                            "left": 0
                        },
                        "page-18-DIV": {
                            "left": 4000,
                            "top": 2974,
                            "bottom": 3266,
                            "width": 390,
                            "right": 4390,
                            "height": 292
                        },
                        "1-98-IMG": {
                            "left": 623,
                            "bottom": 5326,
                            "height": 40,
                            "width": 40,
                            "top": 5286,
                            "right": 663
                        },
                        "page-12-DIV": {
                            "left": 40,
                            "top": 2974,
                            "width": 390,
                            "right": 430,
                            "height": 292,
                            "bottom": 3266
                        },
                        "1-26-DIV": {
                            "width": 1350,
                            "top": 5744,
                            "left": 0,
                            "bottom": 6348,
                            "right": 1350,
                            "height": 605
                        },
                        "1-102-LINK": {
                            "right": 0,
                            "left": 0,
                            "width": 0,
                            "bottom": 0,
                            "height": 0,
                            "top": 0
                        },
                        "1-94-IMG": {
                            "left": 5361,
                            "height": 40,
                            "bottom": 3222,
                            "right": 5401,
                            "top": 3182,
                            "width": 40
                        },
                        "1-85-IMG": {
                            "right": 1441,
                            "top": 3204,
                            "height": 40,
                            "left": 1401,
                            "bottom": 3244,
                            "width": 40
                        },
                        "page-24-DIV": {
                            "top": 2974,
                            "right": 3070,
                            "height": 292,
                            "bottom": 3266,
                            "width": 390,
                            "left": 2680
                        },
                        "1-52-A": {
                            "height": 32,
                            "width": 31,
                            "left": 120,
                            "right": 151,
                            "top": 6086,
                            "bottom": 6118
                        },
                        "1-11-P": {
                            "right": 462,
                            "top": 998,
                            "left": 184,
                            "width": 278,
                            "bottom": 1040,
                            "height": 42
                        },
                        "1-55-A": {
                            "right": 642,
                            "left": 456,
                            "top": 6052,
                            "bottom": 6076,
                            "width": 186,
                            "height": 24
                        },
                        "1-107-META": {
                            "width": 0,
                            "bottom": 0,
                            "right": 0,
                            "height": 0,
                            "left": 0,
                            "top": 0
                        },
                        "1-113-META": {
                            "width": 0,
                            "bottom": 0,
                            "left": 0,
                            "height": 0,
                            "top": 0,
                            "right": 0
                        },
                        "1-90-IMG": {
                            "left": 3601,
                            "bottom": 3255,
                            "width": 39,
                            "height": 40,
                            "top": 3215,
                            "right": 3640
                        },
                        "page-21-DIV": {
                            "width": 222,
                            "bottom": 1725,
                            "left": 57,
                            "height": 191,
                            "top": 1534,
                            "right": 279
                        },
                        "1-33-A": {
                            "left": 1073,
                            "width": 287,
                            "top": 1494,
                            "bottom": 1764,
                            "right": 1360,
                            "height": 270
                        },
                        "page-0-H1": {
                            "height": 75,
                            "top": 168,
                            "right": 1260,
                            "width": 1169,
                            "bottom": 243,
                            "left": 91
                        },
                        "page-22-DIV": {
                            "right": 1310,
                            "height": 292,
                            "bottom": 3266,
                            "left": 920,
                            "width": 390,
                            "top": 2974
                        },
                        "1-19-H5": {
                            "left": 615,
                            "bottom": 2796,
                            "right": 735,
                            "top": 2766,
                            "height": 30,
                            "width": 120
                        },
                        "page-17-A": {
                            "width": 32,
                            "top": 6086,
                            "right": 72,
                            "left": 40,
                            "bottom": 6118,
                            "height": 32
                        },
                        "1-108-META": {
                            "top": 0,
                            "height": 0,
                            "left": 0,
                            "right": 0,
                            "bottom": 0,
                            "width": 0
                        },
                        "1-3-DIV": {
                            "right": 1196,
                            "width": 1042,
                            "height": 164,
                            "bottom": 475,
                            "left": 154,
                            "top": 311
                        },
                        "page-26-DIV": {
                            "width": 1350,
                            "top": 0,
                            "left": 0,
                            "right": 1350,
                            "bottom": 73,
                            "height": 73
                        },
                        "1-31-A": {
                            "left": 374,
                            "height": 270,
                            "top": 1494,
                            "bottom": 1764,
                            "right": 661,
                            "width": 287
                        },
                        "1-97-IMG": {
                            "left": 700,
                            "bottom": 3917,
                            "top": 3857,
                            "right": 760,
                            "height": 60,
                            "width": 60
                        }
                    }
                }
            },
            "analysisUTCTimestamp": "2024-09-25T12:57:26.623Z"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the PageSpeed Insights data', errors: error });
    }
});
// Puppeteer Endpoint
app.get('/scrape', async (req, res) => {
    const { url } = req.query;
    console.log("Scraping");
    if (!url) {
        return res.status(400).json({ error: 'URL parameter is required' });
    }

    try {
        res.json({
            "title": "takeuforward - Best Coding Tutorials for Free",
            "keywords": null,
            "subKeywords": [],
            "metaDescription": "takeuforward is the best place to learn data structures, algorithms, most asked coding interview questions, real interview experiences free of cost.",
            "languageCode": "en",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while scraping the page', errors: error });
    }
});

app.post('/createUser', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await prisma.user.create({
            data: { name, email, password },
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});
app.get('/pricing', async (req, res) => {
    try {
        const Basic = await prisma.PlanPricing.findFirst(
            {
                where: {
                    name: 'Basic',
                    country: 'India',
                },
            }
        );
        const Professional = await prisma.PlanPricing.findFirst(
            {
                where: {
                    name: 'Professional',
                    country: 'India',
                },
            }
        );
        const Enterprise = await prisma.PlanPricing.findFirst(
            {
                where: {
                    name: 'Enterprise',
                    country: 'India',
                },
            }
        );
        res.json({ Basic: Basic.price, Professional: Professional.price, Enterprise: Enterprise.price });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post('/createPlan', async (req, res) => {
    try {
        const { name, price, currency, country } = req.body;
        const plan = await prisma.PlanPricing.create({
            data: { name, price, currency, country },
        });
        res.json(plan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post('/createReview', async (req, res) => {

    try {
        const { userName, userRole, imgUrl, message, rating } = req.body;
        const reviewData = await prisma.Rating.create({
            data: { userName, userRole, imgUrl, message, rating },
        });
        res.json(reviewData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get('/getReviews', async (req, res) => {
    try {
        const reviews = await prisma.Rating.findMany(
            {
                take: 2
            }
        );
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post('/contact', async (req, res) => {
    console.log(req.body);
    try {
        const { name, email, message } = req.body;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'seovew@gmail.com',
                pass: 'svlcamndafcwuplk'
            }
        });
        const mailOptions = {
            from: 'seovew@gmail.com',
            to: 'seovew@gmail.com',
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };
        await transporter.sendMail(mailOptions);
        res.json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.listen(process.env.PORT || 10000, () => {
    console.log(`Server is running on http://localhost:${port}`);
});