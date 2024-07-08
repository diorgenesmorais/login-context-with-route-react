import { IChatHistory } from "../../interfaces";

export enum historyAction {
    ADD_CONVERSATION = "add conversation",
    RESET_HISTORY = "reset history",
}

export type HistoryActions = {
    readonly type: historyAction.ADD_CONVERSATION;
    payload: IChatHistory;
} | {
    readonly type: historyAction.RESET_HISTORY;
};

export const addHistory = (payload: IChatHistory): HistoryActions => {
    return {
        type: historyAction.ADD_CONVERSATION,
        payload,
    };
};
export const resetHistory = (): HistoryActions => {
    return {
        type: historyAction.RESET_HISTORY,
    };
};
