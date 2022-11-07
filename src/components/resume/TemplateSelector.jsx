import React from "react";
import useResume from "../../hooks/useResume";

function TemplateSelector() {
  const { templateNumber, updateTemplate, profile } = useResume();

  const templates = [
    {
      name: "Antique",
      id: 0,
      accentColor: "#f5f5f5",
      backgroundColor: "#f5f5f5",
      textColor: "#f5f5f5",
    },
    {
      name: "Hydrochoerus",
      id: 1,
      accentColor: "#914843",
      backgroundColor: "#E6E6E8",
      textColor: "#252122",
    },
  ];
  return (
    <div>
      <ul className="template-selector">
        {templates.map((template) => {
          return (
            <li key={template.id} className="template-select-item" onClick={() => updateTemplate(template.id)}>
              <p>
                {template.name}-{template.id}
              </p>
            </li>
          );
        })}
      </ul>
      <section className={`box template-${templateNumber}`}>
        <div className="template-body">
          <div className={`template-header `}>
            <h1>{profile.firstName}</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TemplateSelector;
