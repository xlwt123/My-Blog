import axios from 'axios';
import Vue from 'vue';

const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
});

http.interceptors.request.use((config) => {
  // Do something before request is sent
  config.headers.Authorization = 'Bearer ' + localStorage.token;
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

http.interceptors.response.use((response) => {
  return response;
}, (err) => {
  console.log(err.response);
  if (err.response.data.message) {
    Vue.prototype.$message({
      message: err.response.data.message,
      type: 'error'
    })
  }
  return Promise.reject(err);
})

export default http;