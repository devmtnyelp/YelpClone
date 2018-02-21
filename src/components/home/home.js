import React from "react";
import Footer from "../footer/footer";
import Header from "../headers/mainHeader";
import BestBusinesses from "../bestBusinesses/bestBusinesses";
import { withRouter } from "react-router-dom";

const Home = () => (
  <div>
    <Header />
      <BestBusinesses />
    <Footer />
  </div>
);

export default withRouter(Home);
