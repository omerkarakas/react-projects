import { RiDeleteBin5Line } from 'react-icons/ri';
import PropTypes from 'prop-types';
import Card from './shared/Card';

function FeedbackItem({ item, handleDelete }) {
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <div>
      {/* <Card reverse="true"> */}
      <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
          <RiDeleteBin5Line color="red" />
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
    </div>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
