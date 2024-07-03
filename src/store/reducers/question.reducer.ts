import {
    QuestionQueueActions,
    questionAction,
} from "../actions/question.action";
import {
    IQuestionQueueState,
    questionQueueInitialState,
} from "../states/question.state";

export const questionReducer = (
    state: IQuestionQueueState,
    action: QuestionQueueActions
) => {
    switch (action.type) {
        case questionAction.ADD_QUESTION:
            return {
                ...state,
                questions: [...state.questions, action.payload],
            };
        case questionAction.REMOVE_QUESTION:
            return {
                ...state,
                questions: state.questions.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        case questionAction.RESET_QUEUE:
            return questionQueueInitialState;
        default:
            return state;
    }
};
