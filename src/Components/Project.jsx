import React from "react";
import styles from "./Project.module.css";

const Project = ({ imgSrc, link, title, tools }) => {
  return (
    <div className="card overflow-hidden">
      <div className={`card-img ${styles.img}`}>
        <img src={imgSrc} className="w-100" height={300} alt="" />
        <a className={styles.link} target="_blank" rel="noreferrer" href={link}>
          Visit
        </a>
      </div>
      <div
        className="card-body main-bg text-white fs-4  fw-bold"
        style={{ height: "160px" }}
      >
        <p>{title}</p>
        <p className="fs-6">
          <i className="fas fa-tools"></i> {tools}
        </p>
      </div>
    </div>
  );
};

export default Project;
