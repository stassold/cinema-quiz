import React, { useState } from "react";

interface QuestionProps {
    text: string;
    answers: string[];
    onAnswerSelect: (answerIndex: number, questionIndex: number) => void;
    questionIndex: number;
    correctUserResponse: boolean;
    userAnswer: number | null;
}

const QuestionComponent = ({
                               text,
                               answers,
                               onAnswerSelect,
                               questionIndex,
                               correctUserResponse,
                               userAnswer
                           }: QuestionProps) => {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
    const [isAnyCheckboxSelected, setIsAnyCheckboxSelected] = useState(false);

    const handleAnswerSelect = (answerIndex: number) => {
        if (selectedAnswerIndex === answerIndex) {
            setSelectedAnswerIndex(null);
            setIsAnyCheckboxSelected(false);
            onAnswerSelect(answerIndex,questionIndex);
        } else {
            setSelectedAnswerIndex(answerIndex);
            setIsAnyCheckboxSelected(true);
            onAnswerSelect(-1,questionIndex);
        }
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        const answerIndex = parseInt(event.target.value, 10);

        if (isChecked) {
            handleAnswerSelect(answerIndex);
            onAnswerSelect(answerIndex,questionIndex)
        } else {
            setSelectedAnswerIndex(null);
            setIsAnyCheckboxSelected(false);
        }
    };

    const CheckedSelected = () => {
        if (!isAnyCheckboxSelected)
            onAnswerSelect(-1, questionIndex, selectedAnswerIndex);
    };


    return (
        <div onBlur={CheckedSelected}>
            <h2>{text}</h2>
            <ul>
                {answers.map((answer, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="checkbox"
                                value={index}
                                checked={selectedAnswerIndex === index}
                                onChange={handleCheckboxChange}
                            />
                            {answer}
                        </label>
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