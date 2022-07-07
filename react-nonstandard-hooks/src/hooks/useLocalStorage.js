import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    // check if function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    setLocalStorageValue(value);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
}

function getLocalStorageValue(key, initialValue) {
  const itemFromState = localStorage.getItem(key);
  return itemFromState ? JSON.parse(itemFromState) : initialValue;
}

export default useLocalStorage;
