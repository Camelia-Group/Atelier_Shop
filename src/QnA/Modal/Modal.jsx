import React, { useState } from 'react';
import './Modal.css';

function Modal({ isOpen, typeOfModal, close, submitQuestion, product, submitAnswer}) {
  const [body, setBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const style = {
    background: '#f1f1f13d'
  }
  return (
    <div className='modal-radius'>
      {
        isOpen[0] === true && typeOfModal === 'question' ? (
          <div className="modal modal-radius" style={style}>
            <div onClick={() => { close(); }} role="presentation" className="overlay" id="overlay" />
            <div className="modal-content modal-radius">
              <h2>Ask Your Question</h2>
              <h5>
                About the&nbsp;
                {product}
              </h5>
              <form className="qnaForm">
                <p>Your Question</p>
                <textarea rows="5" cols="46" maxLength="1000" onChange={(e) => { setBody(e.target.value); }} required />
                <p>What is your nickname?</p>
                <input type="text" onChange={(e) => { setNickname(e.target.value); }} placeholder="Example: jackson11" maxLength="60" required />
                <p>Your email</p>
                <input type="email" onChange={(e) => { setEmail(e.target.value); }} maxLength="60" required />
                <br />
                <button
                  className="close-modal-btn"
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
                  Submit
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
        <div className="modal modal-radius" style={style}>
          <div id="overlay" onClick={() => { close(); }} role="presentation" className="overlay" />
          <div className="modal-content modal-radius">
            <h2>Submit your Answer</h2>
            {product} : {isOpen[3]}
            <br />

            <form className="qnaForm">
              <p>What is your answer?</p>
              <textarea onChange={(e) => { setBody(e.target.value); }} cols="46" rows="5" maxLength="1000" required />
              <p>What is your nickname?</p>
              <input type="text" onChange={(e) => { setNickname(e.target.value); }} placeholder="Example: jackson11" maxLength="60" required />
              <p>What is your email?</p>
              <input type="email" onChange={(e) => { setEmail(e.target.value); }} placeholder="description" maxLength="60" required />
              <br />
              <button className="close-modal-btn" type="button" onClick={() => submitAnswer(isOpen[1], { body, name: nickname, email })}>Submit</button>
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
