export interface Question {
    text: string;
    answers: string[];
    correctAnswerIndex: number;
    correctUserResponse: boolean;
}

export interface QuizState {
    score: number;
    isFinished: boolean;
    questions: Question[]
}

export interface SelectAnswerPayload {
    questionIndex: number;
    answerIndex: number;
}
