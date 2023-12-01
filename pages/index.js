import React from 'react';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to My Website</h1>
      <Card
        title="Card Title"
        description="This is a sample card with some information."
      />
    </div>
  );
};

export default Home;
