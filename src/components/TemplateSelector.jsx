import React from "react";
import useResume from "../hooks/useResume";

function TemplateSelector() {
  const { updateTemplate } = useResume();

  const templates = [
    {
      name: "Formal",
      id: 0,
      accentColor: "#3c5284",
      backgroundColor: "#f9fafb",
      textColor: "#3c5284",
    },
    {
      name: "Hydrochoerus",
      id: 1,
      accentColor: "#914843",
      backgroundColor: "#f9fafb",
      textColor: "#914843",
    },
  ];

  // make a square sample depending on the template selected
  const templateSample = (template) => {
    return (
      <div key={template.id} className="template-select-item" onClick={() => updateTemplate(template.id)}>
        <div
          style={{
            width: "2rem",
            height: "2rem",
            backgroundColor: template.accentColor,
            border: "2px solid #fff",
            borderRadius: "50%",
            marginRight: "8px",
          }}
        />
      </div>
    );
  };
  return (
    <div className="flex flex-row">
      {templates.map((template) => {
        return templateSample(template);
      })}
    </div>
  );
}

export default TemplateSelector;
