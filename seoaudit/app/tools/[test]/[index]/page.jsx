'use client';

import { useEffect, useState } from 'react';

export default function TestPage({ params }) {
  const { test } = params;  // Dynamic route parameter
  const [testData, setTestData] = useState(null);
  const [PsiData, setPsiData] = useState();
  const [ScrapeData, setScrapeData] = useState();
  const [loading, setLoading] = useState(false);
  const [url, seturl] = useState('');
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
  // Fetch data on the client side
  useEffect(() => {
    fetchData(test);
  }, [test]);

  if (loading) {
    return <div>Loading...{test}</div>;
  }

  // if (!testData) {
  //   return <div>Test not found</div>;
  // }

  return (
    <div className='flex flex-col'>
      {test}
      <div className="flex">

        <input type="text" onChange={(e) => seturl(e.target.value)} value={url} className='border w-96 p-4' placeholder='YourWebiste.com' />
        <button onClick={() => fetchData(url)} className='bg-blue-500 text-white p-4'>Run Test</button>
      </ div>
    </div>
  );
}

