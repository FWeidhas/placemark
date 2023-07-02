import { w as writable } from "./index.js";
const user = writable({
  email: "",
  token: "",
  id: "",
  isAdmin: false
});
const latestDetails = writable(null);
const latestPois = writable(null);
const latestUsers = writable(null);
export {
  latestPois as a,
  latestDetails as b,
  latestUsers as l,
  user as u
};
