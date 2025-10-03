
import React from 'react';
import useFetch from './useFetch';
import './FetchDemo.css';

const API_URL = 'https://api.escuelajs.co/api/v1/products';

const FetchDemo = () => {
  const { data, loading, error } = useFetch(API_URL);

  return (
    <div className="photo-gallery-container">
      <h2 className="gallery-title">Photos</h2>
      {loading && <div className="spinner">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      <div className="photo-grid">
        {Array.isArray(data) && data.map(product => {
     
          let imgSrc = (product.images && product.images[0]) ? product.images[0] : 'https://via.placeholder.com/180x180?text=No+Image';
        
          if (!imgSrc || imgSrc.trim() === '') imgSrc = 'https://via.placeholder.com/180x180?text=No+Image';
          return (
            <div key={product.id} className="photo-card">
              <img src={imgSrc} alt={product.title} className="photo-img" />
              <div className="photo-title">{product.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FetchDemo;
