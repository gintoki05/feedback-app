import { useState } from 'react';

function FeedbackItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('Example');

  return (
    <div>
      <div>{rating}</div>
      <div>{text}</div>
    </div>
  );
}
export default FeedbackItem;
