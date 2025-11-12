import Head from 'next/head';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage({ products }) {
  return (
    <>
      <Head>
        <title>Our Products - Antique Phones</title>
        <meta name="description" content="Browse our collection of vintage mobile phones" />
      </Head>
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">Our Antique Phones Collection</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-lg">No products found.</p>
          )}
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    // Assuming your backend is running on http://localhost:5000
    const res = await fetch('http://localhost:5000/api/products');
    const products = await res.json();

    if (!res.ok) {
      // Handle cases where the backend returns an error status
      console.error(`Backend error: ${products.message || res.statusText}`);
      return { props: { products: [] } };
    }

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return {
      props: {
        products: [],
      },
    };
  }
}
