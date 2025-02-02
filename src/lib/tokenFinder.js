import { getCookie, isElectron } from "./common";

export function getAccessToken() {
  return isElectron()
    ? "access_token=" + localStorage.getItem("access_token") ?? null
    : getCookie("access_token");
}

export function getRefreshToken() {
  return isElectron()
    ? "refresh_token=" + localStorage.getItem("refresh_token") ?? null
    : getCookie("refresh_token");
}
