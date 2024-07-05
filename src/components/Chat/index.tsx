import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";
import {
    AddQuestion,
    RemoveQuestion,
    ResetQuestionQueue,
} from "../../store/actions/question.action";

export const Chat: React.FC = () => {
    const { logout, state, dispatch } = useContext(AppContext);
    const [questionUser, setQuestionUser] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const {
        questionQueue: { questions },
    } = state;

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            dispatch(
                new AddQuestion({
                    id: crypto.randomUUID(),
                    question: questionUser,
                })
            );
            setQuestionUser("");
            inputRef.current?.focus();
        }
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [state.questionQueue.questions]);

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
                <input
                    type="text"
                    value={questionUser}
                    onChange={(event) => setQuestionUser(event.target.value)}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                />
            </div>
        </div>
    );
};
