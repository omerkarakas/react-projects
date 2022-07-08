import React from 'react';
import { useGlobalContext } from '../context';

function Calculation() {
  const { current, first, second, operation, turn } = useGlobalContext();
  return (
    <div className="calculation">
      <p>
        {/* {operation && turn === 'first' && first} */}
        {(operation && turn === 'second' && first + operation) || <br />}

        {/* {first} {operation} {second} ={' '} */}
      </p>
      <h1>{current}</h1>
    </div>
  );
}

export default Calculation;
