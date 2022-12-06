import React from 'react';
import Tile from './Tile.jsx'
import Sorting from './Sorting.jsx';
import Modal from '../newReview/Modal.jsx';

export default function Tiles() {
  return (
    <>
    <div>
      <Sorting />
      <Tile />
      <Tile />
      <div>
      <button>More reviews</button>
      <Modal />
      </div>
      </div>
    </>
  )
}