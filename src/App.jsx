import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Searchbar from './components/Searchbar/Searchbar';
import FlipCard from './components/Card/FlipCard';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    fetchCharacters("https://rickandmortyapi.com/api/character");
  }, []);

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setNextPage(data.info.next);
        setPrevPage(data.info.prev);
      });
  };

  const handleNext = () => {
    if (nextPage) fetchCharacters(nextPage);
  };

  const handlePrev = () => {
    if (prevPage) fetchCharacters(prevPage);
  };

  return (
    <>
      <Header />
      <div className="navbar-container">
        <Searchbar />
      </div>
      <div className="App">
        {characters.map(character => (
          <FlipCard key={character.id} character={character} />
        ))}
        <div className="pagination">
          {prevPage && <button onClick={handlePrev}>← Prev</button>}
          {nextPage && <button onClick={handleNext}>Next →</button>}
        </div>
      </div>
    </>
  );
}

export default App;
