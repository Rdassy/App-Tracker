import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar.jsx";
import { Social } from '../component/social.jsx';
import { JobLinks } from '../component/jobLinks.jsx';
import { AppliedJobs } from '../component/appliedJobs.jsx'

import { LoginBanner } from "../component/loginBanner.jsx";


export const Login = () => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  //declare states here vvvv
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="dashBody w-100">
      <LoginBanner />
      <div className="dashBoardHome">
      <AppliedJobs />
      <Social />
      <JobLinks />
      </div>
    </div>
  );
};
