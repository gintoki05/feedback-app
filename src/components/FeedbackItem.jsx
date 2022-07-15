import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)}>
        <FaTimes color='purple' />
      </button>
      <div>{item.text}</div>
    </Card>
  );
}
export default FeedbackItem;
