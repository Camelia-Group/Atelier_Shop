import React, { useState } from 'react';
import QuestionSearch from '../QuestionSearch/QuestionSearch.jsx';
import QuestionList from '../QuestionList/QuestionList.jsx';
import './QnA.css';
import Modal from '../Modal/Modal.jsx';
import axios from 'axios';

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
  const submitAnswer = (info) => {
    // axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${info[0]}/answers`, info[1])
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => { console.error(err) })
    // return null;
  }
  const submitQuestion = (info) => {
    // axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions`, info)
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => { console.error(err) })
    // return null;
  }
  return (
    <div className="questions-answers-container">
      <Modal
        isOpen={questionModalIsOpen}
        typeOfModal="question"
        close={() => { setQuestionModalIsOpen(false); }}
        submitQuestion={submitQuestion}
      />
      <Modal
        isOpen={answerModalIsOpen}
        typeOfModal="answer"
        close={() => { setAnswerModalIsOpen(false); }}
        submitAnswer={submitAnswer}
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
