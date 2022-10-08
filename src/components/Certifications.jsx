import React from "react";
import { certificates } from "../data.json";
import { Container } from "./layouts";
import { Title } from "./ui";

function Certifications() {
  return (
    <Container className="Container">
      <Title>Certifications</Title>

      {certificates.map((certificate) => (
        <div key={certificate.id}>
          <span>{certificate.name}</span>
          <span>{certificate.date}</span>
          <span>{certificate.issuer}</span>
        </div>
      ))}
    </Container>
  );
}

export default Certifications;
