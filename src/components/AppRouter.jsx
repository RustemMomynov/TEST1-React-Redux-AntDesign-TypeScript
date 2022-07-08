import React from "react";
import { Route, Redirect, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";

export const AppRouter = () => {
  const auth = true;
  return auth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        );
      })}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        );
      })}
    </Routes>
  );
};

export default AppRouter;
