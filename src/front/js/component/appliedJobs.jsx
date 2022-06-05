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
  const [state, setState] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [dateApplied, setDateApplied] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [jobStatus, setJobStatus] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [reqId, setReqId] = useState("");
  const [jobType, setJobType] = useState("");
  const [appId, setAppId] = useState(0);
  const [notes, setNotes] = useState([]);
  const [show, setShow] = useState(false);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleForm = (id) => {
    setJobTitle(store.applications[id].job_title);
    setDateApplied(store.applications[id].date_created);
    setLocation(store.applications[id].location);
    setExperience(store.applications[id].experience);
    setReqId(store.applications[id].req_id);
    setJobType(store.applications[id].job_type);
    setCompany(store.applications[id].company);
    setDescription(store.applications[id].description);
    setAppId(store.applications[id].id);
    setJobStatus(store.applications[id].job_status);
  };
  const clearForm = () => {
    setJobTitle("");
    setDateApplied("");
    setLocation("");
    setExperience("");
    setReqId("");
    setJobType("");
    setCompany("");
    setDescription("");
    setAppId("");
    setJobStatus("");
  };

  useEffect(() => {
    actions.getApplications();
  }, []);

  return (
    <div className="appFeed h-100 bg-dark px-3">
      <Stack gap={1}>
        <Button
          className="appbtn py-4 my-3"
          variant="dark"
          onClick={() => {
            clearForm();
            handleShow();
          }}
        >
          <i class="fas fa-plus-circle fa-2x"></i>
        </Button>
        {store.applications.map((app, id) => (
          <Button
            className="appbtn py-4 my-3"
            key={id}
            variant="dark"
            onClick={() => {
              handleForm(id);
              handleShow();
            }}
          >
            <div>
              {app.job_title} @ {app.company}
            </div>
          </Button>
        ))}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <input
                onChange={(e) => setCompany(e.target.value)}
                className="border-0"
                placeholder="Company Name"
                value={company}
              ></input>
            </Modal.Title>
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
                  className="appForm"
                  placeholder="ENTER JOB TITLE"
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
                  className="appForm"
                  placeholder="ENTER DATE APPLIED"
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
                  className="appForm"
                  placeholder="ENTER JOB LOCATION"
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
                  className="appForm"
                  placeholder="ENTER EXPERIENCE TYPE"
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
                  className="appForm"
                  placeholder="ENTER JOB ID"
                  onChange={(e) => setReqId(e.target.value)}
                  value={reqId}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Job Type</Form.Label>
                <Form.Control
                  type="text"
                  className="appForm"
                  placeholder="ENTER JOB TYPE"
                  onChange={(e) => setJobType(e.target.value)}
                  value={jobType}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Job Status</Form.Label>
                <Form.Control
                  type="text"
                  className="appForm"
                  placeholder="ENTER APPLICATION STATUS"
                  onChange={(e) => setJobStatus(e.target.value)}
                  value={jobStatus}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  className="appForm"
                  placeholder="ADD NOTES"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  rows={3}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                actions.editApp(
                  jobTitle,
                  company,
                  dateApplied,
                  location,
                  reqId,
                  description,
                  experience,
                  jobType,
                  jobStatus,
                  appId
                );
                refreshPage();
              }}
            >
              Save Changes
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                actions.createApp(
                  jobTitle,
                  company,
                  dateApplied,
                  location,
                  reqId,
                  description,
                  experience,
                  jobType,
                  jobStatus
                );
                refreshPage();
              }}
            >
              Create Application
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                actions.deleteApp(appId);
                refreshPage();
              }}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Stack>
    </div>
  );
};
