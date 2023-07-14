import React from 'react';
import cls from './MainComponent.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import QuizComponent from "shared/ui/quiz/QuizComponent";


interface MainProps {
    isAuth: boolean
}

const MainComponent = ({isAuth}: MainProps ) => {

    return (
        <main className={classNames(cls.main)}>
            {isAuth ? <QuizComponent/> : <div className={classNames(cls.noAuth)}>Вы не авторизованы</div>}
        </main>
    )

}

export default MainComponent