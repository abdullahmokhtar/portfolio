import React from "react";
import logo from "../../assets/images/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav class="py-3 navbar navbar-expand-lg">
      <div class="container">
        <div class="navbar-brand">
          <div className={styles["img-logo"]}>
            <img src={logo} className="w-100" alt="logo" />
          </div>
        </div>
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
          <ul class="navbar-nav ms-auto flex-row mb-2 mb-lg-0">
            <li class={`nav-item ${styles.link}  ms-md-auto  my-2`}>
              <a
                href="mailto:abdullahmokhtr55@gmail.com"
                class="nav-link"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-envelope"></i>
              </a>
            </li>
            <li class={`nav-item ${styles.link}  my-2`}>
              <a
                href="https://github.com/abdullahmokhtar"
                class="nav-link"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li class={`nav-item ${styles.link}  my-2 `}>
              <a href="tel:+201094327123" class="nav-link">
                <i class="fa-solid fa-phone"></i>
              </a>
            </li>
            <li class={`nav-item ${styles.link}   my-2`}>
              <a
                href="https://www.linkedin.com/in/abdullah-mokhtar-370b421b3"
                class="nav-link"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li class={`nav-item ${styles.link}  me-sm-auto  my-2`}>
              <a
                href="https://www.hackerrank.com/profile/abdullahmokhtr55"
                class="nav-link"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-hackerrank"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
