import React, { Link } from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
