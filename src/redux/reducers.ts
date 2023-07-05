import {QuizState, SelectAnswerPayload} from "app/types";
import {questions} from "app/data";

interface UpdateQuestionAction {
    type: 'UPDATE_QUESTION';
    payload: {
        questionIndex: number;
        isCorrect: boolean;
    };
}

interface SelectAnswerAction {
    type: 'SELECT_ANSWER';
    payload: SelectAnswerPayload;
}

interface CalculateScoreAction {
    type: 'CALCULATE_SCORE';
    payload: number;
}

interface FinishQuizAction {
    type: 'FINISH_QUIZ';
}

type QuizAction =
    | UpdateQuestionAction
    | SelectAnswerAction
    | CalculateScoreAction
    | FinishQuizAction;

const initialState: QuizState = {
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
                        questionIndex: action.payload.questionIndex,
                        answerIndex: action.payload.answerIndex,
                    },
                ],
            };
        case 'UPDATE_QUESTION':
            const { questionIndex, isCorrect } = action.payload;
            return {
                ...state,
                questions: state.questions.map((question, index) => {
                    if (index === questionIndex) {
                        return {
                            ...question,
                            correctUserResponse: isCorrect,
                        };
                    }
                    return question;
                }),
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