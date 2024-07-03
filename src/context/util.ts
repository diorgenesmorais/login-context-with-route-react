import { IUser } from "./AppContext";

export function setUserLocalStorage(user: IUser) {
    localStorage.setItem("vw-lu", JSON.stringify(user));
}

export function getUserLocalStorage() {
    const json = localStorage.getItem("vw-lu");

    if (!json) {
        return { isAuthenticated: false };
    }

    return JSON.parse(json);
}
