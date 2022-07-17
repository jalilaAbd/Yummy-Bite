import React from "react";
import "./inputField.scss";

type props = {
  label: String;
  error?: String;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, error, required, ...rest }: props) => {
  return (
    <div className="inputWrapper">
      <div className="labelWrapper">
        <span className="inputLabel">{label}</span>
        {required && <span style={{ color: "#E3B53E" }}>*</span>}
      </div>
      <input className="input" {...rest} />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Input;
