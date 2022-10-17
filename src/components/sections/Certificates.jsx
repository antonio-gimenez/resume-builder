import React from "react";
import { Title } from "../ui";

function Certificates({ data }) {
  if (!data) return null;
  return (
    <>
      <Title>Certificates</Title>

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
