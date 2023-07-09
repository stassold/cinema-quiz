import React  from "react";
import cls from './QuestionComponent.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useCheckboxHandler} from "shared/hook/useCheckboxHandler";

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
    const [checkedIndex, HookHandleCheckboxChange] = useCheckboxHandler(userAnswer);

    const CheckedSelected = () => {
        if (checkedIndex !== null) {
            onAnswerSelect(checkedIndex, questionIndex,checkedIndex);
        }
    };


    return (
        <div onBlur={CheckedSelected} className={classNames(cls.main)}>
            <h2>{text}</h2>
            <ul className={classNames(cls.answer)}>
                {answers.map((answer, index) => (
                    <li key={index} >
                        <label>
                            <input
                                type="checkbox"
                                value={index}
                                checked={checkedIndex === index}
                                onChange={HookHandleCheckboxChange}
                                disabled={isFinished}
                            />
                            <span className={classNames(cls.answerText)}>{answer}</span>
                        </label>
                    </li>
                ))}
            </ul>
            <div>
                {isFinished && correctUserResponse && (
                    <p className={classNames(cls.success)}>Вы ответили правильно!</p>
                )}
                {isFinished && !correctUserResponse && (
                    <p className={classNames(cls.failed)}>Вы ответили неправильно.</p>
                )}
            </div>
        </div>
    );
};

export default QuestionComponent;