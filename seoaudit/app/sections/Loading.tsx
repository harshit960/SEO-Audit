"use client";
import React, { useEffect, useState } from "react";

const quotes = [
  "Patience is the key to success.",
  "Good things come to those who wait.",
  "Every moment is a fresh beginning.",
  "The best way to predict the future is to create it.",
  "Believe in the process.",
  "Success is the sum of small efforts, repeated day in and day out."
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
