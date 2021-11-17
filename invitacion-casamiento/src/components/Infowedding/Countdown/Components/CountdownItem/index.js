import React from "react";
import { number, string } from "prop-types";
import styles from "./CountDownItem.module.scss";

const CountDownItem = ({ title, time }) => (
  <div className={styles.container}>
    <span>{title}</span>
    <span>{time} </span>
  </div>
);

CountDownItem.propTypes = {
  title: string,
  time: number,
};

export default CountDownItem;
