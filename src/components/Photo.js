import React from 'react';

//Creates photo element with props from PhotoConstructor
const Photo = props => (
  <li>
    <img src={props.url} alt="" />
  </li>
);

export default Photo;