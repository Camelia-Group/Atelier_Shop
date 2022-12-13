import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Question.css';
import axios from 'axios';
import { render } from 'react-dom';

function Question({ question, addAnswer }) {
  const [answerRenderCount, setAnswerRenderCount] = useState(2);
  const [showMore, setShowMore] = useState([]);
  const [checkForCollapse, setCheckForCollapse] = useState(false);

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

  const handleHelpfulAnswer = (id) => {
    axios.post(`http://localhost:3000/answers/${id}/helpful`)
      .then(() => {
        // eslint-disable-next-line max-len
        document.getElementById(id).innerHTML = parseInt(document.getElementById(id).innerHTML, 10) + 1;
        alert('helpful success')
      })
      .catch((err) => { console.error(err); });
  };
  const handleHelpfulQuestion = () => {
    axios.post(`http://localhost:3000/question/${question.question_id}/helpful`)
      .then(() => {
        // eslint-disable-next-line max-len
        document.getElementById(question.question_id).innerHTML = parseInt(document.getElementById(question.question_id).innerHTML, 10) + 1;
      })
      .catch((err) => { console.error(err); });
  };

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
        month = 'February';
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

  useEffect(() => {
    if (answersSorted.length > 2) {
      setShowMore([true, 'more']);
    }
    // setCheckForCollapse(true);
  }, []);

  return (
    <div id={`q${question.question_id}`} className="question">
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
            <button onClick={() => {handleHelpfulQuestion()}} className="question-helpful-btn" type="button">
              <u>Yes</u>
              (
              <span id={question.question_id}>{question.question_helpfulness}</span>
              )
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
          renderedAnswers.map((answer, index) => {
            if (JSON.stringify(answer) === JSON.stringify(answersSorted[answersSorted.length - 1]) && showMore[0] === true && showMore[1] === 'more') {
              setShowMore([true, 'collapse']);
            }

            console.log(index, answersSorted.length - 1, answerRenderCount)

            return (
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
                    <button onClick={() => {handleHelpfulAnswer(answer.id)}} className="question-answer-helpful-btn" type="button">
                      <u>Yes</u>
                      (
                      <span id={`${answer.id}`}>{answer.helpfulness}</span>
                      )
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
                <div id={`m${question.question_id}`} className="question-answer-more-container">
                  {
                    showMore[0] === true && showMore[1] === 'more' && index === renderedAnswers.length - 1 ? (
                      <button
                        onClick={() => {
                          // (index === answerRenderCount - 1 || index === answerRenderCount - 2) &&
                          setAnswerRenderCount(answerRenderCount + 2);
                        }}
                        type="button"
                      >
                        LOAD MORE
                      </button>
                    ) : null
                  }

                  {
                    showMore[0] === true && showMore[1] === 'collapse' && index === renderedAnswers.length - 1 ? (
                      <button onClick={() => { setShowMore([true, 'more']); setAnswerRenderCount(2); }} type="button">COLLAPSE</button>
                    ) : null
                  }

                </div>
              </div>
            )
          })
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
