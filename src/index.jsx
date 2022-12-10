/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React, {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './Overview/Overview.jsx';

import RelatedItems from './RelatedItems/RelatedItems.jsx';
import Reviews from './Reviews/Reviews.jsx';
// import QnA from './QnA/QnA.jsx';
const root = createRoot(document.getElementById('root'));

// Huzzah for jsx!
export function App({productId, outfitList}) {
  // const [productId, setProductId] = useState(37311)
  // const [outfitList, setOutfitList] = useState(outfitList || [])
  return (
    <div>
      <div><Overview /></div>

      <div><RelatedItems productid={productId} outfitList={outfitList}/></div>
      <div><Reviews /></div>
    </div>
  );
}

root.render(<App />);
