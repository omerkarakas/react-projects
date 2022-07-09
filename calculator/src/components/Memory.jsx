import React from 'react';
import { useGlobalContext } from '../context';
import { FaRegTrashAlt } from 'react-icons/fa';

function Memory({ showPanel }) {
  const { memory, memoryHistory, setMemoryHistory } = useGlobalContext();

  return (
    showPanel && (
      <div className="history">
        <div className="history-container">
          <h2 className="history-record">{memory}</h2>
        </div>

        {memoryHistory.map((hist, index) => {
          return (
            <div className="history-record" key={index}>
              <p key={index}>{hist}</p>
            </div>
          );
        })}

        {memoryHistory.length > 0 && (
          <div className="history-footer">
            <button
              onClick={() => setMemoryHistory([])}
              className="btn-remove-history"
            >
              <FaRegTrashAlt />
            </button>
          </div>
        )}
      </div>
    )
  );
}

export default Memory;
