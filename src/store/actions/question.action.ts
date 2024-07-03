export interface Action {
    type: string;
}

export enum questionAction {
    ADD_QUESTION = "add question",
    REMOVE_QUESTION = "remove question",
    RESET_QUEUE = "reset queue",
}

export interface IQuestion {
    id: string;
    question: string;
}

export class AddQuestion implements Action {
    readonly type = questionAction.ADD_QUESTION;
    constructor(public payload: IQuestion) {}
}
export class RemoveQuestion implements Action {
    readonly type = questionAction.REMOVE_QUESTION;
    constructor(public payload: { id: string }) {}
}
export class ResetQuestionQueue implements Action {
    readonly type = questionAction.RESET_QUEUE;
}
export type QuestionQueueActions =
    | AddQuestion
    | RemoveQuestion
    | ResetQuestionQueue;
