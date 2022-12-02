import { React, useState } from 'react';

function QuestionSearch({questions}) {
  const [searchTerm, setSearchTerm] = useState('');
  function handleOnChange(e) {
    setSearchTerm(e.target.value);
  }
  function handleOnClick(e) {

  }
  return (
    <>
      <input type="text" onChange={handleOnChange} placeholder="Search for a question!" />
      <button type="button" onClick={handleOnClick}>Submit</button>
    </>
  )
};

export default QuestionSearch;
