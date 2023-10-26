import React from "react";
import avatar from "./mf-avatar.svg";
import devices from "./hero-devices.svg";
import styles from "./Home.module.css";
import resume from "./Abdullah Mokhtar.pdf";
import Projects from "../Components/Projects";

const Home = () => {
  return (
    <>
      <section className="container">
        <div className="pt-2 text-center">
          <h1 className={styles["main-heading"]}>Fullstack Web Developer</h1>
          <p className={`${styles.description} my-3`}>
            I Code beautifully simple things, and I love what I do.
          </p>
          <img className="my-5" src={avatar} alt="avatar" />
          <div className={styles.button}>
            <a
              href={resume}
              download="Abdullah Mokhtar"
              rel="noreferrer"
              target="_blank"
            >
              Download Resume
            </a>
          </div>
          <div className="mt-5">
            <img src={devices} className="w-50" alt="devices" />
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <div className="container">
          <div className="w-75 m-auto">
            <h2 className="fw-bolder">
              Hi, I’m Abdullah Mokhtar. Nice to meet you.
            </h2>
            <p className="py-1 px-5 fs-5">
              Enthusiastic full stack developer and recent graduate with a solid
              understanding of both front-end and back-end development.
              Proficient in HTML, CSS, JavaScript, and experienced in frameworks
              such as React and Node.js. Skilled in building responsive and
              intuitive user interfaces, as well as developing robust
              server-side applications. Passionate about creating engaging and
              user-friendly web experiences. Actively seeking opportunities to
              contribute to a dynamic team.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container text-center py-5">
          <h2>Skills</h2>
          <div className="row my-5">
            <div className="col-md-6">
              <div className="text-start">
                <h3>Tech Skills</h3>
                <ul className="list-unstyled ps-3">
                  <li>
                    <span className="me-3">HTML</span>
                    <div className={styles["percent-container"]}>
                      <div className={styles.percent}></div>
                    </div>
                  </li>
                  <li>
                    <span className="me-3">CSS</span>
                    <div className={styles["percent-container"]}>
                      <div
                        className={styles.percent}
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span className="me-3">Bootstrap</span>
                    <div className={styles["percent-container"]}>
                      <div
                        className={styles.percent}
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span className="me-3">JavaScript</span>
                    <div className={styles["percent-container"]}>
                      <div
                        className={styles.percent}
                        style={{ width: "93%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span className="me-3">ReactJs</span>
                    <div className={styles["percent-container"]}>
                      <div
                        className={styles.percent}
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span className="me-3">NodeJs</span>
                    <div className={styles["percent-container"]}>
                      <div
                        className={styles.percent}
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span className="me-3">Git & Github</span>
                    <div className={styles["percent-container"]}>
                      <div
                        className={styles.percent}
                        style={{ width: "70%" }}
                      ></div>
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
                    <span className="me-3">English</span>
                    <div className={styles["percent-container"]}>
                      <div
                        className={styles.percent}
                        style={{ width: "89%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span className="me-3">Communication</span>
                    <div className={styles["percent-container"]}>
                      <div
                        className={styles.percent}
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span className="me-3">problem solving</span>
                    <div className={styles["percent-container"]}>
                      <div
                        className={styles.percent}
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span className="me-3">Creativity</span>
                    <div className={styles["percent-container"]}>
                      <div
                        className={styles.percent}
                        style={{ width: "72%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span className="me-3">Time management</span>
                    <div className={styles["percent-container"]}>
                      <div
                        className={styles.percent}
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </li>
                  <li>
                    <span className="me-3">Teamwork</span>
                    <div className={styles["percent-container"]}>
                      <div
                        className={styles.percent}
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Projects />    
    </>
  );
};

export default Home;
