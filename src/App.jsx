import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Searchbar from './components/Searchbar/Searchbar';
import FlipCard from './components/Card/FlipCard'; 
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  return (
    <>
      <Header />
      <h1></h1>
      <div className="App">
        <div className="search-bar-container">
          <Searchbar />
        </div>
        {characters.map((character) => (
          <FlipCard key={character.id} character={character} />
        ))}
      </div>
    </>
  );
}

export default App;
