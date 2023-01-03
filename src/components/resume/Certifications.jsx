import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import useResume from "../../hooks/useResume";
import Card, { CardActions, CardContent, CardHeader } from "../Card";
import Collapse from "../Collapse";
import PopupModal from "../ui/PopupModal";
import { Button, Input } from "../ui";

function Certifications() {
  const { certificates, updateCertificate, removeCertificate } = useResume();
  const [nextId, setNextId] = useState(certificates.length > 0 ? certificates[certificates.length - 1].id + 1 : 0);

  const { closeModal } = useContext(ModalContext);

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
    <Card>
      <CardHeader>
        <h2 className="card-title">Certifications</h2>
        <Button color={"primary"} onClick={() => updateCertificate({ id: nextId, name: "" })}>
          Add Certification
        </Button>
      </CardHeader>
      <CardContent>
        {certificates.length > 0 ? (
          certificates.map((certificate) => (
            <Collapse key={certificate.id} open={!certificate.name} title={certificate.name || "(Not specified)"}>
              <div>
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
              <CardActions>
                <PopupModal
                  id={"cert-" + certificate.id}
                  header="Delete Entry"
                  label={"Delete"}
                  action={
                    <Button
                      color={"accent"}
                      onClick={() => {
                        closeModal("cert-" + certificate.id);
                        removeCertificate(certificate.id);
                      }}
                    >
                      Confirm
                    </Button>
                  }
                >
                  <p>Are you sure you want to delete this entry?</p>
                </PopupModal>
              </CardActions>
            </Collapse>
          ))
        ) : (
          <div>
            <p className="text-muted">No certifications added yet.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default Certifications;
