import React from "react";
import Footer from "../footer/footer";
import Header from "../headers/mainHeader";
import { withRouter } from "react-router-dom";

const Home = () => (
  <div>
    <Header />
    <button onClick={() => this.props.history.push("/login")}>Login</button>
    <button onClick={() => this.props.history.push("/register")}>
      Sign up
    </button>
    <Footer />
  </div>
);

export default withRouter(Home);
