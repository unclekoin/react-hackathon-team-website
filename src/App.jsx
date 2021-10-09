import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import storage from './db/storage';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home';
import About from './pages/about';
import Contacts from './pages/contacts';
import Favourites from './pages/favourites';
import Member from './pages/member';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs'


function App() {

  const [state, setState] = useState(false)

  const handleFavorite = (id) => { 
    storage[id]
      ? storage[id] = false
      : storage[id] = true;
    
    localStorage.setItem('userIds', JSON.stringify(storage));
    setState(!state);
  };

  return (
    <>
      <Navbar />
      <Route path="/" exact>
        <Home onFavorite={handleFavorite}/>
      </Route>
      <Route path="/favourites">
        <Favourites onFavorite={handleFavorite}/>
      </Route>
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/:memberId" component={Member} />
      <Breadcrumbs />
      <Footer />
    </>
  );
}

export default App;
