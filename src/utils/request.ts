import axios, { AxiosRequestConfig, Method } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export interface RequestConfig
  extends Omit<AxiosRequestConfig, 'baseURL' | 'method'> {
  resource?: string;
  method?: Method;
}

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
