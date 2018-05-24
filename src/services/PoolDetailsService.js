import { api_service_url } from '../../config/common-paths';
import axios from 'axios';

export const getPoolDetails = (poolAddress) => {
  return new Promise((resolve, reject) => {
    axios.get(api_service_url + '/pool/' + poolAddress)
      .then( response => {
        resolve(response.data);
      }).catch((err) => {
        reject(err);
      });
  });
};