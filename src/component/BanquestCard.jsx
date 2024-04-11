import React from 'react';
import '../styles/BanquetCard.css'; // Import CSS for styling

function BanquetCard({ banquetName, image, onButtonClick }) {
  return (
    <div className="banquet-card">
      <img src={image} alt={banquetName} />
      <h2>{banquetName}</h2>
      <button onClick={onButtonClick}>View Details</button>
    </div>
  );
}

export default BanquetCard;
