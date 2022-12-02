import React from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './Overview/Overview.jsx';

const root = createRoot(document.getElementById('root'));

// Huzzah for jsx!
function App() {
  return (
    <div><Overview /></div>
  );
}

root.render(<App />);
