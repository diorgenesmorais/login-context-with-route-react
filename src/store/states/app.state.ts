import {
    IQuestionQueueState,
    questionQueueInitialState,
} from "./question.state";

export interface IAppState {
    questionQueue: IQuestionQueueState;
}

export const initialState: IAppState = {
    questionQueue: questionQueueInitialState,
};
