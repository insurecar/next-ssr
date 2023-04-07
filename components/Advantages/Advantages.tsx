import React from "react";
import styles from "./Advantages.module.css";
import { AdvantagesProps } from "./Advantages.props";
import CheckIcon from "./Check.svg";

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  const { log } = console;
  log(advantages);
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
};
