const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      applications: [],
      notes: [],
    },
    actions: {
      getCurrentSession: () => {
        const session = JSON.parse(localStorage.getItem("session"));
        return session;
      },
      setSessionStore: (token, user_id, roles) => {
        const payload = { token, user_id, roles };
        localStorage.setItem("session", JSON.stringify(payload));
        setStore({ session: payload });
      },
      clearSession: () => {
        localStorage.removeItem("session");
      },
      getSelf: async () => {
        const actions = getActions();
        try {
          const payload = await actions._fetch(`/api/user`);
          return payload;
        } catch (error) {
          actions.clearSession();
          return error;
        }
      },
      _fetch: async (url, options = {}) => {
        const actions = getActions();
        const session = actions.getCurrentSession();
        if (session != null) {
          options.headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.token}`,
          };
        } else {
          options.headers = { "Content-Type": "application/json" };
        }
        const response = await fetch(process.env.BACKEND_URL + url, options);
        if (response.status >= 200 && response.status < 400) {
          return await response.json();
        } else if (response.status >= 400 && response.status < 500) {
          const error = await response.json();
          throw error;
        } else {
          alert("Unknown Error");
          console.log(await response.text());
          throw "unknown error";
        }
      },
      createUser: async (email, password, first_name, last_name) => {
        const actions = getActions();
        const options = {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
          }),
        };
        const payload = await actions._fetch(`/api/user`, options);
        return payload;
      },
      createNewSession: async (email, password) => {
        const actions = getActions();
        const options = {
          method: "POST",
          body: JSON.stringify({ email: email, password: password }),
        };
        const payload = await actions._fetch(`/api/token`, options);
        actions.setSessionStore(payload.token, payload.user_id);
        return payload;
      },
      getApplications: async () => {
        const actions = getActions();
        const payload = await actions._fetch(`/api/application`);
        setStore({ applications: payload });
      },
      editApp: async (
        job_title,
        company,
        date_created,
        location,
        req_id,
        description,
        experience,
        job_type,
        job_status,
        application_id
      ) => {
        const actions = getActions();
        const options = {
          method: "PUT",
          body: JSON.stringify({
            job_title: job_title,
            company: company,
            date_created: date_created,
            location: location,
            req_id: req_id,
            description: description,
            experience: experience,
            job_type: job_type,
            job_status: job_status,
            application_id: application_id,
          }),
        };
        const payload = await actions._fetch(`/api/application`, options);
        return payload;
      },
      createApp: async (
        job_title,
        company,
        date_created,
        location,
        req_id,
        description,
        experience,
        job_type,
        job_status
      ) => {
        const actions = getActions();
        const options = {
          method: "POST",
          body: JSON.stringify({
            job_title: job_title,
            company: company,
            date_created: date_created,
            location: location,
            req_id: req_id,
            description: description,
            experience: experience,
            job_type: job_type,
            job_status: job_status,
          }),
        };
        const payload = await actions._fetch(`/api/application`, options);
        return payload;
      },
      deleteApp: async (id) => {
        const actions = getActions();
        const options = {
          method: "DELETE",
        };
        const payload = await actions._fetch(`/api/application/${id}`, options);
        return payload;
      },
    },
  };
};

export default getState;
