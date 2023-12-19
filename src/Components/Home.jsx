import React from "react";
import avatar from "../assets/images/mf-avatar.svg";
import devices from "../assets/images/hero-devices.svg";
import styles from "./Home.module.css";
import resume from "../assets/pdf/Abdullah Mokhtar.pdf";
import Projects from "./Projects";
import Skills from "./Skills";

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
          <div className="w-md-75 py-sm-5 m-auto">
            <h2 className="fw-bolder fs-md-5">
              Hi, I’m Abdullah Mokhtar. Nice to meet you.
            </h2>
            <p className="py-md-1 py-sm-0 px-0 fs-md-5">
              Enthusiastic full stack developer with a solid understanding of
              both front-end and back-end development. Proficient in HTML, CSS,
              JavaScript, and experienced in frameworks such as React and
              Node.js and .net . Skilled in building responsive and intuitive
              user interfaces, as well as developing robust server-side
              applications. Passionate about creating engaging and user-friendly
              web experiences.
            </p>
          </div>
        </div>
      </section>
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
