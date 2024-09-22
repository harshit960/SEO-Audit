'use client';

import { useEffect, useState } from 'react';

export default function TestPage({ params }) {
  const { test } = params;  // Dynamic route parameter
  const [testData, setTestData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch data on the client side
  useEffect(() => {
   
  }, [test]);

  if (loading) {
    return <div>Loading...{test}</div>;
  }

  // if (!testData) {
  //   return <div>Test not found</div>;
  // }

  return (
    <div>
      {test}
    </div>
  );
}

  const fetchData = async (url) => {
    try {
      console.log(process.env.NEXT_PUBLIC_API_HOST);

      const [psiRes, scrapeRes] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_HOST}/psi?url=${encodeURIComponent(url)}`),
        fetch(`${process.env.NEXT_PUBLIC_API_HOST}/scrape?url=${encodeURIComponent(url)}`)
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