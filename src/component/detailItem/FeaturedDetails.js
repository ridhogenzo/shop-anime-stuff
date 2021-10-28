import React from "react";
import formatNumbering from "../../utils/formatNumbering";
import Button from "../../elements/button";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import HtmlParser from "react-html-parser";

export default function FeaturedDetails({ data }) {
  return (
    <div className="container">
      <div className="title">
        <span className="labels detail-label">{data.label}</span>
        <div className="font-weight-medium mt-2 h3">{data.name}</div>
        <div className="text-black font-weight-light h6">
          By {data.distributor}
        </div>
      </div>
      <div className="row">
        <div className="col-auto">
          <div className="product-prices mt-3">
            <div className="text-orange h4">
              IDR {formatNumbering(data.fullPrice)}
            </div>
          </div>
        </div>
        <div className="col-auto mt-3 p-1 text-orange h6 font-weight-light align-items-center">
          <span className="friendly-points">
            Earn {data.friendlyPoint} Friendly Points!{" "}
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-auto">
          <div className="mt-3 down-payment">
            <span className="down-payments">Minimum DP</span>
            <br />
            IDR {formatNumbering(data.downPayment)}
          </div>
        </div>
        <div className="col-auto mt-3 down-payment payments">
          Full Payment Discount
          <br />
          IDR {formatNumbering(data.dpDiscount)}
        </div>
      </div>
      <div className="mt-3 quantity">
        Qty :{" "}
        <input
          type="number"
          name="qty"
          className="text-center input-number"
          min="1"
          max="5"
          placeholder="0"
        />
      </div>
      <div className="mt-3 release-date text-gray-700">
        Releases <span> {data.releaseDate}</span>
        <br />
        Estimated Arrival <span> {data.estimatedArrival} </span>
      </div>
      <div className="mt-3 wish-list">
        <Button className="wish-list-btn p-6">
          <AiOutlineHeart size="2rem" /> {data.wishlist}
        </Button>
        <Button className="ml-5 cart">
          <BsCart4 size="2rem" color="" /> Add to cart
        </Button>
      </div>
      <div className="detail-description mt-3">
        <div className="mt-2 item-description">
          {HtmlParser(data.description)}
        </div>
        <li>
          <div className="description-type">Character Name </div>
          <Button type="link" className="btn-item" href="/name">
            <span className="label anime-detail ">{data.name}</span>
          </Button>
        </li>
        <li>
          <div className="description-type">Anime Name </div>{" "}
          <Button type="link" className="btn-item" href="/series">
            <span className="label anime-detail">{data.anime}</span>
          </Button>
        </li>
      </div>
    </div>
  );
}
