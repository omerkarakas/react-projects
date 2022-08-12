import { Card, List } from 'antd';
import React from 'react';

import { IState as IProps } from '../App';

//const BucketList = (props: IProps) => {
// const BucketList = ({ list }: IProps) => {
const BucketList: React.FC<IProps> = ({ list }) => {
  const renderList = (): JSX.Element[] => {
    return list.map((item, index) => {
      return (
        <li className="List" key={index}>
          <div className="List-header">
            <img src={item.url} alt="" className="List-img" />
            <h3>{item.what}</h3>
          </div>
          <p>{item.notes}</p>
        </li>
      );
    });
  };

  return (
    <>
      {renderList()}
      {/* {list.map((item, index) => {
        return (
          <li className="List">
            <div className="List-header">
              <img src={item.url} alt="" className="List-img" />
              <h2>{item.what}</h2>
            </div>
            <p>{item.notes}</p>
          </li>
        );
      })} */}
    </>
  );
};

export default BucketList;
