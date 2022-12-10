/* eslint-disable import/extensions */
import React from 'react';
import Rating from './RatingBreakdown/Rating.jsx';
import Tiles from './ReviewList/Tiles.jsx';
import Factors from './Factors/Factors.jsx';
// import './Reviews.css';

export default function Reviews() {
  return (
    <>
      <section className="container flex">
        <div className="left">
        <div className="one">Rating:<Rating /></div>
        <div className="three">Factors:<Factors /></div>

        </div>

        <div className="two">ReviewList:<Tiles /></div>


      </section>
      <div>Hello </div>
    </>
  );
}
