import React, { useState } from 'react';

const Card = ({ title, caption, imageUrl }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="card">
      <h1 className="title">{title}</h1>
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <p>{caption}</p>
      <button onClick={toggleShowMore}>
        {showMore ? 'View Less' : 'View More'}
      </button>
      {showMore && (
        <div className="more-info">
          <p>Additional information for {title}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
