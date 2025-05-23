import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

export const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'device-id': 'wefwefwe',
        //'user-token': localStorage.getItem('auth-token') || '',
    },
});

apiInstance.interceptors.request.use(
    (config) => {
        console.log('status', 'success', config);
        if (config.headers) {
            const authData = localStorage.getItem('auth-data');
            if (authData) {
                const authDataObj = JSON.parse(authData);
                config.headers['user-token'] = `${authDataObj.token}`;
            }
        }
        return config;
    },
    (error) => {
        console.log('status', 'error');
        return Promise.reject(error);
    },
);

apiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.log('Unauthorized access - possibly invalid token');
            localStorage.removeItem('auth-data');
            window.location.href = '/auth/signIn';
        }
        return Promise.reject(error);
    },
);

export const createInstance = <T>(
    config: AxiosRequestConfig,
    options?: AxiosInstance,
): Promise<T> => {
    return apiInstance({
        ...config,
        ...options,
    }).then((res) => res.data);
};

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
