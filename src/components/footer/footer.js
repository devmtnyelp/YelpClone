import React from "react";
import "./footer.css";
import footerpic from "./images/footer_cityscape.png";
import smalllogo from "./images/logo_desktop_xsmall_outline.png";
import burst from "./images/burst_desktop_xsmall_outline.png";

const Footer = () => (
  <div className="main-container">
    <div className="four-divs">
      <div className="about-section">
        <p className="about">About</p>
        <p className="about-yelp">About Yelp</p>
        <p className="careers">Careers</p>
        <p className="press">Press</p>
        <p className="investor-rels">Investor Relations</p>
        <p className="content-guidelines">Content Guidelines</p>
        <p className="tos">Terms of Service</p>
        <p className="priv-pol">Privacy Policy</p>
        <p className="ad-choices">Ad Choices</p>
      </div>

      <div className="discover-section">
        <p className="discover">Discover</p>
        <p className="local-yelp">The Local Yelp</p>
        <p className="yelp-blog">Yelp Blog</p>
        <p className="support">Support</p>
        <p className="yelp-mobile">Yelp Mobile</p>
        <p className="developers">Developers</p>
        <p className="rss">RSS</p>
      </div>

      <div className="yelp-for-biz-owners">
        <p className="yelp-for-owners">Yelp for Business Owners</p>
        <p>Claim your Business Page</p>
        <p>Advertise on Yelp</p>
        <p>Yelp Reservations</p>
        <p>Yelp WiFi</p>
        <p>Business Sources Stories</p>
        <p>Business Support</p>
        <p>Yelp Blog For Business Owners</p>
      </div>

      <div className="languages">
        <p className="langs-p">Languages</p>
        <p>English</p>
        <p className="countries-p">Countries</p>
        <p>United States</p>
      </div>
    </div>

    <div>
      <p>
        <img src={footerpic} alt="" />
      </p>
    </div>

    <div className="copyright">
      <p>
        Copyright © 2004–2018 Yelp Inc. Yelp, <img src={smalllogo} alt="" />,{" "}
        <img src={burst} alt="" /> and related marks are registered trademarks
        of Yelp.
      </p>
    </div>
  </div>
);

export default Footer;

// <div className="site-map-cities">
// <p>Site Map</p>
// <p>Atlanta</p>
// <p>Austin</p>
// <p>Boston</p>
// <p>Chicago</p>
// <p>Dallas</p>
// <p>Denver</p>
// <p>Detroit</p>
// <p>Honolulu</p>
// <p>Houston</p>
// <p>Los Angeles</p>
// <p>Miami</p>
// <p>Minneapolis</p>
// <p>New York</p>
// <p>Philadelphia</p>
// <p>Portland</p>
// <p>Sacramento</p>
// <p>San Diego</p>
// <p>San Francisco</p>
// <p>San Jose</p>
// <p>Seattle</p>
// <p>Washington, DC</p>
// <p>More Cities</p>
// </div>
