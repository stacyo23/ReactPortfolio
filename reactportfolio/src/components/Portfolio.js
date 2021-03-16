import React from "react";

import bk2 from "../assets/bk2.jpg";
import EDB from "../assets/EDB.jpg";
import FB from "../assets/FB.jpg";
import GitFit from "../assets/GitFit.jpeg";
import PassGen from "../assets/PassGen.jpg";
import Scheduler from "../assets/Scheduler.jpeg";
import BA from "../assets/BA.jpg"



const Portfolio = () => {
  return (
    <div className="container">
      <div className="row h-100 align-items-center justify-content-center text-center">
        <div className="h2 px-3 mt-4 about">
          Portfolio
          <div
            id="carouselExampleIndicators"
            className="carousel slide align-self-center"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-50"
                  src={Scheduler}
                  alt="workday scheduler"
                ></img>
                <a href="https://github.com/stacyo23/WorkDayScheduler">
                    <button type="button">Deployed Application</button>
                </a>

                <a href="https://stacyo23.github.io/WorkDayScheduler/">
                    <button type="button">Github Repository</button>
                </a>

              </div>

              <div className="carousel-item">
              <img
                  className="d-block w-50"
                  src={PassGen}
                  alt="password generator"
                ></img>
                <a href="https://github.com/stacyo23/PasswordGenerator">
                    <button type="button">Deployed Application</button>
                </a>

                <a href="https://stacyo23.github.io/PasswordGenerator/	">
                    <button type="button">Github Repository</button>
                </a>
              </div>

              <div className="carousel-item">
              <img
                  className="d-block w-50"
                  src={GitFit}
                  alt="calorie counting app"
                ></img>
                <a href="https://github.com/LKglass-SMU/GitFit">
                    <button type="button">Deployed Application</button>
                </a>

                <a href="https://lkglass-smu.github.io/GitFit/">
                    <button type="button">Github Repository</button>
                </a>
              </div>

              <div className="carousel-item">
              <img
                  className="d-block w-50"
                  src={EDB}
                  alt="eat the burger"
                ></img>
                <a href=" https://mysterious-citadel-90085.herokuapp.com/">
                
                    <button type="button">Deployed Application</button>
                </a>

                <a href="https://github.com/stacyo23/Eat-Da-Burger">
                    <button type="button">Github Repository</button>
                </a>
              </div>

              <div className="carousel-item">
              <img
                  className="d-block w-50"
                  src={FB}
                  alt="FoodieBook"
                ></img>
                <a href="https://morning-peak-44853.herokuapp.com/">
                    <button type="button">Deployed Application</button>
                </a>

                <a href="https://github.com/stacyo23/Foodie-Book">
                    <button type="button">Github Repository</button>
                </a>
              </div>

              <div className="carousel-item">
              <img
                  className="d-block w-50"
                  src={BA}
                  alt="Budget Anywhere"
                ></img>
                <a href="https://rocky-ridge-69487.herokuapp.com/">
                    <button type="button">Deployed Application</button>
                </a>

                <a href="https://github.com/stacyo23/BudgetAnywhere">
                    <button type="button">Github Repository</button>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
