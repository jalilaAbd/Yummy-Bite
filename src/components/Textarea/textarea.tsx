import React from "react";
import "./textarea.scss";

type props = {
  label: String;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const textarea = ({ label, ...rest }: props) => {
  return (
    <div className="textareaWrapper">
      <span className="textareaLabel">{label}</span>
      <textarea className="textarea" {...rest} />
    </div>
  );
};

export default textarea;
