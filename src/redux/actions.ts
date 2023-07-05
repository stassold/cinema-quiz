import { Action } from 'redux';

export interface SelectAnswerAction extends Action<'SELECT_ANSWER'> {
    payload: number;
}

export interface CalculateScoreAction extends Action<'CALCULATE_SCORE'> {
    payload: number;
}

export interface FinishQuizAction extends Action<'FINISH_QUIZ'> {}

export type QuizAction =
    | SelectAnswerAction
    | CalculateScoreAction
    | FinishQuizAction;


export const selectAnswer = (answerIndex: number): SelectAnswerAction => {
    return {
        type: 'SELECT_ANSWER',
        payload: answerIndex,
    };
};

export const calculateScore = (score: number): CalculateScoreAction => {
    return {
        type: 'CALCULATE_SCORE',
        payload: score,
    };
};

export const finishQuiz = (): FinishQuizAction => {
    return {
        type: 'FINISH_QUIZ',
    };
};