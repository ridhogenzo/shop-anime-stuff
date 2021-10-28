import React, { Component } from "react";
import Navbar from "../component/Navbar";
import FeaturedImage from "../component/detailItem/FeaturedImage";
import RelatedItem from "../component/detailItem/RelatedItem";
import Footer from "../component/Footer";
import itemDetails from "../json/itemDetails.json";

export class DetailsItem extends Component {
  render() {
    return (
      <>
        <Navbar />
        <FeaturedImage data={itemDetails.imageUrls}></FeaturedImage>
        <RelatedItem data={itemDetails}></RelatedItem>
        <div className="container p-4"></div>
        <Footer />
      </>
    );
  }
}

export default DetailsItem;
