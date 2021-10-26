import React from "react";
import Keychain from "../assets/images/keychain.png";
import Figma from "../assets/images/figma.png";
import ActionFigure from "../assets/images/actionfigure.png";
import Nesoberi from "../assets/images/nesoberi.png";

export default function SortBy() {
  return (
    <div className="container p-0">
      <div className="col-auto align-items-center">
        <div className="font-weight-bold">Categories</div>
        <div className="container-grid">
          <div className="item column-3 border-categories">
            <a href="#">
              <img
                className="card-img img-contain"
                src={Keychain}
                alt="Card image cap"
                style={{ width: "80px", height: "80px" }}
              />
              <span className="caption-image">Keychain</span>
            </a>
          </div>
          <div className="item column-3 border-categories">
            <a href="#">
              <img
                className="card-img img-contain"
                src={Nesoberi}
                alt="Card image cap"
                style={{ width: "80px", height: "80px" }}
              />
              <span className="caption-image">Nesoberi</span>
            </a>
          </div>
          <div className="item column-3 border-categories">
            <a href="#">
              <img
                className="card-img img-contain"
                src={Figma}
                alt="Card image cap"
                style={{ width: "80px", height: "80px" }}
              />
              <span className="caption-image">Figma</span>
            </a>
          </div>
          <div className="item column-3 border-categories">
            <a href="#">
              <img
                className="card-img img-contain disabled"
                src={ActionFigure}
                alt="Card image cap"
                style={{ width: "80px", height: "80px" }}
              />
              <span className="caption-image">Action Figure</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
