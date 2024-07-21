import { IChatHistory, IQuestion } from "../../interfaces";

export interface IAppState {
    questions: IQuestion[];
    history: IChatHistory[];
}

export const initialState: IAppState = {
    questions: [],
    history: [],
};
