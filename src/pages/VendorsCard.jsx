import React from 'react';
import '../styles/VendorCard.css'; // Import CSS for styling

function VendorCard({ vendorName, logo, description, onButtonClick }) {
  // ... rest of VendorCard component code

  return (
    <div className="vendor-card">
      <img src={logo} alt={vendorName} />
      <h3>{vendorName}</h3>
      <p>{description}</p>
      <button onClick={onButtonClick}>Visit Vendor</button>
    </div>
  );
}

export default VendorCard;
