/* eslint-disable import/extensions */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Rating from './RatingBreakdown/Rating.jsx';
import ReviewList from './ReviewList/ReviewList.jsx';
import Factors from './Factors/Factors.jsx';
import './Reviews.css';


export default function Reviews({productID}) {

  const [productReviews, setProductReviews] = useState([]);
  const [metaData, setMetaData] = useState();



  const getReviews = () => {
    axios.get(`/reviews/${productID}`)
    .then((result) => {
        setProductReviews(result.data);

    })
    .catch((err) => {
        console.log(err);
    });
  };

  const getMeta = () => {
    axios.get(`/reviews/meta/${productID}`)
    .then((result) => {
      setMetaData(result.data);
    })
    .catch((err) => {
        console.log(err);
    });
  };

  useEffect(() => {
    getReviews();
  }, []);

  useEffect(() => {
    getMeta();
  }, []);

  return (
    <>
      <section className="container flex">
        <div className="left">
        <Rating productReviews={productReviews}/>
        <Factors metaData={metaData}/>

        </div>

      <ReviewList reviews={productReviews}/>

      </section>
    </>
  );
}
