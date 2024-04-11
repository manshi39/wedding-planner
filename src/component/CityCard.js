import React from 'react';
import '../styles/CityCard.css'; // Import CSS for styling

function CityCard({ cityName, image, onButtonClick }) {
  // ... rest of CityCard component code

  return (
    <div className="city-card">
      <img src={image} alt={cityName} />
      <h2>{cityName}</h2>
      <button onClick={onButtonClick}>View Vendors</button>
    </div>
  );
}


export default CityCard;
