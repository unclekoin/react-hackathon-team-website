import React from 'react';
import Badge from '../components/badge';
import Breadcrumbs from '../components/breadcrumbs';
import Button from '../components/button';
import MemberCard from '../components/member-card';
import Navbar from '../components/navbar';
import Progress from '../components/progress';
import Slider from '../components/slider';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Badge />
      <Breadcrumbs />
      <Button />
      <MemberCard />
      <Navbar />
      <Progress />
      <Slider />
    </div>
  );
};

export default Home;
