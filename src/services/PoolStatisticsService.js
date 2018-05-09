import config from '../../config/common-paths';
import axios from 'axios';

export const getPoolsStatistics = () => {
  return new Promise((resolve, reject) => {
    axios.get(config.api_service_url + '/pool/statistics', {}).then( response => {
      resolve(response.data);
    }).catch((err) => {
      reject(err);
    });
  });
};