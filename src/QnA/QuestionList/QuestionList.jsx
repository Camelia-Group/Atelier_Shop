import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import Question from '../Question/Question.jsx';
import './QuestionList.css';

function QuestionList({ questions, addQuestion, addAnswer, isSearch }) {
  const [questionRenderCount, setQuestionRenderCount] = useState(4);
  const [showMore, setShowMore] = useState([]);
  let hasRendered = false;
  let questionsSorted = [];
  const questionKeys = Object.keys(questions);
  const checkSort = (currQuestions) => {
    if (currQuestions.length === 1) {
      return true;
    }
    for (let i = 0; i < currQuestions.length - 1; i += 1) {
      if (currQuestions[i].question_helpfulness < currQuestions[i + 1].question_helpfulness) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < questionKeys.length; i += 1) {
    questionsSorted.push(questions[questionKeys[i]]);
  }

  const sortQuestions = (currQuestions) => {
    const returned = currQuestions;
    if (returned.length === 1) {
      return returned;
    }
    for (let i = 0; i < returned.length - 1; i += 1) {
      if (returned[i].question_helpfulness < returned[i + 1].question_helpfulness) {
        const swapped = returned[i];
        returned[i] = returned[i + 1];
        returned[i + 1] = swapped;
      }
    }
    if (checkSort(returned)) {
      return returned;
    }
    return sortQuestions(returned);
  };
  questionsSorted = sortQuestions(questionsSorted);

  useEffect(() => {
    if (questionsSorted.length > 4 && showMore.length === 0) {
      setShowMore([true, 'more'])
    }

  }, [questionsSorted])
  const renderedQuestions = questionsSorted.slice(0, questionRenderCount);

  return (
    <div className="question-list">
      {
        questions.length > 0 ? renderedQuestions.map((question, index) => {
          if (JSON.stringify(question) === JSON.stringify(questionsSorted[questionsSorted.length - 1]) && showMore[0] === true && showMore[1] === 'more' && !isSearch && index > 3) {
            setShowMore([true, 'collapse']);
          } else if (isSearch && showMore[0] === true && showMore[1] === 'more' && hasRendered === false && JSON.stringify(question) === JSON.stringify(questionsSorted[questionsSorted.length - 1]) && index > 3) {
            hasRendered = true;
            setShowMore([true, 'collapse']);
          } else if (isSearch && showMore.length) {
            setShowMore([]);
          }
          return (
          <Question key={question.question_id} question={question} addAnswer={addAnswer} />
          );
        }) : isSearch === true && questions.length === 0 ? (<p>No search results...</p>) : (<p>Loading questions</p>)
      }
      <div className="question-list-buttons">
        {
          showMore[0] === true && showMore[1] === 'more' ? (
            <button
              className="question-list-buttons-more"
              onClick={() => {
                setQuestionRenderCount(questionRenderCount + 2);
              }}
              type="button"
            >
              MORE ANSWERED QUESTIONS
            </button>
          ) : null
        }

        {
          showMore[0] === true && showMore[1] === 'collapse' ? (
            <button className="question-list-buttons-collapse" onClick={() => { setShowMore([true, 'more']); setQuestionRenderCount(4); }} type="button">COLLAPSE</button>
          ) : null
        }
        <button type="button" onClick={() => { addQuestion(); }}>
          ADD A QUESTION
          &nbsp;&nbsp;
          <span style={{ fontSize: '15px', marginTop: '3px' }}>+</span>
        </button>
      </div>
    </div>
  );
}
export default QuestionList;

// QuestionList.propTypes = {
//   questions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
//     question_id: PropTypes.number.isRequired,
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
// };
