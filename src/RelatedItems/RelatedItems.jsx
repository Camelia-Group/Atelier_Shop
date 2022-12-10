import React, {useState, useEffect} from 'react';

import RelatedItemsList from './RelatedItemsList/RelatedItemsList.jsx'

import ProductCard from './ProductCard/ProductCard.jsx'

import OutfitList from './OutfitList/OutfitList.jsx'
import TestProduct from './TestProduct.jsx'
import axios from 'axios'
 import TestOutfit from './TestOutfitItems.jsx'

// require('dotenv').config();
export default function RelatedItems({productId, outfitList}) {
//   let itemsList = []
productId = 37311
var relatedItemListGetter = function(productId) {console.log(process.env.URL);

  axios.get(`/related`, {params: {product_id: productId}}

).then((data)=> {console.log(data)

  // relatedItemsDetails(data.data)
}).catch((err)=> {console.log(err)})}

// var relatedItemsDetails = function(relatedItemsArray) {
//   relatedItemsArray.forEach((relatedItem) => {console.log(relatedItem.id)
// return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${relatedItem.id}`, {

//       headers: {

// 'Authorization': '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'

// }

//     }).then((data)=> {
//      console.log(data)
//     })})

//   }













const [linkedItems, setLinkedItems] = useState(TestProduct)
const [outfitClothes, setOutfitClothes] = useState(TestOutfit)

// console.log(linkedItems)












relatedItemListGetter(productId)

  return (<>
  <div>
  <h1>Related Items</h1>

  <RelatedItemsList Items={linkedItems}/>
  </div>

 <div><h1>Outfit List</h1>
  <OutfitList Outfit={outfitClothes}/></div>

  </>)










}
