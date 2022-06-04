import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../styles/index.css";

export const AppliedJobs = (props) => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  //declare states here vvvv
  const [state, setState] = useState("State");
  const [name, setName] = useState("BRIAN");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="appFeed bg-dark px-3">
      <Stack gap={1}>
        <Button
          className="appbtn py-4 my-3"
          variant="dark"
          onClick={handleShow}
        >
          Job Applied - Company Name 🚀
        </Button>
        <Button
          className="appbtn py-4 my-3"
          variant="dark"
          onClick={handleShow}
        >
          Job Applied - Company Name 🚀
        </Button>
        <Button
          className="appbtn py-4 my-3"
          variant="dark"
          onClick={handleShow}
        >
          Job Applied - Company Name 🚀
        </Button>
        <Button
          className="appbtn py-4 my-3"
          variant="dark"
          onClick={handleShow}
        >
          Job Applied - Company Name 🚀
        </Button>
        <Button
          className="appbtn py-4 my-3"
          variant="dark"
          onClick={handleShow}
        >
          Job Applied - Company Name 🚀
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Company Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="software engineer"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Date Applied</Form.Label>
                <Form.Control type="text" placeholder="12/31/2022" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="remote" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Experience</Form.Label>
                <Form.Control type="text" placeholder="entry-level" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Job ID</Form.Label>
                <Form.Control type="text" placeholder="dev1234" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Notes</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Stack>
    </div>
  );
};
