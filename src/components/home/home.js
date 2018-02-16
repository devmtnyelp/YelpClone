import React from 'react';
import Footer from '../footer/footer';
import Header from '../headers/mainHeader';

const Home = () => (
  <div>
    <Header />
    <button onClick={() => this.props.history.push('/login')}>Login</button>
    <button onClick={() => this.props.history.push('/register')}>Sign up</button>
    <Footer />
  </div>
);

export default Home;
