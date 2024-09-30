import { ReactNode } from "react";

type variant = "primary" | "secondary";
type buttonType = "button" | "submit";
type Props = {
  variant?: variant;
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: buttonType;
};

function Button({
  variant = "primary",
  children,
  onClick,
  type = "button",
}: Props) {
  return (
    <button type={type} onClick={onClick} className={`m-2 btn btn-${variant}`}>
      {children}
    </button>
  );
}

export default Button;
