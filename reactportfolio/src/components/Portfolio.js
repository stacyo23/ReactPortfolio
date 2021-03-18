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
    <section id="work" className="portfolio-mf sect-pt4 route">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="title-box text-center">
            <h2 className="title-a text-info">Portfolio</h2>
            <div className="line-mf"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="work-box">
            <a href={FB} data-lightbox="gallery-vmarine">
              <div className="work-img">
                <img src={FB} alt="FoodieBook" className="img-fluid" />
              </div>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">FoodieBook</h2>
                    <button href=" ">Deployed Application</button> <button href=" ">Github Repository</button>

                    <div className="w-more">
                      <span className="w-ctegory">
                        Node Express Handlebars MySQL   
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href={EDB}
              data-lightbox="gallery-vmarine"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={EDB}
              data-lightbox="gallery-vmarine"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={GitFit}
              data-lightbox="gallery-vmarine"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={Scheduler}
              data-lightbox="gallery-vmarine"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={PassGen}
              data-lightbox="gallery-vmarine"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="work-box">
            <a href={FB} data-lightbox="gallery-aguadeluz">
              <div className="work-img">
                <img src={FB} alt="" className="img-fluid" />
              </div>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Lorem Ipsum</h2>
                    <div className="w-more">
                      <span className="w-ctegory">
                        HTML5 CSS3 Bootstrap Webpack SmoothScrolling
                        VanillaJS
                      </span>{" "}
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href={EDB}
              data-lightbox="gallery-aguadeluz"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={EDB}
              data-lightbox="gallery-aguadeluz"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={EDB}
              data-lightbox="gallery-aguadeluz"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={GitFit}
              data-lightbox="gallery-aguadeluz"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={PassGen}
              data-lightbox="gallery-aguadeluz"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="work-box">
            <a href={FB} data-lightbox="gallery-todo">
              <div className="work-img">
                <img src={FB} alt="" className="img-fluid" />
              </div>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Lorem Ipsum</h2>
                    <div className="w-more">
                      <span className="w-ctegory">
                        HTML5 CSS3 Bootstrap Webpack ReactJS
                      </span>
                      {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href={EDB}
              data-lightbox="gallery-todo"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={GitFit}
              data-lightbox="gallery-todo"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={Scheduler}
              data-lightbox="gallery-todo"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={PassGen}
              data-lightbox="gallery-todo"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={BA}
              data-lightbox="gallery-todo"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="work-box">
            <a href={FB} data-lightbox="gallery-medlingos">
              <div className="work-img">
                <img src={FB} alt="" className="img-fluid" />
              </div>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Lorem Ipsum</h2>
                    <div className="w-more">
                      <span className="w-ctegory">
                        Bootstrap ReactJS GoogleAPI
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href={EDB}
              data-lightbox="gallery-medlingos"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={GitFit}
              data-lightbox="gallery-medlingos"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={Scheduler}
              data-lightbox="gallery-medlingos"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={PassGen}
              data-lightbox="gallery-medlingos"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={BA}
              data-lightbox="gallery-medlingos"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="work-box">
            <a href={FB} data-lightbox="gallery-smth">
              <div className="work-img">
                <img src={FB} alt="" className="img-fluid" />
              </div>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Lorem Ipsum</h2>
                    <div className="w-more">
                      <span className="w-ctegory">MERN</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href={EDB}
              data-lightbox="gallery-smth"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={GitFit}
              data-lightbox="gallery-smth"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={Scheduler}
              data-lightbox="gallery-smth"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={PassGen}
              data-lightbox="gallery-smth"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={BA}
              data-lightbox="gallery-smth"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="work-box">
            <a href={FB} data-lightbox="gallery-mf">
              <div className="work-img">
                <img src={FB} alt="" className="img-fluid" />
              </div>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Lorem Ipsum</h2>
                    <div className="w-more">
                      <span className="w-ctegory">
                        HTML5 CSS3 Bootstrap MERN
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href={EDB}
              data-lightbox="gallery-mf"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={GitFit}
              data-lightbox="gallery-mf"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={Scheduler}
              data-lightbox="gallery-mf"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={PassGen}
              data-lightbox="gallery-mf"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
            <a
              href={BA}
              data-lightbox="gallery-mf"
              style={{ display: "none" }}
            >
              jsx-a11y/anchor-has-content warning
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}

 


export default Portfolio;
