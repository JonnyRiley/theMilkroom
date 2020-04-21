import React from "react";
import shop2 from "../Components/images/shop2.JPG";
import brunch from "../Components/images/brunch.JPG";
import halloween from "../Components/images/halloweenFreaksake.jpg";
import { Link } from "@reach/router";
import SocialMedia from "./SocialMedia";

const Filler = () => {
  return (
    <main className="fillerMain">
      <a className="TitleHome" href="http://instagram.com/themilkroom">
        @themilkroom
      </a>
      <div className="about">
        <img className="aboutImg1" src={brunch} alt="shop1"></img>
        <p className="aboutUsText">
          <h2 className="brunchTitle">LET'S DO BRUNCH</h2>
          Catching up with friends and family has never been easier. We have all
          your brunch favourites at themilkroom.<br></br>
          <br></br> Why not try our popular Breakfast Waffle!
          <Link to="/about">
            <button className="navButtonEnquireFiller">ENQUIRE</button>
          </Link>
        </p>
      </div>
      {/* <div className="about">
        <img className="aboutImg" src={giftCard} alt="shop1"></img>
        <p className="aboutUsText">
          <h2 className="aboutH2">themilkroom</h2>
          <Popup />
        </p>
      </div> */}
      <div className="about">
        <p className="aboutUsTextSecondP">
          <h3 className="brunchTitle">IT'S PARTY TIME</h3>
          <br></br>
          Are you looking to host a party?<br></br>
          We have the perfect venue for you and have specialised packages for
          your event<br></br>
          <Link to="/parties">
            <button className="navButtonOffersParty">FIND OUT MORE</button>
          </Link>
        </p>
        <img className="aboutImg" src={shop2} alt="shop2"></img>
      </div>
      <div className="about">
        <img className="aboutImg1" src={halloween} alt="halloween"></img>
        <p className="aboutUsText">
          <h2 className="brunchTitle">CHECK OUT OUR SEASONAL PRODUCTS</h2>
          Be sure to keep up to date with our social media accounts
          <br></br>so that you don't miss out on our crazy seasonal products.
          <Link to="/seasonalProducts">
            <button className="navButtonEnquireFiller">
              Seasonal Products
            </button>
          </Link>
        </p>
      </div>
      <SocialMedia />
    </main>
  );
};

export default Filler;
