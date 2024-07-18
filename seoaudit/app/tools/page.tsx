import Link from 'next/link';
import React from 'react'
import Nav from '../Nav';

function page() {
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

    return (
        <>
            <Nav />
            <div className='h-80 mt-40 w-full flex items-center justify-center flex-col'>
                <div className="text-5xl font-bold ">
                    Some of our SEO Tools
                </div>
                <div className="text-lg font-medium mt-4">
                    Want all the tools in one place?
                    Start your Free Trial
                </div>
            </div>
            <div className="flex flex-wrap my-20 items-center justify-center">
                {test.map((item) => (
                    <Link href={`tools/test/?test=${item.title}`}>

                        <div className="h-52 w-80 m-4 rounded flex flex-col items-center justify-center bg-slate-100 p-2 ">
                            <div className="icon"></div>
                            <div className="text-lg font-semibold">{item.title}</div>
                            <div className="font-light line-clamp-4 text-center	">{item.desc}</div>
                        </div>
                    </Link>
                ))}

            </div>

        </>
    )
}

export default page