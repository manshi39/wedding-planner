import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import Cities from './component/Cities';
import Banquets from './component/Banquets';
import Footer from './component/Footer';
 
function App() {
  return (
    <div className="home-page">
      <Header />
      <main className="main">
        <Hero />
        <Cities />
        <Banquets />
      </main>
      <Footer />
    </div>
  );
}

export default App;