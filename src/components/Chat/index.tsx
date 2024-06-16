import React, { useContext } from 'react'
import { AuthContext } from "../../context/AuthContext"

export const Chat: React.FC = () => {
    const { logout } = useContext(AuthContext);

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='text-center'>
                <button
                    className="w-24 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg mb-6"
                    onClick={logout}
                >Log out</button>
                <h2 className='text-2xl font-bold mb-6 text-center'>Meu chat</h2>
            </div>
        </div>
    )
}