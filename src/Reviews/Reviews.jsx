/* eslint-disable import/extensions */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Rating from './RatingBreakdown/Rating.jsx';
import Tiles from './ReviewList/Tiles.jsx';
import Factors from './Factors/Factors.jsx';
import './Reviews.css';


export default function Reviews({productID}) {

  const [productReviews, setProductReviews] = useState([]);
  // const [meta, setMeta] = useState({});



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

  // const getMeta = () => {
  //   axios.get(`/reviews/meta/${productID}`)
  //   .then((result) => {
  //       setMeta(result.data);
  //       // console.log(result.data);
  //   })
  //   .catch((err) => {
  //       console.log(err);
  //   });
  // };

  useEffect(() => {
    getReviews();
  }, []);

  // useEffect(() => {
  //   getMeta();
  // }, []);

  return (
    <>
      <section className="container flex">
        <div className="left">
        <Rating productReviews={productReviews}/>
        <Factors/>

        </div>

       <Tiles productReviews={productReviews}/>


      </section>
    </>
  );
}
