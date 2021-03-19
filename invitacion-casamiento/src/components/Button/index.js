import React from 'react';
import styles from './Button.module.scss'

const Button = ({ href, text }) => (
  <a href={href} className={styles.button}>{text}</a>
)

export default Button;
