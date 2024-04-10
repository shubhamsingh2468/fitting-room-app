import Head from 'next/head';
import Link from 'next/link'



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <Head>
        <title>Virtual Fitting Room</title>
      </Head>

      <h1 className="text-4xl font-bold mb-8">Get the perfect fit, from anywhere</h1>
      <p className="text-lg mb-4">Try on clothes virtually with our innovative app.</p>
      <Link className='px-4 py-2 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-700' href="/Capture">Start Scanning</Link>  
    </div>
  );
}
