import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import Arrow from "./arrow.svg";

export const Button = ({
  appearence,
  arrow = "none",
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  const buttonClasses = cn(styles.button, className, {
    [styles.primary]: appearence === "primary",
    [styles.ghost]: appearence === "ghost",
  });

  const arrowClasses = cn(styles.arrow, {
    [styles.right]: arrow === "right",
    [styles.down]: arrow === "down",
  });
  return (
    <button className={buttonClasses} {...props}>
      {children}
      {arrow !== "none" && (
        <span className={arrowClasses}>
          <Arrow />
        </span>
      )}
    </button>
  );
};
