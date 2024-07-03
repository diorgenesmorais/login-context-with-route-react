import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Navigate } from "react-router-dom";

type Props = {
    children: JSX.Element;
};

export const RequireAuth: React.FC<Props> = ({ children }: Props) => {
    const { isAuthenticated } = useContext(AppContext);

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return children;
};
