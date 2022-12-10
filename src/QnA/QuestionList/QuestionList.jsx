import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Question from '../Question/Question.jsx';
import './QuestionList.css';

function QuestionList({ questions, addQuestion, addAnswer }) {
  const [questionRenderCount, setQuestionRenderCount] = useState(4);

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

  const renderedQuestions = questionsSorted.slice(0, questionRenderCount);
  if (questions.length === 0) {
    return <p>Loading Questions</p>;
  }
  return (
    <div className="question-list">
      {
        renderedQuestions.map((question) => (
          <Question key={question.question_id} question={question} addAnswer={addAnswer} />
        ))
      }
      <div className="question-list-buttons">
        <button type="button">MORE ANSWERED QUESTIONS</button>
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