import { createContext } from "react";
import useAuth from "../hooks/useAuth";

export interface IUser {
    isAuthenticated: boolean;
}

export interface IAppContext extends IUser {
    login: () => void;
    logout: () => void;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider = ({ children }: { children: JSX.Element }) => {
    const { isPending, isAuthenticated, login, logout } = useAuth();

    if (isPending) {
        return <h2>Loading...</h2>;
    }

    return (
        <AppContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AppContext.Provider>
    );
};
