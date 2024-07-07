import { createContext, useReducer } from "react";
import useAuth from "../hooks/useAuth";
import { AppActions, mainReducer } from "../store/reducers/app.reducer";
import { IAppState, initialState } from "../store/states/app.state";

export interface IUser {
    isAuthenticated: boolean;
}

export interface IAppContext extends IUser {
    login: () => void;
    logout: () => void;
    state: IAppState;
    dispatch: React.Dispatch<AppActions>;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider = ({ children }: { children: JSX.Element }) => {
    const { isPending, isAuthenticated, login, logout } = useAuth();
    const [state, dispatch] = useReducer(mainReducer, initialState);

    if (isPending) {
        return <h2>Loading...</h2>;
    }

    return (
        <AppContext.Provider
            value={{ isAuthenticated, login, logout, state, dispatch }}
        >
            {children}
        </AppContext.Provider>
    );
};
