import { Action } from 'redux';


export interface UpdateQuestionAction extends Action<'UPDATE_QUESTION'> {
    payload: {
        questionIndex: number;
        isCorrect: boolean;
        userAnswer: number | null
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

export const updateQuestion = (questionIndex: number, isCorrect: boolean, userAnswer: number | null) : UpdateQuestionAction => ({
    type: 'UPDATE_QUESTION',
    payload: { questionIndex, isCorrect, userAnswer },
});