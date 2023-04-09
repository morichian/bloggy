import React from "react";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
const CreateBlog = () => {
  return (
    <div className="create-row">
      <h1>Create a New Blog !</h1>
      <form>
        <input
          type="text"
          name="name"
          required
          id="name"
          placeholder="Full Name"
        />
        <input
          type="email"
          required
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
        />
        <label htmlFor="image">
          <FaCamera /> Upload Image
          <input type="file" name="image" id="image" className="imageInput" />
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
