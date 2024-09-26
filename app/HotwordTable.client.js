"use client";

import React, { useEffect, useState } from 'react';

const HotwordTable = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        fetch('/api/proxy')
            .then(res => res.json())
            .then(data => setEntries(data.data))
            .catch(err => console.error('Error fetching data:', err));
    }, []);

    const constructEncodedURL = (keyword) => {
        let encodedHotword = encodeURIComponent(keyword)
        return `https://wm.m.sm.cn/s?from=wm871918&q=${encodedHotword}`
    };

    return (
        <div className="container mx-auto mt-10">
            <div className="flex items-center justify-center">
                <h1 className="text-xl font-bold mb-5">土豆热词导航🥔</h1>
            </div>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="text-left py-3 px-5">热词</th>
                        <th className="text-left py-3 px-5">类</th>
                        <th className="text-left py-3 px-5">访问</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map((entry, index) => (
                        <tr key={index} className="border-t">
                            <td className="py-3 px-5">{entry.keywords}</td>
                            <td className="py-3 px-5">
                                {entry.label === 'hot' ? '🔥' : entry.label === 'commercial' ? '💲' : null}
                            </td>
                            <td className="py-3 px-5">
                                <a href={constructEncodedURL(entry.keywords)} className="flex items-center">
                                    {entry.label && <img src={entry.label_icon} alt="label icon" className="h-6 w-6 mr-2" />}
                                    &#x1F517;
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HotwordTable;
