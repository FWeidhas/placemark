import {writable} from "svelte/store";

export const user = writable({
  email: "",
  token: "",
  id: "",
  isAdmin: false,
});

export const latestDetails = writable(null);
