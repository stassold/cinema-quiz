import {combineReducers, applyMiddleware, legacy_createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import quizReducer from './reducers';
import { QuizState } from 'app/types';

export interface RootState {
    quiz: QuizState;
}

const rootReducer = combineReducers<RootState>({
    quiz: quizReducer,
});

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const store = legacy_createStore(rootReducer, enhancer);

export default store;