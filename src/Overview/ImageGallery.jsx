/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
/* eslint-disable no-else-return */
import React, { useState, useEffect } from 'react';
import ExpandedImage from './ExpandedImage.jsx';

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

//ensure that image doesnt render until selected style has been mounted
  if (selectedStyle.photos !== undefined) {
    //check if the image has been expanded
    if (isExpanded) {
      return <ExpandedImage
                selectedImage={selectedImage}
                handleThumbnailClick={handleThumbnailClick}
                selectedStyle={selectedStyle}
                handleExpand={handleExpand}
                handleNextClick={handleNextClick}
                handlePreviousClick={handlePreviousClick}
                photoIndex={photoIndex} />
    } else {
      return (
        // <div className="image-gallery">
          // <div className="selected-image">
          <>
            <div className="image">
              <button onClick={() => handlePreviousClick()} value="previous" className="back-button">
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <img src={selectedImage} alt="" style={{ 'max-width': '95%', 'max-height': '95%' }} />
              <button onClick={() => handleNextClick()} className="next-button">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
              <button onClick={() => handleExpand()} className="expand-button">
                <i class="fa-solid fa-expand"></i>
              </button>
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
            <>
            </>
          </>
        // </div>
      );
    }
  } else {
    return (
      <p>Placeholder</p>
    );
  }
}
