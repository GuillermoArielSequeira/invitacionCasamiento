import React from "react";
import { getIcon } from "../../../../icons";
import ReactMarkdown from "react-markdown";
import styles from "./Feature.module.scss";
import Button from "../../../Button";

const Feature = ({ title, description, text_button, icon, href }) => (
  <div className={styles.containerFeature}>
    <h4 className={styles.title}>{title}</h4>
    <div className={styles.containerIcon}>{getIcon({ name: icon })}</div>
    <ReactMarkdown className={styles.description} source={description} />
    {text_button && <Button text={text_button} href={href} />}
  </div>
);

export default Feature;
