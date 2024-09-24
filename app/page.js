import Head from 'next/head';
import HotwordTable from './HotwordTable.client' // Ensure correct import path

export default function Home() {
  return (
    <div>
    <Head>
      <title>Hotword Search App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <HotwordTable />
    </main>
  </div>
  );
}
