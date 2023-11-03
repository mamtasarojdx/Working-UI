import React from "react";
import CustomHeader from "./CustomHeader";
import CustomSlider from "./CustomSlider";
import HeaderPage from "./HeaderPage";
import MackbookAir from "./MackbookAir";
import FeaturedCollection from "./FeaturedCollection";
import SpecialProducts from "./SpecialProducts";
import LatestArticles from "./LatestArticles";
import NewsLetter from "./NewsLetter";
import FooterPage from "./FooterPage";
import ContactBar from "./ContactBar";
import AboutPage from "./AboutPage";
import Delivery from "./Delivery";
import Return from "./Return";
import Payment from "./Payment";
import Contacts from "./Contacts";
import Layouts from "./Layouts";
import Shop from "./Shop";
import Womens from "./Womens";
import Mens from "./Mens";

function HomePage() {
  return (
    <>
      <ContactBar />
      <HeaderPage />
      <CustomHeader />
      <CustomSlider />
      <MackbookAir />
      <SpecialProducts />
      <FeaturedCollection />
      <LatestArticles />
      <NewsLetter />
      <FooterPage />

      {/* <Return/> */}
      {/* <AboutPage/> */}
      {/* <Delivery/> */}
      {/* <Payment/> */}
      {/* <Contacts/> */}

      {/* <Layouts/> */}
      {/* <Shop/> */}
      {/* <Womens/> */}
      {/* <Mens/> */}
    </>
  );
}

export default HomePage;
