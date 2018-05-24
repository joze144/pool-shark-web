import axios from 'axios';
import { api_service_url } from '../../config/common-paths';
const poolContractAbi = require('../../contracts/Pool.json').abi;

export const depositToPool = (pool, ethAmount) => {
  return new Promise((resolve, reject) => {
    const web3 = window.web3;
    const poolAddress = pool;
    const amountWei = web3.toWei(ethAmount, 'ether');

    if (!web3 || !web3.isConnected() || !web3.currentProvider.isMetaMask) {
      reject('No web3!');
    }
    const account = web3.eth.accounts[0];
    if (!account) {
      reject('No account!');
    }

    web3.eth.getTransactionCount(account, (error, txCount) => {
      if (error) {
        reject(error);
      }
      web3.eth.sendTransaction({
        nonce: txCount,
        from: account,
        to: poolAddress,
        value: amountWei,
        gas: 150000}, (err, transactionId) => {
        if (err) {
          reject(error);
        } else {
          axios.post(api_service_url + '/transaction/create', {
            address: account,
            transaction_id: transactionId,
            transaction_type: 'Deposit'
          }).then(() => {
            resolve(transactionId);
          }).catch((err) => {
            reject(err);
          });
        }
      });
    });
  });
};

export const withdrawFromPool = (poolAddress) => {
  return new Promise((resolve, reject) => {
    const web3 = window.web3;
    if (!web3 || !web3.isConnected() || !web3.currentProvider.isMetaMask) {
      reject('No web3!');
    }

    const poolContract = web3.eth.contract(poolContractAbi).at(poolAddress);
    const account = web3.eth.accounts[0];
    if (!account) {
      reject('No account!');
    }

    web3.eth.getTransactionCount(account, (error, txCount) => {
      if (error) {
        reject(error);
      }
      poolContract.withdraw({
        nonce: txCount,
        gasLimit: 100000,
        from: account
      }, (err, transactionId) => {
        if (err) {
          reject(error);
        } else {
          axios.post(api_service_url + '/transaction/create', {
            address: account,
            transaction_id: transactionId,
            transaction_type: 'Withdraw'
          }).then(() => {
            resolve(transactionId);
          }).catch((err) => {
            reject(err);
          });
        }
      });
    });
  });
};
