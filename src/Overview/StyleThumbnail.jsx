/* eslint-disable react/prop-types */
import React from 'react';

export default function StyleThumbnail({ style }) {
  return (
    <img className="round-image" src={style.photos[0].thumnail_url} alt="Style thumbnail" />
  );
}
