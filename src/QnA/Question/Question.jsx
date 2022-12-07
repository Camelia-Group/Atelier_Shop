import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Question.css';

function Question({ question }) {
  const [answerRenderCount, setAnswerRenderCount] = useState(1);
  let answersSorted = [];
  const answerKeys = Object.keys(question.answers);
  const checkSort = (currAnswers) => {
    // console.log('current Answers', currAnswers);
    if (currAnswers.length === 1) {
      return true;
    }
    for (let i = 0; i < currAnswers.length - 1; i += 1) {
      if (currAnswers[i].helpfulness < currAnswers[i + 1].helpfulness) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < answerKeys.length; i += 1) {
    answersSorted.push(question.answers[answerKeys[i]]);
  }

  const sortAnswers = (currAnswers) => {
    const returned = currAnswers;
    // console.log('RETURNED VAL', returned);
    if (returned.length === 1) {
      return returned;
    }
    for (let i = 0; i < returned.length - 1; i += 1) {
      // console.log(returned);
      if (returned[i].helpfulness < returned[i + 1].helpfulness) {
        const swapped = returned[i];
        returned[i] = returned[i + 1];
        returned[i + 1] = swapped;
      }
    }
    if (checkSort(returned)) {
      return returned;
    }
    return sortAnswers(returned);
  };
  // console.log('PASSED SORTED', answersSorted);
  answersSorted = sortAnswers(answersSorted);

  const renderedAnswers = answersSorted.slice(0, answerRenderCount);
  return (
    <div className="question">
      <div className="question-body-container">
        <div className="question-body">
          <b>{`Q: ${question.question_body}`}</b>
        </div>
        <div className="question-helpful-container">
          <span>
            Helpful?&nbsp;
            <button onClick={() => {}} className="question-helpful-btn" type="button">
              Yes
              {`(${question.question_helpfulness})`}
            </button>
          </span>
          <span>
            &nbsp;|&nbsp;
            <button onClick={() => {}} className="question-helpful-btn" type="button">
              <u>Add Answer</u>
            </button>
          </span>

        </div>
      </div>

      <div className="question-answer-body">
        {
          renderedAnswers.map((answer) => {
            console.log(answer);
            return (
              <div>
                <div>
                  <b>
                    {`A: ${answer.body}`}
                  </b>
                </div>

                <div className="question-answer-footer-container">
                  <span>
                    by
                    {console.log(answer, 'answer')}
                    {answer.answerer_name === 'Seller' ? <b>&nbsp;Seller</b> : answer.answerer_name}
                    &nbsp;|
                  </span>
                  <span>
                    &nbsp;Helpful?&nbsp;
                    <button onClick={() => {}} className="question-answer-helpful-btn" type="button">
                      Yes
                      {`(${answer.helpfulness})`}
                      &nbsp;
                    </button>
                  </span>
                  <span>
                    | &nbsp;
                    <button onClick={() => {}} className="question-answer-helpful-btn" type="button">
                      <u>Report</u>
                    </button>
                  </span>
                </div>
                <div>
                  {
                    answerKeys > 1 ? <button type="button" className="question-answer-more">LOAD MORE ANSWERS</button> : null
                  }

                </div>
              </div>
            );
          })
        }

      </div>
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
