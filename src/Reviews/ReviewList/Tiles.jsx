import React, {useState, useEffect} from 'react';
import Tile from './Tile.jsx'
import Sorting from './Sorting.jsx';
import Modal from '../newReview/Modal.jsx';

export default function Tiles({reviews}) {

  const [shownReviews, setShownReviews] = useState([]);
  const [showCollapse, setShowCollapse] = useState(false);
  const [showAdd, setShowAdd] = useState(true);
  const [showWriteReview, setShowWriteReview] = useState(false);
  const [count, setCount] = useState(2);
  const [lastReviewIdx, setLastReviewIdx] = useState(0);
  const [reviewsFilter, setReviewsFilter] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  useEffect(() => {
    setShownReviews(
      reviews.map((review) => <Tile key={review.review_id} review={review} />),
    );
  }, [reviews, count, reviewsFilter]);

  useEffect(() => {
    setShowAdd(shownReviews.length > count);
    setShowCollapse(shownReviews.slice(0, count).length > 2);
    setLastReviewIdx(count > shownReviews.length ? shownReviews.length - 1 : count - 1);
  }, [shownReviews]);

  return (
    <div id="reviews-list">
      {shownReviews.slice(0, count)}
      {showWriteReview && <Modal />}
    </div>
  );
}