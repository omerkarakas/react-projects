import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext(null);

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });
  const [isLoading, setIsLoading] = useState(true);

  const fetchFeedback = async () => {
    const res = await fetch('/feedback?_sort=id&_order=desc');
    const feedback = await res.json();
    setFeedback(feedback);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete this feedback ? ')) {
      await fetch('/feedback/' + id, { method: 'DELETE' });
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
  };

  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem),
    });
    const data = await response.json();

    setFeedback(feedback.map((fb) => (fb.id === id ? { ...fb, ...data } : fb)));
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const addFeedback = async (newFeedBack) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeedBack),
    });
    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
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
