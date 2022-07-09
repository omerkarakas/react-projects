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
  const [memory, setMemory] = useState(null);
  const [memoryHistory, setMemoryHistory] = useState([]);

  const [percent, setPercent] = useState(false);

  const addOperationHistory = (first, second, operation, result) => {
    setOperationHistory([
      { first, second, operation, result },
      ...operationHistory,
    ]);
  };

  const calculate = (first, second, operation) => {
    let result;
    let pct = percent;
    let scnd = second;
    setPercent(false);
    switch (operation) {
      case '+':
        result = first + second;
        break;
      case '-':
        result = first - second;
        break;
      case 'x':
        scnd = second / (pct ? 100 : 1);
        setSecond(scnd);
        result = first * scnd;
        break;
      case '/':
        result = first / second;
        break;
      default:
        console.log('Non defined operation');
    }

    addOperationHistory(first, scnd, operation, result);
    return result;
  };

  const buttonClick = (btn) => {
    if (isNaN(+btn)) {
      switch (btn) {
        case '%':
          setPercent(true);
          break;
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
          setMemory(null);
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
        case '1/x':
          setCurrent(1 / current);
          break;
        case 'x^2':
          setCurrent(current * current);
          break;
        case 'sqrt(x)':
          setCurrent(Math.sqrt(current));
          break;
        case '+/-':
          setCurrent(-1 * current);
          break;
        case 'BACK':
          if (current.toString().length > 1)
            setCurrent(Number(current.toString().slice(0, -1)));
          else setCurrent(0);
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

  const memButtonClick = (btn) => {
    console.log(btn);
    switch (btn) {
      case 'MC':
        setMemory(null);
        setMemoryHistory([]);
        break;
      case 'MR':
        setCurrent(memory);
        break;
      case 'M+':
        setMemory(memory + current);
        break;
      case 'M-':
        setMemory(memory - current);
        break;
      case 'MS':
        setMemory(current);
        setMemoryHistory([current, ...memoryHistory]);
        console.log('Add a log ');
        break;
    }
  };

  useEffect(() => {
    setFirst(0);
    setSecond(0);
    setPercent(false);
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
        percent,
        memory,
        memoryHistory,
        setFirst,
        setSecond,
        setOperation,
        setTurn,
        buttonClick,
        memButtonClick,
        setOperationHistory,
        setMemory,
        setMemoryHistory,
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
