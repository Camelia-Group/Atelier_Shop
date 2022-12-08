import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './QuestionSearch.css';

function QuestionSearch({ setRenderSearch, setSearchResults, questions }) {
  const [searchTerm, setSearchTerm] = useState('');
  function handleOnChange(e) {
    setSearchTerm(e.target.value);
  }
  function handleOnClick() {
    setRenderSearch(true);
    setSearchResults(questions.filter((question) => question.question_body.includes(searchTerm)));
  }
  return (
    <>
      <input type="text" onChange={handleOnChange} placeholder="Search for a question!" />
      <button type="button" onClick={handleOnClick}>Submit</button>
    </>
  );
}

// QuestionSearch.propTypes = {
//   questions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
//     question_body: PropTypes.string.isRequired,
//     question_date: PropTypes.string.isRequired,
//     asker_name: PropTypes.string.isRequired,
//     question_helpfulness: PropTypes.number.isRequired,
//     reported: PropTypes.bool.isRequired,
//     answers: PropTypes.objectOf(PropTypes.shape({
//       body: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//       answerer_name: PropTypes.string.isRequired,
//       helpfulness: PropTypes.number.isRequired,
//       photos: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number,
//         url: PropTypes.string,
//       })),
//     })),
//   }))).isRequired,
//   setRenderSearch: PropTypes.func.isRequired,
//   setSearchResults: PropTypes.func.isRequired,
// };

export default QuestionSearch;
