import { FETCH_NETWORK_FULFILLED, FETCH_NETWORK_REJECTED } from '../actions/Web3Actions';

const initialState = {
  network_id: null,
  network_fetched: false
};

export const FetchNetworkReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_NETWORK_FULFILLED:
      return {
        ...state,
        network_id: action.payload,
        network_fetched: true
      };
    case FETCH_NETWORK_REJECTED:
      return {
        ...state,
        network_id: null,
        network_fetched: false
      };
    default:
      return state;
  }
};
