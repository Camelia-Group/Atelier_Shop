import React from 'react';
import './Modal.css';

function Modal({ isOpen, typeOfModal, close, submit}) {
  return (
    <div>
      {
      isOpen === true && typeOfModal === 'question' ? (
        <div className="modal">
          <div onClick={() => { close(); }} role="presentation" className="overlay" />
          <div className="modal-content">
            <h2>Ask Your Question</h2>
            <h5>About the [Product name]</h5>
            <form>
              <p>Your Question</p>
              <textarea maxLength="1000" required />
              <p>What is your nickname?</p>
              <input type="text" placeholder="Example: jackson11" maxLength="60" required />
              <p>Your email</p>
              <input type="email" placeholder="description" maxLength="60" required />
              <button type="button">Submit question</button>
            </form>
            <button className="close-modal" onClick={close} type="button">
              ❌
            </button>
          </div>
        </div>
      ) : <h1>NOT OPEN</h1>
      }

    </div>
  );
}

export default Modal;
