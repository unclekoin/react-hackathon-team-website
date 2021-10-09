import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home';
import About from './pages/about';
import Contacts from './pages/contacts';
import Favourites from './pages/favourites';
import Member from './pages/member';

function App() {
  const [memberIds, setMemberIds] = useState([]);

  const handleFavorite = (id) => {
    let newMemberIds = [...memberIds];
    newMemberIds = newMemberIds.includes(id)
      ? newMemberIds.filter((memberId) => memberId !== id)
      : [...newMemberIds, id];

    setMemberIds(newMemberIds);
    localStorage.setItem('usersId', JSON.stringify(memberIds))
  };

  return (
    <>
      <Navbar />
      <Route path="/" exact>
        <Home onFavorite={handleFavorite} />
      </Route>
      <Route path="/favourites">
        <Favourites onFavorite={handleFavorite} memberIds={memberIds} />
      </Route>
      <Route path="/about" component={About} />
      <Route path="/сontacts" component={Contacts} />
      <Route path="/:memberId" component={Member} />
      <Footer />
    </>
  );
}

export default App;
