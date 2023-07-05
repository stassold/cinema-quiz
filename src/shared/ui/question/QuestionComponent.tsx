import React, { useState } from "react";

interface QuestionProps {
    text: string;
    answers: string[];
    onAnswerSelect: (answerIndex: number, questionIndex: number) => void;
    questionIndex: number;
    correctUserResponse: boolean;
}

const QuestionComponent = ({
                               text,
                               answers,
                               onAnswerSelect,
                               questionIndex,
                               correctUserResponse,
                           }: QuestionProps) => {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
    const [isAnyCheckboxSelected, setIsAnyCheckboxSelected] = useState(false);

    const handleAnswerSelect = (answerIndex: number) => {
        if (selectedAnswerIndex === answerIndex) {
            setSelectedAnswerIndex(null);
            setIsAnyCheckboxSelected(false);
        } else {
            setSelectedAnswerIndex(answerIndex);
            setIsAnyCheckboxSelected(true);
        }
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        const answerIndex = parseInt(event.target.value, 10);

        if (isChecked) {
            handleAnswerSelect(answerIndex);
        } else {
            setSelectedAnswerIndex(null);
            setIsAnyCheckboxSelected(false);
        }
        if (isAnyCheckboxSelected)
            onAnswerSelect(-1,questionIndex)
        else
            onAnswerSelect(answerIndex,questionIndex)

    };


    return (
        <div>
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