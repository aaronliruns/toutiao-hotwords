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

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-xl font-bold mb-5">Hotword Search Results</h1>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="text-left py-3 px-5">Keyword</th>
                        <th className="text-left py-3 px-5">Label</th>
                        <th className="text-left py-3 px-5">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map((entry, index) => (
                        <tr key={index} className="border-t">
                            <td className="py-3 px-5">{entry.keywords}</td>
                            <td className="py-3 px-5">{entry.label}</td>
                            <td className="py-3 px-5">
                                <a href={entry.link} className="flex items-center">
                                    <img src={entry.label_icon} alt="label icon" className="h-6 w-6 mr-2" />
                                    Visit
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
