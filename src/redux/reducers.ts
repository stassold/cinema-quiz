import {QuizState} from "app/types";
import {questions} from "app/data";

interface SelectAnswerAction {
    type: 'SELECT_ANSWER';
    payload: number;
}

interface CalculateScoreAction {
    type: 'CALCULATE_SCORE';
    payload: number;
}

interface FinishQuizAction {
    type: 'FINISH_QUIZ';
}

type QuizAction =
    | SelectAnswerAction
    | CalculateScoreAction
    | FinishQuizAction;

const initialState: QuizState = {
    currentQuestion: 0,
    answers: [],
    score: 0,
    isFinished: false,
    questions
};

const quizReducer = (state = initialState, action: QuizAction): QuizState => {
    switch (action.type) {
        case 'SELECT_ANSWER':
            return {
                ...state,
                answers: [
                    ...state.answers,
                    {
                        questionIndex: state.currentQuestion,
                        answerIndex: action.payload,
                    },
                ],
            };
        case 'CALCULATE_SCORE':
            return {
                ...state,
                score: action.payload,
            };
        case 'FINISH_QUIZ':
            return {
                ...state,
                isFinished: true,
            };
        default:
            return state;
    }
};

export default quizReducer;