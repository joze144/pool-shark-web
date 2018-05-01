import axios from 'axios';

export const getPools = (value) => {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:3030/api/v1/pool/list', {
      filter: value
    }).then( response => {
      resolve(response.data.docs);
    }).catch((err) => {
      reject(err);
    });
  });
};