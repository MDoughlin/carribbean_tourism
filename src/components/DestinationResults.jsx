import React from "react";

const DestinationResults = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((country, index) => (
        <div key={index}>
          <h1>Country: {country.name.common}</h1>
          <h1>Population: {country.population}</h1>
          <h1>Language Spoken:</h1>
        </div>
      ))}
    </div>
  );
};

export default DestinationResults;
