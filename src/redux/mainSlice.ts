import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from '../store/states/app.state';
import { IQuestion, IChatHistory } from "../interfaces";

const addToHistory = (content: string): IChatHistory => {
    return { role: "user", content: content };
};

const addToQuestion = (question: string): IQuestion => {
    return { id: crypto.randomUUID(), question: question};
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        addQuestion: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                questions: [...state.questions, addToQuestion(action.payload)],
                history: [...state.history, addToHistory(action.payload)],
            };
        },
        removeQuestion: (state, action: PayloadAction<{id: string}>) => {
            return {
                ...state,
                questions: state.questions.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        },
        resetQuestion: (state) => {
            return {
                ...state,
                questions: initialState.questions,
            };
        },
        addConversation: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                history: [...state.history, addToHistory(action.payload)],
            };
        },
        resetHistory: (state) => {
            return {
                ...state,
                history: initialState.history,
            };
        }
    }
});

export const { 
    addQuestion,
    removeQuestion,
    resetQuestion,
    addConversation,
    resetHistory
} = mainSlice.actions;

export default mainSlice.reducer;
