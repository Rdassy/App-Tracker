import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar.jsx";
import { Social } from "../component/social.jsx";
import { JobLinks } from "../component/jobLinks.jsx";

import { LoginBanner } from "../component/loginBanner.jsx";

export const Login = () => {
  //react declarations
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const params = useParams();
  //declare states here vvvv
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="dashBody w-100">
      <LoginBanner />
      <div className="dashBoardHome">
        <div className="">
          <ul
            class="nav nav-pills mb-3 justify-content-center mt-4"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active fs-4"
                id="pills-login-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-login"
                type="button"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
              >
                Login
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link fs-4"
                id="pills-register-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-register"
                type="button"
                role="tab"
                aria-controls="pills-register"
                aria-selected="false"
              >
                Register
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-login"
              role="tabpanel"
              aria-labelledby="pills-login-tab"
            >
              <div class="me-0 d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div class="loginCard border-0 card text-white">
                    <div class="card-body text-center">
                      <div class="mb-md-5 mt-md-4 pb-5">
                        <div class="form-outline form-white mb-4">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Example@example.com"
                            id="typeEmailX"
                            class="form-control form-control-lg pt-3"
                          />
                          <label className="form-label mt-2" for="typeEmailX">
                            Email
                          </label>
                        </div>

                        <div class="form-outline form-white mb-4">
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password (Case Sensitive)"
                            id="typePasswordX"
                            class="form-control form-control-lg pt-3"
                          />
                          <label
                            className="form-label mt-2"
                            for="typePasswordX"
                          >
                            Password
                          </label>
                        </div>

                        <p class="small mb-5 pb-lg-2">
                          <a class="text-white-50" href="#!">
                            Forgot password?
                          </a>
                        </p>

                        <button
                          class="btn btn-outline-light btn-lg px-5"
                          type="submit"
                          onClick={() => {
                            actions
                              .createNewSession(email, password)
                              .then(history.push("/home"));
                          }}
                        >
                          Login
                        </button>
                      </div>

                      <div>
                        <p class="mb-0">
                          Don't have an account?{" "}
                          <a href="#!" class="text-white-50 fw-bold">
                            Sign Up
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-register"
              role="tabpanel"
              aria-labelledby="pills-register-tab"
            >
              <div class="me-0 d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div class="loginCard border-0 card text-white">
                    <div class="card-body text-center">
                      <div class="mb-md-5 mt-md-4 pb-5">
                        <div class="form-outline form-white mb-4">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Example@example.com"
                            id="typeEmailX"
                            class="form-control form-control-lg pt-3"
                          />
                          <label className="form-label mt-2" for="typeEmailX">
                            Email
                          </label>
                        </div>
                        <div class="form-outline form-white mb-4">
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password (Case Sensitive)"
                            id="typePasswordX"
                            class="form-control form-control-lg pt-3"
                          />
                          <label
                            className="form-label mt-2"
                            for="typePasswordX"
                          >
                            Password
                          </label>
                        </div>
                        <div class="form-outline form-white mb-4">
                          <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="First Name"
                            id="typeFirstNameX"
                            class="form-control form-control-lg pt-3"
                          />
                          <label
                            className="form-label mt-2"
                            for="typeFirstNameX"
                          >
                            First Name
                          </label>
                        </div>
                        <div class="form-outline form-white mb-4">
                          <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Last Name"
                            id="typeLastNameX"
                            class="form-control form-control-lg pt-3"
                          />
                          <label
                            className="form-label mt-2"
                            for="typeLastNameX"
                          >
                            Last Name
                          </label>
                        </div>
                        <p class="small mb-5 pb-lg-2">
                          <a class="text-white-50" href="#!">
                            Forgot password?
                          </a>
                        </p>
                        <button
                          class="btn btn-outline-light btn-lg px-5"
                          type="submit"
                          onClick={async () => {
                            try {
                              const payload1 = await actions.createUser(
                                email,
                                password,
                                firstName,
                                lastName
                              );
                              const payload2 = actions.createNewSession(
                                email,
                                password
                              );
                              history.push("/home");
                            } catch {}
                          }}
                        >
                          Login
                        </button>
                      </div>
                      <div>
                        <p class="mb-0">
                          Don't have an account?{" "}
                          <a href="#!" class="text-white-50 fw-bold">
                            Sign Up
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
