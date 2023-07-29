import axios, {AxiosResponse} from 'axios';
import {handleError, showErrorToUser} from "features/error/error";


interface LoginResponse {
    access_token: string;
    refresh_token: string;
    aud: string;
}

interface LoginData {
    email: string;
    password: string;
}

const BASE_URL = 'http://localhost:3010';

export function login(data: LoginData): Promise<LoginResponse> {
    return axios
        .post<LoginResponse>(`${BASE_URL}/login`, data)
        .then((response: AxiosResponse<LoginResponse>) => response.data)
        .catch((error) => {
            const appError = handleError(error);
            showErrorToUser(appError);
            throw appError;
        });
}

export function signup(data: LoginData): Promise<LoginResponse> {
    return axios
        .post<LoginResponse>(`${BASE_URL}/signup`, data)
        .then((response: AxiosResponse<LoginResponse>) => response.data)
        .catch((error) => {
            const appError = handleError(error);
            showErrorToUser(appError);
            throw appError;
        });
}

export function getUserData(userToken: string): Promise<LoginResponse> {
    return axios
        .get(`${BASE_URL}/user`, {
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        })
        .then((response: AxiosResponse<LoginResponse>) => response.data)
        .catch((error) => {
            const appError = handleError(error);
            showErrorToUser(appError);
            throw appError;
        });
}