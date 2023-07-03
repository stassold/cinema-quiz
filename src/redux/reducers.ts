export interface QuizState {
    currentQuestion: number;
    answers: { questionIndex: number; answerIndex: number }[];
    score: number;
    isFinished: boolean;
}

interface NextQuestionAction {
    type: 'NEXT_QUESTION';
}

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
    | NextQuestionAction
    | SelectAnswerAction
    | CalculateScoreAction
    | FinishQuizAction;

const initialState: QuizState = {
    currentQuestion: 0,
    answers: [],
    score: 0,
    isFinished: false,
};

const quizReducer = (state = initialState, action: QuizAction): QuizState => {
    switch (action.type) {
        case 'NEXT_QUESTION':
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1,
            };
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