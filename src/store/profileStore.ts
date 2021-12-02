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
