import { IChatHistory } from "../../interfaces";

export enum historyAction {
    ADD_CONVERSATION,
    RESET_HISTORY,
}

export type AddConversation = {
    readonly type: historyAction.ADD_CONVERSATION;
    payload: IChatHistory;
};
export type ResetHistory = {
    readonly type: historyAction.RESET_HISTORY;
};

export type HistoryActions = AddConversation | ResetHistory;
