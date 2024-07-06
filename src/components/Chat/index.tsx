import React, { FormEvent, useContext, useEffect, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import {
    AddQuestion,
    RemoveQuestion,
    ResetQuestionQueue,
} from "../../store/actions/question.action";

export const Chat: React.FC = () => {
    const { logout, state, dispatch } = useContext(AppContext);
    const inputRef = useRef<HTMLInputElement>(null);
    const {
        questionQueue: { questions },
    } = state;

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const value = inputRef?.current?.value ?? "";
        dispatch(
            new AddQuestion({
                id: crypto.randomUUID(),
                question: value,
            })
        );
        if (inputRef.current) {
            inputRef.current.value = "";
        }
        inputRef.current?.focus();
    };

    useEffect(() => {
        inputRef?.current?.focus();
    }, [questions]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <div>
                    <button
                        className="w-24 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg mb-6"
                        onClick={logout}
                    >
                        Log out
                    </button>
                    <button
                        className="w-48 ml-2 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg mb-6"
                        onClick={() => dispatch(new ResetQuestionQueue())}
                    >
                        Resetar lista
                    </button>
                </div>
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Meu chat
                </h2>
                <ul className="mb-4 text-start">
                    {questions.map(({ question, id }, i) => {
                        return (
                            <li key={i}>
                                {question} -{" "}
                                <a
                                    href="#"
                                    onClick={() =>
                                        dispatch(new RemoveQuestion({ id }))
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
