import { Action } from 'redux';
import {SelectAnswerPayload} from "app/types";

export interface SelectAnswerAction extends Action<'SELECT_ANSWER'> {
    payload: SelectAnswerPayload;
}

export interface UpdateQuestionAction extends Action<'UPDATE_QUESTION'> {
    payload: {
        questionIndex: number;
        isCorrect: boolean;
    } ;
}

export interface CalculateScoreAction extends Action<'CALCULATE_SCORE'> {
    payload: number;
}

export interface FinishQuizAction extends Action<'FINISH_QUIZ'> {}

export type QuizAction =
    | UpdateQuestionAction
    | SelectAnswerAction
    | CalculateScoreAction
    | FinishQuizAction;


export const selectAnswer = (answer: SelectAnswerPayload): SelectAnswerAction => {
    return {
        type: 'SELECT_ANSWER',
        payload: answer,
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

export const updateQuestion = (questionIndex: number, isCorrect: boolean) : UpdateQuestionAction => ({
    type: 'UPDATE_QUESTION',
    payload: { questionIndex, isCorrect },
});