import React, { useState } from 'react';
import './Modal.css';
import StarRatings from 'react-star-ratings';

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
            <h2>Write Your Review here</h2>
            <h5>About the [product name]</h5>
           <form>
            <div className="overall-product">
              <label>Overall Rating</label>
              <h5><StarRatings rating={0} /></h5>
            </div>
            <div className="recc-product">
            <label>Do you recc this product?</label>
            <label>yes</label>
            <input type="radio" id="yes" name="recc" value="yes" required />
            <label>no</label>
            <input type="radio" id="no" name="recc" value="no" required />
            </div>
            <div className="summary-product">
              <label>Summary</label>
              <textarea id="summary" maxLength="60" placeholder="Example: Best purchase ever!"/>
            </div>
            <div className="body-product">
              <label>Body</label>
              <textarea id="body" placeholder="Why did you like this product or not?" minLength="50" maxLength="1000" required/>
            </div>
            <div className="photo-product">
              <label>Photos</label>
              <input id="photos" type="file" accept="image/*" multiple/>
            </div>
            <div className="name-product">
              <label>Name</label>
              <input type="text" id="name" placeholder="jackson11!" maxLength="60" required/>
            </div>
            <div className="email-product">
            <label>Email</label>
              <input type="email" id="email" placeholder="jackson11@gmail.com" maxLength="60" required/>
            </div>
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