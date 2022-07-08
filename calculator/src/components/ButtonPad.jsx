import React from 'react';
import Button from './Button';
import MButton from './MButton';
import { FiPercent } from 'react-icons/fi';
import { FaDivide, FaTimes, FaPlus, FaMinus, FaEquals } from 'react-icons/fa';
import { IoBackspaceOutline } from 'react-icons/io5';

function ButtonPad() {
  return (
    <div className="button-pad">
      <div className="m-buttons-container">
        <MButton text="MC" />
        <MButton text="MR" />
        <MButton text="M+" />
        <MButton text="M-" />
        <MButton text="MS" />
      </div>
      <div className="buttons-container">
        <Button id="%" children={<FiPercent />} />
        <Button id="CE" />
        <Button id="C" />
        <Button id="BACK" children={<IoBackspaceOutline />} />

        <Button id="1/x" />
        <Button id="x^2" />
        <Button id="sqrt(x)" />
        <Button id="/" children={<FaDivide />} />

        <Button id="7" />
        <Button id="8" />
        <Button id="9" />
        <Button id="X" children={<FaTimes />} />

        <Button id="4" />
        <Button id="5" />
        <Button id="6" />
        <Button id="-" children={<FaMinus />} />

        <Button id="1" />
        <Button id="2" />
        <Button id="3" />
        <Button id="+" children={<FaPlus />} />

        <Button id="+/-" />
        <Button id="0" />
        <Button id="." />
        <Button id="=" children={<FaEquals />} />
      </div>
    </div>
  );
}

export default ButtonPad;
