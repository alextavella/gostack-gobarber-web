import produce from 'immer';
import { ACTIONS_TYPE as authActions } from './actions';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case authActions.SIGN_IN_REQUEST:
      return produce(state, draft => {
        draft.loading = true;
      });
    case authActions.SIGN_IN_SUCCESS:
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
      });
    default:
      return state;
  }
}
