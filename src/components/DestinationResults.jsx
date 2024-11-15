import React from "react";
import "./DestinationResults.css";

const DestinationResults = ({ results }) => {
  return (
    <div>
      {results.map((country, index) => (
        <>
          <div className="information-container">
            <div key={index}>
              <p className="country-name">
                <strong>Country:</strong> {country.name.common}
              </p>
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
              <p>
                <strong>Language Spoken:</strong>{" "}
                {Object.values(country.languages).join(", ")}
              </p>
              <p>
                <strong>Currencies: </strong>
                {Object.values(country.currencies)
                  .map(
                    (currency) =>
                      `${currency.name} (${currency.symbol || "N/A"})`
                  )
                  .join(", ")}
              </p>
              <p>
                <strong>Country Map: </strong>
                {country.maps.googleMaps}
              </p>
            </div>
          </div>
          <div className="flag-container">
            <h1>Flag</h1>
            {country.flag}
          </div>
        </>
      ))}
    </div>
  );
};

export default DestinationResults;
