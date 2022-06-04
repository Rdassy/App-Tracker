import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import "../component/jobLink.css";

export const JobLinks = (props) => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  //declare states here vvvv
  const [state, setState] = useState("State");
  const [name, setName] = useState("BRIAN");

  return (
    <div className="appFeed bg-dark px-3 py-2">
      <Stack gap={1}>
        <Form.Control className="me-auto my-2" placeholder="Link to Linkedin..." />
        <Form.Control className="me-auto my-2" placeholder="Link to Indeed..." />
        <Form.Control className="me-auto my-2" placeholder="Link to Job Site..." />
        <Form.Control className="me-auto my-2" placeholder="Link to Job Site..." />
        <Form.Control className="me-auto my-2" placeholder="Link to Job Site..." />
        <Form.Control className="me-auto my-2" placeholder="Link to Job Site..." />
      </Stack>
    </div>
  );
};
