/* eslint-disable import/extensions */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Rating from './RatingBreakdown/Rating.jsx';
import Tiles from './ReviewList/Tiles.jsx';
import Factors from './Factors/Factors.jsx';
import './Reviews.css';


export default function Reviews({productID, metaData}) {

  const [productReviews, setProductReviews] = useState([]);
  const [meta, setMeta] = useState({});

  const getReviews = () => {
    axios.get(`/reviews/${productID}`)
    .then((result) => {
        setProductReviews(result.data);
        // console.log(result.data);
    })
    .catch((err) => {
        console.log(err);
    });
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <>
      <section className="container flex">
        <div className="left">
        <Rating productReviews={productReviews}/>
        <Factors meta={meta}/>

        </div>

       <Tiles productReviews={productReviews}/>


      </section>
    </>
  );
}
