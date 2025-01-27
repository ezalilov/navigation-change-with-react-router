import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ExitDialog = ({ onClose, onOk, visible = false }) => {
  return (
    <>
      <Modal
        centered
        show={visible}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to move to another page?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onOk}>
            Yes, I want to move to another page
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExitDialog;
