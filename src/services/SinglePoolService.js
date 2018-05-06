import axios from 'axios';

export const getPoolDetails = (value) => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3030/api/v1/pool/' + value).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  });
};