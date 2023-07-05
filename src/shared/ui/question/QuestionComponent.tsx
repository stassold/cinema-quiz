import React, { useState } from "react";

interface QuestionProps {
    text: string;
    answers: string[];
    onAnswerSelect: (answerIndex: number, questionIndex: number) => void;
    questionIndex: number
    correctUserResponse: boolean
}

const QuestionComponent = ({ text, answers, onAnswerSelect,questionIndex, correctUserResponse }: QuestionProps) => {

    const handleAnswerSelect = (answerIndex: number, questionIndex:number) => {
        console.log('handleAnswerSelect');
        onAnswerSelect(answerIndex,questionIndex);
    };

    return (
        <div>
            <h2>{text}</h2>
            <ul>
                {answers.map((answer, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handleAnswerSelect(index,questionIndex)}
                        >
                            {answer}
                        </button>
                    </li>
                ))}
            </ul>
            <div>
            {correctUserResponse ? (
                <p>Вы ответили правильно!</p>
            ) : (
                <p>Вы ответили неправильно.</p>
            )}
            </div>
        </div>
    );
};

export default QuestionComponent;