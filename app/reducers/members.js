import { RECEIVE_DATA } from '../actions/shared';

export default function members(state = [], action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.members;

    default:
      return state;
  }
}
