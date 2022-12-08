import React, { useState } from 'react';
import QuestionSearch from '../QuestionSearch/QuestionSearch.jsx';
import QuestionList from '../QuestionList/QuestionList.jsx';
import './QnA.css';
import Modal from '../Modal/Modal.jsx';

export default function QnA() {
  // const [questions, setQuestions] = useState();
  const [questionModalIsOpen, setQuestionModalIsOpen] = useState(false);
  const [answerModalIsOpen, setAnswerModalIsOpen] = useState(false);
  const questions = [{
    question_id: 37,
    question_body: 'Why is this product cheaper here than other sites?',
    question_date: '2018-10-18T00:00:00.000Z',
    asker_name: 'williamsmith',
    question_helpfulness: 4,
    reported: false,
    answers: {
      68: {
        id: 68,
        body: 'We are selling it here without any markup from the middleman!',
        date: '2018-08-18T00:00:00.000Z',
        answerer_name: 'Seller',
        helpfulness: 4,
        photos: [],
      },
    },
  },
  {
    question_id: 38,
    question_body: 'How long does it last?',
    question_date: '2019-06-28T00:00:00.000Z',
    asker_name: 'funnygirl',
    question_helpfulness: 2,
    reported: false,
    answers: {
      70: {
        id: 70,
        body: 'Some of the seams started splitting the first time I wore it!',
        date: '2019-11-28T00:00:00.000Z',
        answerer_name: 'sillyguy',
        helpfulness: 6,
        photos: [],
      },
      78: {
        id: 78,
        body: '9 lives',
        date: '2019-11-12T00:00:00.000Z',
        answerer_name: 'iluvdogz',
        helpfulness: 31,
        photos: [],
      },
    },
  },
  ];

  const [renderSearch, setRenderSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([{}]);
  const [showMoreAnswers, setShowMoreAnswers] = useState(false);

  // const handleClose = (inputs) => {
  //   if (input) {

  //   }
  // };
  const addQuestion = () => {
    setQuestionModalIsOpen(true);
  };
  const addAnswer = () => {
    setAnswerModalIsOpen(true);
  };
  return (
    <div className="questions-answers-container">
      <Modal
        isOpen={questionModalIsOpen}
        typeOfModal="question"
        close={() => { setQuestionModalIsOpen(false); }}
      />
      <Modal
        isOpen={answerModalIsOpen}
        typeOfModal="answer"
        close={() => { setAnswerModalIsOpen(false); }}
      />

      <h2 className="questions-answers-header">Questions & Answers</h2>
      <QuestionSearch
        setRenderSearch={setRenderSearch}
        setSearchResults={setSearchResults}
      />

      {
        renderSearch ? (
          <QuestionList
            questions={searchResults}
            showMoreAnswers={showMoreAnswers}
            setShowMoreAnswers={setShowMoreAnswers}
            addQuestion={addQuestion}
            addAnswer={addAnswer}
          />
        ) : (
          <QuestionList
            questions={questions}
            addQuestion={addQuestion}
            addAnswer={addAnswer}
          />
        )
      }
    </div>

  );
}
