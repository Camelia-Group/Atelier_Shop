import React, {useState, useEffect} from 'react';

import RelatedItemsList from './RelatedItemsList.jsx'

import Product Card from './ProductCard.jsx'

import OutfitList from './OutfitList.jsx'




export default function RelatedItems() {

// axios.get('/products', {
//   headers: {
//     'Authorization': `${}`

//   }
// })


















  return (<>
  <div>
  <h1>Related Items</h1>

  <RelatedItemsList/>
  </div>

 <div><h1>Outfit List</h1>
  <OutfitList /></div>

  </>)










}
