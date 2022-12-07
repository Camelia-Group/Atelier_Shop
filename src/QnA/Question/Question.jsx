import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Question({ question }) {
  const [answerRenderCount, setAnswerRenderCount] = useState(1);
  const helpfulQuestionStyles = {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
    font: 'inherit',
    outline: 'inherit',
  };
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
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', border: '1px solid black' }}>
        <div className="question-body" style={{border: '1px solid black'}}>
          <b>{`Q: ${question.question_body}`}</b>
        </div>
        <div style={{ fontSize: '10px', border: '1px solid black', marginTop: '-5px' }}>
          <p>
            Helpful?&nbsp;
            <button onClick={() => {}} style={helpfulQuestionStyles} type="button">
              Yes
              {`(${question.question_helpfulness})`}
            </button>
          </p>
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

                <div style={{ fontSize: '10px', border: '1px solid black', marginTop: '-11px', height: '20px' }}>
                  <p>
                    Helpful?&nbsp;
                    <button onClick={() => {}} style={helpfulQuestionStyles} type="button">
                      Yes
                      {`(${answer.helpfulness})`}
                    </button>
                  </p>
                </div>
                <div style={{fontSize: '10px'}}>
                  {
                    answerKeys > 1 ? <button type="button" style={helpfulQuestionStyles}>LOAD MORE ANSWERS</button> : null
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
