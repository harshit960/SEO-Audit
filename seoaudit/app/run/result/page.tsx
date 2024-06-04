'use client'
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import { SeoCheck } from "seord";
import type { KeywordDensity, LinksGroup } from "seord";
import { extractMetaTitle } from "./test/extractMetaTitle";


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
        "id": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
        "loadingExperience": {
            "id": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
            "metrics": {
                "CUMULATIVE_LAYOUT_SHIFT_SCORE": {
                    "percentile": 3,
                    "distributions": [
                        {
                            "min": 0,
                            "max": 10,
                            "proportion": 0.9586
                        },
                        {
                            "min": 10,
                            "max": 25,
                            "proportion": 0.0346
                        },
                        {
                            "min": 25,
                            "proportion": 0.0068
                        }
                    ],
                    "category": "FAST"
                },
                "EXPERIMENTAL_TIME_TO_FIRST_BYTE": {
                    "percentile": 560,
                    "distributions": [
                        {
                            "min": 0,
                            "max": 800,
                            "proportion": 0.8453
                        },
                        {
                            "min": 800,
                            "max": 1800,
                            "proportion": 0.1154
                        },
                        {
                            "min": 1800,
                            "proportion": 0.0393
                        }
                    ],
                    "category": "FAST"
                },
                "FIRST_CONTENTFUL_PAINT_MS": {
                    "percentile": 2775,
                    "distributions": [
                        {
                            "min": 0,
                            "max": 1800,
                            "proportion": 0.4993
                        },
                        {
                            "min": 1800,
                            "max": 3000,
                            "proportion": 0.2917
                        },
                        {
                            "min": 3000,
                            "proportion": 0.2091
                        }
                    ],
                    "category": "AVERAGE"
                },
                "FIRST_INPUT_DELAY_MS": {
                    "percentile": 1181,
                    "distributions": [
                        {
                            "min": 0,
                            "max": 100,
                            "proportion": 0.4535
                        },
                        {
                            "min": 100,
                            "max": 300,
                            "proportion": 0.0743
                        },
                        {
                            "min": 300,
                            "proportion": 0.4722
                        }
                    ],
                    "category": "SLOW"
                },
                "INTERACTION_TO_NEXT_PAINT": {
                    "percentile": 2098,
                    "distributions": [
                        {
                            "min": 0,
                            "max": 200,
                            "proportion": 0.178
                        },
                        {
                            "min": 200,
                            "max": 500,
                            "proportion": 0.2605
                        },
                        {
                            "min": 500,
                            "proportion": 0.5615
                        }
                    ],
                    "category": "SLOW"
                },
                "LARGEST_CONTENTFUL_PAINT_MS": {
                    "percentile": 2726,
                    "distributions": [
                        {
                            "min": 0,
                            "max": 2500,
                            "proportion": 0.7087
                        },
                        {
                            "min": 2500,
                            "max": 4000,
                            "proportion": 0.1785
                        },
                        {
                            "min": 4000,
                            "proportion": 0.1128
                        }
                    ],
                    "category": "AVERAGE"
                }
            },
            "overall_category": "SLOW",
            "initial_url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
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
                            "proportion": 0.8954
                        },
                        {
                            "min": 10,
                            "max": 25,
                            "proportion": 0.089
                        },
                        {
                            "min": 25,
                            "proportion": 0.0156
                        }
                    ],
                    "category": "FAST"
                },
                "EXPERIMENTAL_TIME_TO_FIRST_BYTE": {
                    "percentile": 506,
                    "distributions": [
                        {
                            "min": 0,
                            "max": 800,
                            "proportion": 0.8678
                        },
                        {
                            "min": 800,
                            "max": 1800,
                            "proportion": 0.0921
                        },
                        {
                            "min": 1800,
                            "proportion": 0.04
                        }
                    ],
                    "category": "FAST"
                },
                "FIRST_CONTENTFUL_PAINT_MS": {
                    "percentile": 2380,
                    "distributions": [
                        {
                            "min": 0,
                            "max": 1800,
                            "proportion": 0.6186
                        },
                        {
                            "min": 1800,
                            "max": 3000,
                            "proportion": 0.2184
                        },
                        {
                            "min": 3000,
                            "proportion": 0.1629
                        }
                    ],
                    "category": "AVERAGE"
                },
                "FIRST_INPUT_DELAY_MS": {
                    "percentile": 37,
                    "distributions": [
                        {
                            "min": 0,
                            "max": 100,
                            "proportion": 0.776
                        },
                        {
                            "min": 100,
                            "max": 300,
                            "proportion": 0.0455
                        },
                        {
                            "min": 300,
                            "proportion": 0.1785
                        }
                    ],
                    "category": "FAST"
                },
                "INTERACTION_TO_NEXT_PAINT": {
                    "percentile": 607,
                    "distributions": [
                        {
                            "min": 0,
                            "max": 200,
                            "proportion": 0.4054
                        },
                        {
                            "min": 200,
                            "max": 500,
                            "proportion": 0.2999
                        },
                        {
                            "min": 500,
                            "proportion": 0.2947
                        }
                    ],
                    "category": "SLOW"
                },
                "LARGEST_CONTENTFUL_PAINT_MS": {
                    "percentile": 2677,
                    "distributions": [
                        {
                            "min": 0,
                            "max": 2500,
                            "proportion": 0.7146
                        },
                        {
                            "min": 2500,
                            "max": 4000,
                            "proportion": 0.1718
                        },
                        {
                            "min": 4000,
                            "proportion": 0.1136
                        }
                    ],
                    "category": "AVERAGE"
                }
            },
            "overall_category": "SLOW",
            "initial_url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
        },
        "lighthouseResult": {
            "requestedUrl": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
            "finalUrl": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
            "mainDocumentUrl": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
            "finalDisplayedUrl": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
            "lighthouseVersion": "12.0.0",
            "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/125.0.6422.66 Safari/537.36",
            "fetchTime": "2024-06-02T14:21:06.264Z",
            "environment": {
                "networkUserAgent": "Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36",
                "hostUserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/125.0.6422.66 Safari/537.36",
                "benchmarkIndex": 434
            },
            "runWarnings": [],
            "configSettings": {
                "emulatedFormFactor": "mobile",
                "formFactor": "mobile",
                "locale": "en-US",
                "onlyCategories": [
                    "performance"
                ],
                "channel": "lr"
            },
            "audits": {
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
                                "observedSpeedIndex": 1394,
                                "observedFirstVisualChangeTs": 266782327328,
                                "observedLargestContentfulPaint": 846,
                                "observedTimeOriginTs": 266781486328,
                                "observedFirstPaint": 846,
                                "observedNavigationStartTs": 266781486328,
                                "observedCumulativeLayoutShiftMainFrame": 0.0066752634459223015,
                                "observedDomContentLoadedTs": 266782168602,
                                "firstContentfulPaint": 2874,
                                "observedNavigationStart": 0,
                                "cumulativeLayoutShift": 0.0066752634459223015,
                                "largestContentfulPaint": 7913,
                                "timeToFirstByte": 607,
                                "observedLargestContentfulPaintTs": 266782332672,
                                "observedLargestContentfulPaintAllFrames": 846,
                                "observedTraceEnd": 5428,
                                "observedCumulativeLayoutShift": 0.0066752634459223015,
                                "observedLoad": 984,
                                "observedTimeOrigin": 0,
                                "observedFirstContentfulPaintTs": 266782332672,
                                "observedSpeedIndexTs": 266782880258,
                                "observedLastVisualChange": 3675,
                                "observedFirstContentfulPaint": 846,
                                "observedLastVisualChangeTs": 266785161328,
                                "firstMeaningfulPaint": 4449,
                                "observedFirstMeaningfulPaint": 2657,
                                "observedFirstVisualChange": 841,
                                "observedFirstContentfulPaintAllFramesTs": 266782332672,
                                "observedTraceEndTs": 266786914288,
                                "observedFirstMeaningfulPaintTs": 266784143041,
                                "cumulativeLayoutShiftMainFrame": 0.0066752634459223015,
                                "observedFirstPaintTs": 266782332672,
                                "maxPotentialFID": 4984,
                                "interactive": 15987,
                                "observedLoadTs": 266782470104,
                                "observedLargestContentfulPaintAllFramesTs": 266782332672,
                                "totalBlockingTime": 8521,
                                "speedIndex": 4229,
                                "observedDomContentLoaded": 682,
                                "observedFirstContentfulPaintAllFrames": 846
                            },
                            {
                                "lcpInvalidated": false
                            }
                        ]
                    },
                    "numericValue": 15987,
                    "numericUnit": "millisecond"
                },
                "dom-size": {
                    "id": "dom-size",
                    "title": "Avoid an excessive DOM size",
                    "description": "A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn how to avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size/).",
                    "score": 0.5,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "28,938 elements",
                    "details": {
                        "type": "table",
                        "items": [
                            {
                                "statistic": "Total DOM Elements",
                                "value": {
                                    "value": 28938,
                                    "type": "numeric",
                                    "granularity": 1
                                }
                            },
                            {
                                "node": {
                                    "lhId": "1-0-BUTTON",
                                    "selector": "form.flex > div.px-5 > div.flex > button.btn-brand-2",
                                    "boundingRect": {
                                        "top": 0,
                                        "bottom": 0,
                                        "right": 0,
                                        "width": 0,
                                        "height": 0,
                                        "left": 0
                                    },
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,7,DIV,1,DIV,1,SECTION,4,DIV,1,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,1,TBODY,0,TR,5,TD,0,DIV,2,DIV,0,DIV,1,FORM,1,DIV,0,DIV,0,BUTTON",
                                    "nodeLabel": "Save",
                                    "snippet": "<button type=\"submit\" className=\"btn-brand-2 opacity-50\" disabled=\"\">",
                                    "type": "node"
                                },
                                "value": {
                                    "type": "numeric",
                                    "value": 31,
                                    "granularity": 1
                                },
                                "statistic": "Maximum DOM Depth"
                            },
                            {
                                "value": {
                                    "granularity": 1,
                                    "type": "numeric",
                                    "value": 19
                                },
                                "statistic": "Maximum Child Elements",
                                "node": {
                                    "selector": "div.flex > div.relative > section.px-4 > div.space-y-6",
                                    "type": "node",
                                    "lhId": "1-1-DIV",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,7,DIV,1,DIV,1,SECTION,4,DIV",
                                    "snippet": "<div className=\"space-y-6 mt-8 \">",
                                    "nodeLabel": "Your Progress: 0/455\n0% complete\nShow Revision\nStep 1 : Learn the basics\n0 /31\n…",
                                    "boundingRect": {
                                        "bottom": 2416,
                                        "left": 16,
                                        "top": 540,
                                        "height": 1876,
                                        "width": 380,
                                        "right": 396
                                    }
                                }
                            }
                        ],
                        "headings": [
                            {
                                "valueType": "text",
                                "label": "Statistic",
                                "key": "statistic"
                            },
                            {
                                "key": "node",
                                "valueType": "node",
                                "label": "Element"
                            },
                            {
                                "key": "value",
                                "valueType": "numeric",
                                "label": "Value"
                            }
                        ]
                    },
                    "numericValue": 28938,
                    "numericUnit": "element"
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
                                    "selector": "div.lg:w-1/3 > div > div.h-2 > div.h-full",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,7,DIV,1,DIV,1,SECTION,4,DIV,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV",
                                    "nodeLabel": "div.lg:w-1/3 > div > div.h-2 > div.h-full",
                                    "snippet": "<div className=\"h-full rounded-xl transition-all ease-in-out duration-300 bg-brand_50\" style=\"width: 0%;\">",
                                    "boundingRect": {
                                        "height": 8,
                                        "width": 0,
                                        "left": 29,
                                        "bottom": 623,
                                        "right": 29,
                                        "top": 615
                                    },
                                    "lhId": "page-2-DIV",
                                    "type": "node"
                                },
                                "subItems": {
                                    "items": [
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        },
                                        {
                                            "animation": "background-color",
                                            "failureReason": "Unsupported CSS Property: background-color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: background-color",
                                            "animation": "background-color"
                                        }
                                    ],
                                    "type": "subitems"
                                }
                            },
                            {
                                "subItems": {
                                    "type": "subitems",
                                    "items": [
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        }
                                    ]
                                },
                                "node": {
                                    "lhId": "page-3-DIV",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,7,DIV,1,DIV,1,SECTION,0,DIV,0,DIV,1,DIV,0,DIV,0,DIV",
                                    "type": "node",
                                    "boundingRect": {
                                        "top": 94,
                                        "bottom": 118,
                                        "right": 387,
                                        "width": 42,
                                        "left": 345,
                                        "height": 24
                                    },
                                    "snippet": "<div className=\"absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-l…\">",
                                    "selector": "div.flex > div.grid > div.relative > div.absolute",
                                    "nodeLabel": "div.flex > div.grid > div.relative > div.absolute"
                                }
                            },
                            {
                                "node": {
                                    "type": "node",
                                    "boundingRect": {
                                        "height": 40,
                                        "right": 249,
                                        "top": 568,
                                        "width": 40,
                                        "bottom": 608,
                                        "left": 209
                                    },
                                    "snippet": "<button data-tooltip-id=\"pick-random\" data-tooltip-content=\"Practice a random question\" data-tooltip-place=\"top\" className=\"p-2 border-[1.2px] border-zinc-300 dark:bg-dark_50 bg-white  dark:border-z…\">",
                                    "selector": "div.space-y-6 > div.flex > div.flex > button.p-2",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,7,DIV,1,DIV,1,SECTION,4,DIV,0,DIV,1,DIV,0,BUTTON",
                                    "nodeLabel": "div.space-y-6 > div.flex > div.flex > button.p-2",
                                    "lhId": "page-4-BUTTON"
                                },
                                "subItems": {
                                    "items": [
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
                                            "animation": "border-bottom-color",
                                            "failureReason": "Unsupported CSS Property: border-bottom-color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: border-left-color",
                                            "animation": "border-left-color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: border-right-color",
                                            "animation": "border-right-color"
                                        }
                                    ],
                                    "type": "subitems"
                                }
                            },
                            {
                                "node": {
                                    "lhId": "page-5-DIV",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,7,DIV,0,DIV,1,DIV",
                                    "boundingRect": {
                                        "bottom": 823,
                                        "right": 0,
                                        "top": 0,
                                        "left": -256,
                                        "height": 823,
                                        "width": 256
                                    },
                                    "selector": "div > div.flex > div > div#sidebar",
                                    "snippet": "<div id=\"sidebar\" className=\"flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-aut…\">",
                                    "type": "node",
                                    "nodeLabel": "Profile\nBlogs\nDSA Sheets\nStriver's A2Z Sheet\nStriver's SDE Sheet\nStriver's 79 S…"
                                },
                                "subItems": {
                                    "type": "subitems",
                                    "items": [
                                        {
                                            "animation": "border-top-color",
                                            "failureReason": "Unsupported CSS Property: border-top-color"
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
                                }
                            },
                            {
                                "node": {
                                    "snippet": "<button className=\"w-full cursor-pointer px-3 py-2 rounded-lg mb-0.5 last:mb-0 transition-all…\">",
                                    "type": "node",
                                    "boundingRect": {
                                        "bottom": 691,
                                        "height": 40,
                                        "width": 223,
                                        "top": 651,
                                        "left": -240,
                                        "right": -17
                                    },
                                    "lhId": "page-6-BUTTON",
                                    "nodeLabel": "Saved Notes",
                                    "selector": "div > div#sidebar > div.space-y-4 > button.w-full",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,7,DIV,0,DIV,1,DIV,1,DIV,7,BUTTON"
                                },
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
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Blogs",
                                    "selector": "div > div#sidebar > div.space-y-4 > div.px-3",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,7,DIV,0,DIV,1,DIV,1,DIV,1,DIV",
                                    "lhId": "page-7-DIV",
                                    "type": "node",
                                    "boundingRect": {
                                        "height": 39,
                                        "bottom": 203,
                                        "top": 164,
                                        "width": 223,
                                        "right": -17,
                                        "left": -240
                                    },
                                    "snippet": "<div className=\"px-3 py-2 rounded-lg mb-0.5 last:mb-0 transition-all ease-out duration-300…\">"
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
                                        }
                                    ],
                                    "type": "subitems"
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
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        },
                                        {
                                            "failureReason": "Unsupported CSS Property: color",
                                            "animation": "color"
                                        }
                                    ]
                                },
                                "node": {
                                    "boundingRect": {
                                        "width": 223,
                                        "right": -17,
                                        "left": -240,
                                        "top": 433,
                                        "height": 39,
                                        "bottom": 472
                                    },
                                    "lhId": "page-8-DIV",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,7,DIV,0,DIV,1,DIV,1,DIV,3,DIV",
                                    "snippet": "<div className=\"px-3 py-2 rounded-lg mb-0.5 last:mb-0  transition-all ease-out duration-30…\">",
                                    "type": "node",
                                    "nodeLabel": "System Design",
                                    "selector": "div > div#sidebar > div.space-y-4 > div.px-3"
                                }
                            },
                            {
                                "node": {
                                    "nodeLabel": "Profile",
                                    "type": "node",
                                    "lhId": "page-9-BUTTON",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,7,DIV,0,DIV,1,DIV,1,DIV,0,BUTTON",
                                    "snippet": "<button className=\"w-full cursor-pointer px-3 py-2 rounded-lg mb-0.5 last:mb-0 transition-all…\">",
                                    "boundingRect": {
                                        "right": -17,
                                        "height": 40,
                                        "left": -240,
                                        "bottom": 146,
                                        "top": 106,
                                        "width": 223
                                    },
                                    "selector": "div > div#sidebar > div.space-y-4 > button.w-full"
                                },
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
                            },
                            {
                                "node": {
                                    "snippet": "<div className=\"px-[14px] py-2 rounded-lg mb-0.5 last:mb-0  transition-all ease-out durati…\">",
                                    "nodeLabel": "Striver's CP Sheet",
                                    "selector": "div > div#sidebar > div.space-y-4 > div.px-[14px]",
                                    "boundingRect": {
                                        "left": -240,
                                        "width": 223,
                                        "top": 597,
                                        "height": 39,
                                        "bottom": 635,
                                        "right": -17
                                    },
                                    "type": "node",
                                    "lhId": "page-10-DIV",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,7,DIV,0,DIV,1,DIV,1,DIV,6,DIV"
                                },
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
                                    ],
                                    "type": "subitems"
                                }
                            }
                        ],
                        "type": "table",
                        "headings": [
                            {
                                "label": "Element",
                                "subItemsHeading": {
                                    "valueType": "text",
                                    "key": "failureReason"
                                },
                                "valueType": "node",
                                "key": "node"
                            },
                            {
                                "valueType": "text",
                                "label": "Name",
                                "key": null,
                                "subItemsHeading": {
                                    "key": "animation",
                                    "valueType": "text"
                                }
                            }
                        ]
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
                            "type": "debugdata",
                            "metricSavings": {
                                "FCP": 0,
                                "LCP": 0
                            }
                        },
                        "items": [],
                        "overallSavingsBytes": 0,
                        "headings": [],
                        "overallSavingsMs": 0,
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "type": "opportunity"
                    },
                    "warnings": [],
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "unminified-javascript": {
                    "id": "unminified-javascript",
                    "title": "Minify JavaScript",
                    "description": "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn how to minify JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "headings": [],
                        "overallSavingsBytes": 0,
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "debugData": {
                            "metricSavings": {
                                "LCP": 0,
                                "FCP": 0
                            },
                            "type": "debugdata"
                        },
                        "type": "opportunity",
                        "items": [],
                        "overallSavingsMs": 0
                    },
                    "warnings": [],
                    "numericValue": 0,
                    "numericUnit": "millisecond"
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
                                "name": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
                                "children": [
                                    {
                                        "resourceBytes": 129,
                                        "name": "(inline) function gtag()…",
                                        "unusedBytes": 0
                                    },
                                    {
                                        "unusedBytes": 0,
                                        "resourceBytes": 181,
                                        "name": "(inline) \"true\"==localSt…"
                                    }
                                ]
                            },
                            {
                                "unusedBytes": 111608,
                                "resourceBytes": 310841,
                                "name": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0"
                            },
                            {
                                "resourceBytes": 222402,
                                "name": "https://accounts.google.com/gsi/client",
                                "unusedBytes": 183064
                            },
                            {
                                "name": "https://takeuforward.org/static/js/main.ffe17ed9.js",
                                "resourceBytes": 2712695,
                                "unusedBytes": 1851285
                            },
                            {
                                "resourceBytes": 310841,
                                "name": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0",
                                "unusedBytes": 215931
                            },
                            {
                                "resourceBytes": 222402,
                                "name": "https://accounts.google.com/gsi/client",
                                "unusedBytes": 163408
                            },
                            {
                                "unusedBytes": 57691,
                                "children": [
                                    {
                                        "resourceBytes": 111357,
                                        "name": "(inline) \"use strict\";th…",
                                        "unusedBytes": 57691
                                    },
                                    {
                                        "name": "(inline) gis.provider.bu…",
                                        "unusedBytes": 0,
                                        "resourceBytes": 418
                                    }
                                ],
                                "name": "https://accounts.google.com/gsi/button?type=standard&theme=filled_black&size=large&text=undefined&shape=rectangle&logo_alignment=undefined&width=undefined&locale=undefined&click_listener=undefined&client_id=590234420126-hc9007chffeh5rh8j5gcositk2ia89do.apps.googleusercontent.com&iframe_id=gsi_69445_490235&as=b5mgcYNEw0tcLFbnJULv%2Bw",
                                "resourceBytes": 111775
                            }
                        ]
                    }
                },
                "unused-javascript": {
                    "id": "unused-javascript",
                    "title": "Reduce unused JavaScript",
                    "description": "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
                    "score": 0,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "Potential savings of 722 KiB",
                    "details": {
                        "overallSavingsBytes": 739426,
                        "items": [
                            {
                                "url": "https://takeuforward.org/static/js/main.ffe17ed9.js",
                                "wastedBytes": 500801,
                                "wastedPercent": 68.24523213999363,
                                "totalBytes": 733826
                            },
                            {
                                "wastedPercent": 69.46670484266876,
                                "totalBytes": 102856,
                                "wastedBytes": 71451,
                                "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0"
                            },
                            {
                                "totalBytes": 83604,
                                "wastedBytes": 68816,
                                "url": "https://accounts.google.com/gsi/client",
                                "wastedPercent": 82.31220942257713
                            },
                            {
                                "wastedPercent": 73.47415940504132,
                                "totalBytes": 83604,
                                "url": "https://accounts.google.com/gsi/client",
                                "wastedBytes": 61427
                            },
                            {
                                "totalBytes": 102856,
                                "wastedPercent": 35.90517338446344,
                                "wastedBytes": 36931,
                                "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0"
                            }
                        ],
                        "debugData": {
                            "metricSavings": {
                                "FCP": 0,
                                "LCP": 3180
                            },
                            "type": "debugdata"
                        },
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "headings": [
                            {
                                "key": "url",
                                "label": "URL",
                                "valueType": "url",
                                "subItemsHeading": {
                                    "key": "source",
                                    "valueType": "code"
                                }
                            },
                            {
                                "subItemsHeading": {
                                    "key": "sourceBytes"
                                },
                                "label": "Transfer Size",
                                "valueType": "bytes",
                                "key": "totalBytes"
                            },
                            {
                                "valueType": "bytes",
                                "key": "wastedBytes",
                                "label": "Potential Savings",
                                "subItemsHeading": {
                                    "key": "sourceWastedBytes"
                                }
                            }
                        ],
                        "type": "opportunity",
                        "overallSavingsMs": 3180
                    },
                    "numericValue": 3180,
                    "numericUnit": "millisecond"
                },
                "total-blocking-time": {
                    "id": "total-blocking-time",
                    "title": "Total Blocking Time",
                    "description": "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
                    "score": 0,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "8,520 ms",
                    "numericValue": 8520.962231362726,
                    "numericUnit": "millisecond"
                },
                "uses-long-cache-ttl": {
                    "id": "uses-long-cache-ttl",
                    "title": "Serve static assets with an efficient cache policy",
                    "description": "A long cache lifetime can speed up repeat visits to your page. [Learn more about efficient cache policies](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/).",
                    "score": 0.5,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "1 resource found",
                    "details": {
                        "summary": {
                            "wastedBytes": 5639
                        },
                        "items": [
                            {
                                "cacheLifetimeMs": 0,
                                "cacheHitProbability": 0,
                                "wastedBytes": 5639,
                                "totalBytes": 5639,
                                "url": "https://takeuforward-content-images.s3.ap-south-1.amazonaws.com/content/codestudio-ZJxLZjiy"
                            }
                        ],
                        "type": "table",
                        "headings": [
                            {
                                "key": "url",
                                "valueType": "url",
                                "label": "URL"
                            },
                            {
                                "key": "cacheLifetimeMs",
                                "displayUnit": "duration",
                                "valueType": "ms",
                                "label": "Cache TTL"
                            },
                            {
                                "label": "Transfer Size",
                                "valueType": "bytes",
                                "displayUnit": "kb",
                                "granularity": 1,
                                "key": "totalBytes"
                            }
                        ],
                        "skipSumming": [
                            "cacheLifetimeMs"
                        ],
                        "sortedBy": [
                            "totalBytes"
                        ]
                    },
                    "numericValue": 5639,
                    "numericUnit": "byte"
                },
                "screenshot-thumbnails": {
                    "id": "screenshot-thumbnails",
                    "title": "Screenshot Thumbnails",
                    "description": "This is what the load of your site looked like.",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "details": {
                        "scale": 3675,
                        "items": [
                            {
                                "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAHyAPoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=",
                                "timing": 459,
                                "timestamp": 266781945703
                            },
                            {
                                "timestamp": 266782405078,
                                "data": "data:image/jpeg;base64,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e/G/Xf2jL8rfuXScCcXaja1+HTtQl9IisNfsc5oDmua3d4eBAP8AouM1ag2iW7JHvaXyM9Zu3q12PNZvAR/7baT9sv8A/E9bLF69TfppqqnnHm06zSaW5pK7lFEcpmJiMck6IqWnoql075+8d2K9p/of8R/mvHdivaf6H/Ef5oLTdOqtvOuNiAsuBBeCfEAHp54aPgqI9Jpx3Y7bYvy8bdocXE+f+vrO6+9VWGWDKTGTt8MHCt7Lfm/5ljtp9Ge+r19luTQNOkjex9cljnukLS92AXAh2OvQHJyB5qk8O6YZOZ6Od+/fnmP+tu35xn9YAq9st+b/AJk2W/N/zLHu6PRlF25HKqerAp8K6fFTjhtR+kyNGDIS5u7o4ds9sOd096y36Dp72gPieSGsZuMr84a7c3rnuD4q5st+b/mTZb83/MkWqIjEQyqv3ap3TVPVntaGtDR2Ax3yvVr9lvzf8yrhZZEjS4u2565OVsacL9z+ru+0fzXjey9uf1d32j+a8b2RHqIiAiIgsy1WXdLbXkfNG17G5dDIY3jGD0cOoWr1LhahPpLatSM15YWPEErZXtc0u77nAhzgT1OT1W3DC36j3tHkML3D/av/ANPuQYPDmjx6Bw9X02KaWdkDCOZKck+J+wdeg8AmqAnSbIAyTC7HwWaWFww6R7h5HC8kGWkKTGYwsTicvmWsfzeP+6P5K8HuwBuOB4ZUpal9HOmT2pJq81uq15LjHE5u0E+Qc04WH/RrT/aGofGP/oXNT2VqInhjq76PiTRTETOeiOQ4+Z6+9MnHdSN/RtT/AGhqHxj/AOhP6Nqf7Q1D4x/9Cn0rUe3VfEei9+iOg5wx1PRe7z0yT07deykT+jan+0NQ+Mf/AEJ/RtT/AGhqHxj/AOhX6XqPbqniLRe/RHoecYDjjyyvd58z196kL+jep+0NQ+Mf/Qn9G9T9oah8Y/8AoT6XqPbqniLRe/RHpcT3JK3vAIJ420rHXHNJ9w5bh/uumH0b1D/9Q1D4x/8AQui4V4Ro6FYdYhdNNZc3ZzZnAkN8gAAB2Hgt2n7NvU3aaqsYicvy63t/S3NPXbt5mZiY5errGdlUqWjoql0Di3h7FWI7AgBZIx+M5BAyshUloPcIKPT4v1ZPlT0+L9WT5VXsb5Jsb5IKPT4v1ZPlT0+L9WT5VXsb5Jsb5IKPT4v1ZPlT0+L9WT5VXsb5Jsb5IKPT4v1ZPlT0+L9WT5VXsb5Jsb5ILMtkTt2Rsf1IySMK+3svA0DsFUgIiICIiAiIgLwjK9RBadHlecoK8iCxygnKCvogscoJygr6ILHKCcoK+iCzygq2swq0QeL1EQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//Z",
                                "timing": 919
                            },
                            {
                                "timing": 1378,
                                "timestamp": 266782864453,
                                "data": "data:image/jpeg;base64,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QwhU4C4JGNhTHJ8jVKa5Os4l6cbMJRMM5ODt24+WKwN0Xw+lN0Xw+lO5p0PWtX4vm9vrpry5aZwFJAGB2AAwP4Vj1f3RfD6V45jKnGM/KtIiIjEMLWm0zM85Wh2b/Kf4ViCssdm/yn+FYgqUPaUpQKqi/tU+YqmlBsbeZoH3oELYx6yhsfWsmw1KW2mDviUAlsMATuPtye3xrUiZvIfSves3kKDJmcyNK5ABbccAYArK8GEL4o04k4HU/wDY1qmlZhjgD4VTHI8UiyRsVdDlSPYapqU46TXrDXQ1O61a6nSYnyl9OA1k+m3HTCCVggBGBxwRg/6EiuEwfiNrcUSofR3IGNzIcn/Wrn9ZWt+5a/Yf515yOy9xHLHm93PpDsLx+LPk7mL65CMnWfaw2kZ9mAv8ABRr66aIxmeQxsixlc8FVOQP0rhn9Zet+5a/Yf517/WXrfuWv2H+dT7M3XX7qe3ezun2duW4lVQodgACoGfYe9XxqF11lm6zCVQQH9v1rhX9Zet+5a/Yf50/rL1v3LX7D/Opjszcx080z29sJ558ndI7ydFwkpA27R5gc8A+zufrVXp91sZOu+1iSefPvXCf6zNc9y1+w/zp/WZrnuWv2H+dPZu5/cont3s+fH/juUk0koxI7MNxbk+09zUJ/FpgPCE4J5Lpj7hUD/rM1z3LX7D/ADrSeIvFGpa+ES+dREhyEQYGfOtdDs3Wrq1vfGInLjbzt3aX299PSzmYmOWObSCva8Fe137xYavRupQAnBHnVmmKDJynvj/WmU98f61i4pigysp74/1plPfH+tYuKYoMrKe+P9aZT3x/rWLimKDKynvj/WmU98f61i4pigyWdVU4YEkYrHFMUoFKUoFKUoFKUoFeGvaUHlK9pQeUr2lB5SvaUHlK9pQeUr2lApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlB//Z"
                            },
                            {
                                "timing": 1838,
                                "timestamp": 266783323828,
                                "data": "data:image/jpeg;base64,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QwhU4C4JGNhTHJ8jVKa5Os4l6cbMJRMM5ODt24+WKwN0Xw+lN0Xw+lO5p0PWtX4vm9vrpry5aZwFJAGB2AAwP4Vj1f3RfD6V45jKnGM/KtIiIjEMLWm0zM85Wh2b/Kf4ViCssdm/yn+FYgqUPaUpQKqi/tU+YqmlBsbeZoH3oELYx6yhsfWsmw1KW2mDviUAlsMATuPtye3xrUiZvIfSves3kKDJmcyNK5ABbccAYArK8GEL4o04k4HU/wDY1qmlZhjgD4VTHI8UiyRsVdDlSPYapqU46TXrDXQ1O61a6nSYnyl9OA1k+m3HTCCVggBGBxwRg/6EiuEwfiNrcUSofR3IGNzIcn/Wrn9ZWt+5a/Yf515yOy9xHLHm93PpDsLx+LPk7mL65CMnWfaw2kZ9mAv8ABRr66aIxmeQxsixlc8FVOQP0rhn9Zet+5a/Yf517/WXrfuWv2H+dT7M3XX7qe3ezun2duW4lVQodgACoGfYe9XxqF11lm6zCVQQH9v1rhX9Zet+5a/Yf50/rL1v3LX7D/Opjszcx080z29sJ558ndI7ydFwkpA27R5gc8A+zufrVXp91sZOu+1iSefPvXCf6zNc9y1+w/zp/WZrnuWv2H+dPZu5/cont3s+fH/juUk0koxI7MNxbk+09zUJ/FpgPCE4J5Lpj7hUD/rM1z3LX7D/ADrSeIvFGpa+ES+dREhyEQYGfOtdDs3Wrq1vfGInLjbzt3aX299PSzmYmOWObSCva8Fe137xYavRupQAnBHnVmmKDJynvj/WmU98f61i4pigysp74/1plPfH+tYuKYoMrKe+P9aZT3x/rWLimKDKynvj/WmU98f61i4pigyWdVU4YEkYrHFMUoFKUoFKUoFKUoFeGvaUHlK9pQeUr2lB5SvaUHlK9pQeUr2lApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlB//Z"
                            },
                            {
                                "timing": 2297,
                                "timestamp": 266783783203,
                                "data": "data:image/jpeg;base64,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QwhU4C4JGNhTHJ8jVKa5Os4l6cbMJRMM5ODt24+WKwN0Xw+lN0Xw+lO5p0PWtX4vm9vrpry5aZwFJAGB2AAwP4Vj1f3RfD6V45jKnGM/KtIiIjEMLWm0zM85Wh2b/Kf4ViCssdm/yn+FYgqUPaUpQKqi/tU+YqmlBsbeZoH3oELYx6yhsfWsmw1KW2mDviUAlsMATuPtye3xrUiZvIfSves3kKDJmcyNK5ABbccAYArK8GEL4o04k4HU/wDY1qmlZhjgD4VTHI8UiyRsVdDlSPYapqU46TXrDXQ1O61a6nSYnyl9OA1k+m3HTCCVggBGBxwRg/6EiuEwfiNrcUSofR3IGNzIcn/Wrn9ZWt+5a/Yf515yOy9xHLHm93PpDsLx+LPk7mL65CMnWfaw2kZ9mAv8ABRr66aIxmeQxsixlc8FVOQP0rhn9Zet+5a/Yf517/WXrfuWv2H+dT7M3XX7qe3ezun2duW4lVQodgACoGfYe9XxqF11lm6zCVQQH9v1rhX9Zet+5a/Yf50/rL1v3LX7D/Opjszcx080z29sJ558ndI7ydFwkpA27R5gc8A+zufrVXp91sZOu+1iSefPvXCf6zNc9y1+w/zp/WZrnuWv2H+dPZu5/cont3s+fH/juUk0koxI7MNxbk+09zUJ/FpgPCE4J5Lpj7hUD/rM1z3LX7D/ADrSeIvFGpa+ES+dREhyEQYGfOtdDs3Wrq1vfGInLjbzt3aX299PSzmYmOWObSCva8Fe137xYavRupQAnBHnVmmKDJynvj/WmU98f61i4pigysp74/1plPfH+tYuKYoMrKe+P9aZT3x/rWLimKDKynvj/WmU98f61i4pigyWdVU4YEkYrHFMUoFKUoFKUoFKUoFeGvaUHlK9pQeUr2lB5SvaUHlK9pQeUr2lApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlApSlB//Z"
                            },
                            {
                                "timestamp": 266784242578,
                                "data": "data:image/jpeg;base64,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Hur+UU491fyigxsnzpk+dZPHur+UU491fyigxsnzpk+dZPHur+UU491fyigxsnzpk+dZPHur+UU491fyigxsnzpk+dZPHur+UU491fyigxsnzpk+dZPHur+UU491fyigxsnzpk+dZPHur+UU491fyigxsnzpk+dZPHur+UU491fyigxsnzpk+dZPHur+UU491fyigxsnzpk+dZXB/ur+UVcI29xfyigw8nzp+NZjIVGSi/lFWYDcFV/ACgxqU7EilANZCfcX5VjmshPuL8qDedF+zy81bQ9H1KC9twuoXIt+kVO6IGRow58xuXHHmK8I+FdaOnHUEsJmsQ20TcAH1tucZzjdxntWxeE/tFk8Px6PF+jUuYbCKWNkaYr1S0wlVuxwVZR55rFl8cNJoMll+jYxePZtp/pXVOBAZOpjZjG7PG7Pb2UEep/Z54istcudLisjdzQKrl4GBUg8Due5IIAPJx2rUnRo3ZHUq6nBBGCD5V0i2+1HoapqF8uixb7/AKMkw6qtiePIEib0YLwe2Mj2GueX9y95fXF1L/WTyNI3zY5P8aCClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUEsAy5+ArLSCV4XlSN2iRgrOBwCewJ+ODWJbnDn5V6emald6ZM0tlKY3Zdp4BBHyPHB5HkRQY9xDJbyvFPG0cinDI4wR8xWD2f8azJXaR2eRizscszHJJ86w+7/jQYh+8fnSh+8fnSgGshPuL8qx6uSRkGB2+VBPSouu/w+gp13+H0FBLSouu/w+gp13+H0FBLSouu/wAPoKdd/h9BQS0qLrv8PoKdd/h9BQS0qLrv8PoKdd/h9BQS0qLrv8PoKdd/h9BQS0qLrv8AD6CnXf4fQUEtKi67/D6CnXf4fQUEtKi67/D6CnXf4fQUEtKi67/D6CnXf4fQUEtKi67/AA+gp13+H0FBLSouu/w+gp13+H0FBN2q7qv5/wClY/Xf4fQU67/D6CiMhpGYYJq0dxUPXf4fQVQyuRjgfICirD94/OlKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUCqqrN91SaoayE/q1+VBD039w/SnTf3D9KnpQQdN/cP0p039w/Sp6UEHTf3D9KdN/cP0qelBB039w/SnTf3D9KnpQY5Vl+8pFUrJxkMD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",
                                "timing": 2756
                            },
                            {
                                "timestamp": 266784701953,
                                "timing": 3216,
                                "data": "data:image/jpeg;base64,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"
                            },
                            {
                                "timestamp": 266785161328,
                                "timing": 3675,
                                "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAHyAPoDASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAAAAIDBAYHBQEI/8QAShAAAgEDAgMEBgcFBgQFBAMAAQIDAAQRBRITITEGUVKRFCIyQWFxBxUjU4GSsTM0QnLRFlRik6GiJFWUwRclc4LhCCY2Q2Oywv/EABsBAQEAAgMBAAAAAAAAAAAAAAABAgMEBQYH/8QAMhEBAAIAAwUECQQDAAAAAAAAAAECAwQREiFBUZETFDFSBQYVFlNhcaHwI7HR4TNCYv/aAAwDAQACEQMRAD8A+a6KKftbO5u93otvNPtxu4aFsfPFAxRUufTb63iMtxZXMUY6u8TKB+JFRKAooooAAk4HM07wJPCB8yBSrYYDv7xgD8aVQN8CTuX8wo4Encv5hTlFA3wJO5fzCjgSdy/mFOUUDfAk7l/MKOBJ3L+YU5RQN8CTuX8wo4Encv5hTlFA3wJO5fzCjgSdy/mFOUUDTQuoyV5d4OabqUpKnIpiZQsrgdAaD1IWZc8gD0ycUr0dvEnnTrfw/wAo/Su1pfZTWtT0K/1q0sXOk2IzPduwSNTy5AkjceY5DJ5ig4Ho7eJPOm5EZCN3v6EU/Xk37uD/AIv+1AvS9OudTu1trKIySt7s4wO81Yx9H+tn+CD/ADBU76JQPTdQYjmETB861BWrh42YtS2zD2Hoj0Bl83la4+LM6zr4fKdGRD6Pdb8Nv/mCvf8Aw81zw2/+aK18Eg4PUU4pyQBzNae9Yjs/dfJf9df6Y7/4d674bf8AzRUXVOxGtadaPczQI8Sc24bgkDvxW3BqbviGsbgHmDG36UjN31YX9V8nNZ2ZmJ+v9PnK3/bxfzD9a0Ws7j5Xij/+QfrWiV2TwExpOjNq6uhW5nM222nn24/ZXCxY69cg5rlUURYNWs2isZHNjdxAY9eS8WRRz8IUZqv0UVZSBRRRUU/b/s5fmP8AvUi0MYuoTOMwh13j/Dnn/pUa3YZZCcbunzp0owPNT5UGhNDaX05bXNUimiW4k9GtxextCybGKYQOvDGQowWXqByrk66dN/s20WnW1kGhv58s84M6IVi27QHIdSQ4z62Mdfeantbwnyo2t4T5UHbhktrjQbWB4rUTR3LA7WWOR1KZyznnjP4d1J1Se3n7OaTw47WO5jlnSQRKA5UCPaX95yd/M/HFcba3hPlRtbwnyoNLl1HSiwuluLMXI0tdO2hhzzaht/dnOYz8cDrUDUbTsxZLcvbQ291woC0PEucLOeLCASElLbtrSEj1f5Rg1Q9reE+VG1vCfKiL3d22iNPb2kSac9nb3N3EJzdYklwZDCrevjY3qDeAOX8QqPcW+gwejb7W0knmmhWeKG8JWEHJYIxfBBwvMsQMkZ7qZtbwnyo2t4T5UVermPRYYjZMmnPHLKzAxzsOB9jyIIkYZ3AdWYe6jtTpmkQaXNcQLb7pYmlguPSy8sr+lMmNpY5XhgndjqOtUXa3hPlS3eaRY1kaRljXagYkhRknA7hkk/iaBqmrn9u/zp8Iereqo6k1GlbfIzDoTQSW/h/lH6Cvsr6PtJ0Xt/8A/T1bdnrCdIA1sIJzGBuhuFYMWYfFhn4g18anmqn3FR+lTdK1jUtIkeTSdQvLF3GGa2maMsO47SM0Hc+kXsTd9hNaXTNSvtPurkrvK2kjMUX3bwQNpPd/8VU5/wB2H8//AGp24mluZ3muJHlmkJZ3dizMT7yT1NNXHKBQepbNBc/onOLrUf5U/wD9VpsTYkUnkARWWfRdPHHfXsbsAzqpUd+M/wBa0xWrrcz/AJJfTPV2Yn0dSPr+8rVK1o2pajMZbKRprkvEZG3Lwy7FunQ816/HFdGG3so7W2uEt09FaVXeRwMpGJiN27OTkYGAOVUcNTokbbt3Hb3ZrXt/JzL5CZiIi88PtGjuajLZPZ4txEJEMIUoMFgYjxM9/r4rj3jf8HP/AOm36UlWpnUriOCwneVgqhDzPyrCZ2pcimFGDXTXr9PyXz+n76v/AKg/WtErOojuu0I6Fx+taLXcvkFvFnHDPev5hRwz3r+YUmiiFcM96/mFHDPev5hSaKBXDPev5hRwz3r+YUmigVwz3r+YUocQDAfA/nH9abooHftfvP8AeP60fa/ef7x/WmqKB37X7z/eP60fa/ef7x/WmqKB37X7z/eP60fa/ef7x/WmqKB37X7z/eP60fa/ef7x/WmqKB37X7z/AHj+tH2v3n+8f1pqigWyu3tMD83FecM96/mFJooHV4iey4HycV7vm+9/3j+tM0UD2+b73/eP60hldjlmBPxYUiigXFxYpBJE4Rx0IcAipn1pqf8AfZf8yufijFSYifFspjYmHGlLTH0l0PrTU/77L/mUfWmp/wB+l/zP/mufijFTZjkz71j+eesuh9aan/fpf8z/AOabnvb64jMc907oeoaQYqHijFXZjkk5jGtGk3nrJ62jPHi5r7Q/iHfWi7T8POs5t/28X8w/WtFqtLNqKK62j9m9a1qCWbSNKvb2KLk7wQs4B7uQ6/Cg5NFOy280SsZYZECsUJZSMMOo+fwqdo2h6hrMV/Jp0HGSxga5uDuA2RjqeZ5/IUHMooooCiiigKKmz6Vf2+m2+oz2dxHYXDFYbhkISQjOQD0PQ+VCaVqD28c62N0YJGCpJwm2sScAA4xQQqK72o9ju0mm2Ut3qGh6jbWsQBeWWBlVRnHMkd5FMaN2a1vW4JJtH0q9vYo22u8ERcKcZwce+g5FFdC20XVLrVTplvp93JqAJBtlibiDHXK4yKXeaDq1lqkWm3em3cOoSkLHbvEwdyTgYHvye6g5lFP31nc6fdy2t9BJb3MR2yRSKVZT3EGp+kdmtb1m2luNK0q9vIIvbkhhZ1B7sgdfhQcmivWUqxVgQwOCD7q8oCiiigKK6XZ/Q9Q7QXzWek25nnWNpWG4KFRepJJAAp5Oy+uvpJ1RNIv204At6SIGKYHU5x0+PSg49FdDWNG1DRzaDUrZoDdQLcwhiDvjbOG5H34Nc+gKK9AJIABJPQCvZI3jkMcqMjg4KsMEfhQeAE9ATXuxvCfKutJIbJIo4VUMV3FiASfOpMqahH6Tkwt6Odsm0IcHJGOnPoayrXVttWlJ0tO9X9reE+VeV3LqS8tscbhEbihAVTgjqDj51A1ONQYpUXaJFyR3VlNI0nTgw0iY1rKNb/vEX8w/WtFrOrf94i/mH61ota2LNq3b6IRfax2Ssuz2oaVqkOlTXMk1prGnyGMwyDOd5HuzkAn5Y5VhNSrbUb21gkhtby5hhk9uOOVlVvmAedBvGpKD9Geh29vpNjqltBrD29zcLCzjYkpUzEg8i4AyT4qcvdK0WftF230DS+ztnCdM0mdoGiUtLNK6qwP4E4AHSsDt9Qvbe3eC3vLiKBzuaNJWVWPeQDivV1K+W7e6W9uRdONrzCVt7DuLZyaI3L+y2jQaMur3GlWi6YvZJZGmMY2m8J5EH7z/AF5ik9q+zvZ7Q/o2U22iemyTadDPFeQ2zsySk5aSSb2QvT1P61hr3949mto93cNaIcrCZCUB7wucUr6zv/QfQvTbn0P7jitw/wAucUG86ha9mLPt5pejr2OintntE1CZ7aFpnDMhAyg6xjkSB7+dZp9I3Z25t/pIfRoLexSedoUijsYzHGd4AHqEkqTnJGaqS6rqC3a3S310LlF2LKJm3he4HOcfCmze3RvfTDczm73buNxDvz37uuaK+iu1mnaXqvZTWex+l6la3V1otnFLa2aRsJI5IQeKSxGGLbsYHvrmaPadrLP6Ibx71NR1O41W3S3sbMKWWzhUcpW8Jxgj38ge/GExX93DdPcxXVxHcvnfKshDtnrk5yc1K/tBrIj2DVtQ2Yxt9JfGO7GaI2T6T7LtNoX0eWmghNTv4tou9X1GVmkTdkYjDE+yCB5D41xewVvqd19C/aKLQo7uS/OpwmMWu7idF5jHOszuNc1a5heG41S/lhcYZJLh2Vh8QTTVlqmoWEbR2N9dWyMcssMzICe8gGivoXWtVvdM+kiCWw0h9avl0JINZitW+1XLDJBH8Y5dOeCKbj7KWOgdupNfuNTuk07TdLW4T6yZpXs5ZCyxxtjJwMscdc188wXl1b3PpNvczRXGSeKjlWyevMc6cl1K+mSdJb25dJ2DSq0rESEdC3PmfnRGjfThZQ3U2i9p7G5hvbfVLYRzXMKlVkni9VmweYzgcvga7OuWusXv0Wdhm7FJeyRwiUXIsN25Z8jJYLz67+Z7/jWNtdXDWqWzTym2RiyxFyUU94HQGnbLU7+xR0sr26tkf2lhlZA3zwedFfRNl2O7Ppp0Vtd6JafVC6RBffW7g73uS/NS5OOfL1f61B7XdjNO0u07V3i6DbJDDqdl6JmLA4J4QkC/4SSQcfGsDfUb57IWb3ly1oDuEBlYoD37c4pUuqahNnjX13JlQh3TMcgcwOvQURt9/adm7f6XG0GPskkmn6fHI7G2haZmeQIwd0HMopOAo6ZrsaR2J0iy1PtJd6ppumXV1a3Nuno1raPLGkDIrEpCCSHbJ65APwr54TVNQS9N4l9dLdnkZxM28/8AuzmvYNW1GC5luYL+7juJf2kqTMGf5nOTQasVg7K9jO2Wt2lpLp0ur3j6VYW0q4khiyTJ8uWR8CoqwNbXnaT6OpF1yy1TQLrSNIBhvI5Strdw7eSMM4JIxkdef4Vi2s9pdS1jStN06+lVrXTwwhVVwcscszH+Ik+8/Gue+o3r2Qs3vLlrQcxAZWKD/wBucUH0RrttpuraOmn3+l2s01v2PW+jvGB4qMvJQp9wByfjmub2x7Mdm9G7DR28Gkcfj2ttJFqMNs7GNmb15ZJ/ZwcjCj9Dyws6pfnrfXX7Lgftm/Z+Dr7Pw6V42p37WIsmvbk2Y6QGVtg/9ucUH0Zr+kdney2paRbWfZuGYpqNokF2bR+HHG20FpJicSMSSRjkDjurKPpyFwPpE1FrjTUsk3nhMsRT0hcn7Qk+0T0yO6qXNql/PbR2899dSW8eNkTysVXHTAJwKbvb27vnV726nuHUbVaaQuQO4ZoroSxtepFJAVYhdpUkDGPnU2SfVpJJXkIZpWYtudTncMEcz0wT51W1Yr7JIpXEfxnzrOttG21qXnW0b/z5O5epdXKKHgijO9pGZXHrE4yTz+Hurnam6/ZRKwbhrgkd9Q+I/iPnSas3jSdOLDWIjSpy3/eIv5h+taLWdW/7xF/MP1rRa1sWbV0rLQdYvrX0my0rULi25/aw2zunLrzAxXNrraddRxaDq0DybZZTDw18WGJNBz5bWeKWKN4nEkqq6LjmwYZUj55pplKsVYEMDgg+6rzb6tpdwI4L82bww2dnw2aBd4kWSION2NxGziZBOMfhUPthcaXc2VpJZC1hkWTabe2VCCgUeuWCKwJP8LFuZPOgqNFaJNdaYdS1A2s+hJE06GyMlqhRbbc25WGz28bObetybB584t2/Z+SW5urRrJLQ23DihdftA4ugQcY68P393LPuoKLRV+utS0e+h1hJ00+2hW4la3kt4IleRMjYgTh5AwDhgwxk5zXP7dXWkz3FuukwWyxLNKRLCyetGSuxSqouMYPtZPM5PKgqksbwyvFMjRyISrIwwVI6gj3Uir32qu9EutO1MWIsbcpcyG29HRCbhTMSMjZuTCHl62MKBjnSU1rToYbiOKLTCI7G04BeyjYmYcIS5JXJODJnNBRqde2mS2iuHjYQSsyo56MVxkD5bh51o8cnZSOW7SSWzl095mdBsUOii5zsXEe8jhA8y+PWxinItT0g2CQ6hPpc93GbhoFt4444l3PDjrEUyVV+q5x7waDObKwub0TG2iLrCm+RiQoUZxkk8utRas/1tbQW/adLSO3gjvJU4MBRZQqb25KxX3A9Rj3V3ri+0GO5eQfVUkQkmazRLYepF6O4RZRt9Zt/D9rJyCaDOqKtnZL/AIqPtFdOunrcLarIj3MEZjjYzxAkKVKjkSOQ99WOLUOyKO5e1tLi2a4l46jbGcEja6Axl9oHMKrL0II50GYU6beUWy3BjbgM5jD+4sACR5EedaDEbK4iumibRZNRhtZnMyW6CBFM0QjyCm3dgvzxnDAGvF1Hs6dRijka3a2WeZ9qoFi4ptUUOAVICmUEjK46csUGdU7a2011KY7eNpHCM5C+FVLMfwAJ/CrZHPo932puYLhLWzsLm3EJmyrrE6hW4gKqACSmDtA9oiuo+s6HDfRX1glnbvdRXUskawjEJNsY0jxjGC5c46cxmgzqitD06/0SWLT5pjpUdw3AN+JLVQGjDShwihcBtvDztwTkY99cfsfd6NaxXNxqsVvK9nKtzBBMm70gbXXhnlzG4xkg8sA0FUorQrd+z1nqjpb3VlNb2yxRqZIk2zqzO7sS8bZKhlXAAJ7+VR9X1LR0fUYLFdPMENtE9oy2ybjMJkz6xXLepuyG5EUFJ4EvH4HCfjbtvD2ndnux303V3fWreP6WRq/pFq1m9/xuMsSlBGx6ldvUA8+Wc5PWm7m4009n5EaTTTL6NIJFSFRK11xyQysF5Jsx0IXHLGaCoz280CwtNGyCZOJGT/EuSMj8QfKmq0LRtS0T0C1F2Lea8hsoY0WbYFGJZS65dGXOCnuzjODTcU2gfVF0pNkvEBkijYIXhf0gHhg8Pcw4YPrFsHOMUFBoq8nW9OW41OVIdLy2qQiFTZRlfRRxd2BtwBzTPvPKqdqPBGoXQtSDb8VuHjw5OP8ASgbt/wB4i/mH61otZ1b/ALxF/MP1rRaDNqkw6feTWzXENpcSW653SpGxUY65OMVGq79n3P1X2fni1O1tFsr2WW433So6LmM52Z3NkA8gDnpQVBbK7a1N0ttObYdZRGdg/HpTc0E0KxtNFJGsi70LqRuXvHeKus8ltq+ls19NaWiJHwrN4r5QxG/1UkhycDBOThQMZOfenttf6PqOmMumXksrWd3sgSWIRngGMIAvrHcBwl54Ht/GgqF3ZXVmIjd28sPFUOnEQruU9CM9RUerzqus2lzqOv3csemTSraRJaZgjClt8eSAAAzAFuZzyHwqUW0NDavKNJaFZkNsE2FjFwX38YDnnfw/b55zjlQZ5Tpt5hbi4MUggLbBJtO0t3Z6Zq3X19pt52eIeHTI7ttOEpMMKRv6QLrbgYHI8L+Ecsc8Z51JvbrSX7KtpCakxmhsYZUj4YERnDGRvtN3Ntsrrjb1UCgom07Q2DtJwD7qdtbae7lEVrBLPKRnZGhY4+Qq5dn72ym7OaTZ3z6dst765YpMiBtzQrwSxxuKbwQ3uwADyAqNc2dlfdo7KIXVhbMLUPetbzRxRNINxKxtkICRsHI4yTQVptPvUvEtHtLhbqQgJC0ZDsT0wvWmbiCW2meG4jaOVDhkcYIPxFWuy1Ca17c2l3qEtiBEpCBJY54Yk2MFUEFl5fHnnmedPWsumT9nnmuBpa74J2uBtRJxcljwuGowQmNnJRtxuzQU+2t5rq4SC2ieaZzhURSzMe4AUmeGSCZ4p0aOVDhkYYIPcRVxXVbO27ezz2aafBY263McBSJTGwMcgUnOQxJI6/ACvNFvNJl+qE1CHT14808ly/CVSrf/AKlOMBU3Y5DAx8KCnxzSRpIkcjqkg2uqsQHGQcHvGQD+FeBHMbOFYopALY5AnoM/gfKtKtjoPpFw0ltppul4HFjM1tw5k9fiFDu2IT6gO07h1HU1wuxkukxWOrSagtmZly1ulyFbJFvcYAB6+vw/xxQVOOWSNZFjkdBIu1wpxuGQcHvGQD+FIq1obC97Q6ZNxLC14lpxJvsoxFxgreqVPqLuIUc+QLZqRfppT9rLVFNgltdWnDlZXThRTMjJuJXCrhsNywPfQUypFtZXVyFNtbzShpBENiFsuQSF5e84PL4Voyp2TFwksTWOZcwRI20hGhSVQ7BuWJDwWyeROc8s0zY6hplrqkQV7W1RdUtZXVZUKYWFg7goSoXcc8uQzigzeirD2cGm+ljJjN3wJOGL4IIOLj1c5OMdfa5ZxmrJanRn1i3tbe102drm+gim2oGCAxJxSnuCcTccjlgciBQZ1RWozwafBqULz/VQRIIgd8FpGl2hkl3yrgsg24C4BLHHuxXLv5dEjX0CBNNNsbK5YyhVMnGWaUx/adc7QnLPMEUFEkRo3ZJFZHU4ZWGCD3GvACSABknoK1JfqaOe6ac6FPpdxqbKAptxLb2wmyWB5SMWHIYzhc94xCkOmrcym1j0VNSSOPa8r25hdeI24gAmMOBsGOuATjNBns8MlvPJDPG8U0bFHRxhlYHBBHuNN1fYZLC47Y9o71rnT5Ijeu8aTiIrNG0jEsrSAjkMdOZzy6U5dy9n47t7CNdOOntb3jGZVVpA6ySmHEnXOBHgZ5gjrQUEwyCBZjG/BZigfHqlgASM9+CPOkVde3E1sdLht7WTTDCl/cPAlkU5QlYwhfbzycfxety51SqBy3/eIv5h+taLWdW/7xF/MP1rRaDNqKKtVvHpx7IJcqtpDe27BmErJI1yeKOQG/cuFPTbghSc86Cq0Vpc82hydptTn1CHSpo7nWYVVxJkLbPvLONrY8OSemfca5VvptjbaFgDSZtZ2Z2y3cZXbxGyc79u7G3Az0JOKCk0VertbLVNBtE/8uW6TSlSH7ZI2Eq3PrBssMHYSRnqCcU/ND2civrC1aPTzDLqUqTzLLvKRKItgyHACklufv58xQUGGKSeZIoI3klchURASzE9AAOppFatpCaJZ61o9xZLpiXEV3CbyW4nijCIGJ3xqJWUcsZwScqOQzVR7NSaZDp7yXsFlPO2o28e24Y5EJEnEIAIwOS5Pu5UFXoq/W1to1y63K/VkTRiRHtwUxIBKQrevIAPVxzySRjAPM0u6g7OxarLYxJp7WbLfss/Gyw2mQwANuxz2pjvz780GfUVo6Q9m7vVdRVk063W3urmO04bArIgA2E7pFDDkSCWAJ7+lcjW00kWt1FpVrZieW52hpZV3RoIkLFcSFQC+7HNu4HNBUkikcZRGYd4GaJYpIiBLG6EqGAYYyDzB+VWDsxqk1jpHaCKO+kt99mvCRZim5+PDnaM8ztB6c8A1YLKXQ9Tu7eDWmtFgis7Em4D4kLcSJZFJzzwjPke7GfdQZ9FG8siRxIzyOQqqoyST0AFeEEEgggjkQauV59WWna/QWtODEkc0bTyq0YjOJc59WRwMLjPP3ZxU63tuzLaTZy3bRuZnHpDKyB429IwTnibscP3BCOec9wZ9RWjafLYrDc2eqQ6LFbHVLOWRYZkYG3zIrFWDEnGVzg5wcnvrn29ppemaHNLeR6Zc6gkU7JGbkSAniwBPYfmdpkIHwPuoKTRVy7S2+hw9nrVtP4bzuluwdCgZWMeZQ32hY+sfegxjl8ezfaTpEmn6oYIdLWETGLT50uVyy8J2Xe27kx2g+tjnyoM0qQnpVhcxyJxre4TbIjDKMMjKsPfzGCDWgWOk6Ek6LcT6Y8TxxRSxiaMmN/R0LPvMg/jZvZB5qc46UqzvtMi1mxu5Z7R2huNHXLyAqEFuRKSM49UgZPuNBnt7e3V/KJb24luJAu0NI5Ygd3P3czUcgjGR1q46tp9ivZy41XbaekMwsjFDIG2T8VnLqASNvDVRnodxxU3R7fRbnSLCGdrOO5e0Be6mlRhA3GnyrRs6nmuw+rkjA5HdzCiGKQQrMY3ETMVVyDtJGMgHvGR5ikVeezBsZ+ztjb6h9XtapfXD3XHmVZI4zHEAyDcCT6pxgHmKl/+QabPoNxaC3kK3No5kPDwq7ftd44jMTu580XGKDO6KvmmvYzxGz1T6tSBdYVpyjpnhkEZUhua5GCVPIHqKa1QaLaJfvBbWctylmgUOy7TKZiCyLHKwyExyyemcUFIooooHLf94i/mH61otZ1b/vEX8w/WtFoM2pSI0jqkalnY4CqMkmk1fexM9ssHZxmgtEe31tWmuGch1U8PGctjHJueP4fnkKFRV50yw0q/t7e99Ds0bY4ltFd2LESABgDKpHI8/Wxyzinu1Gm6BZT3djYW9sVW0mmjuhcMz7luHVB7W05jC8se/NBQKUUYIHKkIxIDY5Ejr+oq7aDomj6jokLytDFe3UTWkRefbtuAzvvIJ5Aosac+WXz1FSpX0WWytdPSC2eya/1AQu8rh4U2R7GGG95A9oHOKDPaK0/SdN0bTbvRbmaKxaaHUrWN3LkRSxOrbn5ynIBC88KO8e6q72a0my1O+1CG+gjge1mW6lVZCNtuhbjIuSc8ipHU+qedBUqK0PSdK0GdLN7y2tYrORbdluPSmDSSPIokjYb+QUF/cCAoJPPnzdJ0K1bVuz9lewDjXSTcZOISN+XEZfachRhScYO3JoKdRWnLovZ1ZpfS7BleMQLLDAsnNSrF5IhJKrYOAAxyMjpzqp9oXgl0Ds21vbW0e23kjkkjY7mcTPycFjg4KnoPa7sABXaK0DU7XRPTZ4eBbytPNf8A/EvcuzoETMRB34PPvBzULSdKsZOzMNzc2UG2SG7aS8eZlZHRfsgo3YOWwMbTnNBTK92ts37TtzjOOWe6tKbRdHtYWLGCKeJbiIzQTMizD0aQhl+1YkFlGDhc5wRzxUfW7PTIEgsOHbWulnWFVZopy7S2+McUksccueQAPhQZ5RWg6fpGny3rJfaVY26elpFMBdPiC3O7MykyHceR58xyHLnzNN0HRpNWt5J44Tpkp08KzXBAbeE43Pdnrvz4fhQZ9TouJhatbCRuAziQp7iwBAPkT51eOzGn6FrEIa+toNOj9KAlnZ22CLcg2oxkyGwWPNWznqMVJTStCk1UWq6e0cjxAF5QRBG28jeRx923GMtuOME7edBnNKKMEDlSEJIDY5Ejr+oru9n4RpfazRm1KGEwNPDKVlb1DGzDDHB5DHPn8M8qscP1fLYafp2pWtmiyahfB8Svm2GyLaVw/TI5bs5xQUIzym2W3Lngq5kCe4MQAT5AU1Vy7cafoljdW8OmRyRx+kOpmAykkPq7WB4j7j1ORtByOVTr3TNGtrmR5bGyQRi94UK3TssyIimFyQ+ckluhAOOlBQdjbC+07AcFscs91JrRLa00u706WxiW3iF9JbNFEsxxHM1rIRgliccQgcycZrl6bFY6Z9I9ramG3kt7eZLaQSueG0gUK7ZyORfJ64/CgqBVlVSVIDcwSOteVeF9AudOsrG+tbVJEsL2QOJWDQSI0rog9bGMgDBBJz1qVdWmhelxxSW8E5ubq7R52uXMiKsaGMg78e0T1Bz0oM9oq6fSHpNjpAghs7KOFzcTDixCbDRgJtVi5ILjJzt5cxVLoHLf94i/mH61otZ1b/vEX8w/WtFoM2ooq7dnez+nanoUd08bceVZLGMCTGbwnfGcdxX1cdMigpNFaFcdn9GXTNUngt5p0gkuITLFxHMJjQBG5eqAzZJLe48sYpXZnSrMaJFKbYcC8snF1qJdvsG423hgZ2j1AG5gnnnpQZ3RV/v9F02ySS4utKFvNHDcMLJ53wyo8YjkJzu9be/Q4O3IxTdl6NbdsLHTY7SCfTpUS5jtZWYqJZrZCRkEE4OAMn/WgolPWt1NamU277DJG0THAOVbqPhmrf2R0SG/s7+abRmu5Yr+CB4xI6C3icS7ySDyxtHNs499Ox6Ro/G0q1t7T0uaa1uLkNx2BuHR5ljjABGN2xenM9BjPMKLUnTr24068S5spOHMgIB2hhgggggggggkEHlg1dpOz+lFrqVrZofq9VuLuDiscB7fcI85yMSqU7/XAPMV17DSbW0giurWzM4m0eY3F40rMLZjZclwDgZ3HrnrgYxQZnqWoXOpXAmu3VnChFCoqKqjoAqgAD4AVFq49v8ARdP0jhJYQTIOM6RzYcpcRADa+5uRY8z6vq4IqZ2l0Syj0nU7m0tXV7eY77m4MmH+0ChYmztY4PMEZ5Mc0FCp6W6mltoLeR8ww7jGuB6u45P6VpGm6LZLpfoxsf8Ag7iO0kF3xWBu5Chcxg52j1/U5DI95zUSTsra3K2Yg06WK/aa1N5Zo7sbaN2lD5BJIGEjbJ5jcOfOgzyitG1rT7ZuzdnNNpwMFrp7cK8MjgcQXUgEXXByCeXtc855VDvLKzu+3UkbaOwtpbcSQW9qkjq+UBVyA24r37SOnzoKLRV9m7K24meRbZXtobS9M8sDs0STx8UoNxORyEeAevnXQueyunpqYgfSZLci7eK3i4r7r2MQyNuGTnkyoMrgetjnQZlRWk2/ZrTneInSi144txdWHGcehq7Sh5Ou4YVIz6xIXfz6io2m22k2vaa2sLbS4LziabIwM0rtxpXtiy4AIwd3IDrluXPGAoLu8jAuzO2AoJOTgDAHkKTVk7H201r2y0dbmBlMkiuqNy3KQcfHnXau+zMFxp8Zt9Lkt9WzbvPZI7s0KF5lclSSwGFiJz03e4GgoNFXP6Qra0tY9LTTtPggt4vSIDNGWJkZLiQYYljz27T3+t3YAl9o7fTBNeXr6TBHGLGya3SKR1Ri8YDP1JODkcj1XnzzkKLbTSW1xFPC22WJw6EgHBByOR5GkyO0js7kszEkk+81plp2R09J9aaXS7qeP0wR6btEjo0R3EO20hmTAHrA9cdeYrgdoLaCDsjDFDZWfGttVuoJru3Z3yAE2DJOCp9bHLonfuyFQr1WKsGUkMDkEe6r4tlocMc6PpUUr29nZXG83EgMjSiIOCA2P/2EjGMEd3Kldpezel6Xol3JbxTTGNnVLtA7ASCcpsc+wBsGfFkg9DigqOr61f6vs9PlRwrM4CRJGCzY3MdoGWOBknnyrnVodv2b0yS1tw1oQkkMJt7vjH/ipngZmTGcerJgYGMYwc5qDfaJZaT2fjuL/T5PTzZxs0UsjIVkaadclevJUTly/XIU63/eIv5h+taLWdW/7xF/MP1rRaDNqKKvPZSDTtQ0m2N7BFHOLuLSzNtXAjnLHiHPLeoWQAnxKf4RQUairvqHZaNtMM1tp19b6h6rGyYl3VOIyl8YBwfV/HPfXT7R6estxc6TBCjGIXoiWK3jEsjRTEKCVUEnaD064oM1orTbTs3ALaHTJrC7likurNp3DFWtuJbKzu3LkAWJ58uVcXX+zunad2Zgu4pZJJ5IYJUlUSFXZxl1J2BBjOBhifVOR3BVEvZ00+WyV8W0sqTOmBzZQwU569HbzqPV6sezdgbS1vm4yxXsI9GBIOXWGQzHmOYDoAPgwru23ZezawvNNa1nhtlvUaKeRmPpm22nYFSqnkxAPqg8j30GUUVoidk9MecpFDeTRtNwppAWQWQEKOXYMgO3czYLAZCfjXI0LQba9stIeS1uZUvLkxT3SPhIAHUBOmAxB6nxDuoKlRV1udE0+zs57y70+6ikSySc2ckxUo5uOHzJXOCuDj491S5uz2i+m3XDt7kQWr3ilDcZMnCg4iHO3lzzmgz+itB0/s5oup3FvFHFPa7o7aZi0+7dxFbKD1cjJAAOCefQ1F1LRNI04XMrwXExiW3DQ7pIgjuzhsF0ViMKpHIcyeuKCkUVo2odn9Miv7SwFjcNDFNeWxuIldzI8bsED7QT0wTgZxVeg0m0ttb1uDUoWkjsIXkEUE23LB1AG4rnHre8Z+VBWqnHVbw6pLqJlHpcpcu+0c9wIbljHQmrm/ZfRoLLTJpjdyLcC3fdbpI5fiDLp+z2+rnAwxPqnlnkPbvsha28Dl7WZtyzu00Mj7LUJCsibwyAgsT0bHcKDPaK0TUNEs9SvJ7qUSYsYLaS6VDjMPoasMcuR3Jtz3utcvtP2fsNL0C1uYHkaeVYGVwJCsgeLc+SUCDBwAFY+/NBUpZZJmDSu7sFCgsckADAHyAAFIrRLqOxtrfVpV0wJaSaLZSBFcqJGLwbmDY8WQce8GvD2NtOHqbcOXgpHcy20is7MvDQsquQuwdMcyCc5wOVBnlFXDXtLhuu12mWlhYpbQ3VpauibmCyboVLMCAT1yOQJJB99djVOxthFpAntYLkXb2j3LCZZUij2mQEBinJsIDh8ZyMHnQZvRVy7KdmrHV9KF3cyyRjfJakq3LjvsEH4EuxPwjNdKLsfpaWt21y8/EtpTbXCrxHaB1hQscIjDnIWHrFRhTz6kBndFXztXbPPo1vHbQtJIRZttRcnAsUJPL4AmofZDs9p+r2HpN48saRTNDM6sAA0gRYD08bMT3haCn0Votn2N0xRcJevOJLZ4oboIJGaBjEGchUjbJDEjDED1Dz7s6oFwECeMk4AYfrV9+sLP8Avdv/AJgrP6KAooq5adYWF92a0yC4imF1Ib545o3VQCkasAwKksMjHUYzQU7c2c5OfnRk5zk5q/ydirT0Mr/xUd+shtjGJN6tMYXdQCY1HNk28i3tDn3ov+yOlWOlzy3N5MlzGkqHmWCzxxqWjwsZBy5I5suBg86Ch7m58zz686MnGMnHdVs7PdmoNR0Wa5uRMkxt7meB0ckHhIWwVEZHMjHNwefTvX2e7L2uqaKt88s67klt1Ckc7sYMSdOjBh8fVPOgqGT3nlRuPLmeXxq8v2U09BNGovpHWS5hMquuyF4IVZi428wWLY5jAx1p1+ymkyXWqJbLqGNNuZIJEMyM1wFilcbcINpzF3NyPwoKDuPPmefWjJAxk4rS9Q7MaRPBHe3jz2EZhhhWM5LQ4to23OFiO4kt/g6Hn3c3TbfS9HvJmWC8lmj0hbpn46DDyJEfUyh243sMnPUd3MKMST1JNGT31f8AS+zsFvq1zcMs7pFdwxRGUArIskErknlzPqrjHfVc0vS7abQ5b2eK6lkNwLdTC4VIcrne/qnI+HLoedBwsnvr0knqSavVz2W0yC5l4kWpRwwG9Ro5JVDy8BFYMp2YAJbpg9OtLt+zWiXXEaNNRjWK2S6YNcIxYNbyS7R9mMEFAM88gnkKChBiOhPnXma0HTOyui6mLMQfWEBntorr150fk1xwCg9Qc84IP4Y99cu10Cxh0Q6hqUd6zLZ+kGJJFiy3pPC6lDyxz+dBU9xxjJwKNx58zz61o1n2e0u1uHint57yPGpJEgZFfMcKOhyEJJ5n4A4IHUGuapodraaDHqaPNw7lYBbByPWYq3Gzy5hWXA/mFBXMnvNGSRjJx3VpFh2e07StVa4MF4ws5JovtnXFyRbSOJY/UwACoPPd7S1WeznpN9rlzPBFC1vzluJLuBLkRRbupyvNugGACSeWM0Fdye+jccYyavWoLaX+h3P1bbLYQ26PLJHLpsZOw3LbcXB9fcFdBj/CRmuq+mWb6xcQ3en28Fpbap6NalLdQZIOHMST04mNsbZJPtdedBmGTy59KNzeI+dXZtAsL/VrC0huoLbTDZcWCd0KyXJ2szMdqtzDqVIJ5AYBPU8bQNKtbt9YNyJ7tLG34qLaPt4p4saciyk4w5PTNBwcnvr3cRnBPPrWjax2H0fT4Yg+oTRzXC74zISeETJt4TgR43AZydy8/dUGbsvp6bpjbaoioLoG1eReK5hMeGB2cgd55YPsnnQUuC4mt3LwSPGxVkJU4O1gVI+RBI/GmsnvrRYOy9lLIuml5IYTOJyZMGVR6HxjESF659X2evu91U/tLZ2VjqXC06ZpYTGrHdnKMRzXJVc/PaKDl7jz5nn1ryiigKKKKApYkdQAHYAZxg9M9aRVt0Xstb6nowvlnmBaCVFUAEG6U5WP5MmD35oKyby6OzNzMeHgplz6uOmO7FeC7uAkqi4mCynMgDnDn499Xtez2kslrpL8czyapPZJdR7QQ4jhGW5ZZQ5OACORPOuJrWgWtlpbSwPc+kQNbLK8mOHJxoi+UwMgDGOZOevLpQV+O5njiMUc8qRk5KK5AJ+VJSeWNQscsiqGDgKxADDofn8avN52Q0m01eSye9nd7ZbrjojoWfgxM4deXqglcYOT8aVp3ZPR7hI7yae5TT5BCzb7mKJrdXD5ZmZcPzRsBRk0FFFzOEkUTShZDlwGOH+ffQtzOr71mkD7t+4Mc7u/58zV10zsda3tvbLK1xbXbNblkMqvvWYepgbQFJyuMsevPFSZ+yGhraQXDX0kCyngyA3cUwtZBkncyrhxjadq8+Z55GKCiC+uw0jC6nDSDDniH1h8e+mjI5JJdsldp5+7u+VWXstolrqem3E128qpFK2REF3ELbzSciR3xgfjXjaFaPqVi1sty9hc2ZvGR5lV41BZWy+3B5pn2eh6UFfN5ctGkZuJiieypc4X5D3daRFPNCrrFLIiuMMFYgMO499aEug2WnXttbKiXETXSOrSoGYo9qJApOBkAt3DpnAqv9ldAtdWih9Ka5D3N2tlE0ONsTEZ3vkHI+Ax0PPlQV+S5nkIMk8rkLsG5ycL3fKkieUZxK4yNpwx6Yxjyqx9opLCOHQLWK0dEW2iluCpjBlLAEkMEyD19ot7uXLnYb3SNDF7rVkbO5ht/ruG0gKOpkiBEo9orzXIB2/Ac/fQZ2JpVACyuABgYY9M5x586VNdXE5JmnlkJGCXcnIznHP41Ztc7NWOl6NxHvD6eIo5gpZSsoc42qoGQQDnJODgjAqRpXZizmWzu2nl9HukhEIIUkyMJOIDkYwpifzWgqC3M6urrNKHUkhgxyCepFPz6hPPptpYvj0e2eR0Aznc+Mk8/wDCOlX6w7K6bPp15YBZ1nguYXmupCg3gW08rLFy9UHaBkk55H3YrnWvZTSri6hjiurqVLu4S2iaJlYW7sgYmQ4wwBOOW3IBPLpQUtrmdwgaaVggKoC5O0HqB3Cvba6uLVi1tPLCxGCY3Kk+VdzWNFtoNDtb/TDNcxYRbicuNqSMmSuzaCuDkZyQcfGq7QPzXl1OhSa5mkQncVdyRnvpLXM7CPdNKeGMJlz6o7h3U1RQLEsgCgSOAudoz0z1xUvTNUudNjvUtG2G6hELuCQyrvV/VIPI5QfhmoNFA96VccJ4uPLwnO5k3nDHvI99SrPWL20lmkjndpZITBvZiWVTj2Tnl0rn0UDnHm37+LJv3b92453d/wA/jRPNLPIZJ5HkkPVnYkn8TTdFAUUUUBRRRQFSbe/vLaNI7e7uIkSUTKqSFQsgGA4APJvj1qNXqqzeyCaB9b26V0dbmYMkhlUiQ5VzjLDuJwOfwFez393cW0NvPdTy28P7OJ5Cyp/KCcD8KY4b+E0cN/CaCXLq2ozJEk2oXciRIY41aZiEUjBUc+QI5Y7q63Z3tdqGhwNHb4kBdWBeSQclzhSFYBk9Y+qcjzNV7hv4TRw38JoOrpfaLU9PuLR1u55obYgx28krmMYOQAAeXPBGMYIBHSn9U7V6tf3AlS7uLb7EQMIp5MyKCx9dixLH1j1PTArh8N/CaOG/hNA5DdXECMkM8saNnKo5AOQVPT4Ej5E0uC/vLeaGaC7uIpYV2RukhVkHPkpB5DmeneaY4b+E0cN/CaCTLqV9LIHlvbl3ByGaViQcYznPdypNrfXdmkyWl1PAky7ZFikKhx3NjqPnTHDfwmjhv4TQeySPJt4js+1Qo3HOAOgHwp+XUb2Zt0t5cu25Wy0rE5UYU9eoHId1R+G/hNHDfwmgkyalfyWXocl7dNabt3AaVimc5ztzjOaSt/eJDDEl1cLFCxeNBIQqE9SozyJ+FMcN/CaOG/hNBN+udT4cEf1je8OAhol47YjIzgqM8sZOMd9B1nU2e4dtRvS9wu2ZjO2ZR0w3PmPnULhv4TRw38JoJU2q6hNbLbTX93JbqnDWJ5mKhcg7QM4xkDl8BUOlcN/CaOG/hNAmilcN/CaOG/hNAmilcN/CaOG/hNAmilcN/CaOG/hNAmilcN/CaOG/hNAmilcN/CaCjAZKmgTRRRQBqQnsL8qjmpCewvyoPaK07SOyWkydg7XXp4VmuEsLyaS2EzB5nWXYj4B5IgOTjHQV5d/RVJaPpsU+rIk93KtuVMI5SNEXXZ6+WUkbSSF5noaDMqKvuhdj7Qdo4tN1KdHMujvfPv3RrbyGJnTcVJJA9Unl7+lTL3sfp1v2fjmhktbmZdGmvXuIXkaOSRboRgrkrjCnHMY5Hl76DNqK1q1+jbSdN1rTbfVNVa8NytxugSHYNqWzSCVWEmSuduMgZwfxOzf0faZKHEsovo7gWM9rNIjx4jmMwYMiv1zH4vdyNBktFaFadg7MdmrfW73V9iy7Wjt1hBWQmXh8MPvB3ciT6pwO+uyfo/0Ru2sUUd3O2kS313ZtAIirwvFGXChix3Dpz5Hl0oMkoq5WvY+1vezepavZanLOtq0hW3WBOIEUDDyLxMoDn3BsVTaAooooCiiigKKKKAooooCiiigKKKKAooooFKpY4FOcH/F/pXlv7Z+VdfStMfU+IlvNCtwuCIpG2bl95BPLl1Pwz3UHJaEgcjn8KaHUV0LuJIbmSOKZZ0RsCRAQG+Iz7qgH2/xoIh9o/Oig+0fnRQBqQnsL8qjmpEZ3IuPcKDp22uanbRQR297NHHBHJFGobkqSe2vyOedSJO1GtTLYpc6ldSx2UiSQKZOcZX2SD3j3VxsGjBoO9r/ai+1TtPqOtRO9rNebkKo+dsZXbszjmNvKoKa1qKWgtVvJhbiBrYR55cIvvKfItz+dc/BowaC+9p/pIu9XtYI7O09AmjfeJlm4hQcMxlI+Q2IVJyMn51WbbtNrVssS2+pXMaxLGiBW9lULFAPkXbHzNcjBowaC8RfSBLH2OTQ0sF3JCYVmM2UGZN/EEeOUmf4s/hVcHaPWBcJONRuRMlw12rh8ESsMM/zIrlYNGDQdiTtPrctndWr6ndG3umZ549+BIWOTn51xq9waMGg8or3BowaDyivcGjBoPKK9waMGg8or3BowaDyivcGjBoPKK9waMGg8or3BowaBcLBX5+8YqRn41EwaMGglMwAyTUXOWz8aMGjpzPSgin2j86KDzJNFAUfjRT8agIDgEnvGaBjJ76MnvqTy8K/lFHLwr+UUEbJ76MnvqTy8K/lFHLwr+UUEbJ76MnvqTy8K/lFHLwr+UUEbJ76MnvqTy8K/lFHLwr+UUEbJ76MnvqTy8K/lFHLwr+UUEbJ76MnvqTy8K/lFHLwr+UUEbJ76MnvqTy8K/lFHLwr+UUEbJ76MnvqTy8K/lFHLwr+UUEbJ76MnvqTy8K/lFHLwr+UUEbJ76MnvqTy8K/lFHLwr+UUEbJ76MnvqTy8K/lFHLwr+UUEbJ76MnvqTy8K/lFHLwr+UUEbJ76MnvqVyP8K/lFKEbeBfyigh5PfR+NTGQqMlF/KKRgNyKr+AFBGoo6EiigDUhPYX5VHNSE9hflQXnRfo8vNW0PR9SgvbcLqFyLfhFTuiBkaMOe8blxy7xXCPZXWjpx1BLCZrENtE3IA+ttzjOcbuWelWLsn9IsnZ+PR4vq1LmGwiljZGmK8UtMJVbocFWUd+aiy9uGk0GSy+rYxePZtp/pXFOBAZOJjZjG7PLdnp7qBvU/o87RWWuXOlxWRu5oFVy8DAqQeQ6nqSCADzOOlVJ0aN2R1KupwQRgg91aRbfSjwNU1C+XRYt9/wZJhxVbE8eQJE3owXkemMj3Gs8v7l7y+uLqX9pPI0jfNjk/rQMUUUUBRRRQFFFFAUUUUBRRRQFFFFAUUUUBRRRQFFFFAUUUUDsAy5+AqWkErwvKkbtEjBWcDkCegJ+ODUS3OHPyrp6ZqV3pkzS2Upjdl2nkCCPkeXI8x3EUEe4hkt5XinjaORThkcYI+YqD0f8amSu0js8jFnY5ZmOST31D6v+NBEPtH50UH2j86KANSE9hflUelJIyDA6fKgfoprjv8ADyFHHf4eQoHaKa47/DyFHHf4eQoHaKa47/DyFHHf4eQoHaKa47/DyFHHf4eQoHaKa47/AA8hRx3+HkKB2imuO/w8hRx3+HkKB2imuO/w8hRx3+HkKB2imuO/w8hRx3+HkKB2imuO/wAPIUcd/h5Cgdoprjv8PIUcd/h5Cgdoprjv8PIUcd/h5Cgdoprjv8PIUcd/h5Cge6Uriv3/AOlR+O/w8hRx3+HkKIkNIzDBNJHUUzx3+HkK8MrkY5D5AUUg+0fnRRRQFFFFAUUUUBRRRQFFFFAUUUUBRRRQFFFFAUUUUBRRRQFFFFAUUUUBRRRQFFFFAUUUUBRRRQFFFFAV6qs3sqTXhqQn7NflQM8N/AfKjhv4D5U/RQMcN/AfKjhv4D5U/RQMcN/AfKjhv4D5U/RQMcN/AfKjhv4D5U/RQRyrL7SkV5UnGQwPcf0qMKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooA1IT2F+VRzUhPYX5UHSthZyWsayqBMSwJ37eQGR16ZJxn4U6bbThlhcMyDfgbgCSOJj3e8CPzNe2uhz3VlFPFIheTBWPnnaX2Zz09qnINAlljimEyi1kleMTEYXAzhufeQQPiKCPbNY8CFJwdznDkADb63Xd8vdinraxsriSMI7kFC5G8cjgHB5cueR8eVIvNGa2s5pzLuMUpjZNvNeeMnnyzXKVipypIPeDQdmW10tJJV3z+psG3euckAt1x0OR7+lMX1tZRwbraUs4PMGRTnr0x+FcyigKKKKD0dG/lP6VEFSx0b+U/pUQUHtFFFAUUUqMZdQe+g8we40YPcalDcemaXbwy3EgjiBZz0GetBBII6iipTg4ZWzkA8jUvspBHddo7CGZd0bScx34Gf+1Y3vsVm08GzBw5xcSuHHGYjqag0XVLiISQadeSRnoyQsQfxxTn9n9Y/5Vff5Df0r6MTCqAowByApWa6P2xbyfd6+PVbD44k9Hzj/AGf1n/lV/wD9O39KP7P6z/yq/wD+nb+lfR+aM09sW8p7r4XxJ6PnD+z2s/8AKr//AKdv6Uf2e1n/AJVf/wDTt/SvpDNe5p7Yt5T3XwviT0fN39ntZ/5Tf/8ATv8A0o/s9rP/ACm//wCnf+lfSWa9zV9sW8qe7GH8Sej5s/s9rP8Aym//AOnf+lQru0ubOTh3cEsEnXbIhU+Rr6gzVG+mC2il7LmdlHFhkXa3dkgGtuD6UnExIpNfFxs36u1wcG2JS+s1iZ8OTEaKKK7h5YGpCewvyqOakJ7C/KgmQ6jeQQCGG5lSIZO0Ny59aTBfXMEfDhnkWPIbaDyyM+78TXVsb60t9MjzwWlRSTC8eS8m8FTnHTHLr399e30mmT6xbzmVGgkBM0aRsiRnHLHvIJ58ueK09rOsxNZ4/Zyu712YmLxru+/8cXKmv7qaKSOWeR0kbe4J9pu899Ra7tudJ9HPpHC4vE57eJ03L0+G3d151JtBo93dwQiCJS2Ohk5niEY69NnOpOPpv2ZWuU2piIvXf81ZoqyLNpG5IHZRBvDuFD7c8MjIzzxuxSFm0hiImVFgF0GON5Ozb7j3Z/GnbT5ZO6x546/m5XqKl6obY30noQAgwMYJIzgZ68+uaiVurOsauNauzaY110ejo38p/SogqWOjfyn9KiCqxe0UUUBSov2ifMUmlRnDqT0BoOjp/pPH/wCDYq+OZDY5fH4V17NrhrhV06SPYCwYjlufHUge7PT3VwArHoDS4XlhkDxblcAgEDpQFyJBPMJ8mXLb89/PNTOxX/5Tp3/qf9jXPfKhi2RkHrUnsxcx2ev2M852xpJ6x7gRitWPEzhWiOUuTk7RXMYdp8ItH7vourLHdxmFZbiVARC6Lb+kB4z9kwyFBynPAxnnmqnHdQyIGSVCpGQdwpfGj+8T8wrx+HiThy+nZjLRjxEarE8enGNmj9HwV3PmU5QmJSAgzz9csPf0pVxBpYs5JIpYzKE4oTfzO8YCdeqkZPz51W+NH94n5hXvGi+8T8wrPto8sNMZS8afqTu/Pz+Vis7uJdKWFrhweHNmHd6jEjlu59feOXUCnZrfS3uxBE0SRsDtnMwxgFSCRuODjd1x1HKqxxovvE/MK9E8f3ifmFWMfdpME5OdqbVtMa6rJt0+aJioiT7PILy54fN/VA3A+Hpn5c6VJHp7FzuhaPDlnMx3hs+qAM8weXPB6nnVaE8X3ifmFe8eL71PzCnbR5YTultd15dfVPRTta0SNPtJFKoxYbQRtPMnqD/pWe/Syf8A7OuP50//ALCrZ6RF96n5hVG+lrUbYdnDaiVWmlddqg56EE/pWzLzt5ikxHGGrPVjCyWJFp/1nx+cSxgV7Xgr2vWvmgNSE9hflUc1IT9mvyoHki3KDnFe8D/F/pTQYjoSK93t4j50DnA/xf6UcH/F/pTe9vEfOje3iPnQOcD/ABf6UcD/ABf6U3vbxHzo3t4j50DnA/xf6V40W1Sc5xSN7eI+deFiepJ/GgB0b+U/pUQVKzgMT3H9Kiig9ooooCiiigKKKKAryvaKBxLq4RQqTyKo9wYgUr0y6/vE35zTGKMVjsxyZ9paOJ/0y6/vE35zR6Zdf3ib85pjFGKbNeR2l+cn/TLr+8TfnNHpl1/eJvzmmMUYps15HaX5yf8ATLr+8TfnNHpl1/eJvzmmMUYps15HaX5yf9Muv7xN+c01JI8jbpHZ272OaTijFWKxHhCTe07pkCvaKKrEV6rsnssR8jXlegE9AT8hQK40vjbzo40vjbzrzY/gbyo2P4G8qD3jS+NvOjjS+NvOvNj+BvKjY/gbyoPeNL4286ONL428682P4G8qNj+BvKg940vjbzo40vjbzrzY/gbyo2P4G8qDxnd/aYn5mvKVsfwN5UbH8DeVAmilbH8DeVGx/A3lQJopWx/A3lRsfwN5UCaKVsfwN5UbH8DeVAmilbH8DeVGx/A3lQJopWx/A3lRsfwN5UCaKVsfwN5UbH8DeVAmilbH8DeVGx/A3lQJopWx/A3lRsfwN5UCaKVsfwN5V4VYDJUj8KDyiiigDUqJikahfeM1FNSE9hflQO8V++jiv31N+p7waWmoMsSW0meHvmRXkwcEqhO4jPLkPcaav9NvLC9mtLu3kjuIfbQjJXyoI/Ffvo4r99ePFIgUujKG6EjGak32l31hBazXtrLBFdIXhaRccRR7x8KCPxX76OK/fTltZz3NvdTwpujtUEkpyBtUsqg/HmwHLvpoRSMoYI5UnAIHInuoPeK/fRxX769MEwLAxSZXqNp5Ul4pEYK8bqx6AjBNB7xX76OK/fU+80LUrJbtrm0dPRJhbzA4JRyGIGPkrc+nKucY3CByrBDyDY5GgVxX76OK/fUnUNLvbC9a0urd0nAB2j1s5APIjryIqOkErE4jbAO0kjAB+J91B5xX76OK/fSpLWaOR0MZJRzGSvrDcDjAI5Gm3VkYq6lWHUEYIoFcV++jiv303RQOcV++jiv303RQOcV++jiv303SkGXAPfQLDyHoCfwo3S9x8q6cem3T2ZulReFtLAb1DFQcEhc5IHeB7j3Gi2064uODsCLxsiMySKm7BxyyR7z+vdQcwvIOuR+FecV++ujc2F1bW8U1xA8cUrMqMwwGK43Y+WRXMcYcjuNAriv3/wCle7pe4+VeQDL8/cM1J2naWwdoOM45UEcvIOuR+FecRm5E8jUl1Kkq4IPvBFRMYbHxoIh5E0UH2j86KANSE9hflUc1IT2F+VBZrHX4LfstcaZOLi5kcHgpIEMdu5YHiIcbgcAjAwDmrFH9IMKarq17Gl4st8YpA77JDEyB8oA3Iod2fw6VnFFBde23aK01DToLC0luLjC2sjPI32cRS3VCkY92STn4qK4Go6qLzRdJsysnEszLudjndvYEY+WK5NFBZbHWLD0zX/T/AE17bU0Kh02GUfbJIC3QZ9XBx312LPtpZw6Lpemy21w1tasoliXaolCyM4YMPWVuY6d3XnVCooL9rHbqK5haOyS8iMhtBMxcAyrDxchsHnniLyPhri9q+0p10wv9uJorq4mWSR8kJI4ZFB/w4Pnyqt0UGhSdvo/rq5vYlv8Ah3WoQ3k0bSjmirIHi+K+vyz7hXK13tWmpdlLHSYo5IeAkSumxShKAjeG6gnOSO8mqlRQaRc9vNOnnjaW21GQAmRWaUZgfhKgEYB9n1SSCeeRy5Uzf9ubK6j1ZTa3JW7uRcxR7gojc8PcSVI3Z2HkQR06c6z2igvkvbaB72zuoTfWz213PNw0KtG6ySO+4qf4wH2/IDmKq/afUINV1y6vbSGSGGUrhJHLnkoBOST1IJxk4zj3Vy6KAooooCiiigKVH7a/Ok0UFjg1dI7BIjblrmOCS2jl4mFCOWJyuOZ9dueR16cqVZaxHb6la3TW7slrGiRRh15EcycsrDm248gOvWq8JWA9xr3jN3Cg6lzfGexitjHt2Tyzbt2fbCDH4bP9a5EnN2+ZpRlYj3D5U3QO2/tn5V1tK1SfTWk4SxSRyD14pk3oSOhwfeDzH9M1xQSDkdac4zdwoJdzPLczyT3DtJLI25mY5JNQf4/xpTSsRjkPlSB1FBFPtH50UH2j86KApSSFRjAPzpNFA5xj4RRxj4RTeaM0DnGPhFHGPhFN5ozQOcY+EUcY+EU3mjNA5xj4RRxj4RTeaM0DnGPhFHGPhFN5ozQOcY+EUcY+EU3mjNA5xj4RRxj4RTeaM0DnGPhFHGPhFN5ozQOcY+EUcY+EU3mjNA5xj4RRxj4RTeaM0DnGPhFHGPhFN5ozQOcY+EUcY+EU3mjNA5xj4RRxj4RTeaM0DnGPhFBmbHIAU3migKKKKAqTCFVBlFYnnk1GNSE9hflQObk+6Tyo3J90nlSKKBe5Puk8qNyfdJ5VMn0fUoOFx9Pu4+MpaPfCw3gDJI5cxjn8qgUC9yfdJ5Ubk+6TypdpbT3lwkFpDJPO/sxxqWY8s8gKLu2ns7h7e7hkgnQ4aORSrL8waBG5Puk8qNyfdJ5V60EqwRztG4hkZlRyp2sRjIB95GR5im6Be5Puk8qNyfdJ5UinYLeaficCJ5OGhkfYpO1R1Y9w+NAncn3SeVG5Puk8qRRQL3J90nlRuT7pPKiGKSaVIoUaSV2CqijJYnoAO+k9OtArcn3SeVG5Puk8q9hiknfZDG8j4LbVGTgDJP4AE/hT9hp17qLuthaXFyyDcwhjL7R3nHSgj7k+6Tyo3J90nlSWBViGBBHIg09Da3EwjMUEriSThIVUnc/hHeeY5UDe5Puk8qNyfdJ5UkjBweteUC9yfdJ5Ubk+6TypFSIkG0EgEmga3J90nlRuT7pPKpc9s8W0TQtGWG4bl25HeKhMMMR3HFArcn3SeVG5Puk8qRXu09x8qBW5Puk8q8OxuXDXn3CvCCOoNA6igi9CRRQfaPzooA1IT2F+VRzUhPYX5UHtFFFBo8HajSota03UZpo5NRInS7vIbUqGV4SilkJwWDEkkAZHfT/ZjWNBkTRrGWLT2nN2vpMs9rgseOW4gOMBdmBg+7IxWY0UFq1G40XUe0emi4ujHZJAqXl1BbcPiONxJVAOWRtXOPdnFR9Y1G3vO0lzcGa3e29HaKEiBmRVEOyNQGwcjCjceh51XaKCyR3OmzdldPguLrbc2d1NK1uYmPFR+FyDDkPYbrVtl7SdlpNf9KEVvFbRqeEsdlyZTIDskUg5IXIGPxOKy6n7OAXNykLTRQBj+0lJCry95ANBdpu0ekQSrHYw2/o8VpdCMtZITx3llMZJIJOEZOvIVB+utMTXtbuYV4dteWDQoqRbRxWVN3qjoNwb4VydW7OX+n6hcWaqt5LbKWnNoGkWLBIO445dPlSbHs5q17BLLb2FyypCJ1HCbMqb1TKDHrc3HSiLXqPanSLp7yPgWot5ZtQChbGNTwmjHowBC5BD5+I99dXXdY7O2upXFsGszcDiCC5isUaO1yke0EAfacw/PBxurNfqrUPRvSTY3Qtt20zGFtgOcY3Yx15fOly6NqKeklbO5kit5TFJKkLFFYHGCccufuODQXI9rNJtNb0u40yCOG1h1Z7ufFogfhbo9uDjI5BztBwM/KmbLVNAj0fVorycXF5cccKxtAFLFRwnTAyvPOefLu61T49Mv5Jlhjsrp5WZkVFiYsWX2gBjqPePdSZNPvY7U3MlpcJbBzGZWiYIG8OcYz8KK0D+1ukDXxdwLFboLq/jSSOzRdlvLCFiyoHPDFjjrj51XuyWqWdnd3sWqzwPplw6GeF7dm44VjzTaQUYAnByOtVaig0HS9d7NwWemJNAhSKWDfA1orMpW53vIX6sDF6u3/SkaT2osXtIItTeJUj1mO9khWzTZJD6gIAUYGAvT31QaKDRNP1rRLuTTbJ4LQqjWIXi26ou9XPG3vgHaVPPJwag/SkIF1KxW0eza3WEqoh2cT2z60mxVGTyxy6AVSaKAqbaOI3hdhuVSCR386hVPsLeS6mgt4RullYIo+JOKDr6/eQXEaJDcNcN6RNOXKkYD7cKc+8bST7ufU1W5P2jfM115NPK2D3aXEEiJIImVd24E7sdQAfZPQ1yJP2jfM0CoAC/P3DNSPd8KYt/bPyrr6VqkunGRRFDPDJgtDMu5CR7LY7wf+46Gg57DqCPwqLjDY+NT7u4lu7iSe4cvLIdzMfeagfx/jQRD7R+dFB9o/OigDUhPYX5VHNSE/Zr8qD2iiigKKKKAooooCiiigu9p28e2vNbnjs2RtRuFuUZHQtEwDgDLowI9f3AHl1qJedrhN6XLDbXEVzdWcNq7ek5VTG0RDINoIBEWMZPXryxVTooLvfduzdPc4sWSOaO5Th8fIBluOMD7P8AD0+PXl0qWnbe1u7bVjc28lvcPFObcCUsjGS5WbayhfaHMbsgYHSs9ooL8nb63hvJJbfSnWOU3TSB50kO6Z43JXdGQMGMdQeRNczW+1v1vostndW0ktw07SpcyuhMYLs5A2op5ljnJIzkgCqpRQFFFFAUUUUBRRRQFdDT7p7U8SIKXKMmT7twIJHxwTXPpSsV6Gg6Ml072cVthRFGzOMdSzYyT+AArnOcuxHvNBdiME0mg9BIORTnGbuWmqKBxpWI9w+VIHUV5Xo6igin2j86KD7R+dFAU9bnkaKKJJ6iiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKKKKAooooCiiigKRKcIcUUUEYUUUUV//9k="
                            }
                        ],
                        "type": "filmstrip"
                    }
                },
                "first-contentful-paint": {
                    "id": "first-contentful-paint",
                    "title": "First Contentful Paint",
                    "description": "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
                    "score": 0.54,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "2.9 s",
                    "numericValue": 2873.882112284539,
                    "numericUnit": "millisecond"
                },
                "user-timings": {
                    "id": "user-timings",
                    "title": "User Timing marks and measures",
                    "description": "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more about User Timing marks](https://developer.chrome.com/docs/lighthouse/performance/user-timings/).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable",
                    "details": {
                        "headings": [],
                        "type": "table",
                        "items": []
                    }
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
                "font-display": {
                    "id": "font-display",
                    "title": "All text remains visible during webfont loads",
                    "description": "Leverage the `font-display` CSS feature to ensure text is user-visible while webfonts are loading. [Learn more about `font-display`](https://developer.chrome.com/docs/lighthouse/performance/font-display/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "headings": [],
                        "type": "table",
                        "items": []
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
                        "type": "criticalrequestchain",
                        "chains": {
                            "C8B7AFFC2B003B72FABAADAA4AD11FD5": {
                                "request": {
                                    "responseReceivedTime": 266781.69233100006,
                                    "startTime": 266781.487183,
                                    "transferSize": 1501,
                                    "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
                                    "endTime": 266781.692336
                                },
                                "children": {
                                    "52.3": {
                                        "request": {
                                            "startTime": 266781.703476,
                                            "url": "https://takeuforward.org/static/css/main.ccbe0f5f.css",
                                            "responseReceivedTime": 266781.73527199996,
                                            "transferSize": 36369,
                                            "endTime": 266781.735278
                                        },
                                        "children": {
                                            "52.10": {
                                                "request": {
                                                    "transferSize": 1596,
                                                    "startTime": 266781.737847,
                                                    "responseReceivedTime": 266781.74498,
                                                    "endTime": 266781.744983,
                                                    "url": "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                                                }
                                            },
                                            "52.11": {
                                                "request": {
                                                    "startTime": 266781.738103,
                                                    "responseReceivedTime": 266781.74457,
                                                    "transferSize": 1283,
                                                    "url": "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
                                                    "endTime": 266781.744576
                                                }
                                            },
                                            "52.13": {
                                                "request": {
                                                    "endTime": 266781.748839,
                                                    "startTime": 266781.738628,
                                                    "responseReceivedTime": 266781.748834,
                                                    "transferSize": 1100,
                                                    "url": "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
                                                }
                                            },
                                            "52.9": {
                                                "request": {
                                                    "transferSize": 1009,
                                                    "startTime": 266781.737599,
                                                    "url": "https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&display=swap",
                                                    "responseReceivedTime": 266781.745437,
                                                    "endTime": 266781.74544
                                                },
                                                "children": {
                                                    "52.16": {
                                                        "request": {
                                                            "startTime": 266782.292656,
                                                            "responseReceivedTime": 266782.29616,
                                                            "url": "https://fonts.gstatic.com/s/amaranth/v18/KtkpALODe433f0j1zMF-OMWl42H9FYud.woff2",
                                                            "endTime": 266782.296164,
                                                            "transferSize": 16488
                                                        }
                                                    }
                                                }
                                            },
                                            "52.12": {
                                                "children": {
                                                    "52.117": {
                                                        "request": {
                                                            "endTime": 266782.296662,
                                                            "startTime": 266782.292945,
                                                            "transferSize": 12992,
                                                            "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffBzCGItzY5abuWI.woff2",
                                                            "responseReceivedTime": 266782.29666
                                                        }
                                                    },
                                                    "52.115": {
                                                        "request": {
                                                            "responseReceivedTime": 266782.294987,
                                                            "startTime": 266782.291538,
                                                            "endTime": 266782.294991,
                                                            "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPecZTIAOhVxoMyOr9n_E7fdMPmDaZRbrw.woff2",
                                                            "transferSize": 13180
                                                        }
                                                    },
                                                    "52.119": {
                                                        "request": {
                                                            "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffHjDGItzY5abuWI.woff2",
                                                            "transferSize": 12520,
                                                            "startTime": 266782.291687,
                                                            "responseReceivedTime": 266782.295246,
                                                            "endTime": 266782.295248
                                                        }
                                                    }
                                                },
                                                "request": {
                                                    "transferSize": 1304,
                                                    "url": "https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap",
                                                    "responseReceivedTime": 266781.74522000004,
                                                    "endTime": 266781.745223,
                                                    "startTime": 266781.738346
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "longestChain": {
                            "transferSize": 12992,
                            "length": 4,
                            "duration": 809.4789999723434
                        }
                    }
                },
                "network-rtt": {
                    "id": "network-rtt",
                    "title": "Network Round Trip Times",
                    "description": "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more about the Round Trip Time](https://hpbn.co/primer-on-latency-and-bandwidth/).",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "displayValue": "40 ms",
                    "details": {
                        "headings": [
                            {
                                "valueType": "text",
                                "label": "URL",
                                "key": "origin"
                            },
                            {
                                "label": "Time Spent",
                                "valueType": "ms",
                                "granularity": 1,
                                "key": "rtt"
                            }
                        ],
                        "items": [
                            {
                                "origin": "https://takeuforward-content-images.s3.ap-south-1.amazonaws.com",
                                "rtt": 38.82069
                            },
                            {
                                "origin": "https://takeuforward.org",
                                "rtt": 1.5386100000000005
                            },
                            {
                                "origin": "https://fonts.googleapis.com",
                                "rtt": 0.8999999999999999
                            },
                            {
                                "rtt": 0.8999999999999999,
                                "origin": "https://fonts.gstatic.com"
                            },
                            {
                                "origin": "https://adminapi.takeuforward.org",
                                "rtt": 0.0013647134937931832
                            },
                            {
                                "origin": "https://accounts.google.com",
                                "rtt": 0.0011702910002325238
                            },
                            {
                                "origin": "https://www.googletagmanager.com",
                                "rtt": 0.0008413627277431302
                            }
                        ],
                        "type": "table",
                        "sortedBy": [
                            "rtt"
                        ]
                    },
                    "numericValue": 38.82069,
                    "numericUnit": "millisecond"
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
                                "numScripts": 3,
                                "numStylesheets": 7,
                                "numTasksOver50ms": 8,
                                "numTasksOver10ms": 20,
                                "maxRtt": 38.82069,
                                "mainDocumentTransferSize": 1501,
                                "throughput": 93874643454.30127,
                                "numTasksOver25ms": 10,
                                "numTasks": 391,
                                "numTasksOver500ms": 1,
                                "numFonts": 4,
                                "maxServerLatency": 252,
                                "rtt": 0.0008413627277431302,
                                "numTasksOver100ms": 5,
                                "totalTaskTime": 2819.81,
                                "totalByteWeight": 1114761,
                                "numRequests": 20
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
                        "overallSavingsBytes": 0,
                        "headings": [],
                        "type": "opportunity",
                        "debugData": {
                            "metricSavings": {
                                "LCP": 0,
                                "FCP": 0
                            },
                            "type": "debugdata"
                        },
                        "items": [],
                        "overallSavingsMs": 0,
                        "sortedBy": [
                            "wastedBytes"
                        ]
                    },
                    "warnings": [],
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "third-party-summary": {
                    "id": "third-party-summary",
                    "title": "Reduce the impact of third-party code",
                    "description": "Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn how to minimize third-party impact](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).",
                    "score": 0,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "Third-party code blocked the main thread for 300 ms",
                    "details": {
                        "summary": {
                            "wastedBytes": 300557,
                            "wastedMs": 299.004
                        },
                        "headings": [
                            {
                                "key": "entity",
                                "subItemsHeading": {
                                    "key": "url",
                                    "valueType": "url"
                                },
                                "label": "Third-Party",
                                "valueType": "text"
                            },
                            {
                                "key": "transferSize",
                                "subItemsHeading": {
                                    "key": "transferSize"
                                },
                                "granularity": 1,
                                "valueType": "bytes",
                                "label": "Transfer Size"
                            },
                            {
                                "granularity": 1,
                                "valueType": "ms",
                                "label": "Main-Thread Blocking Time",
                                "subItemsHeading": {
                                    "key": "blockingTime"
                                },
                                "key": "blockingTime"
                            }
                        ],
                        "items": [
                            {
                                "entity": "Google Tag Manager",
                                "blockingTime": 297.016,
                                "transferSize": 103543,
                                "mainThreadTime": 620.0720000000005,
                                "subItems": {
                                    "type": "subitems",
                                    "items": [
                                        {
                                            "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0",
                                            "transferSize": 103543,
                                            "tbtImpact": 282.9999999999999,
                                            "mainThreadTime": 620.0720000000005,
                                            "blockingTime": 297.016
                                        }
                                    ]
                                },
                                "tbtImpact": 282.9999999999999
                            },
                            {
                                "subItems": {
                                    "type": "subitems",
                                    "items": [
                                        {
                                            "transferSize": 84743,
                                            "tbtImpact": 0,
                                            "url": "https://accounts.google.com/gsi/client",
                                            "mainThreadTime": 190.78399999999996,
                                            "blockingTime": 1.9879999999999995
                                        },
                                        {
                                            "transferSize": 43804,
                                            "mainThreadTime": 85.54400000000001,
                                            "tbtImpact": 0,
                                            "blockingTime": 0,
                                            "url": "https://accounts.google.com/gsi/button?type=standard&theme=filled_black&size=large&text=undefined&shape=rectangle&logo_alignment=undefined&width=undefined&locale=undefined&click_listener=undefined&client_id=590234420126-hc9007chffeh5rh8j5gcositk2ia89do.apps.googleusercontent.com&iframe_id=gsi_69445_490235&as=b5mgcYNEw0tcLFbnJULv%2Bw"
                                        },
                                        {
                                            "blockingTime": 0,
                                            "transferSize": 1356,
                                            "url": "https://accounts.google.com/gsi/style",
                                            "mainThreadTime": 3.124,
                                            "tbtImpact": 0
                                        }
                                    ]
                                },
                                "tbtImpact": 0,
                                "blockingTime": 1.9879999999999995,
                                "transferSize": 129903,
                                "mainThreadTime": 279.452,
                                "entity": "Other Google APIs/SDKs"
                            },
                            {
                                "transferSize": 61472,
                                "blockingTime": 0,
                                "mainThreadTime": 14.012000000000002,
                                "entity": "Google Fonts",
                                "subItems": {
                                    "type": "subitems",
                                    "items": [
                                        {
                                            "blockingTime": 0,
                                            "tbtImpact": 0,
                                            "mainThreadTime": 0,
                                            "url": "https://fonts.gstatic.com/s/amaranth/v18/KtkpALODe433f0j1zMF-OMWl42H9FYud.woff2",
                                            "transferSize": 16488
                                        },
                                        {
                                            "tbtImpact": 0,
                                            "blockingTime": 0,
                                            "mainThreadTime": 0,
                                            "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPecZTIAOhVxoMyOr9n_E7fdMPmDaZRbrw.woff2",
                                            "transferSize": 13180
                                        },
                                        {
                                            "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffBzCGItzY5abuWI.woff2",
                                            "blockingTime": 0,
                                            "tbtImpact": 0,
                                            "transferSize": 12992,
                                            "mainThreadTime": 0
                                        },
                                        {
                                            "blockingTime": 0,
                                            "tbtImpact": 0,
                                            "transferSize": 12520,
                                            "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffHjDGItzY5abuWI.woff2",
                                            "mainThreadTime": 0
                                        },
                                        {
                                            "transferSize": 1596,
                                            "mainThreadTime": 3.9800000000000004,
                                            "blockingTime": 0,
                                            "tbtImpact": 0,
                                            "url": "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                                        },
                                        {
                                            "tbtImpact": 0,
                                            "mainThreadTime": 2.6240000000000006,
                                            "transferSize": 1304,
                                            "blockingTime": 0,
                                            "url": "https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
                                        },
                                        {
                                            "blockingTime": 0,
                                            "transferSize": 1283,
                                            "url": "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
                                            "mainThreadTime": 2.9400000000000004,
                                            "tbtImpact": 0
                                        },
                                        {
                                            "mainThreadTime": 2.372,
                                            "tbtImpact": 0,
                                            "blockingTime": 0,
                                            "url": "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
                                            "transferSize": 1100
                                        },
                                        {
                                            "blockingTime": 0,
                                            "tbtImpact": 0,
                                            "mainThreadTime": 2.096,
                                            "url": "https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&display=swap",
                                            "transferSize": 1009
                                        }
                                    ]
                                },
                                "tbtImpact": 0
                            },
                            {
                                "subItems": {
                                    "type": "subitems",
                                    "items": [
                                        {
                                            "tbtImpact": 0,
                                            "url": "https://takeuforward-content-images.s3.ap-south-1.amazonaws.com/content/codestudio-ZJxLZjiy",
                                            "blockingTime": 0,
                                            "transferSize": 5639,
                                            "mainThreadTime": 0
                                        }
                                    ]
                                },
                                "tbtImpact": 0,
                                "transferSize": 5639,
                                "mainThreadTime": 0,
                                "entity": "Amazon Web Services",
                                "blockingTime": 0
                            },
                            {
                                "blockingTime": 0,
                                "transferSize": 0,
                                "entity": "Google Analytics",
                                "tbtImpact": 0,
                                "subItems": {
                                    "items": [
                                        {
                                            "transferSize": 0,
                                            "url": "https://www.google-analytics.com/g/collect?v=2&tid=G-51P1R4XNJ0&gtm=45je45t0v9182208068za200&_p=1717338066632&gcd=13l3l3l3l1&npa=0&dma=0&cid=2136671591.1717338067&ul=en-us&sr=412x823&uaa=&uab=64&uafvl=HeadlessChrome%3B125.0.6422.66%7CChromium%3B125.0.6422.66%7CNot.A%252FBrand%3B24.0.0.0&uamb=1&uam=moto%20g%20power%20(2022)&uap=Android&uapv=11.0&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&sid=1717338066&sct=1&seg=0&dl=https%3A%2F%2Ftakeuforward.org%2Fstrivers-a2z-dsa-course%2Fstrivers-a2z-dsa-course-sheet-2%2F&dt=takeuforward%20-%20Best%20Coding%20Tutorials%20for%20Free&en=page_view&_fv=1&_nsi=1&_ss=1&_ee=1&tfd=385",
                                            "tbtImpact": 0,
                                            "blockingTime": 0,
                                            "mainThreadTime": 0
                                        },
                                        {
                                            "blockingTime": 0,
                                            "url": "https://www.google-analytics.com/g/collect?v=2&tid=G-51P1R4XNJ0&gtm=45je45t0v9182208068za200&_p=1717338066632&gcd=13l3l3l3l1&npa=0&dma=0&cid=2136671591.1717338067&ul=en-us&sr=412x823&uaa=&uab=64&uafvl=HeadlessChrome%3B125.0.6422.66%7CChromium%3B125.0.6422.66%7CNot.A%252FBrand%3B24.0.0.0&uamb=1&uam=moto%20g%20power%20(2022)&uap=Android&uapv=11.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEA&_s=2&sid=1717338066&sct=1&seg=0&dl=https%3A%2F%2Ftakeuforward.org%2Fstrivers-a2z-dsa-course%2Fstrivers-a2z-dsa-course-sheet-2%2F&dt=takeuforward%20-%20Best%20Coding%20Tutorials%20for%20Free&en=scroll&epn.percent_scrolled=90&_et=20&tfd=853",
                                            "tbtImpact": 0,
                                            "mainThreadTime": 0,
                                            "transferSize": 0
                                        }
                                    ],
                                    "type": "subitems"
                                },
                                "mainThreadTime": 0
                            }
                        ],
                        "isEntityGrouped": true,
                        "type": "table"
                    }
                },
                "uses-responsive-images": {
                    "id": "uses-responsive-images",
                    "title": "Properly size images",
                    "description": "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn how to size images](https://developer.chrome.com/docs/lighthouse/performance/uses-responsive-images/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "headings": [],
                        "items": [],
                        "overallSavingsBytes": 0,
                        "type": "opportunity",
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
                        "overallSavingsMs": 0
                    },
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "largest-contentful-paint-element": {
                    "id": "largest-contentful-paint-element",
                    "title": "Largest Contentful Paint element",
                    "description": "This is the largest contentful element painted within the viewport. [Learn more about the Largest Contentful Paint element](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
                    "score": 0,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "7,910 ms",
                    "details": {
                        "type": "list",
                        "items": [
                            {
                                "headings": [
                                    {
                                        "valueType": "node",
                                        "label": "Element",
                                        "key": "node"
                                    }
                                ],
                                "type": "table",
                                "items": [
                                    {
                                        "node": {
                                            "boundingRect": {
                                                "right": 396,
                                                "top": 136,
                                                "width": 380,
                                                "left": 16,
                                                "height": 216,
                                                "bottom": 352
                                            },
                                            "type": "node",
                                            "selector": "div.flex > div.relative > section.px-4 > p.text-lg",
                                            "snippet": "<p className=\"text-lg\">",
                                            "path": "1,HTML,1,BODY,0,DIV,0,DIV,7,DIV,1,DIV,1,SECTION,1,P",
                                            "lhId": "page-0-P",
                                            "nodeLabel": "This course is made for people who want to learn DSA from A to Z for free in a …"
                                        }
                                    }
                                ]
                            },
                            {
                                "type": "table",
                                "items": [
                                    {
                                        "percent": "8%",
                                        "timing": 607,
                                        "phase": "TTFB"
                                    },
                                    {
                                        "phase": "Load Delay",
                                        "timing": 0,
                                        "percent": "0%"
                                    },
                                    {
                                        "timing": 0,
                                        "phase": "Load Time",
                                        "percent": "0%"
                                    },
                                    {
                                        "timing": 7305.699588677251,
                                        "percent": "92%",
                                        "phase": "Render Delay"
                                    }
                                ],
                                "headings": [
                                    {
                                        "key": "phase",
                                        "valueType": "text",
                                        "label": "Phase"
                                    },
                                    {
                                        "label": "% of LCP",
                                        "valueType": "text",
                                        "key": "percent"
                                    },
                                    {
                                        "valueType": "ms",
                                        "key": "timing",
                                        "label": "Timing"
                                    }
                                ]
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
                        "timing": 3675,
                        "type": "screenshot",
                        "data": "data:image/jpeg;base64,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",
                        "timestamp": 266785161500
                    }
                },
                "largest-contentful-paint": {
                    "id": "largest-contentful-paint",
                    "title": "Largest Contentful Paint",
                    "description": "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
                    "score": 0.03,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "7.9 s",
                    "numericValue": 7912.699588677251,
                    "numericUnit": "millisecond"
                },
                "prioritize-lcp-image": {
                    "id": "prioritize-lcp-image",
                    "title": "Preload Largest Contentful Paint image",
                    "description": "If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP. [Learn more about preloading LCP elements](https://web.dev/articles/optimize-lcp#optimize_when_the_resource_is_discovered).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "third-party-facades": {
                    "id": "third-party-facades",
                    "title": "Lazy load third-party resources with facades",
                    "description": "Some third-party embeds can be lazy loaded. Consider replacing them with a facade until they are required. [Learn how to defer third-parties with a facade](https://developer.chrome.com/docs/lighthouse/performance/third-party-facades/).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "interactive": {
                    "id": "interactive",
                    "title": "Time to Interactive",
                    "description": "Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/).",
                    "score": 0.06,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "16.0 s",
                    "numericValue": 15986.965596903707,
                    "numericUnit": "millisecond"
                },
                "network-server-latency": {
                    "id": "network-server-latency",
                    "title": "Server Backend Latencies",
                    "description": "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more about server response time](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "displayValue": "250 ms",
                    "details": {
                        "type": "table",
                        "sortedBy": [
                            "serverResponseTime"
                        ],
                        "headings": [
                            {
                                "key": "origin",
                                "valueType": "text",
                                "label": "URL"
                            },
                            {
                                "key": "serverResponseTime",
                                "valueType": "ms",
                                "granularity": 1,
                                "label": "Time Spent"
                            }
                        ],
                        "items": [
                            {
                                "origin": "https://adminapi.takeuforward.org",
                                "serverResponseTime": 252
                            },
                            {
                                "serverResponseTime": 10,
                                "origin": "https://accounts.google.com"
                            },
                            {
                                "serverResponseTime": 7,
                                "origin": "https://takeuforward.org"
                            },
                            {
                                "origin": "https://www.googletagmanager.com",
                                "serverResponseTime": 5
                            },
                            {
                                "serverResponseTime": 1,
                                "origin": "https://fonts.googleapis.com"
                            },
                            {
                                "origin": "https://fonts.gstatic.com",
                                "serverResponseTime": 1
                            },
                            {
                                "origin": "https://takeuforward-content-images.s3.ap-south-1.amazonaws.com",
                                "serverResponseTime": 1
                            }
                        ]
                    },
                    "numericValue": 252,
                    "numericUnit": "millisecond"
                },
                "efficient-animated-content": {
                    "id": "efficient-animated-content",
                    "title": "Use video formats for animated content",
                    "description": "Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more about efficient video formats](https://developer.chrome.com/docs/lighthouse/performance/efficient-animated-content/)",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "items": [],
                        "debugData": {
                            "type": "debugdata",
                            "metricSavings": {
                                "FCP": 0,
                                "LCP": 0
                            }
                        },
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "overallSavingsBytes": 0,
                        "headings": [],
                        "overallSavingsMs": 0,
                        "type": "opportunity"
                    },
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "uses-passive-event-listeners": {
                    "id": "uses-passive-event-listeners",
                    "title": "Uses passive listeners to improve scrolling performance",
                    "description": "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more about adopting passive event listeners](https://developer.chrome.com/docs/lighthouse/best-practices/uses-passive-event-listeners/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "type": "table",
                        "items": [],
                        "headings": []
                    }
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
                "uses-text-compression": {
                    "id": "uses-text-compression",
                    "title": "Enable text compression",
                    "description": "Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more about text compression](https://developer.chrome.com/docs/lighthouse/performance/uses-text-compression/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "type": "opportunity",
                        "items": [],
                        "debugData": {
                            "metricSavings": {
                                "FCP": 0,
                                "LCP": 0
                            },
                            "type": "debugdata"
                        },
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "overallSavingsBytes": 0,
                        "headings": [],
                        "overallSavingsMs": 0
                    },
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "lcp-lazy-loaded": {
                    "id": "lcp-lazy-loaded",
                    "title": "Largest Contentful Paint image was not lazily loaded",
                    "description": "Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint. [Learn more about optimal lazy loading](https://web.dev/articles/lcp-lazy-loading).",
                    "score": null,
                    "scoreDisplayMode": "notApplicable"
                },
                "total-byte-weight": {
                    "id": "total-byte-weight",
                    "title": "Avoids enormous network payloads",
                    "description": "Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/).",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "displayValue": "Total size was 1,089 KiB",
                    "details": {
                        "sortedBy": [
                            "totalBytes"
                        ],
                        "type": "table",
                        "items": [
                            {
                                "url": "https://takeuforward.org/static/js/main.ffe17ed9.js",
                                "totalBytes": 734681
                            },
                            {
                                "totalBytes": 103543,
                                "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0"
                            },
                            {
                                "totalBytes": 84743,
                                "url": "https://accounts.google.com/gsi/client"
                            },
                            {
                                "url": "https://accounts.google.com/gsi/button?type=standard&theme=filled_black&size=large&text=undefined&shape=rectangle&logo_alignment=undefined&width=undefined&locale=undefined&click_listener=undefined&client_id=590234420126-hc9007chffeh5rh8j5gcositk2ia89do.apps.googleusercontent.com&iframe_id=gsi_69445_490235&as=b5mgcYNEw0tcLFbnJULv%2Bw",
                                "totalBytes": 43804
                            },
                            {
                                "totalBytes": 41653,
                                "url": "https://adminapi.takeuforward.org/api/sheets/double/strivers_a2z_sheet"
                            },
                            {
                                "totalBytes": 36369,
                                "url": "https://takeuforward.org/static/css/main.ccbe0f5f.css"
                            },
                            {
                                "url": "https://fonts.gstatic.com/s/amaranth/v18/KtkpALODe433f0j1zMF-OMWl42H9FYud.woff2",
                                "totalBytes": 16488
                            },
                            {
                                "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPecZTIAOhVxoMyOr9n_E7fdMPmDaZRbrw.woff2",
                                "totalBytes": 13180
                            },
                            {
                                "totalBytes": 12992,
                                "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffBzCGItzY5abuWI.woff2"
                            },
                            {
                                "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffHjDGItzY5abuWI.woff2",
                                "totalBytes": 12520
                            }
                        ],
                        "headings": [
                            {
                                "key": "url",
                                "label": "URL",
                                "valueType": "url"
                            },
                            {
                                "key": "totalBytes",
                                "valueType": "bytes",
                                "label": "Transfer Size"
                            }
                        ]
                    },
                    "numericValue": 1114761,
                    "numericUnit": "byte"
                },
                "unused-css-rules": {
                    "id": "unused-css-rules",
                    "title": "Reduce unused CSS",
                    "description": "Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn how to reduce unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/).",
                    "score": 0,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "Potential savings of 31 KiB",
                    "details": {
                        "type": "opportunity",
                        "overallSavingsMs": 150,
                        "debugData": {
                            "type": "debugdata",
                            "metricSavings": {
                                "FCP": 300,
                                "LCP": 150
                            }
                        },
                        "overallSavingsBytes": 31556,
                        "items": [
                            {
                                "url": "https://takeuforward.org/static/css/main.ccbe0f5f.css",
                                "totalBytes": 35542,
                                "wastedPercent": 88.78602796426229,
                                "wastedBytes": 31556
                            }
                        ],
                        "headings": [
                            {
                                "label": "URL",
                                "key": "url",
                                "valueType": "url"
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
                        "sortedBy": [
                            "wastedBytes"
                        ]
                    },
                    "numericValue": 150,
                    "numericUnit": "millisecond"
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
                                "label": "URL",
                                "valueType": "url"
                            },
                            {
                                "label": "Protocol",
                                "key": "protocol",
                                "valueType": "text"
                            },
                            {
                                "granularity": 1,
                                "label": "Network Request Time",
                                "key": "networkRequestTime",
                                "valueType": "ms"
                            },
                            {
                                "key": "networkEndTime",
                                "valueType": "ms",
                                "granularity": 1,
                                "label": "Network End Time"
                            },
                            {
                                "granularity": 1,
                                "key": "transferSize",
                                "label": "Transfer Size",
                                "displayUnit": "kb",
                                "valueType": "bytes"
                            },
                            {
                                "granularity": 1,
                                "valueType": "bytes",
                                "key": "resourceSize",
                                "label": "Resource Size",
                                "displayUnit": "kb"
                            },
                            {
                                "key": "statusCode",
                                "label": "Status Code",
                                "valueType": "text"
                            },
                            {
                                "valueType": "text",
                                "key": "mimeType",
                                "label": "MIME Type"
                            },
                            {
                                "label": "Resource Type",
                                "key": "resourceType",
                                "valueType": "text"
                            }
                        ],
                        "items": [
                            {
                                "mimeType": "text/html",
                                "resourceSize": 2551,
                                "protocol": "h2",
                                "networkRequestTime": 0.7800000011920929,
                                "networkEndTime": 205.93299993872643,
                                "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
                                "entity": "takeuforward.org",
                                "sessionTargetType": "page",
                                "resourceType": "Document",
                                "priority": "VeryHigh",
                                "finished": true,
                                "rendererStartTime": 0,
                                "experimentalFromMainFrame": true,
                                "transferSize": 1501,
                                "statusCode": 200
                            },
                            {
                                "experimentalFromMainFrame": true,
                                "priority": "Low",
                                "finished": true,
                                "url": "https://takeuforward.org/static/js/main.ffe17ed9.js",
                                "resourceSize": 2712695,
                                "statusCode": 200,
                                "transferSize": 734681,
                                "entity": "takeuforward.org",
                                "sessionTargetType": "page",
                                "resourceType": "Script",
                                "mimeType": "application/javascript",
                                "networkRequestTime": 216.97199994325638,
                                "networkEndTime": 345.1270000040531,
                                "rendererStartTime": 216.34099999070168,
                                "protocol": "h2"
                            },
                            {
                                "mimeType": "text/css",
                                "resourceSize": 198110,
                                "sessionTargetType": "page",
                                "rendererStartTime": 216.7359999716282,
                                "transferSize": 36369,
                                "finished": true,
                                "url": "https://takeuforward.org/static/css/main.ccbe0f5f.css",
                                "statusCode": 200,
                                "priority": "VeryHigh",
                                "protocol": "h2",
                                "networkRequestTime": 217.07299995422363,
                                "resourceType": "Stylesheet",
                                "entity": "takeuforward.org",
                                "networkEndTime": 248.87499997019768,
                                "experimentalFromMainFrame": true
                            },
                            {
                                "networkRequestTime": 250.4719999730587,
                                "experimentalFromMainFrame": true,
                                "resourceType": "Script",
                                "finished": true,
                                "resourceSize": 310841,
                                "transferSize": 103543,
                                "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0",
                                "priority": "Low",
                                "entity": "Google Tag Manager",
                                "protocol": "h2",
                                "rendererStartTime": 216.99199998378754,
                                "sessionTargetType": "page",
                                "statusCode": 200,
                                "networkEndTime": 270.1709999740124,
                                "mimeType": "application/javascript"
                            },
                            {
                                "rendererStartTime": 217.10599997639656,
                                "protocol": "h2",
                                "transferSize": 84743,
                                "resourceSize": 222402,
                                "finished": true,
                                "networkRequestTime": 264.7930000126362,
                                "url": "https://accounts.google.com/gsi/client",
                                "statusCode": 200,
                                "priority": "Low",
                                "experimentalFromMainFrame": true,
                                "sessionTargetType": "page",
                                "mimeType": "application/javascript",
                                "entity": "Other Google APIs/SDKs",
                                "resourceType": "Script",
                                "networkEndTime": 297.63499996066093
                            },
                            {
                                "experimentalFromMainFrame": true,
                                "statusCode": 200,
                                "priority": "VeryHigh",
                                "finished": true,
                                "networkRequestTime": 251.19599995017052,
                                "url": "https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&display=swap",
                                "mimeType": "text/css",
                                "resourceSize": 844,
                                "resourceType": "Stylesheet",
                                "transferSize": 1009,
                                "entity": "Google Fonts",
                                "networkEndTime": 259.03700000047684,
                                "rendererStartTime": 250.77599996328354,
                                "protocol": "h2",
                                "sessionTargetType": "page"
                            },
                            {
                                "finished": true,
                                "transferSize": 1596,
                                "networkRequestTime": 251.44399997591972,
                                "experimentalFromMainFrame": true,
                                "statusCode": 200,
                                "url": "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
                                "sessionTargetType": "page",
                                "resourceType": "Stylesheet",
                                "resourceSize": 22050,
                                "mimeType": "text/css",
                                "networkEndTime": 258.5799999535084,
                                "rendererStartTime": 251.06400001049042,
                                "protocol": "h2",
                                "priority": "VeryHigh",
                                "entity": "Google Fonts"
                            },
                            {
                                "networkRequestTime": 251.69999995827675,
                                "resourceType": "Stylesheet",
                                "mimeType": "text/css",
                                "networkEndTime": 258.1730000078678,
                                "url": "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
                                "priority": "VeryHigh",
                                "transferSize": 1283,
                                "sessionTargetType": "page",
                                "protocol": "h2",
                                "entity": "Google Fonts",
                                "rendererStartTime": 251.29099997878075,
                                "experimentalFromMainFrame": true,
                                "resourceSize": 7803,
                                "statusCode": 200,
                                "finished": true
                            },
                            {
                                "networkEndTime": 258.81999999284744,
                                "statusCode": 200,
                                "rendererStartTime": 251.5799999833107,
                                "entity": "Google Fonts",
                                "transferSize": 1304,
                                "sessionTargetType": "page",
                                "url": "https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap",
                                "mimeType": "text/css",
                                "experimentalFromMainFrame": true,
                                "protocol": "h2",
                                "networkRequestTime": 251.94299998879433,
                                "priority": "VeryHigh",
                                "finished": true,
                                "resourceType": "Stylesheet",
                                "resourceSize": 9227
                            },
                            {
                                "mimeType": "text/css",
                                "transferSize": 1100,
                                "networkEndTime": 262.4359999895096,
                                "finished": true,
                                "experimentalFromMainFrame": true,
                                "networkRequestTime": 252.22499999403954,
                                "url": "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
                                "sessionTargetType": "page",
                                "entity": "Google Fonts",
                                "rendererStartTime": 251.8059999346733,
                                "priority": "VeryHigh",
                                "statusCode": 200,
                                "resourceSize": 1605,
                                "protocol": "h2",
                                "resourceType": "Stylesheet"
                            },
                            {
                                "statusCode": -1,
                                "transferSize": 0,
                                "resourceSize": 0,
                                "networkEndTime": 423.3829999566078,
                                "url": "https://www.google-analytics.com/g/collect?v=2&tid=G-51P1R4XNJ0&gtm=45je45t0v9182208068za200&_p=1717338066632&gcd=13l3l3l3l1&npa=0&dma=0&cid=2136671591.1717338067&ul=en-us&sr=412x823&uaa=&uab=64&uafvl=HeadlessChrome%3B125.0.6422.66%7CChromium%3B125.0.6422.66%7CNot.A%252FBrand%3B24.0.0.0&uamb=1&uam=moto%20g%20power%20(2022)&uap=Android&uapv=11.0&uaw=0&are=1&frm=0&pscdl=noapi&_s=1&sid=1717338066&sct=1&seg=0&dl=https%3A%2F%2Ftakeuforward.org%2Fstrivers-a2z-dsa-course%2Fstrivers-a2z-dsa-course-sheet-2%2F&dt=takeuforward%20-%20Best%20Coding%20Tutorials%20for%20Free&en=page_view&_fv=1&_nsi=1&_ss=1&_ee=1&tfd=385",
                                "rendererStartTime": 384.9390000104904,
                                "sessionTargetType": "page",
                                "finished": true,
                                "entity": "Google Analytics",
                                "resourceType": "Ping",
                                "networkRequestTime": 384.9390000104904,
                                "experimentalFromMainFrame": true,
                                "priority": "VeryLow"
                            },
                            {
                                "resourceSize": 12368,
                                "statusCode": 200,
                                "transferSize": 13180,
                                "protocol": "h2",
                                "mimeType": "font/woff2",
                                "networkRequestTime": 805.1349999606609,
                                "sessionTargetType": "page",
                                "resourceType": "Font",
                                "experimentalFromMainFrame": true,
                                "rendererStartTime": 804.3509999811649,
                                "finished": true,
                                "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPecZTIAOhVxoMyOr9n_E7fdMPmDaZRbrw.woff2",
                                "networkEndTime": 808.5879999399185,
                                "entity": "Google Fonts",
                                "priority": "VeryHigh"
                            },
                            {
                                "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffHjDGItzY5abuWI.woff2",
                                "rendererStartTime": 804.7719999849796,
                                "protocol": "h2",
                                "finished": true,
                                "statusCode": 200,
                                "mimeType": "font/woff2",
                                "networkRequestTime": 805.283999979496,
                                "experimentalFromMainFrame": true,
                                "priority": "VeryHigh",
                                "sessionTargetType": "page",
                                "networkEndTime": 808.8449999690056,
                                "transferSize": 12520,
                                "entity": "Google Fonts",
                                "resourceSize": 11708,
                                "resourceType": "Font"
                            },
                            {
                                "finished": true,
                                "protocol": "h2",
                                "statusCode": 200,
                                "resourceType": "Font",
                                "sessionTargetType": "page",
                                "networkEndTime": 809.7609999775887,
                                "mimeType": "font/woff2",
                                "entity": "Google Fonts",
                                "priority": "VeryHigh",
                                "transferSize": 16488,
                                "rendererStartTime": 805.8149999678135,
                                "networkRequestTime": 806.2529999911785,
                                "experimentalFromMainFrame": true,
                                "url": "https://fonts.gstatic.com/s/amaranth/v18/KtkpALODe433f0j1zMF-OMWl42H9FYud.woff2",
                                "resourceSize": 15676
                            },
                            {
                                "sessionTargetType": "page",
                                "experimentalFromMainFrame": true,
                                "url": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffBzCGItzY5abuWI.woff2",
                                "finished": true,
                                "resourceType": "Font",
                                "statusCode": 200,
                                "entity": "Google Fonts",
                                "priority": "VeryHigh",
                                "protocol": "h2",
                                "mimeType": "font/woff2",
                                "rendererStartTime": 806.1849999725819,
                                "networkRequestTime": 806.5419999659061,
                                "resourceSize": 12180,
                                "networkEndTime": 810.2589999735355,
                                "transferSize": 12992
                            },
                            {
                                "rendererStartTime": 852.9119999706745,
                                "networkEndTime": 891.4469999670982,
                                "resourceType": "Ping",
                                "transferSize": 0,
                                "statusCode": -1,
                                "resourceSize": 0,
                                "entity": "Google Analytics",
                                "networkRequestTime": 852.9119999706745,
                                "url": "https://www.google-analytics.com/g/collect?v=2&tid=G-51P1R4XNJ0&gtm=45je45t0v9182208068za200&_p=1717338066632&gcd=13l3l3l3l1&npa=0&dma=0&cid=2136671591.1717338067&ul=en-us&sr=412x823&uaa=&uab=64&uafvl=HeadlessChrome%3B125.0.6422.66%7CChromium%3B125.0.6422.66%7CNot.A%252FBrand%3B24.0.0.0&uamb=1&uam=moto%20g%20power%20(2022)&uap=Android&uapv=11.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEA&_s=2&sid=1717338066&sct=1&seg=0&dl=https%3A%2F%2Ftakeuforward.org%2Fstrivers-a2z-dsa-course%2Fstrivers-a2z-dsa-course-sheet-2%2F&dt=takeuforward%20-%20Best%20Coding%20Tutorials%20for%20Free&en=scroll&epn.percent_scrolled=90&_et=20&tfd=853",
                                "experimentalFromMainFrame": true,
                                "sessionTargetType": "page",
                                "finished": true,
                                "priority": "VeryLow"
                            },
                            {
                                "url": "https://adminapi.takeuforward.org/api/sheets/double/strivers_a2z_sheet",
                                "entity": "takeuforward.org",
                                "networkRequestTime": 862.8759999871254,
                                "protocol": "h2",
                                "priority": "High",
                                "mimeType": "application/json",
                                "rendererStartTime": 862.231999963522,
                                "networkEndTime": 1382.8389999568462,
                                "transferSize": 41653,
                                "experimentalFromMainFrame": true,
                                "resourceSize": 355907,
                                "statusCode": 200,
                                "finished": true,
                                "sessionTargetType": "page",
                                "resourceType": "XHR"
                            },
                            {
                                "networkEndTime": 3489.3349999785423,
                                "resourceType": "Image",
                                "protocol": "http/1.1",
                                "rendererStartTime": 2625.7099999785423,
                                "sessionTargetType": "page",
                                "experimentalFromMainFrame": true,
                                "networkRequestTime": 2626.647999972105,
                                "url": "https://takeuforward-content-images.s3.ap-south-1.amazonaws.com/content/codestudio-ZJxLZjiy",
                                "transferSize": 5639,
                                "priority": "Low",
                                "finished": true,
                                "statusCode": 200,
                                "mimeType": "image/png",
                                "resourceSize": 5244,
                                "entity": "Amazon Web Services"
                            },
                            {
                                "experimentalFromMainFrame": true,
                                "entity": "Other Google APIs/SDKs",
                                "protocol": "h2",
                                "rendererStartTime": 3075.708999991417,
                                "url": "https://accounts.google.com/gsi/style",
                                "networkEndTime": 3091.8819999694824,
                                "priority": "VeryHigh",
                                "statusCode": 200,
                                "mimeType": "text/css",
                                "sessionTargetType": "page",
                                "finished": true,
                                "resourceSize": 533,
                                "transferSize": 1356,
                                "resourceType": "Stylesheet",
                                "networkRequestTime": 3076.4079999625683
                            },
                            {
                                "networkEndTime": 3154.1529999673367,
                                "transferSize": 43804,
                                "protocol": "h2",
                                "finished": true,
                                "sessionTargetType": "page",
                                "priority": "VeryHigh",
                                "entity": "Other Google APIs/SDKs",
                                "url": "https://accounts.google.com/gsi/button?type=standard&theme=filled_black&size=large&text=undefined&shape=rectangle&logo_alignment=undefined&width=undefined&locale=undefined&click_listener=undefined&client_id=590234420126-hc9007chffeh5rh8j5gcositk2ia89do.apps.googleusercontent.com&iframe_id=gsi_69445_490235&as=b5mgcYNEw0tcLFbnJULv%2Bw",
                                "resourceSize": 120742,
                                "mimeType": "text/html",
                                "networkRequestTime": 3088.080999940634,
                                "statusCode": 200,
                                "rendererStartTime": 3086.4529999494553,
                                "resourceType": "Document"
                            }
                        ],
                        "debugData": {
                            "networkStartTimeTs": 266781486403.00003,
                            "type": "debugdata"
                        },
                        "type": "table"
                    }
                },
                "first-meaningful-paint": {
                    "id": "first-meaningful-paint",
                    "title": "First Meaningful Paint",
                    "description": "First Meaningful Paint measures when the primary content of a page is visible. [Learn more about the First Meaningful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-meaningful-paint/).",
                    "score": 0.39,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "4.4 s",
                    "numericValue": 4449.389775931805,
                    "numericUnit": "millisecond"
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
                                "granularity": 1,
                                "valueType": "ms",
                                "key": "startTime",
                                "label": "Start Time"
                            },
                            {
                                "granularity": 1,
                                "valueType": "ms",
                                "label": "End Time",
                                "key": "duration"
                            }
                        ],
                        "items": [
                            {
                                "duration": 9.639,
                                "startTime": 208.053
                            },
                            {
                                "startTime": 249.471,
                                "duration": 7.289
                            },
                            {
                                "duration": 21.771,
                                "startTime": 275.624
                            },
                            {
                                "duration": 22.732,
                                "startTime": 297.845
                            },
                            {
                                "startTime": 324.602,
                                "duration": 61.865
                            },
                            {
                                "startTime": 389.891,
                                "duration": 8.493
                            },
                            {
                                "startTime": 398.504,
                                "duration": 23.874
                            },
                            {
                                "duration": 10.584,
                                "startTime": 423.633
                            },
                            {
                                "startTime": 495.353,
                                "duration": 187.124
                            },
                            {
                                "duration": 112.144,
                                "startTime": 682.487
                            },
                            {
                                "startTime": 794.659,
                                "duration": 96.55
                            },
                            {
                                "duration": 85.277,
                                "startTime": 891.779
                            },
                            {
                                "duration": 11.148,
                                "startTime": 977.21
                            },
                            {
                                "duration": 9.271,
                                "startTime": 988.374
                            },
                            {
                                "duration": 5.781,
                                "startTime": 1002.59
                            },
                            {
                                "duration": 5.861,
                                "startTime": 1008.917
                            },
                            {
                                "duration": 6.67,
                                "startTime": 1025.684
                            },
                            {
                                "startTime": 1042.283,
                                "duration": 6.034
                            },
                            {
                                "duration": 6.079,
                                "startTime": 1058.988
                            },
                            {
                                "duration": 1246.043,
                                "startTime": 1383.988
                            },
                            {
                                "startTime": 2630.077,
                                "duration": 395.023
                            },
                            {
                                "duration": 10.369,
                                "startTime": 3026.668
                            },
                            {
                                "startTime": 3037.971,
                                "duration": 13.238
                            },
                            {
                                "duration": 13.741,
                                "startTime": 3054.526
                            },
                            {
                                "startTime": 3069.583,
                                "duration": 15.522
                            },
                            {
                                "duration": 25.184,
                                "startTime": 3085.158
                            },
                            {
                                "duration": 202.161,
                                "startTime": 3157.201
                            },
                            {
                                "startTime": 3359.387,
                                "duration": 29.461
                            },
                            {
                                "duration": 5.629,
                                "startTime": 3389.244
                            },
                            {
                                "startTime": 3397.994,
                                "duration": 6.533
                            },
                            {
                                "duration": 5.775,
                                "startTime": 3658.994
                            },
                            {
                                "duration": 10.632,
                                "startTime": 4061.69
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
                    "displayValue": "0.007",
                    "details": {
                        "items": [
                            {
                                "newEngineResult": {
                                    "cumulativeLayoutShift": 0.0066752634459223015,
                                    "cumulativeLayoutShiftMainFrame": 0.0066752634459223015
                                },
                                "cumulativeLayoutShiftMainFrame": 0.0066752634459223015,
                                "newEngineResultDiffered": false
                            }
                        ],
                        "type": "debugdata"
                    },
                    "numericValue": 0.0066752634459223015,
                    "numericUnit": "unitless"
                },
                "layout-shifts": {
                    "id": "layout-shifts",
                    "title": "Avoid large layout shifts",
                    "description": "These are the largest layout shifts observed on the page. Each table item represents a single layout shift, and shows the element that shifted the most. Below each item are possible root causes that led to the layout shift. Some of these layout shifts may not be included in the CLS metric value due to [windowing](https://web.dev/articles/cls#what_is_cls). [Learn how to improve CLS](https://web.dev/articles/optimize-cls)",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "displayValue": "2 layout shifts found",
                    "details": {
                        "items": [
                            {
                                "subItems": {
                                    "items": [
                                        {
                                            "extra": {
                                                "value": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffBzCGItzY5abuWI.woff2",
                                                "type": "url"
                                            },
                                            "cause": "Web font loaded"
                                        },
                                        {
                                            "extra": {
                                                "type": "url",
                                                "value": "https://fonts.gstatic.com/s/amaranth/v18/KtkpALODe433f0j1zMF-OMWl42H9FYud.woff2"
                                            },
                                            "cause": "Web font loaded"
                                        },
                                        {
                                            "extra": {
                                                "value": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPDcZTIAOhVxoMyOr9n_E7ffHjDGItzY5abuWI.woff2",
                                                "type": "url"
                                            },
                                            "cause": "Web font loaded"
                                        },
                                        {
                                            "extra": {
                                                "type": "url",
                                                "value": "https://fonts.gstatic.com/s/titilliumweb/v17/NaPecZTIAOhVxoMyOr9n_E7fdMPmDaZRbrw.woff2"
                                            },
                                            "cause": "Web font loaded"
                                        }
                                    ],
                                    "type": "subitems"
                                },
                                "node": {
                                    "snippet": "<button className=\"btn-brand-2 \">",
                                    "lhId": "page-1-BUTTON",
                                    "type": "node",
                                    "selector": "div.space-y-6 > div.flex > div.flex > button.btn-brand-2",
                                    "boundingRect": {
                                        "left": 261,
                                        "bottom": 609,
                                        "height": 42,
                                        "right": 392,
                                        "top": 567,
                                        "width": 131
                                    },
                                    "nodeLabel": "Show Revision",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,7,DIV,1,DIV,1,SECTION,4,DIV,0,DIV,1,DIV,1,BUTTON"
                                },
                                "score": 0.0066752634459223015
                            },
                            {
                                "node": {
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,7,DIV,1,DIV,1,SECTION,1,P",
                                    "selector": "div.flex > div.relative > section.px-4 > p.text-lg",
                                    "snippet": "<p className=\"text-lg\">",
                                    "boundingRect": {
                                        "left": 16,
                                        "right": 396,
                                        "width": 380,
                                        "bottom": 352,
                                        "height": 216,
                                        "top": 136
                                    },
                                    "type": "node",
                                    "nodeLabel": "This course is made for people who want to learn DSA from A to Z for free in a …",
                                    "lhId": "page-0-P"
                                },
                                "score": 0.002942722338334039
                            }
                        ],
                        "headings": [
                            {
                                "subItemsHeading": {
                                    "key": "extra"
                                },
                                "label": "Element",
                                "key": "node",
                                "valueType": "node"
                            },
                            {
                                "key": "score",
                                "granularity": 0.001,
                                "subItemsHeading": {
                                    "key": "cause",
                                    "valueType": "text"
                                },
                                "label": "Layout shift score",
                                "valueType": "numeric"
                            }
                        ],
                        "type": "table"
                    }
                },
                "mainthread-work-breakdown": {
                    "id": "mainthread-work-breakdown",
                    "title": "Minimize main-thread work",
                    "description": "Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to minimize main-thread work](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/)",
                    "score": 0,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "11.3 s",
                    "details": {
                        "items": [
                            {
                                "groupLabel": "Script Evaluation",
                                "group": "scriptEvaluation",
                                "duration": 7923.01599999995
                            },
                            {
                                "duration": 1470.04,
                                "group": "garbageCollection",
                                "groupLabel": "Garbage Collection"
                            },
                            {
                                "duration": 793.8719999999958,
                                "group": "other",
                                "groupLabel": "Other"
                            },
                            {
                                "duration": 488.0040000000001,
                                "groupLabel": "Style & Layout",
                                "group": "styleLayout"
                            },
                            {
                                "duration": 415.9440000000001,
                                "groupLabel": "Script Parsing & Compilation",
                                "group": "scriptParseCompile"
                            },
                            {
                                "duration": 133.8400000000006,
                                "groupLabel": "Rendering",
                                "group": "paintCompositeRender"
                            },
                            {
                                "group": "parseHTML",
                                "duration": 54.52399999999999,
                                "groupLabel": "Parse HTML & CSS"
                            }
                        ],
                        "type": "table",
                        "sortedBy": [
                            "duration"
                        ],
                        "headings": [
                            {
                                "label": "Category",
                                "key": "groupLabel",
                                "valueType": "text"
                            },
                            {
                                "key": "duration",
                                "valueType": "ms",
                                "label": "Time Spent",
                                "granularity": 1
                            }
                        ]
                    },
                    "numericValue": 11279.239999999943,
                    "numericUnit": "millisecond"
                },
                "server-response-time": {
                    "id": "server-response-time",
                    "title": "Initial server response time was short",
                    "description": "Keep the server response time for the main document short because all other requests depend on it. [Learn more about the Time to First Byte metric](https://developer.chrome.com/docs/lighthouse/performance/time-to-first-byte/).",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "displayValue": "Root document took 200 ms",
                    "details": {
                        "headings": [
                            {
                                "key": "url",
                                "label": "URL",
                                "valueType": "url"
                            },
                            {
                                "valueType": "timespanMs",
                                "key": "responseTime",
                                "label": "Time Spent"
                            }
                        ],
                        "overallSavingsMs": 101,
                        "items": [
                            {
                                "responseTime": 201,
                                "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
                            }
                        ],
                        "type": "opportunity"
                    },
                    "numericValue": 201,
                    "numericUnit": "millisecond"
                },
                "unminified-css": {
                    "id": "unminified-css",
                    "title": "Minify CSS",
                    "description": "Minifying CSS files can reduce network payload sizes. [Learn how to minify CSS](https://developer.chrome.com/docs/lighthouse/performance/unminified-css/).",
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
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "type": "opportunity",
                        "items": [],
                        "overallSavingsBytes": 0,
                        "overallSavingsMs": 0
                    },
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "offscreen-images": {
                    "id": "offscreen-images",
                    "title": "Defer offscreen images",
                    "description": "Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn how to defer offscreen images](https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/).",
                    "score": 0.5,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "Potential savings of 5 KiB",
                    "details": {
                        "type": "opportunity",
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
                        "overallSavingsBytes": 5244,
                        "sortedBy": [
                            "wastedBytes"
                        ],
                        "items": [
                            {
                                "node": {
                                    "type": "node",
                                    "path": "1,HTML,1,BODY,0,DIV,0,DIV,7,DIV,1,DIV,1,SECTION,4,DIV,1,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,DIV,0,TABLE,6,TBODY,0,TR,4,TD,0,DIV,0,A,0,IMG",
                                    "boundingRect": {
                                        "height": 0,
                                        "top": 0,
                                        "bottom": 0,
                                        "width": 0,
                                        "right": 0,
                                        "left": 0
                                    },
                                    "lhId": "1-2-IMG",
                                    "snippet": "<img src=\"https://takeuforward-content-images.s3.ap-south-1.amazonaws.com/content/co…\" className=\"w-6 h-6 object-contain\" alt=\"code\">",
                                    "selector": "td.px-2 > div.flex > a > img.w-6",
                                    "nodeLabel": "code"
                                },
                                "wastedBytes": 5244,
                                "requestStartTime": 266784113.051,
                                "url": "https://takeuforward-content-images.s3.ap-south-1.amazonaws.com/content/codestudio-ZJxLZjiy",
                                "totalBytes": 5244,
                                "wastedPercent": 100
                            }
                        ],
                        "debugData": {
                            "type": "debugdata",
                            "metricSavings": {
                                "LCP": 0,
                                "FCP": 0
                            }
                        },
                        "overallSavingsMs": 0
                    },
                    "warnings": [],
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "speed-index": {
                    "id": "speed-index",
                    "title": "Speed Index",
                    "description": "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
                    "score": 0.77,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "4.2 s",
                    "numericValue": 4228.901478970872,
                    "numericUnit": "millisecond"
                },
                "duplicated-javascript": {
                    "id": "duplicated-javascript",
                    "title": "Remove duplicate modules in JavaScript bundles",
                    "description": "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "overallSavingsMs": 0,
                        "items": [],
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
                        "headings": [],
                        "type": "opportunity"
                    },
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "uses-rel-preconnect": {
                    "id": "uses-rel-preconnect",
                    "title": "Preconnect to required origins",
                    "description": "Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn how to preconnect to required origins](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/).",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "overallSavingsMs": 0,
                        "sortedBy": [
                            "wastedMs"
                        ],
                        "headings": [],
                        "type": "opportunity",
                        "items": []
                    },
                    "warnings": [],
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                },
                "render-blocking-resources": {
                    "id": "render-blocking-resources",
                    "title": "Eliminate render-blocking resources",
                    "description": "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).",
                    "score": 0,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "Potential savings of 2,060 ms",
                    "details": {
                        "overallSavingsMs": 2063,
                        "headings": [
                            {
                                "valueType": "url",
                                "label": "URL",
                                "key": "url"
                            },
                            {
                                "valueType": "bytes",
                                "key": "totalBytes",
                                "label": "Transfer Size"
                            },
                            {
                                "label": "Potential Savings",
                                "key": "wastedMs",
                                "valueType": "timespanMs"
                            }
                        ],
                        "items": [
                            {
                                "wastedMs": 303,
                                "totalBytes": 198937,
                                "url": "https://takeuforward.org/static/css/main.ccbe0f5f.css"
                            },
                            {
                                "totalBytes": 1595,
                                "wastedMs": 754,
                                "url": "https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&display=swap"
                            }
                        ],
                        "type": "opportunity"
                    },
                    "numericValue": 2063,
                    "numericUnit": "millisecond"
                },
                "bootup-time": {
                    "id": "bootup-time",
                    "title": "Reduce JavaScript execution time",
                    "description": "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to reduce Javascript execution time](https://developer.chrome.com/docs/lighthouse/performance/bootup-time/).",
                    "score": 0,
                    "scoreDisplayMode": "metricSavings",
                    "displayValue": "8.3 s",
                    "details": {
                        "sortedBy": [
                            "total"
                        ],
                        "headings": [
                            {
                                "key": "url",
                                "label": "URL",
                                "valueType": "url"
                            },
                            {
                                "label": "Total CPU Time",
                                "key": "total",
                                "valueType": "ms",
                                "granularity": 1
                            },
                            {
                                "valueType": "ms",
                                "granularity": 1,
                                "key": "scripting",
                                "label": "Script Evaluation"
                            },
                            {
                                "granularity": 1,
                                "label": "Script Parse",
                                "valueType": "ms",
                                "key": "scriptParseCompile"
                            }
                        ],
                        "items": [
                            {
                                "url": "https://takeuforward.org/static/js/main.ffe17ed9.js",
                                "scripting": 7289.927999999962,
                                "total": 8369.919999999962,
                                "scriptParseCompile": 189.768
                            },
                            {
                                "total": 1039.884,
                                "scriptParseCompile": 0,
                                "scripting": 7.252000000000001,
                                "url": "Unattributable"
                            },
                            {
                                "url": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
                                "scriptParseCompile": 1.556,
                                "total": 895.736,
                                "scripting": 7.844
                            },
                            {
                                "scriptParseCompile": 120.476,
                                "scripting": 493.8400000000008,
                                "total": 620.0720000000008,
                                "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0"
                            },
                            {
                                "url": "https://accounts.google.com/gsi/client",
                                "scriptParseCompile": 67.92,
                                "total": 190.78400000000005,
                                "scripting": 64.47200000000001
                            },
                            {
                                "total": 85.54399999999998,
                                "scriptParseCompile": 36.224,
                                "scripting": 30.471999999999998,
                                "url": "https://accounts.google.com/gsi/button?type=standard&theme=filled_black&size=large&text=undefined&shape=rectangle&logo_alignment=undefined&width=undefined&locale=undefined&click_listener=undefined&client_id=590234420126-hc9007chffeh5rh8j5gcositk2ia89do.apps.googleusercontent.com&iframe_id=gsi_69445_490235&as=b5mgcYNEw0tcLFbnJULv%2Bw"
                            }
                        ],
                        "summary": {
                            "wastedMs": 8309.751999999962
                        },
                        "type": "table"
                    },
                    "numericValue": 8309.751999999962,
                    "numericUnit": "millisecond"
                },
                "max-potential-fid": {
                    "id": "max-potential-fid",
                    "title": "Max Potential First Input Delay",
                    "description": "The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more about the Maximum Potential First Input Delay metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/).",
                    "score": 0,
                    "scoreDisplayMode": "numeric",
                    "displayValue": "4,980 ms",
                    "details": {
                        "observedMaxBlockingLoaf": {
                            "ph": "b",
                            "ts": 266782862212,
                            "tid": 52,
                            "id": "0x800b4ebde2d82b7c",
                            "name": "LongAnimationFrame",
                            "cat": "devtools.timeline",
                            "pid": 52,
                            "args": {
                                "data": {
                                    "duration": 1271.243,
                                    "blockingDuration": 1212.433,
                                    "styleAndLayoutDuration": 15.528,
                                    "numScripts": 1,
                                    "renderDuration": 17.025
                                }
                            },
                            "scope": "devtools.timeline"
                        },
                        "observedLoafs": [
                            {
                                "duration": 74.11,
                                "blockingDuration": 0,
                                "startTime": 208.048
                            },
                            {
                                "blockingDuration": 11.616,
                                "duration": 61.616,
                                "startTime": 324.597
                            },
                            {
                                "startTime": 495.25,
                                "duration": 187.377,
                                "blockingDuration": 137.191
                            },
                            {
                                "blockingDuration": 59.381,
                                "startTime": 723.527,
                                "duration": 109.482
                            },
                            {
                                "blockingDuration": 25.622,
                                "duration": 83.001,
                                "startTime": 833.634
                            },
                            {
                                "blockingDuration": 0,
                                "duration": 59.679,
                                "startTime": 917.201
                            },
                            {
                                "startTime": 1375.884,
                                "blockingDuration": 1212.433,
                                "duration": 1271.243
                            },
                            {
                                "duration": 377.761,
                                "blockingDuration": 327.534,
                                "startTime": 2647.193
                            },
                            {
                                "duration": 205.652,
                                "startTime": 3155.875,
                                "blockingDuration": 0
                            }
                        ],
                        "type": "debugdata",
                        "observedMaxDurationLoaf": {
                            "scope": "devtools.timeline",
                            "ph": "b",
                            "name": "LongAnimationFrame",
                            "cat": "devtools.timeline",
                            "tid": 52,
                            "pid": 52,
                            "args": {
                                "data": {
                                    "duration": 1271.243,
                                    "styleAndLayoutDuration": 15.528,
                                    "blockingDuration": 1212.433,
                                    "renderDuration": 17.025,
                                    "numScripts": 1
                                }
                            },
                            "id": "0x800b4ebde2d82b7c",
                            "ts": 266782862212
                        }
                    },
                    "numericValue": 4984,
                    "numericUnit": "millisecond"
                },
                "resource-summary": {
                    "id": "resource-summary",
                    "title": "Resources Summary",
                    "description": "Aggregates all network requests and groups them by type",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "details": {
                        "items": [
                            {
                                "transferSize": 1114761,
                                "label": "Total",
                                "requestCount": 20,
                                "resourceType": "total"
                            },
                            {
                                "label": "Script",
                                "transferSize": 922967,
                                "resourceType": "script",
                                "requestCount": 3
                            },
                            {
                                "requestCount": 4,
                                "transferSize": 55180,
                                "label": "Font",
                                "resourceType": "font"
                            },
                            {
                                "label": "Document",
                                "requestCount": 2,
                                "transferSize": 45305,
                                "resourceType": "document"
                            },
                            {
                                "label": "Stylesheet",
                                "resourceType": "stylesheet",
                                "transferSize": 44017,
                                "requestCount": 7
                            },
                            {
                                "resourceType": "other",
                                "transferSize": 41653,
                                "label": "Other",
                                "requestCount": 3
                            },
                            {
                                "transferSize": 5639,
                                "requestCount": 1,
                                "resourceType": "image",
                                "label": "Image"
                            },
                            {
                                "resourceType": "media",
                                "requestCount": 0,
                                "label": "Media",
                                "transferSize": 0
                            },
                            {
                                "requestCount": 16,
                                "resourceType": "third-party",
                                "label": "Third-party",
                                "transferSize": 300557
                            }
                        ],
                        "type": "table",
                        "headings": [
                            {
                                "valueType": "text",
                                "key": "label",
                                "label": "Resource Type"
                            },
                            {
                                "valueType": "numeric",
                                "key": "requestCount",
                                "label": "Requests"
                            },
                            {
                                "key": "transferSize",
                                "valueType": "bytes",
                                "label": "Transfer Size"
                            }
                        ]
                    }
                },
                "unsized-images": {
                    "id": "unsized-images",
                    "title": "Image elements have explicit `width` and `height`",
                    "description": "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/articles/optimize-cls#images_without_dimensions)",
                    "score": 1,
                    "scoreDisplayMode": "metricSavings",
                    "details": {
                        "type": "table",
                        "items": [],
                        "headings": []
                    }
                },
                "long-tasks": {
                    "id": "long-tasks",
                    "title": "Avoid long main-thread tasks",
                    "description": "Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn how to avoid long main-thread tasks](https://web.dev/articles/long-tasks-devtools)",
                    "score": 1,
                    "scoreDisplayMode": "informative",
                    "displayValue": "11 long tasks found",
                    "details": {
                        "items": [
                            {
                                "duration": 4984,
                                "startTime": 10237.199588677251,
                                "url": "https://takeuforward.org/static/js/main.ffe17ed9.js"
                            },
                            {
                                "startTime": 15391.199588677251,
                                "url": "Unattributable",
                                "duration": 809
                            },
                            {
                                "url": "https://takeuforward.org/static/js/main.ffe17ed9.js",
                                "startTime": 7126.199588677251,
                                "duration": 748
                            },
                            {
                                "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0",
                                "duration": 247,
                                "startTime": 3557.6133059118165
                            },
                            {
                                "startTime": 3804.6133059118165,
                                "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0",
                                "duration": 95
                            },
                            {
                                "startTime": 3466.6133059118165,
                                "duration": 91,
                                "url": "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0"
                            },
                            {
                                "startTime": 8158.199588677251,
                                "url": "https://takeuforward.org/static/js/main.ffe17ed9.js",
                                "duration": 77
                            },
                            {
                                "duration": 62,
                                "url": "https://takeuforward.org/static/js/main.ffe17ed9.js",
                                "startTime": 15329.199588677251
                            },
                            {
                                "duration": 55,
                                "startTime": 15274.199588677251,
                                "url": "https://takeuforward.org/static/js/main.ffe17ed9.js"
                            },
                            {
                                "url": "https://takeuforward.org/static/js/main.ffe17ed9.js",
                                "startTime": 15221.199588677251,
                                "duration": 53
                            },
                            {
                                "startTime": 810.6133059118167,
                                "url": "https://accounts.google.com/gsi/client",
                                "duration": 51
                            }
                        ],
                        "sortedBy": [
                            "duration"
                        ],
                        "type": "table",
                        "debugData": {
                            "tasks": [
                                {
                                    "startTime": 10237.2,
                                    "duration": 4984,
                                    "urlIndex": 0,
                                    "other": 4984
                                },
                                {
                                    "other": 809,
                                    "startTime": 15391.2,
                                    "duration": 809,
                                    "scriptEvaluation": 0,
                                    "urlIndex": 1
                                },
                                {
                                    "urlIndex": 0,
                                    "startTime": 7126.2,
                                    "scriptEvaluation": 0,
                                    "other": 748,
                                    "duration": 748
                                },
                                {
                                    "urlIndex": 2,
                                    "scriptEvaluation": 0,
                                    "other": 247,
                                    "duration": 247,
                                    "startTime": 3557.6
                                },
                                {
                                    "other": 95,
                                    "duration": 95,
                                    "startTime": 3804.6,
                                    "scriptEvaluation": 0,
                                    "urlIndex": 2
                                },
                                {
                                    "other": 91,
                                    "startTime": 3466.6,
                                    "scriptEvaluation": 0,
                                    "duration": 91,
                                    "urlIndex": 2
                                },
                                {
                                    "styleLayout": 0,
                                    "scriptEvaluation": 0,
                                    "urlIndex": 0,
                                    "other": 77,
                                    "paintCompositeRender": 0,
                                    "duration": 77,
                                    "startTime": 8158.2
                                },
                                {
                                    "duration": 62,
                                    "urlIndex": 0,
                                    "startTime": 15329.2,
                                    "other": 62
                                },
                                {
                                    "other": 55,
                                    "urlIndex": 0,
                                    "duration": 55,
                                    "startTime": 15274.2
                                },
                                {
                                    "startTime": 15221.2,
                                    "urlIndex": 0,
                                    "other": 53,
                                    "duration": 53
                                },
                                {
                                    "duration": 51,
                                    "paintCompositeRender": 0,
                                    "other": 51,
                                    "scriptEvaluation": 0,
                                    "urlIndex": 3,
                                    "startTime": 810.6,
                                    "styleLayout": 0
                                }
                            ],
                            "urls": [
                                "https://takeuforward.org/static/js/main.ffe17ed9.js",
                                "Unattributable",
                                "https://www.googletagmanager.com/gtag/js?id=G-51P1R4XNJ0",
                                "https://accounts.google.com/gsi/client"
                            ],
                            "type": "debugdata"
                        },
                        "skipSumming": [
                            "startTime"
                        ],
                        "headings": [
                            {
                                "valueType": "url",
                                "key": "url",
                                "label": "URL"
                            },
                            {
                                "key": "startTime",
                                "label": "Start Time",
                                "granularity": 1,
                                "valueType": "ms"
                            },
                            {
                                "label": "Duration",
                                "valueType": "ms",
                                "granularity": 1,
                                "key": "duration"
                            }
                        ]
                    }
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
                        "items": [
                            {
                                "url": "https://takeuforward.org/static/js/main.ffe17ed9.js",
                                "totalBytes": 0,
                                "subItems": {
                                    "items": [
                                        {
                                            "signal": "@babel/plugin-transform-classes",
                                            "location": {
                                                "url": "https://takeuforward.org/static/js/main.ffe17ed9.js",
                                                "line": 1,
                                                "type": "source-location",
                                                "column": 1851,
                                                "urlProvider": "network"
                                            }
                                        },
                                        {
                                            "signal": "Date.now",
                                            "location": {
                                                "column": 351901,
                                                "urlProvider": "network",
                                                "line": 1,
                                                "type": "source-location",
                                                "url": "https://takeuforward.org/static/js/main.ffe17ed9.js"
                                            }
                                        },
                                        {
                                            "location": {
                                                "column": 579195,
                                                "urlProvider": "network",
                                                "type": "source-location",
                                                "url": "https://takeuforward.org/static/js/main.ffe17ed9.js",
                                                "line": 1
                                            },
                                            "signal": "Array.prototype.find"
                                        }
                                    ],
                                    "type": "subitems"
                                },
                                "wastedBytes": 9554
                            }
                        ],
                        "debugData": {
                            "metricSavings": {
                                "LCP": 0,
                                "FCP": 0
                            },
                            "type": "debugdata"
                        },
                        "overallSavingsMs": 0,
                        "type": "opportunity",
                        "overallSavingsBytes": 9554,
                        "headings": [
                            {
                                "key": "url",
                                "label": "URL",
                                "subItemsHeading": {
                                    "key": "location",
                                    "valueType": "source-location"
                                },
                                "valueType": "url"
                            },
                            {
                                "subItemsHeading": {
                                    "key": "signal"
                                },
                                "key": null,
                                "valueType": "code"
                            },
                            {
                                "label": "Potential Savings",
                                "valueType": "bytes",
                                "key": "wastedBytes"
                            }
                        ]
                    },
                    "numericValue": 0,
                    "numericUnit": "millisecond"
                }
            },
            "categories": {
                "performance": {
                    "id": "performance",
                    "title": "Performance",
                    "score": 0.39,
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
                }
            },
            "categoryGroups": {
                "best-practices-ux": {
                    "title": "User Experience"
                },
                "seo-crawl": {
                    "title": "Crawling and Indexing",
                    "description": "To appear in search results, crawlers need access to your app."
                },
                "a11y-names-labels": {
                    "title": "Names and labels",
                    "description": "These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader."
                },
                "a11y-aria": {
                    "title": "ARIA",
                    "description": "These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader."
                },
                "metrics": {
                    "title": "Metrics"
                },
                "a11y-audio-video": {
                    "title": "Audio and video",
                    "description": "These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments."
                },
                "seo-mobile": {
                    "title": "Mobile Friendly",
                    "description": "Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn how to make pages mobile-friendly](https://developers.google.com/search/mobile-sites/)."
                },
                "a11y-navigation": {
                    "title": "Navigation",
                    "description": "These are opportunities to improve keyboard navigation in your application."
                },
                "seo-content": {
                    "title": "Content Best Practices",
                    "description": "Format your HTML in a way that enables crawlers to better understand your app’s content."
                },
                "best-practices-browser-compat": {
                    "title": "Browser Compatibility"
                },
                "a11y-tables-lists": {
                    "title": "Tables and lists",
                    "description": "These are opportunities to improve the experience of reading tabular or list data using assistive technology, like a screen reader."
                },
                "best-practices-general": {
                    "title": "General"
                },
                "a11y-color-contrast": {
                    "title": "Contrast",
                    "description": "These are opportunities to improve the legibility of your content."
                },
                "a11y-best-practices": {
                    "title": "Best practices",
                    "description": "These items highlight common accessibility best practices."
                },
                "a11y-language": {
                    "title": "Internationalization and localization",
                    "description": "These are opportunities to improve the interpretation of your content by users in different locales."
                },
                "diagnostics": {
                    "title": "Diagnostics",
                    "description": "More information about the performance of your application. These numbers don't [directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) the Performance score."
                },
                "best-practices-trust-safety": {
                    "title": "Trust and Safety"
                }
            },
            "timing": {
                "total": 15833.9
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
                        "https://adminapi.takeuforward.org"
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
                    "name": "Amazon Web Services",
                    "homepage": "https://aws.amazon.com/s3/",
                    "category": "other",
                    "origins": [
                        "https://takeuforward-content-images.s3.ap-south-1.amazonaws.com"
                    ]
                }
            ],
            "fullPageScreenshot": {
                "screenshot": {
                    "height": 823,
                    "data": "data:image/webp;base64,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",
                    "width": 412
                },
                "nodes": {
                    "1-16-META": {
                        "right": 0,
                        "bottom": 0,
                        "height": 0,
                        "left": 0,
                        "top": 0,
                        "width": 0
                    },
                    "page-23-DIV": {
                        "bottom": 0,
                        "top": 0,
                        "left": 0,
                        "height": 0,
                        "right": 0,
                        "width": 0
                    },
                    "page-59-DIV": {
                        "left": 0,
                        "height": 0,
                        "right": 0,
                        "bottom": 0,
                        "width": 0,
                        "top": 0
                    },
                    "1-13-META": {
                        "left": 0,
                        "top": 0,
                        "bottom": 0,
                        "height": 0,
                        "right": 0,
                        "width": 0
                    },
                    "page-12-DIV": {
                        "width": 0,
                        "height": 0,
                        "top": 0,
                        "bottom": 0,
                        "left": 0,
                        "right": 0
                    },
                    "page-19-DIV": {
                        "left": 0,
                        "bottom": 0,
                        "width": 0,
                        "top": 0,
                        "right": 0,
                        "height": 0
                    },
                    "page-56-DIV": {
                        "left": 0,
                        "height": 0,
                        "top": 0,
                        "bottom": 0,
                        "right": 0,
                        "width": 0
                    },
                    "page-58-DIV": {
                        "left": 0,
                        "bottom": 0,
                        "width": 0,
                        "height": 0,
                        "right": 0,
                        "top": 0
                    },
                    "1-18-META": {
                        "width": 0,
                        "bottom": 0,
                        "left": 0,
                        "top": 0,
                        "right": 0,
                        "height": 0
                    },
                    "page-44-DIV": {
                        "height": 0,
                        "bottom": 0,
                        "left": 0,
                        "right": 0,
                        "width": 0,
                        "top": 0
                    },
                    "page-0-P": {
                        "bottom": 352,
                        "top": 136,
                        "width": 380,
                        "height": 216,
                        "left": 16,
                        "right": 396
                    },
                    "page-28-DIV": {
                        "right": 396,
                        "left": 16,
                        "width": 380,
                        "bottom": 1030,
                        "top": 950,
                        "height": 80
                    },
                    "page-79-DIV": {
                        "left": 0,
                        "top": 0,
                        "right": 0,
                        "height": 0,
                        "bottom": 0,
                        "width": 0
                    },
                    "1-23-META": {
                        "left": 0,
                        "right": 0,
                        "top": 0,
                        "bottom": 0,
                        "width": 0,
                        "height": 0
                    },
                    "page-71-DIV": {
                        "bottom": 0,
                        "height": 0,
                        "left": 0,
                        "top": 0,
                        "width": 0,
                        "right": 0
                    },
                    "page-66-DIV": {
                        "right": 0,
                        "bottom": 0,
                        "height": 0,
                        "left": 0,
                        "width": 0,
                        "top": 0
                    },
                    "page-40-DIV": {
                        "width": 0,
                        "bottom": 0,
                        "height": 0,
                        "top": 0,
                        "left": 0,
                        "right": 0
                    },
                    "1-0-BUTTON": {
                        "width": 0,
                        "bottom": 0,
                        "right": 0,
                        "top": 0,
                        "height": 0,
                        "left": 0
                    },
                    "page-81-DIV": {
                        "bottom": 0,
                        "width": 0,
                        "right": 0,
                        "height": 0,
                        "top": 0,
                        "left": 0
                    },
                    "page-41-DIV": {
                        "width": 380,
                        "left": 16,
                        "right": 396,
                        "top": 1240,
                        "bottom": 1298,
                        "height": 58
                    },
                    "page-47-DIV": {
                        "right": 0,
                        "width": 0,
                        "height": 0,
                        "left": 0,
                        "top": 0,
                        "bottom": 0
                    },
                    "1-35-META": {
                        "bottom": 0,
                        "height": 0,
                        "right": 0,
                        "left": 0,
                        "top": 0,
                        "width": 0
                    },
                    "page-25-DIV": {
                        "left": 0,
                        "width": 0,
                        "bottom": 0,
                        "right": 0,
                        "height": 0,
                        "top": 0
                    },
                    "1-12-LINK": {
                        "left": 0,
                        "top": 0,
                        "right": 0,
                        "width": 0,
                        "height": 0,
                        "id": "googleidentityservice",
                        "bottom": 0
                    },
                    "page-63-DIV": {
                        "top": 0,
                        "bottom": 0,
                        "width": 0,
                        "left": 0,
                        "right": 0,
                        "height": 0
                    },
                    "page-49-DIV": {
                        "height": 0,
                        "top": 0,
                        "bottom": 0,
                        "right": 0,
                        "left": 0,
                        "width": 0
                    },
                    "1-28-META": {
                        "top": 0,
                        "right": 0,
                        "width": 0,
                        "left": 0,
                        "height": 0,
                        "bottom": 0
                    },
                    "page-70-DIV": {
                        "width": 0,
                        "left": 0,
                        "right": 0,
                        "bottom": 0,
                        "top": 0,
                        "height": 0
                    },
                    "page-2-DIV": {
                        "right": 29,
                        "bottom": 623,
                        "height": 8,
                        "left": 29,
                        "top": 615,
                        "width": 0
                    },
                    "page-87-DIV": {
                        "left": 16,
                        "right": 396,
                        "top": 2276,
                        "bottom": 2334,
                        "width": 380,
                        "height": 58
                    },
                    "page-69-DIV": {
                        "width": 0,
                        "left": 0,
                        "top": 0,
                        "right": 0,
                        "height": 0,
                        "bottom": 0
                    },
                    "page-6-BUTTON": {
                        "top": 651,
                        "bottom": 691,
                        "left": -240,
                        "width": 223,
                        "height": 40,
                        "right": -17
                    },
                    "page-85-DIV": {
                        "bottom": 0,
                        "left": 0,
                        "right": 0,
                        "width": 0,
                        "height": 0,
                        "top": 0
                    },
                    "page-82-DIV": {
                        "right": 0,
                        "left": 0,
                        "height": 0,
                        "top": 0,
                        "bottom": 0,
                        "width": 0
                    },
                    "page-78-DIV": {
                        "left": 0,
                        "top": 0,
                        "bottom": 0,
                        "right": 0,
                        "height": 0,
                        "width": 0
                    },
                    "page-1-BUTTON": {
                        "bottom": 609,
                        "height": 42,
                        "width": 131,
                        "left": 261,
                        "top": 567,
                        "right": 392
                    },
                    "1-32-META": {
                        "left": 0,
                        "width": 0,
                        "bottom": 0,
                        "right": 0,
                        "top": 0,
                        "height": 0
                    },
                    "page-22-DIV": {
                        "left": 0,
                        "bottom": 0,
                        "right": 0,
                        "top": 0,
                        "width": 0,
                        "height": 0
                    },
                    "1-10-LINK": {
                        "right": 0,
                        "left": 0,
                        "height": 0,
                        "top": 0,
                        "width": 0,
                        "bottom": 0
                    },
                    "page-74-DIV": {
                        "left": 16,
                        "bottom": 2148,
                        "top": 2068,
                        "height": 80,
                        "right": 396,
                        "width": 380
                    },
                    "page-3-DIV": {
                        "right": 387,
                        "bottom": 118,
                        "width": 42,
                        "top": 94,
                        "left": 345,
                        "height": 24
                    },
                    "page-16-DIV": {
                        "right": 0,
                        "bottom": 0,
                        "width": 0,
                        "height": 0,
                        "left": 0,
                        "top": 0
                    },
                    "page-50-DIV": {
                        "bottom": 1524,
                        "right": 396,
                        "width": 380,
                        "left": 16,
                        "top": 1426,
                        "height": 98
                    },
                    "page-46-DIV": {
                        "height": 0,
                        "top": 0,
                        "width": 0,
                        "right": 0,
                        "bottom": 0,
                        "left": 0
                    },
                    "page-18-DIV": {
                        "right": 0,
                        "left": 0,
                        "height": 0,
                        "width": 0,
                        "bottom": 0,
                        "top": 0
                    },
                    "1-3-IMG": {
                        "height": 0,
                        "bottom": 0,
                        "top": 0,
                        "width": 0,
                        "left": 0,
                        "right": 0
                    },
                    "page-60-DIV": {
                        "width": 380,
                        "left": 16,
                        "bottom": 1836,
                        "top": 1756,
                        "height": 80,
                        "right": 396
                    },
                    "page-33-DIV": {
                        "left": 0,
                        "bottom": 0,
                        "width": 0,
                        "height": 0,
                        "right": 0,
                        "top": 0
                    },
                    "page-80-DIV": {
                        "width": 0,
                        "height": 0,
                        "left": 0,
                        "right": 0,
                        "top": 0,
                        "bottom": 0
                    },
                    "page-26-DIV": {
                        "top": 0,
                        "right": 0,
                        "bottom": 0,
                        "left": 0,
                        "width": 0,
                        "height": 0
                    },
                    "page-14-DIV": {
                        "height": 0,
                        "right": 0,
                        "bottom": 0,
                        "top": 0,
                        "left": 0,
                        "width": 0
                    },
                    "page-51-DIV": {
                        "left": 0,
                        "bottom": 0,
                        "top": 0,
                        "height": 0,
                        "right": 0,
                        "width": 0
                    },
                    "page-88-DIV": {
                        "right": 0,
                        "bottom": 0,
                        "width": 0,
                        "top": 0,
                        "height": 0,
                        "left": 0
                    },
                    "page-61-DIV": {
                        "left": 0,
                        "width": 0,
                        "right": 0,
                        "height": 0,
                        "bottom": 0,
                        "top": 0
                    },
                    "page-34-DIV": {
                        "height": 0,
                        "bottom": 0,
                        "width": 0,
                        "top": 0,
                        "right": 0,
                        "left": 0
                    },
                    "page-64-DIV": {
                        "top": 1860,
                        "left": 16,
                        "bottom": 1940,
                        "right": 396,
                        "height": 80,
                        "width": 380
                    },
                    "page-24-DIV": {
                        "right": 396,
                        "left": 16,
                        "height": 80,
                        "top": 846,
                        "width": 380,
                        "bottom": 926
                    },
                    "1-21-META": {
                        "height": 0,
                        "top": 0,
                        "right": 0,
                        "bottom": 0,
                        "left": 0,
                        "width": 0
                    },
                    "1-8-LINK": {
                        "top": 0,
                        "bottom": 0,
                        "width": 0,
                        "height": 0,
                        "right": 0,
                        "left": 0
                    },
                    "1-31-META": {
                        "height": 0,
                        "right": 0,
                        "bottom": 0,
                        "width": 0,
                        "left": 0,
                        "top": 0
                    },
                    "page-73-DIV": {
                        "width": 0,
                        "right": 0,
                        "top": 0,
                        "bottom": 0,
                        "left": 0,
                        "height": 0
                    },
                    "page-17-DIV": {
                        "top": 660,
                        "left": 16,
                        "height": 58,
                        "bottom": 718,
                        "width": 380,
                        "right": 396
                    },
                    "page-43-DIV": {
                        "left": 0,
                        "width": 0,
                        "height": 0,
                        "top": 0,
                        "bottom": 0,
                        "right": 0
                    },
                    "page-32-DIV": {
                        "top": 0,
                        "height": 0,
                        "bottom": 0,
                        "width": 0,
                        "right": 0,
                        "left": 0
                    },
                    "1-2-IMG": {
                        "height": 0,
                        "width": 0,
                        "right": 0,
                        "bottom": 0,
                        "left": 0,
                        "top": 0
                    },
                    "page-53-DIV": {
                        "width": 380,
                        "right": 396,
                        "bottom": 1628,
                        "height": 80,
                        "top": 1548,
                        "left": 16
                    },
                    "page-20-DIV": {
                        "top": 742,
                        "height": 80,
                        "right": 396,
                        "left": 16,
                        "width": 380,
                        "bottom": 822
                    },
                    "page-89-DIV": {
                        "right": 396,
                        "bottom": 2416,
                        "top": 2358,
                        "width": 380,
                        "left": 16,
                        "height": 58
                    },
                    "1-11-LINK": {
                        "left": 0,
                        "right": 0,
                        "top": 0,
                        "bottom": 0,
                        "width": 0,
                        "height": 0
                    },
                    "page-21-DIV": {
                        "left": 0,
                        "top": 0,
                        "bottom": 0,
                        "right": 0,
                        "width": 0,
                        "height": 0
                    },
                    "1-37-META": {
                        "height": 0,
                        "right": 0,
                        "left": 0,
                        "top": 0,
                        "width": 0,
                        "bottom": 0
                    },
                    "1-5-IMG": {
                        "left": 0,
                        "right": 0,
                        "bottom": 0,
                        "top": 0,
                        "height": 0,
                        "width": 0
                    },
                    "1-15-META": {
                        "top": 0,
                        "width": 0,
                        "right": 0,
                        "bottom": 0,
                        "left": 0,
                        "height": 0
                    },
                    "page-9-BUTTON": {
                        "bottom": 146,
                        "top": 106,
                        "right": -17,
                        "width": 223,
                        "left": -240,
                        "height": 40
                    },
                    "page-38-DIV": {
                        "height": 0,
                        "left": 0,
                        "bottom": 0,
                        "width": 0,
                        "right": 0,
                        "top": 0
                    },
                    "page-29-DIV": {
                        "right": 0,
                        "width": 0,
                        "bottom": 0,
                        "height": 0,
                        "left": 0,
                        "top": 0
                    },
                    "page-52-DIV": {
                        "top": 0,
                        "right": 0,
                        "height": 0,
                        "bottom": 0,
                        "width": 0,
                        "left": 0
                    },
                    "page-67-DIV": {
                        "bottom": 2044,
                        "width": 380,
                        "right": 396,
                        "top": 1964,
                        "height": 80,
                        "left": 16
                    },
                    "page-5-DIV": {
                        "id": "sidebar",
                        "right": 0,
                        "height": 823,
                        "width": 256,
                        "bottom": 823,
                        "top": 0,
                        "left": -256
                    },
                    "page-4-BUTTON": {
                        "bottom": 608,
                        "left": 209,
                        "width": 40,
                        "right": 249,
                        "top": 568,
                        "height": 40
                    },
                    "page-65-DIV": {
                        "width": 0,
                        "height": 0,
                        "left": 0,
                        "bottom": 0,
                        "right": 0,
                        "top": 0
                    },
                    "page-75-DIV": {
                        "width": 0,
                        "height": 0,
                        "right": 0,
                        "bottom": 0,
                        "top": 0,
                        "left": 0
                    },
                    "1-17-META": {
                        "top": 0,
                        "width": 0,
                        "left": 0,
                        "height": 0,
                        "right": 0,
                        "bottom": 0
                    },
                    "page-72-DIV": {
                        "right": 0,
                        "top": 0,
                        "width": 0,
                        "bottom": 0,
                        "left": 0,
                        "height": 0
                    },
                    "page-83-DIV": {
                        "bottom": 0,
                        "left": 0,
                        "width": 0,
                        "top": 0,
                        "right": 0,
                        "height": 0
                    },
                    "page-42-DIV": {
                        "top": 0,
                        "height": 0,
                        "left": 0,
                        "width": 0,
                        "bottom": 0,
                        "right": 0
                    },
                    "1-9-LINK": {
                        "height": 0,
                        "top": 0,
                        "bottom": 0,
                        "left": 0,
                        "width": 0,
                        "right": 0
                    },
                    "1-29-META": {
                        "top": 0,
                        "height": 0,
                        "left": 0,
                        "right": 0,
                        "width": 0,
                        "bottom": 0
                    },
                    "page-45-DIV": {
                        "top": 1322,
                        "left": 16,
                        "height": 80,
                        "width": 380,
                        "right": 396,
                        "bottom": 1402
                    },
                    "page-62-DIV": {
                        "right": 0,
                        "bottom": 0,
                        "left": 0,
                        "height": 0,
                        "top": 0,
                        "width": 0
                    },
                    "1-25-META": {
                        "left": 0,
                        "width": 0,
                        "right": 0,
                        "bottom": 0,
                        "height": 0,
                        "top": 0
                    },
                    "page-11-DIV": {
                        "top": 0,
                        "width": 0,
                        "left": 0,
                        "height": 0,
                        "right": 0,
                        "bottom": 0
                    },
                    "1-20-META": {
                        "left": 0,
                        "right": 0,
                        "bottom": 0,
                        "height": 0,
                        "width": 0,
                        "top": 0
                    },
                    "page-13-DIV": {
                        "top": 0,
                        "bottom": 0,
                        "height": 0,
                        "width": 0,
                        "left": 0,
                        "right": 0
                    },
                    "page-86-DIV": {
                        "height": 0,
                        "left": 0,
                        "bottom": 0,
                        "width": 0,
                        "right": 0,
                        "top": 0
                    },
                    "page-30-DIV": {
                        "top": 0,
                        "right": 0,
                        "height": 0,
                        "width": 0,
                        "left": 0,
                        "bottom": 0
                    },
                    "page-68-DIV": {
                        "height": 0,
                        "left": 0,
                        "bottom": 0,
                        "width": 0,
                        "top": 0,
                        "right": 0
                    },
                    "page-35-DIV": {
                        "bottom": 0,
                        "right": 0,
                        "top": 0,
                        "width": 0,
                        "left": 0,
                        "height": 0
                    },
                    "page-8-DIV": {
                        "width": 223,
                        "top": 433,
                        "right": -17,
                        "height": 39,
                        "left": -240,
                        "bottom": 472
                    },
                    "1-4-IMG": {
                        "top": 0,
                        "right": 0,
                        "height": 0,
                        "bottom": 0,
                        "left": 0,
                        "width": 0
                    },
                    "1-6-LINK": {
                        "height": 0,
                        "top": 0,
                        "width": 0,
                        "bottom": 0,
                        "right": 0,
                        "left": 0
                    },
                    "page-37-DIV": {
                        "left": 16,
                        "right": 396,
                        "height": 80,
                        "top": 1136,
                        "bottom": 1216,
                        "width": 380
                    },
                    "1-22-META": {
                        "left": 0,
                        "width": 0,
                        "bottom": 0,
                        "top": 0,
                        "right": 0,
                        "height": 0
                    },
                    "page-31-DIV": {
                        "top": 1054,
                        "width": 380,
                        "right": 396,
                        "left": 16,
                        "bottom": 1112,
                        "height": 58
                    },
                    "page-76-DIV": {
                        "left": 0,
                        "right": 0,
                        "bottom": 0,
                        "width": 0,
                        "height": 0,
                        "top": 0
                    },
                    "page-54-DIV": {
                        "width": 0,
                        "bottom": 0,
                        "height": 0,
                        "top": 0,
                        "left": 0,
                        "right": 0
                    },
                    "1-26-META": {
                        "left": 0,
                        "height": 0,
                        "width": 0,
                        "bottom": 0,
                        "top": 0,
                        "right": 0
                    },
                    "page-36-DIV": {
                        "width": 0,
                        "left": 0,
                        "bottom": 0,
                        "right": 0,
                        "top": 0,
                        "height": 0
                    },
                    "1-24-META": {
                        "top": 0,
                        "left": 0,
                        "height": 0,
                        "bottom": 0,
                        "width": 0,
                        "right": 0
                    },
                    "1-34-META": {
                        "right": 0,
                        "top": 0,
                        "width": 0,
                        "height": 0,
                        "bottom": 0,
                        "left": 0
                    },
                    "page-27-DIV": {
                        "height": 0,
                        "top": 0,
                        "bottom": 0,
                        "width": 0,
                        "right": 0,
                        "left": 0
                    },
                    "1-36-META": {
                        "width": 0,
                        "right": 0,
                        "left": 0,
                        "top": 0,
                        "bottom": 0,
                        "height": 0
                    },
                    "1-39-META": {
                        "left": 0,
                        "top": 0,
                        "bottom": 0,
                        "width": 0,
                        "right": 0,
                        "height": 0
                    },
                    "1-19-META": {
                        "top": 0,
                        "height": 0,
                        "left": 0,
                        "bottom": 0,
                        "width": 0,
                        "right": 0
                    },
                    "page-39-DIV": {
                        "left": 0,
                        "height": 0,
                        "bottom": 0,
                        "width": 0,
                        "top": 0,
                        "right": 0
                    },
                    "1-30-META": {
                        "left": 0,
                        "top": 0,
                        "bottom": 0,
                        "width": 0,
                        "right": 0,
                        "height": 0
                    },
                    "1-7-LINK": {
                        "left": 0,
                        "width": 0,
                        "right": 0,
                        "height": 0,
                        "bottom": 0,
                        "top": 0
                    },
                    "1-14-META": {
                        "left": 0,
                        "right": 0,
                        "top": 0,
                        "bottom": 0,
                        "width": 0,
                        "height": 0
                    },
                    "page-7-DIV": {
                        "width": 223,
                        "bottom": 203,
                        "height": 39,
                        "top": 164,
                        "right": -17,
                        "left": -240
                    },
                    "page-15-DIV": {
                        "left": 0,
                        "bottom": 0,
                        "top": 0,
                        "height": 0,
                        "right": 0,
                        "width": 0
                    },
                    "page-57-DIV": {
                        "bottom": 1732,
                        "right": 396,
                        "left": 16,
                        "top": 1652,
                        "height": 80,
                        "width": 380
                    },
                    "page-48-DIV": {
                        "right": 0,
                        "width": 0,
                        "bottom": 0,
                        "left": 0,
                        "top": 0,
                        "height": 0
                    },
                    "page-84-DIV": {
                        "right": 396,
                        "left": 16,
                        "width": 380,
                        "bottom": 2252,
                        "height": 80,
                        "top": 2172
                    },
                    "1-38-META": {
                        "bottom": 0,
                        "height": 0,
                        "right": 0,
                        "width": 0,
                        "left": 0,
                        "top": 0
                    },
                    "page-77-DIV": {
                        "height": 0,
                        "left": 0,
                        "right": 0,
                        "bottom": 0,
                        "top": 0,
                        "width": 0
                    },
                    "1-1-DIV": {
                        "top": 540,
                        "bottom": 2416,
                        "right": 396,
                        "height": 1876,
                        "width": 380,
                        "left": 16
                    },
                    "1-33-META": {
                        "width": 0,
                        "bottom": 0,
                        "right": 0,
                        "height": 0,
                        "left": 0,
                        "top": 0
                    },
                    "page-55-DIV": {
                        "bottom": 0,
                        "right": 0,
                        "width": 0,
                        "left": 0,
                        "top": 0,
                        "height": 0
                    },
                    "1-27-META": {
                        "bottom": 0,
                        "top": 0,
                        "width": 0,
                        "left": 0,
                        "right": 0,
                        "height": 0
                    },
                    "page-10-DIV": {
                        "height": 39,
                        "width": 223,
                        "top": 597,
                        "bottom": 635,
                        "right": -17,
                        "left": -240
                    }
                }
            }
        },
        "analysisUTCTimestamp": "2024-06-02T14:21:06.264Z"
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
            <div className="fixed flex flex-col top-0 left-0 w-80 bg-white h-full border-r">
                <div className="flex items-center justify-center h-14 border-b p-10 font-semibold">
                    <div>LOGO</div>
                </div>
                <div className="overflow-y-auto overflow-x-hidden flex-grow mx-2">
                    <div className="flex flex-col py-4 space-y-5 text-gray-600 font-semibold">

                        <a href="#" className="relative flex  items-center justify-center focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center  hover:bg-[#2D2D2D] rounded-2xl hover:text-white">

                                <img src="/appGrid.svg" className="hover:text-white" alt="" srcSet="" />
                                <span className="ml-2 text-sm tracking-wide truncate">Overview</span>
                            </div>
                        </a>


                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center hover:bg-[#2D2D2D] rounded-2xl hover:text-white">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
                                </svg>

                                <span className="ml-2 text-sm tracking-wide truncate">Scrp</span>
                                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
                            </div></a>


                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center hover:bg-[#2D2D2D] rounded-2xl hover:text-white">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM15.375 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
                                </svg>

                                <span className="ml-2 text-sm tracking-wide truncate">Crawler</span>
                            </div>   </a>


                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center hover:bg-[#2D2D2D] rounded-2xl hover:text-white">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                </svg>

                                <span className="ml-2 text-sm tracking-wide truncate">Issues</span>
                                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
                            </div>
                        </a>



                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center hover:bg-[#2D2D2D] rounded-2xl hover:text-white">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
                                </svg>

                                <span className="ml-2 text-sm tracking-wide truncate">Images</span>
                            </div>      </a>


                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center hover:bg-[#2D2D2D] rounded-2xl hover:text-white">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path d="M11.625 16.5a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z" />
                                    <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 0 0 1.06-1.06l-1.047-1.048A3.375 3.375 0 1 0 11.625 18Z" clipRule="evenodd" />
                                    <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                                </svg>

                                <span className="ml-2 text-sm tracking-wide truncate">Content</span>
                                <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">15</span>
                            </div>         </a>



                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center hover:bg-[#2D2D2D] rounded-2xl hover:text-white">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
                                </svg>

                                <span className="ml-2 text-sm tracking-wide truncate">Performance</span>
                            </div> </a>



                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center hover:bg-[#2D2D2D] rounded-2xl hover:text-white">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                </svg>



                                <span className="ml-2 text-sm tracking-wide truncate">Download</span>
                            </div>      </a>


                        <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none ">
                            <div className="p-4 w-full mx-5 flex items-center hover:bg-[#2D2D2D] rounded-2xl hover:text-white">

                                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>

                                <span className="ml-2 text-sm tracking-wide truncate">New</span>
                            </div>      </a>

                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="h-screen w-80">
                </div>
                <div className=' flex grow flex-col items-center justify-center bg-gray-200 text-[#2D2D2D] ' >
                    <div className="w-4/5 flex justify-between mt-10 bg-white p-10">
                        <div className="text-3xl">{scrapeData ? scrapeData.title : <></>}</div>
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


                    </div>
                    <div className="flex flex-col my-10 p-1 bg-white">
                        {test.map((item, index) => (

                            <div key={index} className="flex mx-2 my-1 rounded items-center border p-2">
                                <div className="rounded-full bg-slate-500 h-10 mx-2 w-10"></div>
                                <div className="text-sm w-80 font-semibold mx-2">{item.title}</div>
                                <div className="text-sm">Remark</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Suspense>

    )
}

export default page