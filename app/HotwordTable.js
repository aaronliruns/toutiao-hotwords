async function HotwordTable() {

    // Fetch data on the server
    const response = await fetch('http://localhost:3000/api/proxy', {
        cache: 'no-store' // Ensures the data is fetched fresh on every request
    });
    const entries = await response.json();

    const constructEncodedURL = (keyword) => {
        let encodedHotword = encodeURIComponent(keyword)
        return `https://wm.m.sm.cn/s?from=wm890501&q=${encodedHotword}`
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
                    </tr>
                </thead>
                <tbody>
                    {entries.map((entry, index) => (
                        <tr key={index} className="border-t">
                            <td className="py-3 px-5">
			    <a href={constructEncodedURL(entry.keyword)} className="flex items-center">
                            {entry.keyword}
                            </a>
			    </td>
                            <td className="py-3 px-5">
                                💲
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HotwordTable;
