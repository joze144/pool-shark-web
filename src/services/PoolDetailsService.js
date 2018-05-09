import config from '../../config/common-paths';
import axios from 'axios';

export const getPoolDetails = (value) => {
  return new Promise((resolve, reject) => {
    axios.post(config.api_service_url + '/pool/' + value, {
      filter: value
    }).then( response => {
      resolve(response.data.docs);
    }).catch((err) => {
      reject(err);
    });
  });
};