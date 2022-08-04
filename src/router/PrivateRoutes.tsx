import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { IRootState } from "../reducers/rootReducer";

const PrivateRoutes = ({
  children,
}: {
  children: ReactJSXElement;
}): ReactJSXElement => {
  const { uid }: { uid: number | null } = useSelector(
    (state: IRootState) => state.auth
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!uid) {
      navigate("/auth/login");
    }
  }, [uid]);
  return children;
};

export default PrivateRoutes;
