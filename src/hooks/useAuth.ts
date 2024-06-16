import { useEffect, useState } from "react";
import { getUserLocalStorage, setUserLocalStorage } from "../context/util";

export default function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // como esse processo leva um pouco mais tempo do que a redenrização de AuthProvider
        const user = getUserLocalStorage();
        if (user.isAuthenticated) {
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        setUserLocalStorage({ isAuthenticated: true });
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserLocalStorage({ isAuthenticated: false });
    };

    return { loading, isAuthenticated, login, logout };
}
