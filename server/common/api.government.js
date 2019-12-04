import axios from "axios";
import config from "./config";
import l from "./logger";

const instance = axios.create({
  baseURL: config.government_api.host,
  // params: { ServiceKey: config.government_api.key },
  timeout: 2000
});

instance.interceptors.request.use(
  config => {
    l.debug(config);
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => {
    // l.debug(response);
    return response;
  },
  error => Promise.reject(error)
);

export const reqGet = async config => {
  const params = config;
  return await instance.get("", { params, timeout: 2000 });
};

export const reqPost = (config, data) => {
  return instance.post(config.url, data);
};
