import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "./component/navbar.jsx";
import { Social } from "../component/social.jsx";
import { JobLinks } from '../component/jobLinks.jsx';


export const PageName = (props) => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  const logStatus = JSON.parse(localStorage.getItem("session"));
  //declare states here vvvv
  const [state, setState] = useState("State");

  if (logStatus === null) {
    history.push("/");
  }

  return (
    <div className="dashBody w-100">
      <div className="dashBoardHome">
      </div>
    </div>
  );
};
