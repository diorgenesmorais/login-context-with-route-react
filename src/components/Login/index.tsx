import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const { login, isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    // adicionar esse hook para auto redirecionar a rota, ou quando isAuthenticated for alterado por conta do login
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/chat');
        }
    }, [navigate, isAuthenticated]);

    const handleLogin = () => {
        login();
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-md p-8 border border-gray-300 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">You need to log in using Google email</h2>
                <button
                    onClick={handleLogin}
                    className="w-full py-2 px-4 bg-white hover:bg-blue-600 text-gray-500 hover:text-white font-semibold rounded-lg"
                >
                Log In
                </button>
            </div>
        </div>
    );
};

export default Login;
