import { useCallback, useEffect, useState } from 'react';

const Child = ({ showAge }) => {
  useEffect(() => {
    // This will run on every render
    const age = showAge();
    console.log(age);
  }, [showAge]);
  return <p>This is the child</p>;
};

const Parent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  // This creates a new function each render
  // const showAge = () => {
  //   console.log('show age run');
  //   return `I am ${age} years old`;
  // };
  const showAge = useCallback(() => {
    console.log('show age run');
    return `I am ${age} years old`;
  }, [age]);

  return (
    <div>
      <p>This is the parent</p>
      <label>name</label>
      <input onChange={(e) => setName(e.target.value)} />
      <label>Age</label>
      <input type="number" onChange={(e) => setAge(e.target.value)} />
      <Child showAge={showAge} />
    </div>
  );
};

export default Parent;
