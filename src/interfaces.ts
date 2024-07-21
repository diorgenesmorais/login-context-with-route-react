export interface IChatHistory {
    role: "user" | "assistant";
    content: string;
}

export interface IQuestion {
    id: string;
    question: string;
}
