import { $axios } from "./http.Service";
import { appState } from "../store/store";
import { ref } from "vue";
import { profileTypes } from "../types";
import { useRouter } from "vue-router";

export function getAllProfiles() {
  const allProfiles = ref<profileTypes[]>([]);
  const isLoading = ref<boolean>(false);

  const fetch = () => {
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
  const profileId = ref("");
  const make = (router: any) => {
    $axios
      .post(`/profile/make-profile/${appState.user.uuid}`)
      .then((response: any) => {
        console.log(response.profile.reference);
        router.push({
          name: "UpdateProfile",
          params: { referenceId: response.profile.reference },
        });
        profileId.value = response.profile.reference;
      })
      .catch((err) => err);
  };

  return { make, profileId };
}

export function deleteProfile(referenceId: string) {
  $axios
    .delete(`profile/${referenceId}`)
    .then(() => {
      getAllProfiles().fetch();
    })
    .catch((err) => err);
}
