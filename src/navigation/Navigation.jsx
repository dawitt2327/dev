import React, {useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";

const hasToken = Boolean(localStorage.getItem("token"));
const user = JSON.parse(localStorage.getItem("user"));
const handleAuth = (route, key) => {
  const publicRoutes = ["/", "/signup", "/signup/client", "/signup/freelancer"];

  if (publicRoutes.includes(route.path)) {
    if (hasToken) {
      if (!user.isAdmin && user.type === "Freelancer")
        return (
          <Route
            key={key}
            path={route.path}
            element={<Navigate to="/feeds" />}
          />
        );
      if (!user.isAdmin && user.type === "Employer")
        return (
          <Route
            key={key}
            path={route.path}
            element={<Navigate to="/client" />}
          />
        );
    }    

    return <Route key={key} path={route.path} element={route.element} />;
  }
  return <Route key={key} path={route.path} element={route.element} />;
};

const Navigation = () => {
  return <Routes>{routes.map((route, key) => handleAuth(route, key))}</Routes>;
};

export default Navigation;
