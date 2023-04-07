import React from "react";
import styles from "./Input.module.css";
import { InputProps } from "./Input.props";
import cn from "classnames";

export const Input = ({
  text,
  className,
  ...props
}: InputProps): JSX.Element => (
  <input className={cn(className, styles.input)} {...props} type="text" />
);
