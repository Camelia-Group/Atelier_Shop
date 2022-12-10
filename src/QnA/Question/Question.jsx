import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Question.css';

function Question({ question, addAnswer }) {
  const [answerRenderCount, setAnswerRenderCount] = useState(2);
  let answersSorted = [];
  const answerKeys = Object.keys(question.answers);
  const checkSort = (currAnswers) => {
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
    if (returned.length === 1) {
      return returned;
    }
    for (let i = 0; i < returned.length - 1; i += 1) {
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
  answersSorted = sortAnswers(answersSorted);

  const renderedAnswers = answersSorted.slice(0, answerRenderCount);

  const parseDate = (date) => {
    const year = date.slice(0, 4);
    let month = date.slice(5, 7);
    const day = date.slice(8, 10);
    switch (month) {
      case '01':
        month = 'January';
        break;
      case '02':
        month = 'Febuary';
        break;
      case '03':
        month = 'March';
        break;
      case '04':
        month = 'April';
        break;
      case '05':
        month = 'May';
        break;
      case '06':
        month = 'June';
        break;
      case '07':
        month = 'July';
        break;
      case '08':
        month = 'August';
        break;
      case '09':
        month = 'September';
        break;
      case '10':
        month = 'October';
        break;
      case '11':
        month = 'November';
        break;
      case '12':
        month = 'December';
        break;
      default:
        break;
    }
    return `${month} ${day}, ${year}`;
  };

  return (
    <div className="question">
      <div className="question-body-container">
        <div className="question-body">
          <b>
            Q:
          </b>
          <span className="question-body-text">
            <b>{question.question_body}</b>
          </span>
        </div>
        <div className="question-helpful-container">
          <span>
            Helpful?&nbsp;
            <button onClick={() => {}} className="question-helpful-btn" type="button">
              <u>Yes</u>
              {`(${question.question_helpfulness})`}
            </button>
          </span>
          <span>
            &nbsp;|&nbsp;
            <button onClick={() => { addAnswer(question.question_id); }} className="question-helpful-btn" type="button">
              <u>Add Answer</u>
            </button>
          </span>

        </div>
      </div>

      <div className="question-answer-body">
        {
          renderedAnswers.map((answer) => (
            <div key={answer.id}>
              <div>
                <b>
                  A:
                </b>
                <span className="question-answer-body-text">{answer.body}</span>
              </div>

              <div className="question-answer-footer-container">
                <span>
                  by
                  {answer.answerer_name === 'Seller' ? <b>&nbsp;Seller</b> : ` ${answer.answerer_name}`}
                  ,&nbsp;
                  {
                  parseDate(answer.date)
                  }
                  &nbsp;|
                </span>
                <span>
                  &nbsp;Helpful?&nbsp;
                  <button onClick={() => {}} className="question-answer-helpful-btn" type="button">
                    <u>Yes</u>
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
              <div className="question-answer-more-container">
                {
                  answerKeys.length > 2 ? <button type="button" className="question-answer-more">LOAD MORE ANSWERS</button> : null
                }

              </div>
            </div>
          ))
        }

      </div>
    </div>
  );
}
export default Question;

Question.propTypes = {
  question: PropTypes.shape({
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
  }).isRequired,

};
