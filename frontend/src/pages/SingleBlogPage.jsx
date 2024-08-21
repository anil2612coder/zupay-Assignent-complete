import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleBlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/posts/${id}`)
      .then((response) => setBlog(response.data[0]))
      .catch((error) => console.error("Error fetching blog:", error));
  }, [id]);

  if (!blog) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="container mx-auto mt-12 p-8 bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 text-gray-900 rounded-lg border border-gray-300">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 border-b-2 border-gray-300 pb-2">
        {blog.title}
      </h1>
      <p className="text-gray-700 mb-4 leading-relaxed">{blog.discription}</p>
      <p className="text-gray-600 text-right mt-4">
        By: <span className="font-medium">{blog.author}</span>
      </p>
    </div>
  );
}

export default SingleBlogPage;
