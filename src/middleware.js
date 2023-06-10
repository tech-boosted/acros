import { useLocation, useNavigate } from "react-router-dom";
import { del, get, post, put } from "./API";

export const postMiddleware = (url, data, callback, auth) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  let completeurl = baseURL + url;

  let headers;

  let middlewareCallback = (res) => {
    console.log(res);
    if (res?.data?.success) {
      callback(res);
    } else {
      if (res?.status === 401) {
        localStorage.removeItem("token");
        window.location.replace("/sign-in");
      }
    }
  };

  if (auth) {
    let token = localStorage.getItem("token");
    headers = {
      Authorization: "Bearer " + token,
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, /",
    };
  }

  post(completeurl, data, headers, middlewareCallback);
};

export const putMiddleware = (url, data, callback, auth) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  let completeurl = baseURL + url;

  let headers;

  let middlewareCallback = (res) => {
    if (res?.data?.success) {
      callback(res);
    } else {
      if (res?.status === 401) {
        localStorage.removeItem("token");
        window.location.replace("/sign-in");
        alert("Unathorization");
      }
    }
  };

  if (auth) {
    let token = localStorage.getItem("token");
    headers = {
      Authorization: `Bearer ${token}`,
    };
  } else {
    headers = {
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, /",
    };
  }

  put(completeurl, data, headers, middlewareCallback);
};

export const getMiddleware = (url, callback, auth) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  let Completeurl = baseURL + url;

  let headers;
  let middlewareCallback = (res) => {
    if (res?.data?.success) {
      callback(res);
    } else {
      if (res?.status === 401) {
        localStorage.removeItem("token");
        window.location.replace("/sign-in");
      }
    }
  };

  if (auth) {
    let token = localStorage.getItem("token");
    headers = {
      Authorization: "Bearer " + token,
    };
  } else {
    headers = {
      "Content-Type": "application/json",
    };
  }
  get(Completeurl, headers, middlewareCallback);
};

export const deleteMiddleware = (url, callback, auth) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  let Completeurl = baseURL + url;

  let headers;
  let middlewareCallback = (res) => {
    if (res?.data?.success) {
      callback(res);
    } else {
      if (res?.status === 401) {
        localStorage.removeItem("token");
        window.location.replace("/sign-in");
      }
    }
  };

  if (auth) {
    let token = localStorage.getItem("token");
    headers = {
      Authorization: `Bearer ${token}`,
    };
  } else {
    headers = {
      "Content-Type": "application/json",
    };
  }
  del(Completeurl, headers, middlewareCallback);
};
