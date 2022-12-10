/* eslint-disable react/prop-types */
/* eslint-disable no-else-return */
import React from 'react';

export default function ImageGallery({ selectedImage, setSelectedImage, selectedStyle }) {
  if (selectedStyle.photos !== undefined) {
    return (
      <div className="image-gallery">
        <div className="selected-image">
          <img src={selectedImage} alt="" style={{ 'max-width': '100%', 'max-height': '100%' }} />
        </div>
        <div className="image-thumbnail-nav">
          {selectedStyle.photos.map((image, index) => (
            <img src={image.thumbnail_url} onClick={()=>setSelectedImage(image.url)} className="image-thumbnail" />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <p>Placeholder</p>
    );
  }
}
