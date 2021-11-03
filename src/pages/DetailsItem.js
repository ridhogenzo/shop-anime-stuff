import React, { Component } from "react";
import Navbar from "../component/Navbar";
import FeaturedImage from "../component/detailItem/FeaturedImage";
import RelatedItem from "../component/detailItem/RelatedItem";
import Footer from "../component/Footer";
import ItemDetails from "../json/itemDetails.json";

export class DetailsItem extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Navbar />
        <FeaturedImage data={ItemDetails.imageUrl}></FeaturedImage>
        <RelatedItem data={ItemDetails}></RelatedItem>
        <div className="container p-4"></div>
        <Footer />
      </>
    );
  }
}

export default DetailsItem;
