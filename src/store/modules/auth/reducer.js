import produce from 'immer';
import { ACTIONS_TYPE } from './actions';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS_TYPE.SIGN_IN_REQUEST:
      return produce(state, draft => {
        draft.loading = true;
      });
    case ACTIONS_TYPE.SIGN_IN_SUCCESS:
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
      });
    default:
      return state;
  }
}
