import {FINISH_QUIZ, SET_AUTH, UPDATE_QUESTION, RESET_STATE} from "app/types";

export interface UpdateQuestionAction {
    type: typeof UPDATE_QUESTION;
    payload: {
        questionIndex: number;
        isCorrect: boolean;
        userAnswer: number | null
    };
}

export interface SetAuthAction {
    type: typeof SET_AUTH;
    payload: {
        isAuth: boolean;
    };
}

export interface FinishQuizAction {
    type: typeof FINISH_QUIZ;
}

export interface SetResetAction {
    type: typeof RESET_STATE;
}


export type QuizAction =
    | SetAuthAction
    | UpdateQuestionAction
    | FinishQuizAction;

export const finishQuiz = (): FinishQuizAction => {
    return {
        type: FINISH_QUIZ,
    };
};

export const updateQuestion = (questionIndex: number, isCorrect: boolean, userAnswer: number | null) : UpdateQuestionAction => ({
    type: UPDATE_QUESTION,
    payload: { questionIndex, isCorrect, userAnswer },
});

export const setAuth = (isAuth: boolean): SetAuthAction => ({
    type: SET_AUTH,
    payload: {isAuth}
})

export const resetState = (): SetResetAction => {
    return { type: RESET_STATE };
}