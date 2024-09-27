import Head from 'next/head';
import Script from 'next/script'; // Import the Script component
import HotwordTable from './HotwordTable.client'; // Ensure correct import path

export default function Home() {
  return (
    <div>
      <Head>
        <title>热词搜索</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        id="LA_COLLECT"
        src="//sdk.51.la/js-sdk-pro.min.js"
        strategy="afterInteractive"
        charset="UTF-8"
      />

      <Script
        src="/js/51la.js"
        strategy="afterInteractive"
        type="text/javascript"
      />

      <main>
        <HotwordTable />
      </main>
    </div>
  );
}