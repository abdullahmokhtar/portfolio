import React from "react";
import eCommerce from "../assets/images/E-commerce.png";
import Arma from "../assets/images/Arma.png";
import FoodApp from "../assets/images/Food-App.png";
import Yummy from "../assets/images/Yummy.png";
import weather from "../assets/images/Weather.png";
import Fokir from "../assets/images/morgan.png";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="p-5">
      <div className="container text-center">
        <h2 className="fw-bolder mb-5">My Projects</h2>
        <div className="row gy-2">
          <div className="col-md-6 col-lg-4">
            <Project
              imgSrc={eCommerce}
              link="https://main--creative-zabaione-ea1348.netlify.app"
              title="E-Commerce Online Shoping"
              tools=" HTML & CSS & ReactJs & AXIOS & Bootstrap"
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <Project
              imgSrc={Arma}
              link="https://gilded-licorice-c760dc.netlify.app"
              title="Online Job Application"
              tools="HTML & CSS & ReactJs & Firebase & Bootstrap"
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <Project
              imgSrc={FoodApp}
              link="https://abdullahmokhtar.github.io/Food-App"
              title="Food App"
              tools="HTML & CSS & ReactJs & Firebase"
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <Project
              imgSrc={Yummy}
              link="https://abdullahmokhtar.github.io/jQuery-site"
              title="Food Ingredinents"
              tools="HTML & CSS & Bootstrap & JS & API & jQuery"
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <Project
              imgSrc={weather}
              link="https://abdullahmokhtar.github.io/assignments/assignment-11"
              title="Weather App"
              tools="HTML & CSS & Bootstrap & JS & API"
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <Project
              imgSrc={Fokir}
              link="https://abdullahmokhtar.github.io/bootstrap-site"
              title="Protfolio"
              tools="HTML & CSS & Bootstrap & FontAwosome"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
