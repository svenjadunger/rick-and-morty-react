import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Searchbar from './components/Searchbar/Searchbar'


function App() {
  return (
    <>
      <Header />
      <h1>Hello World</h1>
      <div className="App">
        <div className="search-bar-container">
          <Searchbar />
          <div>SearchResults</div>
             </div>
      </div>
    </>
  )
}

export default App



