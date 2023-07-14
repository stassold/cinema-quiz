import React, { useState } from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./AuthFormComponent.module.scss"

interface FormProps {
    onSubmit: (formData: FormData) => void;
    nameSubmit: string;
}

export interface FormData {
    email: string;
    password: string;
}

function AuthForm(props: FormProps) {
    const nameSubmit = props.nameSubmit
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData: FormData = {
            email,
            password,
        };
        setEmail('');
        setPassword('');
        props.onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={classNames(cls.formAuth)}>
            <label className={classNames(cls.formLabel)}>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </label>
            <label className={classNames(cls.formLabel)}>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
            </label>
            <button type="submit">{nameSubmit}</button>
        </form>
    );
}

export default AuthForm;