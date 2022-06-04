import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar.jsx";
import { Social } from "../component/social.jsx";
import { JobLinks } from "../component/jobLinks.jsx";
import { Footer } from "../component/footer";

export const DashBoard = () => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  //declare states here vvvv
  const [state, setState] = useState("State");

  return (
    <div className="dashBody h-100 wrap w-100">
      <Navbar />
      <div className="dashBoardHome container-fluid d-flex flex-wrap">
        <div className="col-8 mt-5">
          <Social />
        </div>
        <div className="col-4 mt-5">
          <Social />
          <JobLinks />
        </div>
      </div>
      <Footer />
    </div>
  );
};
