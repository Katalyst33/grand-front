import { $axios } from "./http.Service";
import { appState } from "../store/store";
import { ref } from "vue";
import { profileTypes } from "../types";
import { useRouter } from "vue-router";
import { profileStore } from "../store/profileStore";

export function getAllProfiles() {
  const allProfiles = ref<profileTypes[]>([]);
  const isLoading = ref<boolean>(false);
  console.log("deleteProfile 2");

  const fetch = () => {
    console.log("deleteProfile 3");

    $axios
      .get(`/profile/all-profiles/${appState.user.uuid}`)
      .then((response: any) => {
        allProfiles.value = response;
      })
      .finally(() => {
        isLoading.value = true;
      });
  };

  return { allProfiles, isLoading, fetch };
}

export function makeProfile() {
  const make = (router: any) => {
    $axios
      .post(`/profile/make-profile/${appState.user.uuid}`)
      .then((response: any) => {
        router.push({
          name: "UpdateProfile",
          params: { referenceId: response.profile.reference },
        });
      })
      .catch((err) => err);
  };

  return { make };
}

export function updateProfile(referenceId: string) {
  console.log(referenceId, "referenceId");
  $axios
    .post(`/profile/${referenceId}`, profileStore.profile)
    .then((response: any) => response)
    .catch((error) => {
      console.log(error, "error ??");
    });

  console.log(profileStore.profile, referenceId);
}

export function deleteProfile(referenceId: string) {
  const confirmDeselect = confirm(
    "Are you sure you want to deselect this profile?"
  );
  if (confirmDeselect) {
    $axios
      .delete(`profile/${referenceId}`)
      .then((response) => response)
      .finally(() => {
        console.log("deleteProfile 1");
        getAllProfiles();

        const { fetch } = getAllProfiles();
        console.log("deleteProfile a");

        fetch();

        console.log("deleteProfile b");
      });
  }
}
