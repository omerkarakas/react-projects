import React, { Component } from 'react';
import "./Hello.css";

const Hello = (props) => {
  return (
    <div className="f1 tc">
      <h1>Hello</h1>
      <p>welcome to the react world, {props.greeting}, dear {props.name} !!!</p>
    </div>
  );
}

export default Hello;