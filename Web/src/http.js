import axios from 'axios';
import Vue from 'vue';

const http = axios.create({
  baseURL: 'http://localhost:3000/web/api'
});

export default http;