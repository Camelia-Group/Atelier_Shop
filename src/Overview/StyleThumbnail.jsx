/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';

export default function StyleThumbnail({ style, setSelectedStyle, setSelectedImage }) {
  const handleClick = () => {
    setSelectedStyle(style);
    setSelectedImage(style.photos[0].url);
  };

  // still need to figure out how to overlay a checkmark on the style selected

  return (
    <img className="round-image" src={style.photos[0].thumbnail_url} onClick={handleClick} />
  );
}
