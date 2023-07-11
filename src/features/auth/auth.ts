import axios from 'axios';

interface LoginResponse {
    access_token: string;
    refresh_token: string;
    aud: string;
}

interface LoginData {
    email: string;
    password: string;
}

export function login(data: LoginData): Promise<LoginResponse> {
    return axios.post<LoginResponse>('http://localhost:3010/login', data)
        .then(response => response.data)
        .catch(error => {
            throw new Error('Ошибка при аутентификации');
        });
}