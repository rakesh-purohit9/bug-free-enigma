import Axios from "axios";
const defaultAxios = Axios.create({
  headers: { "Content-Type": "application/json" },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export const getWebhook = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://api.clickup.com/api/v2/team/team_id/webhook`,
    method: "get",
    params,
    headers,
    data,
  });
};
export const getView = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://api.clickup.com/api/v2/list/list_id/view`,
    method: "get",
    params,
    headers,
    data,
  });
};
export const getView1 = ({
  data = {},
  headers = {},
  params = {},
  path = {},
} = {}) => {
  return defaultAxios({
    url: `https://api.clickup.com/api/v2/folder/folder_id/view`,
    method: "get",
    params,
    headers,
    data,
  });
};
