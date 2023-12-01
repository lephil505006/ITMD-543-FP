import React, { useState } from 'react';

const Card = ({ title, description, imageUrl }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <p>{description}</p>
      <button onClick={toggleShowMore}>
        {showMore ? 'View Less' : 'View More'}
      </button>
      {showMore && (
        <p>
          Additional information or content you want to display when "View More"
          is clicked.
        </p>
      )}
    </div>
  );
};

export default Card;
