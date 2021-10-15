import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="container">
    <div className="jumbotron mt-5 ">
      <h1 className="display-4">Welcome to SA Blog!</h1>
      <p className="lead">
        We make all kinds of awesome blogs about various topics.
      </p>
      <hr className="my-4" />
      <p>Click the button below to check out our awesome blogs</p>
      <p className="lead">
        <Link className="btn btn-primary btn-lg" to="/blog" role="button">
          Check out our Blog
        </Link>
      </p>
    </div>
  </div>
);

export default Home;
