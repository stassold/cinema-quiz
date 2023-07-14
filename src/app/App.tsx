import React from 'react';
import './styles/index.scss';
import HeaderComponent from "modules/Header/HeaderComponent";
import FooterComponent from "modules/Footer/FooterComponent";
import {useSelector} from 'react-redux';
import {RootState} from "redux/store";
import MainComponent from "modules/Main/MainComponent";



export function App() {
    const isAuth = useSelector((state: RootState) => state.quiz.isAuth);
    return (
        <div>
            <HeaderComponent isAuth={isAuth}/>
            <MainComponent/>
            <FooterComponent/>
        </div>
    );
}