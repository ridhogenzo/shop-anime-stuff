import { React, useState } from "react";
import formatNumbering from "../utils/formatNumbering";
import Button from "../elements/button";

export default function BestSeller(props) {
  return (
    <div className="container best-seller">
      <div className="font-weight-bold h3">Best Seller</div>
      <div className="background-grid p-3">
        <div className="container-grid sm">
          {props.data.map((item, index) => {
            return (
              <div
                key={`bestseller-${index}`}
                className={`item column-2${index === 0 ? " row-1" : ""}
              }`}
              >
                <div className="card card-featured">
                  <figure className="img-wrapper">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                </div>
                <div className="meta-wrapper">
                  <div className="label">{item.label}</div>
                  <Button
                    type="link"
                    href={`/properties/${item._id}`}
                    className="streched-link d-block"
                  >
                    <h5 className="font-weight-medium text-truncate">
                      {item.name}
                    </h5>
                  </Button>
                  <span className="font-weight-light text-gray-500">
                    {item.releaseDate}
                  </span>
                  <h5 className="text-orange">
                    IDR {formatNumbering(item.price)}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
