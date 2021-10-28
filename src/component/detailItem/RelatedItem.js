import React from "react";
import Button from "../../elements/button";
import formatNumbering from "../../utils/formatNumbering";

export default function RelatedItem({ data }) {
  return (
    <div className="container">
      <div className="font-weight-bold h3">Related Item</div>
      <div className="background-grid p-3">
        <div className="container-grid sm">
          {data.relatedItem.map((related, index) => {
            return (
              <div
                key={`relateditem-${index}`}
                className={`item column-2${index > 0 ? " row-1" : " "}`}
              >
                <div className="card card-featured">
                  <figure className="img-wrapper">
                    <img
                      src={related.url}
                      alt={related.name}
                      className="img-cover"
                    />
                  </figure>
                </div>
                <div className="meta-wrapper">
                  <div className="label">{related.label}</div>
                  <Button
                    type="link"
                    href={`/properties/${related._id}`}
                    className="streched-link d-block"
                  >
                    <h5 className="font-weight-medium text-truncate">
                      {related.name}
                    </h5>
                  </Button>
                  <span className="font-weight-light text-gray-500">
                    {related.release}
                  </span>
                  <h5 className="text-orange">
                    IDR {formatNumbering(related.price)}
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
