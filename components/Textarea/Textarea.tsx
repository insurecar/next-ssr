import React from "react";
import styles from "./Textarea.module.css";
import cn from "classnames";
import { TextareaProps } from "./Textarea.props";

export const Textarea = ({
  className,
  ...props
}: TextareaProps): JSX.Element => (
  <textarea
    className={cn(styles.textarea, className)}
    name=""
    {...props}
  ></textarea>
);
