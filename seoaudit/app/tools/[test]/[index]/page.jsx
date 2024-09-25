'use client';

import { useEffect, useState } from 'react';
import { tests } from '../../page';

export default function TestPage({ params }) {
  const { test } = params;  // Dynamic route parameter
  const [testData, setTestData] = useState(null);
  const [PsiData, setPsiData] = useState();
  const [ScrapeData, setScrapeData] = useState();
  const [loading, setLoading] = useState(false);
  const [url, seturl] = useState('');
  const [MetaDesc, setMetaDesc] = useState({});

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
    <div className='flex flex-col w-full items-center min-h-screen justify-center p-20 space-y-10'>
      <div className="text-3xl font-bold">

        {tests[test - 1].title}
      </div>
      <div className="text-md text-center w-1/2">
        {tests[test - 1].desc}

      </div>

      <div className="flex">

        <input type="text" onChange={(e) => seturl(e.target.value)} value={url} className='border w-96 p-4' placeholder='Url' />
        <button onClick={() => fetchData(url)} className='bg-[#009379] text-white p-4'>Run Test</button>
      </ div>
      <div className="flex h-40 w-full">
        <div className="bg-slate-100 flex mx-2 my-1 rounded items-center w-full  p-4 px-2">
          <div className="mx-4">

            {MetaDesc.Result == "Success" ?
              <div className="text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
              </div>
              : MetaDesc.Result == "Error" ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 m-2 text-red-400">
                  <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                </svg>
              ) : <></>}
          </div>
          <div className="text-sm  font-semibold min-w-80 whitespace-nowrap truncate">Meta Description Test</div>
          <div className="flex grow flex-col overflow-auto">
            <div className="text-sm">{MetaDesc.Description}</div>
            <div className="bg-slate-200 border-l-4 border-slate-400 text-slate-700 p-4 my-2" role="alert">

              <div className="text-sm">Text: {MetaDesc.Text}</div>
              <div className="text-sm">{MetaDesc.Length}</div>
              <a href={MetaDesc.Link} className="text-sm">Learn More</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

