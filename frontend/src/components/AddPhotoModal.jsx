import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function AddPhotoModal(props) {
  const [show, setShow] = useState(false);
  const [photo, setPhoto] = useState({ label: "", photo_url: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPhoto((photo) => ({ ...photo, [name]: value }));
  };

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
                value={photo.label}
                onChange={handleChange}
                name="label"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicURL">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter URL"
                value={photo.photo_url}
                onChange={handleChange}
                name="photo_url"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                props.onSubmit(photo);
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
