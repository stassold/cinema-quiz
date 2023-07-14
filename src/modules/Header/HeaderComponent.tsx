import React, {useState} from 'react';
import {Button, Layout} from 'antd'
import cls from './HeaderComponent.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useDispatch} from "react-redux";
import {setAuth} from "redux/actions";
import Modal from "shared/ui/Modal/ModalComponent";

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
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Header className={classNames(cls.main)}>
            {isAuth ? <Button onClick={() => onLogout(false)}>Выйти</Button> : <Button onClick={openModal}>Войти</Button>}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Модальное окно</h2>
                <p>Это содержимое модального окна</p>
                <button onClick={closeModal}>Закрыть</button>
            </Modal>
        </Header>
    )

}

export default HeaderComponent