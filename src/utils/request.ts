import axios, { AxiosRequestConfig, Method } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export interface RequestConfig
  extends Omit<AxiosRequestConfig, 'baseURL' | 'method' | 'url'> {
  resource: string;
  method?: Method;
}

export async function request<T = void>({
  method = 'GET',
  resource,
  ...config
}: RequestConfig) {
  const requestConfig = {
    method,
    url: resource,
    ...config,
  };

  const { data: response } = await axiosInstance.request<T>(requestConfig);

  return response;
}
