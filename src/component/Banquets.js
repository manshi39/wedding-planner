import React, { useState } from 'react';
import CityCard from './CityCard'; // Assuming CityCard component exists
import BanquetDetails from './BanaquestDetails';// Import BanquetDetails

const banquetsData = [ // Define banquetsData here
  {
    id: 1,
    name: 'The Grand Ballroom',
    city: 'Mumbai',
    imageUrl: 'https://example.com/grand-ballroom.jpg',
    description: 'A majestic hall for grand weddings...',
    capacity: 500,
    price: 10000,
  },
  // ... other banquets
]; // Move this outside the component

function Banquets() {
  const [selectedBanquetId, setSelectedBanquetId] = useState(null);

  const handleBanquetClick = (banquetId) => {
    setSelectedBanquetId(banquetId);
  };

  const selectedBanquet = selectedBanquetId
    ? banquetsData.find((banquet) => banquet.id === selectedBanquetId)
    : null;

  return (
    <section className="banquets">
      <h2>Banquets</h2>
      {selectedBanquetId ? (
        <BanquetDetails banquet={selectedBanquet} />
      ) : (
        <ul>
          {banquetsData.map((banquet) => (
            <CityCard
              key={banquet.id}
              cityName={banquet.name} // Assuming CityCard displays city name
              imageUrl={banquet.imageUrl}
              onButtonClick={() => handleBanquetClick(banquet.id)} // Pass banquet ID for details
            />
          ))}
          
        </ul>
        
      )}
    </section>
  );
}

export default Banquets;
