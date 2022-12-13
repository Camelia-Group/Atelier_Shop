/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React, {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './Overview/Overview.jsx';
import QnA from './QnA/QnA/QnA.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import Reviews from './Reviews/Reviews.jsx';

const root = createRoot(document.getElementById('root'));


function App() {

  const [productID, setProductID] = useState(37311);


  return (
    <div>
      <div><Overview /></div>
      <div><QnA /></div>
      <div><RelatedItems /></div>
      <div><Reviews /></div>
    </div>
  );
}

root.render(<App />);
