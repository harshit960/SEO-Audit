"use client";
import React, { useEffect, useState } from "react";

const quotes = [
  "Good SEO is like a fine wine, it gets better with age.",
  "Your website is your 24/7 salesperson; make sure it’s optimized to convert.",
  "75% of users never scroll past the first page of search results.",
  "Content is king, but context is queen.",
  "A website without SEO is like a car without gas.",
  "On average, it takes 3-4 months to see significant SEO improvements.",
  "The top 5 search results get 75% of the clicks.",
  "Website speed is a ranking factor; a slow website can cost you traffic and conversions.",
  "Mobile-friendliness is critical: Over 50% of web traffic comes from mobile devices.",
  "Organic search drives 53% of all website traffic.",
  "SEO is not about getting traffic; it’s about getting the right kind of traffic.",
  "Every second delay in page load time can reduce conversion rates by 7%.",
  "93% of online experiences begin with a search engine.",
  "Quality backlinks are still one of the top ranking factors in SEO.",
  "Voice search is expected to be 50% of all searches by 2025."
];

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 600); // 600ms interval for 60s total time

    const quoteInterval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 5000); // Change quote every 5 seconds

    return () => {
      clearInterval(interval);
      clearInterval(quoteInterval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-4xl font-bold mb-4">{progress}%</div>
      <div className="text-xl italic">{quote}</div>
      <div className="w-64 h-2 mt-4 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
