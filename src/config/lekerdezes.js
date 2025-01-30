import { callWithAsyncErrorHandling, ref } from "vue";
import { sorszam, store, storeExtra, storeszunet } from "../config/store.js";
import { store2, store3, store_login } from "../config/store.js";

export async function Burgercucc(termek) {
  var requestOptions = {
    method: "GET",
  };
  return new Promise((resolve, reject) => {
    fetch(`https://pollakbufe.hu/noLogin/${termek}`, requestOptions)
      .then(async (result) => {
        const res = await result.text();
        const valasz = JSON.parse(res);
        resolve(valasz);
      })
      .catch((error) => console.log("error", error));
  });
}

export async function termekLekerdezes(id) {
  var requestOptions = {
    method: "GET",
  };
  return new Promise((resolve, reject) => {
    fetch(`https://pollakbufe.hu/noLogin/id/${id}`, requestOptions)
      .then(async (result) => {
        const res = await result.text();
        const valasz = JSON.parse(res);
        resolve(valasz);
      })
      .catch((error) => console.log("error", error));
  });
}

export async function SzunetLekerdezes() {
  var requestOptions = {
    method: "GET",
  };
  return new Promise((resolve, reject) => {
    fetch(`https://pollakbufe.hu/noLogin/szunet`, requestOptions)
      .then(async (result) => {
        const res = await result.text();
        const valasz = JSON.parse(res);
        console.log(valasz);
        resolve(valasz);
      })
      .catch((error) => console.log("error", error));
  });
}

export async function AktualisSzunetLekerdezes() {
  const accessToken = document.cookie
    .replace(/ /g, "")
    .split(";")
    .find((row) => row.startsWith("access_token"));
  const refreshToken = document.cookie
    .replace(/ /g, "")
    .split(";")
    .find((row) => row.startsWith("refresh_token"));

  var requestOptions = {
    method: "GET",
    headers: {
      "X-Authorization": accessToken,
      RefreshToken: refreshToken,
    },
    credentials: "include",
  };
  return new Promise((resolve, reject) => {
    fetch(`https://pollakbufe.hu/noLogin/aktualisSzunet`, requestOptions)
      .then(async (result) => {
        const res = await result.text();
        console.log(res);

        if (res === "Hibás token") {
          await logout();
          location.replace("https://bufe.pollak.info");
          reject(res);
        } else {
          const valasz = JSON.parse(res);
          console.log(valasz);
          resolve(valasz);
        }
      })
      .catch((error) => console.log("error", error));
  });
}

async function UtolsoSorszam() {
  var requestOptions = {
    method: "GET",
  };
  return new Promise((resolve, reject) => {
    fetch(`https://pollakbufe.hu/noLogin/UtolsoSorszam`, requestOptions)
      .then(async (result) => {
        const res = await result.text();
        const valasz = JSON.parse(res);
        resolve(valasz);
      })
      .catch((error) => console.log("error", error));
  });
}

export async function UtolsoNapiSorszam() {
  var requestOptions = {
    method: "GET",
  };
  return new Promise((resolve, reject) => {
    fetch(`https://pollakbufe.hu/noLogin/NapiSorszam`, requestOptions)
      .then(async (result) => {
        const res = await result.text();
        const valasz = JSON.parse(res);
        resolve(valasz);
      })
      .catch((error) => console.log("error", error));
  });
}

let basketData = new FormData();

export function AddElementsToBasket(
  id,
  mustar,
  ketchup,
  majonez,
  csipos,
  hagyma
) {
  basketData.append("szendvics", id);
  basketData.append("mustar", mustar);
  basketData.append("ketchup", ketchup);
  basketData.append("majonez", majonez);
  basketData.append("csipos", csipos);
  basketData.append("hagyma", hagyma);

  GetBasketCount();
}

export function GetElementsInBasket() {
  let id = GetFormData();
  var requestOptions = {
    method: "GET",
  };
  return new Promise((resolve, reject) => {
    fetch(`https://pollakbufe.hu/noLogin/id/${id}`, requestOptions)
      .then(async (result) => {
        const res = await result.text();
        const valasz = JSON.parse(res);
        console.log(valasz);
        resolve(valasz);
      })
      .catch((error) => console.log("error", error));
  });
}

export function GetBasketCount() {
  store.kosar[0].darab++;
}

