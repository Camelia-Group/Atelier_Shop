import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import './QuestionSearch.css';
import icon from './../Images/search.png'

function QuestionSearch({ setRenderSearch, setSearchResults, questions }) {
  const [searchTerm, setSearchTerm] = useState('');
  function handleOnChange(e) {
    if (e.target.value.length >= 3) {
      setSearchTerm(e.target.value);
    } else {
      setRenderSearch(false);
    }
  }
  function checkAnswers(answers) {
    var vals = Object.keys(answers);
    for (var i = 0; i < vals.length; i += 1) {
      if (answers[vals[i]].body.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
    }
    return false;
  }
  useEffect(() => {
    if (searchTerm.length >= 3) {
      var results = questions.filter(question => question.question_body.toLowerCase().includes(searchTerm.toLowerCase()) || checkAnswers(question.answers));
      setRenderSearch(true);
      setSearchResults(results)
    }
  }, [searchTerm])
  return (
    <div className="search-container">
      <input type="text" onChange={handleOnChange} placeholder="Have a question? Search for answers…" />
      <button type="button">
        <img src={icon} className="search-icon" alt="Search Icon" />
      </button>
    </div>
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
