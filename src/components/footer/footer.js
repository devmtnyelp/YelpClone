import React from 'react';
import './footer.css';
import footerpic from './images/footer_cityscape.png';
import smalllogo from './images/logo_desktop_xsmall_outline.png';
import burst from './images/burst_desktop_xsmall_outline.png';

const Footer = () => (
  <div className="main-container">
    <div className="four-divs">
      <div className="about-section">
        <p className="about">About</p>
        <p>About Yelp</p>
        <p>Careers</p>
        <p>Press</p>
        <p>Investor Relations</p>
        <p>COntent Guidelines</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Ad Choices</p>
      </div>

      <div className="discover-section">
        <p className="discover">Discover</p>
        <p>The Local Yelp</p>
        <p>Yelp Blog</p>
        <p>Support</p>
        <p>Yelp Mobile</p>
        <p>Developers</p>
        <p>RSS</p>
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
<<<<<<< Updated upstream
      <p><img src={footerpic} alt="" /></p>
=======
      <p><img src={footerpic} /></p>
>>>>>>> Stashed changes
    </div>

    <div className="copyright">
      <p>
<<<<<<< Updated upstream
          Copyright © 2004–2018 Yelp Inc. Yelp, <img src={smalllogo} alt=""/>, <img src={burst} alt=""/> and related marks are
=======
          Copyright © 2004–2018 Yelp Inc. Yelp, <img src={smalllogo}/>, <img src={burst}/> and related marks are
>>>>>>> Stashed changes
          registered trademarks of Yelp.
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
