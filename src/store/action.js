import * as RootActionTypes from "./action-types";
import * as RootMutationTypes from "./mutation-types";
import axios from "axios";

export default {
  [RootActionTypes.REQUEST_AUTH]: async ({ commit, dispatch }, id) => {
    try {
      const responseAuth = await axios
        .get("https://track-api.leadhit.io/client/test_auth/", {
          headers: {
            "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
            "Leadhit-Site-Id": id,
          },
        })
        .then((response) => {
          return response;
        })
        .catch((err) => {
          return err;
        });
      const { data } = responseAuth;
      if (data.message === "ok") {
        window.localStorage.setItem("leadhit-site-id", id);
        commit(RootMutationTypes.SET_USER_TOKEN, id);

        return data;
      } else {
        window.localStorage.removeItem("leadhit-site-id");
        return data;
      }
    } catch (e) {
      window.localStorage.removeItem("leadhit-site-id");

      return { error: "ID не существуюет!" };
    }
  },
};
