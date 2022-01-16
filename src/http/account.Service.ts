import { $axios } from "./http.Service";
import { appState } from "../store/store";
import { ref } from "vue";
import { profileTypes } from "../types";
import { useRouter } from "vue-router";
import { profileStore } from "../store/profileStore";
import { destinationStore } from "../store/destinationStore";
import { localStore } from "../../export";

//
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
//
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
//
export function fetchProfile(referenceId: any) {
  const isLoading = ref(false);

  const fetch = () => {
    $axios
      .get(`profile/${referenceId}`)
      .then((res: any) => {
        profileStore.profile = res.profile;
        profileStore.profile.documents = res.allDocuments;
        isLoading.value = true;
      })
      .finally(() => {
        isLoading.value = true;
      });
  };

  return { fetch, isLoading };
}
//

export function updateProfile(referenceId: any) {
  $axios
    .post(`/profile/${referenceId}`, profileStore.profile)
    .then((response: any) => response)
    .catch((error) => {
      return error;
    });
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

export function addToCart(destination: any) {
  let isAdded = destinationStore.myDestinations.find(
    (item: any) => item.uuid === destination.uuid
  );

  if (isAdded) {
    return;
  } else {
    destinationStore.myDestinations.push(destination);
    localStore.setArray("myDestinations", destinationStore.myDestinations);

    if (appState.user) {
      $axios
        .post("/profile/add-to-cart", {
          destinationId: destination.uuid,
          ownerId: appState.user.uuid,
        })
        .then((res) => {
          return res.data;
        })
        .catch((err) => err);
    } else {
      return;
    }
  }
}
