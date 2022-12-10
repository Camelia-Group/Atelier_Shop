import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionSearch from '../QuestionSearch/QuestionSearch.jsx';
import QuestionList from '../QuestionList/QuestionList.jsx';
import './QnA.css';
import Modal from '../Modal/Modal.jsx';

export default function QnA({ productId = 37311 }) {
  // const [questions, setQuestions] = useState();
  const [questionModalIsOpen, setQuestionModalIsOpen] = useState([false]);
  const [answerModalIsOpen, setAnswerModalIsOpen] = useState([false]);
  const [questions, setQuestions] = useState([]);
  const [renderSearch, setRenderSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([{}]);
  const [showMoreAnswers, setShowMoreAnswers] = useState(false);
  const [productName, setProductName] = useState('');
  useEffect(() => {
    axios.get('http://localhost:3000/questions/')
      .then((res) => {
        console.log(res.data.results, 'DATA');
        setQuestions(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
    axios.get(`http://localhost:3000/products/${productId}`)
      .then((data) => {
        setProductName(data.data.name);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  // const handleClose = (inputs) => {
  //   if (input) {

  //   }
  // };
  const addQuestion = () => {
    setQuestionModalIsOpen([true, productName, productId]);
  };
  const addAnswer = (questionId) => {
    setAnswerModalIsOpen([true, questionId, productId]);
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
    axios.post('http://localhost:3000/question', info)
      .then((data) => {
        console.log('question post success', data);
      })
      .catch((err) => { console.error(err) })
    return null;
  };
  return (
    <div className="questions-answers-container">
      <Modal
        isOpen={questionModalIsOpen}
        typeOfModal="question"
        close={() => { setQuestionModalIsOpen([false]); }}
        submitQuestion={submitQuestion}
        product={productId}
      />
      <Modal
        isOpen={answerModalIsOpen}
        typeOfModal="answer"
        close={() => { setAnswerModalIsOpen([false]); }}
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
