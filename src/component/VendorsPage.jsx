import React from 'react';
import VendorCard from '../pages/VendorsCard';

const vendorsData = [
  {
    image: 'https://example.com/photographer.jpg',
    title: 'Photographers',
    description: 'Capture your wedding memories with our talented photographers.',
  },
  {
    image: 'https://example.com/caterer.jpg',
    title: 'Caterers',
    description: 'Delicious food options to make your wedding reception unforgettable.',
  },
  {
    image: 'https://example.com/makeup-artist.jpg',
    title: 'Makeup Artists',
    description: 'Look your best on your wedding day with our expert makeup artists.',
  },
  {
    image: 'https://example.com/makeup-artist.jpg',
    title: 'Makeup Artists',
    description: 'Look your best on your wedding day with our expert makeup artists.',
  },
];

function Vendors() {
  return (
    <section className="vendors">
      <h2>Our Vendors</h2>
      <div className="vendor-list">
        {vendorsData.map((vendor) => (
          <VendorCard key={vendor.title} {...vendor} />
        ))}
      </div>
    </section>
  );
}

export default Vendors;
