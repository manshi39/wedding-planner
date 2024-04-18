import React from 'react';
import VendorCard from './VendorCard'; // Assuming VendorCard component exists
import '../styles/RajkotVendorPage.css'; // Import CSS for styling

const rajkotVendors = [
  {
    vendorName: 'Rajdhani Sarees',
    logo: require("../images/image1.jpeg"), // Replace with vendor logo path
    description: 'Exquisite collection of sarees and lehengas',
    onButtonClick: () => alert('Booking request sent to Rajdhani Sarees'), // Placeholder for booking functionality
  },
  {
    vendorName: 'Shreeji Sweets',
    logo: require("../images/image2.jpeg"), // Replace with vendor logo path
    description: 'Traditional Rajkoti sweets and snacks',
    onButtonClick: () => alert('Booking request sent to Shreeji Sweets'), // Placeholder for booking functionality
  },
  {
    vendorName: 'Saffron Boutique',
    logo: require("../images/image3.jpeg"), // Replace with vendor logo path
    description: 'Curated collection of handcrafted gifts and souvenirs',
    onButtonClick: () => alert('Booking request sent to Saffron Boutique'), // Placeholder for booking functionality
  },
  {
    vendorName: 'Royal Durbar Restaurant',
    logo: require("../images/image4.jpeg"), // Replace with vendor logo path
    description: 'Authentic Rajasthani cuisine',
    onButtonClick: () => alert('Booking request sent to Royal Durbar Restaurant'), // Placeholder for booking functionality
  },
];

function RajkotVendorPage() {
  return (
    <section className="rajkot-vendor-page">
      <h2>RAJKOT VENDORS</h2>
      <div className="vendors-container">
        {rajkotVendors.map((vendor) => (
          <VendorCard key={vendor.vendorName} {...vendor} />
        ))}
      </div>
    </section>
  );
}

export default RajkotVendorPage;
