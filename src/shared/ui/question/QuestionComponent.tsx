import React, { useState } from "react";
import { Answer } from "app/types";

interface QuestionProps {
    text: string;
    answers: Answer[];
    onAnswerSelect: (answerIndex: number) => void;
}

const QuestionComponent = ({ text, answers, onAnswerSelect }: QuestionProps) => {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);

    const handleAnswerSelect = (answerIndex: number) => {
        setSelectedAnswerIndex(answerIndex);
        onAnswerSelect(answerIndex);
    };

    return (
        <div>
            <h2>{text}</h2>
            <ul>
                {answers.map((answer, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handleAnswerSelect(index)}
                            disabled={selectedAnswerIndex !== null}
                        >
                            {answer}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionComponent;