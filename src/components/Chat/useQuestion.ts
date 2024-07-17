import { useForm } from "react-hook-form";
import useAppContext from "../../hooks/useAppContext";
import { useCallback, useEffect } from "react";
import { addQuestion } from "../../store/actions/question.action";
import eventEmitter from "../../utils/eventEmitter";

type FormData = {
    question: string;
}

const useQuestion = () => {
    const { state, dispatch } = useAppContext();
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

    return {
        handleSubmit, register, handleSubmitForm
    }
}

export default useQuestion;
