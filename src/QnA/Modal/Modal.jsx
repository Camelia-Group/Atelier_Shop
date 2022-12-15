import React, { useState } from 'react';
import './Modal.css';

function Modal({ isOpen, typeOfModal, close, submitQuestion, product, submitAnswer}) {
  const [body, setBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      {
        isOpen[0] === true && typeOfModal === 'question' ? (
          <div className="modal">
            <div onClick={() => { close(); }} role="presentation" className="overlay" id="overlay" />
            <div className="modal-content">
              <h2>Ask Your Question</h2>
              <h5>
                About the&nbsp;
                {product}
              </h5>
              <form>
                <p>Your Question</p>
                <textarea rows="5" maxLength="1000" onChange={(e) => { setBody(e.target.value); }} required />
                <p>What is your nickname?</p>
                <input type="text" onChange={(e) => { setNickname(e.target.value); }} placeholder="Example: jackson11" maxLength="60" required />
                <p>Your email</p>
                <input type="email" onChange={(e) => { setEmail(e.target.value); }} maxLength="60" required />
                <br />
                <button
                  type="button"
                  onClick={() => {
                    submitQuestion({
                      body, name: nickname, email, product_id: isOpen[1],
                    });
                    console.log('PASSED TO SUBMIT QUESTION FN => ', {
                      body, name: nickname, email, product_id: isOpen[1],
                    });
                  }}
                >
                  Submit question
                </button>
              </form>
              <button className="close-modal" onClick={close} type="button">
                ❌
              </button>
            </div>
          </div>
        ) : null
      }
      {
      isOpen[0] === true && typeOfModal === 'answer' ? (
        <div className="modal">
          <div id="overlay" onClick={() => { close(); }} role="presentation" className="overlay" />
          <div className="modal-content">
            <h2>Submit your Answer</h2>
            {product} : {isOpen[3]}
            <br />

            <form>
              <p>What is your answer?</p>
              <textarea onChange={(e) => { setBody(e.target.value); }} maxLength="1000" required />
              <p>What is your nickname?</p>
              <input type="text" onChange={(e) => { setNickname(e.target.value); }} placeholder="Example: jackson11" maxLength="60" required />
              <p>What is your email?</p>
              <input type="email" onChange={(e) => { setEmail(e.target.value); }} placeholder="description" maxLength="60" required />
              <br />
              <button type="button" onClick={() => submitAnswer(isOpen[1], { body, name: nickname, email })}>Submit answer</button>
            </form>
            <button className="close-modal" onClick={close} type="button">
              ❌
            </button>
          </div>
        </div>
      ) : null
    }
    </div>
  );
}

export default Modal;
