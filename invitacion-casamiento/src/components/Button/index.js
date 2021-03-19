import React from 'react';
import styles from './Button.module.scss'

const Button = ({ href, text, onClick }) => (
  <a
    href={href}
    className={styles.button}
    onClick={e => {
      if (!href) {
        e.preventDefault();
        onClick();
      }
    }}>
    {text}
  </a>
)

Button.defaultProps = {
  onClick: () => { }
}

export default Button;
