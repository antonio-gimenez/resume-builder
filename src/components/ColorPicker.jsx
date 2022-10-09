import React, { useState } from "react";

function ColorPicker({ currentColor, onChange, ...props }) {
  const [color, setColor] = useState(currentColor || "#000000");
  const style = {
    position: "relative",
    marginBottom: "0.5rem",
    width: "100px",
    height: "32px",
  };

  const onChangeColor = (e) => {
    setColor(e.target.value);
    onChange(e);
  };

  return (
    <>
      <input {...props} onChange={onChangeColor} style={style} type="color" defaultValue={color} />
    </>
  );
}

export default ColorPicker;
