import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import axios from "axios";
const CreateBlog = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const createBlogHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("image", image);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/bloggy/create",
        formData,
        {
          headers: { "Content-Type": "multipart/formdata" },
        }
      );
      console.log(response);
      console.log(image);
      console.log("Data has been Created !");
      setName("");
      setEmail("");
      setPassword("");
      setImage("");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="create-row">
      <h1>Create a New Blog !</h1>
      <form onSubmit={createBlogHandler}>
        <input
          type="text"
          name="name"
          required
          id="name"
          value={name}
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          required
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="image">
          <FaCamera />{" "}
          {image ? <span>{image.name}</span> : <span> Upload Image</span>}
          <input
            type="file"
            name="image"
            id="image"
            className="imageInput"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>

        <div className="btns">
          <button type="submit">Create</button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
