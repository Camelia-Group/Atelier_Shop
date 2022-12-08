import React, {useState, useEffect} from 'react';

import RelatedItemsList from './RelatedItemsList/RelatedItemsList.jsx'

import ProductCard from './ProductCard/ProductCard.jsx'

import OutfitList from './OutfitList/OutfitList.jsx'
import TestProduct from './TestProduct.jsx'

import TestOutfit from './TestOutfitItems.jsx'

export default function RelatedItems() {

// axios.get('/products', {
//   headers: {
//     'Authorization': `${}`

//   }
// })
const [linkedItems, setLinkedItems] = useState(TestProduct)
const [outfitClothes, setOutfitClothes] = useState(TestOutfit)

// console.log(linkedItems)














  return (<>
  <div>
  <h1>Related Items</h1>

  <RelatedItemsList Items={linkedItems}/>
  </div>

 <div><h1>Outfit List</h1>
  <OutfitList Outfit={outfitClothes}/></div>

  </>)










}
