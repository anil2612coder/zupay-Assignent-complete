import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-white">
          Blog App
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-lg text-white hover:text-gray-200">
            All Blogs
          </Link>
          <Link to="/create" className="text-lg text-white hover:text-gray-200">
            Create Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
