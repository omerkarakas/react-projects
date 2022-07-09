import React from 'react';
import { useGlobalContext } from '../context';
import { FaRegTrashAlt } from 'react-icons/fa';

function History({ showPanel }) {
  const { operationHistory, setOperationHistory } = useGlobalContext();

  return (
    showPanel && (
      <div className="history">
        <div className="history-container">
          {operationHistory.length > 0 &&
            operationHistory.map((item, index) => {
              return (
                <div className="history-record" key={index}>
                  <p>
                    {item.first +
                      ' ' +
                      item.operation +
                      ' ' +
                      item.second +
                      ' = '}
                  </p>
                  <h2>{item.result}</h2>
                </div>
              );
            })}
        </div>
        {operationHistory.length > 0 && (
          <div className="history-footer">
            <button
              onClick={() => setOperationHistory([])}
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

export default History;
