import {QuizState} from "app/types";
import {questions} from "app/data";
import {FINISH_QUIZ, SET_AUTH, UPDATE_QUESTION} from "app/types";

interface UpdateQuestionAction {
    type: typeof UPDATE_QUESTION;
    payload: {
        questionIndex: number;
        isCorrect: boolean;
        userAnswer: number | null;
    };
}

interface SetAuthAction {
    type: typeof SET_AUTH;
    payload: {
        isAuth: boolean;
    }
}

interface FinishQuizAction {
    type: typeof FINISH_QUIZ;
}

type QuizAction =
    | SetAuthAction
    | UpdateQuestionAction
    | FinishQuizAction;

const initialState: QuizState = {
    score: 0,
    isFinished: false,
    isAuth: false,
    questions
};

const quizReducer = (state = initialState, action: QuizAction): QuizState => {
    switch (action.type) {
        case  UPDATE_QUESTION:
            const { questionIndex, isCorrect, userAnswer } = action.payload;
            return {
                ...state,
                questions: state.questions.map((question, index) => {
                    if (index === questionIndex) {
                        return {
                            ...question,
                            correctUserResponse: isCorrect,
                            userAnswer: userAnswer
                        };
                    }
                    return {
                        ...question,
                        userAnswer: question.userAnswer
                    };
                }),
            };
        case FINISH_QUIZ:
                const correctAnswersCount = state.questions.reduce((count, question) => {
                    if (question.correctUserResponse) {
                        return count + 1;
                    } else {
                        return count;
                    }
                }, 0);
                return {
                    ...state,
                    isFinished: true,
                    score: correctAnswersCount
                };
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.payload.isAuth
            };
        default:
            return state;
    }
};

export default quizReducer;