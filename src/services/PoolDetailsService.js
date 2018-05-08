import axios from 'axios';

export const getPoolDetails = (value) => {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:3030/api/v1/pool/' + value, {
      filter: value
    }).then( response => {
      resolve(response.data.docs);
    }).catch((err) => {
      reject(err);
    });
  });
};