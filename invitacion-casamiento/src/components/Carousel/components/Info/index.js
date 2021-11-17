import React from "react";
import styles from "./Info.module.scss";
import Button from "../../../Button";

const Info = () => (
  <div className={styles.containerInfo}>
    <div className={styles.description}>
      <h1 className={styles.names}> Ani y Guille</h1>
      <h2 className={styles.date}>05.02.2022</h2>
    </div>
    <Button text="VER INFORMACIÓN" href="#info-weding" />
  </div>
);

export default Info;
