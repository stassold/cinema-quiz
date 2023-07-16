export interface Question {
    text: string;
    answers: string[];
    correctAnswerIndex: number;
    correctUserResponse: boolean;
    userAnswer: number | null;
}

export interface QuizState {
    score: number;
    isFinished: boolean;
    questions: Question[];
    isAuth: boolean;
}

export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const SET_AUTH = 'SET_AUTH';
export const FINISH_QUIZ = 'FINISH_QUIZ';
export const RESET_STATE = 'RESET_STATE';
