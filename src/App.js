import './App.css';
import { useState } from 'react';
import  SearchBar from "./components/SearchBar"
import DestinationResults from './components/DestinationResults';

function App() {

  const [results, setResults] = useState([])

  return (
    <div className='app'>
  <h1>Which Paradise are you looking for?</h1>
  <div className='search-bar-container'>
  <SearchBar setResults={setResults}/>
  <DestinationResults results={results} />
  </div>
  </div>
  );
}

export default App;
