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
