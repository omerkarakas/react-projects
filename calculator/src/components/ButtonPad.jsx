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
        <Button children={<FiPercent />} />
        <Button children="CE" />
        <Button children="C" />
        <Button children={<IoBackspaceOutline />} />

        <Button children="1/x" />
        <Button children="x^2" />
        <Button children="sqrt(x)" />
        <Button children={<FaDivide />} />

        <Button children="7" />
        <Button children="8" />
        <Button children="9" />
        <Button children={<FaTimes />} />

        <Button children="4" />
        <Button children="5" />
        <Button children="6" />
        <Button children={<FaMinus />} />

        <Button children="1" />
        <Button children="2" />
        <Button children="3" />
        <Button children={<FaPlus />} />

        <Button children="+/-" />
        <Button children="0" />
        <Button children="." />
        <Button children={<FaEquals />} />
      </div>
    </div>
  );
}

export default ButtonPad;
