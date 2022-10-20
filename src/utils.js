const defaultLevels = {
  languages: [
    { label: "Elementary", progress: 5, min: 0, max: 20 },
    { label: "Beginner", progress: 25, min: 20, max: 35 },
    { label: "Intermediate", progress: 50, min: 35, max: 55 },
    { label: "Professional", progress: 75, min: 55, max: 80 },
    { label: "Native", progress: 100, min: 80, max: 100 },
  ],
  skills: [
    { label: "Apprentice", progress: 5, min: 0, max: 20 },
    { label: "Novice", progress: 25, min: 20, max: 35 },
    { label: "Intermediate", progress: 50, min: 35, max: 55 },
    { label: "Expert", progress: 75, min: 55, max: 80 },
    { label: "Master", progress: 100, min: 80, max: 100 },
  ],
};

export function findLabelProgress(progress, type = "skills") {
  const levels = defaultLevels[type];
  if (!progress || !levels) {
    return console.error("Progress is required");
  }
  const level = levels.find((level) => progress >= level.min && progress <= level.max);
  return level ? level.label : levels[0].label;
}

export function downloadJsonFile(data, filename) {
  let file = new Blob([JSON.stringify(data)], { type: "application/json" });
  let a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.download = filename;
  a.click();
}

export function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

export function writeTextToCanvas(text, canvas) {
  if (!canvas) return console.error("No canvas available to draw text");
  if (!text) return console.error("No text to draw");
  let ctx = canvas.getContext("2d");
  ctx.font = "30px Arial";
  ctx.fillText(text, 10, 50);
}

export function drawCanvas(context, canvasRef) {
  if (!context) return console.error("No context available to draw canvas");
  if (!canvasRef) return console.error("Canvase Ref is not provided");
  // Resize the canvas to fit the parent element
  const offsetWidth = canvasRef.current.parentElement.offsetWidth - 32;
  const offsetHeight = canvasRef.current.parentElement.offsetHeight - 16; // Accounts for scrollbar
  context.canvas.width = offsetWidth;
  context.canvas.height = offsetHeight;
  context.fillStyle = "white";
  context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  // check if there are spaces available in the room
}

export function drawCanvasText(context, text) {
  if (!context) return console.error("No context available to draw canvas");
  if (!text) return console.error("No text to draw");

  context.fillStyle = "black";
  context.font = "20px Verdana";
  // antialiasing, rendering of text
  context.imageSmoothingEnabled = true;
  context.mozImageSmoothingEnabled = true;
  context.webkitImageSmoothingEnabled = true;
  // scale the text size with the image size
  context.scale(context.width / text.width, context.height / text.height);
  // add text weight 600 : bolder
  context.textAlign = "center";
  context.fillText(text, context.canvas.offsetWidth / 2, 40);
}

export function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split(" ");
  var line = "";

  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + " ";
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}
