import React, {useState, useEffect} from 'react'

import ProductCard from '../ProductCard/ProductCard.jsx'

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

import './styles.css'
export default function RelatedItemsList({Items}) {
  const [relatedItems, setRelatedItems] = useState(Items)
const [current, setCurrent] = useState(0)// const [relatedItems, setRelatedItems] = useState([])

const length = Items.length







return (<>
<div className="Container">




<div className="List-Container RelatedItems">
  <FaArrowAltCircleLeft className='leftArrow'/>

  <FaArrowAltCircleRight className='rightArrow'/>

  {relatedItems.map((Item, index)=> {

   return(<> <ProductCard ItemToCard={Item}/></>)
  })} </div></div>






</>)





}