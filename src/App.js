import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import DestinationResults from "./components/DestinationResults";
import Attractions from "./components/Attractions";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="app">
      <h1 className="page-title">Which Paradise are you looking for?</h1>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <DestinationResults results={results} />
        <Attractions />
      </div>
    </div>
  );
}

export default App;
