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
        setQuestions(res.data.results.filter((question) => {
          if (Object.keys(question.answers).length !== 0) {
            return question;
          }
        }));
      })
      .catch((err) => {
        console.error(err);
      });
    axios.get(`http://localhost:3000/products/${productId}`)
      .then((data) => {
        setProductName(data.data);
      })
      .catch((err) => {
        console.error(err, 'ERR PROD NAME');
      });
  }, []);
  const addQuestion = () => {
    setQuestionModalIsOpen([true, productId]);
  };
  const addAnswer = (questionId, questionBody) => {
    setAnswerModalIsOpen([true, questionId, productId, questionBody]);
  };
  const submitAnswer = (id, info) => {
    axios.post(`http://localhost:3000/question/${id}`, info)
      .then(() => {
        setAnswerModalIsOpen([false]);
      })
      .catch((err) => { console.error(err); });
  };
  const submitQuestion = (info) => {
    axios.post('http://localhost:3000/questions', info)
      .then(() => {
        setQuestionModalIsOpen([false]);
      })
      .catch((err) => { console.error(err); });
  };
  return (
    <div className="questions-answers-container">
      <Modal
        isOpen={questionModalIsOpen}
        typeOfModal="question"
        close={() => { setQuestionModalIsOpen([false]); }}
        submitQuestion={submitQuestion}
        product={productName}
      />
      <Modal
        isOpen={answerModalIsOpen}
        typeOfModal="answer"
        close={() => { setAnswerModalIsOpen([false]); }}
        submitAnswer={submitAnswer}
        product={productName}
      />

      <h2 className="questions-answers-header">Questions & Answers</h2>
      <QuestionSearch
        setRenderSearch={setRenderSearch}
        setSearchResults={setSearchResults}
        questions={questions}
      />

      {
        renderSearch ? (
          <QuestionList
            questions={searchResults}
            showMoreAnswers={showMoreAnswers}
            setShowMoreAnswers={setShowMoreAnswers}
            addQuestion={addQuestion}
            addAnswer={addAnswer}
            isSearch={renderSearch}
          />
        ) : (
          <QuestionList
            questions={questions}
            addQuestion={addQuestion}
            addAnswer={addAnswer}
            showMoreAnswers={showMoreAnswers}
            setShowMoreAnswers={setShowMoreAnswers}
            isSearch={renderSearch}
          />
        )
      }
    </div>

  );
}
