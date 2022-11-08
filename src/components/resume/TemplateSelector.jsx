import React from "react";
import useResume from "../../hooks/useResume";

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
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: template.accentColor,
            marginRight: "8px",
          }}
        />
        <span>{template.name}</span>
      </div>
    );
  };
  return templates.map((template) => {
    return templateSample(template);
  });
}

export default TemplateSelector;
