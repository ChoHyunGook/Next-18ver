import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import user, { userSaga } from './user';
import loading from './loading';
import auth, { authSaga } from './auth'

const rootReducer = combineReducers({
  counter,
  user,
  auth,
  loading
  
});

export function* rootSaga() {
  yield all([counterSaga(), userSaga(), authSaga()]);
}

export default rootReducer;