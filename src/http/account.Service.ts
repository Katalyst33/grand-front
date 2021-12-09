import { $axios } from "./http.Service";
import { appState } from "../store/store";
import { ref } from "vue";
import { profileTypes } from "../types";
import { useRouter } from "vue-router";
import { profileStore } from "../store/profileStore";

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
      .then((response) => {
        window.location.reload();

        return response;
      })
      .finally(() => {
        window.location.reload();
      });
  }
}

export function fetchProfile(referenceId: any) {
  const isLoading = ref(false);

  const fetch = () => {
    $axios
      .get(`profile/${referenceId}`)
      .then((res: any) => {
        profileStore.profile = res.profile;
        profileStore.profile.documents = res.allDocuments;

        console.log(profileStore.profile.documents, "profileStore");
      })
      .finally(() => {
        isLoading.value = true;
      });
  };

  return { fetch, isLoading };
}
