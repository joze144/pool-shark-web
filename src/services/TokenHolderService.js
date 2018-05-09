import config from '../../config/common-paths';
import axios from 'axios';

export const getTokenHolders = (token) => {
  return new Promise((resolve, reject) => {
    axios.get(config.api_service_url + '/holders/' + token).then((response) => {
      resolve(response.data.docs);
    }).catch((error) => {
      reject(error);
    });
  });
};