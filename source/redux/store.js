import reducers from './reducers';
import {createStore, applyMiddleware} from 'redux';

/*
 We can add 2nd param to createStore as middleware like redux-thunk, logger.
*/

function configureStore() {
  const store = createStore(reducers)
  return store;
}

const store = configureStore();
export default store;
