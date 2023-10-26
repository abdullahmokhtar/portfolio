import React from "react";
import eCommerce from "../assets/images/E-commerce.png";
import Arma from "../assets/images/Arma.png";
import FoodApp from "../assets/images/Food-App.png";
import Yummy from "../assets/images/Yummy.png";
import weather from "../assets/images/Weather.png";
import Fokir from "../assets/images/morgan.png";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className="p-5">
      <div className="container text-center ">
        <h2 className="fw-bolder mb-5">My Projects</h2>
        <div className="row gy-2">
          <div className="col-md-4">
            <div className="card overflow-hidden">
              <div className={`card-img ${styles.img}`}>
                <img src={eCommerce} className="w-100" height={300} alt="" />
                <a
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                  href="https://main--creative-zabaione-ea1348.netlify.app/"
                >
                  Visit
                </a>
              </div>
              <div className="card-body main-bg text-white fs-4 fw-bold main-bg text-white fs-4 fw-bold">
                <p>E-Commerce Online Shoping</p>
                <p className="fs-6">
                  <i className="fas fa-tools"></i> HTML & CSS & ReactJs & AXIOS
                  & Bootstrap
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card overflow-hidden">
              <div className={`card-img ${styles.img}`}>
                <img src={Arma} className="w-100" height={300} alt="" />
                <a
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                  href="https://gilded-licorice-c760dc.netlify.app"
                >
                  Visit
                </a>
              </div>
              <div className="card-body main-bg text-white fs-4 fw-bold">
                <p>Online Job Application</p>
                <p className="fs-6">
                  <i className="fas fa-tools"></i> HTML & CSS & ReactJs &
                  Firebase & Bootstrap
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card overflow-hidden">
              <div className={`card-img ${styles.img}`}>
                <img src={FoodApp} className="w-100" height={300} alt="" />
                <a
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                  href="https://abdullahmokhtar.github.io/Food-App/"
                >
                  Visit
                </a>
              </div>
              <div className="card-body main-bg text-white fs-4 fw-bold">
                <p>Food App</p>
                <p className="fs-6">
                  <i className="fas fa-tools"></i> HTML & CSS & ReactJs &
                  Firebase
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card overflow-hidden">
              <div className={`card-img ${styles.img}`}>
                <img src={Yummy} className="w-100" height={300} alt="" />
                <a
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                  href="https://abdullahmokhtar.github.io/jQuery-site/"
                >
                  Visit
                </a>
              </div>
              <div className="card-body main-bg text-white fs-4 fw-bold">
                <p>Food Ingredinents </p>
                <p className="fs-6">
                  <i className="fas fa-tools"></i> HTML & CSS & Bootstrap & JS &
                  API & jQuery
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card overflow-hidden">
              <div className={`card-img ${styles.img}`}>
                <img src={weather} className="w-100" height={300} alt="" />
                <a
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                  href="https://abdullahmokhtar.github.io/assignments/assignment-11/"
                >
                  Visit
                </a>
              </div>
              <div className="card-body main-bg text-white fs-4 fw-bold">
                <p>Weather Appp</p>
                <p className="fs-6">
                  <i className="fas fa-tools"></i> HTML & CSS & Bootstrap & JS &
                  API
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card overflow-hidden">
              <div className={`card-img ${styles.img}`}>
                <img src={Fokir} className="w-100" height={300} alt="" />
                <a
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                  href="https://abdullahmokhtar.github.io/bootstrap-site/"
                >
                  Visit
                </a>
              </div>
              <div className="card-body main-bg text-white fs-4 fw-bold">
                <p>Protfolio</p>
                <p className="fs-6">
                  <i className="fas fa-tools"></i> HTML & CSS & Bootstrap &
                  FontAwosome
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
