import axios from 'axios';
import { api_service_url } from '../../config/common-paths';

export const getTransactions = (creator, types) => {
  return new Promise((resolve, reject) => {
    axios.post(api_service_url + '/transaction/list', {
      address: creator,
      types: types,
      page: 1,
      limit: 10
    }).then( response => {
      resolve(response.data.docs);
    }).catch((err) => {
      reject(err);
    });
  });
};