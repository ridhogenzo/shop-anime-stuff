import React, { Component } from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import BestSeller from "../component/BestSeller";
import SortBy from "../component/SortBy";
import Categories from "../component/Categories";
import Footer from "../component/Footer";
import landingPage from "../json/landingPage.json";

export class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refBestSeller = React.createRef();
  }

  render() {
    return (
      <>
        <Navbar />
        <Hero refBestSeller={this.refBestSeller} />
        <BestSeller
          data={landingPage.bestSeller}
          refBestSeller={this.refBestSeller}
        />
        <SortBy />
        <Categories data={landingPage.category} />
        <Footer />
      </>
    );
  }
}

export default LandingPage;
