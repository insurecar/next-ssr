import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export const Button = ({
  appearence,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const buttonClasses = cn(styles.button, className, {
    [styles.primary]: appearence === "primary",
    [styles.ghost]: appearence === "ghost",
  });
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
