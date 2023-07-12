import React, { useState } from 'react';

interface FormProps {
    onSubmit: (data: FormData) => void;
}

interface FormData {
    email: string;
    password: string;
}

function AuthForm(props: FormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData: FormData = {
            email,
            password,
        };
        props.onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default AuthForm;