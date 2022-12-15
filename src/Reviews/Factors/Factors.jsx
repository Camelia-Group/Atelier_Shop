import React, {useState} from 'react';
import './Factors.css';

export default function Factors({metaData}) {


  const [characteristicsMeaning] = useState(() => ({
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
  }));

  function calcPercent(val) {
    return Math.floor(parseFloat(val) * 20);
  }

  return (

    <div className="ratings-product-breakdown">
      {metaData && Object.keys(metaData.characteristics).map((characteristic, i) => (
        <div key={i} id={`${characteristic}-breakdown`}>
          <div>{characteristic}</div>
          <div className="factor-bar">
            <div className="down-arrow-bar"> ▼ </div>
          </div>
          <div className="first-and-last-char">
            <div className="first-char">{characteristicsMeaning[characteristic][0]}</div>
            <div className="last-char">{characteristicsMeaning[characteristic][4]}</div>
          </div>
        </div>
      ))}
    </div>
  );


};
