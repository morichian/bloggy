import React from "react";
import Sliders from "./Sliders";
import { Link } from "react-router-dom";
const Home = ({ blogs }) => {
  return (
    <div>
      <Sliders blogs={blogs} />
      <section className="discoverHolder">
        <Link className="discoverAll" to="/blogs">
          Discover All
        </Link>
      </section>
    </div>
  );
};

export default Home;
