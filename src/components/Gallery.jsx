import React, { useState } from 'react';
import './Gallery.css';
// import groupPic from '../Images/bunk images/group pic.jpg';
// import watermelon from '../Images/bunkImg/water melon Mocktails.jpg';
// import Mocktail from '../Images/bunkImg/Green Mocktails.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const galleryImages = [
    {
      id: 1,
      src: 'data:image/jpeg;base64,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',
      alt: 'Chai Bunk Cafe Exterior',
      category: 'exterior',
      title: 'Main Entrance'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/31995895/pexels-photo-31995895/free-photo-of-turkish-coffee-with-scenic-bursa-view.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      alt: 'Interior Seating Area',
      category: 'interior',
      title: 'Cozy Interior'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/266706/pexels-photo-266706.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Team Photo',
      category: 'team',
      title: 'Our Team'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/8329963/pexels-photo-8329963.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Chai Preparation',
      category: 'food',
      title: 'Fresh Chai'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Outdoor Seating',
      category: 'exterior',
      title: 'Outdoor Area'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/12365249/pexels-photo-12365249.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Kitchen Area',
      category: 'interior',
      title: 'Kitchen View'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1460872/pexels-photo-1460872.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Opening Ceremony',
      category: 'events',
      title: 'Grand Opening'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Food Menu Display',
      category: 'food',
      title: 'Menu Items'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/17257204/pexels-photo-17257204/free-photo-of-male-hand-holding-a-glass-of-yellow-cocktail-with-ice-cubes.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Evening Ambiance',
      category: 'interior',
      title: 'Evening View'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/32166395/pexels-photo-32166395/free-photo-of-chilled-iced-coffee-in-glass-on-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Staff at Work',
      category: 'team',
      title: 'Service Excellence'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Decorated Cafe',
      category: 'events',
      title: 'Special Occasion'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Counter Area',
      category: 'interior',
      title: 'Service Counter'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'exterior', label: 'Exterior' },
    { key: 'interior', label: 'Interior' },
    { key: 'food', label: 'Food & Beverages' },
    { key: 'team', label: 'Our Team' },
    { key: 'events', label: 'Events' }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title">Our Gallery</h2>
          <p className="gallery-subtitle">
            Explore the warm ambiance and delightful moments at Chai Bunk Cafe
          </p>
        </div>

        <div className="filter-tabs">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-btn ${filter === category.key ? 'active' : ''}`}
              onClick={() => setFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(image)}
            >
              <div className="image-wrapper">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>{image.title}</h3>
                    <span className="view-btn">View Image</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;