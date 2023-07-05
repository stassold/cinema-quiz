import {QuizState} from "app/types";
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
    payload: {
        questionIndexAnswer: number;
        answerIndex: number;
    };
}

interface FinishQuizAction {
    type: 'FINISH_QUIZ';
}

type QuizAction =
    | SelectAnswerAction
    | UpdateQuestionAction
    | FinishQuizAction;

const initialState: QuizState = {
    score: 0,
    isFinished: false,
    selectedAnswers: [],
    questions
};

const quizReducer = (state = initialState, action: QuizAction): QuizState => {
    switch (action.type) {
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

        case 'SELECT_ANSWER':
            const { questionIndexAnswer, answerIndex } = action.payload;
            const newSelectedAnswers = [...state.selectedAnswers];
            newSelectedAnswers[questionIndexAnswer] = answerIndex;
            return { ...state, selectedAnswers: newSelectedAnswers };

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