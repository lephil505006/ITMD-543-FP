import React, { useState } from 'react';

const Card = ({ title, caption, imageUrl, course1, course2, course3 }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  /*Card component that will take input from the index on click button*/
  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <h2>{caption}</h2>
      <button onClick={toggleShowMore}>
        {showMore ? 'View Less' : 'View More'}
      </button>
      {showMore && (
        <div className="moreInfo">
          <h2>Relavent Courses</h2>
          <p>{course1}</p>
          <p>{course2}</p>
          <p>{course3}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
