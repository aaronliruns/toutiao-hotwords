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

      {/* Add the external SDK script */}
      <Script
        id="LA_COLLECT"
        src="//sdk.51.la/js-sdk-pro.min.js"
        strategy="afterInteractive" // Load script after page is interactive
        charset="UTF-8"
      />

      {/* Add the LA.init call after the script loads */}
      <Script id="LA_INIT" strategy="afterInteractive">
        {`LA.init({id:"K4YG7rBE8sGqu3Gc",ck:"K4YG7rBE8sGqu3Gc",hashMode:true})`}
      </Script>

      <main>
        <HotwordTable />
      </main>
    </div>
  );
}