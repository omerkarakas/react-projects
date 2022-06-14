import { RiDeleteBin5Line, RiFileEditLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';
import { useContext } from 'react';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <div>
      {/* <Card reverse="true"> */}
      <Card>
        <div className="num-display">{item.rating}</div>

        <button onClick={() => editFeedback(item)} className="edit">
          <RiFileEditLine color="green" />
        </button>
        <button onClick={() => deleteFeedback(item.id)} className="close">
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
