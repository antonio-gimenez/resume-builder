import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import { Container } from "../layouts";
import { Input } from "../ui";

function Certificates() {
  const { certificates, updateCertificate, removeCertificate } = useResume();
  const [nextId, setNextId] = useState(certificates.length > 0 ? certificates[certificates.length - 1].id + 1 : 0);

  useEffect(() => {
    setNextId(certificates.length > 0 ? certificates[certificates.length - 1].id + 1 : 0);
  }, [certificates]);

  const handleUpdateCertificate = (e) => {
    const { id, name, value } = e.target;
    const certificateId = parseInt(id);
    const certificate = certificates.find((certificate) => certificate.id === certificateId);
    const updatedCertificate = { ...certificate, [name]: value };
    updateCertificate(updatedCertificate);
  };

  return (
    <>
      <div className="heading-2">Certificates</div>
      <div>nextId={nextId}</div>
      <div>certificates={JSON.stringify(certificates)}</div>
      <Container style={{ marginTop: "2rem" }}>
        {certificates.map((certificate) => (
          <div
            style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem" }}
            key={certificate.id}
          >
            <Input
              id={certificate.id}
              name="name"
              defaultValue={certificate.name}
              placeholder="Certificate Name"
              onChange={handleUpdateCertificate}
            />
            {/* issuer */}
            <Input
              id={certificate.id}
              name="issuer"
              defaultValue={certificate.issuer}
              placeholder="Issuer"
              onChange={handleUpdateCertificate}
            />
            <Input
              type="number"
              id={certificate.id}
              placeholder="Year"
              name="year"
              min="1950"
              max={new Date().getFullYear()}
              value={certificate.year || new Date().getFullYear()}
              onChange={handleUpdateCertificate}
            />
            <TrashIcon className="icon" onClick={() => removeCertificate(certificate.id)} />
          </div>
        ))}
      </Container>
      <span className="link" role={"link"} onClick={() => updateCertificate({ id: nextId, name: "" })}>
        Add new certificate
      </span>
    </>
  );
}

export default Certificates;
