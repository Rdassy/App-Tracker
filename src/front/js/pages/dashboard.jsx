import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar.jsx";
import { Social } from "../component/social.jsx";
import { JobLinks } from "../component/jobLinks.jsx";
import { AppliedJobs } from "../component/appliedJobs.jsx";

export const DashBoard = () => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  //declare states here vvvv
  const [state, setState] = useState("State");

  return (
    <div className="dashBody wrap w-100">
      <Navbar />
      <div className="dashBoardHome justify-content-between container-fluid d-flex flex-wrap">
        <div className="col-md-8">
          <AppliedJobs />
        </div>
        <div className="col-md-4">
          <Social />
          <JobLinks />
        </div>
      </div>
    </div>
  );
};
