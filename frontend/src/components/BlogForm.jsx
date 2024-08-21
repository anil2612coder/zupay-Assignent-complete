import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BlogForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    discription: "",
    author: "",
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`https://zupay-assignent-complete.onrender.com/posts/${id}`)
        .then((response) => setFormData(response.data[0]))
        .catch((error) => console.error("Error fetching blog:", error));
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = id
      ? axios.put(`https://zupay-assignent-complete.onrender.com/posts/${id}`, formData)
      : axios.post("https://zupay-assignent-complete.onrender.com/posts", formData);

    request
      .then(() => navigate("/"))
      .catch((error) => console.error("Error saving blog:", error));
  };

  return (
    <div className="container mx-auto mt-12 p-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        {id ? "Edit Post" : "Create Post"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Title
          </label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the title of the post"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="discription"
            value={formData.discription}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the description of the post"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Author
          </label>
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the author's name"
            required
          />
        </div>
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200">
          {id ? "Update Post" : "Create Post"}
        </button>
      </form>
    </div>
  );
}

export default BlogForm;
