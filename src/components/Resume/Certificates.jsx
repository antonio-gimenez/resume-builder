import React from "react";

function Certificates({ data }) {
  if (!data) return null;
  return (
    <>
      <div className="heading2">Certificates</div>
      {data.map((certificate) => (
        <div key={certificate.id}>
          <span>{certificate.name}</span>
          <span>{certificate.date}</span>
          <span>{certificate.issuer}</span>
        </div>
      ))}
    </>
  );
}

export default Certificates;
