import React, {useState} from 'react';
import {Button, Layout} from 'antd'
import cls from './HeaderComponent.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useDispatch} from "react-redux";
import {setAuth} from "redux/actions";
import {Modal} from 'antd'
import AuthFormComponent from "shared/ui/AuthForm/AuthFormComponent";
import {FormData} from "shared/ui/AuthForm/AuthFormComponent";
import {signup, login} from "features/auth/auth";

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
        if(isReg)
            signup(formData)
        else
            login(formData).then(data => {
                    localStorage.setItem('access_token', data.access_token);
                    localStorage.setItem('refresh_token', data.refresh_token);
                    dispatch(setAuth(true))
            }
            )
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

    const handeButtonLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        onLogout(false);

    }


    return (
        <Header className={classNames(cls.main)}>
            {isAuth ? <Button onClick={handeButtonLogout}>Выйти</Button> : <Button onClick={handeButtonLogin}>Войти</Button>}
            {!isAuth && <Button onClick={handleButtonReg}>Зарегистрироваться</Button>}
            <Modal open={isModalOpen} onCancel={closeModal} footer={null}>
                <AuthFormComponent onSubmit={handleSubmit} nameSubmit={isReg ? 'Зарегистрироваться' : 'Войти'}/>
                <button onClick={closeModal}>Закрыть</button>
            </Modal>
        </Header>
    )

}

export default HeaderComponent