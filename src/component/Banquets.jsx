import React from 'react';
import BanquetCard from './BanquestCard';// Assuming BanquetCard component exists
import '../styles/Banquets.css'; // Import CSS for styling

// Define navigateToBanquetPage function before using it in banquetsData
const navigateToBanquetPage = (banquetName) => {
  // Placeholder implementation, replace with your actual navigation logic
  alert(`Opening banquet page for ${banquetName}`); // For demonstration purposes
  // Add your navigation logic to open BanquetPage.js here
};

const banquetsData = [
  { banquetName: 'Palacio Banquet', image: require("../images/banquet1.jpg"), onButtonClick: () => navigateToBanquetPage('The Grand Ballroom') },
  { banquetName: 'Sarthi Banquet', image: require("../images/banquet2.jpg"), onButtonClick: () => navigateToBanquetPage('Royal Banquet Hall') },
  { banquetName: 'Crystal Palace', image: require("../images/banquet3.jpg"), onButtonClick: () => navigateToBanquetPage('Crystal Palace') },
  { banquetName: 'J B Banquet', image: require("../images/banquet4.jpg"), onButtonClick: () => navigateToBanquetPage('Golden Sands Banquet') },
];

function Banquets() {
  return (
    <section className="banquets">
      <h2>BANQUETS</h2>
      <div className="banquets-container">
        {banquetsData.map((banquet) => (
          <BanquetCard key={banquet.banquetName} {...banquet} />
        ))}
      </div>
    </section>
  );
}

export default Banquets;
