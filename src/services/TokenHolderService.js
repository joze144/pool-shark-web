import axios from 'axios';

export const getTokenHolders = (token) => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3030/api/v1/holders/' + token).then((response) => {
      resolve(response.data.docs);
    }).catch((error) => {
      reject(error);
    });
  });
};