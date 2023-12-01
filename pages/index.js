import React from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner';

const Home = () => {
  const cardsData = [
    {
      title: 'Illinois Institute of Technology',
      caption: "Master's Degree",
      imageUrl:
        'https://cdn.britannica.com/13/149313-050-E9E1EC08/SR-Crown-Hall-Illinois-Institute-of-Technology-1956.jpg',
    },
    {
      title: 'College of Dupage',
      caption: "Associate's Degree",
      imageUrl:
        'https://www.cod.edu/news/images/campus/src-exterior-article.jpg',
    },
  ];

  return (
    <div className="container">
      <Banner />
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          caption={card.caption}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default Home;
