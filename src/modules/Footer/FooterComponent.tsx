import React from 'react';
import {Layout} from 'antd'
import cls from './FooterComponent.module.scss'
import {classNames} from "shared/lib/classNames/classNames";

const {Footer} = Layout



const FooterComponent = () => {

    return (
        <Footer className={classNames(cls.main)}>
            ©stassold
        </Footer>
    )

}

export default FooterComponent