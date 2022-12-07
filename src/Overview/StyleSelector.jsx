import React from 'react';
import StyleThumbnail from './StyleThumbnail.jsx';

export default function StyleSelector({ styles }) {
  const stylesSplitOne = styles.slice(0, styles.length/2);
  const stylesSplitTwo = styles.splice(styles.length/2, styles.length);
  return (
    <div>
      <div>
        {stylesSplitOne.map((style) => {
          return <StyleThumbnail style={style} />
        })}
      </div>
      <div>
        {stylesSplitTwo.map((style) => {
          return <StyleThumbnail style={style} />
        })}
      </div>
    </div>
  );
}
