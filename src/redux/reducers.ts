import {QuizState} from "app/types";
import {questions} from "app/data";

interface UpdateQuestionAction {
    type: 'UPDATE_QUESTION';
    payload: {
        questionIndex: number;
        isCorrect: boolean;
        userAnswer: number | null;
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
        case 'FINISH_QUIZ':
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
        default:
            return state;
    }
};

export default quizReducer;