import React from 'react';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to My Website</h1>
      <Card
        title="Illinois Institute of Technology"
        description="Master's Degree"
        imageUrl="https://cdn.britannica.com/13/149313-050-E9E1EC08/SR-Crown-Hall-Illinois-Institute-of-Technology-1956.jpg"
      />
    </div>
  );
};

export default Home;
