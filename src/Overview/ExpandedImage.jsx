import React from 'react';

export default function ExpandedImage({selectedImage, handleThumbnailClick, selectedStyle, handleExpand, handleNextClick, handlePreviousClick, photoIndex}) {
  return (
    <div className="expanded-image-gallery">
      <>
              <button onClick={() => handlePreviousClick()} value="previous" className="back-button">
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <img src={selectedImage} alt="" className="expanded-image"/>
              <button onClick={() => handleNextClick()} className="next-button">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
              <button onClick={() => handleExpand()} className="expand-button">
                <i class="fa-solid fa-expand"></i>
              </button>
      </>
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