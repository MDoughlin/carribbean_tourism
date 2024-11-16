import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setResults }) => {
  const [searchCountry, setSearchCountry] = useState("");

  const fetchData = () => {
    if (searchCountry.trim() === "") {
      setResults([]); // Clear results if input is empty
      return;
    }

    // Fetch data from the REST Countries API
    fetch(`https://restcountries.com/v3.1/name/${searchCountry}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults(data); // Update results with fetched data from countries API
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setResults([]); // Clear results in case of an error
      });
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type country here ..."
        value={searchCountry}
        onChange={(e) => setSearchCountry(e.target.value)}
      />
      <button onClick={fetchData}>Search</button>
    </div>
  );
};

export default SearchBar;
