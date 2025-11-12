import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <Link href={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer" />
      </Link>
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-700 mb-2">${product.price ? product.price.toFixed(2) : 'N/A'}</p>
      <p className="text-gray-600 text-sm">{product.description ? product.description.substring(0, 100) : 'No description'}...</p>
      <Link href={`/product/${product._id}`}>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
