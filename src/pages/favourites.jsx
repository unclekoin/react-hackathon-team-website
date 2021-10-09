import React from 'react';
import Card from '../components/card/card';
import members from '../db/api.members';

const Favourites = () => {
  return (
    <main>  
        <section className="pt-5 pb-3 text-center container">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Favourites</h1>
          </div>
        </section>

        <div className="album py-5 bg-light p-3">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {members.map((member, index) => <Card key={member._id} {...member} />)}
            </div>
          </div>
        </div>
      </main>
   );
}
 
export default Favourites;