import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const LoginBanner = (props) => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  //declare states here vvvv
  const [state, setState] = useState("State");
  const [name, setName] = useState("BRIAN");

  return (
    <nav className="navbar navbar-expand-lg">
      <div class="container-fluid">
        <h1 className="mt-4 mx-auto">
          App Tracker <i class="fas fa-file-signature"></i>
        </h1>
      </div>
    </nav>
  );
};
