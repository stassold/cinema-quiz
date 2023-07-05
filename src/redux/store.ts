import { createStore, combineReducers } from 'redux';
import quizReducer from './reducers';
import {QuizState} from "app/types";

export interface RootState {
    quiz: QuizState;
}

const rootReducer = combineReducers<RootState>({
    quiz: quizReducer,
});

const store = createStore(rootReducer);

export default store;