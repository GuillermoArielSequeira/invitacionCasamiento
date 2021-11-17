import React from "react";
import Countdown from "react-countdown";
import styles from "./Countdown.module.scss";
import CountDownItem from "./Components/CountdownItem";

const CountDown = () => (
  <div className={styles.container}>
    <span className={styles.title}>Cuenta Regresiva</span>
    <Countdown
      date={"2022-02-05T19:30:00"}
      intervalDelay={0}
      precision={3}
      renderer={({ days, hours, minutes, seconds }) => {
        return (
          <div className={styles.countDown}>
            <CountDownItem title="Dias" time={days} />
            <span className={styles.point}>:</span>
            <CountDownItem title="Horas" time={hours} />
            <span className={styles.point}>:</span>
            <CountDownItem title="Minutos" time={minutes} />
            <span className={styles.point}>:</span>
            <CountDownItem title="Segundos" time={seconds} />
          </div>
        );
      }}
    />
  </div>
);

export default CountDown;
