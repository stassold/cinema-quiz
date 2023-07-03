import React from 'react';
import './styles/index.scss';
import QuizComponent, {Question} from "shared/ui/quiz/QuizComponent";

const questions: Question[] = [
    {
        text: "Какой язык программирования используется для разработки мобильных приложений под Android?",
        answers: ["Java", "Swift", "C#", "JavaScript"],
        correctAnswerIndex: 0,
    },
    {
        text: "Какой язык программирования используется для создания Web-страниц?",
        answers: ["Java", "Swift", "C#", "JavaScript"],
        correctAnswerIndex: 3,
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