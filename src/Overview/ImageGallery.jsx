import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default function ImageGallery({ images }) {
  if (images !== undefined) {
    return (
      <Carousel
        showThumbs={true}
        showStatus={false}
        showArrows={true}
        infiniteLoop={false}
        axis="vertical"
      >
        {images.map(image => (
          <img src={image.url} alt="" height="200px" width="200px" />
        ))}
      </Carousel>
    );
  }
  return <p>placeholder</p>;
}
