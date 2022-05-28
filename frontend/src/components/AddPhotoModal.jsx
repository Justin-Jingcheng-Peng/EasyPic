import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function AddPhotoModal(props) {
  const [show, setShow] = useState(false);
  const [label, setLabel] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Add a Photo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your masterpiece</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Photo Label</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter label"
                defaultValue={label}
                onChange={setLabel}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicURL">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter URL"
                defaultValue={photoUrl}
                onChange={setPhotoUrl}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={() => props.onSubmit(label, photoUrl)}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
