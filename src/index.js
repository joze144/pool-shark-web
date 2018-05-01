import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles/app.scss';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
  // Edit request config
  return request;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  // Edit request config
  return response;
}, error => {
  return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('app'));