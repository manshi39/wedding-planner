import React from 'react';
import BanquetCard from './BanquetCard';
import './RajkotBanquet.css'; // Import CSS for styling

const banquetData = [
  {
    city: 'Rajkot',
    place: 'The Grand',
    image: 'https://via.placeholder.com/300x200', // Replace with your image
    description: 'A luxurious banquet hall perfect for weddings and grand events.',
  },
  {
    city: 'Ahmedabad',
    place: 'The Royale',
    image: 'https://via.placeholder.com/300x200', // Replace with your image
    description: 'A sophisticated banquet hall ideal for conferences and corporate events.',
  },
  // Add more banquet data for other cities and places
];

const RajkotBanquet = () => {
  return (
    <div className="rajkot-banquet">
      <h1>Rajkot Banquet - Venues in Different Cities</h1>
      <div className="banquet-cards">
        {banquetData.map((banquet) => (
          <BanquetCard key={banquet.city} {...banquet} />
        ))}
      </div>
    </div>
  );
};

export default RajkotBanquet;
