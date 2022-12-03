import { React, useState} from 'react';
import QuestionSearch from './QuestionSearch';

export default function QnA() {
  const [questions, setQuestions] = useState([{}]);
  const [renderSearch, setRenderSearch] = useState(false);
  con
  return (
    <>
      <h1>Questions & Answers</h1>
      <QuestionSearch />

      {
        renderSearch ? <QuestionList questions={} />
      }
    </>

  );
}
