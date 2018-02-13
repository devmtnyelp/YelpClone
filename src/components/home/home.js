import React from 'react';
import Footer from '../footer/footer';


const Home = () => (
  <div>
    <button onClick={() => this.props.history.push('/login')}>Login</button>
    <button onClick={() => this.props.history.push('/register')}>Sign up</button>

    <Footer />
  </div>
);

export default Home;
