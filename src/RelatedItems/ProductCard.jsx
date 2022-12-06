import React, {useState, useEffect} from 'react'

import Styles from './styles.css'




export default function ProductCard({ItemToCard}) {

















return (<>




<div className="Card-Container">

  <div className="ItemPic"></div>
    <div className="OtherSpecs">
      <div className="category">{ItemToCard.category}</div>

      <div className="product-name">{ItemToCard.name}</div>
      <div className="price">{ItemToCard.price}</div>

      <div className="stars">{ItemToCard.rating}</div>


    </div>
</div>
</>)

}