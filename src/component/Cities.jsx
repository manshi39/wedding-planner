import React from 'react';
import CityCard from './CityCard';
import '../styles/Cities.css'; // Import CSS for styling

// Define navigateToVendorPage function before using it in citiesData
const navigateToVendorPage = (cityName) => {
  // Placeholder implementation, replace with your actual navigation logic
  alert(`Opening vendor page for ${cityName}`); // For demonstration purposes
  // Add your navigation logic to open VendorPage.js here
};

const citiesData = [
  { cityName: 'Rajkot', image: require("../images/rajkot.jpg"), onButtonClick: () => navigateToVendorPage('Rajkot') },
  { cityName: 'Ahmedabad', image: require("../images/ahmedabad.jpg"), onButtonClick: () => navigateToVendorPage('Ahmedabad') },
  { cityName: 'Gandhinagar', image: require("../images/gandhinagar.jpg"), onButtonClick: () => navigateToVendorPage('Gandhinagar') },
  { cityName: 'Surat', image: require("../images/surat.jpg"), onButtonClick: () => navigateToVendorPage('Surat') }, // Fixed typo in city name
];

function Cities() {
  return (
    <section className="cities">
      <h2>CITIES</h2>
      <div className="cities-container">
        {citiesData.map((city) => (
          <CityCard key={city.cityName} {...city} />
        ))}
      </div>
    </section>
  );
}

export default Cities;
