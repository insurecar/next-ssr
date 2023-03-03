import React from "react";
import styles from "./Tag.module.css";
import cn from "classnames";
import { TagProps } from "./Tag.props";

export const Tag = ({
  children,
  size = "s",
  color = "ghost",
  className,
  href,
  ...props
}: TagProps): JSX.Element => {
  const { tag, s, m, ghost, red, gray, green, primary } = styles;
  const tagStyles = cn(tag, className, {
    [s]: size === "s",
    [m]: size === "m",
    [ghost]: color === "ghost",
    [red]: color === "red",
    [gray]: color === "gray",
    [green]: color === "green",
    [primary]: color === "primary",
  });
  return (
    <div className={tagStyles} {...props}>
      {href ? <a>{children}</a> : children}
    </div>
  );
};
