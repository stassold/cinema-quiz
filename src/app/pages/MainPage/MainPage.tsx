import {useSelector} from "react-redux";
import {RootState} from "redux/store";
import HeaderComponent from "modules/Header/HeaderComponent";
import MainComponent from "modules/Main/MainComponent";
import FooterComponent from "modules/Footer/FooterComponent";
import React from "react";

export function MainPage() {
    const isAuth = useSelector((state: RootState) => state.quiz.isAuth);
    return (
        <div>
            <HeaderComponent isAuth={isAuth}/>
            <MainComponent isAuth={isAuth}/>
            <FooterComponent/>
        </div>
    );
}

export default MainPage