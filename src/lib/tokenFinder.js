import { getCookie, isElectron } from "./common";

export function getAccessToken() {
  return isElectron()
    ? localStorage.getItem("access_token") ?? null
    : getCookie("access_token");
}

export function getRefreshToken() {
  return isElectron()
    ? localStorage.getItem("refresh_token") ?? null
    : getCookie("refresh_token");
}
