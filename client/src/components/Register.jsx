import React from "react";

const Register = () => {
  return (
    <section className="registerPage">
      <h1>Register</h1>
      <form>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button>Register</button>
      </form>
    </section>
  );
};

export default Register;
