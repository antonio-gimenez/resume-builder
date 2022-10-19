// export function to download a json file from local storage
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

export function drawTextInCanvas(ctx, text, x = 0, y = 0, color = "black", fontSize, fontFamily) {
  if (!ctx) {
    return console.error("ctx is required");
  }
  const font = `${fontSize} ${fontFamily}`;
  console.log(font);
  ctx.font = font;
  ctx.fillStyle = color || "black";
  ctx.fillText(text, x, y);
}
