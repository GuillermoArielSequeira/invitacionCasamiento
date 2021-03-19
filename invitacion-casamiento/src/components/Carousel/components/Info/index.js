import React from 'react';
import styles from './Info.module.scss';
import Button from '../../../Button';

const Info = () => (
  <div className={styles.containerInfo}>
    <h1 className={styles.names}> Ani y Guille</h1>
    <h2 className={styles.date}>06.11.2021</h2>
    <Button text="VER INFORMACIÓN" />
  </div>
)

export default Info;
