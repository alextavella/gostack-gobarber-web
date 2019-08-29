import produce from 'immer';
import { ACTIONS_TYPE as authActions } from '../auth/actions';

const INITIAL_STATE = {
  profile: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case authActions.SIGN_IN_SUCCESS:
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    default:
      return state;
  }
}
