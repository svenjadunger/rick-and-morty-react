
import React from 'react';
import './FlipCard.css';

const FlipCard = ({ character }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={character.image} alt={character.name} style={{width: '200px', height: '200px'}} />
        </div>
        <div className="flip-card-back">
          <h1>{character.name}</h1>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
