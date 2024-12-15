import axios from "axios";

export class ApiClient {
  private static instance: ApiClient;

  private readonly baseUrl = import.meta.env.VITE_APP_API_URL;

  private constructor() {
    axios.defaults.baseURL = this.baseUrl;
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers.common["Access-Control-Allow-Methods"] =
      "GET, POST, PUT, DELETE, PATCH, OPTIONS";

    axios.interceptors.response.use(
      (response) => {
        return response.data;
      },
      async (error) => {
        if (error.response?.status === 404) {
          console.error(error);
          return Promise.reject(error);
        }

        return Promise.reject(error);
      }
    );
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  public get(
    url: string,
    params?: unknown,
    responseType?: "json" | "blob" | "text"
  ) {
    if (params) return axios.get(url, { params });
    if (responseType) return axios.get(url, { params, responseType });
    return axios.get(url);
  }

  public post(
    url: string,
    data: unknown,
    config?: import("axios").AxiosRequestConfig
  ) {
    if (config) return axios.post(url, data, config);
    return axios.post(url, data);
  }

  public put(url: string, data?: unknown) {
    return axios.put(url, data);
  }

  public delete(url: string, params?: unknown) {
    return axios.delete(url, { params });
  }

  public deleteWithParams(url: string, data: unknown) {
    return axios.delete(url, { data });
  }
}
