import React from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner';

/*Const to hold the data per card to return to the card component */
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
        'https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/IIT%20Gift_1025.jpg?itok=5wnNOMFb',
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
          <p>
            <b>Back of House Team Member</b>
          </p>
          <p>Chick-Fil-A Inc.</p>
          <p>Aug 2019 to June 2021</p>
          <br></br>
          <p>
            <b>Vietnamese Baptist Church of Chicago</b>
          </p>
          <p>Children’s Ministry Teacher</p>
          <p>Aug 2019 to June 2021</p>
        </div>
        <div className="additional-grid-item">
          <h3 className="title">Relevant Skills</h3>
          <p>
            <b>Design:</b> Adobe Photoshop, Adobe Premier Pro, Figma
          </p>
          <p>
            <b>App Development:</b> C++, C#, Java, MySQL, HTML, CSS, JS
          </p>
          <p>
            <b>Misc Skills:</b> Microsoft Office Programs: Word, Excel,
            PowerPoint
          </p>
          <p>
            <b>Languages:</b> English and Vietnamese
          </p>
        </div>
        <div className="footer"> Website Created by: Philip Le</div>
      </div>
    </div>
  );
};

export default Home;
