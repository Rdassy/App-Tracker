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
  const [jobTitle, setJobTitle] = useState("TestTitle");
  const [dateApplied, setDateApplied] = useState("Test Date Applied");
  const [location, setLocation] = useState("Test Location");
  const [experience, setExperience] = useState("Test Experience");
  const [reqId, setReqId] = useState("Test REQ ID");
  const [notes, setNotes] = useState(["Note 1", "Note 2"]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="appFeed h-100 bg-dark px-3">
      <Stack gap={1}>
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
                  placeholder="ENTER TITLE"
                  onChange={(e) => setJobTitle(e.target.value)}
                  value={jobTitle}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Date Applied</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ENTER DATE"
                  onChange={(e) => setDateApplied(e.target.value)}
                  value={dateApplied}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ENTER LOCATION"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Experience</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ENTER EXPERIENCE"
                  onChange={(e) => setExperience(e.target.value)}
                  value={experience}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Job ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ENTER REQID"
                  onChange={(e) => setReqId(e.target.value)}
                  value={reqId}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Notes</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="ADD NOTES"
                  onChange={(e) => setNotes(e.target.value)}
                  value={notes}
                  rows={3}
                />
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
