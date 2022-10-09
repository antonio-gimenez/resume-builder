import React from "react";
import { Container, Flex } from "../layouts";

function Input({ label, ...props }) {
  const style = {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "0.25rem",
  };
  return (
    <div style={style}>
      {label && (
        <label className="input-label" htmlFor="name">
          {label}
        </label>
      )}
      <div style={{ position: "relative", width: "auto", overflow: "hidden" }}>
        <input {...props} />
        <div className="input-border" />
      </div>
    </div>
  );
}

export default Input;
