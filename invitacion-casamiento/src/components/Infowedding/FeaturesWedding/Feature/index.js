import React from 'react';
import ReactMarkdown from "react-markdown";
import styles from './Feature.module.scss';
import Button from '../../../Button';

const Feature = ({ title, description, text_button }) => (
  <div className={styles.containerFeature}>
    <h4 className={styles.title}>{title}</h4>
    <ReactMarkdown className={styles.description} source={description} />
    {text_button && <Button text={text_button} />}
  </div>
)

export default Feature;