import axios from 'axios';

export const getPoolDetails = (value) => {
  return new Promise((resolve, reject) => {
    console.log(value);
    axios.get('http://localhost:3030/api/v1/pool/' + value).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      console.log('error resp: ' + JSON.stringify(error));
      reject(error);
    });
  });
};