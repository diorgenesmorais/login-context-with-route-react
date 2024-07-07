import { IChatHistory } from "../../interfaces";
import { IQuestion } from "../actions/question.action";

export interface IAppState {
    questions: IQuestion[];
    history: IChatHistory[];
}

export const initialState: IAppState = {
    questions: [],
    history: [],
};
