import React from "react";
import { PProps } from "./P.props";
import styles from "./P.module.css";
import cn from "classnames";

export const P = ({ size = "s", children }: PProps): JSX.Element => {
  const { p, s, m, l } = styles;
  const pClassNames = cn(p, {
    [s]: size === "s",
    [m]: size === "m",
    [l]: size === "l",
  });
  return <p className={pClassNames}>{children}</p>;
};
