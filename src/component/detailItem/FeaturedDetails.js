import React, { Component } from "react";
import propTypes from "prop-types";
import formatNumbering from "../../utils/formatNumbering";
import Button from "../../elements/button";
import InputNumber from "../../elements/form/inputNumber";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import HtmlParser from "react-html-parser";

export default class FeaturedDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }
  render() {
    const { data } = this.state;
    const { itemDetails, startBooking } = this.props;
    return (
      <div className="container">
        <div className="title">
          <span className="labels detail-label">{itemDetails.label}</span>
          <div className="font-weight-medium mt-2 h3">{itemDetails.name}</div>
          <div className="text-black font-weight-light h6">
            By {itemDetails.distributor}
          </div>
        </div>
        <div className="row">
          <div className="col-auto">
            <div className="product-prices mt-3">
              <div className="text-orange h4">
                IDR {formatNumbering(itemDetails.fullPrice)}
              </div>
            </div>
          </div>
          <div className="col-auto mt-3 p-1 text-orange h6 font-weight-light align-items-center">
            <span className="friendly-points">
              Earn {itemDetails.friendlyPoint} Friendly Points!{" "}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-auto">
            <div className="mt-3 down-payment">
              <span className="down-payments">Minimum DP</span>
              <br />
              IDR {formatNumbering(itemDetails.downPayment)}
            </div>
          </div>
          <div className="col-auto mt-3 down-payment payments">
            Full Payment Discount
            <br />
            IDR {formatNumbering(itemDetails.dpDiscount)}
          </div>
        </div>
        <div className="mt-3 quantity">
          <label htmlFor="duration">
            Qty :
            <InputNumber
              max={5}
              suffix=" "
              onChange={this.updateData}
              name="duration"
              value={data.duration}
            />
          </label>
        </div>
        <div className="mt-3 release-date text-gray-700">
          Releases <span> {itemDetails.releaseDate}</span>
          <br />
          Estimated Arrival <span> {itemDetails.estimatedArrival} </span>
        </div>
        <div className="mt-3 wish-list">
          <Button className="wish-list-btn p-6">
            <AiOutlineHeart size="2rem" /> {itemDetails.wishlist}
          </Button>
          <Button className="ml-5 cart">
            <BsCart4 size="2rem" color="" /> Add to cart
          </Button>
        </div>
        <div className="detail-description mt-3">
          <div className="mt-2 item-description">
            {HtmlParser(itemDetails.description)}
          </div>
          <li>
            <div className="description-type">Character Name </div>
            <Button type="link" className="btn-item" href="/name">
              <span className="label anime-detail ">{itemDetails.name}</span>
            </Button>
          </li>
          <li>
            <div className="description-type">Anime Name </div>{" "}
            <Button type="link" className="btn-item" href="/series">
              <span className="label anime-detail">{itemDetails.anime}</span>
            </Button>
          </li>
        </div>
      </div>
    );
  }
}

FeaturedDetails.propTypes = {
  itemDetails: propTypes.object,
};
