import React from 'react';

function BanquetDetails({ banquet }) {
  return (
    <div className="banquet-details">
      <h2>{banquet.name}</h2>
      <img src={banquet.imageUrl} alt={banquet.name} />
      <p>{banquet.description}</p>
      <ul>
        <li>City: {banquet.city}</li>
        <li>Capacity: {banquet.capacity}</li>
        <li>Price: ₹{banquet.price} per plate</li>
      </ul>
    </div>
  );
}

export default BanquetDetails;
