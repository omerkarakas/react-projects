import PropTypes from 'prop-types';

export default function FeedbackStats({ feedback }) {
  let sum = feedback.reduce((acc, item) => item.rating + acc, 0);
  // 1decimal place unless 0
  let avg = (sum / feedback.length).toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};
