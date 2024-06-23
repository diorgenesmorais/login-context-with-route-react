import { useEffect, useRef, useState, useTransition } from "react";
import { getUserLocalStorage, setUserLocalStorage } from "../context/util";

export default function useAuth() {
    const [isPending, startTransition] = useTransition();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const hasCalledLocalStorage = useRef(false);

    useEffect(() => {
        startTransition(() => {
            // garantir que só vai chamar o código abaixo apenas uma vez
            if (!isAuthenticated && hasCalledLocalStorage.current) return;
            hasCalledLocalStorage.current = true;
    
            // como esse processo leva um pouco mais tempo do que a redenrização de AuthProvider
            const user = getUserLocalStorage();
            if (user.isAuthenticated) {
                setIsAuthenticated(true);
            }
        });
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        setUserLocalStorage({ isAuthenticated: true });
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserLocalStorage({ isAuthenticated: false });
    };

    return { isPending, isAuthenticated, login, logout };
}
