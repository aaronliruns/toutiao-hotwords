import Head from 'next/head';
import Script from 'next/script'; // Import the Script component
import HotwordTable from './HotwordTable'; // Ensure correct import path

export default function Home() {
  return (
    <div>
      <Head>
        <title>热词搜索</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HotwordTable />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <div className="flex items-center justify-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()}  Potato Yummy Inc. All rights reserved.
          </p>
        </div>
        <Script
        id="LA_COLLECT"
        src="//sdk.51.la/js-sdk-pro.min.js?id=K4YG7rBE8sGqu3Gc&ck=K4YG7rBE8sGqu3Gc" 
        charset='UTF-8'
        />
      </footer>
    </div>
  );
}