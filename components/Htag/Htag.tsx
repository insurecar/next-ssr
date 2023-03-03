import React from "react";
import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.css";

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
  const { h1, h2, h3 } = styles;
  switch (tag) {
    case "h1":
      return <h1 className={h1}>{children}</h1>;
    case "h2":
      return <h2 className={h2}>{children}</h2>;
    case "h3":
      return <h3 className={h3}>{children}</h3>;

    default:
      return <></>;
  }
};
