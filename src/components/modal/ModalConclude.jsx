import React, { useState } from 'react';
import api from '../../services/api';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalConclude = ({ buttonLabel, className, id}) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleConclude = async(id) => {
    await api.put(`meetings/${id}`, { completed: true });
    return window.location.reload();
  }

  return (
    <div>
      <Button color="success" onClick={toggle}>{buttonLabel} <i className="far fa-check-square"></i></Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-success">Concluir encontro</ModalHeader>
        <ModalBody>
         Você está prestes a concluir o encontro. Confirma?
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => handleConclude(id)}>Sim</Button>
          <Button color="secondary" onClick={toggle}>Não</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalConclude;