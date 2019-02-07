import { getInitialData } from '../utils/api';

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveData(members) {
  return {
    type: RECEIVE_DATA,
    members,
  };
}

export function handleInitialData() {
  return function(dispatch) {
    return getInitialData().then(({ members }) => {
      console.log(members);
      dispatch(receiveData(members));
    });
  };
}
