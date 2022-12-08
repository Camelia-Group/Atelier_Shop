import React, {useState, useEffect} from 'react'

import ProductCard from '../ProductCard/ProductCard.jsx'

import {AiOutlinePlusCircle} from 'react-icons/ai'

import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'
import '../RelatedItemsList/styles.css'
import TestOutfitItem from '../TestOutfitItemToAdd.jsx'
// className='leftArrow'

export default function OutfitList({Outfit}) {
const [listOfOutfitItems, setListofOutfitItems] = useState(Outfit)
return (<>
<div className="Container">
<div className="List-Container OutfitList">





  <FaArrowAltCircleLeft className='leftA'/> <div className="Add-Items">

    <div><button id="outfit-adder" onClick={(e) => {e.preventDefault(); console.log(TestOutfitItem); setListofOutfitItems([...listOfOutfitItems, TestOutfitItem])}}><AiOutlinePlusCircle class="add-Icon"/></button></div>
  </div>

  {listOfOutfitItems.map((OutfitItem, index)=> {

  return(<><ProductCard ItemToCard={OutfitItem}/></>)

})}<FaArrowAltCircleRight className='rightA'/></div></div>

</>)



}