import axios, { AxiosRequestConfig, Method, AxiosError } from 'axios';

import { errorHandler } from './promise';

export interface RequestConfig
  extends Omit<AxiosRequestConfig, 'baseURL' | 'method'> {
  resource?: string;
  method?: Method;
}

const axiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return errorHandler(error);
  }
);

export async function request<T = void>({
  method = 'GET',
  resource,
  url,
  ...config
}: RequestConfig) {
  const requestConfig = {
    method,
    url: url ?? resource,
    ...config,
  };

  const { data: response } = await axiosInstance.request<T>(requestConfig);

  return response;
}