export async function GetFormData() {
  let count = 0;
  let e = "";
  for (const element of basketData.getAll("szendvics")) {
    count++;
  }
  store2.kosar = [];
  for (let i = 0; i < count; i++) {
    e = basketData.getAll("szendvics")[i];
    store2.kosar.push({
      darab: await termekLekerdezes(e),
    });
    if (basketData.get("mustar") != null) {
      store2.szoszok.push({
        mustar: basketData.get("mustar"),
        ketchup: basketData.get("ketchup"),
        majonez: basketData.get("majonez"),
        csipos: basketData.get("csipos"),
        hagyma: basketData.get("hagyma"),
      });
      basketData.delete("mustar");
      basketData.delete("ketchup");
      basketData.delete("majonez");
      basketData.delete("csipos");
      basketData.delete("hagyma");
    }
  }
}

export async function GetFormData2() {
  let count = 0;
  let e = "";
  for (const element of basketData.getAll("egyeb")) {
    count++;
  }
  storeExtra.kosarExtra = [];
  for (let i = 0; i < count; i++) {
    e = basketData.getAll("egyeb")[i];
    storeExtra.kosarExtra.push({
      darabExtra: await termekLekerdezes(e),
    });
  }
}

export function GetExtraInBasket() {
  let id = GetFormData2();
  var requestOptions = {
    method: "GET",
  };
  return new Promise((resolve, reject) => {
    fetch(`https://pollakbufe.hu/noLogin/id/${id}`, requestOptions)
      .then(async (result) => {
        const res = await result.text();
        const valasz = JSON.parse(res);
        console.log(valasz);
        resolve(valasz);
      })
      .catch((error) => console.log("error", error));
  });
}

export function JelenlegiSorszam(utolsoSorszam) {
  let sorszam = utolsoSorszam;
  return sorszam + 1;
}

export function ToBasket() {
  console.log("itt", store2.kosar[0] != undefined);
  if (
    store2 != undefined &&
    store2.kosar != undefined &&
    store2.kosar[0] != undefined
  ) {
    if (store2.kosar[0].darab < 1) {
      return "";
    } else {
      store3.van = true;
      return "/kosar";
    }
  } else {
    return "";
  }
}

export async function Rendeles_Leadasa(szunet, bankkartya) {
  let response = null;

  basketData.append("szunet", szunet);
  basketData.append("bankkartya", bankkartya);
  let utolsoSorszam = await UtolsoSorszam();
  let utolsoNapiSorszam = await UtolsoNapiSorszam();

  console.log("Getting daily number", utolsoNapiSorszam);
  sorszam.sorszam = utolsoNapiSorszam;
  let ital = basketData.getAll("egyeb");
  let szendvics = basketData.getAll("szendvics");

  basketData.append("sorszam", utolsoSorszam + 1);
  basketData.append("napi", utolsoNapiSorszam + 1);

  let count = 0;

  if (ital.length > szendvics.length) {
    count = ital.length;
  } else {
    count = szendvics.length;
  }

  console.log("------kosar count:", count);
  for (let i = 0; i < count; i++) {
    let data;
    let dataszosz;

    if (store2.kosar[i] != undefined) {
      data = JSON.parse(JSON.stringify(store2.kosar[i].darab));
      dataszosz = JSON.parse(JSON.stringify(store2.szoszok[i]));
    }
    console.log(ital.length);
    basketData.delete("egyeb");
    if (ital.length >= 1) {
      basketData.append("egyeb", ital[i]);
    }
    if (store2.kosar[i] != undefined) {
      response = await Rendeles_Fetch(
        data[0].id,
        dataszosz.mustar,
        dataszosz.ketchup,
        dataszosz.majonez,
        dataszosz.csipos,
        dataszosz.hagyma
      );
      console.log(response);
    } else {
      response = await Rendeles_Fetch(0, 0, 0, 0, 0, 0);
      console.log(response);
    }
  }
  console.log("Napi sorszám: ", response);
  return response;
}

export function DeleteFromBasket() {
  const data = JSON.parse(JSON.stringify(store2.kosar[0].darab));
  console.log("store2", store2.kosar[0]);
  store2.pop();
  console.log(data);
}

export function DeleteExtra(index) {
  basketData.delete("egyeb");
  storeExtra.kosarExtra.splice(index, 1);
  for (let index = 0; index < storeExtra.kosarExtra.length; index++) {
    const data = JSON.parse(
      JSON.stringify(storeExtra.kosarExtra[index].darabExtra)
    );
    console.log(data[0].id);
    basketData.append("egyeb", data[0].id);
  }
  store.kosar.pop();
  store.kosar.push({
    darab: store2.kosar.length + storeExtra.kosarExtra.length,
  });
}

