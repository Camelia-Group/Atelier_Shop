import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question.jsx';

function QuestionList({ questions }) {
  return (
    <div className="question-list">
      {
        questions.map((question) => <Question key={question.id} question={question} />)
      }
    </div>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
    question_id: PropTypes.number.isRequired,
    question_body: PropTypes.string.isRequired,
    question_date: PropTypes.string.isRequired,
    asker_name: PropTypes.string.isRequired,
    question_helpfulness: PropTypes.number.isRequired,
    reported: PropTypes.bool.isRequired,
    answers: PropTypes.objectOf(PropTypes.shape({
      body: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      answerer_name: PropTypes.string.isRequired,
      helpfulness: PropTypes.number.isRequired,
      photos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        url: PropTypes.string,
      })),
    })),
  }))).isRequired,
  setRenderSearch: PropTypes.func.isRequired,
  setSearchResults: PropTypes.func.isRequired,
};

export default QuestionList;
