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
const test = [

    {
        "index": 1,
        "icon": "",
        "link": "",
        "title": "Meta Title Test",
        "desc": "Your webpage's meta title is an HTML tag that defines the title of your page. This tag displays your page title in search engine results, at the top of a user's browser, and also when your page is bookmarked in a list of favorites. A concise, descriptive title tag that accurately reflects your page's topic is important for ranking well in search engines."
    },
    {
        "index": 2,
        "icon": "",
        "link": "",
        "title": "Meta Description Test",
        "desc": "Your webpage's meta description is an HTML tag that is intended to provide a short and accurate summary of your page. Search engines use meta descriptions to help identify the a page's topic - they may also use meta descriptions by displaying them directly in search engine results. Accurate and inviting meta descriptions can help boost both your search engine rankings and a user's likelihood of clicking through to your page."
    },
    {
        "index": 3,
        "icon": "",
        "link": "",
        "title": "Google Search Results Preview Test",
        "desc": "Check how your page might appear in Google search results. Google search results typically uses your webpage title, url and meta-description in order to display relevant summarized information about your site. If these elements are too long, Google will truncate their content. Webpage title up to 70 characters in length, and webpage descriptions up to 160 characters in length are recommended in order to optimize readability."
    },
    {
        "index": 4,
        "icon": "",
        "link": "",
        "title": "Social Media Meta Tags Test",
        "desc": "This test will check if the analyzed webpage is using social media meta tags. While this type of meta tags don't affect what people see when they visit the webpage, they exist to provide information about it to search engines and social media platforms. Also, when a link is shared, both Facebook and Twitter will scrape the associated webpage and read its meta tags to display the appropriate information. Thus, social media meta tags will help to amplify your webpage's content."
    },
    {
        "index": 5,
        "icon": "",
        "link": "",
        "title": "Most Common Keywords Test",
        "desc": "Check the most common keywords in your page and their usage (number of times used). This can help give a quick overview of the keywords and topics that crawlers may associate with your web page."
    },
    {
        "index": 6,
        "icon": "",
        "link": "",
        "title": "Keywords Usage Test",
        "desc": "This will check if your most common keywords are used in the webpage's title and description."
    },
    {
        "index": 7,
        "icon": "",
        "link": "",
        "title": "Keywords Cloud Test",
        "desc": "The Keyword Cloud is a visual representation of keywords used on your website. This will show you which words are frequently used in the content of your webpage. Keywords having higher density are presented in larger fonts and displayed in alphabetic order."
    },
    {
        "index": 8,
        "icon": "",
        "link": "",
        "title": "Related Keywords Test",
        "desc": "Related keywords will show search terms for which this URL shows up in the top 20 organic results."
    },
    {
        "index": 9,
        "icon": "",
        "link": "",
        "title": "Competitor Domains Test",
        "desc": "This test will show up to 5 competitors that could rank in the same organic search results as the target domain. Competitor domains are sorted by Domain Authority Score, which is measuring the importance of the domain based on the volume and quality of links that are pointing to it. The score is on a scale from 0 to 100, with 100 meaning the domain is highly important and its links communicate a strong amount of popularity."
    },
    {
        "index": 10,
        "icon": "",
        "link": "",
        "title": "Heading Tags Test",
        "desc": "Check if your webpage is using any H1 and H2 HTML header tags. Header tags are not visible to users, but help clarify and support the overall theme or purpose of your page to search engines. The H1 tag represents the most important heading, e.g., the title of the page or blog post. The H2 tag represents the second most important headings on the webpages, e.g., the subheadings."
    },
    {
        "index": 11,
        "icon": "",
        "link": "",
        "title": "Robots.txt Test",
        "desc": "Check if your website is using a robots.txt file. When search engine robots crawl a website, they typically first access a site's robots.txt file. Robots.txt tells Googlebot and other crawlers what is and is not allowed to be crawled on your site."
    },
    {
        "index": 12,
        "icon": "",
        "link": "",
        "title": "Sitemap Test",
        "desc": "Check if the website has a sitemap. A sitemap is important as it lists all the web pages of the site and let search engine crawlers to crawl the website more intelligently. A sitemap also provides valuable metadata for each webpage."
    },
    {
        "index": 13,
        "icon": "",
        "link": "",
        "title": "SEO Friendly URL Test",
        "desc": "Check if your webpage URLs are SEO friendly. In order for links to be SEO friendly, they should contain keywords relevant to the page's topic, and contain no spaces, underscores or other characters. You should avoid the use of parameters when possible, as they make URLs less inviting for users to click or share. Google's suggestions for URL structure specify using hyphens or dashes (-) rather than underscores (_). Unlike underscores, Google treats hyphens as separators between words in a URL."
    },
    {
        "index": 14,
        "icon": "",
        "link": "",
        "title": "Image Alt Test",
        "desc": "Check if images on your webpage are using alt attributes. If an image cannot be displayed (e.g., due to broken image source, slow internet connection, etc), the alt attribute provides alternative information. Using relevant keywords and text in the alt attribute can help both users and search engines better interpret the subject of an image."
    },
    {
        "index": 15,
        "icon": "",
        "link": "",
        "title": "Responsive Image Test",
        "desc": "This test will check if all of your page's images are appropriately sized for your user's viewport. Ideally, your page should not serve images that are larger than the version that's rendered on the user's screen. Serving an image larger than the user's viewport results in scaling down the image, use of unnecessary bandwidth, and slower page load time."
    },
    {
        "index": 16,
        "icon": "",
        "link": "",
        "title": "Image Aspect Ratio Test",
        "desc": "This test will check if all images are displayed with a correct aspect ratio. If a rendered image has an aspect ratio that's significantly different from the aspect ratio in its source file (the natural aspect ratio), the rendered image may look distorted, possibly creating an unpleasant user experience."
    },
    {
        "index": 17,
        "icon": "",
        "link": "",
        "title": "Inline CSS Test",
        "desc": "Check your webpage HTML tags for inline CSS properties. Inline CSS property are added by using the style attribute within specific HTML tags. Inline CSS properties unnecessarily increase page size, and can be moved to an external CSS stylesheet. Removing inline CSS properties can improve page loading time and make site maintenance easier."
    },
    {
        "index": 18,
        "icon": "",
        "link": "",
        "title": "Deprecated HTML Tags Test",
        "desc": "Check if your webpage is using old, deprecated HTML tags. These tags will eventually lose browser support and your web pages may render incorrectly as browsers drop support for these tags."
    },
    {
        "index": 19,
        "icon": "",
        "link": "",
        "title": "Google Analytics Test",
        "desc": "Check if your website is connected with Google Analytics. Google Analytics is a popular, free website analysis tool that helps provide insights about your site's traffic and demographics."
    },
    {
        "index": 20,
        "icon": "",
        "link": "",
        "title": "Favicon Test",
        "desc": "Check if your site is using and correctly implementing a favicon. Favicons are small icons that appear in your browser's URL navigation bar. They are also saved next to your URL's title when your page is bookmarked. This helps brand your site and make it easy for users to navigate to your site among a list of bookmarks."
    },
    {
        "index": 21,
        "icon": "",
        "link": "",
        "title": "Backlinks Test",
        "desc": "Check to view the backlinks for your website. Backlinks are any links to your website from an external site. Relevant backlinks from authority sites are critical for higher search engine rankings. Our backlink checker also helps identify low-quality backlinks that can lead to search engine penalties for your website."
    },
    {
        "index": 22,
        "icon": "",
        "link": "",
        "title": "JS Error Test",
        "desc": "Check your page for JavaScript errors. These errors may prevent users from properly viewing your pages and impact their user experience. Sites with poor user experience tend to rank worse in search engine results."
    },
    {
        "index": 23,
        "icon": "",
        "link": "",
        "title": "Console Errors Test",
        "desc": "This will check the Chrome DevTools Console for warnings and errors. These errors may prevent users from properly viewing your pages and impact their user experience. Sites with poor user experience tend to rank worse in search engine results."
    },
    {
        "index": 24,
        "icon": "",
        "link": "",
        "title": "Charset Declaration Test",
        "desc": "This test will check if the webpage has a character encoding declaration ('charset'). If the server doesn't specify a character encoding format when it sends an HTML file, the browser may display some characters incorrectly to users. Google recommends using the Unicode/UTF-8 character set when possible."
    },
    {
        "index": 25,
        "icon": "",
        "link": "",
        "title": "Social Media Test",
        "desc": "Check if your page is connected to one or more of the popular social networks. Social signals are become increasingly important as ranking factors for search engines to validate a site's trustworthiness and authority."
    },
    {
        "index": 26,
        "icon": "",
        "link": "",
        "title": "HTML Page Size Test",
        "desc": "Check your page's HTML size. HTML size is the size of all the HTML code on your web page - this size does not include images, external JavaScript or CSS files."
    },
    {
        "index": 27,
        "icon": "",
        "link": "",
        "title": "DOM Size Test",
        "desc": "This test will check the size of the DOM tree. When a web page is loaded, the browser creates a Document Object Model (DOM) of the page. All the tags in the HTML document are called nodes and the sum of them is translated as the DOM size. A large DOM tree will likely increase memory usage, cause longer style calculations, and may produce slower layout rendering."
    },
    {
        "index": 28,
        "icon": "",
        "link": "",
        "title": "HTML Compression/GZIP Test",
        "desc": "Check if your website is using HTML compression. HTML compression plays an important role in improving website speed by finding similar strings within a text file and replacing them temporarily to reduce overall file size."
    },
    {
        "index": 29,
        "icon": "",
        "link": "",
        "title": "Site Loading Speed Test",
        "desc": "Check your website's loading speed. Page speed is an important factor in search engine rankings and overall site success. Pages that take longer than 5 seconds to load can lose up to 50% of users. Faster webpages result in higher traffic, better conversions, and increased sales over slower loading pages."
    },
    {
        "index": 30,
        "icon": "",
        "link": "",
        "title": "JS Execution Time Test",
        "desc": "This test will check the total execution time of the JavaScript code. Reducing the JavaScript execution time, in general, refers to decreasing the amount of time spent to parse, compile and execute the JavaScript code. Improving JavaScript execution time will result in faster page load times, and improved user experience (which Google uses as a factor in its ranking algorithms)."
    },
    {
        "index": 31,
        "icon": "",
        "link": "",
        "title": "Page Objects Test",
        "desc": "Check if all the objects requested by this webpage can be retrieved. If they are not retrievable, your page may display incorrectly, leading to a bad user experience and lower search engine rankings."
    },
    {
        "index": 32,
        "icon": "",
        "link": "",
        "title": "Page Cache Test (Server Side Caching)",
        "desc": "Check if your page is serving cached pages. A page cache saves dynamically generated pages and serves the pre-generated (cached) page to reduce server load and site loading time (by avoiding the re-loading and execution of PHP scripts). Common caching methods are ZenCache and WP Rocket."
    },
    {
        "index": 33,
        "icon": "",
        "link": "",
        "title": "Flash Test",
        "desc": "Check if your page uses Flash, an outdated technology that was typically used to deliver rich multimedia content. The web has evolved to replace Flash with open-standard technologies that additionally offered better performance and security. Flash content also does not work well on mobile devices, and is difficult to index by search engines."
    },
    {
        "index": 34,
        "icon": "",
        "link": "",
        "title": "CDN Usage Test",
        "desc": "Check if your webpage's resources (images, javascript and css files) are served via CDNs."
    },
    {
        "index": 35,
        "icon": "",
        "link": "",
        "title": "Modern Image Format Test",
        "desc": "This test will check if the webpage is serving images in modern formats. Image formats like JPEG 2000, JPEG XR, and WebP often provide better compression than PNG or JPEG, which means faster downloads and less data consumption for users."
    },
    {
        "index": 36,
        "icon": "",
        "link": "",
        "title": "Image Metadata Test",
        "desc": "This test will check if the images used in a webpage have large metadata (more than 16% of the image size). Image Metadata refers to additional information (thumbnails, comments, date-times, copyright, camera model and settings, geo location, etc) which is stored along with the image. Most of this information is useless to site visitors and isn't required by browsers to render images."
    },
    {
        "index": 37,
        "icon": "",
        "link": "",
        "title": "Image Caching Test",
        "desc": "Checks if your page is using an image expires tag, which specifies a future expiration date for your images. Browsers will see this tag and cache the image until the specified date (it doesn't re-fetch the unchanged image from your server). This speeds up your site the next time returning visitors arrive at your site and require the same image."
    },
    {
        "index": 38,
        "icon": "",
        "link": "",
        "title": "JavaScript Caching Test",
        "desc": "Checks if your page is using caching headers for all JavaScript resources. Users browsers will check for these headers and, if any, will cache the JavaScript resources until the specified date (so that it does not keep re-fetching the unchanged file from your server). This speeds up your site the next time returning visitors arrive at your site and require the same JavaScript resource."
    },
    {
        "index": 39,
        "icon": "",
        "link": "",
        "title": "CSS Caching Test",
        "desc": "Checks if your page is using caching headers for all CSS resources. Users browsers will check for these headers and, if any, will cache the CSS resources until the specified date (so that it does not keep re-fetching the unchanged file from your server). This speeds up your site the next time returning visitors arrive at your site and require the same CSS resource."
    },
    {
        "index": 40,
        "icon": "",
        "link": "",
        "title": "JavaScript Minification Test",
        "desc": "Checks if any external javascript files used in your page is minified. Minified files reduce page size and overall load time."
    },
    {
        "index": 41,
        "icon": "",
        "link": "",
        "title": "CSS Minification Test",
        "desc": "Checks if any CSS files used in your page is minified. Minified files reduce page size and overall load time."
    },
    {
        "index": 42,
        "icon": "",
        "link": "",
        "title": "Render Blocking Resources Test",
        "desc": "This test will check if any of the webpage's JavaScript or CSS resources is blocking the render process. When the browser encounters a render blocking resource, it stops downloading the rest of the resources until these critical files are processed. In the meantime, the entire rendering process is put on hold. Aim to reduce the impact of these render-blocking URLs by inlining critical resources, deferring non-critical resources, and removing anything unused. This can greatly improve page load times and the user experience (factors which Google uses in its ranking algorithms)."
    },
    {
        "index": 43,
        "icon": "",
        "link": "",
        "title": "Nested Tables Test",
        "desc": "Check if this site contains nested tables. A nested table is an HTML table containing another table inside it. Use of nested tables can slow down page rendering in the user's browser."
    },
    {
        "index": 44,
        "icon": "",
        "link": "",
        "title": "Frameset Test",
        "desc": "Check if your page is using frames, which divide your browser window into multiple sections where each section can load separate HTML documents. Frames create problems for both users (e.g., by creating unexepected behavior with printing functions or use of the back-button) and search engine robots (by complicating the crawling process). Avoid use of frames when possible."
    },
    {
        "index": 45,
        "icon": "",
        "link": "",
        "title": "Doctype Test",
        "desc": "Check for doctype declaration. A document type declaration, or DOCTYPE, defines which version of (X)HTML your webpage is using. Proper doctype declaration assists with proper page rendering and functioning of web documents in compliant browsers."
    },
    {
        "index": 46,
        "icon": "",
        "link": "",
        "title": "URL Redirects Test",
        "desc": "Check how many redirects your URL will perform to resolve to the final destination URL. Redirects often cause search engine indexing issues and can also lead to some minor loading delays. Google recommends removing or keeping redirects to a minimum."
    },
    {
        "index": 47,
        "icon": "",
        "link": "",
        "title": "Time To First Byte Test",
        "desc": "This test will check the Time To First Byte (TTFB) score of the analyzed webpage. TTFB is a metric that measures the time between the request for a resource and when the first byte of a response begins to arrive. To provide a good user experience, Google recommends that sites should strive to have Time To First Byte of 0.8 seconds or less."
    },
    {
        "index": 48,
        "icon": "",
        "link": "",
        "title": "First Contentful Paint Test",
        "desc": "This test will check the First Contentful Paint (FCP) score of the analyzed webpage. FCP is a metric that measures the time from when the page starts loading to when any part of the page's content is rendered on the screen. To provide a good user experience, Google recommends that sites should strive to have a First Contentful Paint of 1.8 seconds or less."
    },
    {
        "index": 49,
        "icon": "",
        "link": "",
        "title": "Largest Contentful Paint Test",
        "desc": "This test will check the Largest Contentful Paint (LCP) score of the analyzed webpage. LCP is a Core Web Vitals metric that measures when the largest element (image or text block) of a given web page becomes visible within the viewport, relative to when the page first started loading. To provide a good user experience, Google recommends that sites should strive to have Largest Contentful Paint of 2.5 seconds or less."
    },
    {
        "index": 50,
        "icon": "",
        "link": "",
        "title": "Cumulative Layout Shift Test",
        "desc": "This test will check the Cumulative Layout Shift (CLS) score of the analyzed webpage. CLS is a Core Web Vitals metric calculated by summing all layout shifts that aren't caused by user interaction. Basically, whenever a page loads, certain page elements unexpectedly shift, affecting the way users interact with the webpage. A website with a low CLS has a stable page display, which does not shift elements around and ensures a steady, predictable loading of all website content. To provide a good user experience, Google recommends that sites should strive to have a CLS score of 0.1 or less."
    },
    {
        "index": 51,
        "icon": "",
        "link": "",
        "title": "URL Canonicalization Test",
        "desc": "Test your site for potential URL canonicalization issues. Canonicalization describes how a site can use slightly different URLs for the same page (e.g., if http://www.example.com and http://example.com displays the same page but do not resolve to the same URL). If this happens, search engines may be unsure about which URL is the correct one to index. Learn more about canonicalization issues."
    },
    {
        "index": 52,
        "icon": "",
        "link": "",
        "title": "SSL Checker and HTTPS Test",
        "desc": "Check if your website is using HTTPS, a secure protocol for sending/receiving data over the Internet. Using HTTPS indicates that an additional encryption/authentication layer was added between client and server. HTTPS should be used by any site that collects sensitive customer data such as credit card information. Even for sites that do not collect such data, switching to https helps users by improving privacy and overall security. Google is increasingly using https as a positive ranking factor."
    },
    {
        "index": 53,
        "icon": "",
        "link": "",
        "title": "Mixed Content Test (HTTP over HTTPS)",
        "desc": "This will check if all resources are loaded over a secure HTTPS connection. Mixed content occurs when initial HTML is loaded over a secure HTTPS connection, but other resources (such as images, videos, stylesheets, scripts) are loaded over an insecure HTTP connection. This is called mixed content because both HTTP and HTTPS content are being loaded to display the same page, and the initial request was secure over HTTPS. Browsers may block mixed content, so fixing this issue helps ensure your content loads as intended."
    },
    {
        "index": 54,
        "icon": "",
        "link": "",
        "title": "HTTP2 Test",
        "desc": "Checks if the webpage and all resources are served over HTTP/2. As the first major HTTP protocol update since 1997, HTTP/2 offers several key improvements such as increased speed and security."
    },
    {
        "index": 55,
        "icon": "",
        "link": "",
        "title": "HSTS Test",
        "desc": "This test will check if your webpage is using the Strict-Transport-Security header."
    },
    {
        "index": 56,
        "icon": "",
        "link": "",
        "title": "Safe Browsing Test",
        "desc": "Check if your website is identified as having malware or exhibiting phishing activity by Google's safe browsing API. Any site containing malware or suspicious for phising activity is seen as a threat to the online community and is often penalized by search engines. This test checks your website for such threats."
    },
    {
        "index": 57,
        "icon": "",
        "link": "",
        "title": "Server Signature Test",
        "desc": "Check if your server's signature is ON. A server signature is the public identity of your web server and contains sensitive information that could be used to exploit any known vulnerability. Turning your server signature OFF is considered a good security practice to avoid disclosure of what software versions you are running."
    },
    {
        "index": 58,
        "icon": "",
        "link": "",
        "title": "Directory Browsing Test",
        "desc": "Check if your server allows directory browsing. If directory browsing is disabled, visitors will not be able to browse your directory by accessing the directory directly (if there is no index.html file). This will protect your files from being exposed to the public. Apache web server allows directory browsing by default. Disabling directory browsing is generally a good idea from a security standpoint."
    },
    {
        "index": 59,
        "icon": "",
        "link": "",
        "title": "Plaintext Emails Test",
        "desc": "Check your webpage for plaintext email addresses. Any e-mail address posted in public is likely to be automatically collected by computer software used by bulk emailers (a process known as e-mail address harvesting). A spam harvester can read through the pages in your site and extract plaintext email addresses which are then added to bulk marketing databases (resulting in more inbox spam). There are several methods for email obfuscation."
    },
    {
        "index": 60,
        "icon": "",
        "link": "",
        "title": "Unsafe Cross-Origin Links Test",
        "desc": "This test will check if all links to external pages that have the target='_blank' attribute also have the rel='noopener' or rel='noreferrer' attribute. When you link to an external site using the target='_blank' attribute, security and performance issues arise: The external pages you link to may run on the same process as your page. If the other page is running a lot of JavaScript, your page's performance may suffer. The other page can access your window object with the window.opener property. This may allow the other page to redirect your page to a malicious URL. Adding rel='noopener' or rel='noreferrer' to your target='_blank' links avoids these issues."
    },
    {
        "index": 61,
        "icon": "",
        "link": "",
        "title": "Meta Viewport Test",
        "desc": "This will check if the webpage is using a viewport meta tag, which is necessary for responsive web design. Without a viewport meta tag, mobile devices render pages at typical desktop screen widths and then scale the pages down, making them difficult to read. Setting the viewport meta tag lets you control the width and scaling of the viewport so that it's sized correctly on all devices."
    },
    {
        "index": 62,
        "icon": "",
        "link": "",
        "title": "Media Query Responsive Test",
        "desc": "Check if your page implements responsive design functionalities using the media query technique. The '@media' rule allows different style rules for screen sizes. Media query techniques allow different presentation and content to be served depending on the output device, helping ensure that your website renders optimally on all devices and platforms."
    },
    {
        "index": 63,
        "icon": "",
        "link": "",
        "title": "Mobile Snapshot Test",
        "desc": "Check how your website renders on a mobile device."
    },
    {
        "index": 64,
        "icon": "",
        "link": "",
        "title": "Structured Data Test",
        "desc": "Check if your webpage is using structured data markup. Search engines use structured data to better understand the content of your webpage and to create rich snippets in search results (which helps increase click-through rate to your site)."
    },
    {
        "index": 65,
        "icon": "",
        "link": "",
        "title": "Custom 404 Error Page Test",
        "desc": "This SEO test will check if your website is using a custom 404 error page. By creating a custom 404 error page, you can improve your website's user experience by letting users know that only a specific page is missing/broken (and not your entire site), providing them helpful links, the opportunity to report bugs, and potentially track the source of broken links in your site."
    },
    {
        "index": 66,
        "icon": "",
        "link": "",
        "title": "Noindex Tag Test",
        "desc": "Check if your webpage is using the robots meta tag or the X-Robots-Tag HTTP header to instruct search engines not to show your site in search results pages."
    },
    {
        "index": 67,
        "icon": "",
        "link": "",
        "title": "Canonical Tag Test",
        "desc": "Check if your webpage is using the canonical link tag. The canonical link tag is used to nominate a primary page when you have several pages with duplicate or very similar content."
    },
    {
        "index": 68,
        "icon": "",
        "link": "",
        "title": "Nofollow Tag Test",
        "desc": "Check if your webpage is using the robots meta tag or the X-Robots-Tag HTTP header to instruct search engines not to follow the links on your page. Outgoing links marked with this tag will tell search engines not to follow or crawl that particular link. Google recommends that nofollow tags are used for paid advertisements on your site and links to pages that have not been vetted as trusted sites (e.g., links posted by users of your site)."
    },
    {
        "index": 69,
        "icon": "",
        "link": "",
        "title": "Disallow Directive Test",
        "desc": "Check if your robots.txt file is instructing search engine crawlers to avoid parts of your website. The disallow directive is used in robots.txt to tell search engines not to crawl and index a file, page, or directory."
    },
    {
        "index": 70,
        "icon": "",
        "link": "",
        "title": "Meta Refresh Test",
        "desc": "This test will check if your webpage is using a refresh meta tag. This tag causes a web page to refresh automatically after a specified amount of time. Users generally don't expect automatic refreshes, so they can be disorienting. Refreshing also moves focus to the top of the page, which may frustrate or confuse users, particularly those who rely on screen readers or other assistive technologies."
    },
    {
        "index": 71,
        "icon": "",
        "link": "",
        "title": "SPF Records Test",
        "desc": "Check if your DNS records contains an SPF record. SPF (Sender Policy Framework) records allow email systems to verify if a given mail server has been authorized to send mail on behalf of your domain. Creating an SPF record increases email delivery rates by reducing the likelihood of your email being marked as spam."
    },
    {
        "index": 72,
        "icon": "",
        "link": "",
        "title": "Ads.txt Validation Test",
        "desc": "This test will check if your website's ads.txt file has a valid format."
    },
    {
        "index": 73,
        "icon": "",
        "link": "",
        "title": "Spell Check Test",
        "desc": "This test will check your webpage for misspelled words. This check is currently available only for webpages in English."
    }


];

