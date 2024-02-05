import React, { useState } from "react";
import "./FlipCard.css"; 

const FlipCard = ({ character }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
//open or closed
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={character.image}
            alt={character.name}
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <div className="flip-card-back">
          <h1>{character.name}</h1>
          <button onClick={toggleModal}>SEE MORE</button>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={toggleModal}>
                  &times;
                </span>
              
              
                <p>Status: {character.status}</p>
                <p>Spezies: {character.species}</p>
                <p>Gender: {character.gender}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
