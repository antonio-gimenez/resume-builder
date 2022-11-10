import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import Collapse from "../Collapse";
import { Input } from "../ui";
// @ts-check
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
    <section className="section">
      <div className="section-header">
        <h2 className="heading-2">Certifications</h2>
        <div className=" button" onClick={() => updateCertificate({ id: nextId, name: "" })}>
          <span>Add Certification</span>
        </div>
      </div>
      <div className="section-content">
        {certificates.length > 0 ? (
          certificates.map((certificate) => (
            <Collapse key={certificate.id} open={!certificate.name} title={certificate.name || "New Certification"}>
              <div className="flex-auto">
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
              <div className="flex flex-end padding-medium">
                <span className="button delete" onClick={() => removeCertificate(certificate.id)}>
                  Delete this entry
                </span>
              </div>
            </Collapse>
          ))
        ) : (
          <div className="flex-auto">
            <p className="text-muted">No certifications added yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Certifications;
