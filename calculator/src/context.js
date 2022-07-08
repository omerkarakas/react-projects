import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [current, setCurrent] = useState(0);
  const [operation, setOperation] = useState('');
  const [operationHistory, setOperationHistory] = useState([]);

  const [turn, setTurn] = useState('first');
  const [concat, setConcat] = useState(false);
  const [memory, setMemory] = useState(0);

  const addOperationHistory = (first, second, operation, result) => {
    setOperationHistory([
      { first, second, operation, result },
      ...operationHistory,
    ]);
  };

  const calculate = (first, second, operation) => {
    let result;
    switch (operation) {
      case '+':
        result = first + second;
        break;
      case '-':
        result = first - second;
        break;
      case 'x':
        result = first * second;
        break;
      case '/':
        result = first / second;
        break;
      default:
        console.log('Non defined operation');
    }

    addOperationHistory(first, second, operation, result);
    return result;
  };

  const buttonClick = (btn) => {
    if (isNaN(+btn)) {
      switch (btn) {
        case '+':
        case '-':
        case 'x':
        case '/':
          if (first !== 0 && second !== 0) {
            setSecond(current);
            const result = calculate(first, current, operation);
            setCurrent(result);
            setFirst(result);
          } else {
            setFirst(+current);
          }

          setConcat(false);
          setTurn('second');
          setOperation(btn);
          break;
        case '=':
          let result;
          if (turn === 'second') {
            setConcat(false);
            const secondNum = +current;
            setTurn('first');
            result = calculate(first, secondNum, operation);
            setCurrent(result);
            // setFirst(result);
            setSecond(0);
          }
          break;

        case 'C':
        case 'CE':
          setFirst(0);
          setSecond(0);
          setCurrent(0);
          setOperation('');
          setTurn('first');
          setConcat(false);
          break;

        case '.':
          if (!current.toString().includes(btn)) {
            setCurrent(current + btn);
          }

          break;
      }
    } else {
      console.log('number', btn);
      let currentVal;
      if (concat) {
        currentVal = +(current + btn);
        setCurrent(currentVal);
      } else {
        currentVal = +btn;
        setCurrent(currentVal);
        setConcat(true);
      }
      setFirst(turn === 'first' ? currentVal : first);
      setSecond(turn === 'second' ? currentVal : second);
    }
  };

  useEffect(() => {
    setFirst(0);
    setSecond(0);
  }, []);

  return (
    <AppContext.Provider
      value={{
        first,
        second,
        operation,
        turn,
        current,
        concat,
        operationHistory,
        setFirst,
        setSecond,
        setOperation,
        setTurn,
        buttonClick,
        setOperationHistory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
