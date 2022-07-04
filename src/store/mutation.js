import * as MutationTypes from "./mutation-types";

export default {
  [MutationTypes.SET_USER_TOKEN]: (state, payload) => {
    state.userToken["leadhit-site-id"] = payload;
  },
};
