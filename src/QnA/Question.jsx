import React from 'react';
import PropTypes from 'prop-types';

function Question({ question }) {
  return (
    <div className="question">
      <span className="question-body">
        <b>{`Q: ${question.question_body}`}</b>
      </span>
    </div>
  );
}
export default Question;

Question.propTypes = {
  question: PropTypes.objectOf(PropTypes.shape({
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
  })).isRequired,
};
