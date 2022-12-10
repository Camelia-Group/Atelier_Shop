import React, {useState, useEffect} from 'react'

import ProductCard from '../ProductCard/ProductCard.jsx'

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

import './styles.css'
import axios from 'axios'




export default function RelatedItemsList({Items}) {
  const [relatedItems, setRelatedItems] = useState(Items)
const [current, setCurrent] = useState(0)// const [relatedItems, setRelatedItems] = useState([])


const length = Items.length










return (<>
<div className="ContainerPlace">




<div className="List-Container RelatedItems">
<div className="TheArrows LeftArrow"><FaArrowAltCircleLeft className='leftAIcon'/> </div>



  {relatedItems.map((Item, index)=> {

   return(<> <ProductCard ItemToCard={Item}/></>)
  })} </div><div className="TheRightArrows"><FaArrowAltCircleRight className='rightAIcon' /> </div></div>






</>)





}