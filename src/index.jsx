import React from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './Overview/Overview.jsx';
import QnA from './QnA/QnA.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';

const root = createRoot(document.getElementById('root'));

// Huzzah for jsx!
function App() {
  return (
    <div>
      <div><Overview /></div>
      <div><QnA /></div>
      <div><RelatedItems /></div>
    </div>
  );
}

root.render(<App />);
