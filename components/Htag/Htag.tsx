import React from "react";
import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.css";
import cn from "classnames";

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
  const { h1, h2, h3 } = styles;

  const htagClasss = cn("", {
    [h1]: tag === "h1",
    [h2]: tag === "h2",
    [h3]: tag === "h3",
  });

  switch (tag) {
    case "h1":
      return <h1 className={htagClasss}>{children}</h1>;
    case "h2":
      return <h2 className={htagClasss}>{children}</h2>;
    case "h3":
      return <h3 className={htagClasss}>{children}</h3>;

    default:
      return <></>;
  }
};
