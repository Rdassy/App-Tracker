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

  useEffect(() => {
    actions.getSelf().then((payload) => {
      if (payload.msg == "Token has expired") {
        actions.clearSession();
      } else {
        setName("Welcome: " + payload.first_name + " " + payload.last_name);
      }
    });
  }, []);

  return (
    <nav className="sticky-top navbar navbar-expand-lg">
      <div class="w-100 d-flex justify-content-between">
        <h1 className="ms-3 mt-4">{name}</h1>
        <div class="dropdown">
          <button
            class="btn btn-lg btn-secondary me-4"
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
            <li
              onClick={() => {
                {
                  actions.clearSession(), history.push("/");
                }
              }}
              className="navDrop btn text-center mx-auto w-100 fs-2"
            >
              Logout
            </li>
            <li
              onClick={() => {
                {
                  actions.getApplications();
                }
              }}
              className="navDrop btn text-center mx-auto w-100 fs-2"
            >
              GetApps
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
