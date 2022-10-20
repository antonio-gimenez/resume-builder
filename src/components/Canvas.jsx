import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useResume from "../hooks/useResume";
import { drawCanvas, drawCanvasText, wrapText } from "../utils";

function Canvas() {
  const canvasRef = useRef(null);

  const { resume } = useResume();
  // when dimensions of canvas change
  useLayoutEffect(() => {
    const context = canvasRef.current.getContext("2d", { alpha: false });
    drawCanvas(context, canvasRef);
    drawCanvasText(context, resume.profile.firstName);
    wrapText(context, resume.profile.lastName, 60, 40, 600, 1.2);
  }, []);

  return <canvas ref={canvasRef} />;
}

export default Canvas;
