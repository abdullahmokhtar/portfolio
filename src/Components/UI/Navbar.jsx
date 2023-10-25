import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav class="py-3 navbar navbar-expand-lg">
      <div class="container">
        <Link to="/" class="navbar-brand">
          <div className={styles["img-logo"]}>
            <img src={logo} className="w-100" alt="logo" />
          </div>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class={`nav-item ${styles.link} me-2`}>
              <Link to="/projects" class="nav-link">
                Projects
              </Link>
            </li>
            <li class={`nav-item ${styles.contact}`}>
              <Link to="/contacts" class="nav-link">
                Say Hello
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
