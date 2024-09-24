
import React from "react";
import Footer from "@/app/Footer";
import Nav from "@/app/Nav";

export const metadata = {
    title: "SEOvew",
    description: "Free SEO Audit Tools",
};


export default function RootLayout({ children }: any) {
    return (
        <>
            <Nav />
            <div className="">

                {children}
            </div>

            {/* <Footer /> */}
        </>


    );
}
