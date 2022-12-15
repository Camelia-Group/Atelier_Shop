import React, { useState } from 'react';
import './Modal.css';
import StarRatings from 'react-star-ratings';

const Modal = () => {
  const [modal, setModal] = useState(false);
  const [ratings, setRatings] = useState(0);
  const [recommend, setRecommend] = useState(false);
  const [reviewSum, setReviewSum] = useState('');
  const [reviewBod, setReviewBod] = useState('');
  const [nickNamed, setNickNamed] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [reviewStar, setReviewStar] = useState('');
  const [charCount, setCharCount] = useState('Minimum required characters left: ' + 50);



  const handleEmail = (evt) => {
    setUserEmail(evt.target.value)
  }

  const handlenickname = (evt) => {
    setNickNamed(evt.target.value)
  }

  const handleSummary = (evt) => {
    setReviewSum(evt.target.value)
  }

  const handleCharCount = (evt) => {
    let input = evt.target.value;
    setReviewBody(input)
    if (input.length <= 50) {
      setCharCount('Minimum required characters left: ' + (50 - input.length))
    } else if (input.length >= 50 && input.length < 1000) {
      setCharCount('Characters remaining: ' + (1000 - input.length))
    } else {
      setCharCount('Max characters reached.')
    }
  }

  const changeRating = (val) => {
    setRatings(val);

    if (val === 1) {
      setReviewStar('1 star - Poor')
    } else if (val === 2) {
      setReviewStar('2 stars - Fair')
    } else if (val === 3) {
      setReviewStar('3 stars - Average')
    } else if (val === 4) {
      setReviewStar('4 stars - Good')
    } else if (val === 5) {
      setReviewStar('5 stars - Great')
    }

  }

  const characteristics = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
  }
  const charArray = Object.keys(characteristics);
  const { size, width, comfort, quality, length, fit } = characteristics;


  const setNewRating = (rating) => setRatings(rating)
  const radioButton = <div key='inline-radio' className="mb-3">
  </div>;

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
      <button onClick={toggleModal} className="btn-modal">Add Review +</button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Write Your Review here</h2>
            <h5>About the [product name]</h5>
           <form>
            <div className="overall-product">
              <label>Overall Rating</label>
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
            <p>Characteristics -</p>
        <table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>1 <input type="radio" name="char"/></th>
              <th>2 <input type="radio" name="char"/></th>
              <th>3 <input type="radio" name="char"/></th>
              <th>4 <input type="radio" name="char"/></th>
              <th>5 <input type="radio" name="char"/></th>
            </tr>
          </thead>
          <tbody>
            {charArray.map((char, index) => {
              return (
                <tr key={index}>
                  <td>{char}</td>
                  {characteristics[char].map((description, index) => (
                    <td key={index}>{description} {radioButton}</td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
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