interface LighthouseAudit {
    title: string;
}

interface LighthouseResult {
    audits: {
        title?: LighthouseAudit;
    };
}

interface PSIResponse {
    lighthouseResult?: LighthouseResult;
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
async function YourComponent() {
    const searchParams = useSearchParams();
    const [url, seturl] = useState<string | null>(null);
    useEffect(() => {
        let url = searchParams.get("url");
        seturl(url)
    });



    const [psiData, setPsiData] = useState({
        "captchaResult": "CAPTCHA_NOT_NEEDED",
        "kind": "pagespeedonline#result",
        "id": "https://harshit-delta.vercel.app/",
        "loadingExperience": {
        "initial_url": "https://harshit-delta.vercel.app/"
        },
        "lighthouseResult": {
        "requestedUrl": "https://harshit-delta.vercel.app/",
        "finalUrl": "https://harshit-delta.vercel.app/",
        "mainDocumentUrl": "https://harshit-delta.vercel.app/",
        "finalDisplayedUrl": "https://harshit-delta.vercel.app/",
        "lighthouseVersion": "12.0.0",
        "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/125.0.6422.66 Safari/537.36",
        "fetchTime": "2024-06-06T05:40:04.435Z",
        "environment": {
        "networkUserAgent": "Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36",
        "hostUserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/125.0.6422.66 Safari/537.36",
        "benchmarkIndex": 416.5,
        "credits": {
        "axe-core": "4.9.0"
        }
        },
        "runWarnings": [],
        "configSettings": {
        "emulatedFormFactor": "mobile",
        "formFactor": "mobile",
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
        "link-in-text-block": {
        "id": "link-in-text-block",
        "title": "Links are distinguishable without relying on color.",
        "description": "Low-contrast text is difficult or impossible for many users to read. Link text that is discernible improves the experience for users with low vision. [Learn how to make links distinguishable](https://dequeuniversity.com/rules/axe/4.9/link-in-text-block).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
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
        "valueType": "node",
        "subItemsHeading": {
        "key": "relatedNode",
        "valueType": "node"
        },
        "label": "Failing Elements",
        "key": "node"
        }
        ],
        "items": [
        {
        "node": {
        "nodeLabel": "body.bg-black > nav.sticky > div.flex > a.z-50",
        "lhId": "1-0-A",
        "type": "node",
        "snippet": "<a class=\"z-50\" href=\"/\">",
        "boundingRect": {
        "top": 24,
        "right": 52,
        "left": 20,
        "bottom": 64,
        "width": 32,
        "height": 40
        },
        "path": "1,HTML,1,BODY,0,NAV,0,DIV,0,A",
        "selector": "body.bg-black > nav.sticky > div.flex > a.z-50",
        "explanation": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute"
        }
        }
        ],
        "debugData": {
        "impact": "serious",
        "type": "debugdata",
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
        "tabindex": {
        "id": "tabindex",
        "title": "No element has a `[tabindex]` value greater than 0",
        "description": "A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more about the `tabindex` attribute](https://dequeuniversity.com/rules/axe/4.9/tabindex).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "items": [],
        "headings": [],
        "type": "table"
        }
        },
        "server-response-time": {
        "id": "server-response-time",
        "title": "Initial server response time was short",
        "description": "Keep the server response time for the main document short because all other requests depend on it. [Learn more about the Time to First Byte metric](https://developer.chrome.com/docs/lighthouse/performance/time-to-first-byte/).",
        "score": 1,
        "scoreDisplayMode": "informative",
        "displayValue": "Root document took 270 ms",
        "details": {
        "items": [
        {
        "responseTime": 273,
        "url": "https://harshit-delta.vercel.app/"
        }
        ],
        "type": "opportunity",
        "headings": [
        {
        "valueType": "url",
        "label": "URL",
        "key": "url"
        },
        {
        "key": "responseTime",
        "valueType": "timespanMs",
        "label": "Time Spent"
        }
        ],
        "overallSavingsMs": 173
        },
        "numericValue": 273,
        "numericUnit": "millisecond"
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
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "button-name": {
        "id": "button-name",
        "title": "Buttons have an accessible name",
        "description": "When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn how to make buttons more accessible](https://dequeuniversity.com/rules/axe/4.9/button-name).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "headings": [],
        "items": [],
        "type": "table"
        }
        },
        "network-rtt": {
        "id": "network-rtt",
        "title": "Network Round Trip Times",
        "description": "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more about the Round Trip Time](https://hpbn.co/primer-on-latency-and-bandwidth/).",
        "score": 1,
        "scoreDisplayMode": "informative",
        "displayValue": "0 ms",
        "details": {
        "type": "table",
        "sortedBy": [
        "rtt"
        ],
        "headings": [
        {
        "key": "origin",
        "label": "URL",
        "valueType": "text"
        },
        {
        "valueType": "ms",
        "label": "Time Spent",
        "granularity": 1,
        "key": "rtt"
        }
        ],
        "items": [
        {
        "origin": "https://harshit-delta.vercel.app",
        "rtt": 2.459572499999997
        }
        ]
        },
        "numericValue": 2.459572499999997,
        "numericUnit": "millisecond"
        },
        "aria-prohibited-attr": {
        "id": "aria-prohibited-attr",
        "title": "Elements use only permitted ARIA attributes",
        "description": "Using ARIA attributes in roles where they are prohibited can mean that important information is not communicated to users of assistive technologies. [Learn more about prohibited ARIA roles](https://dequeuniversity.com/rules/axe/4.9/aria-prohibited-attr).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "headings": [],
        "items": [],
        "type": "table"
        }
        },
        "html-xml-lang-mismatch": {
        "id": "html-xml-lang-mismatch",
        "title": "`<html>` element has an `[xml:lang]` attribute with the same base language as the `[lang]` attribute.",
        "description": "If the webpage does not specify a consistent language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.9/html-xml-lang-mismatch).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "canonical": {
        "id": "canonical",
        "title": "Document has a valid `rel=canonical`",
        "description": "Canonical links suggest which URL to show in search results. [Learn more about canonical links](https://developer.chrome.com/docs/lighthouse/seo/canonical/).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "meta-viewport": {
        "id": "meta-viewport",
        "title": "`[user-scalable=\"no\"]` is not used in the `<meta name=\"viewport\">` element and the `[maximum-scale]` attribute is not less than 5.",
        "description": "Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more about the viewport meta tag](https://dequeuniversity.com/rules/axe/4.9/meta-viewport).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "items": [],
        "headings": [],
        "type": "table"
        }
        },
        "uses-rel-preconnect": {
        "id": "uses-rel-preconnect",
        "title": "Preconnect to required origins",
        "description": "Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn how to preconnect to required origins](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
        "sortedBy": [
        "wastedMs"
        ],
        "overallSavingsMs": 0,
        "items": [],
        "type": "opportunity",
        "headings": []
        },
        "warnings": [],
        "numericValue": 0,
        "numericUnit": "millisecond"
        },
        "is-crawlable": {
        "id": "is-crawlable",
        "title": "Page isn’t blocked from indexing",
        "description": "Search engines are unable to include your pages in search results if they don't have permission to crawl them. [Learn more about crawler directives](https://developer.chrome.com/docs/lighthouse/seo/is-crawlable/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "items": [],
        "type": "table",
        "headings": []
        },
        "warnings": []
        },
        "non-composited-animations": {
        "id": "non-composited-animations",
        "title": "Avoid non-composited animations",
        "description": "Animations which are not composited can be janky and increase CLS. [Learn how to avoid non-composited animations](https://developer.chrome.com/docs/lighthouse/performance/non-composited-animations/)",
        "score": null,
        "scoreDisplayMode": "notApplicable",
        "details": {
        "items": [],
        "headings": [],
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
        "headings": [],
        "type": "table",
        "items": []
        }
        },
        "uses-passive-event-listeners": {
        "id": "uses-passive-event-listeners",
        "title": "Uses passive listeners to improve scrolling performance",
        "description": "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more about adopting passive event listeners](https://developer.chrome.com/docs/lighthouse/best-practices/uses-passive-event-listeners/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
        "headings": [],
        "items": [],
        "type": "table"
        }
        },
        "charset": {
        "id": "charset",
        "title": "Properly defines charset",
        "description": "A character encoding declaration is required. It can be done with a `<meta>` tag in the first 1024 bytes of the HTML or in the Content-Type HTTP response header. [Learn more about declaring the character encoding](https://developer.chrome.com/docs/lighthouse/best-practices/charset/).",
        "score": 1,
        "scoreDisplayMode": "binary"
        },
        "lcp-lazy-loaded": {
        "id": "lcp-lazy-loaded",
        "title": "Largest Contentful Paint image was not lazily loaded",
        "description": "Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint. [Learn more about optimal lazy loading](https://web.dev/articles/lcp-lazy-loading).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
        "items": [
        {
        "node": {
        "type": "node",
        "snippet": "<img alt=\"\" aria-label=\"Harshit's Avatar\" fetchpriority=\"high\" width=\"480\" height=\"480\" decoding=\"async\" data-nimg=\"1\" class=\"w-[280px] h-[280px] md:w-[330px] md:h-[330px] lg:w-[480px] lg:h-[480px] ab…\" style=\"color: transparent; opacity: 1; transform: none;\" srcset=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fav1.730fe5ec.png&amp;w=640&amp;q=75 1…\" src=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fav1.730fe5ec.png&amp;w=1080&amp;q=75\">",
        "boundingRect": {
        "width": 280,
        "left": 66,
        "right": 346,
        "bottom": 408,
        "height": 280,
        "top": 128
        },
        "selector": "div.relative > div.avator > div.relative > img.w-[280px]",
        "nodeLabel": "Harshit's Avatar",
        "path": "1,HTML,1,BODY,2,DIV,1,SECTION,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,IMG",
        "lhId": "1-32-IMG"
        }
        }
        ],
        "headings": [
        {
        "key": "node",
        "valueType": "node",
        "label": "Element"
        }
        ],
        "type": "table"
        }
        },
        "efficient-animated-content": {
        "id": "efficient-animated-content",
        "title": "Use video formats for animated content",
        "description": "Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more about efficient video formats](https://developer.chrome.com/docs/lighthouse/performance/efficient-animated-content/)",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
        "debugData": {
        "type": "debugdata",
        "metricSavings": {
        "FCP": 0,
        "LCP": 0
        }
        },
        "headings": [],
        "overallSavingsBytes": 0,
        "type": "opportunity",
        "sortedBy": [
        "wastedBytes"
        ],
        "items": [],
        "overallSavingsMs": 0
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
        },
        "uses-long-cache-ttl": {
        "id": "uses-long-cache-ttl",
        "title": "Uses efficient cache policy on static assets",
        "description": "A long cache lifetime can speed up repeat visits to your page. [Learn more about efficient cache policies](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "0 resources found",
        "details": {
        "headings": [],
        "type": "table",
        "items": []
        },
        "numericValue": 0,
        "numericUnit": "byte"
        },
        "html-has-lang": {
        "id": "html-has-lang",
        "title": "`<html>` element has a `[lang]` attribute",
        "description": "If a page doesn't specify a `lang` attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more about the `lang` attribute](https://dequeuniversity.com/rules/axe/4.9/html-has-lang).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "type": "table",
        "items": [],
        "headings": []
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
        "headings": [],
        "type": "table"
        }
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
        "list": {
        "id": "list",
        "title": "Lists contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).",
        "description": "Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.9/list).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "headings": [],
        "items": [],
        "type": "table"
        }
        },
        "listitem": {
        "id": "listitem",
        "title": "List items (`<li>`) are contained within `<ul>`, `<ol>` or `<menu>` parent elements",
        "description": "Screen readers require list items (`<li>`) to be contained within a parent `<ul>`, `<ol>` or `<menu>` to be announced properly. [Learn more about proper list structure](https://dequeuniversity.com/rules/axe/4.9/listitem).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "items": [],
        "headings": [],
        "type": "table"
        }
        },
        "csp-xss": {
        "id": "csp-xss",
        "title": "Ensure CSP is effective against XSS attacks",
        "description": "A strong Content Security Policy (CSP) significantly reduces the risk of cross-site scripting (XSS) attacks. [Learn how to use a CSP to prevent XSS](https://developer.chrome.com/docs/lighthouse/best-practices/csp-xss/)",
        "score": 1,
        "scoreDisplayMode": "informative",
        "details": {
        "items": [
        {
        "description": "No CSP found in enforcement mode",
        "severity": "High"
        }
        ],
        "type": "table",
        "headings": [
        {
        "key": "description",
        "label": "Description",
        "valueType": "text",
        "subItemsHeading": {
        "key": "description"
        }
        },
        {
        "subItemsHeading": {
        "key": "directive"
        },
        "key": "directive",
        "valueType": "code",
        "label": "Directive"
        },
        {
        "valueType": "text",
        "subItemsHeading": {
        "key": "severity"
        },
        "key": "severity",
        "label": "Severity"
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
        "interactive-element-affordance": {
        "id": "interactive-element-affordance",
        "title": "Interactive elements indicate their purpose and state",
        "description": "Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn how to decorate interactive elements with affordance hints](https://developer.chrome.com/docs/lighthouse/accessibility/interactive-element-affordance/).",
        "score": null,
        "scoreDisplayMode": "manual"
        },
        "skip-link": {
        "id": "skip-link",
        "title": "Skip links are not focusable.",
        "description": "Including a skip link can help users skip to the main content to save time. [Learn more about skip links](https://dequeuniversity.com/rules/axe/4.9/skip-link).",
        "score": 0,
        "scoreDisplayMode": "binary",
        "details": {
        "debugData": {
        "type": "debugdata",
        "impact": "moderate",
        "tags": [
        "cat.keyboard",
        "best-practice"
        ]
        },
        "items": [
        {
        "node": {
        "snippet": "<a class=\"flex-1 py-4 safe-x-padding\" href=\"/#project\">",
        "boundingRect": {
        "top": -641,
        "width": 380,
        "height": 68,
        "left": 16,
        "bottom": -573,
        "right": 396
        },
        "lhId": "1-1-A",
        "path": "1,HTML,1,BODY,1,DIV,0,DIV,0,UL,1,LI,0,A",
        "type": "node",
        "nodeLabel": "Project",
        "selector": "div.flex > ul.w-full > li.flex > a.flex-1",
        "explanation": "Fix any of the following:\n  No skip link target"
        }
        }
        ],
        "type": "table",
        "headings": [
        {
        "key": "node",
        "subItemsHeading": {
        "key": "relatedNode",
        "valueType": "node"
        },
        "label": "Failing Elements",
        "valueType": "node"
        }
        ]
        }
        },
        "table-fake-caption": {
        "id": "table-fake-caption",
        "title": "Tables use `<caption>` instead of cells with the `[colspan]` attribute to indicate a caption.",
        "description": "Screen readers have features to make navigating tables easier. Ensuring that tables use the actual caption element instead of cells with the `[colspan]` attribute may improve the experience for screen reader users. [Learn more about captions](https://dequeuniversity.com/rules/axe/4.9/table-fake-caption).",
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
        "items": [],
        "type": "table",
        "headings": []
        }
        },
        "unused-css-rules": {
        "id": "unused-css-rules",
        "title": "Reduce unused CSS",
        "description": "Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn how to reduce unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/).",
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
        "headings": [],
        "overallSavingsMs": 0,
        "type": "opportunity",
        "overallSavingsBytes": 0,
        "sortedBy": [
        "wastedBytes"
        ]
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
        },
        "cumulative-layout-shift": {
        "id": "cumulative-layout-shift",
        "title": "Cumulative Layout Shift",
        "description": "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/articles/cls).",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "displayValue": "0",
        "details": {
        "type": "debugdata",
        "items": [
        {
        "newEngineResultDiffered": false,
        "newEngineResult": {
        "cumulativeLayoutShift": 0,
        "cumulativeLayoutShiftMainFrame": 0
        },
        "cumulativeLayoutShiftMainFrame": 0
        }
        ]
        },
        "numericValue": 0,
        "numericUnit": "unitless"
        },
        "duplicate-id-aria": {
        "id": "duplicate-id-aria",
        "title": "ARIA IDs are unique",
        "description": "The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn how to fix duplicate ARIA IDs](https://dequeuniversity.com/rules/axe/4.9/duplicate-id-aria).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "aria-required-children": {
        "id": "aria-required-children",
        "title": "Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children.",
        "description": "Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more about roles and required children elements](https://dequeuniversity.com/rules/axe/4.9/aria-required-children).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
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
        "largest-contentful-paint-element": {
        "id": "largest-contentful-paint-element",
        "title": "Largest Contentful Paint element",
        "description": "This is the largest contentful element painted within the viewport. [Learn more about the Largest Contentful Paint element](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
        "score": 0,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "5,330 ms",
        "details": {
        "type": "list",
        "items": [
        {
        "items": [
        {
        "node": {
        "type": "node",
        "boundingRect": {
        "width": 280,
        "right": 346,
        "left": 66,
        "top": 128,
        "bottom": 408,
        "height": 280
        },
        "selector": "div.relative > div.avator > div.relative > img.w-[280px]",
        "path": "1,HTML,1,BODY,2,DIV,1,SECTION,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,IMG",
        "lhId": "page-0-IMG",
        "snippet": "<img alt=\"\" aria-label=\"Harshit's Avatar\" fetchpriority=\"high\" width=\"480\" height=\"480\" decoding=\"async\" data-nimg=\"1\" class=\"w-[280px] h-[280px] md:w-[330px] md:h-[330px] lg:w-[480px] lg:h-[480px] ab…\" style=\"color: transparent; opacity: 1; transform: none;\" srcset=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fav1.730fe5ec.png&amp;w=640&amp;q=75 1…\" src=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fav1.730fe5ec.png&amp;w=1080&amp;q=75\">",
        "nodeLabel": "Harshit's Avatar"
        }
        }
        ],
        "type": "table",
        "headings": [
        {
        "valueType": "node",
        "label": "Element",
        "key": "node"
        }
        ]
        },
        {
        "headings": [
        {
        "valueType": "text",
        "key": "phase",
        "label": "Phase"
        },
        {
        "valueType": "text",
        "label": "% of LCP",
        "key": "percent"
        },
        {
        "valueType": "ms",
        "label": "Timing",
        "key": "timing"
        }
        ],
        "type": "table",
        "items": [
        {
        "phase": "TTFB",
        "timing": 601,
        "percent": "11%"
        },
        {
        "phase": "Load Delay",
        "timing": 450.06513898150047,
        "percent": "8%"
        },
        {
        "timing": 803.4099639335568,
        "phase": "Load Time",
        "percent": "15%"
        },
        {
        "phase": "Render Delay",
        "percent": "65%",
        "timing": 3477.5248970849425
        }
        ]
        }
        ]
        }
        },
        "aria-toggle-field-name": {
        "id": "aria-toggle-field-name",
        "title": "ARIA toggle fields have accessible names",
        "description": "When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about toggle fields](https://dequeuniversity.com/rules/axe/4.9/aria-toggle-field-name).",
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
        "unminified-javascript": {
        "id": "unminified-javascript",
        "title": "Minify JavaScript",
        "description": "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn how to minify JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
        "overallSavingsMs": 0,
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
        "items": [],
        "type": "opportunity",
        "overallSavingsBytes": 0,
        "headings": []
        },
        "warnings": [],
        "numericValue": 0,
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
        "prioritize-lcp-image": {
        "id": "prioritize-lcp-image",
        "title": "Preload Largest Contentful Paint image",
        "description": "If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP. [Learn more about preloading LCP elements](https://web.dev/articles/optimize-lcp#optimize_when_the_resource_is_discovered).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
        "type": "opportunity",
        "sortedBy": [
        "wastedMs"
        ],
        "overallSavingsMs": 0,
        "headings": [],
        "items": [],
        "debugData": {
        "type": "debugdata",
        "pathLength": 2,
        "initiatorPath": [
        {
        "initiatorType": "parser",
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fav1.730fe5ec.png&w=1080&q=75"
        },
        {
        "initiatorType": "other",
        "url": "https://harshit-delta.vercel.app/"
        }
        ]
        }
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
        },
        "aria-dialog-name": {
        "id": "aria-dialog-name",
        "title": "Elements with `role=\"dialog\"` or `role=\"alertdialog\"` have accessible names.",
        "description": "ARIA dialog elements without accessible names may prevent screen readers users from discerning the purpose of these elements. [Learn how to make ARIA dialog elements more accessible](https://dequeuniversity.com/rules/axe/4.9/aria-dialog-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
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
        "aria-valid-attr": {
        "id": "aria-valid-attr",
        "title": "`[aria-*]` attributes are valid and not misspelled",
        "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more about valid ARIA attributes](https://dequeuniversity.com/rules/axe/4.9/aria-valid-attr).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "type": "table",
        "items": [],
        "headings": []
        }
        },
        "video-caption": {
        "id": "video-caption",
        "title": "`<video>` elements contain a `<track>` element with `[kind=\"captions\"]`",
        "description": "When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more about video captions](https://dequeuniversity.com/rules/axe/4.9/video-caption).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "target-size": {
        "id": "target-size",
        "title": "Touch targets have sufficient size and spacing.",
        "description": "Touch targets with sufficient size and spacing help users who may have difficulty targeting small controls to activate the targets. [Learn more about touch targets](https://dequeuniversity.com/rules/axe/4.9/target-size).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "headings": [],
        "items": [],
        "type": "table"
        }
        },
        "html-lang-valid": {
        "id": "html-lang-valid",
        "title": "`<html>` element has a valid value for its `[lang]` attribute",
        "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.9/html-lang-valid).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "type": "table",
        "headings": [],
        "items": []
        }
        },
        "aria-hidden-focus": {
        "id": "aria-hidden-focus",
        "title": "`[aria-hidden=\"true\"]` elements do not contain focusable descendents",
        "description": "Focusable descendents within an `[aria-hidden=\"true\"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers. [Learn how `aria-hidden` affects focusable elements](https://dequeuniversity.com/rules/axe/4.9/aria-hidden-focus).",
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
        "viewportContent": "width=device-width, initial-scale=1"
        },
        "warnings": []
        },
        "label": {
        "id": "label",
        "title": "Form elements have associated labels",
        "description": "Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more about form element labels](https://dequeuniversity.com/rules/axe/4.9/label).",
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
        "unminified-css": {
        "id": "unminified-css",
        "title": "Minify CSS",
        "description": "Minifying CSS files can reduce network payload sizes. [Learn how to minify CSS](https://developer.chrome.com/docs/lighthouse/performance/unminified-css/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
        "headings": [],
        "overallSavingsBytes": 0,
        "type": "opportunity",
        "debugData": {
        "type": "debugdata",
        "metricSavings": {
        "FCP": 0,
        "LCP": 0
        }
        },
        "overallSavingsMs": 0,
        "items": [],
        "sortedBy": [
        "wastedBytes"
        ]
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
        },
        "custom-controls-labels": {
        "id": "custom-controls-labels",
        "title": "Custom controls have associated labels",
        "description": "Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more about custom controls and labels](https://developer.chrome.com/docs/lighthouse/accessibility/custom-controls-labels/).",
        "score": null,
        "scoreDisplayMode": "manual"
        },
        "aria-treeitem-name": {
        "id": "aria-treeitem-name",
        "title": "ARIA `treeitem` elements have accessible names",
        "description": "When a `treeitem` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about labeling `treeitem` elements](https://dequeuniversity.com/rules/axe/4.9/aria-treeitem-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "unused-javascript": {
        "id": "unused-javascript",
        "title": "Reduce unused JavaScript",
        "description": "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
        "score": 0,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "Potential savings of 61 KiB",
        "details": {
        "type": "opportunity",
        "headings": [
        {
        "key": "url",
        "subItemsHeading": {
        "valueType": "code",
        "key": "source"
        },
        "label": "URL",
        "valueType": "url"
        },
        {
        "subItemsHeading": {
        "key": "sourceBytes"
        },
        "valueType": "bytes",
        "key": "totalBytes",
        "label": "Transfer Size"
        },
        {
        "subItemsHeading": {
        "key": "sourceWastedBytes"
        },
        "key": "wastedBytes",
        "valueType": "bytes",
        "label": "Potential Savings"
        }
        ],
        "overallSavingsBytes": 62392,
        "sortedBy": [
        "wastedBytes"
        ],
        "overallSavingsMs": 300,
        "items": [
        {
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/05ee798f-b55416c10899a977.js",
        "wastedBytes": 62392,
        "wastedPercent": 47.735081249778624,
        "totalBytes": 130705
        }
        ],
        "debugData": {
        "type": "debugdata",
        "metricSavings": {
        "FCP": 0,
        "LCP": 300
        }
        }
        },
        "numericValue": 300,
        "numericUnit": "millisecond"
        },
        "speed-index": {
        "id": "speed-index",
        "title": "Speed Index",
        "description": "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
        "score": 0.9,
        "scoreDisplayMode": "numeric",
        "displayValue": "3.4 s",
        "numericValue": 3376.4183793280927,
        "numericUnit": "millisecond"
        },
        "largest-contentful-paint": {
        "id": "largest-contentful-paint",
        "title": "Largest Contentful Paint",
        "description": "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
        "score": 0.21,
        "scoreDisplayMode": "numeric",
        "displayValue": "5.3 s",
        "numericValue": 5332,
        "numericUnit": "millisecond"
        },
        "render-blocking-resources": {
        "id": "render-blocking-resources",
        "title": "Eliminate render-blocking resources",
        "description": "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).",
        "score": 0,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "Potential savings of 70 ms",
        "details": {
        "type": "opportunity",
        "items": [
        {
        "totalBytes": 22489,
        "url": "https://harshit-delta.vercel.app/_next/static/css/cfd4192d6ce34732.css",
        "wastedMs": 150
        }
        ],
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
        "valueType": "timespanMs",
        "key": "wastedMs",
        "label": "Potential Savings"
        }
        ],
        "overallSavingsMs": 72
        },
        "numericValue": 72,
        "numericUnit": "millisecond"
        },
        "empty-heading": {
        "id": "empty-heading",
        "title": "All heading elements contain content.",
        "description": "A heading with no content or inaccessible text prevent screen reader users from accessing information on the page's structure. [Learn more about headings](https://dequeuniversity.com/rules/axe/4.9/empty-heading).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "input-button-name": {
        "id": "input-button-name",
        "title": "Input buttons have discernible text.",
        "description": "Adding discernable and accessible text to input buttons may help screen reader users understand the purpose of the input button. [Learn more about input buttons](https://dequeuniversity.com/rules/axe/4.9/input-button-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "offscreen-images": {
        "id": "offscreen-images",
        "title": "Defer offscreen images",
        "description": "Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn how to defer offscreen images](https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/).",
        "score": 0,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "Potential savings of 24 KiB",
        "details": {
        "debugData": {
        "metricSavings": {
        "FCP": 0,
        "LCP": 150
        },
        "type": "debugdata"
        },
        "headings": [
        {
        "valueType": "node",
        "key": "node"
        },
        {
        "label": "URL",
        "key": "url",
        "valueType": "url"
        },
        {
        "valueType": "bytes",
        "key": "totalBytes",
        "label": "Resource Size"
        },
        {
        "valueType": "bytes",
        "label": "Potential Savings",
        "key": "wastedBytes"
        }
        ],
        "overallSavingsBytes": 24210,
        "items": [
        {
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fav2.de3457db.png&w=1080&q=75",
        "wastedBytes": 24210,
        "wastedPercent": 100,
        "node": {
        "nodeLabel": "section.safe-x-padding > div.h-full > div.relative > img.w-52",
        "type": "node",
        "snippet": "<img alt=\"\" fetchpriority=\"high\" width=\"530\" height=\"530\" decoding=\"async\" data-nimg=\"1\" class=\"w-52 h-52 md:w-[330px] md:h-[330px] lg:w-[530px] lg:h-[530px] rounded-full…\" style=\"color:transparent;opacity:0;transform:translateY(50px) translateZ(0)\" srcset=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fav2.de3457db.png&amp;w=640&amp;q=75 1…\" src=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fav2.de3457db.png&amp;w=1080&amp;q=75\">",
        "lhId": "1-55-IMG",
        "boundingRect": {
        "top": 3495,
        "left": 102,
        "right": 310,
        "width": 208,
        "height": 208,
        "bottom": 3703
        },
        "selector": "section.safe-x-padding > div.h-full > div.relative > img.w-52",
        "path": "1,HTML,1,BODY,2,DIV,4,SECTION,1,DIV,0,DIV,1,IMG"
        },
        "totalBytes": 24210,
        "requestStartTime": 302765165.62799996
        }
        ],
        "sortedBy": [
        "wastedBytes"
        ],
        "type": "opportunity",
        "overallSavingsMs": 150
        },
        "warnings": [],
        "numericValue": 150,
        "numericUnit": "millisecond"
        },
        "redirects": {
        "id": "redirects",
        "title": "Avoid multiple page redirects",
        "description": "Redirects introduce additional delays before the page can be loaded. [Learn how to avoid page redirects](https://developer.chrome.com/docs/lighthouse/performance/redirects/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
        "headings": [],
        "type": "opportunity",
        "overallSavingsMs": 0,
        "items": []
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
        },
        "select-name": {
        "id": "select-name",
        "title": "Select elements have associated label elements.",
        "description": "Form elements without effective labels can create frustrating experiences for screen reader users. [Learn more about the `select` element](https://dequeuniversity.com/rules/axe/4.9/select-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "image-alt": {
        "id": "image-alt",
        "title": "Image elements have `[alt]` attributes",
        "description": "Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.9/image-alt).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "headings": [],
        "type": "table",
        "items": []
        }
        },
        "total-byte-weight": {
        "id": "total-byte-weight",
        "title": "Avoids enormous network payloads",
        "description": "Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/).",
        "score": 1,
        "scoreDisplayMode": "informative",
        "displayValue": "Total size was 921 KiB",
        "details": {
        "items": [
        {
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/05ee798f-b55416c10899a977.js",
        "totalBytes": 131348
        },
        {
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.22f50a8f.png&w=1080&q=75",
        "totalBytes": 77747
        },
        {
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.66367100.png&w=1080&q=75",
        "totalBytes": 71867
        },
        {
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/2443530c-6284f80f93684a73.js",
        "totalBytes": 52790
        },
        {
        "totalBytes": 34577,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.3aa471af.png&w=1080&q=75"
        },
        {
        "totalBytes": 34547,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/692-efea9ba6b073b923.js"
        },
        {
        "url": "https://harshit-delta.vercel.app/_next/static/media/e1c529c04de64b40-s.p.woff2",
        "totalBytes": 33702
        },
        {
        "totalBytes": 31875,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.602bb288.png&w=1080&q=75"
        },
        {
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fav1.730fe5ec.png&w=1080&q=75",
        "totalBytes": 29545
        },
        {
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/139-3d99f059cd7e9ba0.js",
        "totalBytes": 26414
        }
        ],
        "type": "table",
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
        "valueType": "bytes",
        "label": "Transfer Size",
        "key": "totalBytes"
        }
        ]
        },
        "numericValue": 943328,
        "numericUnit": "byte"
        },
        "crawlable-anchors": {
        "id": "crawlable-anchors",
        "title": "Links are crawlable",
        "description": "Search engines may use `href` attributes on links to crawl websites. Ensure that the `href` attribute of anchor elements links to an appropriate destination, so more pages of the site can be discovered. [Learn how to make links crawlable](https://support.google.com/webmasters/answer/9112205)",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "headings": [],
        "type": "table",
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
        "items": [],
        "headings": [],
        "type": "table"
        }
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
        "first-contentful-paint": {
        "id": "first-contentful-paint",
        "title": "First Contentful Paint",
        "description": "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "displayValue": "0.9 s",
        "numericValue": 901,
        "numericUnit": "millisecond"
        },
        "label-content-name-mismatch": {
        "id": "label-content-name-mismatch",
        "title": "Elements with visible text labels have matching accessible names.",
        "description": "Visible text labels that do not match the accessible name can result in a confusing experience for screen reader users. [Learn more about accessible names](https://dequeuniversity.com/rules/axe/4.9/label-content-name-mismatch).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "focus-traps": {
        "id": "focus-traps",
        "title": "User focus is not accidentally trapped in a region",
        "description": "A user can tab into and out of any control or region without accidentally trapping their focus. [Learn how to avoid focus traps](https://developer.chrome.com/docs/lighthouse/accessibility/focus-traps/).",
        "score": null,
        "scoreDisplayMode": "manual"
        },
        "aria-text": {
        "id": "aria-text",
        "title": "Elements with the `role=text` attribute do not have focusable descendents.",
        "description": "Adding `role=text` around a text node split by markup enables VoiceOver to treat it as one phrase, but the element's focusable descendents will not be announced. [Learn more about the `role=text` attribute](https://dequeuniversity.com/rules/axe/4.9/aria-text).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "third-party-summary": {
        "id": "third-party-summary",
        "title": "Minimize third-party usage",
        "description": "Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn how to minimize third-party impact](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "robots-txt": {
        "id": "robots-txt",
        "title": "robots.txt is valid",
        "description": "If your robots.txt file is malformed, crawlers may not be able to understand how you want your website to be crawled or indexed. [Learn more about robots.txt](https://developer.chrome.com/docs/lighthouse/seo/invalid-robots-txt/).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "http-status-code": {
        "id": "http-status-code",
        "title": "Page has successful HTTP status code",
        "description": "Pages with unsuccessful HTTP status codes may not be indexed properly. [Learn more about HTTP status codes](https://developer.chrome.com/docs/lighthouse/seo/http-status-code/).",
        "score": 1,
        "scoreDisplayMode": "binary"
        },
        "definition-list": {
        "id": "definition-list",
        "title": "`<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>`, `<template>` or `<div>` elements.",
        "description": "When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn how to structure definition lists correctly](https://dequeuniversity.com/rules/axe/4.9/definition-list).",
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
        "items": [],
        "type": "table",
        "headings": []
        }
        },
        "meta-refresh": {
        "id": "meta-refresh",
        "title": "The document does not use `<meta http-equiv=\"refresh\">`",
        "description": "Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more about the refresh meta tag](https://dequeuniversity.com/rules/axe/4.9/meta-refresh).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "redirects-http": {
        "id": "redirects-http",
        "title": "Redirects HTTP traffic to HTTPS",
        "description": "Make sure that you redirect all HTTP traffic to HTTPS in order to enable secure web features for all your users. [Learn more](https://developer.chrome.com/docs/lighthouse/pwa/redirects-http/).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "font-size": {
        "id": "font-size",
        "title": "Document uses legible font sizes",
        "description": "Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more about legible font sizes](https://developer.chrome.com/docs/lighthouse/seo/font-size/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "displayValue": "100% legible text",
        "details": {
        "items": [
        {
        "coverage": "100.00%",
        "fontSize": "≥ 12px",
        "source": {
        "type": "code",
        "value": "Legible text"
        }
        }
        ],
        "type": "table",
        "headings": [
        {
        "label": "Source",
        "key": "source",
        "valueType": "source-location"
        },
        {
        "key": "selector",
        "valueType": "code",
        "label": "Selector"
        },
        {
        "label": "% of Page Text",
        "valueType": "text",
        "key": "coverage"
        },
        {
        "label": "Font Size",
        "key": "fontSize",
        "valueType": "text"
        }
        ]
        }
        },
        "dom-size": {
        "id": "dom-size",
        "title": "Avoids an excessive DOM size",
        "description": "A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn how to avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size/).",
        "score": 1,
        "scoreDisplayMode": "informative",
        "displayValue": "256 elements",
        "details": {
        "headings": [
        {
        "valueType": "text",
        "key": "statistic",
        "label": "Statistic"
        },
        {
        "label": "Element",
        "valueType": "node",
        "key": "node"
        },
        {
        "label": "Value",
        "key": "value",
        "valueType": "numeric"
        }
        ],
        "type": "table",
        "items": [
        {
        "value": {
        "type": "numeric",
        "granularity": 1,
        "value": 256
        },
        "statistic": "Total DOM Elements"
        },
        {
        "value": {
        "granularity": 1,
        "type": "numeric",
        "value": 15
        },
        "statistic": "Maximum DOM Depth",
        "node": {
        "type": "node",
        "nodeLabel": "div.flex > a.p-4 > svg > path",
        "path": "1,HTML,1,BODY,2,DIV,2,SECTION,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,0,DIV,1,DIV,0,A,0,svg,0,path",
        "snippet": "<path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1…\">",
        "boundingRect": {
        "width": 0,
        "left": 0,
        "top": 0,
        "bottom": 0,
        "height": 0,
        "right": 0
        },
        "lhId": "1-27-path",
        "selector": "div.flex > a.p-4 > svg > path"
        }
        },
        {
        "value": {
        "type": "numeric",
        "value": 18,
        "granularity": 1
        },
        "statistic": "Maximum Child Elements",
        "node": {
        "snippet": "<body class=\"bg-black\" style=\"overflow: unset;\">",
        "boundingRect": {
        "left": 0,
        "right": 412,
        "bottom": 4533,
        "top": 0,
        "width": 412,
        "height": 4533
        },
        "selector": "body.bg-black",
        "lhId": "1-28-BODY",
        "path": "1,HTML,1,BODY",
        "nodeLabel": "body.bg-black",
        "type": "node"
        }
        }
        ]
        },
        "numericValue": 256,
        "numericUnit": "element"
        },
        "managed-focus": {
        "id": "managed-focus",
        "title": "The user's focus is directed to new content added to the page",
        "description": "If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn how to direct focus to new content](https://developer.chrome.com/docs/lighthouse/accessibility/managed-focus/).",
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
        "aria-required-attr": {
        "id": "aria-required-attr",
        "title": "`[role]`s have all required `[aria-*]` attributes",
        "description": "Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more about roles and required attributes](https://dequeuniversity.com/rules/axe/4.9/aria-required-attr).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "headings": [],
        "items": [],
        "type": "table"
        }
        },
        "visual-order-follows-dom": {
        "id": "visual-order-follows-dom",
        "title": "Visual order on the page follows DOM order",
        "description": "DOM order matches the visual order, improving navigation for assistive technology. [Learn more about DOM and visual ordering](https://developer.chrome.com/docs/lighthouse/accessibility/visual-order-follows-dom/).",
        "score": null,
        "scoreDisplayMode": "manual"
        },
        "frame-title": {
        "id": "frame-title",
        "title": "`<frame>` or `<iframe>` elements have a title",
        "description": "Screen reader users rely on frame titles to describe the contents of frames. [Learn more about frame titles](https://dequeuniversity.com/rules/axe/4.9/frame-title).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "critical-request-chains": {
        "id": "critical-request-chains",
        "title": "Avoid chaining critical requests",
        "description": "The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn how to avoid chaining critical requests](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains/).",
        "score": 1,
        "scoreDisplayMode": "informative",
        "displayValue": "3 chains found",
        "details": {
        "chains": {
        "E4D92921926F55E894824BDF9A0580A6": {
        "children": {
        "52.14": {
        "request": {
        "responseReceivedTime": 302765.22904799995,
        "startTime": 302765.164228,
        "url": "https://harshit-delta.vercel.app/_next/static/css/cfd4192d6ce34732.css",
        "transferSize": 1888,
        "endTime": 302765.229052
        }
        },
        "52.15": {
        "request": {
        "url": "https://harshit-delta.vercel.app/_next/static/css/e4cd2cb7618b6def.css",
        "startTime": 302765.164478,
        "responseReceivedTime": 302765.25438900007,
        "endTime": 302765.254396,
        "transferSize": 1365
        }
        },
        "52.13": {
        "request": {
        "responseReceivedTime": 302765.236849,
        "startTime": 302765.164009,
        "url": "https://harshit-delta.vercel.app/_next/static/css/d4668aedb1b1a02c.css",
        "endTime": 302765.236853,
        "transferSize": 5698
        }
        }
        },
        "request": {
        "responseReceivedTime": 302765.1445130001,
        "url": "https://harshit-delta.vercel.app/",
        "startTime": 302764.81657,
        "transferSize": 8742,
        "endTime": 302765.14451899996
        }
        }
        },
        "longestChain": {
        "duration": 437.82599997520447,
        "transferSize": 1365,
        "length": 2
        },
        "type": "criticalrequestchain"
        }
        },
        "aria-input-field-name": {
        "id": "aria-input-field-name",
        "title": "ARIA input fields have accessible names",
        "description": "When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more about input field labels](https://dequeuniversity.com/rules/axe/4.9/aria-input-field-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "aria-deprecated-role": {
        "id": "aria-deprecated-role",
        "title": "Deprecated ARIA roles were not used",
        "description": "Deprecated ARIA roles may not be processed correctly by assistive technology. [Learn more about deprecated ARIA roles](https://dequeuniversity.com/rules/axe/4.9/aria-deprecated-role).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "headings": [],
        "type": "table",
        "items": []
        }
        },
        "uses-text-compression": {
        "id": "uses-text-compression",
        "title": "Enable text compression",
        "description": "Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more about text compression](https://developer.chrome.com/docs/lighthouse/performance/uses-text-compression/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
        "overallSavingsMs": 0,
        "debugData": {
        "type": "debugdata",
        "metricSavings": {
        "FCP": 0,
        "LCP": 0
        }
        },
        "overallSavingsBytes": 0,
        "sortedBy": [
        "wastedBytes"
        ],
        "type": "opportunity",
        "headings": [],
        "items": []
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
        },
        "max-potential-fid": {
        "id": "max-potential-fid",
        "title": "Max Potential First Input Delay",
        "description": "The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more about the Maximum Potential First Input Delay metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/).",
        "score": 0,
        "scoreDisplayMode": "numeric",
        "displayValue": "1,080 ms",
        "details": {
        "type": "debugdata",
        "observedMaxBlockingLoaf": {
        "ts": 302765723008,
        "tid": 52,
        "name": "LongAnimationFrame",
        "scope": "devtools.timeline",
        "ph": "b",
        "id": "0xc6083532189fe47",
        "args": {
        "data": {
        "renderDuration": 73.933,
        "styleAndLayoutDuration": 73.02,
        "duration": 344.391,
        "numScripts": 1,
        "blockingDuration": 294.18
        }
        },
        "pid": 52,
        "cat": "devtools.timeline"
        },
        "observedLoafs": [
        {
        "startTime": 331.429,
        "blockingDuration": 0,
        "duration": 185.799
        },
        {
        "startTime": 907.625,
        "blockingDuration": 294.18,
        "duration": 344.391
        }
        ],
        "observedMaxDurationLoaf": {
        "pid": 52,
        "cat": "devtools.timeline",
        "ph": "b",
        "ts": 302765723008,
        "tid": 52,
        "scope": "devtools.timeline",
        "args": {
        "data": {
        "numScripts": 1,
        "blockingDuration": 294.18,
        "renderDuration": 73.933,
        "duration": 344.391,
        "styleAndLayoutDuration": 73.02
        }
        },
        "id": "0xc6083532189fe47",
        "name": "LongAnimationFrame"
        }
        },
        "numericValue": 1082,
        "numericUnit": "millisecond"
        },
        "screenshot-thumbnails": {
        "id": "screenshot-thumbnails",
        "title": "Screenshot Thumbnails",
        "description": "This is what the load of your site looked like.",
        "score": 1,
        "scoreDisplayMode": "informative",
        "details": {
        "type": "filmstrip",
        "items": [
        {
        "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAHyAPoDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIGAwj/xAAfEAEBAAMBAAEFAAAAAAAAAAAAAhNSkQEDBCE0crH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9UgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACckbz0yRvPQUJyRvPTJG89BQnJG89Mkbz0FCckbz0yRvPQUJyRvPTJG89BQnJG89Mkbz0FCckbz0yRvPQUJyRvPTJG89BQnJG89Mkbz0FCckbz0yRvPQUJyRvPTJG89BQnJG89Mkbz0FCckbz0yRvPQUJyRvPTJG89BQnJG89Mkbz0FCfLj337VPVAyoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOv0n5Xw/v5/WlAH//2Q==",
        "timing": 397,
        "timestamp": 302765212008
        },
        {
        "timestamp": 302765608633,
        "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAHyAPoDASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAcBAwQFBgII/8QASRAAAQMDAgQDBQQGBggGAwAAAQACAwQFEQYSBxMhMRQiQVFhcYGRFTIzUiM0QnKhsQgXJIKi0RY3YnSSssHhNTZDU1TwdcLD/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAMEAQIFBv/EADcRAQABAwIDBAgEBQUAAAAAAAABAgMRBCESMUEFE1FhFCJxgZGhwfAVMrHRBiNDUnIzQoLh8f/aAAwDAQACEQMRAD8A+VEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQXKf9Yi/eH81KSi2n/WIv3h/NSkgilERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAVQMnCopU0TbJ59N0srNDQXRrt2Kt9aIzJ5j+ye2O3yU1izN6rhj9Jn9IlT1usp0duLlUZ3xzpj51TEfVq2cMqhzGu+37EMjP6z/2XMaosT9P1zKWSto6wuZv30sm9o69j7D/ANl3eoLpbtPVEcF34f0tPJI3ewGt3ZGcejSuD1Nc6G61zJrbaorXEGbTFHIXhx9uSAptRbtURinn7/rEKfZ+o1V+qKq4ngmOfqY+NNU/o1dP+sRfvD+alJRbT/rEX7w/mpSVN2EUoiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICyYa2qgZshqJo2fla8gLGRM4YmInmuTzy1D988j5HYxlxyVbREZxhcp/1iL94fzUpKLaf9Yi/eH81KSCKUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQXKf9Yi/eH81KSi2n/WIv3h/NSkgilERAREQERVQURXGwvPpj4r14d/u+qCyiveHf7vqnh3+76oLKK94d/u+qeHf7vqgsor3h3+76p4d/u+qCyiveHf7vqnh3+76oLKK94d/u+qeHf7vqgsor3h3+76p4d/u+qCyiveHf7vqnh3+76oLKK94d/u+qeHf7vqgsorpgePQH5q2QWnBGCgoiIgIiILlP8ArEX7w/mpSUW0/wCsRfvD+alJBFKIiAiIgLLp4wGhx7lYi2I6ABBVERAREQEREBERAREQEREBERAREQEREBeJYw9uD39CvaINcRgkFUVycYlcraAiIguU/wCsRfvD+alJRU0lrgQcEdQth9tXH/5cn8EGuREQEREBbFa5bFBVERAREQEREBERAREQEREBERAREQEREBERBg1H4zlbVyo/GcraAiIgIiICIiAiIgLYrXLYoKoiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMGo/GcrauVH4zlbQEREBERAREQEREBbFa5bFBVERAREQEREBERAREQEREBERAREQEREBERBg1H4zlbVyo/GcraAiIgIiICIiAiIgLYrXLYoKoiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMGo/GcrauVH4zlbQEREBERAREQEREBbFa5bFBVERAREQEREBERAREQEREBERAREQEREBERBg1H4zlbVyo/GcraAiIgIiICIiAiIgLYrXLYoKoiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMGo/GcrauVH4zlbQEREBERAREQEREBbFa5bFBVERAREQEREBERAREQEREBERAREQEREBERBg1H4zlbVyo/GcraAiIgIiICIiAiIgLYrXLYoKoiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMGo/GcrauVH4zlbQEREBERAREQEREBbFa5bCN25gKD0iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgwaj8Zytr3K7dI4+9eEBERAREQEREBERAV2GUxn2hWkQZwmYf2gPiq8xn5h9VgIgz+Yz8w+qcxn5h9VgIgz+Yz8w+qcxn5h9VgIgz+Yz8w+qcxn5h9VgIgz+Yz8w+qcxn5h9VgIgz+Yz8w+qcxn5h9VgIgz+Yz8w+qcxn5h9VgIgz+Yz8w+qcxn5h9VgIgz+Yz8w+qcxn5h9VgIgzzKwftBWJp9wLWdvasdEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBd9T6Koq7g7Uatt9TUPuVBcW0lbSnBY2N48j2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",
        "timing": 793
        },
        {
        "timestamp": 302766005258,
        "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAHyAPoDASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAUBAwQGBwII/8QASBAAAQMDAgQDBQUDBwoHAAAAAQACAwQFEQYSBxMhMRQiQVFhcYGRFSMyM1JCodEIFyRigqKxFjQ3cnSSssHh8DU2Q1N1wsP/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUG/8QANxEBAAEDAgMECAQFBQAAAAAAAAECAxEEIRIxQQUTUWEUInGBkaHB8BUysdEGI0NScjNCguHx/9oADAMBAAIRAxEAPwD5UREQEWXSW2urIXy0lHUzxMBLnxxOcGgd8kD0ysVzS1xa4EOBwQfRBRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFlW2gqrnVtpqGF00zgSGj0A7knsB71iqY0pe5tP3qGugc9pb5XbDg4yD/iAfkhDt+n9MV2i7TbW0k76+qdG+qrhQvjeyBpA3NOTnAaOp7Ek4XL+KelprHd23GOpZW226OfNDUsz+LOXsPvBPzGPeB16hkbcK0VFQ+joYZ6VgNVQs2kdHEMcwhuZCcZyOg9ei0bjNeY6uz26iL4pp2yc11Q15LpnYLSSMYAb0APc+/C0jOZnDeuaYiKePM+Hg5GiIt2giIgIiICIiAiIgIiICIiAiIgIiICIiAiIgKoGThUXVNE2yefTdLKzQ0F0a7dirfWiMyeY/sntjt8lNYszeq4Y/SZ/SJU9brKdHbi5VGd8c6Y+dUxH1RbOGVQ5jXfb9iGRn/Of+i1jVFifp+uZSyVtHWFzN++lk3tHXsfYf+i3vUF0t2nqiOC78P6WnkkbvYDW7sjOPRpWh6mudDda5k1ttUVriDNpijkLw4+3JAU2ot2qIxTz9/wBYhT7P1Gqv1RVXE8Exz9THxpqn9EOiIqbsCIiDP+2Lh4N1L4uXw7mhpZnuB2CwERAREQEREBERAREQEREBERAREQEREBERAREQEREBZMNbVQM2Q1E0bP0teQFjImcMTETzXJ55ah++eR8jsYy45KtoiM4wIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIqoKIrjYXn0x8V68O/3fVBZRXvDv931Tw7/d9UFlFe8O/wB31Tw7/d9UFlFe8O/3fVPDv931QWUV7w7/AHfVPDv931QWUV7w7/d9U8O/3fVBZRXvDv8Ad9U8O/3fVBZRXvDv931Tw7/d9UFlFe8O/wB31Tw7/d9UFlFdMDx6A/NWyC04IwUFEREBERAREQEREBERAWXTxgNDj3KxFIjoAEFUREBERAREQEREBERAREQEREBERAREQF4ljD24Pf0K9ogjiMEgqiuTjErlbQEREBERAREQEREBSKjlIoKoiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMGo/OcrauVH5zlbQEREBERAREQEREBSKjlIoKoiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMGo/OcrauVH5zlbQEREBERAREQEREBSKjlIoKoiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMGo/OcrauVH5zlbQEREBERAREQEREBSKjlIoKoiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMGo/OcrauVH5zlbQEREBERAREQEREBSKjlIoKoiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMGo/OcrauVH5zlbQEREBERAREQEREBSKjlIoKoiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMGo/OcrauVH5zlbQEREBERAREQEREBSKjlIoKoiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMGo/OcrauVH5zlbQEREBERAREQEREBSKjlIoKoiICIiAiIgIiICIiAiIgIiICIiAiIgIiIMGo/OcrauVH5zlbQEREBERAREQEREBSKjlIRu3MBQekREBERAREQEREBERAREQEREBERAREQEREGDUfnOVte5XbpHH3rwgIiICIiAiIgIiICuwymM+0K0iDOEzD+0B8VXmM/UPqsBEGfzGfqH1TmM/UPqsBEGfzGfqH1TmM/UPqsBEGfzGfqH1TmM/UPqsBEGfzGfqH1TmM/UPqsBEGfzGfqH1TmM/UPqsBEGfzGfqH1TmM/UPqsBEGfzGfqH1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NxIlipKqCW0U1QJqOGkAkmkMf3dOIA50edrjgbhkZB9cdFapOI9worhU11JSwMqZW27YXEuDHUYYGHHru5YyPegjX6C1Iysjpjb2Fz2Pk5jamIxNazG/dKHbG7ctyCQRke0KTuPC7UVPOyOlgiqG8qmdI908UTWSzRCRsQLn4ccZAI746LLuXFCpuMz4q23OqLXNTyQT0lRX1Eu8Pex+Wvc4lhDooyMD9nBypCq4iWiv0w+OvsdJLNHV0fIt4lma1kUFO6Nr94PX0BBOTn5oNEOlb010DX0D2PmhqJ2Ne5rTsp9/OJBOQW8t/Q9TjpnorGorBctOXDwN5gbT1YaHmMSskLQe2dpOPgVto4l1E8U8lztNJV3J8dfHHV8x7DE2rEnM8gO04dK8jPtx7CNb1VfxqK73O5VFGyKqrJmShzXkiMBpBaB658pye233oIJERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB/9k=",
        "timing": 1190
        },
        {
        "timestamp": 302766401883,
        "data": "data:image/jpeg;base64,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",
        "timing": 1587
        },
        {
        "data": "data:image/jpeg;base64,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",
        "timestamp": 302766798508,
        "timing": 1983
        },
        {
        "timing": 2380,
        "data": "data:image/jpeg;base64,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",
        "timestamp": 302767195133
        },
        {
        "timing": 2776,
        "timestamp": 302767591758,
        "data": "data:image/jpeg;base64,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"
        },
        {
        "timestamp": 302767988383,
        "timing": 3173,
        "data": "data:image/jpeg;base64,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"
        }
        ],
        "scale": 3173
        }
        },
        "third-party-facades": {
        "id": "third-party-facades",
        "title": "Lazy load third-party resources with facades",
        "description": "Some third-party embeds can be lazy loaded. Consider replacing them with a facade until they are required. [Learn how to defer third-parties with a facade](https://developer.chrome.com/docs/lighthouse/performance/third-party-facades/).",
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
        "key": "requestCount",
        "valueType": "numeric",
        "label": "Requests"
        },
        {
        "valueType": "bytes",
        "label": "Transfer Size",
        "key": "transferSize"
        }
        ],
        "type": "table",
        "items": [
        {
        "resourceType": "total",
        "label": "Total",
        "requestCount": 59,
        "transferSize": 943328
        },
        {
        "resourceType": "image",
        "label": "Image",
        "transferSize": 488149,
        "requestCount": 29
        },
        {
        "resourceType": "script",
        "label": "Script",
        "transferSize": 312438,
        "requestCount": 15
        },
        {
        "transferSize": 125048,
        "label": "Font",
        "resourceType": "font",
        "requestCount": 11
        },
        {
        "requestCount": 3,
        "transferSize": 8951,
        "resourceType": "stylesheet",
        "label": "Stylesheet"
        },
        {
        "transferSize": 8742,
        "requestCount": 1,
        "label": "Document",
        "resourceType": "document"
        },
        {
        "transferSize": 0,
        "label": "Media",
        "resourceType": "media",
        "requestCount": 0
        },
        {
        "requestCount": 0,
        "transferSize": 0,
        "label": "Other",
        "resourceType": "other"
        },
        {
        "transferSize": 0,
        "resourceType": "third-party",
        "label": "Third-party",
        "requestCount": 0
        }
        ]
        }
        },
        "final-screenshot": {
        "id": "final-screenshot",
        "title": "Final Screenshot",
        "description": "The last screenshot captured of the pageload.",
        "score": 1,
        "scoreDisplayMode": "informative",
        "details": {
        "timing": 3173,
        "type": "screenshot",
        "timestamp": 302767988796,
        "data": "data:image/jpeg;base64,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"
        }
        },
        "use-landmarks": {
        "id": "use-landmarks",
        "title": "HTML5 landmark elements are used to improve navigation",
        "description": "Landmark elements (`<main>`, `<nav>`, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more about landmark elements](https://developer.chrome.com/docs/lighthouse/accessibility/use-landmarks/).",
        "score": null,
        "scoreDisplayMode": "manual"
        },
        "valid-source-maps": {
        "id": "valid-source-maps",
        "title": "Page has valid source maps",
        "description": "Source maps translate minified code to the original source code. This helps developers debug in production. In addition, Lighthouse is able to provide further insights. Consider deploying source maps to take advantage of these benefits. [Learn more about source maps](https://developer.chrome.com/docs/devtools/javascript/source-maps/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "headings": [],
        "type": "table",
        "items": []
        }
        },
        "aria-progressbar-name": {
        "id": "aria-progressbar-name",
        "title": "ARIA `progressbar` elements have accessible names",
        "description": "When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to label `progressbar` elements](https://dequeuniversity.com/rules/axe/4.9/aria-progressbar-name).",
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
        "image-redundant-alt": {
        "id": "image-redundant-alt",
        "title": "Image elements do not have `[alt]` attributes that are redundant text.",
        "description": "Informative elements should aim for short, descriptive alternative text. Alternative text that is exactly the same as the text adjacent to the link or image is potentially confusing for screen reader users, because the text will be read twice. [Learn more about the `alt` attribute](https://dequeuniversity.com/rules/axe/4.9/image-redundant-alt).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "items": [],
        "headings": [],
        "type": "table"
        }
        },
        "form-field-multiple-labels": {
        "id": "form-field-multiple-labels",
        "title": "No form fields have multiple labels",
        "description": "Form fields with multiple labels can be confusingly announced by assistive technologies like screen readers which use either the first, the last, or all of the labels. [Learn how to use form labels](https://dequeuniversity.com/rules/axe/4.9/form-field-multiple-labels).",
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
        "valueType": "url",
        "label": "URL",
        "key": "url"
        },
        {
        "key": "protocol",
        "label": "Protocol",
        "valueType": "text"
        },
        {
        "granularity": 1,
        "key": "networkRequestTime",
        "valueType": "ms",
        "label": "Network Request Time"
        },
        {
        "valueType": "ms",
        "label": "Network End Time",
        "key": "networkEndTime",
        "granularity": 1
        },
        {
        "label": "Transfer Size",
        "valueType": "bytes",
        "key": "transferSize",
        "displayUnit": "kb",
        "granularity": 1
        },
        {
        "displayUnit": "kb",
        "valueType": "bytes",
        "label": "Resource Size",
        "granularity": 1,
        "key": "resourceSize"
        },
        {
        "label": "Status Code",
        "valueType": "text",
        "key": "statusCode"
        },
        {
        "valueType": "text",
        "label": "MIME Type",
        "key": "mimeType"
        },
        {
        "key": "resourceType",
        "valueType": "text",
        "label": "Resource Type"
        }
        ],
        "debugData": {
        "networkStartTimeTs": 302764815474,
        "type": "debugdata"
        },
        "items": [
        {
        "statusCode": 200,
        "mimeType": "text/html",
        "url": "https://harshit-delta.vercel.app/",
        "experimentalFromMainFrame": true,
        "priority": "VeryHigh",
        "resourceType": "Document",
        "protocol": "h2",
        "rendererStartTime": 0,
        "entity": "vercel.app",
        "networkRequestTime": 1.096000075340271,
        "finished": true,
        "transferSize": 8742,
        "sessionTargetType": "page",
        "networkEndTime": 329.0450000166893,
        "resourceSize": 54452
        },
        {
        "statusCode": 200,
        "url": "https://harshit-delta.vercel.app/_next/static/media/376dd8dc38524313-s.p.woff2",
        "entity": "vercel.app",
        "transferSize": 8377,
        "experimentalFromMainFrame": true,
        "resourceType": "Font",
        "networkEndTime": 426.75,
        "finished": true,
        "mimeType": "font/woff2",
        "rendererStartTime": 344.2900000214577,
        "isLinkPreload": true,
        "networkRequestTime": 346.3830000758171,
        "protocol": "h2",
        "resourceSize": 7824,
        "sessionTargetType": "page",
        "priority": "High"
        },
        {
        "isLinkPreload": true,
        "mimeType": "font/woff2",
        "entity": "vercel.app",
        "protocol": "h2",
        "experimentalFromMainFrame": true,
        "transferSize": 8301,
        "resourceType": "Font",
        "priority": "High",
        "networkRequestTime": 346.56999999284744,
        "rendererStartTime": 346.20099997520447,
        "resourceSize": 7748,
        "sessionTargetType": "page",
        "statusCode": 200,
        "url": "https://harshit-delta.vercel.app/_next/static/media/7777133e901cd5ed-s.p.woff2",
        "networkEndTime": 403.5640000104904,
        "finished": true
        },
        {
        "isLinkPreload": true,
        "rendererStartTime": 346.4440000653267,
        "networkEndTime": 399.20700001716614,
        "entity": "vercel.app",
        "resourceSize": 7484,
        "resourceType": "Font",
        "transferSize": 8037,
        "priority": "High",
        "sessionTargetType": "page",
        "finished": true,
        "statusCode": 200,
        "networkRequestTime": 346.8110000491142,
        "experimentalFromMainFrame": true,
        "url": "https://harshit-delta.vercel.app/_next/static/media/7a78f1ce0329757f-s.p.woff2",
        "protocol": "h2",
        "mimeType": "font/woff2"
        },
        {
        "isLinkPreload": true,
        "resourceType": "Font",
        "resourceSize": 7884,
        "transferSize": 8437,
        "rendererStartTime": 346.6069999933243,
        "protocol": "h2",
        "networkEndTime": 426.49000000953674,
        "finished": true,
        "networkRequestTime": 347.02200001478195,
        "priority": "High",
        "mimeType": "font/woff2",
        "url": "https://harshit-delta.vercel.app/_next/static/media/916d3686010a8de2-s.p.woff2",
        "statusCode": 200,
        "experimentalFromMainFrame": true,
        "sessionTargetType": "page",
        "entity": "vercel.app"
        },
        {
        "networkEndTime": 415.1350000500679,
        "transferSize": 8369,
        "rendererStartTime": 346.8799999952316,
        "experimentalFromMainFrame": true,
        "finished": true,
        "resourceSize": 7816,
        "mimeType": "font/woff2",
        "priority": "High",
        "statusCode": 200,
        "sessionTargetType": "page",
        "protocol": "h2",
        "url": "https://harshit-delta.vercel.app/_next/static/media/9a881e2ac07d406b-s.p.woff2",
        "entity": "vercel.app",
        "resourceType": "Font",
        "networkRequestTime": 347.2630000114441,
        "isLinkPreload": true
        },
        {
        "resourceType": "Font",
        "mimeType": "font/woff2",
        "networkEndTime": 405.807000041008,
        "rendererStartTime": 347.085000038147,
        "priority": "High",
        "entity": "vercel.app",
        "sessionTargetType": "page",
        "resourceSize": 7632,
        "finished": true,
        "isLinkPreload": true,
        "experimentalFromMainFrame": true,
        "transferSize": 8185,
        "networkRequestTime": 347.4710000157356,
        "statusCode": 200,
        "url": "https://harshit-delta.vercel.app/_next/static/media/bd427f25ac24d036-s.p.woff2",
        "protocol": "h2"
        },
        {
        "resourceType": "Font",
        "isLinkPreload": true,
        "transferSize": 8393,
        "networkRequestTime": 347.6650000214577,
        "protocol": "h2",
        "rendererStartTime": 347.2630000114441,
        "resourceSize": 7840,
        "entity": "vercel.app",
        "finished": true,
        "statusCode": 200,
        "sessionTargetType": "page",
        "experimentalFromMainFrame": true,
        "mimeType": "font/woff2",
        "url": "https://harshit-delta.vercel.app/_next/static/media/c04551857776278f-s.p.woff2",
        "priority": "High",
        "networkEndTime": 444.50900000333786
        },
        {
        "finished": true,
        "sessionTargetType": "page",
        "rendererStartTime": 347.41200000047684,
        "entity": "vercel.app",
        "resourceType": "Font",
        "experimentalFromMainFrame": true,
        "transferSize": 8485,
        "priority": "High",
        "url": "https://harshit-delta.vercel.app/_next/static/media/d36a2a2bb416f59e-s.p.woff2",
        "networkRequestTime": 347.80599999427795,
        "isLinkPreload": true,
        "networkEndTime": 414.72500002384186,
        "mimeType": "font/woff2",
        "protocol": "h2",
        "statusCode": 200,
        "resourceSize": 7932
        },
        {
        "networkRequestTime": 348.00200003385544,
        "sessionTargetType": "page",
        "mimeType": "font/woff2",
        "url": "https://harshit-delta.vercel.app/_next/static/media/d869208648ca5469-s.p.woff2",
        "resourceType": "Font",
        "statusCode": 200,
        "protocol": "h2",
        "transferSize": 8553,
        "isLinkPreload": true,
        "priority": "High",
        "resourceSize": 8000,
        "entity": "vercel.app",
        "finished": true,
        "experimentalFromMainFrame": true,
        "networkEndTime": 403.8730000257492,
        "rendererStartTime": 347.6240000128746
        },
        {
        "entity": "vercel.app",
        "resourceType": "Font",
        "protocol": "h2",
        "priority": "High",
        "experimentalFromMainFrame": true,
        "networkEndTime": 413.1040000319481,
        "transferSize": 33702,
        "statusCode": 200,
        "resourceSize": 33148,
        "finished": true,
        "networkRequestTime": 348.24199998378754,
        "sessionTargetType": "page",
        "isLinkPreload": true,
        "url": "https://harshit-delta.vercel.app/_next/static/media/e1c529c04de64b40-s.p.woff2",
        "rendererStartTime": 347.8080000281334,
        "mimeType": "font/woff2"
        },
        {
        "mimeType": "font/ttf",
        "protocol": "h2",
        "statusCode": 200,
        "resourceType": "Font",
        "sessionTargetType": "page",
        "finished": true,
        "rendererStartTime": 347.9960000514984,
        "resourceSize": 23488,
        "entity": "vercel.app",
        "networkEndTime": 413.8580000400543,
        "priority": "High",
        "url": "https://harshit-delta.vercel.app/_next/static/media/e3c03073b0912504-s.p.ttf",
        "transferSize": 16209,
        "isLinkPreload": true,
        "experimentalFromMainFrame": true,
        "networkRequestTime": 348.39600002765656
        },
        {
        "protocol": "h2",
        "url": "https://harshit-delta.vercel.app/_next/static/css/d4668aedb1b1a02c.css",
        "experimentalFromMainFrame": true,
        "statusCode": 200,
        "networkEndTime": 421.37900000810623,
        "priority": "VeryHigh",
        "rendererStartTime": 348.17900002002716,
        "resourceType": "Stylesheet",
        "resourceSize": 20914,
        "sessionTargetType": "page",
        "transferSize": 5698,
        "finished": true,
        "entity": "vercel.app",
        "networkRequestTime": 348.53500002622604,
        "mimeType": "text/css"
        },
        {
        "entity": "vercel.app",
        "experimentalFromMainFrame": true,
        "url": "https://harshit-delta.vercel.app/_next/static/css/cfd4192d6ce34732.css",
        "protocol": "h2",
        "statusCode": 200,
        "sessionTargetType": "page",
        "transferSize": 1888,
        "networkEndTime": 413.5780000090599,
        "priority": "VeryHigh",
        "mimeType": "text/css",
        "resourceType": "Stylesheet",
        "networkRequestTime": 348.75400000810623,
        "finished": true,
        "resourceSize": 21871,
        "rendererStartTime": 348.3889999985695
        },
        {
        "resourceSize": 2359,
        "resourceType": "Stylesheet",
        "sessionTargetType": "page",
        "url": "https://harshit-delta.vercel.app/_next/static/css/e4cd2cb7618b6def.css",
        "networkRequestTime": 349.0040000677109,
        "statusCode": 200,
        "protocol": "h2",
        "transferSize": 1365,
        "entity": "vercel.app",
        "rendererStartTime": 348.54600006341934,
        "networkEndTime": 438.92200005054474,
        "finished": true,
        "mimeType": "text/css",
        "priority": "VeryHigh",
        "experimentalFromMainFrame": true
        },
        {
        "mimeType": "image/webp",
        "statusCode": 200,
        "networkEndTime": 616.1299999952316,
        "networkRequestTime": 349.16600000858307,
        "finished": true,
        "experimentalFromMainFrame": true,
        "rendererStartTime": 348.7179999947548,
        "resourceType": "Image",
        "sessionTargetType": "page",
        "entity": "vercel.app",
        "resourceSize": 28878,
        "priority": "High",
        "protocol": "h2",
        "transferSize": 29545,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fav1.730fe5ec.png&w=1080&q=75"
        },
        {
        "priority": "High",
        "rendererStartTime": 348.9340000152588,
        "finished": true,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.66367100.png&w=1080&q=75",
        "resourceType": "Image",
        "resourceSize": 71204,
        "experimentalFromMainFrame": true,
        "sessionTargetType": "page",
        "networkEndTime": 730.3830000162125,
        "mimeType": "image/webp",
        "networkRequestTime": 349.30000001192093,
        "entity": "vercel.app",
        "transferSize": 71867,
        "protocol": "h2",
        "statusCode": 200
        },
        {
        "mimeType": "image/webp",
        "networkRequestTime": 349.466000020504,
        "finished": true,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.602bb288.png&w=1080&q=75",
        "resourceType": "Image",
        "entity": "vercel.app",
        "networkEndTime": 637.2730000019073,
        "experimentalFromMainFrame": true,
        "protocol": "h2",
        "transferSize": 31875,
        "sessionTargetType": "page",
        "statusCode": 200,
        "rendererStartTime": 349.1129999756813,
        "resourceSize": 31212,
        "priority": "High"
        },
        {
        "transferSize": 34577,
        "finished": true,
        "resourceType": "Image",
        "networkRequestTime": 349.65900003910065,
        "priority": "High",
        "networkEndTime": 629.1480000019073,
        "statusCode": 200,
        "experimentalFromMainFrame": true,
        "sessionTargetType": "page",
        "mimeType": "image/webp",
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.3aa471af.png&w=1080&q=75",
        "rendererStartTime": 349.2820000052452,
        "protocol": "h2",
        "entity": "vercel.app",
        "resourceSize": 33914
        },
        {
        "resourceType": "Image",
        "transferSize": 10895,
        "networkEndTime": 720.4980000257492,
        "resourceSize": 10232,
        "experimentalFromMainFrame": true,
        "mimeType": "image/webp",
        "protocol": "h2",
        "rendererStartTime": 349.4450000524521,
        "priority": "High",
        "networkRequestTime": 349.83600002527237,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.258de310.png&w=1080&q=75",
        "statusCode": 200,
        "entity": "vercel.app",
        "finished": true,
        "sessionTargetType": "page"
        },
        {
        "priority": "High",
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.22f50a8f.png&w=1080&q=75",
        "rendererStartTime": 349.6620000600815,
        "statusCode": 200,
        "resourceSize": 77084,
        "mimeType": "image/webp",
        "networkEndTime": 691.6240000128746,
        "experimentalFromMainFrame": true,
        "sessionTargetType": "page",
        "protocol": "h2",
        "entity": "vercel.app",
        "resourceType": "Image",
        "finished": true,
        "transferSize": 77747,
        "networkRequestTime": 350.00999999046326
        },
        {
        "priority": "High",
        "resourceSize": 24210,
        "finished": true,
        "sessionTargetType": "page",
        "mimeType": "image/webp",
        "statusCode": 200,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fav2.de3457db.png&w=1080&q=75",
        "resourceType": "Image",
        "networkRequestTime": 350.1539999842644,
        "experimentalFromMainFrame": true,
        "rendererStartTime": 349.8380000591278,
        "networkEndTime": 669.6430000066757,
        "protocol": "h2",
        "entity": "vercel.app",
        "transferSize": 24877
        },
        {
        "protocol": "h2",
        "rendererStartTime": 350.0120000243187,
        "entity": "vercel.app",
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/webpack-3daa52cd204158e5.js",
        "priority": "Low",
        "transferSize": 2398,
        "experimentalFromMainFrame": true,
        "resourceType": "Script",
        "resourceSize": 3659,
        "statusCode": 200,
        "sessionTargetType": "page",
        "networkRequestTime": 353.80599999427795,
        "mimeType": "application/javascript",
        "networkEndTime": 455.3210000395775,
        "finished": true
        },
        {
        "priority": "Low",
        "entity": "vercel.app",
        "networkEndTime": 429.9850000143051,
        "resourceSize": 160634,
        "transferSize": 52790,
        "resourceType": "Script",
        "experimentalFromMainFrame": true,
        "rendererStartTime": 350.11100006103516,
        "mimeType": "application/javascript",
        "finished": true,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/2443530c-6284f80f93684a73.js",
        "networkRequestTime": 354.00900000333786,
        "sessionTargetType": "page",
        "protocol": "h2",
        "statusCode": 200
        },
        {
        "protocol": "h2",
        "resourceSize": 96459,
        "rendererStartTime": 350.33600002527237,
        "entity": "vercel.app",
        "statusCode": 200,
        "networkEndTime": 386.4860000014305,
        "networkRequestTime": 354.1050000190735,
        "resourceType": "Script",
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/139-3d99f059cd7e9ba0.js",
        "experimentalFromMainFrame": true,
        "transferSize": 26414,
        "sessionTargetType": "page",
        "mimeType": "application/javascript",
        "priority": "Low",
        "finished": true
        },
        {
        "protocol": "h2",
        "rendererStartTime": 350.48900002241135,
        "resourceSize": 417,
        "transferSize": 1001,
        "networkEndTime": 397.932000041008,
        "statusCode": 200,
        "experimentalFromMainFrame": true,
        "entity": "vercel.app",
        "mimeType": "application/javascript",
        "priority": "Low",
        "sessionTargetType": "page",
        "resourceType": "Script",
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/main-app-c0fde4ac3a0b3bab.js",
        "networkRequestTime": 354.1850000023842,
        "finished": true
        },
        {
        "finished": true,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F14.a1979d7a.png&w=96&q=75",
        "statusCode": 200,
        "transferSize": 7706,
        "experimentalFromMainFrame": true,
        "priority": "High",
        "resourceType": "Image",
        "protocol": "h2",
        "rendererStartTime": 517.3320000171661,
        "mimeType": "image/webp",
        "networkEndTime": 777.32900005579,
        "resourceSize": 7042,
        "networkRequestTime": 517.8009999990463,
        "entity": "vercel.app",
        "sessionTargetType": "page"
        },
        {
        "protocol": "h2",
        "entity": "vercel.app",
        "networkEndTime": 817.2739999890327,
        "experimentalFromMainFrame": true,
        "priority": "High",
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzig-zag.e6e210b3.webp&w=384&q=75",
        "networkRequestTime": 517.9800000190735,
        "rendererStartTime": 517.6410000324249,
        "resourceSize": 9342,
        "statusCode": 200,
        "finished": true,
        "mimeType": "image/webp",
        "transferSize": 10017,
        "resourceType": "Image",
        "sessionTargetType": "page"
        },
        {
        "entity": "vercel.app",
        "networkEndTime": 772.6539999842644,
        "networkRequestTime": 518.1490000486374,
        "mimeType": "image/webp",
        "resourceSize": 11976,
        "protocol": "h2",
        "sessionTargetType": "page",
        "priority": "High",
        "experimentalFromMainFrame": true,
        "rendererStartTime": 517.8769999742508,
        "transferSize": 12664,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwisted-torus.87200cf8.webp&w=384&q=75",
        "resourceType": "Image",
        "statusCode": 200,
        "finished": true
        },
        {
        "networkRequestTime": 518.3379999995232,
        "resourceType": "Image",
        "finished": true,
        "resourceSize": 11632,
        "networkEndTime": 776.4270000457764,
        "protocol": "h2",
        "entity": "vercel.app",
        "sessionTargetType": "page",
        "experimentalFromMainFrame": true,
        "mimeType": "image/webp",
        "priority": "High",
        "rendererStartTime": 518.0550000071526,
        "transferSize": 12320,
        "statusCode": 200,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquadrilateral.9eb75977.webp&w=384&q=75"
        },
        {
        "statusCode": 200,
        "resourceSize": 14708,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftriangle.0e5133ed.webp&w=640&q=75",
        "priority": "High",
        "networkRequestTime": 518.529000043869,
        "resourceType": "Image",
        "entity": "vercel.app",
        "mimeType": "image/webp",
        "sessionTargetType": "page",
        "protocol": "h2",
        "rendererStartTime": 518.2210000157356,
        "finished": true,
        "networkEndTime": 787.5520000457764,
        "experimentalFromMainFrame": true,
        "transferSize": 15386
        },
        {
        "statusCode": 200,
        "experimentalFromMainFrame": true,
        "sessionTargetType": "page",
        "priority": "Low",
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvs.c374f309.jpg&w=256&q=75",
        "resourceSize": 3190,
        "mimeType": "image/webp",
        "rendererStartTime": 518.4000000357628,
        "entity": "vercel.app",
        "resourceType": "Image",
        "finished": true,
        "transferSize": 3854,
        "protocol": "h2",
        "networkEndTime": 795.3349999785423,
        "networkRequestTime": 518.7000000476837
        },
        {
        "finished": true,
        "mimeType": "image/webp",
        "experimentalFromMainFrame": true,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpp.568bc23d.png&w=256&q=75",
        "networkEndTime": 846.035000026226,
        "entity": "vercel.app",
        "networkRequestTime": 518.910000026226,
        "priority": "Low",
        "resourceType": "Image",
        "sessionTargetType": "page",
        "resourceSize": 5066,
        "statusCode": 200,
        "rendererStartTime": 518.5830000042915,
        "transferSize": 5730,
        "protocol": "h2"
        },
        {
        "rendererStartTime": 518.7350000143051,
        "sessionTargetType": "page",
        "priority": "Low",
        "resourceType": "Image",
        "transferSize": 9847,
        "statusCode": 200,
        "entity": "vercel.app",
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frocket.6961a60c.webp&w=256&q=75",
        "networkEndTime": 769.8470000624657,
        "networkRequestTime": 519.1170000433922,
        "protocol": "h2",
        "experimentalFromMainFrame": true,
        "mimeType": "image/webp",
        "resourceSize": 9174,
        "finished": true
        },
        {
        "statusCode": 200,
        "resourceType": "Image",
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjavascript.816af210.webp&w=256&q=75",
        "networkEndTime": 836.8390000462532,
        "entity": "vercel.app",
        "resourceSize": 6528,
        "protocol": "h2",
        "transferSize": 7209,
        "finished": true,
        "mimeType": "image/webp",
        "rendererStartTime": 518.8910000324249,
        "experimentalFromMainFrame": true,
        "networkRequestTime": 519.3299999833107,
        "sessionTargetType": "page",
        "priority": "Low"
        },
        {
        "experimentalFromMainFrame": true,
        "mimeType": "image/webp",
        "sessionTargetType": "page",
        "resourceSize": 9220,
        "networkEndTime": 821.4820000529289,
        "priority": "Low",
        "statusCode": 200,
        "transferSize": 9884,
        "rendererStartTime": 519.0800000429153,
        "entity": "vercel.app",
        "protocol": "h2",
        "resourceType": "Image",
        "finished": true,
        "networkRequestTime": 519.4500000476837,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpy.304a9912.png&w=256&q=75"
        },
        {
        "networkEndTime": 817.5940000414848,
        "protocol": "h2",
        "resourceSize": 15760,
        "mimeType": "image/webp",
        "experimentalFromMainFrame": true,
        "finished": true,
        "rendererStartTime": 519.279000043869,
        "networkRequestTime": 519.8109999895096,
        "sessionTargetType": "page",
        "statusCode": 200,
        "entity": "vercel.app",
        "priority": "Low",
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freact-js.94048efa.webp&w=256&q=75",
        "transferSize": 16438,
        "resourceType": "Image"
        },
        {
        "entity": "vercel.app",
        "rendererStartTime": 519.4340000152588,
        "experimentalFromMainFrame": true,
        "mimeType": "image/webp",
        "networkEndTime": 792.2680000662804,
        "networkRequestTime": 519.9680000543594,
        "transferSize": 8255,
        "statusCode": 200,
        "protocol": "h2",
        "resourceType": "Image",
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftailwindcss.9ba9e8c7.webp&w=256&q=75",
        "sessionTargetType": "page",
        "finished": true,
        "resourceSize": 7572,
        "priority": "Low"
        },
        {
        "resourceSize": 10830,
        "mimeType": "image/webp",
        "priority": "Low",
        "finished": true,
        "sessionTargetType": "page",
        "statusCode": 200,
        "transferSize": 11511,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felectronjs.95b4378b.png&w=256&q=75",
        "networkEndTime": 815.5430000424385,
        "protocol": "h2",
        "rendererStartTime": 519.5979999899864,
        "entity": "vercel.app",
        "resourceType": "Image",
        "networkRequestTime": 520.0800000429153,
        "experimentalFromMainFrame": true
        },
        {
        "finished": true,
        "entity": "vercel.app",
        "sessionTargetType": "page",
        "transferSize": 17533,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflask.1956c9d5.png&w=256&q=75",
        "resourceSize": 16862,
        "networkRequestTime": 520.3900000452995,
        "resourceType": "Image",
        "experimentalFromMainFrame": true,
        "rendererStartTime": 519.7840000391006,
        "priority": "Low",
        "protocol": "h2",
        "statusCode": 200,
        "mimeType": "image/webp",
        "networkEndTime": 857.5970000624657
        },
        {
        "finished": true,
        "mimeType": "image/svg+xml",
        "priority": "Low",
        "rendererStartTime": 520.0879999995232,
        "resourceType": "Image",
        "networkEndTime": 539.0680000185966,
        "experimentalFromMainFrame": true,
        "networkRequestTime": 520.4760000109673,
        "resourceSize": 2599,
        "transferSize": 1879,
        "statusCode": 200,
        "entity": "vercel.app",
        "sessionTargetType": "page",
        "protocol": "h2",
        "url": "https://harshit-delta.vercel.app/_next/static/media/nodejs.08bee2f1.svg"
        },
        {
        "resourceType": "Image",
        "transferSize": 8652,
        "mimeType": "image/webp",
        "priority": "Low",
        "finished": true,
        "networkEndTime": 786.4780000448227,
        "protocol": "h2",
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSelenium.e36f07b5.png&w=256&q=75",
        "statusCode": 200,
        "resourceSize": 7976,
        "experimentalFromMainFrame": true,
        "networkRequestTime": 520.6850000023842,
        "rendererStartTime": 520.3670000433922,
        "entity": "vercel.app",
        "sessionTargetType": "page"
        },
        {
        "resourceSize": 7832,
        "networkEndTime": 806.6680000424385,
        "rendererStartTime": 520.5710000395775,
        "sessionTargetType": "page",
        "resourceType": "Image",
        "networkRequestTime": 520.8740000128746,
        "protocol": "h2",
        "experimentalFromMainFrame": true,
        "transferSize": 8498,
        "priority": "Low",
        "entity": "vercel.app",
        "mimeType": "image/webp",
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3js.b2bcb48d.png&w=256&q=75",
        "statusCode": 200,
        "finished": true
        },
        {
        "url": "https://harshit-delta.vercel.app/_next/static/media/gsap.4ed28b15.svg",
        "networkEndTime": 541.8420000076294,
        "resourceType": "Image",
        "sessionTargetType": "page",
        "statusCode": 200,
        "finished": true,
        "protocol": "h2",
        "entity": "vercel.app",
        "mimeType": "image/svg+xml",
        "transferSize": 8722,
        "experimentalFromMainFrame": true,
        "rendererStartTime": 520.7530000209808,
        "resourceSize": 23585,
        "networkRequestTime": 521.2990000247955,
        "priority": "Low"
        },
        {
        "protocol": "h2",
        "resourceType": "Image",
        "networkRequestTime": 521.4259999990463,
        "experimentalFromMainFrame": true,
        "networkEndTime": 822.1350000500679,
        "entity": "vercel.app",
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flinkedin.943c3adb.webp&w=256&q=75",
        "mimeType": "image/webp",
        "sessionTargetType": "page",
        "priority": "Low",
        "rendererStartTime": 520.9750000238419,
        "resourceSize": 7718,
        "transferSize": 8396,
        "finished": true,
        "statusCode": 200
        },
        {
        "finished": true,
        "transferSize": 5813,
        "experimentalFromMainFrame": true,
        "resourceType": "Image",
        "rendererStartTime": 521.1859999895096,
        "entity": "vercel.app",
        "priority": "Low",
        "protocol": "h2",
        "mimeType": "image/webp",
        "sessionTargetType": "page",
        "networkEndTime": 858.4650000333786,
        "networkRequestTime": 521.5780000090599,
        "resourceSize": 5150,
        "statusCode": 200,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fx.f6faf248.jpg&w=256&q=75"
        },
        {
        "priority": "Low",
        "networkEndTime": 833.4000000357628,
        "networkRequestTime": 521.8149999976158,
        "statusCode": 200,
        "rendererStartTime": 521.4340000152588,
        "mimeType": "image/webp",
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgmail.72a0bbdb.webp&w=256&q=75",
        "finished": true,
        "transferSize": 8014,
        "experimentalFromMainFrame": true,
        "entity": "vercel.app",
        "resourceSize": 7342,
        "sessionTargetType": "page",
        "protocol": "h2",
        "resourceType": "Image"
        },
        {
        "statusCode": 200,
        "entity": "vercel.app",
        "sessionTargetType": "page",
        "experimentalFromMainFrame": true,
        "networkRequestTime": 521.9800000190735,
        "protocol": "h2",
        "resourceType": "Image",
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgithub.a5ea4f13.webp&w=256&q=75",
        "finished": true,
        "priority": "Low",
        "rendererStartTime": 521.6829999685287,
        "mimeType": "image/webp",
        "networkEndTime": 799.3339999914169,
        "transferSize": 8438,
        "resourceSize": 7764
        },
        {
        "resourceType": "Script",
        "statusCode": 200,
        "rendererStartTime": 537.4919999837875,
        "mimeType": "application/javascript",
        "finished": true,
        "networkEndTime": 555.7710000276566,
        "resourceSize": 684,
        "experimentalFromMainFrame": true,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/bb688357-0ef9c2f7e0d74bf7.js",
        "protocol": "h2",
        "priority": "Low",
        "networkRequestTime": 538.1780000329018,
        "transferSize": 1268,
        "entity": "vercel.app",
        "sessionTargetType": "page"
        },
        {
        "networkEndTime": 799.6110000014305,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/757-7fe35def4e5bdabf.js",
        "transferSize": 11914,
        "experimentalFromMainFrame": true,
        "rendererStartTime": 538.2639999985695,
        "statusCode": 200,
        "resourceSize": 31798,
        "resourceType": "Script",
        "finished": true,
        "entity": "vercel.app",
        "protocol": "h2",
        "priority": "Low",
        "sessionTargetType": "page",
        "mimeType": "application/javascript",
        "networkRequestTime": 538.910000026226
        },
        {
        "rendererStartTime": 539.0540000200272,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/211-2d0c8a3a6b43aa55.js",
        "experimentalFromMainFrame": true,
        "sessionTargetType": "page",
        "resourceType": "Script",
        "finished": true,
        "mimeType": "application/javascript",
        "priority": "Low",
        "entity": "vercel.app",
        "networkEndTime": 558.8519999980927,
        "statusCode": 200,
        "networkRequestTime": 539.5140000581741,
        "transferSize": 8511,
        "protocol": "h2",
        "resourceSize": 20088
        },
        {
        "networkEndTime": 588.2800000309944,
        "statusCode": 200,
        "finished": true,
        "resourceType": "Script",
        "resourceSize": 3938,
        "networkRequestTime": 540.1019999980927,
        "rendererStartTime": 539.6210000514984,
        "sessionTargetType": "page",
        "experimentalFromMainFrame": true,
        "priority": "Low",
        "protocol": "h2",
        "mimeType": "application/javascript",
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/app/layout-ced2ed8306eef850.js",
        "entity": "vercel.app",
        "transferSize": 2252
        },
        {
        "protocol": "h2",
        "experimentalFromMainFrame": true,
        "transferSize": 1546,
        "finished": true,
        "mimeType": "application/javascript",
        "resourceType": "Script",
        "priority": "Low",
        "networkEndTime": 558.25,
        "resourceSize": 1882,
        "entity": "vercel.app",
        "networkRequestTime": 541.1490000486374,
        "statusCode": 200,
        "rendererStartTime": 540.4900000095367,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/4b4758af-9f173e24f970537c.js",
        "sessionTargetType": "page"
        },
        {
        "entity": "vercel.app",
        "rendererStartTime": 541.1340000033379,
        "protocol": "h2",
        "finished": true,
        "priority": "Low",
        "transferSize": 1101,
        "statusCode": 200,
        "networkRequestTime": 541.6390000581741,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/99b1da55-c217fd0a550383d3.js",
        "experimentalFromMainFrame": true,
        "networkEndTime": 558.4520000219345,
        "resourceSize": 517,
        "sessionTargetType": "page",
        "resourceType": "Script",
        "mimeType": "application/javascript"
        },
        {
        "rendererStartTime": 541.7530000209808,
        "networkRequestTime": 542.307000041008,
        "priority": "Low",
        "experimentalFromMainFrame": true,
        "mimeType": "application/javascript",
        "statusCode": 200,
        "sessionTargetType": "page",
        "networkEndTime": 590.5950000286102,
        "finished": true,
        "protocol": "h2",
        "entity": "vercel.app",
        "transferSize": 131348,
        "resourceType": "Script",
        "resourceSize": 508186,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/05ee798f-b55416c10899a977.js"
        },
        {
        "rendererStartTime": 542.3560000061989,
        "sessionTargetType": "page",
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/a035d8d2-c11b080bc83da88d.js",
        "protocol": "h2",
        "statusCode": 200,
        "transferSize": 21746,
        "networkEndTime": 562.4620000123978,
        "experimentalFromMainFrame": true,
        "resourceSize": 51826,
        "mimeType": "application/javascript",
        "entity": "vercel.app",
        "priority": "Low",
        "resourceType": "Script",
        "networkRequestTime": 542.9000000357628,
        "finished": true
        },
        {
        "finished": true,
        "sessionTargetType": "page",
        "experimentalFromMainFrame": true,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/692-efea9ba6b073b923.js",
        "statusCode": 200,
        "protocol": "h2",
        "transferSize": 34547,
        "entity": "vercel.app",
        "resourceSize": 96377,
        "networkEndTime": 564.2530000209808,
        "networkRequestTime": 543.7500000596046,
        "rendererStartTime": 543.0270000100136,
        "mimeType": "application/javascript",
        "resourceType": "Script",
        "priority": "Low"
        },
        {
        "protocol": "h2",
        "finished": true,
        "statusCode": 200,
        "networkRequestTime": 544.2590000033379,
        "resourceSize": 19385,
        "experimentalFromMainFrame": true,
        "priority": "Low",
        "entity": "vercel.app",
        "sessionTargetType": "page",
        "networkEndTime": 573.6390000581741,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/602-495dba22fc4ec032.js",
        "mimeType": "application/javascript",
        "resourceType": "Script",
        "rendererStartTime": 543.70400005579,
        "transferSize": 9270
        },
        {
        "resourceSize": 21285,
        "resourceType": "Script",
        "transferSize": 6332,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/app/page-03971e22458c62b5.js",
        "sessionTargetType": "page",
        "experimentalFromMainFrame": true,
        "networkEndTime": 564.5880000591278,
        "rendererStartTime": 544.3259999752045,
        "priority": "Low",
        "entity": "vercel.app",
        "statusCode": 200,
        "mimeType": "application/javascript",
        "protocol": "h2",
        "finished": true,
        "networkRequestTime": 544.8100000023842
        }
        ],
        "type": "table"
        }
        },
        "input-image-alt": {
        "id": "input-image-alt",
        "title": "`<input type=\"image\">` elements have `[alt]` text",
        "description": "When an image is being used as an `<input>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn about input image alt text](https://dequeuniversity.com/rules/axe/4.9/input-image-alt).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "interactive": {
        "id": "interactive",
        "title": "Time to Interactive",
        "description": "Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/).",
        "score": 0.65,
        "scoreDisplayMode": "numeric",
        "displayValue": "6.0 s",
        "numericValue": 5989.7,
        "numericUnit": "millisecond"
        },
        "first-meaningful-paint": {
        "id": "first-meaningful-paint",
        "title": "First Meaningful Paint",
        "description": "First Meaningful Paint measures when the primary content of a page is visible. [Learn more about the First Meaningful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-meaningful-paint/).",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "displayValue": "0.9 s",
        "numericValue": 901,
        "numericUnit": "millisecond"
        },
        "legacy-javascript": {
        "id": "legacy-javascript",
        "title": "Avoid serving legacy JavaScript to modern browsers",
        "description": "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/articles/publish-modern-javascript)",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
        "debugData": {
        "metricSavings": {
        "LCP": 0,
        "FCP": 0
        },
        "type": "debugdata"
        },
        "headings": [],
        "overallSavingsMs": 0,
        "type": "opportunity",
        "overallSavingsBytes": 0,
        "items": [],
        "sortedBy": [
        "wastedBytes"
        ]
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
        },
        "geolocation-on-start": {
        "id": "geolocation-on-start",
        "title": "Avoids requesting the geolocation permission on page load",
        "description": "Users are mistrustful of or confused by sites that request their location without context. Consider tying the request to a user action instead. [Learn more about the geolocation permission](https://developer.chrome.com/docs/lighthouse/best-practices/geolocation-on-start/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "items": [],
        "type": "table",
        "headings": []
        }
        },
        "bootup-time": {
        "id": "bootup-time",
        "title": "Reduce JavaScript execution time",
        "description": "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to reduce Javascript execution time](https://developer.chrome.com/docs/lighthouse/performance/bootup-time/).",
        "score": 0,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "2.2 s",
        "details": {
        "type": "table",
        "summary": {
        "wastedMs": 2226.4839999999895
        },
        "sortedBy": [
        "total"
        ],
        "items": [
        {
        "total": 4100.3480000000045,
        "scripting": 82.564,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/a035d8d2-c11b080bc83da88d.js",
        "scriptParseCompile": 3.668
        },
        {
        "scriptParseCompile": 6.744,
        "scripting": 1569.6719999999896,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/139-3d99f059cd7e9ba0.js",
        "total": 1663.2719999999895
        },
        {
        "scripting": 10.36399999999999,
        "url": "https://harshit-delta.vercel.app/",
        "total": 311.25599999999986,
        "scriptParseCompile": 3.224
        },
        {
        "scriptParseCompile": 1.508,
        "total": 303.62,
        "scripting": 192.24400000000003,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/app/page-03971e22458c62b5.js"
        },
        {
        "url": "Unattributable",
        "scripting": 0.43200000000000016,
        "total": 274.2720000000019,
        "scriptParseCompile": 0
        },
        {
        "scriptParseCompile": 5.544,
        "scripting": 68.776,
        "total": 144.28800000000004,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/692-efea9ba6b073b923.js"
        },
        {
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/757-7fe35def4e5bdabf.js",
        "scriptParseCompile": 2.62,
        "scripting": 133.73200000000008,
        "total": 136.73200000000008
        },
        {
        "total": 116.92800000000003,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/webpack-3daa52cd204158e5.js",
        "scriptParseCompile": 0.488,
        "scripting": 116.04400000000003
        },
        {
        "total": 51.08399999999998,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/2443530c-6284f80f93684a73.js",
        "scripting": 19.235999999999976,
        "scriptParseCompile": 9.624
        }
        ],
        "headings": [
        {
        "key": "url",
        "label": "URL",
        "valueType": "url"
        },
        {
        "valueType": "ms",
        "granularity": 1,
        "key": "total",
        "label": "Total CPU Time"
        },
        {
        "granularity": 1,
        "key": "scripting",
        "label": "Script Evaluation",
        "valueType": "ms"
        },
        {
        "label": "Script Parse",
        "granularity": 1,
        "valueType": "ms",
        "key": "scriptParseCompile"
        }
        ]
        },
        "numericValue": 2226.4839999999895,
        "numericUnit": "millisecond"
        },
        "third-party-cookies": {
        "id": "third-party-cookies",
        "title": "Avoids third-party cookies",
        "description": "Support for third-party cookies will be removed in a future version of Chrome. [Learn more about phasing out third-party cookies](https://developer.chrome.com/en/docs/privacy-sandbox/third-party-cookie-phase-out/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "headings": [],
        "type": "table",
        "items": []
        }
        },
        "logical-tab-order": {
        "id": "logical-tab-order",
        "title": "The page has a logical tab order",
        "description": "Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more about logical tab ordering](https://developer.chrome.com/docs/lighthouse/accessibility/logical-tab-order/).",
        "score": null,
        "scoreDisplayMode": "manual"
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
        "identical-links-same-purpose": {
        "id": "identical-links-same-purpose",
        "title": "Identical links have the same purpose.",
        "description": "Links with the same destination should have the same description, to help users understand the link's purpose and decide whether to follow it. [Learn more about identical links](https://dequeuniversity.com/rules/axe/4.9/identical-links-same-purpose).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "aria-command-name": {
        "id": "aria-command-name",
        "title": "`button`, `link`, and `menuitem` elements have accessible names",
        "description": "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to make command elements more accessible](https://dequeuniversity.com/rules/axe/4.9/aria-command-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "metrics": {
        "id": "metrics",
        "title": "Metrics",
        "description": "Collects all available metrics.",
        "score": 1,
        "scoreDisplayMode": "informative",
        "details": {
        "items": [
        {
        "observedFirstVisualChange": 556,
        "interactive": 5990,
        "observedTraceEnd": 3187,
        "firstMeaningfulPaint": 901,
        "observedFirstContentfulPaint": 553,
        "observedLoad": 857,
        "observedFirstMeaningfulPaint": 553,
        "cumulativeLayoutShift": 0,
        "totalBlockingTime": 848,
        "observedFirstContentfulPaintTs": 302765368179,
        "observedLargestContentfulPaintAllFramesTs": 302766587146,
        "observedLastVisualChangeTs": 302767988383,
        "observedSpeedIndexTs": 302765616391,
        "lcpLoadEnd": 1854,
        "observedDomContentLoadedTs": 302765258492,
        "observedSpeedIndex": 801,
        "observedFirstMeaningfulPaintTs": 302765368179,
        "observedNavigationStartTs": 302764815383,
        "observedFirstPaintTs": 302765368179,
        "observedFirstContentfulPaintAllFrames": 553,
        "observedFirstVisualChangeTs": 302765371383,
        "speedIndex": 3376,
        "observedLastVisualChange": 3173,
        "lcpLoadStart": 1051,
        "observedNavigationStart": 0,
        "largestContentfulPaint": 5332,
        "observedCumulativeLayoutShiftMainFrame": 0,
        "observedFirstPaint": 553,
        "observedTimeOriginTs": 302764815383,
        "observedDomContentLoaded": 443,
        "observedLargestContentfulPaintTs": 302766587146,
        "firstContentfulPaint": 901,
        "timeToFirstByte": 601,
        "observedFirstContentfulPaintAllFramesTs": 302765368179,
        "cumulativeLayoutShiftMainFrame": 0,
        "maxPotentialFID": 1082,
        "observedTimeOrigin": 0,
        "observedCumulativeLayoutShift": 0,
        "observedLoadTs": 302765672476,
        "observedLargestContentfulPaintAllFrames": 1772,
        "observedTraceEndTs": 302768002603,
        "observedLargestContentfulPaint": 1772
        },
        {
        "lcpInvalidated": false
        }
        ],
        "type": "debugdata"
        },
        "numericValue": 5990,
        "numericUnit": "millisecond"
        },
        "td-has-header": {
        "id": "td-has-header",
        "title": "`<td>` elements in a large `<table>` have one or more table headers.",
        "description": "Screen readers have features to make navigating tables easier. Ensuring that `<td>` elements in a large table (3 or more cells in width and height) have an associated table header may improve the experience for screen reader users. [Learn more about table headers](https://dequeuniversity.com/rules/axe/4.9/td-has-header).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "duplicated-javascript": {
        "id": "duplicated-javascript",
        "title": "Remove duplicate modules in JavaScript bundles",
        "description": "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0,
        "debugData": {
        "type": "debugdata",
        "metricSavings": {
        "LCP": 0,
        "FCP": 0
        }
        },
        "headings": [],
        "type": "opportunity",
        "sortedBy": [
        "wastedBytes"
        ]
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
        },
        "modern-image-formats": {
        "id": "modern-image-formats",
        "title": "Serve images in next-gen formats",
        "description": "Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more about modern image formats](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
        "overallSavingsBytes": 0,
        "debugData": {
        "type": "debugdata",
        "metricSavings": {
        "LCP": 0,
        "FCP": 0
        }
        },
        "headings": [],
        "type": "opportunity",
        "sortedBy": [
        "wastedBytes"
        ],
        "overallSavingsMs": 0,
        "items": []
        },
        "warnings": [],
        "numericValue": 0,
        "numericUnit": "millisecond"
        },
        "image-aspect-ratio": {
        "id": "image-aspect-ratio",
        "title": "Displays images with incorrect aspect ratio",
        "description": "Image display dimensions should match natural aspect ratio. [Learn more about image aspect ratio](https://developer.chrome.com/docs/lighthouse/best-practices/image-aspect-ratio/).",
        "score": 0,
        "scoreDisplayMode": "binary",
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
        "valueType": "text",
        "key": "displayedAspectRatio",
        "label": "Aspect Ratio (Displayed)"
        },
        {
        "label": "Aspect Ratio (Actual)",
        "valueType": "text",
        "key": "actualAspectRatio"
        }
        ],
        "items": [
        {
        "doRatiosMatch": false,
        "node": {
        "boundingRect": {
        "right": 331,
        "bottom": 2721,
        "width": 100,
        "left": 231,
        "height": 100,
        "top": 2621
        },
        "lhId": "1-50-IMG",
        "path": "1,HTML,1,BODY,2,DIV,3,SECTION,1,DIV,0,DIV,5,DIV,0,DIV,0,IMG",
        "selector": "div.flex > div.relative > div.flex > img.w-auto",
        "snippet": "<img alt=\"Flask\" loading=\"lazy\" width=\"112\" height=\"100\" decoding=\"async\" data-nimg=\"1\" class=\"w-auto h-[100px] rounded-lg\" style=\"color:transparent\" srcset=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflask.1956c9d5.png&amp;w=128&amp;q=75…\" src=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflask.1956c9d5.png&amp;w=256&amp;q=75\">",
        "type": "node",
        "nodeLabel": "Flask"
        },
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fflask.1956c9d5.png&w=256&q=75",
        "actualAspectRatio": "256 x 229\n        (1.12)",
        "displayedAspectRatio": "100 x 100\n        (1.00)"
        }
        ],
        "type": "table"
        }
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
        "layout-shifts": {
        "id": "layout-shifts",
        "title": "Avoid large layout shifts",
        "description": "These are the largest layout shifts observed on the page. Each table item represents a single layout shift, and shows the element that shifted the most. Below each item are possible root causes that led to the layout shift. Some of these layout shifts may not be included in the CLS metric value due to [windowing](https://web.dev/articles/cls#what_is_cls). [Learn how to improve CLS](https://web.dev/articles/optimize-cls)",
        "score": null,
        "scoreDisplayMode": "notApplicable",
        "details": {
        "headings": [],
        "type": "table",
        "items": []
        }
        },
        "doctype": {
        "id": "doctype",
        "title": "Page has the HTML doctype",
        "description": "Specifying a doctype prevents the browser from switching to quirks-mode. [Learn more about the doctype declaration](https://developer.chrome.com/docs/lighthouse/best-practices/doctype/).",
        "score": 1,
        "scoreDisplayMode": "binary"
        },
        "aria-roles": {
        "id": "aria-roles",
        "title": "`[role]` values are valid",
        "description": "ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more about valid ARIA roles](https://dequeuniversity.com/rules/axe/4.9/aria-roles).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "items": [],
        "type": "table",
        "headings": []
        }
        },
        "total-blocking-time": {
        "id": "total-blocking-time",
        "title": "Total Blocking Time",
        "description": "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
        "score": 0.34,
        "scoreDisplayMode": "numeric",
        "displayValue": "850 ms",
        "numericValue": 848,
        "numericUnit": "millisecond"
        },
        "custom-controls-roles": {
        "id": "custom-controls-roles",
        "title": "Custom controls have ARIA roles",
        "description": "Custom interactive controls have appropriate ARIA roles. [Learn how to add roles to custom controls](https://developer.chrome.com/docs/lighthouse/accessibility/custom-control-roles/).",
        "score": null,
        "scoreDisplayMode": "manual"
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
        "network-server-latency": {
        "id": "network-server-latency",
        "title": "Server Backend Latencies",
        "description": "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more about server response time](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
        "score": 1,
        "scoreDisplayMode": "informative",
        "displayValue": "0 ms",
        "details": {
        "headings": [
        {
        "valueType": "text",
        "key": "origin",
        "label": "URL"
        },
        {
        "label": "Time Spent",
        "key": "serverResponseTime",
        "granularity": 1,
        "valueType": "ms"
        }
        ],
        "sortedBy": [
        "serverResponseTime"
        ],
        "type": "table",
        "items": [
        {
        "origin": "https://harshit-delta.vercel.app",
        "serverResponseTime": 1
        }
        ]
        },
        "numericValue": 1,
        "numericUnit": "millisecond"
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
        "resourceBytes": 96459,
        "name": "https://harshit-delta.vercel.app/_next/static/chunks/139-3d99f059cd7e9ba0.js",
        "unusedBytes": 36318
        },
        {
        "resourceBytes": 417,
        "unusedBytes": 0,
        "name": "https://harshit-delta.vercel.app/_next/static/chunks/main-app-c0fde4ac3a0b3bab.js"
        },
        {
        "unusedBytes": 52825,
        "resourceBytes": 160634,
        "name": "https://harshit-delta.vercel.app/_next/static/chunks/2443530c-6284f80f93684a73.js"
        },
        {
        "name": "https://harshit-delta.vercel.app/",
        "resourceBytes": 6936,
        "children": [
        {
        "resourceBytes": 43,
        "name": "(inline) (self.__next_f=…",
        "unusedBytes": 0
        },
        {
        "name": "(inline) self.__next_f.p…",
        "unusedBytes": 0,
        "resourceBytes": 599
        },
        {
        "name": "(inline) self.__next_f.p…",
        "unusedBytes": 0,
        "resourceBytes": 602
        },
        {
        "resourceBytes": 191,
        "name": "(inline) self.__next_f.p…",
        "unusedBytes": 0
        },
        {
        "unusedBytes": 0,
        "name": "(inline) self.__next_f.p…",
        "resourceBytes": 587
        },
        {
        "unusedBytes": 0,
        "resourceBytes": 588,
        "name": "(inline) self.__next_f.p…"
        },
        {
        "resourceBytes": 574,
        "unusedBytes": 0,
        "name": "(inline) self.__next_f.p…"
        },
        {
        "name": "(inline) self.__next_f.p…",
        "resourceBytes": 185,
        "unusedBytes": 0
        },
        {
        "unusedBytes": 0,
        "name": "(inline) self.__next_f.p…",
        "resourceBytes": 2955
        },
        {
        "unusedBytes": 0,
        "name": "(inline) self.__next_f.p…",
        "resourceBytes": 612
        }
        ]
        },
        {
        "unusedBytes": 202,
        "resourceBytes": 3659,
        "name": "https://harshit-delta.vercel.app/_next/static/chunks/webpack-3daa52cd204158e5.js"
        },
        {
        "unusedBytes": 0,
        "name": "https://harshit-delta.vercel.app/_next/static/chunks/bb688357-0ef9c2f7e0d74bf7.js",
        "resourceBytes": 684
        },
        {
        "name": "https://harshit-delta.vercel.app/_next/static/chunks/4b4758af-9f173e24f970537c.js",
        "resourceBytes": 1882,
        "unusedBytes": 1747
        },
        {
        "resourceBytes": 517,
        "unusedBytes": 0,
        "name": "https://harshit-delta.vercel.app/_next/static/chunks/99b1da55-c217fd0a550383d3.js"
        },
        {
        "unusedBytes": 0,
        "name": "https://harshit-delta.vercel.app/_next/static/chunks/211-2d0c8a3a6b43aa55.js",
        "resourceBytes": 20088
        },
        {
        "unusedBytes": 28842,
        "resourceBytes": 51826,
        "name": "https://harshit-delta.vercel.app/_next/static/chunks/a035d8d2-c11b080bc83da88d.js"
        },
        {
        "name": "https://harshit-delta.vercel.app/_next/static/chunks/app/page-03971e22458c62b5.js",
        "resourceBytes": 21283,
        "unusedBytes": 963
        },
        {
        "unusedBytes": 53888,
        "name": "https://harshit-delta.vercel.app/_next/static/chunks/692-efea9ba6b073b923.js",
        "resourceBytes": 96377
        },
        {
        "unusedBytes": 8141,
        "resourceBytes": 19385,
        "name": "https://harshit-delta.vercel.app/_next/static/chunks/602-495dba22fc4ec032.js"
        },
        {
        "unusedBytes": 102,
        "resourceBytes": 3938,
        "name": "https://harshit-delta.vercel.app/_next/static/chunks/app/layout-ced2ed8306eef850.js"
        },
        {
        "name": "https://harshit-delta.vercel.app/_next/static/chunks/05ee798f-b55416c10899a977.js",
        "unusedBytes": 242583,
        "resourceBytes": 508186
        },
        {
        "resourceBytes": 31798,
        "name": "https://harshit-delta.vercel.app/_next/static/chunks/757-7fe35def4e5bdabf.js",
        "unusedBytes": 10221
        }
        ],
        "type": "treemap-data"
        }
        },
        "object-alt": {
        "id": "object-alt",
        "title": "`<object>` elements have alternate text",
        "description": "Screen readers cannot translate non-text content. Adding alternate text to `<object>` elements helps screen readers convey meaning to users. [Learn more about alt text for `object` elements](https://dequeuniversity.com/rules/axe/4.9/object-alt).",
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
        "hreflang": {
        "id": "hreflang",
        "title": "Document has a valid `hreflang`",
        "description": "hreflang links tell search engines what version of a page they should list in search results for a given language or region. [Learn more about `hreflang`](https://developer.chrome.com/docs/lighthouse/seo/hreflang/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "headings": [],
        "items": [],
        "type": "table"
        }
        },
        "aria-conditional-attr": {
        "id": "aria-conditional-attr",
        "title": "ARIA attributes are used as specified for the element's role",
        "description": "Some ARIA attributes are only allowed on an element under certain conditions. [Learn more about conditional ARIA attributes](https://dequeuniversity.com/rules/axe/4.9/aria-conditional-attr).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
        "items": [],
        "type": "table",
        "headings": []
        }
        },
        "uses-responsive-images": {
        "id": "uses-responsive-images",
        "title": "Properly size images",
        "description": "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn how to size images](https://developer.chrome.com/docs/lighthouse/performance/uses-responsive-images/).",
        "score": 0,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "Potential savings of 185 KiB",
        "details": {
        "overallSavingsBytes": 189564,
        "headings": [
        {
        "key": "node",
        "valueType": "node"
        },
        {
        "key": "url",
        "label": "URL",
        "valueType": "url"
        },
        {
        "valueType": "bytes",
        "key": "totalBytes",
        "label": "Resource Size"
        },
        {
        "key": "wastedBytes",
        "valueType": "bytes",
        "label": "Potential Savings"
        }
        ],
        "overallSavingsMs": 1050,
        "debugData": {
        "type": "debugdata",
        "metricSavings": {
        "LCP": 1050,
        "FCP": 0
        }
        },
        "sortedBy": [
        "wastedBytes"
        ],
        "type": "opportunity",
        "items": [
        {
        "node": {
        "path": "1,HTML,1,BODY,2,DIV,2,SECTION,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,4,DIV,0,DIV,0,DIV,0,IMG",
        "type": "node",
        "lhId": "1-44-IMG",
        "selector": "div.relative > div.col-span-6 > div.bg-white > img.object-cover",
        "boundingRect": {
        "right": 266,
        "left": -54,
        "height": 200,
        "top": 2107,
        "bottom": 2307,
        "width": 320
        },
        "snippet": "<img alt=\"\" fetchpriority=\"high\" width=\"441\" height=\"261\" decoding=\"async\" data-nimg=\"1\" class=\"object-cover\" style=\"color:transparent\" srcset=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.22f50a8f.png&amp;w=640&amp;q=75 1x,…\" src=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.22f50a8f.png&amp;w=1080&amp;q=75\">",
        "nodeLabel": "div.relative > div.col-span-6 > div.bg-white > img.object-cover"
        },
        "totalBytes": 77084,
        "wastedBytes": 56359,
        "wastedPercent": 73.11385459533608,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.22f50a8f.png&w=1080&q=75"
        },
        {
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.66367100.png&w=1080&q=75",
        "wastedBytes": 52060,
        "wastedPercent": 73.11385459533608,
        "totalBytes": 71204,
        "node": {
        "selector": "div.relative > div.col-span-6 > div.bg-white > img.object-cover",
        "lhId": "1-40-IMG",
        "boundingRect": {
        "bottom": 1483,
        "width": 320,
        "height": 200,
        "top": 1283,
        "left": -54,
        "right": 266
        },
        "nodeLabel": "div.relative > div.col-span-6 > div.bg-white > img.object-cover",
        "type": "node",
        "snippet": "<img alt=\"\" fetchpriority=\"high\" width=\"441\" height=\"261\" decoding=\"async\" data-nimg=\"1\" class=\"object-cover\" style=\"color:transparent\" srcset=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.66367100.png&amp;w=640&amp;q=75 1x,…\" src=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.66367100.png&amp;w=1080&amp;q=75\">",
        "path": "1,HTML,1,BODY,2,DIV,2,SECTION,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,IMG"
        }
        },
        {
        "wastedPercent": 73.11385459533608,
        "totalBytes": 33914,
        "node": {
        "boundingRect": {
        "right": 266,
        "top": 1695,
        "height": 200,
        "bottom": 1895,
        "left": -54,
        "width": 320
        },
        "type": "node",
        "lhId": "1-42-IMG",
        "snippet": "<img alt=\"\" fetchpriority=\"high\" width=\"441\" height=\"261\" decoding=\"async\" data-nimg=\"1\" class=\"object-cover\" style=\"color:transparent\" srcset=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.3aa471af.png&amp;w=640&amp;q=75 1x,…\" src=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.3aa471af.png&amp;w=1080&amp;q=75\">",
        "path": "1,HTML,1,BODY,2,DIV,2,SECTION,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,2,DIV,0,DIV,0,DIV,0,IMG",
        "selector": "div.relative > div.col-span-6 > div.bg-white > img.object-cover",
        "nodeLabel": "div.relative > div.col-span-6 > div.bg-white > img.object-cover"
        },
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.3aa471af.png&w=1080&q=75",
        "wastedBytes": 24796
        },
        {
        "totalBytes": 31212,
        "wastedBytes": 22824,
        "wastedPercent": 73.12556458897923,
        "node": {
        "type": "node",
        "snippet": "<img alt=\"\" fetchpriority=\"high\" width=\"441\" height=\"261\" decoding=\"async\" data-nimg=\"1\" class=\"object-cover\" style=\"color:transparent\" srcset=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.602bb288.png&amp;w=640&amp;q=75 1x,…\" src=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.602bb288.png&amp;w=1080&amp;q=75\">",
        "boundingRect": {
        "top": 1489,
        "height": 170,
        "width": 320,
        "right": 266,
        "left": -54,
        "bottom": 1659
        },
        "selector": "div.relative > div.col-span-6 > div.bg-white > img.object-cover",
        "lhId": "1-41-IMG",
        "nodeLabel": "div.relative > div.col-span-6 > div.bg-white > img.object-cover",
        "path": "1,HTML,1,BODY,2,DIV,2,SECTION,1,DIV,0,DIV,1,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,IMG"
        },
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.602bb288.png&w=1080&q=75"
        },
        {
        "wastedBytes": 18022,
        "totalBytes": 24210,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fav2.de3457db.png&w=1080&q=75",
        "wastedPercent": 74.44135802469137,
        "node": {
        "boundingRect": {
        "left": 102,
        "top": 3495,
        "height": 208,
        "right": 310,
        "width": 208,
        "bottom": 3703
        },
        "selector": "section.safe-x-padding > div.h-full > div.relative > img.w-52",
        "nodeLabel": "section.safe-x-padding > div.h-full > div.relative > img.w-52",
        "snippet": "<img alt=\"\" fetchpriority=\"high\" width=\"530\" height=\"530\" decoding=\"async\" data-nimg=\"1\" class=\"w-52 h-52 md:w-[330px] md:h-[330px] lg:w-[530px] lg:h-[530px] rounded-full…\" style=\"color:transparent;opacity:0;transform:translateY(50px) translateZ(0)\" srcset=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fav2.de3457db.png&amp;w=640&amp;q=75 1…\" src=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fav2.de3457db.png&amp;w=1080&amp;q=75\">",
        "type": "node",
        "lhId": "1-55-IMG",
        "path": "1,HTML,1,BODY,2,DIV,4,SECTION,1,DIV,0,DIV,1,IMG"
        }
        },
        {
        "node": {
        "lhId": "1-32-IMG",
        "selector": "div.relative > div.avator > div.relative > img.w-[280px]",
        "snippet": "<img alt=\"\" aria-label=\"Harshit's Avatar\" fetchpriority=\"high\" width=\"480\" height=\"480\" decoding=\"async\" data-nimg=\"1\" class=\"w-[280px] h-[280px] md:w-[330px] md:h-[330px] lg:w-[480px] lg:h-[480px] ab…\" style=\"color: transparent; opacity: 1; transform: none;\" srcset=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fav1.730fe5ec.png&amp;w=640&amp;q=75 1…\" src=\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fav1.730fe5ec.png&amp;w=1080&amp;q=75\">",
        "boundingRect": {
        "width": 280,
        "left": 66,
        "bottom": 408,
        "top": 128,
        "height": 280,
        "right": 346
        },
        "type": "node",
        "path": "1,HTML,1,BODY,2,DIV,1,SECTION,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,IMG",
        "nodeLabel": "Harshit's Avatar"
        },
        "wastedPercent": 53.68441358024691,
        "wastedBytes": 15503,
        "url": "https://harshit-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fav1.730fe5ec.png&w=1080&q=75",
        "totalBytes": 28878
        }
        ]
        },
        "numericValue": 1050,
        "numericUnit": "millisecond"
        },
        "valid-lang": {
        "id": "valid-lang",
        "title": "`[lang]` attributes have a valid value",
        "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn how to use the `lang` attribute](https://dequeuniversity.com/rules/axe/4.9/valid-lang).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "mainthread-work-breakdown": {
        "id": "mainthread-work-breakdown",
        "title": "Minimize main-thread work",
        "description": "Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to minimize main-thread work](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/)",
        "score": 0,
        "scoreDisplayMode": "metricSavings",
        "displayValue": "7.2 s",
        "details": {
        "type": "table",
        "sortedBy": [
        "duration"
        ],
        "headings": [
        {
        "valueType": "text",
        "label": "Category",
        "key": "groupLabel"
        },
        {
        "valueType": "ms",
        "granularity": 1,
        "label": "Time Spent",
        "key": "duration"
        }
        ],
        "items": [
        {
        "groupLabel": "Other",
        "duration": 4387.896000000003,
        "group": "other"
        },
        {
        "duration": 2199.759999999992,
        "group": "scriptEvaluation",
        "groupLabel": "Script Evaluation"
        },
        {
        "group": "styleLayout",
        "duration": 212.16799999999995,
        "groupLabel": "Style & Layout"
        },
        {
        "group": "garbageCollection",
        "duration": 159.22400000000002,
        "groupLabel": "Garbage Collection"
        },
        {
        "group": "paintCompositeRender",
        "duration": 101.67600000000132,
        "groupLabel": "Rendering"
        },
        {
        "duration": 67.78,
        "groupLabel": "Script Parsing & Compilation",
        "group": "scriptParseCompile"
        },
        {
        "group": "parseHTML",
        "duration": 28.535999999999994,
        "groupLabel": "Parse HTML & CSS"
        }
        ]
        },
        "numericValue": 7157.039999999996,
        "numericUnit": "millisecond"
        },
        "table-duplicate-name": {
        "id": "table-duplicate-name",
        "title": "Tables have different content in the summary attribute and `<caption>`.",
        "description": "The summary attribute should describe the table structure, while `<caption>` should have the onscreen title. Accurate table mark-up helps users of screen readers. [Learn more about summary and caption](https://dequeuniversity.com/rules/axe/4.9/table-duplicate-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "aria-required-parent": {
        "id": "aria-required-parent",
        "title": "`[role]`s are contained by their required parent element",
        "description": "Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more about ARIA roles and required parent element](https://dequeuniversity.com/rules/axe/4.9/aria-required-parent).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
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
        "main-thread-tasks": {
        "id": "main-thread-tasks",
        "title": "Tasks",
        "description": "Lists the toplevel main thread tasks that executed during page load.",
        "score": 1,
        "scoreDisplayMode": "informative",
        "details": {
        "items": [
        {
        "duration": 20.178,
        "startTime": 331.433
        },
        {
        "startTime": 351.894,
        "duration": 6.706
        },
        {
        "duration": 21.362,
        "startTime": 443.003
        },
        {
        "startTime": 467.886,
        "duration": 29.503
        },
        {
        "duration": 60.695,
        "startTime": 497.407
        },
        {
        "duration": 7.752,
        "startTime": 609.722
        },
        {
        "duration": 5.029,
        "startTime": 771.039
        },
        {
        "duration": 34.168,
        "startTime": 802.515
        },
        {
        "duration": 12.781,
        "startTime": 836.694
        },
        {
        "duration": 5.153,
        "startTime": 850.481
        },
        {
        "startTime": 857.412,
        "duration": 6.269
        },
        {
        "startTime": 864.914,
        "duration": 6.456
        },
        {
        "duration": 5.18,
        "startTime": 871.373
        },
        {
        "duration": 5.204,
        "startTime": 876.849
        },
        {
        "duration": 5.524,
        "startTime": 882.059
        },
        {
        "duration": 5.947,
        "startTime": 887.591
        },
        {
        "startTime": 893.769,
        "duration": 8.432
        },
        {
        "duration": 5.177,
        "startTime": 902.211
        },
        {
        "startTime": 907.631,
        "duration": 270.402
        },
        {
        "duration": 95.624,
        "startTime": 1178.062
        },
        {
        "duration": 14.853,
        "startTime": 1273.894
        },
        {
        "startTime": 1288.8,
        "duration": 23.895
        },
        {
        "duration": 8.744,
        "startTime": 1312.882
        },
        {
        "duration": 15.926,
        "startTime": 1321.659
        },
        {
        "startTime": 1337.66,
        "duration": 10.482
        },
        {
        "duration": 9.963,
        "startTime": 1348.17
        },
        {
        "duration": 10.108,
        "startTime": 1363.667
        },
        {
        "duration": 9.892,
        "startTime": 1378.868
        },
        {
        "duration": 9.856,
        "startTime": 1392.309
        },
        {
        "startTime": 1407.104,
        "duration": 10.192
        },
        {
        "duration": 9.614,
        "startTime": 1423.797
        },
        {
        "duration": 10.123,
        "startTime": 1440.458
        },
        {
        "startTime": 1457.1,
        "duration": 9.782
        },
        {
        "duration": 9.033,
        "startTime": 1473.775
        },
        {
        "duration": 9.274,
        "startTime": 1490.434
        },
        {
        "duration": 9.983,
        "startTime": 1507.076
        },
        {
        "duration": 9.645,
        "startTime": 1523.758
        },
        {
        "duration": 10.14,
        "startTime": 1540.433
        },
        {
        "duration": 10.514,
        "startTime": 1557.075
        },
        {
        "duration": 9.904,
        "startTime": 1573.77
        },
        {
        "startTime": 1590.434,
        "duration": 10.112
        },
        {
        "duration": 9.65,
        "startTime": 1607.073
        },
        {
        "startTime": 1623.743,
        "duration": 10.324
        },
        {
        "startTime": 1640.431,
        "duration": 9.494
        },
        {
        "duration": 10.525,
        "startTime": 1657.163
        },
        {
        "duration": 9.701,
        "startTime": 1673.73
        },
        {
        "duration": 10.198,
        "startTime": 1690.443
        },
        {
        "startTime": 1707.137,
        "duration": 10.442
        },
        {
        "duration": 12.504,
        "startTime": 1723.777
        },
        {
        "duration": 10.563,
        "startTime": 1740.388
        },
        {
        "duration": 11.783,
        "startTime": 1757.071
        },
        {
        "startTime": 1773.718,
        "duration": 8.589
        },
        {
        "startTime": 1790.378,
        "duration": 8.086
        },
        {
        "duration": 8.665,
        "startTime": 1807.063
        },
        {
        "startTime": 1823.74,
        "duration": 8.175
        },
        {
        "duration": 8.856,
        "startTime": 1840.404
        },
        {
        "duration": 8.275,
        "startTime": 1857.102
        },
        {
        "duration": 10.631,
        "startTime": 1874.908
        },
        {
        "duration": 7.921,
        "startTime": 1890.424
        },
        {
        "duration": 8.051,
        "startTime": 1907.091
        },
        {
        "duration": 8.861,
        "startTime": 1923.809
        },
        {
        "duration": 7.668,
        "startTime": 1940.394
        },
        {
        "duration": 8.156,
        "startTime": 1957.233
        },
        {
        "startTime": 1973.845,
        "duration": 7.77
        },
        {
        "duration": 7.782,
        "startTime": 1990.369
        },
        {
        "startTime": 2007.054,
        "duration": 8.367
        },
        {
        "duration": 7.704,
        "startTime": 2023.721
        },
        {
        "duration": 7.814,
        "startTime": 2040.395
        },
        {
        "duration": 7.951,
        "startTime": 2057.032
        },
        {
        "startTime": 2073.714,
        "duration": 9.241
        },
        {
        "startTime": 2090.342,
        "duration": 9.155
        },
        {
        "duration": 7.894,
        "startTime": 2107.053
        },
        {
        "duration": 8.259,
        "startTime": 2123.756
        },
        {
        "duration": 7.806,
        "startTime": 2140.367
        },
        {
        "startTime": 2157.026,
        "duration": 7.628
        },
        {
        "startTime": 2173.715,
        "duration": 7.632
        },
        {
        "duration": 8.184,
        "startTime": 2190.378
        },
        {
        "duration": 8.362,
        "startTime": 2207.068
        },
        {
        "duration": 8.743,
        "startTime": 2223.733
        },
        {
        "duration": 9.063,
        "startTime": 2240.383
        },
        {
        "duration": 8.306,
        "startTime": 2257.151
        },
        {
        "duration": 8.055,
        "startTime": 2273.711
        },
        {
        "startTime": 2290.37,
        "duration": 7.786
        },
        {
        "duration": 7.991,
        "startTime": 2307.103
        },
        {
        "duration": 7.945,
        "startTime": 2323.726
        },
        {
        "duration": 8.162,
        "startTime": 2340.359
        },
        {
        "duration": 7.851,
        "startTime": 2357.063
        },
        {
        "duration": 8.572,
        "startTime": 2373.7
        },
        {
        "startTime": 2390.37,
        "duration": 7.699
        },
        {
        "duration": 7.775,
        "startTime": 2407.053
        },
        {
        "startTime": 2423.716,
        "duration": 7.962
        },
        {
        "duration": 8.056,
        "startTime": 2440.358
        },
        {
        "duration": 8.51,
        "startTime": 2457.172
        },
        {
        "duration": 7.799,
        "startTime": 2473.748
        },
        {
        "duration": 7.772,
        "startTime": 2490.379
        },
        {
        "duration": 7.721,
        "startTime": 2507.042
        },
        {
        "duration": 8.106,
        "startTime": 2523.756
        },
        {
        "startTime": 2540.382,
        "duration": 8.085
        },
        {
        "duration": 9.087,
        "startTime": 2557.024
        },
        {
        "startTime": 2573.691,
        "duration": 9.155
        },
        {
        "startTime": 2590.361,
        "duration": 8.186
        },
        {
        "duration": 9.773,
        "startTime": 2607.005
        },
        {
        "duration": 9.475,
        "startTime": 2623.676
        },
        {
        "duration": 8.103,
        "startTime": 2640.402
        },
        {
        "duration": 10.967,
        "startTime": 2657.043
        },
        {
        "duration": 8.156,
        "startTime": 2673.71
        },
        {
        "duration": 7.968,
        "startTime": 2690.427
        },
        {
        "startTime": 2707.059,
        "duration": 7.868
        },
        {
        "duration": 7.943,
        "startTime": 2723.718
        },
        {
        "startTime": 2740.409,
        "duration": 8.339
        },
        {
        "duration": 8.187,
        "startTime": 2757.062
        },
        {
        "duration": 8.159,
        "startTime": 2773.722
        },
        {
        "duration": 7.88,
        "startTime": 2790.373
        },
        {
        "duration": 8.837,
        "startTime": 2807.037
        },
        {
        "startTime": 2823.731,
        "duration": 7.606
        },
        {
        "duration": 8.851,
        "startTime": 2840.403
        },
        {
        "duration": 8.461,
        "startTime": 2857.145
        },
        {
        "duration": 8.696,
        "startTime": 2873.701
        },
        {
        "startTime": 2890.472,
        "duration": 7.953
        },
        {
        "startTime": 2907.006,
        "duration": 8.463
        },
        {
        "duration": 8.028,
        "startTime": 2923.708
        },
        {
        "startTime": 2940.374,
        "duration": 12.017
        },
        {
        "duration": 16.259,
        "startTime": 2957.048
        },
        {
        "duration": 7.858,
        "startTime": 2973.672
        },
        {
        "startTime": 2990.346,
        "duration": 10.471
        },
        {
        "duration": 7.692,
        "startTime": 3007.031
        },
        {
        "startTime": 3023.663,
        "duration": 9.268
        },
        {
        "startTime": 3040.376,
        "duration": 50.609
        },
        {
        "startTime": 3094.808,
        "duration": 8.922
        },
        {
        "duration": 8.501,
        "startTime": 3109.21
        },
        {
        "startTime": 3123.802,
        "duration": 10.211
        },
        {
        "startTime": 3140.507,
        "duration": 9.164
        },
        {
        "duration": 7.873,
        "startTime": 3160.682
        },
        {
        "duration": 8.643,
        "startTime": 3175.932
        }
        ],
        "headings": [
        {
        "granularity": 1,
        "valueType": "ms",
        "key": "startTime",
        "label": "Start Time"
        },
        {
        "label": "End Time",
        "valueType": "ms",
        "key": "duration",
        "granularity": 1
        }
        ],
        "type": "table"
        }
        },
        "no-document-write": {
        "id": "no-document-write",
        "title": "Avoids `document.write()`",
        "description": "For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn how to avoid document.write()](https://developer.chrome.com/docs/lighthouse/best-practices/no-document-write/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
        "items": [],
        "type": "table",
        "headings": []
        }
        },
        "offscreen-content-hidden": {
        "id": "offscreen-content-hidden",
        "title": "Offscreen content is hidden from assistive technology",
        "description": "Offscreen content is hidden with display: none or aria-hidden=true. [Learn how to properly hide offscreen content](https://developer.chrome.com/docs/lighthouse/accessibility/offscreen-content-hidden/).",
        "score": null,
        "scoreDisplayMode": "manual"
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
        "long-tasks": {
        "id": "long-tasks",
        "title": "Avoid long main-thread tasks",
        "description": "Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn how to avoid long main-thread tasks](https://web.dev/articles/long-tasks-devtools)",
        "score": 1,
        "scoreDisplayMode": "informative",
        "displayValue": "12 long tasks found",
        "details": {
        "headings": [
        {
        "valueType": "url",
        "label": "URL",
        "key": "url"
        },
        {
        "label": "Start Time",
        "key": "startTime",
        "valueType": "ms",
        "granularity": 1
        },
        {
        "valueType": "ms",
        "granularity": 1,
        "label": "Duration",
        "key": "duration"
        }
        ],
        "sortedBy": [
        "duration"
        ],
        "items": [
        {
        "startTime": 5251,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/139-3d99f059cd7e9ba0.js",
        "duration": 1082
        },
        {
        "duration": 158,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/a035d8d2-c11b080bc83da88d.js",
        "startTime": 7332
        },
        {
        "duration": 148,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/a035d8d2-c11b080bc83da88d.js",
        "startTime": 6333
        },
        {
        "duration": 137,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/757-7fe35def4e5bdabf.js",
        "startTime": 4501
        },
        {
        "startTime": 3451,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/webpack-3daa52cd204158e5.js",
        "duration": 118
        },
        {
        "startTime": 3700,
        "duration": 96,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/139-3d99f059cd7e9ba0.js"
        },
        {
        "startTime": 859,
        "url": "https://harshit-delta.vercel.app/",
        "duration": 85
        },
        {
        "url": "Unattributable",
        "startTime": 751,
        "duration": 81
        },
        {
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/139-3d99f059cd7e9ba0.js",
        "startTime": 6610,
        "duration": 64
        },
        {
        "startTime": 6551,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/a035d8d2-c11b080bc83da88d.js",
        "duration": 59
        },
        {
        "duration": 51,
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/139-3d99f059cd7e9ba0.js",
        "startTime": 944
        },
        {
        "url": "https://harshit-delta.vercel.app/_next/static/chunks/a035d8d2-c11b080bc83da88d.js",
        "startTime": 7104,
        "duration": 50
        }
        ],
        "debugData": {
        "urls": [
        "https://harshit-delta.vercel.app/_next/static/chunks/139-3d99f059cd7e9ba0.js",
        "https://harshit-delta.vercel.app/_next/static/chunks/a035d8d2-c11b080bc83da88d.js",
        "https://harshit-delta.vercel.app/_next/static/chunks/757-7fe35def4e5bdabf.js",
        "https://harshit-delta.vercel.app/_next/static/chunks/webpack-3daa52cd204158e5.js",
        "https://harshit-delta.vercel.app/",
        "Unattributable"
        ],
        "type": "debugdata",
        "tasks": [
        {
        "urlIndex": 0,
        "other": 1082,
        "startTime": 5251,
        "duration": 1082
        },
        {
        "startTime": 7332,
        "duration": 158,
        "urlIndex": 1,
        "other": 158,
        "scriptEvaluation": 0,
        "paintCompositeRender": 0
        },
        {
        "other": 148,
        "duration": 148,
        "urlIndex": 1,
        "styleLayout": 0,
        "scriptEvaluation": 0,
        "paintCompositeRender": 0,
        "startTime": 6333
        },
        {
        "urlIndex": 2,
        "startTime": 4501,
        "other": 137,
        "scriptEvaluation": 0,
        "duration": 137
        },
        {
        "urlIndex": 3,
        "duration": 118,
        "startTime": 3451,
        "other": 118,
        "scriptEvaluation": 0
        },
        {
        "duration": 96,
        "startTime": 3700,
        "other": 96,
        "urlIndex": 0
        },
        {
        "scriptEvaluation": 0,
        "parseHTML": 0,
        "duration": 85,
        "urlIndex": 4,
        "other": 85,
        "styleLayout": 0,
        "startTime": 859
        },
        {
        "startTime": 751,
        "other": 81,
        "duration": 81,
        "scriptEvaluation": 0,
        "urlIndex": 5
        },
        {
        "urlIndex": 0,
        "other": 64,
        "startTime": 6610,
        "duration": 64
        },
        {
        "urlIndex": 1,
        "other": 59,
        "duration": 59,
        "scriptEvaluation": 0,
        "startTime": 6551,
        "paintCompositeRender": 0
        },
        {
        "urlIndex": 0,
        "paintCompositeRender": 0,
        "other": 51,
        "scriptEvaluation": 0,
        "duration": 51,
        "styleLayout": 0,
        "startTime": 944
        },
        {
        "urlIndex": 1,
        "other": 50,
        "paintCompositeRender": 0,
        "scriptEvaluation": 0,
        "styleLayout": 0,
        "duration": 50,
        "startTime": 7104
        }
        ]
        },
        "skipSumming": [
        "startTime"
        ],
        "type": "table"
        }
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
        "numTasksOver25ms": 6,
        "maxServerLatency": 1,
        "throughput": 28914305967.705814,
        "maxRtt": 2.459572499999997,
        "numTasksOver500ms": 0,
        "numFonts": 11,
        "numStylesheets": 3,
        "numScripts": 15,
        "numTasksOver50ms": 4,
        "rtt": 2.459572499999997,
        "totalByteWeight": 943328,
        "numTasks": 762,
        "numTasksOver100ms": 1,
        "numTasksOver10ms": 32,
        "numRequests": 59,
        "totalTaskTime": 1789.2599999999993,
        "mainDocumentTransferSize": 8742
        }
        ]
        }
        },
        "link-text": {
        "id": "link-text",
        "title": "Links have descriptive text",
        "description": "Descriptive link text helps search engines understand your content. [Learn how to make links more accessible](https://developer.chrome.com/docs/lighthouse/seo/link-text/).",
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
        "aria-meter-name": {
        "id": "aria-meter-name",
        "title": "ARIA `meter` elements have accessible names",
        "description": "When a meter element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn how to name `meter` elements](https://dequeuniversity.com/rules/axe/4.9/aria-meter-name).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
        },
        "uses-optimized-images": {
        "id": "uses-optimized-images",
        "title": "Efficiently encode images",
        "description": "Optimized images load faster and consume less cellular data. [Learn how to efficiently encode images](https://developer.chrome.com/docs/lighthouse/performance/uses-optimized-images/).",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
        "headings": [],
        "overallSavingsMs": 0,
        "items": [],
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
        "type": "opportunity"
        },
        "warnings": [],
        "numericValue": 0,
        "numericUnit": "millisecond"
        },
        "landmark-one-main": {
        "id": "landmark-one-main",
        "title": "Document has a main landmark.",
        "description": "One main landmark helps screen reader users navigate a web page. [Learn more about landmarks](https://dequeuniversity.com/rules/axe/4.9/landmark-one-main).",
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
        "unsized-images": {
        "id": "unsized-images",
        "title": "Image elements have explicit `width` and `height`",
        "description": "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
        "score": 1,
        "scoreDisplayMode": "metricSavings",
        "details": {
        "headings": [],
        "type": "table",
        "items": []
        }
        }
        },
        "categories": {
        "performance": {
        "id": "performance",
        "title": "Performance",
        "score": 0.59,
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
        "score": 0.94,
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
        "weight": 0,
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
        "weight": 7,
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
        "weight": 3,
        "group": "a11y-names-labels"
        },
        {
        "id": "tabindex",
        "weight": 7,
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
        "score": 0.96,
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
        "weight": 1,
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
        "score": 1,
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
        "weight": 0,
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
        "weight": 0,
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
        "a11y-tables-lists": {
        "title": "Tables and lists",
        "description": "These are opportunities to improve the experience of reading tabular or list data using assistive technology, like a screen reader."
        },
        "a11y-aria": {
        "title": "ARIA",
        "description": "These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader."
        },
        "a11y-language": {
        "title": "Internationalization and localization",
        "description": "These are opportunities to improve the interpretation of your content by users in different locales."
        },
        "a11y-names-labels": {
        "title": "Names and labels",
        "description": "These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader."
        },
        "best-practices-ux": {
        "title": "User Experience"
        },
        "a11y-best-practices": {
        "title": "Best practices",
        "description": "These items highlight common accessibility best practices."
        },
        "a11y-color-contrast": {
        "title": "Contrast",
        "description": "These are opportunities to improve the legibility of your content."
        },
        "a11y-audio-video": {
        "title": "Audio and video",
        "description": "These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments."
        },
        "best-practices-general": {
        "title": "General"
        },
        "best-practices-trust-safety": {
        "title": "Trust and Safety"
        },
        "seo-content": {
        "title": "Content Best Practices",
        "description": "Format your HTML in a way that enables crawlers to better understand your app’s content."
        },
        "a11y-navigation": {
        "title": "Navigation",
        "description": "These are opportunities to improve keyboard navigation in your application."
        },
        "best-practices-browser-compat": {
        "title": "Browser Compatibility"
        },
        "diagnostics": {
        "title": "Diagnostics",
        "description": "More information about the performance of your application. These numbers don't [directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) the Performance score."
        },
        "seo-mobile": {
        "title": "Mobile Friendly",
        "description": "Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn how to make pages mobile-friendly](https://developers.google.com/search/mobile-sites/)."
        },
        "metrics": {
        "title": "Metrics"
        }
        },
        "timing": {
        "total": 13017
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
        "name": "vercel.app",
        "isFirstParty": true,
        "isUnrecognized": true,
        "origins": [
        "https://harshit-delta.vercel.app"
        ]
        }
        ],
        "fullPageScreenshot": {
        "screenshot": {
        "data": "data:image/webp;base64,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",
        "height": 4533,
        "width": 412
        },
        "nodes": {
        "1-58-IMG": {
        "left": 0,
        "width": 0,
        "bottom": 0,
        "right": 0,
        "height": 0,
        "top": 0
        },
        "1-44-IMG": {
        "top": 2107,
        "height": 200,
        "left": 46,
        "right": 366,
        "width": 320,
        "bottom": 2307
        },
        "1-7-A": {
        "width": 0,
        "bottom": 0,
        "right": 0,
        "top": 0,
        "left": 0,
        "height": 0
        },
        "1-39-IMG": {
        "height": 72,
        "top": 1135,
        "bottom": 1208,
        "right": 331,
        "left": 256,
        "width": 75
        },
        "1-19-A": {
        "width": 0,
        "top": 2501,
        "left": 181,
        "right": 181,
        "bottom": 2501,
        "height": 0
        },
        "1-59-IMG": {
        "top": 0,
        "right": 0,
        "left": 0,
        "height": 0,
        "width": 0,
        "bottom": 0
        },
        "1-78-LINK": {
        "width": 0,
        "left": 0,
        "top": 0,
        "height": 0,
        "bottom": 0,
        "right": 0
        },
        "page-0-IMG": {
        "left": 66,
        "right": 346,
        "bottom": 408,
        "top": 128,
        "height": 280,
        "width": 280
        },
        "1-40-IMG": {
        "top": 1283,
        "right": 366,
        "bottom": 1483,
        "left": 46,
        "height": 200,
        "width": 320
        },
        "1-8-A": {
        "height": 0,
        "top": 0,
        "left": 0,
        "bottom": 0,
        "right": 0,
        "width": 0
        },
        "1-28-BODY": {
        "top": 0,
        "left": 0,
        "width": 412,
        "bottom": 4533,
        "height": 4533,
        "right": 412
        },
        "1-83-LINK": {
        "left": 0,
        "bottom": 0,
        "top": 0,
        "height": 0,
        "right": 0,
        "width": 0
        },
        "1-6-A": {
        "right": 396,
        "left": 16,
        "width": 380,
        "bottom": -4359,
        "height": 68,
        "top": -4427
        },
        "page-2-IMG": {
        "left": 272,
        "right": 406,
        "width": 135,
        "bottom": 273,
        "height": 139,
        "top": 133
        },
        "1-79-LINK": {
        "left": 0,
        "bottom": 0,
        "width": 0,
        "right": 0,
        "top": 0,
        "height": 0
        },
        "1-23-A": {
        "bottom": 2803,
        "left": 176,
        "height": 0,
        "width": 0,
        "top": 2803,
        "right": 176
        },
        "1-67-IMG": {
        "height": 70,
        "bottom": 4043,
        "width": 70,
        "left": 282,
        "right": 352,
        "top": 3973
        },
        "1-69-IMG": {
        "left": 290,
        "top": 4323,
        "right": 360,
        "height": 70,
        "width": 70,
        "bottom": 4393
        },
        "1-1-A": {
        "left": 16,
        "height": 68,
        "right": 396,
        "width": 380,
        "bottom": -4283,
        "top": -4351
        },
        "1-52-IMG": {
        "left": 233,
        "bottom": 2856,
        "height": 100,
        "right": 329,
        "width": 96,
        "top": 2756
        },
        "page-1-IMG": {
        "height": 164,
        "left": 3,
        "top": 105,
        "right": 141,
        "bottom": 269,
        "width": 137
        },
        "1-54-IMG": {
        "bottom": 3010,
        "left": 238,
        "width": 86,
        "right": 324,
        "top": 2910,
        "height": 100
        },
        "1-68-IMG": {
        "height": 70,
        "bottom": 4409,
        "left": 52,
        "top": 4339,
        "width": 70,
        "right": 122
        },
        "1-84-LINK": {
        "top": 0,
        "width": 0,
        "bottom": 0,
        "right": 0,
        "left": 0,
        "height": 0
        },
        "1-82-LINK": {
        "width": 0,
        "height": 0,
        "bottom": 0,
        "right": 0,
        "left": 0,
        "top": 0
        },
        "1-62-IMG": {
        "height": 100,
        "bottom": 3769,
        "left": 156,
        "right": 256,
        "width": 100,
        "top": 3669
        },
        "1-76-LINK": {
        "height": 0,
        "width": 0,
        "bottom": 0,
        "top": 0,
        "right": 0,
        "left": 0
        },
        "1-71-LINK": {
        "top": 0,
        "bottom": 0,
        "right": 0,
        "height": 0,
        "left": 0,
        "width": 0
        },
        "1-18-A": {
        "width": 0,
        "bottom": 2351,
        "height": 0,
        "left": 327,
        "right": 327,
        "top": 2351
        },
        "1-13-A": {
        "left": 0,
        "height": 0,
        "bottom": 0,
        "right": 0,
        "top": 0,
        "width": 0
        },
        "1-85-META": {
        "left": 0,
        "top": 0,
        "width": 0,
        "height": 0,
        "right": 0,
        "bottom": 0
        },
        "1-34-IMG": {
        "top": 133,
        "bottom": 273,
        "height": 140,
        "right": 407,
        "width": 135,
        "left": 271
        },
        "1-87-META": {
        "top": 0,
        "left": 0,
        "right": 0,
        "width": 0,
        "height": 0,
        "bottom": 0
        },
        "1-81-LINK": {
        "right": 0,
        "top": 0,
        "left": 0,
        "width": 0,
        "height": 0,
        "bottom": 0
        },
        "1-33-IMG": {
        "left": 3,
        "width": 138,
        "right": 141,
        "bottom": 269,
        "top": 104,
        "height": 165
        },
        "1-25-A": {
        "right": 181,
        "height": 0,
        "left": 181,
        "top": 2958,
        "width": 0,
        "bottom": 2958
        },
        "1-32-IMG": {
        "width": 280,
        "right": 346,
        "left": 66,
        "height": 280,
        "top": 128,
        "bottom": 408
        },
        "1-21-A": {
        "width": 0,
        "right": 181,
        "bottom": 2651,
        "height": 0,
        "top": 2651,
        "left": 181
        },
        "1-38-IMG": {
        "width": 75,
        "bottom": 1208,
        "right": 244,
        "top": 1135,
        "left": 169,
        "height": 73
        },
        "1-56-IMG": {
        "height": 0,
        "bottom": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "right": 0
        },
        "1-20-A": {
        "bottom": 2501,
        "height": 0,
        "right": 331,
        "left": 331,
        "width": 0,
        "top": 2501
        },
        "1-10-A": {
        "width": 0,
        "left": 0,
        "top": 0,
        "right": 0,
        "height": 0,
        "bottom": 0
        },
        "1-17-A": {
        "left": 181,
        "right": 181,
        "width": 0,
        "height": 0,
        "top": 2351,
        "bottom": 2351
        },
        "1-2-P": {
        "bottom": 512,
        "width": 372,
        "height": 64,
        "top": 448,
        "left": 20,
        "right": 392
        },
        "1-0-A": {
        "bottom": 64,
        "top": 24,
        "height": 40,
        "width": 32,
        "left": 20,
        "right": 52
        },
        "1-11-A": {
        "bottom": 0,
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "right": 0
        },
        "1-57-IMG": {
        "width": 0,
        "top": 0,
        "bottom": 0,
        "height": 0,
        "right": 0,
        "left": 0
        },
        "1-31-IMG": {
        "width": 32,
        "top": 24,
        "right": 52,
        "height": 32,
        "bottom": 56,
        "left": 20
        },
        "1-5-A": {
        "height": 0,
        "right": 0,
        "top": 0,
        "width": 0,
        "bottom": 0,
        "left": 0
        },
        "1-66-IMG": {
        "top": 3973,
        "right": 130,
        "bottom": 4043,
        "left": 60,
        "width": 70,
        "height": 70
        },
        "1-64-IMG": {
        "height": 100,
        "right": 200,
        "width": 100,
        "left": 100,
        "top": 3781,
        "bottom": 3881
        },
        "1-50-IMG": {
        "right": 331,
        "left": 231,
        "top": 2601,
        "bottom": 2701,
        "width": 100,
        "height": 100
        },
        "1-48-IMG": {
        "left": 231,
        "width": 100,
        "right": 331,
        "top": 2451,
        "bottom": 2551,
        "height": 100
        },
        "1-80-LINK": {
        "height": 0,
        "right": 0,
        "width": 0,
        "bottom": 0,
        "left": 0,
        "top": 0
        },
        "1-24-A": {
        "top": 2806,
        "left": 329,
        "right": 329,
        "width": 0,
        "bottom": 2806,
        "height": 0
        },
        "1-70-LINK": {
        "height": 0,
        "left": 0,
        "width": 0,
        "top": 0,
        "bottom": 0,
        "right": 0
        },
        "1-3-H2": {
        "width": 372,
        "height": 144,
        "right": 392,
        "bottom": 668,
        "top": 524,
        "left": 20
        },
        "1-86-META": {
        "width": 0,
        "right": 0,
        "left": 0,
        "top": 0,
        "height": 0,
        "bottom": 0
        },
        "1-51-IMG": {
        "right": 176,
        "width": 91,
        "bottom": 2853,
        "top": 2753,
        "left": 86,
        "height": 100
        },
        "1-75-LINK": {
        "top": 0,
        "height": 0,
        "left": 0,
        "bottom": 0,
        "right": 0,
        "width": 0
        },
        "1-63-IMG": {
        "top": 3669,
        "height": 100,
        "left": 268,
        "bottom": 3769,
        "right": 368,
        "width": 100
        },
        "1-37-IMG": {
        "right": 157,
        "top": 1134,
        "left": 82,
        "width": 75,
        "height": 75,
        "bottom": 1209
        },
        "1-30-INPUT": {
        "bottom": 0,
        "height": 0,
        "top": 0,
        "left": 0,
        "right": 0,
        "width": 0
        },
        "1-55-IMG": {
        "right": 310,
        "height": 208,
        "bottom": 3653,
        "width": 208,
        "left": 102,
        "top": 3445
        },
        "1-45-IMG": {
        "height": 100,
        "bottom": 2401,
        "left": 81,
        "top": 2301,
        "right": 181,
        "width": 100
        },
        "page-3-IMG": {
        "left": -9,
        "height": 168,
        "width": 168,
        "bottom": 403,
        "right": 159,
        "top": 235
        },
        "1-53-IMG": {
        "width": 100,
        "height": 100,
        "top": 2908,
        "left": 81,
        "right": 181,
        "bottom": 3008
        },
        "1-65-IMG": {
        "left": 212,
        "top": 3781,
        "height": 100,
        "right": 312,
        "width": 100,
        "bottom": 3881
        },
        "1-46-IMG": {
        "width": 91,
        "top": 2301,
        "bottom": 2401,
        "height": 100,
        "right": 327,
        "left": 235
        },
        "1-9-A": {
        "bottom": 0,
        "top": 0,
        "right": 0,
        "height": 0,
        "width": 0,
        "left": 0
        },
        "1-16-A": {
        "right": 0,
        "bottom": 0,
        "top": 0,
        "height": 0,
        "width": 0,
        "left": 0
        },
        "1-14-A": {
        "left": 0,
        "top": 0,
        "right": 0,
        "width": 0,
        "height": 0,
        "bottom": 0
        },
        "1-26-A": {
        "left": 324,
        "width": 0,
        "right": 324,
        "height": 0,
        "bottom": 2960,
        "top": 2960
        },
        "1-27-path": {
        "right": 0,
        "width": 0,
        "bottom": 0,
        "left": 0,
        "top": 0,
        "height": 0
        },
        "1-22-A": {
        "right": 331,
        "bottom": 2651,
        "height": 0,
        "left": 331,
        "top": 2651,
        "width": 0
        },
        "1-41-IMG": {
        "right": 366,
        "bottom": 1659,
        "width": 320,
        "top": 1489,
        "left": 46,
        "height": 170
        },
        "1-35-IMG": {
        "width": 169,
        "right": 159,
        "left": -9,
        "bottom": 403,
        "height": 169,
        "top": 235
        },
        "1-47-IMG": {
        "top": 2451,
        "left": 81,
        "width": 100,
        "bottom": 2551,
        "height": 100,
        "right": 181
        },
        "1-60-IMG": {
        "left": 0,
        "height": 0,
        "right": 0,
        "bottom": 0,
        "width": 0,
        "top": 0
        },
        "1-77-LINK": {
        "left": 0,
        "top": 0,
        "height": 0,
        "bottom": 0,
        "right": 0,
        "width": 0
        },
        "page-4-IMG": {
        "top": 178,
        "width": 218,
        "right": 455,
        "bottom": 414,
        "height": 237,
        "left": 237
        },
        "1-61-IMG": {
        "width": 100,
        "right": 144,
        "height": 100,
        "bottom": 3769,
        "left": 44,
        "top": 3669
        },
        "1-4-A": {
        "width": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "top": 0,
        "height": 0
        },
        "1-72-LINK": {
        "right": 0,
        "height": 0,
        "bottom": 0,
        "top": 0,
        "left": 0,
        "width": 0
        },
        "1-43-IMG": {
        "bottom": 2101,
        "height": 200,
        "right": 366,
        "width": 320,
        "top": 1901,
        "left": 46
        },
        "1-12-A": {
        "right": 0,
        "height": 0,
        "top": 0,
        "width": 0,
        "left": 0,
        "bottom": 0
        },
        "1-15-A": {
        "top": 0,
        "left": 0,
        "height": 0,
        "width": 0,
        "bottom": 0,
        "right": 0
        },
        "1-42-IMG": {
        "left": 46,
        "top": 1695,
        "bottom": 1895,
        "right": 366,
        "height": 200,
        "width": 320
        },
        "1-88-META": {
        "top": 0,
        "bottom": 0,
        "left": 0,
        "height": 0,
        "width": 0,
        "right": 0
        },
        "1-36-IMG": {
        "width": 220,
        "height": 237,
        "left": 236,
        "bottom": 415,
        "top": 177,
        "right": 456
        },
        "1-49-IMG": {
        "top": 2601,
        "left": 81,
        "height": 100,
        "bottom": 2701,
        "width": 100,
        "right": 181
        },
        "1-73-LINK": {
        "right": 0,
        "height": 0,
        "top": 0,
        "width": 0,
        "left": 0,
        "bottom": 0
        },
        "1-29-LABEL": {
        "top": 24,
        "right": 392,
        "left": 352,
        "bottom": 64,
        "width": 40,
        "height": 40
        },
        "1-74-LINK": {
        "height": 0,
        "right": 0,
        "top": 0,
        "left": 0,
        "bottom": 0,
        "width": 0
        }
        }
        }
        },
        "analysisUTCTimestamp": "2024-06-06T05:40:04.435Z"
        });
    const [scrapeData, setScrapeData] = useState({
        "title": "Strivers A2Z DSA Course/Sheet - Crack Any FAANG or PBCs",
        "keywords": null,
        "subKeywords": [],
        "metaDescription": "takeuforward is the best place to learn data structures, algorithms, most asked coding interview questions, real interview experiences free of cost.",
        "languageCode": "en",
        "htmlText": "<head><meta charset=\"utf-8\"><link rel=\"icon\" type=\"image/x-icon\" href=\"https://static.takeuforward.org/content/favicon-yBC0qDmm\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"theme-color\" content=\"#000000\"><link rel=\"apple-touch-icon\" href=\"logo192.png\"><link rel=\"manifest\" href=\"manifest.json\"><title>Strivers A2Z DSA Course/Sheet - Crack Any FAANG or PBCs</title><link rel=\"canonical\" href=\"https://takeuforward.org/\"><meta name=\"description\" content=\"takeuforward is the best place to learn data structures, algorithms, most asked coding interview questions, real interview experiences free of cost.\"><meta property=\"og:site_name\" content=\"takeUforward - ~ Strive for Excellence\"><meta property=\"og:type\" content=\"website\"><meta property=\"og:title\" content=\"takeuforward - Best Coding  defer=\"\"></script></body>",
        "countryCode": 'us'
    });
    const [outdata1, setoutdata1] = useState<Outdata | null>(null);;
    useEffect(() => {
        const fetchData = async () => {
            // try {
            //     const [psiRes, scrapeRes] = await Promise.all([
            //         fetch(`http://localhost:10000/psi?url=${encodeURIComponent(url)}&strategy=mobile`),
            //         fetch(`http://localhost:10000/scrape?url=${encodeURIComponent(url)}`)
            //     ]);

            //     const [psiData, scrapeData] = await Promise.all([
            //         psiRes.json(),
            //         scrapeRes.json()
            //     ]);
            //     console.log(psiData);
            //     console.log(scrapeData);

            //     setPsiData(psiData);
            //     setScrapeData(scrapeData);



            // } catch (error) {
            //     console.error('Error fetching data:', error);
            // }
            const contentJson = {
                title: scrapeData.title,
                htmlText: scrapeData.htmlText,
                keyword: scrapeData.title,
                subKeywords: scrapeData.subKeywords,
                metaDescription: scrapeData.metaDescription,
                languageCode: scrapeData.languageCode,
                countryCode: scrapeData.countryCode
            };
            const seoCheck = new SeoCheck(contentJson, 'liveinabroad.com');

            // Perform analysis
            const result: Outdata = await seoCheck.analyzeSeo()
            setoutdata1(result)
        };

        fetchData();
    }, [url]);
    useEffect(() => {
        console.log(outdata1);

    }, [outdata1]);



    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="md:hidden fixed lg:block flex flex-col top-0 left-0 w-80 bg-[#F8F9FF] h-full border-r">
                <div className="flex items-center justify-center h-14 border-b p-10 font-semibold">
                    <div>LOGO</div>
                </div>
                <div className="overflow-y-auto overflow-x-hidden flex-grow mx-2">
                    <div className="flex flex-col py-4 space-y-5 text-[#4E4D4D] font-semibold">

                        <a href="#" className="relative flex  items-center justify-center focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center  bg-[#2D2D2D] rounded-2xl text-white">

                                {/* <img svg="/appGrid.svg" className="hover:fill-white" alt="" srcSet="" /> */}
                                <svg width="21px" height="20px" viewBox="0 0 21 20" version="1.1" xmlns="http://www.w3.org/2000/svg" className="fill-white">

                                    <g id="Page-1" stroke="none" stroke-width="1" >
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

                                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>

                                <span className="ml-4 text-sm tracking-wide truncate">New</span>
                            </div>      </a>

                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="h-screen w-80 md:hidden lg:block">
                </div>
                <div className=' flex grow  flex-col items-center justify-center bg-[#c9d2fc55] text-[#2D2D2D] ' >
                    <div className="flex justify-between items-center self-start p-10 w-full">
                        <div className="flex flex-col self-start grow">

                            <div className="text-xl  font-semibold">{scrapeData ? scrapeData.title : <></>}</div>
                            <div className="text-xs  font-base text-blue-500 underline">{psiData ? psiData.id : <></>}</div>
                        </div>
                        <div className="flex  ">
                            <input type="text" placeholder="Search Anything" className="px-4 p-2 border-0 border-gray-300  rounded"/>
                        </div>
                    </div>
                    <div className="w-4/5 flex justify-between mt-10 bg-white p-10">
                        <div className="text-sm bg-blue-600 rounded-full p-2 px-4 hover:text-white font-semibold">Download Report</div>
                    </div>
                    <div className="w-4/5 flex mt-10 bg-white p-10 px-0 flex-wrap justify-center">
                        <div className="w-80 rounded mx-2 bg-slate-300 h-96 flex items-center justify-center">
                            <div className="radial-progress" style={{ "--value": outdata1 ? outdata1.seoScore : 0 } as React.CSSProperties} role="progressbar">{outdata1 ? Math.floor(outdata1.seoScore) : null}</div>
                        </div>
                        <div className="w-60 rounded mx-2 bg-slate-300 h-96"></div>
                        <div className="w-60 rounded mx-2 bg-slate-300 h-96"></div>
                    </div>
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white">
                        <div className="text-2xl my-10 font-semibold">Good Points</div>
                        {outdata1 ? outdata1.messages.goodPoints.map((item: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (

                            <div key={index} className="border-2 border-green-100 flex  my-1 rounded items-center  p-4">
                                {/* <div className="rounded-full bg-slate-500 h-10 mx-2 w-10"></div> */}
                                <div className="text-sm  font-semibold  whitespace-nowrap truncate">{item}</div>
                                {/* <div className="text-sm">Remark</div> */}
                            </div>
                        )) : <></>}

                    </div>
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white">
                        <div className="text-2xl my-10 font-semibold">Minor Warnings</div>
                        {outdata1 ? outdata1.messages.minorWarnings.map((item: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (

                            <div key={index} className="border-yellow-100 flex mx-2 my-1 rounded items-center border-2 p-4">
                                {/* <div className="rounded-full bg-slate-500 h-10 mx-2 w-10"></div> */}
                                <div className="text-sm  font-semibold  whitespace-nowrap truncate">{item}</div>
                                {/* <div className="text-sm">Remark</div> */}
                            </div>
                        )) : <></>}

                    </div>
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white">
                        <div className="text-2xl my-10 font-semibold">Warnings</div>
                        {outdata1 ? outdata1.messages.warnings.map((item: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (

                            <div key={index} className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                                {/* <div className="rounded-full bg-slate-500 h-10 mx-2 w-10"></div> */}
                                <div className="text-sm  font-semibold  whitespace-nowrap truncate">{item}</div>
                                {/* <div className="text-sm">Remark</div> */}
                            </div>
                        )) : <></>}

                    </div>
                    <div className="w-4/5  my-10  p-20 pt-0 rounded bg-white">
                        <div className="text-2xl my-10 font-semibold">Common SEO issues</div>


                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            {/* <div className="rounded-full bg-slate-500 h-10 mx-2 w-10"></div> */}
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Meta Title Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {extractMetaTitle(scrapeData).Text}</div>
                                <div className="text-sm">Length: {extractMetaTitle(scrapeData).Length}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            {/* <div className="rounded-full bg-slate-500 h-10 mx-2 w-10"></div> */}
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Meta Description Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {extractMetaDescription(scrapeData).Text}</div>
                                <div className="text-sm">Length: {extractMetaDescription(scrapeData).Length}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            {/* <div className="rounded-full bg-slate-500 h-10 mx-2 w-10"></div> */}
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Social Media Meta Tags Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performSocialMediaTest(psiData).Description}</div>
                                <div className="text-sm">Length: {performSocialMediaTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performSocialMediaTest(psiData).HasSocialMediaTags}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            {/* <div className="rounded-full bg-slate-500 h-10 mx-2 w-10"></div> */}
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Most Common keyword Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {extractMostCommonKeywords(scrapeData).Keywords}</div>
                                <div className="text-sm">Length: {extractMostCommonKeywords(scrapeData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            {/* <div className="rounded-full bg-slate-500 h-10 mx-2 w-10"></div> */}
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Heading Tags Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {extractHeadingTagsData(scrapeData.htmlText).HasH1Tags}</div>
                                <div className="text-sm">Length: {extractHeadingTagsData(scrapeData.htmlText).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            {/* <div className="rounded-full bg-slate-500 h-10 mx-2 w-10"></div> */}
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Robots.txt Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {extractRobotsTxtData(psiData).HasRobotsTxt}</div>
                                <div className="text-sm">Length: {extractRobotsTxtData(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            {/* <div className="rounded-full bg-slate-500 h-10 mx-2 w-10"></div> */}
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Sitemap Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {extractSitemapData(psiData).HasSitemap}</div>
                                <div className="text-sm">Length: {extractSitemapData(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Broken Link Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {JSON.stringify(extractBrokenLinksData(psiData).BrokenLinks)}</div>
                                <div className="text-sm">Length: {extractBrokenLinksData(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">SEO Friendly URL Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {extractSEOFriendlyUrlData(psiData).Link}</div>
                                <div className="text-sm">Length: {extractSEOFriendlyUrlData(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Image Alt Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {extractImageAltTestData(psiData).Link}</div>
                                <div className="text-sm">Length: {extractImageAltTestData(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Responsive Image Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {extractResponsiveImageData(psiData).Link}</div>
                                <div className="text-sm">Length: {extractResponsiveImageData(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Image Aspect Ratio Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {extractImageAspectRatioData(psiData).Link}</div>
                                <div className="text-sm">Length: {extractImageAspectRatioData(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Inline CSS Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {extractInlineCssData(psiData).Link}</div>
                                <div className="text-sm">Length: {extractInlineCssData(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Deprecated HTML Tags Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {extractDeprecatedHtmlTagsData(psiData).Link}</div>
                                <div className="text-sm">Length: {extractDeprecatedHtmlTagsData(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Google Analysis Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performGoogleAnalyticsTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performGoogleAnalyticsTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Favicon Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performFaviconTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performFaviconTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Backlink Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performBacklinksTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performBacklinksTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">JS Error Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performJSErrorTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performJSErrorTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Console Errors Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performConsoleErrorsTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performConsoleErrorsTest(psiData).Description}</div>
                            </div>
                        </div>
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Charset Decleration Test</div>
                            <div className="flex flex-col">
                            
                            <div className="text-sm">Text: {performCharsetDeclarationTest(psiData).Link}</div>
                            <div className="text-sm">Length: {performCharsetDeclarationTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">HTML Page Size Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performHTMLPageSizeTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performHTMLPageSizeTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">DOM Size Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performDOMSizeTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performDOMSizeTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">HTML Compression/GZIP Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performHTMLCompressionTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performHTMLCompressionTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Site Loading Speed Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performSiteLoadingSpeedTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performSiteLoadingSpeedTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">JS Execution Time Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performJSExecutionTimeTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performJSExecutionTimeTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Page Objects Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performPageObjectsTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performPageObjectsTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Page Cache Test (Server Side Caching )</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performPageCacheTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performPageCacheTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Flash Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performFlashTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performFlashTest(psiData).Description}</div>
                            </div>
                        </div>
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">CDN Usage Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performCDNUsageTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performCDNUsageTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Modern Image Format Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performModernImageFormatTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performModernImageFormatTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Image Metadata Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performImageMetadataTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performImageMetadataTest(psiData).Description}</div>
                            </div>
                        </div>
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Image Caching Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performImageCachingTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performImageCachingTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">JavaScript Caching Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performJavaScriptCachingTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performJavaScriptCachingTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">CSS Caching Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performCssCachingTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performCssCachingTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Javascript Minification Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performCssMinificationTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performCssMinificationTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Javascript Minification Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performCssMinificationTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performCssMinificationTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Render Blocking Resources Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performRenderBlockingResourcesTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performRenderBlockingResourcesTest(psiData).Description}</div>
                            </div>
                        </div>
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Nested Table Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performNestedTablesTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performNestedTablesTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Frameset Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performFramesetTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performFramesetTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Frameset Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performFramesetTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performFramesetTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Doctype Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performDoctypeTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performDoctypeTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">URL Redirects Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performUrlRedirectsTest(psiData).Link}</div>
                                <div className="text-sm">Length: {performUrlRedirectsTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">First Contentful Paint Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performFirstContentfulPaintTest(psiData).Fcp}</div>
                                <div className="text-sm">Length: {performFirstContentfulPaintTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Largest Contentful Paint Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performLargestContentfulPaintTest(psiData).Lcp}</div>
                                <div className="text-sm">Length: {performLargestContentfulPaintTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Cumulative Layout Shift Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performCumulativeLayoutShiftTest(psiData).Cls}</div>
                                <div className="text-sm">Length: {performCumulativeLayoutShiftTest(psiData).Description}</div>
                            </div>
                        </div>
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">URL Caninicalization Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performUrlCanonicalizationTest(scrapeData.htmlText).IsCanonicalized}</div>
                                <div className="text-sm">Length: {performUrlCanonicalizationTest(scrapeData.htmlText).Description}</div>
                            </div>
                        </div> */}
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">SSL Checker and HTTPS Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performSslCheckerTest(scrapeData.htmlText).IsSecure}</div>
                                <div className="text-sm">Length: {performSslCheckerTest(scrapeData.htmlText).Description}</div>
                            </div>
                        </div> */}
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Mixed Content Test (HTTP over HTTPS)</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performMixedContentTest(scrapeData.htmlText).IsSecure}</div>
                                <div className="text-sm">Length: {performMixedContentTest(scrapeData.htmlText).Description}</div>
                            </div>
                        </div> */}
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">HTTP2 Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performHttp2Test(psiData).IsHttp2}</div>
                                <div className="text-sm">Length: {performHttp2Test(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">HSTS Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performHstsTest(psiData).IsHstsEnabled}</div>
                                <div className="text-sm">Length: {performHstsTest(psiData).Description}</div>
                            </div>
                        </div>
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Safe Browsing Test</div>
                            <div className="flex flex-col">
                            
                            <div className="text-sm">Text: {JSON.stringify(performSafeBrowsingTest(psiData.lighthouseResult.requestedUrl))}</div>
                            {/* <div className="text-sm">Length: {performSafeBrowsingTest(psiData.lighthouseResult.requestedUrl).Description}</div> */}
                            {/* </div>
                        </div> */} 
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Server Signature Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performServerSignatureTest(psiData).IsServerSignaturePresent}</div>
                                <div className="text-sm">Length: {performServerSignatureTest(psiData).Description}</div>
                            </div>
                        </div>
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Directory Browsing Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performDirectoryBrowsingTest(psiData).IsServerSignaturePresent}</div>
                                <div className="text-sm">Length: {performDirectoryBrowsingTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Plaintext Emails Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performPlaintextEmailsTest(scrapeData.htmlText).HasPlaintextEmails}</div>
                                <div className="text-sm">Length: {performPlaintextEmailsTest(scrapeData.htmlText).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Unsafe Cross-Origin Links Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performUnsafeCrossOriginLinksTest(scrapeData.htmlText).HasUnsafeCrossOriginLinks}</div>
                                <div className="text-sm">Length: {performUnsafeCrossOriginLinksTest(scrapeData.htmlText).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Meta Viewport Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performMetaViewportTest(psiData).HasMetaViewport}</div>
                                <div className="text-sm">Length: {performMetaViewportTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Media Viewport Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performMediaQueryResponsiveTest(psiData).HasMediaQueries}</div>
                                <div className="text-sm">Length: {performMediaQueryResponsiveTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Mobile Snapshot Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performMobileSnapshotTest(psiData).IsMobileSnapshotValid}</div>
                                <div className="text-sm">Length: {performMobileSnapshotTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Structured Data Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performStructuredDataTest(psiData).HasStructuredData}</div>
                                <div className="text-sm">Length: {performStructuredDataTest(psiData).Description}</div>
                            </div>
                        </div>
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Custom 404 Error Page Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performCustom404ErrorPageTest(psiData).HasStructuredData}</div>
                                <div className="text-sm">Length: {performCustom404ErrorPageTest(psiData).Description}</div>
                            </div>
                        </div> */}
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Noindex Tag Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performNoindexTagTest(psiData).HasNoindexTag}</div>
                                <div className="text-sm">Length: {performNoindexTagTest(psiData).Description}</div>
                            </div>
                        </div>
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">NoFollow Tag Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performNofollowTagTest(scrapeData.htmlText).HasNofollowTag}</div>
                                <div className="text-sm">Length: {performNofollowTagTest(scrapeData.htmlText).Description}</div>
                            </div>
                        </div>
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Disallow Directive Tag Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performDisallowDirectiveTest(scrapeData.htmlText).HasNofollowTag}</div>
                                <div className="text-sm">Length: {performDisallowDirectiveTest(scrapeData.htmlText).Description}</div>
                            </div>
                        </div> */}
                        <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Meta Refresh Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performMetaRefreshTest(scrapeData.htmlText).HasMetaRefreshTag}</div>
                                <div className="text-sm">Length: {performMetaRefreshTest(scrapeData.htmlText).Description}</div>
                            </div>
                        </div>
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">SPF Records Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performSpfRecordsTest(scrapeData.htmlText).HasMetaRefreshTag}</div>
                                <div className="text-sm">Length: {performSpfRecordsTest(scrapeData.htmlText).Description}</div>
                            </div>
                        </div> */}
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Ads.txt Validation Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performAdsTxtValidationTest(scrapeData.htmlText).HasMetaRefreshTag}</div>
                                <div className="text-sm">Length: {performAdsTxtValidationTest(scrapeData.htmlText).Description}</div>
                            </div>
                        </div> */}
                        {/* <div className="border-red-300 flex mx-2 my-1 rounded items-center border-2 p-4">
                            
                            <div className="text-sm  font-semibold w-80 whitespace-nowrap truncate">Spell Check Test</div>
                            <div className="flex flex-col">

                                <div className="text-sm">Text: {performAdsTxtValidationTest(scrapeData.htmlText).HasMetaRefreshTag}</div>
                                <div className="text-sm">Length: {performAdsTxtValidationTest(scrapeData.htmlText).Description}</div>
                            </div>
                        </div> */}


                    </div>
                    {/* <div className="flex flex-col my-10 p-1 bg-white">
                        {test.map((item, index) => (

                            <div key={index} className="flex mx-2 my-1 rounded items-center border p-2">
                                <div className="rounded-full bg-slate-500 h-10 mx-2 w-10"></div>
                                <div className="text-sm w-80 font-semibold mx-2">{item.title}</div>
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