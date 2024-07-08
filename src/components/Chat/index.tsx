import React, { FormEvent, useEffect, useRef } from "react";
import { addQuestion, cleanQuestions, removeQuestion } from "../../store/actions/question.action";
import useAppContext from "../../hooks/useAppContext";
import ChatHistory from "../ChatHistory";

export const Chat: React.FC = () => {
    const { logout, state, dispatch } = useAppContext();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const value = inputRef?.current?.value ?? "";
        dispatch(addQuestion(value));
        if (inputRef.current) {
            inputRef.current.value = "";
        }
        inputRef.current?.focus();
    };

    useEffect(() => {
        inputRef?.current?.focus();
    }, [state.questions]);

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
                            dispatch(cleanQuestions())
                        }
                    >
                        Resetar lista
                    </button>
                </div>
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Meu chat
                </h2>
                <ul className="mb-4 text-start">
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
                </ul>
                <form onSubmit={handleSubmit}>
                    <input type="text" ref={inputRef} />
                </form>
            </div>
        </div>
    );
};
