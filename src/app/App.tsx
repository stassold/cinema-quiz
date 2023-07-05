import React from 'react';
import './styles/index.scss';
import QuizComponent from "shared/ui/quiz/QuizComponent";
import {Question} from "app/types";


const questions: Question[] = [
    {
        text: "Какой язык программирования используется для разработки мобильных приложений под Android?",
        answers: ["Java", "Swift", "C#", "JavaScript"],
        correctAnswerIndex: 0,
        correctUserResponse: false
    },
    {
        text: "Какой язык программирования используется для создания Web-страниц?",
        answers: ["Java", "Swift", "C#", "JavaScript"],
        correctAnswerIndex: 3,
        correctUserResponse: false
    },
    // Добавьте другие вопросы
];

export function App() {
    return (
        <div>
            Hello world
            <QuizComponent questions={questions}/>
        </div>
    );
}