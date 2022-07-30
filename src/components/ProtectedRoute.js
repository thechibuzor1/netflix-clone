import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Store } from "../Store";

export default function ProtectedRoute({ children }) {
  const { state } = useContext(Store);
  const { userData } = state;
  return userData ? children : <Navigate to="/Landing" />;
}
