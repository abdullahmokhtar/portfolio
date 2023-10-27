import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section>
      <div className="container text-center py-5">
        <h2 className="fw-bolder mb-5">My Skills</h2>
        <div className="row my-5">
          <div className="col-md-6">
            <div className="text-start">
              <h3>Tech Skills</h3>
              <ul className="list-unstyled ps-3">
                <li>
                  <div className={styles["percent-container"]}>
                    <div className={styles.percent}>
                      <span className="ms-2">HTML</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles["percent-container"]}>
                    <div className={styles.percent} style={{ width: "80%" }}>
                      <span className="ms-2">CSS</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles["percent-container"]}>
                    <div className={styles.percent} style={{ width: "75%" }}>
                      <span className="ms-2">Bootstrap</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles["percent-container"]}>
                    <div className={styles.percent} style={{ width: "93%" }}>
                      <span className="ms-2">JavaScript</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles["percent-container"]}>
                    <div className={styles.percent} style={{ width: "95%" }}>
                      <span className="ms-2">ReactJs</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles["percent-container"]}>
                    <div className={styles.percent} style={{ width: "60%" }}>
                      <span className="ms-2">NodeJs</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles["percent-container"]}>
                    <div className={styles.percent} style={{ width: "70%" }}>
                      <span className="ms-2">Git & Github</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-start">
              <h3>Soft Skills</h3>
              <ul className="list-unstyled ps-3">
                <li>
                  <div className={styles["percent-container"]}>
                    <div className={styles.percent} style={{ width: "89%" }}>
                      <span className="ms-2">English</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles["percent-container"]}>
                    <div className={styles.percent} style={{ width: "75%" }}>
                      <span className="ms-2">Communication</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles["percent-container"]}>
                    <div className={styles.percent} style={{ width: "90%" }}>
                      <span className="ms-2">problem solving</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles["percent-container"]}>
                    <div className={styles.percent} style={{ width: "72%" }}>
                      <span className="ms-2">Creativity</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles["percent-container"]}>
                    <div className={styles.percent} style={{ width: "50%" }}>
                      <span className="ms-2">Time management</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles["percent-container"]}>
                    <div className={styles.percent} style={{ width: "85%" }}>
                      <span className="ms-2">Teamwork</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
