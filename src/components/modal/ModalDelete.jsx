import React, { useState } from 'react';
import api from '../../services/api';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalDelete = ({ buttonLabel, className, id}) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleDelete = async (id) => {
    await api.delete(`meetings/${id}`);
    return window.location.reload();
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel} <i className="far fa-trash-alt"></i></Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="text-danger">Deletar encontro</ModalHeader>
        <ModalBody>
         Você está prestes a deletar o encontro. Confirma?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => handleDelete(id)}>Sim</Button>
          <Button color="secondary" onClick={toggle}>Não</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalDelete;