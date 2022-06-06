import { StyleSheet } from 'react-native';

import { TIME_OUT } from '@config/api';
import { ENVConfig } from '@config/env';
import { ParamsNetwork, ResponseBase } from '@model/config';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import {
  handleErrorAxios,
  handleParameter,
  handleResponseAxios,
} from './api.helper';

const tokenKeyHeader = 'authorization';
const AxiosInstance = axios.create({});

AxiosInstance.interceptors.response.use(
  response => response,
  async function (error) {
    const originalRequest = error.config;
    if (
      error &&
      error.response &&
      (error.response.status === 403 || error.response.status === 401) &&
      !originalRequest._retry
    ) {
      console.error(error.message);
      //TODO: handle refreshToken
      //   originalRequest._retry = true;
      //   refreshTokenRequest = refreshTokenRequest
      //     ? refreshTokenRequest
      //     : refreshToken(originalRequest);
      //   const newToken = await refreshTokenRequest;
      //   refreshTokenRequest = null;
      //   if (newToken === null) {
      //     return Promise.reject(error);
      //   }
      //  //set new token
      //   originalRequest.headers[tokenKeyHeader] = newToken;
      //   return AxiosInstance(originalRequest);
    }
    return Promise.reject(error);
  },
);

//base
function Request<T = Record<string, unknown>>(config: AxiosRequestConfig) {
  const defaultConfig: AxiosRequestConfig = {
    baseURL: ENVConfig.API_URL,
    timeout: TIME_OUT,
    headers: {
      'Content-Type': 'application/json',
      [tokenKeyHeader]: '',
    },
  };

  return new Promise<ResponseBase<T> | null>(rs => {
    AxiosInstance.request(StyleSheet.flatten([defaultConfig, config]))
      .then((res: AxiosResponse<T>) => {
        const result = handleResponseAxios(res);
        rs(result);
      })
      .catch((error: AxiosError<T>) => {
        const result = handleErrorAxios(error);
        rs(result as ResponseBase<T>);
      });
  });
}

async function Get<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, 'GET'));
}

// post
async function Post<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, 'POST'));
}
// put
async function Put<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, 'PUT'));
}

// delete
async function Delete<T>(params: ParamsNetwork) {
  return Request<T>(handleParameter(params, 'DELETE'));
}

type ParameterPostFormData = AxiosRequestConfig & ParamsNetwork;
// post FormData
async function PostFormData<T>(params: ParamsNetwork) {
  //TODO: get authorization token from app state
  const token = '';
  const headers: AxiosRequestConfig['headers'] = {
    [tokenKeyHeader]: token ?? '',
    'Content-Type': 'multipart/form-data',
  };
  return Request<T>(
    handleParameter<ParameterPostFormData>({ ...params, headers }, 'POST'),
  );
}

export const ApiService = {
  Get,
  Post,
  Put,
  Delete,
  PostFormData,
  Request,
};
