import { Action } from 'redux';

export interface SelectAnswerAction extends Action<'SELECT_ANSWER'> {
    payload: {
        questionIndex: number;
        answerIndex: number;
    } ;
}

export interface UpdateQuestionAction extends Action<'UPDATE_QUESTION'> {
    payload: {
        questionIndex: number;
        isCorrect: boolean;
    } ;
}

export interface FinishQuizAction extends Action<'FINISH_QUIZ'> {}

export type QuizAction =
    | UpdateQuestionAction
    | FinishQuizAction;




export const finishQuiz = (): FinishQuizAction => {
    return {
        type: 'FINISH_QUIZ',
    };
};

export const updateQuestion = (questionIndex: number, isCorrect: boolean) : UpdateQuestionAction => ({
    type: 'UPDATE_QUESTION',
    payload: { questionIndex, isCorrect },
});

export const selectAnswer = (questionIndex: number, answerIndex: number) => {
    return {
        type: 'SELECT_ANSWER',
        payload: { questionIndex, answerIndex }
    };
};