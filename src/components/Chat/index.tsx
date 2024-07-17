import React, { useCallback, useEffect } from "react";
import { addQuestion } from "../../store/actions/question.action";
import useAppContext from "../../hooks/useAppContext";
import ChatHistory from "../ChatHistory";
import { resetHistory } from "../../store/actions/history.action";
import eventEmitter from "../../utils/eventEmitter";
import { useForm } from 'react-hook-form';

type FormData = {
    question: string;
}

export const Chat: React.FC = () => {
    const { logout, state, dispatch } = useAppContext();
    const { handleSubmit, register, reset} = useForm<FormData>({
        defaultValues: {
            question: ''
        }
    });

    const handleSubmitForm = useCallback((data: FormData) => {
        dispatch(addQuestion(data.question));
        reset({question: ''});
    }, [dispatch, reset]);

    useEffect(() => {
        const submitText = () => {
            console.log('submit text function', state.questions[state.questions.length - 1]);
        }

        eventEmitter.subscribe('submit-text', submitText);

        return () => eventEmitter.unsubscribe('submit-text', submitText);
    }, [state.questions]);

    useEffect(() => {
        eventEmitter.emit('submit-text');
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
