import React from 'react';
import StyleThumbnail from './StyleThumbnail.jsx';

export default function StyleSelector({ styles }) {
  console.log(styles);
  return (
    <div>
      {styles.map((style) => {
        return <StyleThumbnail style={style} />
      })}
    </div>
  );
}
