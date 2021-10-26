import React from "react";
import Button from "../elements/button";
import formatNumbering from "../utils/formatNumbering";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <div className="container" key={`category-${index1}`}>
        <h4 className="mb-3 font-weight-medium">{category.name}</h4>
        <div className="background-grid p-3">
          <div className="container-grid sm">
            {category.items.length === 0 ? (
              <div className="row">
                <div className="col-auto align-items-center">
                  There is no property at this category
                </div>
              </div>
            ) : (
              category.items.map((item, index2) => {
                return (
                  <div
                    className="item column-2 row-1"
                    key={`category-${index1}-item-${index2}`}
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
              })
            )}
          </div>
        </div>
      </div>
    );
  });
}
