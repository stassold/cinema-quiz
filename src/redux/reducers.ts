import {QuizState} from "app/types";
import {questions} from "app/data";

interface UpdateQuestionAction {
    type: 'UPDATE_QUESTION';
    payload: {
        questionIndex: number;
        isCorrect: boolean;
        answerUser: number | null;
    };
}

interface FinishQuizAction {
    type: 'FINISH_QUIZ';
}

type QuizAction =
    | UpdateQuestionAction
    | FinishQuizAction;

const initialState: QuizState = {
    score: 0,
    isFinished: false,
    questions
};

const quizReducer = (state = initialState, action: QuizAction): QuizState => {
    switch (action.type) {
        case 'UPDATE_QUESTION':
            const { questionIndex, isCorrect, answerUser } = action.payload;
            return {
                ...state,
                questions: state.questions.map((question, index) => {
                    if (index === questionIndex) {
                        return {
                            ...question,
                            correctUserResponse: isCorrect,
                            userAnswer: answerUser
                        };
                    }
                    return question;
                }),
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