import React, {useState, useEffect} from 'react'

import ProductCard from './ProductCard.jsx'




export default function RelatedItemsList({Items}) {
  const [showModal, setShowModal] = useState(false)
// const [relatedItems, setRelatedItems] = useState([])









return (<>
<div className="List-Container RelatedItems">
  {Items.map((Item)=> {
    <ProductCard ItemToCard={Item}/>
  })} </div>






</>)





}