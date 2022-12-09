/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function ImageViewer({ selectedStyle }) {
  console.log(selectedStyle);

  // if (selectedStyle.photos !== undefined) {
  //   return (
  //     <img src={selectedStyle.photos[0].url} alt="" className="full_image" />
  //   );
  // } else {
  //   return <p>Img viewer</p>;
  // }

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  if (selectedStyle.photos !== undefined) {
    return (
      <div className="test">
        <img src={selectedStyle.photos[0].url} style={{cursor: 'pointer'}} onClick={handleExpandClick} className="full_image"/>
        {isExpanded && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              zIndex: 999
            }}
            onClick={handleExpandClick}
          >
            <img src={selectedStyle.photos[0].url} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 'max-height': '80%', 'max-width': '80%' }} />
          </div>
      )}
      </div>
    );
  } else {
    return <p>Img viewer</p>;
  }
}
