import React from "react";
import useAppContext from "../../hooks/useAppContext";
import ChatHistory from "../ChatHistory";
import useQuestion from "./useQuestion";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { resetHistory } from "../../redux/mainSlice";

export const Chat: React.FC = () => {
    const { logout } = useAppContext();
    const dispatch = useDispatch<AppDispatch>();
    const { handleSubmit, handleSubmitForm, register } = useQuestion();

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <ChatHistory />
                <div className="mt-8">
                    <button
                        className="w-24 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg mb-6"
                        onClick={logout}
                    >
                        Log out
                    </button>
                    <button
                        className="w-48 ml-2 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg mb-6"
                        onClick={() =>
                            dispatch(resetHistory())
                        }
                    >
                        Resetar lista
                    </button>
                </div>
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Meu chat
                </h2>
                {/* <ul className="mb-4 text-start">
                    {state.questions.map(({ question, id }, i) => {
                        return (
                            <li key={i}>
                                {question} -{" "}
                                <a
                                    href="#"
                                    onClick={() =>
                                        dispatch(removeQuestion(id))
                                    }
                                >
                                    X
                                </a>
                            </li>
                        );
                    })}
                </ul> */}
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <input type="text" {...register('question')} placeholder="Faça a sua pergunta" />
                </form>
            </div>
        </div>
    );
};
