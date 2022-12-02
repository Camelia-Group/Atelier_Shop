import { React, useState } from 'react';

function QuestionSearch({setRenderSearch, searchResults, questions}) {
  const [searchTerm, setSearchTerm] = useState('');
  function handleOnChange(e) {
    setSearchTerm(e.target.value);
  }
  function handleOnClick(e) {
    setRenderSearch(true);

  }
  return (
    <>
      <input type="text" onChange={handleOnChange} placeholder="Search for a question!" />
      <button type="button" onClick={handleOnClick}>Submit</button>
    </>
  );
};

export default QuestionSearch;
