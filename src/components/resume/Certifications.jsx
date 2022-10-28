import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import Collapse from "../Collapse";
import { Input } from "../ui";

function Certifications() {
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
    <div className="container">
      <div className="flex">
        <h1 className="heading-2">Certifications</h1>
        <div className=" button" onClick={() => updateCertificate({ id: nextId, name: "" })}>
          <PlusIcon className="icon" />
          <span>New Entry</span>
        </div>
      </div>
      {certificates.length > 0 ? (
        certificates.map((certificate) => (
          <Collapse key={certificate.id} open={!certificate.name} title={certificate.name || "New Certification"}>
            <div className="flex-auto">
              {/* <div className="grid-auto"> */}
              <Input
                id={certificate.id}
                name="name"
                label="Certificate name"
                defaultValue={certificate.name}
                placeholder="(e.g. React Developer, Full Stack Developer, etc.)"
                onChange={handleUpdateCertificate}
              />
              <Input
                id={certificate.id}
                name="issuer"
                label="Issued by"
                defaultValue={certificate.issuer}
                placeholder="(e.g. Udemy, Pluralsight, etc.)"
                onChange={handleUpdateCertificate}
              />
              <Input
                type="number"
                id={certificate.id}
                label="Expedition year"
                name="year"
                min="1950"
                max={new Date().getFullYear()}
                value={certificate.year || new Date().getFullYear()}
                onChange={handleUpdateCertificate}
              />
            </div>
            <div className="container-delete">
              <TrashIcon className="icon" onClick={() => removeCertificate(certificate.id)} />
            </div>
          </Collapse>
        ))
      ) : (
        <div className="flex-auto">
          <p className="text-muted">No certifications added yet.</p>
        </div>
      )}
    </div>
  );
}

export default Certifications;
