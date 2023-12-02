import React from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner';

const Home = () => {
  const cardsData = [
    {
      title: 'Illinois Institute of Technology - Web and App Development',
      caption: "Master's Degree",
      imageUrl:
        'https://cdn.britannica.com/13/149313-050-E9E1EC08/SR-Crown-Hall-Illinois-Institute-of-Technology-1956.jpg',
      course1: 'Human and Computer Interaction',
      course2: 'Web Design',
      course3: 'Full-Stack Web Development',
    },
    {
      title:
        'Illinois Institute of Technology - Information Technology Management',
      caption: "Bachelor's Degree",
      imageUrl:
        'https://www.cod.edu/news/images/campus/src-exterior-article.jpg',
      course1: 'Data Modeling and Applications',
      course2: 'Project Management for ITM',
      course3: 'Intermediate Software Development',
    },
    {
      title: 'College of Dupage - Computer Science',
      caption: "Associate's Degree",
      imageUrl:
        'https://www.cod.edu/news/images/campus/src-exterior-article.jpg',
      course1: 'OS and Hardware',
      course2: 'C++ Game Design',
      course3: 'Advanced C++ Programming',
    },
  ];

  return (
    <div className="container">
      <Banner />
      <div className="header education-text">Education</div>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          caption={card.caption}
          imageUrl={card.imageUrl}
          course1={card.course1}
          course2={card.course2}
          course3={card.course3}
        />
      ))}
      <div className="additional-grid">
        <div className="additional-grid-item">
          <h3 className="title">Experience</h3>
          <p>Chicken Place</p>
        </div>
        <div className="additional-grid-item">
          <h3 className="title">Relevant Skills</h3>
          <p>Computer Stuff</p>
          <p>Computer Stuff</p>
          <p>Computer Stuff</p>
          <p>Computer Stuff</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
