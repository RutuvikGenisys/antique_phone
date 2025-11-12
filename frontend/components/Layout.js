import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      {/* A simple footer could go here */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-8">
        <p>&copy; 2023 Antique Phones. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
