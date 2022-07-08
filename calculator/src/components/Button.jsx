import React from 'react';

function Button({ id, children = id }) {
  const buttonId = id;
  const clickMe = (e) => {
    console.log(buttonId);
  };

  return (
    <div className="button" onClick={(e) => clickMe(e)}>
      {children}
    </div>
  );
}

export default Button;
