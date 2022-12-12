/* eslint-disable react/prop-types */
/* eslint-disable no-else-return */
import React, { useState, useEffect } from 'react';

export default function ImageGallery({ selectedImage, setSelectedImage, selectedStyle }) {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (selectedStyle.photos !== undefined) {
      setSelectedImage(selectedStyle.photos[photoIndex].url);
    }
  }, [selectedStyle, photoIndex]);

  const handleThumbnailClick = (url, index) => {
    setPhotoIndex(index);
    setSelectedImage(url);
  };

  const handleNextClick = () => {
    if (photoIndex >= selectedStyle.photos.length - 1) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex(photoIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (photoIndex === 0) {
      setPhotoIndex(selectedStyle.photos.length - 1);
    } else {
      setPhotoIndex(photoIndex - 1);
    }
  };

  if (selectedStyle.photos !== undefined) {
    return (
      <div className="image-gallery">
        <div className="selected-image">
          <img src={selectedImage} alt="" style={{ 'max-width': '100%', 'max-height': '100%' }} />
        </div>
        <div className="image-thumbnail-nav">
          <input type="button" onClick={() => handlePreviousClick()} value="previous" />
          {selectedStyle.photos.map((image, index) => (
            <img src={image.thumbnail_url} onClick={()=>handleThumbnailClick(image.url, index)} className="image-thumbnail" />
          ))}
          <input type="button" onClick={() => handleNextClick()} value="next" />
        </div>
      </div>
    );
  } else {
    return (
      <p>Placeholder</p>
    );
  }
}
