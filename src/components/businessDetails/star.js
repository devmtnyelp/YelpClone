import React from 'react';
import star from './star.png';
import './star.css';

const Star = ({ rating, index, name }) => {
  return (
    <li>
      <button
        value={index}
        className={(rating >= index ? 'highlight ' : '') + name}
      >
        <img src={star} className="star-icon-smaller" />
      </button>
    </li>
  );
};

export default Star;
