import axios from 'axios';
import { api_service_url } from '../../config/common-paths';
const tokenContractAbi = require('../../contracts/FishToken.json').abi;

export const transferTokens = (transfer) => {
  const toAddress = transfer.toAddress
  const amount = transfer.amount

  
}