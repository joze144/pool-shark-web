import config from '../../config/common-paths';
import axios from 'axios';

export const getPoolDetails = (value) => {
  return new Promise((resolve, reject) => {
    axios.get(config.api_service_url + '/pool/' + value).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  });
};