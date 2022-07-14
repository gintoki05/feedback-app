import { useState } from "react";

function FeedbackItem({ item }) {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("Example");

  return (
    <div>
      <div>{item.rating}</div>
      <div>{item.text}</div>
    </div>
  );
}
export default FeedbackItem;