export function DeleteSzendvics(index) {
  basketData.delete("szendvics");
  store2.kosar.splice(index, 1);
  store2.szoszok.splice(index, 1);
  for (let index = 0; index < store2.kosar.length; index++) {
    const data = JSON.parse(JSON.stringify(store2.kosar[index].darab));
    console.log(data[0].id);
  }
  console.log(store2.szoszok);

  store.kosar.pop();
  store.kosar.push({
    darab: store2.kosar.length + storeExtra.kosarExtra.length,
  });

  if (store2.kosar.length == 0) {
    store3.van = false;
    console.log(store3.van);
  }
}

async function Rendeles_Fetch(
  szendvicsId,
  mustar,
  ketchup,
  majonez,
  csipos,
  hagyma
) {
  const accessToken = document.cookie
    .replace(/ /g, "")
    .split(";")
    .find((row) => row.startsWith("access_token"));
  const refreshToken = document.cookie
    .replace(/ /g, "")
    .split(";")
    .find((row) => row.startsWith("refresh_token"));

  const parsedJwt = parseJwt(accessToken.split("=")[1]);

  basketData.append("szendvics", szendvicsId);
  basketData.append("mustar", mustar);
  basketData.append("ketchup", ketchup);
  basketData.append("majonez", majonez);
  basketData.append("csipos", csipos);
  basketData.append("hagyma", hagyma);
  basketData.append("access_token", accessToken.split("=")[1]);
  basketData.append("refresh_token", refreshToken.split("=")[1]);
  basketData.append("sub", parsedJwt.sub);
  basketData.append("group", parsedJwt.userGroup);
  console.log(basketData.getAll("egyeb"));
  console.log(basketData.getAll("szendvics"));
  var requestOptions = {
    method: "POST",
    body: basketData,
    credentials: "include",
  };
  return new Promise((resolve, reject) => {
    fetch(`https://pollakbufe.hu/noLogin/ujrendeles`, requestOptions)
      .then(async (result) => {
        const res = await result.text();
        if (res === "Hibás token") {
          console.error("Token error");
          await logout();
          location.replace("https://bufe.pollak.info");
          reject(res);
        }
        console.log("-----Napi sorszam after fetch: ", res, "-----");
        resolve(res);
      })
      .catch((error) => console.log("error", error));
  });
}

export async function logout() {
  var requestOptions = {
    method: "POST",
  };
  return new Promise((resolve, reject) => {
    fetch(`https://auth.pollak.info/auth/logout`, requestOptions)
      .then(async (result) => {
        const res = await result.json();
        deleteAllCookies();
        resolve(res);
      })
      .catch((error) => console.log("error", error));
  });
}

function deleteAllCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie =
      name + "=;domain=.pollak.info;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  });
}

function parseJwt(token) {
  let tokens = token.split(".");
  return JSON.parse(atob(tokens[1]));
}

function GetItalCountInBasket() {
  let italCount = 0;
  for (const element of basketData.getAll("egyeb")) {
    italCount++;
  }
  return italCount;
}

export function AddItalToBasket(extra, id) {
  if (extra == 0) {
    basketData.append("egyeb", id);
  }
  GetFormData2();
  console.log(GetItalCountInBasket());
  GetBasketCount();
}

export async function SzunetEltarolasa() {
  let cucc = await AktualisSzunetLekerdezes();
  if (cucc.length > 0) {
    storeszunet.elsoszunet.pop();
    storeszunet.elsoszunet.push({
      elsoszunet: cucc[0].id,
    });
  }
}

export async function Login(username, password) {
  return new Promise((resolve, reject) => {
    fetch(`https://auth.pollak.info/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      credentials: "include",
    })
      .then(async (result) => {
        const res = await result.text();
        const valasz = JSON.parse(res);
        console.log(valasz);
        resolve(valasz);
      })
      .catch((error) => console.log("error", error));
  });
}

export async function SendImage(image) {
  return new Promise((resolve, reject) => {
    fetch(`https://api-selfie.pollak.info/api/sender/send`, {
      method: "POST",
      body: JSON.stringify({
        image: image,
        path: "bufe-rendelesek",
        email: "adrian.huszka@gmail.com",
      }),
    })
      .then(async (result) => {
        const res = await result.text();
        const valasz = JSON.parse(res);
        console.log(valasz);
        resolve(valasz);
      })
      .catch((error) => console.log("error", error));
  });
}
