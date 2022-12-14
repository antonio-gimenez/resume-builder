import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import Card, { CardActions, CardContent, CardHeader } from "../Card";
import Collapse from "../Collapse";
import Modal, { ModalActions, ModalContent, ModalHeader } from "../Modal";
import { Button, Input } from "../ui";

function Certifications() {
  const { certificates, updateCertificate, removeCertificate } = useResume();
  const [nextId, setNextId] = useState(certificates.length > 0 ? certificates[certificates.length - 1].id + 1 : 0);

  const [isModalOpen, setModalOpen] = useState({});

  function handleModal(id) {
    setModalOpen({
      [id]: !isModalOpen[id] ? true : false,
    });
  }

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
        <Button color={"blue"} onClick={() => updateCertificate({ id: nextId, name: "" })}>
          Add Certification
        </Button>
      </CardHeader>
      <CardContent>
        {certificates.length > 0 ? (
          certificates.map((certificate) => (
            <Collapse key={certificate.id} open={!certificate.name} title={certificate.name || "(Not specified)"}>
              <div className="container">
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
                <Button color={"red"} onClick={() => handleModal(certificate.id)}>
                  Delete
                </Button>
                <Modal open={isModalOpen[certificate.id]}>
                  <ModalHeader>Delete Entry</ModalHeader>
                  <ModalContent>
                    <p>Are you sure you want to delete this entry?</p>
                  </ModalContent>
                  <ModalActions>
                    <Button
                      onClick={() => {
                        removeCertificate(certificate.id);
                        handleModal(certificate.id);
                      }}
                    >
                      Confirm
                    </Button>
                    <Button color={"blue"} block onClick={() => handleModal(certificate.id)}>
                      Cancel
                    </Button>
                  </ModalActions>
                </Modal>
              </CardActions>
            </Collapse>
          ))
        ) : (
          <div className="container">
            <p className="text-muted">No certifications added yet.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default Certifications;
