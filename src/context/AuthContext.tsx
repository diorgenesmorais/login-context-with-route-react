import { createContext } from 'react';
import useAuth from '../hooks/useAuth';

export interface IUser {
    isAuthenticated: boolean;
}

export interface IAuthContext extends IUser {
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({ children }: { children: JSX.Element}) => {
    const { isPending, isAuthenticated, login, logout } = useAuth();

    if (isPending) {
        return <h2>Loading...</h2>
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
