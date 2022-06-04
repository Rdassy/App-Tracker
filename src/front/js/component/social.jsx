import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";

export const Social = (props) => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  //declare states here vvvv
  const [state, setState] = useState("State");
  const [name, setName] = useState("BRIAN");

  return (
    <div className="">
      <Stack gap={1}>
        <Form.Control
          className="me-auto"
          placeholder="Link to your Linkedin Profile..."
        />
        <Form.Control
          className="me-auto"
          placeholder="Link to your GitHub Profile..."
        />
        <Form.Control
          className="me-auto"
          placeholder="Link to your Portfolio ..."
        />
        <Form.Control
          className="me-auto"
          placeholder="Link to your Resume..."
        />
        <Form.Control
          className="me-auto"
          placeholder="Link to your Twitter Profile..."
        />
        <Form.Control
          className="me-auto"
          placeholder="Link your Online Presence..."
        />
      </Stack>
    </div>
  );
};
