import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 8,
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 8,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback ? ')) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
  };

  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((fb) => (fb.id === id ? { ...fb, ...updatedItem } : fb))
    );
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const addFeedback = (newFeedBack) => {
    newFeedBack.id = uuidv4();
    setFeedback([newFeedBack, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
