import React from "react";
import { Navigate } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";

type Props = {
    children: JSX.Element;
};

export const RequireAuth: React.FC<Props> = ({ children }: Props) => {
    const { isAuthenticated } = useAppContext();

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return children;
};
