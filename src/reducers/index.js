import {combineReducers} from 'redux';
import * as participants from './participants';
import * as winners from './winners';
import {RESET_ALL} from '../actions/resetActions';

const appReducer = combineReducers({
  ...winners,
  ...participants
});

const rootReducer = (state, action) => {
  if (action.type === RESET_ALL) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
