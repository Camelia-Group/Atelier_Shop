import { React, useState} from 'react';
import QuestionSearch from './QuestionSearch';
import QuestionList from './QuestionList';

export default function QnA() {
  const [questions, setQuestions] = useState([{}]);
  const [renderSearch, setRenderSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([{}]);

  return (
    <>
      <h1>Questions & Answers</h1>
      <QuestionSearch
        setRenderSearch={setRenderSearch}
        setSearchResults={setSearchResults}
      />

      {
        renderSearch ? (
          <QuestionList
            questions={searchResults}
          />
        ) : (
          <QuestionList
            questions={questions}
          />
        )
      }
    </>

  );
}
