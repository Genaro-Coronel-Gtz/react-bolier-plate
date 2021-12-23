/* eslint-disable class-methods-use-this */
import axios, { AxiosRequestConfig } from 'axios';

export default class AsyncRequests {
  public static instance: AsyncRequests;

  public constructor() {
    axios.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const lStorage = localStorage.getItem('user') as string;
        const user = JSON.parse(lStorage);
        if (user) {
          if (config.headers != null) {
            config.headers['access-token'] = user['access-token'];
            config.headers.client = user.client;
            config.headers.uid = user.uid;
          }
        }

        return config;
      },
      (error) => {
        Promise.reject(error);
      },
    );
  }

  public static getInstance(): AsyncRequests {
    if (!AsyncRequests.instance) {
      AsyncRequests.instance = new AsyncRequests();
    }
    return AsyncRequests.instance;
  }

  public get = (url: string) => new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

  public post = (url: string, data: unknown) => new Promise(
    (resolve, reject) => {
      axios
        .post(url, data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    },
  );
}
