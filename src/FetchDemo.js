
import React from 'react';
import useFetch from './useFetch';
import './FetchDemo.css';
import noImage from './assets/no-image.svg';

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
     
          let imgSrc = (product.images && product.images[0]) ? product.images[0] : noImage;
        
          if (!imgSrc || (typeof imgSrc === 'string' && imgSrc.trim() === '')) imgSrc = noImage;
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
