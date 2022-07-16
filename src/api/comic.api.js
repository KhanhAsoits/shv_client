import axios from 'axios';

import { API_CONFIGS } from './config.api';

const baseURL = `${API_CONFIGS.API_URL}/books`;

const comicAPI = {
  getAll: async (params = {}) => {
    const { page = 1, limit = 6, type = '' } = params;
    const url = API_CONFIGS.get_request_config(
      `${baseURL}/${type}/page=${page}/limit=${limit}`
    );
    const res = await axios.get(url).then((res) => res.data);
    return res;
  },
  get: async (id) => {
    const url = API_CONFIGS.get_request_config(`${baseURL}/id=${id}`);
    const res = await axios.get(url).then((res) => res.data);
    return res;
  },
  create: async (data) => {
    const url = API_CONFIGS.get_request_config(`${baseURL}/create`);
    data = { book: data };
    const options = API_CONFIGS.post_request_config();
    const res = await axios.post(url, data, options).then((res) => res.data);
    return res;
  },
  update: async (data) => {
    const url = API_CONFIGS.get_request_config(`${baseURL}/update`);
    data = { book: data };
    const options = API_CONFIGS.post_request_config();
    const res = await axios.post(url, data, options).then((res) => res.data);
    return res;
  },
  remove: async (id) => {
    const url = API_CONFIGS.get_request_config(`${baseURL}/delete`);
    const data = { id };
    const options = API_CONFIGS.post_request_config();
    const res = await axios.post(url, data, options).then((res) => res.data);
    return res;
  },
};

export default comicAPI;
