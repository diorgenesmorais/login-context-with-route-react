import { IChatHistory } from "../../interfaces";
import { HistoryActions, historyAction } from "../actions/history.action";
import {
    QuestionQueueActions,
    questionAction,
} from "../actions/question.action";
import { IAppState, initialState } from "../states/app.state";

export type AppActions = QuestionQueueActions | HistoryActions;

export const mainReducer = (state: IAppState, action: AppActions) => {
    switch (action.type) {
        case questionAction.ADD_QUESTION:
            return {
                ...state,
                questions: [...state.questions, action.payload],
                history: [
                    ...state.history,
                    addToHistory(action.payload.question!),
                ],
            };
        case questionAction.REMOVE_QUESTION:
            return {
                ...state,
                questions: state.questions.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        case questionAction.RESET_QUEUE:
            return {
                ...state,
                questions: initialState.questions,
            };
        case historyAction.ADD_CONVERSATION:
            return {
                ...state,
                history: [...state.history, action.payload],
            };
        case historyAction.RESET_HISTORY:
            return {
                ...state,
                history: initialState.history,
            };
        default:
            return state;
    }
};

const addToHistory = (content: string): IChatHistory => {
    return { role: "user", content: content };
};
