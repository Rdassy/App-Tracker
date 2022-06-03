import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar.jsx";

export const Login = () => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  //declare states here vvvv
  const [state, setState] = useState("State");

  return (
    <div className="dashBody w-100">
      <Navbar />
      <div className="dashBoardHome">
        ADD PAGE CONTENT HERE!!!!!!!!!!!!!!!!!!!!!!!!!
      </div>
    </div>
  );
};
