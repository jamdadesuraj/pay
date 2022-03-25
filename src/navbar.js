import React, { useState } from "react";

const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              Pay
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setshow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/aboutus">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contact">
                    Contact Us
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn-outline-primary btn-style" type="submit">
                  Sign in
                </button>
                <button
                  className=" btn-outline-primary btn-style"
                  type="submit"
                >
                  log out
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};
export default Navbar;
