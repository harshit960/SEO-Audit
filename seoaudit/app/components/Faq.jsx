"use client"
import React, { useState } from 'react'

function Faq() {
    const [state, setstate] = useState("hidden");
    function handleClick() {
        if (state === "hidden") {
            setstate("block")

        } else {
            setstate("hidden")

        }
    }

    const faq = [
        {
            que: "What is an SEO audit? ",
            desc: "An SEO audit is a comprehensive overview of your website's current search engine optimization (SEO) performance. It shows factors such as On-page, Off- Page and Technical SEO which you can optimize further to improve SEO score.",
        },
        {
            que: "Why do I need an SEO audit?",
            desc: "An SEO audit helps you understand how well your website is optimized for search engines like Google. It highlights strengths and weaknesses, enabling you to make informed decisions to improve your website SEO score."
        },
        {
            que: "Is the SEO audit really free?",
            desc: "Yes, our SEO audit is completely free of charge for now. You can enter your website URL, and within fw seconds, you'll receive a detailed report outlining key SEO metrics and actionable insights."
        },
        {
            que: "What information will the SEO audit provide?",
            desc: "Our audit report includes analysis of on-page SEO elements (like meta tags, headers, and content), technical SEO factors (such as site speed and mobile-friendliness), backlink analysis, and recommendations for improvement."
        },
        {
            que: "How long does it take to receive the audit results?",
            desc: "You'll typically receive the audit report instantly after entering your website URL. The process is quick and designed to give you immediate insights into your website's SEO health."
        },
        {
            que: "How can I use the SEO audit results to improve my website?",
            desc: "The audit report will provide specific recommendations tailored to your website's SEO needs. You can use these recommendations to prioritize and implement changes that will enhance your site's performance in search engine results."
        },
        {
            que: "Is my website data secure?",
            desc: "Yes, we take data security seriously. Your website URL and any information entered during the audit process are kept confidential and are not shared with third parties."
        },
        {
            que: "Can I request a re-audit in the future?",
            desc: "Yes, you can revisit our site and request a new SEO audit at any time. Regular audits can help track your progress and identify ongoing SEO opportunities."
        },
        {
            que: "How do I check my SEO audit?",
            desc: "To check your SEO audit, enter your website URL into our free SEO audit tool. It will analyze various aspects of your site's SEO performance and provide a detailed report with recommendations for improvement."
        },
        {
            que: "What is a good SEO audit score?",
            desc: "A good SEO audit score typically ranges from 80 to 100. This indicates that your website is well-optimized for search engines with few critical issues and room for minor improvements."
        },
        {
            que: "How to calculate SEO score?",
            desc: "SEO scores are calculated based on factors such as on-page SEO, technical SEO, content quality, and backlink profile. Automated tools analyze these factors and assign a score based on how well your website meets SEO best practices."
        },
        {
            que: "How to do a free SEO audit of the website?",
            desc: "You can perform a free SEO audit of your website by using online SEO audit tools. Simply enter your website URL into the tool, and it will generate a comprehensive report highlighting areas for improvement in on-page SEO, technical SEO, content, and more."
        },
    ]
    return (
        <>
            {faq.slice(0, 3).map((item) => (
                <>
                    <div className="mt-14">

                        <div className="text-lg font-semibold">{item.que}</div>
                        <div className="mt-2 text-slate-500">{item.desc}</div>
                    </div>
                </>
            ))}
            <div className={state}>

                {faq.slice(3, 11).map((item) => (
                    <>
                        <div className="mt-14">

                            <div className="text-lg font-semibold">{item.que}</div>
                            <div className="mt-2 text-slate-500">{item.desc}</div>
                        </div>
                    </>
                ))}
            </div>
            <div className="flex items-center justify-center w-full mt-10">

            <button onClick={handleClick}>
                <div className=" p-2 rounded bg-[#009379] px-4 text-white">

                Expand
                </div>
            </button>
            </div>

        </>)
}

export default Faq