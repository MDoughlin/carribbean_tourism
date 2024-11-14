import React, {useState, useEffect} from "react";
import "./SearchBar.css"
import { FaSearch } from "react-icons/fa";


const SearchBar = ({setResults}) => {
  const [searchCountry, setSearchCountry] = useState('')


  const fetchData = (value) => {
    fetch(`https://restcountries.com/v3.1/name/${value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setResults(data)
    })
  }

  const handleChange = (value) => {
    setSearchCountry(value)
    if (value.trim() !== "") {
      fetchData(value)
    } else {
      setResults([])
    }
}

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon"/>
      <input
      placeholder="Type country here ..."
      value={searchCountry}
      onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar;
