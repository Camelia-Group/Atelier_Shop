/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
/* eslint-disable no-else-return */
import React, { useState, useEffect } from 'react';

export default function ImageGallery({ selectedImage, setSelectedImage, selectedStyle }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

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

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };


  if (selectedStyle.photos !== undefined) {
    if (isExpanded) {
      return (
        <div className="image-gallery">
          <div className="selected-image">
            <input type="button" onClick={() => handlePreviousClick()} value="previous" />
            <img src={selectedImage} alt="" style={{ 'width': '100%', 'max-height': '100%' }} />
            <input type="button" onClick={() => handleNextClick()} value="next" />
            <input type="button" onClick={() => handleExpand()} value="expand" />
          </div>
          <div className="image-thumbnail-nav">
            {selectedStyle.photos.map((image, index) => {
              if (index === photoIndex) {
                return (<img
                  src={image.thumbnail_url}
                  onClick={()=>handleThumbnailClick(image.url, index)}
                  className="image-thumbnail-highlighted" />);
              } else {
                return (<img
                  src={image.thumbnail_url}
                  onClick={()=>handleThumbnailClick(image.url, index)}
                  className="image-thumbnail" />);
              }
              })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="image-gallery">
          <div className="selected-image">
            <input type="button" onClick={() => handlePreviousClick()} value="previous" />
            <img src={selectedImage} alt="" style={{ 'max-width': '100%', 'max-height': '100%' }} />
            <input type="button" onClick={() => handleNextClick()} value="next" />
            <input type="button" onClick={() => handleExpand()} value="expand" />
          </div>
          <div className="image-thumbnail-nav">
            {selectedStyle.photos.map((image, index) => {
              if (index === photoIndex) {
                return (<img
                  src={image.thumbnail_url}
                  onClick={()=>handleThumbnailClick(image.url, index)}
                  className="image-thumbnail-highlighted" />);
              } else {
                return (<img
                  src={image.thumbnail_url}
                  onClick={()=>handleThumbnailClick(image.url, index)}
                  className="image-thumbnail" />);
              }
              })}
          </div>
        </div>
      );
    }
  } else {
    return (
      <p>Placeholder</p>
    );
  }
}
