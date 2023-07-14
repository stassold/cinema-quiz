import React, {useState} from 'react';
import {Button, Layout} from 'antd'
import cls from './HeaderComponent.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useDispatch} from "react-redux";
import {setAuth} from "redux/actions";
import {Modal} from 'antd'
import AuthFormComponent from "shared/ui/AuthForm/AuthFormComponent";
import {FormData} from "shared/ui/AuthForm/AuthFormComponent";

const {Header} = Layout

interface HeaderProps {
    isAuth: boolean
}

const HeaderComponent = ({isAuth}: HeaderProps ) => {
    const dispatch = useDispatch();
    const onLogout = (isAuth: boolean) => {
        dispatch(setAuth(isAuth))
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isReg, setIsReg] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (formData: FormData) => {
        console.log(formData);
        setIsModalOpen(false);
        // Отправить данные формы на сервер или выполнить другие действия
    };

    const handleButtonReg = () => {
        openModal();
        setIsReg(true);
    }

    const handeButtonLogin = () => {
        openModal();
        setIsReg(false);
    }


    return (
        <Header className={classNames(cls.main)}>
            {isAuth ? <Button onClick={() => onLogout(false)}>Выйти</Button> : <Button onClick={handeButtonLogin}>Войти</Button>}
            <Button onClick={handleButtonReg}>Зарегистрироваться</Button>
            <Modal open={isModalOpen} onCancel={closeModal} footer={null}>
                <AuthFormComponent onSubmit={handleSubmit} nameSubmit={isReg ? 'Зарегистрироваться' : 'Войти'}/>
                <button onClick={closeModal}>Закрыть</button>
            </Modal>
        </Header>
    )

}

export default HeaderComponent