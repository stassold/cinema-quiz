import axios, {AxiosResponse} from 'axios';

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
    return axios.post<LoginResponse>(`${BASE_URL}/login`, data)
        .then((response: AxiosResponse<LoginResponse>) => response.data)
        .catch(error => {
            throw new Error(error.message);
        });
}

export function signup(data: LoginData): Promise<LoginResponse> {
    return axios.post<LoginResponse>(`${BASE_URL}/signup`, data)
        .then((response: AxiosResponse<LoginResponse>) => response.data)
        .catch(error => {
            throw new Error(error.message);
        });
}

export function getUserData(userToken: string): Promise<LoginResponse> {
    return axios.get(`${BASE_URL}/user`, {
        headers: {
            'Authorization': `Bearer ${userToken}`
        }
    })
        .then((response: AxiosResponse<LoginResponse>) => response.data)
        .catch((error: Error) => {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                throw new Error('Invalid token');
            } else {
                throw new Error('Internal server error');
            }
        });
}