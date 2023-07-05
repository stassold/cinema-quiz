import React from 'react';
import './styles/index.scss';
import QuizComponent from "shared/ui/quiz/QuizComponent";
import {questions} from "app/data";



export function App() {
    return (
        <div>
            Hello world
            <QuizComponent questions={questions}/>
        </div>
    );
}