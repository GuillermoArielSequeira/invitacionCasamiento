import React from 'react';
import Button from '../../Button';
import styles from './ConfirmedAttendance.module.scss';

const ConfirmedAttendance = () => (
  <div className={styles.container}>
    <h2 className={styles.title} >TE ESPERAMOS</h2>
    <span className={styles.description}>Para que formes parte de esta gran celebracion ¡Confirmanos tu asistencia!</span>
    <Button text="CONFIRMAR ASISTENCIA" />
    <span className={styles.thanks}>"GRACIAS POR FORMAR PARTE DE ESTA AVENTURA"</span>
    <span className={styles.names}>Ani y Guille</span>
  </div>
)

export default ConfirmedAttendance;
