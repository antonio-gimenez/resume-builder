import React from "react";
import { Title } from "../ui";

function Certificates({ certificates }) {
  if (!certificates) return null;
  return (
    <>
      <Title>Certificates</Title>

      {certificates.map((certificate) => (
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
