import React, {useState, useEffect} from 'react'

export default function ProductCard({RelatedItem}) {






return ( <>

  <div >{RelatedItem.name}</div>
  <div>{RelatedItem.category}</div>
  <div>{RelatedItem.price}</div>
  <div><img src={RelatedItem.image}/></div>


    </>)







}