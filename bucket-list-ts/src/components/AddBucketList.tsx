import SkeletonInput from 'antd/lib/skeleton/Input';
import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  list: Props['list'];
  setList: React.Dispatch<React.SetStateAction<Props['list']>>;
}

const AddBucketList: React.FC<IProps> = ({ list, setList }) => {
  const [input, setInput] = useState({
    what: '',
    url: '',
    lastAge: 60,
    notes: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    console.log('btn clicked');
    if (!input.what || !input.url || !input.lastAge) {
      return;
    }
    console.log('btn passes validation');
    setList([
      ...list,
      {
        what: input.what,
        url: input.url,
        lastAge: input.lastAge,
        notes: input.notes,
      },
    ]);
    setInput({
      what: '',
      url: '',
      lastAge: 60,
      notes: '',
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        name="what"
        id=""
        placeholder="What"
        className="AddToList-input"
        value={input.what}
        onChange={handleChange}
      />
      <input
        type="text"
        name="url"
        id=""
        placeholder="Url"
        className="AddToList-input"
        value={input.url}
        onChange={handleChange}
      />
      <input
        type="number"
        name="lastAge"
        id=""
        placeholder="Last Age"
        className="AddToList-input"
        value={input.lastAge}
        onChange={handleChange}
      />
      <textarea
        name="notes"
        id=""
        placeholder="Notes"
        className="AddToList-input"
        value={input.notes}
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add To My Bucket List
      </button>
    </div>
  );
};

export default AddBucketList;
