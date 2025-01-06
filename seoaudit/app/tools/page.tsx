import Link from 'next/link';
import React from 'react';
import Nav from '../Nav';
import { jsonData } from '../data/data';
import type { TestsType } from './types';

const slugify = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, '-');
};

function Page() {
    const tests: TestsType = jsonData; // Move `tests` inside the component
    return (
        <>
            <Nav />
            <div className="flex items-center justify-center flex-col">
                <div className="h-80 mt-40 w-full flex items-center justify-center flex-col">
                    <div className="text-5xl font-bold ">
                        Explore Our SEO Tools
                    </div>
                    <div className="text-lg font-medium mt-4">
                        Looking for all the essential tools in one place? Start your free trial today!
                    </div>
                </div>
                <div className="flex flex-col w-4/5 my-20 items-center justify-center">
                    {tests.map((item, index) => (
                        <Link key={index} href={`/tools/${item.index}/${slugify(item.title)}`}>
                            <div className="h-52 w-full m-4 p-8 rounded flex flex-col items-center justify-center bg-slate-100">
                                <div className="icon"></div>
                                <div className="text-lg font-semibold self-start">{item.title}</div>
                                <div className="font-light line-clamp-4 text-justify">{item.desc}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Page;
