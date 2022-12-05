import React, {useState, useEffect} from 'react';

import RelatedItemsList from './RelatedItemsList.jsx'

import OutfitList from './OutfitList.jsx'






export default function RelatedItems({PropOfRelatedItems}) {
  const [relatedItems, setRelatedItems] = useState([])
  const [outfitItems, setOutfitItems] = useState([])
  //a get request should be sent to retrieve the related items associated with the item rendered in proiduct overview
  //a get request will then be sent to retrieve each item and its specs


  return (<><h1>Related Items</h1>

  <div>
  <RelatedItemsList RelatedItems={PropOfRelatedItems}/>
  <OutfitList outfitsItems={outfitItems}/>

  </div>

  </>
  )

}
