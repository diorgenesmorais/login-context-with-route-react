import React, { useContext } from 'react'
import { AuthContext } from "../../context/AuthContext"
import { Navigate } from 'react-router-dom'

export const RequireAuth: React.FC<{children: JSX.Element}> = ({ children }: { children: JSX.Element}) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/" />
    }

    return children
}