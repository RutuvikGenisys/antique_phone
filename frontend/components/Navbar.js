import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-2xl font-bold cursor-pointer">Antique Phones</p>
        </Link>
        <div>
          <Link href="/">
            <p className="mx-2 hover:text-gray-300 cursor-pointer">Home</p>
          </Link>
          <Link href="/products">
            <p className="mx-2 hover:text-gray-300 cursor-pointer">Products</p>
          </Link>
          <Link href="/cart">
            <p className="mx-2 hover:text-gray-300 cursor-pointer">Cart</p>
          </Link>
          <Link href="/login">
            <p className="mx-2 hover:text-gray-300 cursor-pointer">Login</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
