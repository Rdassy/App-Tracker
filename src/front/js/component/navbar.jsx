import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = (props) => {
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
        <h1 className="mt-4">WELCOME: {name}</h1>
        <div class="dropdown">
          <button
            class="btn btn-lg btn-secondary"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-bars fa-lg mt-3"></i>
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end mt-3"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <div class="dropdown-item">Action</div>
            </li>
            <li>
              <div class="dropdown-item">Another action</div>
            </li>
            <li>
              <div class="dropdown-item">Something else here</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
