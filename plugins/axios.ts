import axios, { type AxiosInstance } from "axios";

export default defineNuxtPlugin(() => {
  const customAxios: AxiosInstance = axios.create({
    baseURL: "https://google-drive-clone-api.wip/api",
    headers: {
      Authorization: `Bearer `,
    },
  });

  return {
    provide: {
      axios: customAxios,
    },
  };
});
