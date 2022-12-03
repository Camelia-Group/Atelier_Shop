import React from 'react';
import { createRoot } from 'react-dom/client';
// import Overview from './Overview/Overview';
import QnA from './QnA/QnA';
// import RelatedItems from './RelatedItems/RelatedItems';
// import Reviews from './Reviews/Reviews';

const root = createRoot(document.getElementById('root'));

// Huzzah for jsx!
function App() {
  return (
    <div>
      {/* <div><Overview /></div> */}
      <div><QnA /></div>
      {/* <div><RelatedItems /></div> */}
      {/* <div><Reviews /></div> */}
    </div>
  );
}

root.render(<App />);
