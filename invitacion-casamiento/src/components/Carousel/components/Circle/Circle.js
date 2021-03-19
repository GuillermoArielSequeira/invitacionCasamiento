import React from 'react';
import styles from './Circle.module.scss';
import classNames from 'classnames/bind';
/* eslint-disable no-debugger */
let cx = classNames.bind(styles);

const Circle = ({ active, onClick }) => {
  let className = cx({
    circle: true,
    active: active,
  });
  return (
    <div onClick={onClick} className={className} />
  )
}

export default Circle;