import React from 'react';
import {Button, Layout} from 'antd'
import cls from './HeaderComponent.module.scss'
import {classNames} from "shared/lib/classNames/classNames";

const {Header} = Layout

interface HeaderProps {
    isAuth: boolean
}

const HeaderComponent = ({isAuth}: HeaderProps ) => {

    return (
        <Header className={classNames(cls.main)}>
            {isAuth ? <Button>Выйти</Button> : <Button>Войти</Button>}
        </Header>
    )

}

export default HeaderComponent