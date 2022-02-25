import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
      <>

    <nav className="navbar navbar-expand-lg navbar-dark bg-teal text-white">
      <a className="navbar-brand" href="#">
        {" "}
        Next.js Todo-List
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item ">
            <Link href="/AllUsers">
              <a className="nav-link"> All Users</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/AddNewUser">
              <a className="nav-link"> Add New User</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
 </>
  );
};

export default Navbar;
