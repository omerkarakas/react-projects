import React from 'react';
import { useGlobalContext } from '../context';

function StateWatch() {
  const context = useGlobalContext();

  return (
    <div className="states">
      <h3>Current States</h3>
      <p className="p-state">First: {context.first}</p>
      <p className="p-state">Second: {context.second}</p>
      <p className="p-state">Operation: {context.operation}</p>
      <p className="p-state">Turn: {context.turn}</p>
    </div>
  );
}

export default StateWatch;
