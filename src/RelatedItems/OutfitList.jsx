import React, {useState, useEffect} from 'react'

import ProductCard from './ProductCard.jsx'








export default function OutfitList({Outfit}) {

return (<>
<div className="List-Container OutfitList">{Outfit.map((OutfitItem)=> {
  <ProductCard ItemtoCard={OutfitItem}/>


})}</div>
</>)



}