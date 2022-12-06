import React, { useState } from 'react';
import './Modal.css';

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return(
    <>
      <button onClick={toggleModal} className="btn-modal">Modal Button</button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello inside Modal</h2>
           <form>
            <input type='text' placeholder="nickname"/>
            <input type='text' placeholder="email"/>
            <input type='text' placeholder="description"/>
            <button>Submit</button>
           </form>
            <button className="close-modal" onClick={toggleModal}>
              ❌
            </button>
          </div>
        </div>
      )}

    </>
  )
}

export default Modal;