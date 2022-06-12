import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card';

function FeedbackForm(props) {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How woud you rate your service with us? </h2>
        {/* @todo - ratign select component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
}

FeedbackForm.propTypes = {};

export default FeedbackForm;
