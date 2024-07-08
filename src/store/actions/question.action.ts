export enum questionAction {
    ADD_QUESTION = "add question",
    REMOVE_QUESTION = "remove question",
    RESET_QUEUE = "reset queue",
}

export interface IQuestion {
    id: string;
    question?: string;
}

export type AddQuestion = {
    readonly type: questionAction.ADD_QUESTION;
    payload: IQuestion;
};
export type RemoveQuestion = {
    readonly type: questionAction.REMOVE_QUESTION;
    payload: IQuestion;
};
export type ResetQuestionQueue = {
    readonly type: questionAction.RESET_QUEUE;
};
export type QuestionQueueActions =
    | AddQuestion
    | RemoveQuestion
    | ResetQuestionQueue;
