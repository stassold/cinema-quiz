import React from "react";
import {Button} from "antd";
import cls from './ButtonNavigation.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useDispatch} from "react-redux";
import {resetState} from "redux/actions";
import {Link} from "react-router-dom";

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

    const dispatch = useDispatch();

    const handleResetSubmit = () => {
        dispatch(resetState());
    }

    return(
        <div className={classNames(cls.main)}>
            <Button onClick={handlePreviousPage} disabled={currentPage === 0}>Предыдущая страница</Button>
            <Button onClick={handleNextPage} disabled={currentPage === Math.ceil(countQuestions / 5) - 1}> Следующая страница</Button>
            <Button type={"primary"} onClick={handleQuizSubmit} disabled={isFinished}>Завершить</Button>
            <Button onClick={handleResetSubmit}>
                <Link to={'/'}>Начать заного</Link>
            </Button>
            {isFinished && <div> Ваши очки {score}</div>}
        </div>
    )

}

export default ButtonNavigationComponent