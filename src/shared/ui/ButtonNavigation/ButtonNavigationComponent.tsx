import React from "react";
import {Button} from "antd";

interface ButtonNavigationProps {
    handlePreviousPage: () => void;
    handleNextPage: () => void;
    handleQuizSubmit: () => void;
    currentPage: number;
    countQuestions: number;
    isFinished: boolean;
}

const ButtonNavigationComponent = ({
    handlePreviousPage,
    handleNextPage,
    handleQuizSubmit,
    currentPage,
    countQuestions
}: ButtonNavigationProps ) => {

    return(
        <div>
            <Button onClick={handlePreviousPage} disabled={currentPage === 0}>Предыдущая страница</Button>
            <Button onClick={handleNextPage} disabled={currentPage === Math.ceil(countQuestions / 5) - 1}> Следующая страница</Button>
            <Button onClick={handleQuizSubmit}>Завершить</Button>

        </div>
    )

}

export default ButtonNavigationComponent