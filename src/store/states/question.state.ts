import { IQuestion } from "../actions/question.action";

export interface IQuestionQueueState {
    questions: IQuestion[];
}

export const questionQueueInitialState: IQuestionQueueState = {
    questions: [],
};
