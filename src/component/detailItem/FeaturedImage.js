import React from "react";
import FeaturedDetails from "./FeaturedDetails";
import ItemDetails from "../../json/itemDetails.json";
export default function FeaturedImage({ data }) {
  return (
    <section className="pt-5">
      <div className="row">
        <div
          className="container background-grid"
          style={{ paddingBottom: 50 }}
        >
          <div className="container-grid sm pt-4">
            {data.map((item, index) => {
              return (
                <div
                  className={`item ${index === 0 ? "column-6" : ""}`}
                  key={`Detailitem-${index}`}
                >
                  <div className="card card-featured">
                    <figure className="img-wrapper">
                      <img
                        src={item.url}
                        alt={item._id}
                        className="img-cover"
                      />
                    </figure>
                  </div>
                </div>
              );
            })}
            <div className="item column-6">
              <FeaturedDetails itemDetails={ItemDetails}></FeaturedDetails>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
