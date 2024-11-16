import React from "react";

const Attractions = ({ results }) => {
  return (
    <div>
      <h2>Attractions</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((destination) => (
            <li key={destination.id}>
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
              {/* Optionally, add more details like image, reviews, etc. */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found. </p>
      )}
    </div>
  );
};

export default Attractions;
