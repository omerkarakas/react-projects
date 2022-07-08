import React from 'react';
import { useGlobalContext } from '../context';

function StateWatch() {
  const context = useGlobalContext();

  return (
    <div className="states">
      <h3>Current States</h3>
      <p className="p-state">
        {`First: ${context.first} ${typeof context.first}`}
      </p>
      <p className="p-state">
        {`Second: ${context.second} ${typeof context.second}`}
      </p>
      <p className="p-state">
        {`Current: ${context.current} ${typeof context.current}`}
      </p>
      <p className="p-state">
        {`Operation: ${context.operation} ${typeof context.operation}`}
      </p>
      <p className="p-state">
        {`Turn: ${context.turn} ${typeof context.turn}`}
      </p>
      <p className="p-state">
        {`Concat: ${context.concat} ${typeof context.concat}`}
      </p>
    </div>
  );
}

export default StateWatch;
