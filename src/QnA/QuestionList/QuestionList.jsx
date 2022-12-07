import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Question from './Question.jsx';

function QuestionList({ questions }) {
  const [questionRenderCount, setQuestionRenderCount] = useState(2);

  let questionsSorted = [];
  const questionKeys = Object.keys(questions);
  const checkSort = (currQuestions) => {
    console.log('current Questions', currQuestions);
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
    console.log('RETURNED VAL Q', returned);
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
      console.log('ARRAY SORTED TRUE', returned);
      return returned;
    }
    return sortQuestions(returned);
  };
  console.log('PASSED SORTED Q', questionsSorted);
  questionsSorted = sortQuestions(questionsSorted);

  const renderedQuestions = questionsSorted.slice(0, questionRenderCount);
  return (
    <div className="question-list">
      {
        renderedQuestions.map((question) => <Question key={question.id} question={question} />)
      }
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
