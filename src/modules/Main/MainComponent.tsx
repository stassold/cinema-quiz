import React from 'react';
import cls from './MainComponent.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import QuizComponent from "shared/ui/quiz/QuizComponent";




const MainComponent = () => {

    return (
        <main className={classNames(cls.main)}>
            <QuizComponent/>
        </main>
    )

}

export default MainComponent