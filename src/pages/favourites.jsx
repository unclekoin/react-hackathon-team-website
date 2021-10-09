import React from 'react';
import Card from '../components/card/card';
import members from '../db/api.members';

const Favourites = ({ handleFavorite, memberIds }) => {
  const favourites = members.filter((member) => memberIds.includes(member._id));

  console.log(memberIds);
  return (
    <main>
      <section className="pt-5 pb-3 text-center container">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">{favourites.length ? 'Favourites' : 'You haven\'t chosen anyone yet'}</h1>
        </div>
      </section>
      {!!favourites.length && (
        <div className="album py-5 bg-light p-3">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {favourites.map((favorite, index) => (
                <Card
                  key={favorite._id}
                  {...favorite}
                  onFavorite={handleFavorite}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Favourites;
