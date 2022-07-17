import React from "react";
import "./button.scss";

interface Props {
  label: string;
  onClick?: () => void;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const Button = ({ label, onClick, fullWidth, type, disabled }: Props) => {
  return (
    <div
      className="btnContainer"
      onClick={onClick}
      style={{ width: fullWidth ? "100%" : "" }}
    >
      <button
        className="button"
        type={type ? type : "button"}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
