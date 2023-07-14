import React from 'react';
import './styles/index.scss';
import QuizComponent from "shared/ui/quiz/QuizComponent";
import HeaderComponent from "modules/Header/HeaderComponent";
import FooterComponent from "modules/Footer/FooterComponent";



export function App() {
    return (
        <div>
            <HeaderComponent isAuth={true}/>
            <QuizComponent/>
            <FooterComponent/>
        </div>
    );
}