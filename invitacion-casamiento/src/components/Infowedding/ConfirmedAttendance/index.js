import React, { useState } from "react";
import Modal from "react-modal";
import Button from "../../Button";
import styles from "./ConfirmedAttendance.module.scss";

const ConfirmedAttendance = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalBankIsOpen, setBankIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Regalo</h2>
      <span className={styles.descriptionPresent}>
        Para nosotros lo más importante es tu presencia, pero si algo nos querés
        regalar, el dinero lo sabremos apreciar ya sea en efectivo o través de
        un deposito.
      </span>
      <Button text="VER DATOS BANCARIOS" onClick={() => setBankIsOpen(true)} />
      <Modal
        isOpen={modalBankIsOpen}
        onRequestClose={() => setBankIsOpen(false)}
        className={styles.modal}
        overlayClassName={styles.overlay}
        ariaHideApp={false}
        shouldFocusAfterRender={false}
      >
        <p style={{ textAlign: "center" }}>CBU: 30004025827122</p>
        <p style={{ textAlign: "center" }}>Alias de CBU: CORDON.MALTA.FARO</p>
        <Button text="CERRAR" onClick={() => setBankIsOpen(false)}>
          close
        </Button>
      </Modal>
      <h2 className={styles.title}>TE ESPERAMOS</h2>
      <span className={styles.description}>
        Para que formes parte de esta gran celebración ¡Confirmanos tu
        presencia!
      </span>
      <Button text="CONFIRMAR PRESENCIA" onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
        ariaHideApp={false}
        shouldFocusAfterRender={false}
      >
        <h2>¿A quien te gustaria confirmarle tu asistencia?</h2>
        <Button
          text="A GUILLE"
          onClick={closeModal}
          href="https://api.whatsapp.com/send?phone=541139195794"
        >
          close
        </Button>
        <Button
          text="A ANI"
          onClick={closeModal}
          href="https://api.whatsapp.com/send?phone=541165066246"
        >
          close
        </Button>
        <Button text="CANCELAR" onClick={closeModal}>
          close
        </Button>
      </Modal>
      <span className={styles.thanks}>
        "GRACIAS POR FORMAR PARTE DE ESTA AVENTURA"
      </span>
      <span className={styles.names}>Ani y Guille</span>
    </div>
  );
};

export default ConfirmedAttendance;
