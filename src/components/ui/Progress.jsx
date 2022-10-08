import React from "react";
import { Container } from "../layouts";

function Progress({ progress, backgroundColor = "rgb(28, 40, 59)" }) {
  const style = {
    position: "relative",

    backgroundColor: "#e0e0e0",
    width: "100%",
    height: "0.4rem",
    borderRadius: "0.5rem",
    margin: "0.2rem 0",
  };

  const styleBar = {
    width: progress + "%",
    backgroundColor: backgroundColor,
    height: "0.4rem",
    borderRadius: "0.5rem",
  };

  return (
    <Container customStyle={style}>
      <div
        role={"progressbar"}
        id="progress-bar"
        ariavaluemin={0}
        ariavaluemax={100}
        ariavaluenow={progress}
        style={{ ...styleBar }}
      />
    </Container>
  );
}

export default Progress;
