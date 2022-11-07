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

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export function getBlobUrl(base64) {
  return URL.createObjectURL(base64);
}

export function isNumber(value) {
  // check if value is number and not NaN
  return typeof value === "number" && !isNaN(value);
}
