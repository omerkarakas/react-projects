import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  const bcg = rgb.join(',');
  //const hex = rgbToHex(...rgb);

  const copyToClipboard = function (color) {
    setAlert(true);
    navigator.clipboard.writeText(color);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <article
      className={`color`}
      style={{
        backgroundColor: `rgb(${bcg})`,
        border: `${weight === 0 ? 'solid' : 'none'}`,
      }}
      onClick={() => {
        copyToClipboard(hexColor);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexColor}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
