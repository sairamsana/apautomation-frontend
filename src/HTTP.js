import axios from 'axios';
import config from './config';

axios.defaults.baseURL = config.REACT_APP_API_URL;

const HTTP = axios.create({
  baseURL: axios.defaults.baseURL,
  transformRequest: [
    (data, headers) =>
      !headers['Content-Type'] || headers['Content-Type'] === 'application/json' ? JSON.stringify(data) : data,
  ],
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

HTTP.interceptors.response.use(
  (response) => {
    // check errors here and format and send
    // perform a task before the request is sent
    let {data} = response;
    if (response.status !== 200) {
      data = {
        status: 'failed',
        message: data && data.message ? data.message : response.statusText,
        body: data,
        statusCode: response.status,
      };
    }
    return data;
  },
  (error) => {
    let {message} = error;
    if (error.response?.data?.message) {
      message = error.response.data.message;
    }
    // handle the error
    return {
      status: 'failed',
      message,
      body: error.response && error.response.data ? error.response.data : {},
    };
    // return Promise.reject(error);
  }
);
export default HTTP;
