import React from 'react';
import { func, string, bool } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Arrow.module.scss';
import { consts } from 'react-elastic-carousel';

let cx = classNames.bind(styles);

const Arrow = ({ type, onClick, isEdge }) => {

  let className = cx({
    prev: type === consts.PREV,
    next: type === consts.NEXT,
    disabled: isEdge
  });

  return (
    <button
      className={className}
      disabled={isEdge}
      onClick={() => onClick()} />
  )
}

Arrow.propTypes = {
  onClick: func.isRequeired,
  type: string,
  isEdge: bool
}

export default Arrow;

