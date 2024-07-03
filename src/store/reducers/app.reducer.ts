import { QuestionQueueActions } from "../actions/question.action";
import { IAppState } from "../states/app.state";
import { questionReducer } from "./question.reducer";

type AppActions = QuestionQueueActions;

type ReducersMapObject<S, A> = {
    [K in keyof S]: (state: S[K], action: A) => S[K];
};

const combineReducers = <S, A>(reducers: ReducersMapObject<S, A>) => {
    return (state: S, action: A): S => {
        return Object.keys(reducers).reduce((acc, key) => {
            const typeKey = key as keyof S;
            acc[typeKey] = reducers[typeKey](state[typeKey], action);
            return acc;
        }, {} as S);
    };
};

const mainReducer = combineReducers<IAppState, AppActions>({
    questionQueue: questionReducer,
});

export default mainReducer;
