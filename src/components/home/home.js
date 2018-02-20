import React from "react";
import Footer from "../footer/footer";
import Header from "../headers/mainHeader";
import { withRouter } from "react-router-dom";

const Home = () => (
  <div>
    <Header />
   
    <Footer />
  </div>
);

export default withRouter(Home);
