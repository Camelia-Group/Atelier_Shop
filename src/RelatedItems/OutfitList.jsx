import React, {useState, useEffect} from 'react'

import ProductCard from './ProductCard.jsx'








export default function OutfitList({Outfit}) {

return (<>
<div className="List-Container OutfitList">
  <div className="Add-Items">

    <button onClick="">Add to Outfit</button>
  </div>

  {Outfit.map((OutfitItem)=> {
  <ProductCard ItemtoCard={OutfitItem}/>


})}</div>
</>)



}