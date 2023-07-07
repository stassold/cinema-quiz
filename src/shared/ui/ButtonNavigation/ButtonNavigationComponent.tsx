import React from "react";
import {Button} from "antd";
import cls from './ButtonNavigation.module.scss'

interface ButtonNavigationProps {
    handlePreviousPage: () => void;
    handleNextPage: () => void;
    handleQuizSubmit: () => void;
    currentPage: number;
    countQuestions: number;
    isFinished: boolean;
    score: number;
}

const ButtonNavigationComponent = ({
    handlePreviousPage,
    handleNextPage,
    handleQuizSubmit,
    currentPage,
    countQuestions,
    isFinished,
    score
}: ButtonNavigationProps ) => {

    return(
        <div>
            <Button onClick={handlePreviousPage} disabled={currentPage === 0}>Предыдущая страница</Button>
            <Button onClick={handleNextPage} disabled={currentPage === Math.ceil(countQuestions / 5) - 1}> Следующая страница</Button>
            <Button onClick={handleQuizSubmit} disabled={isFinished}>Завершить</Button>
            <a href={'/'}>Начать заного</a>
            {isFinished && <div> Ваши очки {score}</div>}
        </div>
    )

}

export default ButtonNavigationComponent