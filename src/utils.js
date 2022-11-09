export const defaultLevels = {
  languages: [
    { label: "Beginner", id: "lang-1", progress: 5, min: 0, max: 25 },
    { label: "Intermediate", id: "lang-2", progress: 26, min: 26, max: 50 },
    { label: "Professional", id: "lang-3", progress: 51, min: 51, max: 75 },
    { label: "Native", id: "lang-4", progress: 76, min: 76, max: 100 },
  ],
  skills: [
    { label: "Apprentice", id: "skill-1", progress: 5, min: 0, max: 25 },
    { label: "Intermediate", id: "skill-2", progress: 26, min: 26, max: 50 },
    { label: "Expert", id: "skill-3", progress: 51, min: 51, max: 75 },
    { label: "Master", id: "skill-4", progress: 76, min: 76, max: 100 },
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
