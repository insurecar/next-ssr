import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export const Button = ({ appearence, children }: ButtonProps): JSX.Element => {
  const buttonClasses = cn(styles.button, {
    [styles.primary]: appearence === "primary",
    [styles.ghost]: appearence === "ghost",
  });
  return <button className={buttonClasses}>{children}</button>;
};
