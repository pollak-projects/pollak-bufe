import { callWithAsyncErrorHandling, ref } from "vue";
import { store } from "../config/store.js";
import { store2 } from "../config/store.js";

export async function Burgercucc(termek) {
    var requestOptions = {  
    method: 'GET',
  };
  return new Promise((resolve, reject) => {
    fetch(`http://localhost/pollakbufe/nologin/${termek}`, requestOptions)
      .then(async (result) => {
        const res = await result.text()
        const valasz = JSON.parse(res)
        resolve(valasz)
    }).catch(error => console.log('error', error));
  })
}

export async function termekLekerdezes(id) {
  var requestOptions = {  
  method: 'GET',
};
return new Promise((resolve, reject) => {
  fetch(`http://localhost/pollakbufe/nologin/id/${id}`, requestOptions)
    .then(async (result) => {
      const res = await result.text()
      const valasz = JSON.parse(res)
      resolve(valasz)
  }).catch(error => console.log('error', error));
})
}

export async function SzunetLekerdezes() {
  var requestOptions = {  
  method: 'GET',
};
return new Promise((resolve, reject) => {
  fetch(`http://localhost/pollakbufe/nologin/szunet`, requestOptions)
    .then(async (result) => {
      const res = await result.text()
      const valasz = JSON.parse(res)
      console.log(valasz)
      resolve(valasz)
  }).catch(error => console.log('error', error));
})
}

let basketData = new FormData();

export function AddElementsToBasket(id, mustar, ketchup, majonez, csipos, hagyma) {
  basketData.append("szendvics", id)
  basketData.append("mustar", mustar)
  basketData.append("ketchup", ketchup)
  basketData.append("majonez", majonez)
  basketData.append("csipos", csipos)
  basketData.append("hagyma", hagyma)

  GetBasketCount()
}

export function GetElementsInBasket() {
  let id = GetFormData();
  let idextra = GetFormData2();
  var requestOptions = {  
    method: 'GET',
  };
  return new Promise((resolve, reject) => {
    fetch(`http://localhost/pollakbufe/nologin/id/${id}`, requestOptions)
      .then(async (result) => {
        const res = await result.text()
        const valasz = JSON.parse(res)
        console.log(valasz)
        resolve(valasz)
    }).catch(error => console.log('error', error));
  })
}

let count = 0;
export function GetBasketCount() {
  count++;
  store.kosar.pop()
  store.kosar.push({
    darab: count
  })

  return count;
}

export async function GetFormData() {
  let count = 0;
  let e = "";
  for (const element of basketData.getAll("szendvics")) {
    count++
  }
  store2.kosar = [];
  for (let i = 0; i < count; i++) {
    e = basketData.getAll("szendvics")[i];  
    store2.kosar.push({
    darab: await termekLekerdezes(e)
    })
    if(basketData.get("mustar") != null){
      store2.szoszok.push({
        mustar: basketData.get("mustar"),
        ketchup: basketData.get("ketchup"), 
        majonez: basketData.get("majonez"),
        csipos: basketData.get("csipos"), 
        hagyma: basketData.get("hagyma")
      })
      basketData.delete("mustar")
      basketData.delete("ketchup")
      basketData.delete("majonez")
      basketData.delete("csipos")
      basketData.delete("hagyma")
    }
  }
}

export async function GetFormData2() {
  let count = 0;
  let e = "";
  for (const element of basketData.getAll("egyeb")) {
    count++
    console.log()
  }
  store2.kosar = [];
  for (let i = 0; i < count; i++) {
    store2.kosarExtra.push({
      darab: await termekLekerdezes(e)
    })
  }
}

export function GetExtraInBasket() {
  let id = basketData.get("egyeb");
  var requestOptions = {  
    method: 'GET',
  };
  return new Promise((resolve, reject) => {
    fetch(`http://localhost/pollakbufe/nologin/id/${id}`, requestOptions)
      .then(async (result) => {
        const res = await result.text()
        const valasz = JSON.parse(res)
        console.log(store.kosar[0].darab)
        resolve(valasz)
    }).catch(error => console.log('error', error));
  })
}

export function Rendeles_Cucc2(szunet, bankkartya) {
  basketData.append("szunet", szunet)
  basketData.append("bankkartya", bankkartya)
  for (let i = 0; i < store2.kosar.length; i++) {
    const data = JSON.parse(JSON.stringify(store2.kosar[i].darab))
    const dataszosz = JSON.parse(JSON.stringify(store2.szoszok[i]))

    Rendeles_Cucc(data[0].id, dataszosz.mustar, dataszosz.ketchup, dataszosz.majonez, dataszosz.csipos, dataszosz.hagyma)
  }
  location.replace("http://localhost:5173/kezdes")

}


async function Rendeles_Cucc(szendvicsId, mustar,ketchup,majonez,csipos,hagyma) {
  basketData.append("szendvics", szendvicsId)
  basketData.append("mustar", mustar)
  basketData.append("ketchup",ketchup)
  basketData.append("majonez",majonez)
  basketData.append("csipos",csipos)
  basketData.append("hagyma",hagyma)
    var requestOptions = {  
    method: 'POST',
    body: basketData
  };
  new Promise((resolve, reject) => {
    fetch(`http://localhost/pollakbufe/nologin/ujrendeles`, requestOptions)
    .catch(error => console.log('error', error));
  })
}

function GetItalCountInBasket() {
  let italCount = 0
  for (const element of basketData.getAll("egyeb")) {
    italCount++  
  }
  return italCount
}

export function AddItalToBasket(extra, id) {
  if(extra == 0){
    basketData.append("egyeb", id)
  }
  console.log(GetItalCountInBasket())
  GetBasketCount()
}
