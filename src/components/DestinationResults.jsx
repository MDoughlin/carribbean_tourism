import React, { useState, useEffect } from "react";
import "./DestinationResults.css";

const DestinationResults = ({ results }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Automatically display the single country if there's only one result
  useEffect(() => {
    if (results && results.length === 1) {
      setSelectedCountry(results[0]);
    }
  }, [results]);

  const handleSelect = (country) => {
    setSelectedCountry(country); // Set the selected country when clicked
  };

  return (
    <div>
      {/* If a country is selected, display its details */}
      {selectedCountry ? (
        <div className="parent-container">
          <div className="information-container">
            <p className="country-name">
              <strong>Country:</strong> {selectedCountry.name.common}
            </p>
            <p className="result-items">
              <strong>Capital:</strong> {selectedCountry.capital}
            </p>
            <p className="result-items">
              <strong>Population:</strong>{" "}
              {selectedCountry.population.toLocaleString()}
            </p>
            <p className="result-items">
              <strong>Language Spoken:</strong>{" "}
              {Object.values(selectedCountry.languages).join(", ")}
            </p>
            <p className="result-items">
              <strong>Currencies: </strong>
              {Object.values(selectedCountry.currencies)
                .map(
                  (currency) => `${currency.name} (${currency.symbol || "N/A"})`
                )
                .join(", ")}
            </p>
            <p className="result-items">
              <strong>Country Map: </strong>
              <a
                href={selectedCountry.maps.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </p>
          </div>
          <div className="flag-container">
            <h1>Flag</h1>
            <div className="flag">{selectedCountry.flag}</div>
          </div>
        </div>
      ) : (
        // If no country is selected, display the list of results
        <div className="results-list">
          {results.map((country, index) => (
            <div
              key={index}
              className="result-item"
              onClick={() => handleSelect(country)}
            >
              <p className="country-name">
                <strong>Country:</strong> {country.name.common}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DestinationResults;
