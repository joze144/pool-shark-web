import config from '../../config/common-paths';
import axios from 'axios';

export const getPools = (value) => {
  return new Promise((resolve, reject) => {
    axios.post(config.api_service_url + '/pool/list', {
      filter: value
    }).then( response => {
      resolve(response.data.docs);
    }).catch((err) => {
      reject(err);
    });
  });
};

export const getPoolsByCategory = (value) => {
  return new Promise((resolve, reject) => {
    axios.post(config.api_service_url + '/pool/list/category', {
      category: value,
      page: 0,
      limit: 5
    }).then( response => {
      resolve(response.data.docs);
    }).catch((err) => {
      reject(err);
    });
  });
};

export const getPoolsForAccountActive = (account) => {
  return new Promise ((resolve, reject) => {
    axios.post(config.api_service_url + '/pool/account/active', {
      account: account,
      page: 0,
      limit: 5
    }).then((response) => {
      resolve(response.data.docs);
    }).catch((err) => {
      reject(err);
    });
  });
};

export const getPoolsForAccountPast = (account) => {
  return new Promise((resolve, reject) => {
    axios.post(config.api_service_url + '/pool/account/finished', {
      account: account,
      page: 0,
      limit: 5
    }).then((response) => {
      resolve(response.data.docs);
    }).catch((err) => {
      reject(err);
    });
  });
};