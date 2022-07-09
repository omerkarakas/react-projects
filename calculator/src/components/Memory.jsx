import React from 'react';
import { useGlobalContext } from '../context';
import { FaRegTrashAlt } from 'react-icons/fa';

function Memory({ showPanel }) {
  const { memory, setMemory } = useGlobalContext();

  return (
    showPanel && (
      <div className="memory">
        <div className="memory-container">Memory Container</div>
        {/* {operationHistory.length > 0 && ( */}
        <div className="history-footer">
          <button
            onClick={() => setMemory(null)}
            className="btn-remove-history"
          >
            <FaRegTrashAlt />
          </button>
        </div>
        {/* )} */}
      </div>
    )
  );
}

export default Memory;
