import { IQuestion } from "../../interfaces";

export enum questionAction {
    ADD_QUESTION = "add question",
    REMOVE_QUESTION = "remove question",
    RESET_QUEUE = "reset queue",
}

export type QuestionQueueActions = {
    readonly type: questionAction.ADD_QUESTION;
    payload: IQuestion;
} | {
    readonly type: questionAction.REMOVE_QUESTION;
    payload: IQuestion;
} | {
    readonly type: questionAction.RESET_QUEUE;
};

export const addQuestion = (question: string): QuestionQueueActions => {
    return {
        type: questionAction.ADD_QUESTION,
        payload: {
            id: crypto.randomUUID(),
            question
        }
    }
}
// export const removeQuestion = (id: string): QuestionQueueActions => {
//     return {
//         type: questionAction.REMOVE_QUESTION,
//         payload: {id}
//     }
// }
export const cleanQuestions = (): QuestionQueueActions => ({type: questionAction.RESET_QUEUE});
