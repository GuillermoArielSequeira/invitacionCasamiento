import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../../Button';
import styles from './ConfirmedAttendance.module.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};

const ConfirmedAttendance = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title} >TE ESPERAMOS</h2>
      <span className={styles.description}>Para que formes parte de esta gran celebracion ¡Confirmanos tu asistencia!</span>
      <Button text="CONFIRMAR ASISTENCIA" onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
        ariaHideApp={false}
        shouldFocusAfterRender={false}
      >
        <h2>¿A quien te gustaria confirmarle tu asistencia?</h2>
        <Button text="A GUILLE" onClick={closeModal}>close</Button>
        <Button text="A ANI" onClick={closeModal}>close</Button>
        <Button text="CANCELAR" onClick={closeModal}>close</Button>
      </Modal>
      <span className={styles.thanks}>"GRACIAS POR FORMAR PARTE DE ESTA AVENTURA"</span>
      <span className={styles.names}>Ani y Guille</span>
    </div>
  )
}

export default ConfirmedAttendance;
