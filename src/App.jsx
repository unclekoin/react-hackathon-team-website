import React, { useState } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import storage from './db/storage';
import Navbar from './components/navbar/navbar';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs';
import Footer from './components/footer/footer';
import Home from './pages/home';
import About from './pages/about';
import Contacts from './pages/contacts';
import Favourites from './pages/favourites';
import Member from './pages/member';
import PageNotFound from './pages/404';

const App = () => {
  const [state, setState] = useState(false);
  const location = useLocation();

  const handleFavorite = (id) => {
    storage[id] ? (storage[id] = false) : (storage[id] = true);

    localStorage.setItem('userIds', JSON.stringify(storage));

    setState(!state);
  };

  return (
    <>
      <Navbar />
      {(location.pathname !== '/' && location.pathname !== '/404') ? <Breadcrumbs /> : null}
      <Switch>
        <Route path="/" exact>
          <Home onFavorite={handleFavorite} />
        </Route>
        <Route path="/favourites">
          <Favourites onFavorite={handleFavorite} />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/member/:memberId">
          <Member onFavorite={handleFavorite}/>
        </Route>
        <Route path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
