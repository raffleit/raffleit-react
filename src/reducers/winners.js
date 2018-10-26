import {ADD_WINNER} from '../actions/winnerActions'

export function winners(state = [], action) {
  switch (action.type) {
    case ADD_WINNER:
      return [action.winner, ...state];
    default:
      return state;
  }
}
