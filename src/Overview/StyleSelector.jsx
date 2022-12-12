/* eslint-disable max-len */
/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import StyleThumbnail from './StyleThumbnail.jsx';

export default function StyleSelector({ styles, selectedStyle, setSelectedStyle, setSelectedImage }) {
  console.log('style:', selectedStyle);
  const stylesSplitOne = styles.slice(0, styles.length / 2);
  const stylesSplitTwo = styles.slice(styles.length / 2, styles.length);
  return (
    <div>
      <div>
        {stylesSplitOne.map((style) => {
          return <StyleThumbnail style={style} setSelectedStyle={setSelectedStyle} setSelectedImage={setSelectedImage} />;
        })}
      </div>
      <div>
        {stylesSplitTwo.map((style) => {
          return <StyleThumbnail style={style} setSelectedStyle={setSelectedStyle} setSelectedImage={setSelectedImage} />;
        })}
      </div>
    </div>
  );
}
