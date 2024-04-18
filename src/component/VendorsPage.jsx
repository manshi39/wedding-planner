import React from 'react';
import VendorCard from './VendorCard';
import '../styles/VendorCard.css'; // Import CSS for styling

// Define navigateToVendorCard function before using it in vendorsData
const navigateToVendorCard = (vendorName) => {
  // Placeholder implementation, replace with your actual navigation logic
  alert(`Opening vendor page for ${vendorName}`); // For demonstration purposes
  // Add your navigation logic to open VendorCard.js here
};

const vendorsData = [
  { vendorName: 'Palacio Banquet', image: require("../images/image1.jpeg"), onButtonClick: () => navigateToVendorCard('Palacio Banquet') },
  { vendorName: 'Sarthi Banquet', image: require("../images/image2.jpeg"), onButtonClick: () => navigateToVendorCard('Sarthi Banquet') },
  { vendorName: 'Crystal Palace', image: require("../images/image3.jpeg"), onButtonClick: () => navigateToVendorCard('Crystal Palace') },
  { vendorName: 'J B Banquet', image: require("../images/image4.jpeg"), onButtonClick: () => navigateToVendorCard('J B Banquet') },
];

function VendorPage() {
  return (
    <section className="vendors">
      <h2>Vendors</h2>
      <div className="vendors-container">
        {vendorsData.map((vendor) => (
          <VendorCard key={vendor.vendorName} {...vendor} />
        ))}
      </div>
    </section>
  );
}

export default VendorPage;
