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
        src="https://sdk.51.la/js-sdk-pro.min.js?id=Jyy5zZaJbvwWNpwh&ck=Jyy5zZaJbvwWNpwh"
        strategy="afterInteractive"
        charset="UTF-8"
      />

      <main>
        <HotwordTable />
      </main>
    </div>
  );
}