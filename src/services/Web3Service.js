import isEmpty from 'lodash/isEmpty';

export const handleAccounts = (accounts, isConstructor) => {
  const { onChangeAccount } = this.props;
  const { store } = this.context;
  let next = accounts[0];
  let curr = this.state.accounts[0];
  next = next && next.toLowerCase();
  curr = curr && curr.toLowerCase();
  const didChange = curr && next && (curr !== next);

  if (isEmpty(this.state.accounts) && !isEmpty(accounts)) {
    this.setState({
      accountsError: null,
      accounts: accounts
    });
  }

  if (didChange && !isConstructor) {
    this.setState({
      accountsError: null,
      accounts
    });
  }

  // If provided, execute callback
  if (didChange && typeof onChangeAccount === 'function') {
    onChangeAccount(next);
  }

  // If available, dispatch redux action
  if (store && typeof store.dispatch === 'function') {
    const didDefine = !curr && next;

    if (didDefine || (isConstructor && next)) {
      store.dispatch({
        type: 'Web3/RECEIVE_ACCOUNT',
        address: next
      });
    } else if (didChange) {
      store.dispatch({
        type: 'Web3/CHANGE_ACCOUNT',
        address: next
      });
    }
  }
};

export const fetchNetwork = () => {
  console.log('Fetching network');
  return new Promise((resolve, reject) => {
    const { web3 } = window;

    web3 && web3.version && web3.version.getNetwork((err, netId) => {
      if (err) {
        reject(err);
      } else {
        resolve(netId);
      }
    });
  });
};


export const fetchAccounts = () => {
  console.log('Fetching accounts');
  return new Promise((resolve, reject) => {
    const { web3 } = window;
    const ethAccounts = getAccounts();

    if (isEmpty(ethAccounts)) {
      web3 && web3.eth && web3.eth.getAccounts((err, accounts) => {
        if (err) {
          reject(err);
        } else {
          resolve(accounts);
        }
      });
    } else {
      resolve(ethAccounts);
    }
  });
};

function getAccounts() {
  try {
    const { web3 } = window;
    // throws if no account selected
    return web3.eth.accounts;
  } catch (e) {
    return [];
  }
}