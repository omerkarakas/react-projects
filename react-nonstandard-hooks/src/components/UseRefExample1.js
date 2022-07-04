import React, { useRef } from 'react';

function UseRefExample1() {
  const refInput = useRef();
  const para = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refInput.current.value);
    refInput.current.value = 'Hello Bro';
    refInput.current.style.backgroundColor = 'green';
    para.current.innerText = 'this is a paragraph';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          ref={refInput}
          type="text"
          name="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p ref={para} onClick={() => refInput.current.focus()}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        ut!
      </p>
    </div>
  );
}

export default UseRefExample1;
