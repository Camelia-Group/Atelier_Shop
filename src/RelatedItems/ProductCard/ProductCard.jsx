import React, {useState, useEffect} from 'react'

import Styles from '../RelatedItemsList/styles.css'

import {AiOutlineStar, AiTwotoneStar} from 'react-icons/ai'

// import
export default function ProductCard({ItemToCard}) {

// console.log('ItemToCard')

const ToggleStar = function(e) {
e.preventDefault();
}











return (<>




<div className="Card-Container">

  <div className="ItemPic"><AiOutlineStar className="star" onClick={console.log('open modal')}/><img src={ItemToCard.image}></img></div>
    <div className="OtherSpecs">
      <div className="category">{ItemToCard.category}</div>

      <div className="product-name">{ItemToCard.name}</div>
      <div className="price">{ItemToCard.price}</div>

      <div className="stars">{ItemToCard.rating}</div>


    </div>
</div>
</>)

}