import React from 'react';

export default function ExpandedImage({selectedImage, handleThumbnailClick, selectedStyle, handleExpand, handleNextClick, handlePreviousClick, photoIndex}) {
  return (
    <div className="expanded-image-gallery">
      <div className="expanded-selected-image">
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
}