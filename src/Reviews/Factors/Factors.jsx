import React from 'react';
import './Factors.css';
export default function Factors({meta}) {

  // const chart = {
  //   Size: { first: 'Too Small', third: 'Perfect', fifth: 'Too Wide' },
  //   Width: { first: 'Too Narrow', third: 'Perfect', fifth: 'Too Wide' },
  //   Comfort: { first: 'Uncomfortable', third: 'Ok', fifth: 'Perfect' },
  //   Quality: { first: 'Poor', third: 'What I Expected', fifth: 'Perfect' },
  //   Length: { first: 'Runs Short', third: 'Perfect', fifth: 'Runs Long' },
  //   Fit: { first: 'Runs Tight', third: 'Perfect', fifth: 'Runs Long' }
  // };

  return(
    <>

 <h1>Factors</h1>
 <p>size</p>
 {/* <h5>{meta}</h5> */}
 <p>width</p>
 <p>comfort</p>
<p>length</p>
    </>
  )
};

{/* <h5>Characteristics:</h5>
      {Object.entries(chart.Characteristics).map((char, i) => (
        <div key={i}>

          <div >
              <option value="1"></option>
              <option value="5"></option>
          </div>
        </div>
      ))} */}