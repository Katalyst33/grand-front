import { $axios } from "../http/http.Service";
import { reactive } from "vue";
import { appState } from "./store";
import { ProfileType } from "../types";

export const profileStore = reactive({
  profileData: {} as ProfileType,
  isLoadingProfile: false,
});

const SET_PROFILE = (profile: any) => {
  profileStore.profileData = profile;
  profileStore.isLoadingProfile = true;
};
export function getProfile() {
  $axios
    .get(`/profile/data/${appState.user.reference}`)
    .then((r) => {
      if (r) {
        SET_PROFILE(r);
      }
    })
    .catch((e) => e);
}
