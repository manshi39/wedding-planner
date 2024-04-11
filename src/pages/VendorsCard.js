import React from 'react';

function VendorCard({ image, title, description }) {
  return (
    <div className="vendor-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default VendorCard;
