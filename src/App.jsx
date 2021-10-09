import React from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home';
import About from './pages/about';
import Contacts from './pages/contacts';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contacts/>
      <Footer />
    </>
  );
}

export default App;
