import React, { useState } from "react";

interface QuestionProps {
    text: string;
    answers: string[];
    onAnswerSelect: (answerIndex: number, questionIndex: number, userAnswer: number | null) => void;
    questionIndex: number;
    correctUserResponse: boolean;
    userAnswer: number | null;
    isFinished: boolean;
}

const QuestionComponent = ({
                               text,
                               answers,
                               onAnswerSelect,
                               questionIndex,
                               correctUserResponse,
                               userAnswer,
                               isFinished
                           }: QuestionProps) => {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(userAnswer);
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
            onAnswerSelect(answerIndex,questionIndex,selectedAnswerIndex)
            handleAnswerSelect(answerIndex);
        } else {
            onAnswerSelect(-1,questionIndex,null)
            setSelectedAnswerIndex(null);
            setIsAnyCheckboxSelected(false);
        }
    };

    const CheckedSelected = () => {
        if (!isAnyCheckboxSelected)
            onAnswerSelect(-1, questionIndex, null);
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
                                disabled={isFinished}
                            />
                            {answer}
                        </label>
                    </li>
                ))}
            </ul>
            <div>
                {isFinished && correctUserResponse && (
                    <p>Вы ответили правильно!</p>
                )}
                {isFinished && !correctUserResponse && (
                    <p>Вы ответили неправильно.</p>
                )}
            </div>
        </div>
    );
};

export default QuestionComponent;