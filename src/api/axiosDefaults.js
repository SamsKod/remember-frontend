import axios from 'axios';

axios.defaults.baseURL = "https://remember-backend-ff8df02164f2.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();