import axios from 'axios';

export const getPoolsStatistics = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3030/api/v1/pool/statistics', {}).then( response => {
      resolve(response.data);
    }).catch((err) => {
      reject(err);
    });
  });
};