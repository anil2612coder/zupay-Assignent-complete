import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function LandingPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      axios
        .delete(`http://localhost:5000/posts/${id}`)
        .then(() => {
          setBlogs(blogs.filter((blog) => blog._id !== id));
        })
        .catch((error) => console.error("Error deleting blog:", error));
    }
  };

  const truncateDescription = (description) => {
    return description.length > 70
      ? description.slice(0, 70) + "..."
      : description;
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        All Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="relative bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 text-gray-900 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <hr className="border-t-2 border-gray-200 mb-4" />
              <p
                className="text-gray-700 mb-6"
                style={{ height: "3rem", overflow: "hidden" }}
              >
                {truncateDescription(blog.discription)}
              </p>
              <div className="flex justify-between items-center">
                <Link
                  to={`/blog/${blog._id}`}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                >
                  Read More
                </Link>
                <div className="flex space-x-2">
                  <Link
                    to={`/edit/${blog._id}`}
                    className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
