import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Antique Phones E-commerce</title>
        <meta name="description" content="Your one-stop shop for vintage mobile phones" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">Welcome to Antique Phones!</h1>
        <p className="text-xl text-center">Discover the charm of vintage mobile devices.</p>

        {/* Example section - will be populated with products */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">Featured Product</h2>
            <p className="text-gray-700">Nokia 3310 - The legendary indestructible phone.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Details</button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">Coming Soon</h2>
            <p className="text-gray-700">Motorola Razr V3 - Iconic flip phone style.</p>
            <button className="mt-4 px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed">Notify Me</button>
          </div>
        </section>
      </main>
    </>
  );
}
