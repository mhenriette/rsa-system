
import { default as axios } from "axios";
import utils from "./utils";
const {token, state, checkSecrets, secrets} = utils


const axiosInstance = axios.create({
  baseURL: "https://payments.paypack.rw/api/",
});

axiosInstance.interceptors.request.use(
  async (config:any) => {
    if (!state.isLoggedIn) {
      if (config.url.includes("auth/agents/authorize")) return config;
      else await authenticate();
    }

    if (token.access) {
      config.headers["Authorization"] = token.access;
    }

    return config;
  },

  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => Promise.resolve(response),
  async (error) => {
    try {
      if (error.response) {
        const originalRequest = error.config;
        if (error.response.status === 401) {
          if (originalRequest.url.includes("auth/agents/authorize")) {
            throw error.response.data;
          }

          if (!originalRequest._retry) {
            originalRequest._retry = true;
            const access_Token = await refreshAccessToken();
            originalRequest.headers["Authorization"] = access_Token;

            return axiosInstance(originalRequest);
          } else if (originalRequest._retry) {
            token.access = null;
            token.refresh = null;
            throw new Error({
              message: "Refresh tokens expired, authenticate again",
            }as any);
          } else {
            throw error.response.data;
          }
        } else {
          throw error.response.data;
        }
      } else {
        throw error;
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

/**
 * Authenticates SDK
 * @return {object}
 */
async function authenticate() {
  return await new Promise(async (resolve, reject) => {
    try {
      checkSecrets();
      const res = await axiosInstance.post("auth/agents/authorize", {
        client_id: secrets.client_id,
        client_secret: secrets.client_secret,
      });

      if (res.data) {
        token.access = res.data.access;
        token.refresh = res.data.refresh;
        state.isLoggedIn = true;
      }

      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Refreshes expired tokens
 * @return {string}
 */
async function refreshAccessToken() {
  if (!token.refresh) return null;
  axiosInstance
    .get(`auth/refresh/${token.refresh}`)
    .then((res) => {
      if (res.data) {
        token.access = res.data.access;
        token.refresh = res.data.refresh;
        return res.data.access;
      }
      return null;
    })
    .catch((error) => {
      throw error;
    });
}

export default axiosInstance;
