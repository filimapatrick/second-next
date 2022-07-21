import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import reducers from './Index';

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";


// initial states here

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
  reducers,

  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);