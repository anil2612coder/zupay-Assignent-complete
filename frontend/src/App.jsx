import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SingleBlogPage from "./pages/SingleBlogPage";
import BlogForm from "./components/BlogForm";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
        <Route path="/create" element={<BlogForm />} />
        <Route path="/edit/:id" element={<BlogForm />} />
      </Routes>
    </Router>
  );
}

export default App;
