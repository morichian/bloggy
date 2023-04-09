import { useState, useEffect } from "react";
import Header from "./components/Header";
import BloggyRoutes from "./routes";
import axios from "axios";
import "./styles/style.css";
const App = () => {
  const [blogs, setBlogs] = useState([]);
  const getData = async () => {
    const response = await axios.get("http://localhost:5000/api/bloggy");
    const data = await response.data;
    setBlogs(data.response);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="container">
      <Header />
      <BloggyRoutes blogs={blogs} />
    </main>
  );
};

export default App;
