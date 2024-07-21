import { useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import eventEmitter from "../../utils/eventEmitter";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { addQuestion } from "../../redux/mainSlice";

type FormData = {
    question: string;
}

const useQuestion = () => {
    const dispatch = useDispatch<AppDispatch>();
    const questions = useSelector((store: RootState) => store.main.questions);
    const { handleSubmit, register, reset} = useForm<FormData>({
        defaultValues: {
            question: ''
        }
    });

    const handleSubmitForm = useCallback((data: FormData) => {
        dispatch(addQuestion(data.question));
        reset({question: ''});
    }, [dispatch, reset])

    useEffect(() => {
        const submitText = () => {
            console.log('submit text function', questions[questions.length - 1]);
        }

        eventEmitter.subscribe('submit-text', submitText);

        return () => eventEmitter.unsubscribe('submit-text', submitText);
    }, [questions]);

    useEffect(() => {
        eventEmitter.emit('submit-text');
    }, [questions]);

    return {
        handleSubmit, register, handleSubmitForm
    }
}

export default useQuestion;
