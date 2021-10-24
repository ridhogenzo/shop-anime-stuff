import { React, useState } from "react";
import Miku from "../assets/images/miku.jpg";
import Nino from "../assets/images/nino.jpg";
import Ichika from "../assets/images/ichika.jpg";
import Yotsuba from "../assets/images/yotsuba.jpg";
import Button from "../elements/button";

export default function Hero() {
  return (
    <div className="container-fluid bg-hero">
      <div className="row align-items-center">
        <div className="col-6 pl-5">
          <h1 className="font-weight-bold line-height-1 text-blue mb-3">
            We can make ur waifu alive here
          </h1>
          <p className="mb-4 font-weight-light w-75">
            Search ur action figure, figma, nesoberi, and anime stuff here
          </p>
          <Button isPrimary className="btn px-5" hasShadow>
            Continue your journey
          </Button>
        </div>
        <div className="col-6 pl-5">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active" data-interval="5000">
                <img className="img-cover w-50" src={Miku} alt="First slide" />
              </div>
              <div className="carousel-item" data-interval="4000">
                <img className="img-cover w-50" src={Nino} alt="Second slide" />
              </div>
              <div className="carousel-item" data-interval="3000">
                <img
                  className="img-cover w-50"
                  src={Ichika}
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
