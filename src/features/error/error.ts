import axios from "axios";

export class AppError extends Error {
    readonly name = 'AppError';
    constructor(readonly message: string, readonly status?: number) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

export function handleError(error: any): AppError {
    if (axios.isAxiosError(error)) {
        const { response } = error;
        if (response && response.status) {
            if (response.status === 401) {
                throw new AppError('Invalid token', response.status);
            }
            throw new AppError(response.data?.message || 'Server error', response.status);
        }
        throw new AppError('Network error');
    }
    throw new AppError(error.message);
}

export function showErrorToUser(error: AppError): void {
    const errorElement = document.getElementById('error-message');
    if (errorElement) {
        let message = 'An error occurred';
        switch (error.status) {
            case 401:
                message = 'Please login again';
                break;
            case 404:
                message = 'Resource not found';
                break;
            case 500:
                message = 'Server error';
                break;
            default:
                message = error.message || message;
                break;
        }
        errorElement.innerText = message;
    }
}