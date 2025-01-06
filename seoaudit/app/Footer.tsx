import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-gray-400 py-12">
      <div className="container mx-auto flex flex-wrap justify-between px-8 lg:px-20">
        
        {/* Logo and Description */}
        <div className="flex flex-col lg:basis-1/2 space-y-4">
          <div className="flex items-center space-x-2">
            <Link href="/" aria-label="SEO View Home">
              <img src="/SEOlogoBW.png" alt="SEO View Logo" className="h-10 w-auto -ml-3" />
            </Link>
            {/* <h1 className="text-3xl font-black text-white">SEOVew</h1> */}
          </div>
          <p className="text-sm opacity-60">Search Engine Optimization</p>
          <Link href="run" className="inline-flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded transition-transform transform hover:scale-105 hover:bg-gray-500 sm:w-1/3 w-full">
            GET STARTED
          </Link>
          <div className="flex space-x-4 mt-4">
            <Link href="https://www.youtube.com/channel/UCmafeX3_9idkzsTS5SrRFpA" aria-label="YouTube">
              <svg
                className="h-8 w-8 hover:text-red-600 transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 461.001 461.001"
                xmlSpace="preserve"
              >
                <path
                  className="fill-current"
                  d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2 font-semibold lg:basis-1/4 mt-10 lg:mt-0">
          <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
          <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          {/* <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link> */}
          <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          <Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link>
        </div>

        {/* Company Links */}
        <div className="flex flex-col space-y-2 font-semibold lg:basis-1/4 mt-10 lg:mt-0">
          <Link href="/blogs" className="hover:text-white transition-colors">Blogs</Link>
          <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms and Conditions</Link>
          <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
          {/* <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link> */}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto px-8 lg:px-20 mt-8 border-t border-gray-700 pt-4">
        <div className="flex justify-center text-sm text-gray-500">
          © Copyright 2024
        </div>
      </div>
    </footer>
  );
}
