import { callWithAsyncErrorHandling, ref } from "vue";
import { store, storeExtra, storeszunet } from "../config/store.js";
import { store2, store3 } from "../config/store.js";

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

export async function AktualisSzunetLekerdezes() {
  var requestOptions = {  
  method: 'GET',
};
return new Promise((resolve, reject) => {
  fetch(`http://localhost/pollakbufe/nologin/aktualisSzunet`, requestOptions)
    .then(async (result) => {
      const res = await result.text()
      const valasz = JSON.parse(res)
      console.log(valasz)
      resolve(valasz)
  }).catch(error => console.log('error', error));
})
}

async function UtolsoSorszam() {
  var requestOptions = {  
  method: 'GET',
};
return new Promise((resolve, reject) => {
  fetch(`http://localhost/pollakbufe/nologin/UtolsoSorszam`, requestOptions)
    .then(async (result) => {
      const res = await result.text()
      const valasz = JSON.parse(res)
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


export function GetBasketCount() {
  store.kosar[0].darab++
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
  }
  storeExtra.kosarExtra = [];
  for (let i = 0; i < count; i++) {
    e = basketData.getAll("egyeb")[i];
    storeExtra.kosarExtra.push({
      darabExtra: await termekLekerdezes(e)
    })
  }


}

export function GetExtraInBasket() {
  let id = GetFormData2();
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

export function JelenlegiSorszam(utolsoSorszam) {
  let sorszam = utolsoSorszam
  return (sorszam+1)
}

export function ToBasket() {
  if (store2.kosar[0] != undefined) {
    if (store2.kosar[0].darab < 1) {
      return ''
    }else{
    store3.van = true
      return '/kosar'
    } 
  }
}

export async function Rendeles_Cucc2(szunet, bankkartya) {
  basketData.append("szunet", szunet)
  basketData.append("bankkartya", bankkartya)
  let utolsoSorszam = await UtolsoSorszam();
  let ital = basketData.getAll("egyeb")
  basketData.append("sorszam",(utolsoSorszam+1))
  for (let i = 0; i < store2.kosar.length; i++) {
    const data = JSON.parse(JSON.stringify(store2.kosar[i].darab))
    const dataszosz = JSON.parse(JSON.stringify(store2.szoszok[i]))
    Rendeles_Cucc(data[0].id, dataszosz.mustar, dataszosz.ketchup, dataszosz.majonez, dataszosz.csipos, dataszosz.hagyma)
    console.log(ital.length)
    basketData.delete("egyeb")
    if(ital.length > 1){
      basketData.append("egyeb", ital[i])
    }
  }
  location.replace("http://localhost:5173/sorszam")
}

export function DeleteFromBasket() {
  const data = JSON.parse(JSON.stringify(store2.kosar[0].darab))
  console.log(data)
  store2.pop()
  console.log(data)
}

export function DeleteExtra(index) {
  basketData.delete("egyeb")
  storeExtra.kosarExtra.splice(index,1)
  for (let index = 0; index < storeExtra.kosarExtra.length; index++) {
    const data = JSON.parse(JSON.stringify(storeExtra.kosarExtra[index].darabExtra))
    console.log(data[0].id)
    basketData.append("egyeb", data[0].id)
  }
  store.kosar.pop()
  store.kosar.push({
    darab: store2.kosar.length + storeExtra.kosarExtra.length
  })
}

export function DeleteSzendvics(index) {
  basketData.delete("szendvics")
  store2.kosar.splice(index,1)
  store2.szoszok.splice(index,1)
  for (let index = 0; index < store2.kosar.length; index++) {
    const data = JSON.parse(JSON.stringify(store2.kosar[index].darab))
    console.log(data[0].id)
  }
  console.log(store2.szoszok)

  store.kosar.pop()
  store.kosar.push({
    darab: store2.kosar.length + storeExtra.kosarExtra.length
  })

  if (store2.kosar.length == 0) {
    store3.van = false
    console.log(store3.van)
  }
}


async function Rendeles_Cucc(szendvicsId, mustar,ketchup,majonez,csipos,hagyma) {
  basketData.append("szendvics", szendvicsId)
  basketData.append("mustar", mustar)
  basketData.append("ketchup",ketchup)
  basketData.append("majonez",majonez)
  basketData.append("csipos",csipos)
  basketData.append("hagyma",hagyma)
  console.log(basketData.getAll("egyeb"))
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
  GetFormData2()
  console.log(GetItalCountInBasket())
  GetBasketCount()
}

export async function SzunetEltarolasa() {
  let cucc = await AktualisSzunetLekerdezes()
  if(cucc.length > 0){
    storeszunet.elsoszunet.pop()
    storeszunet.elsoszunet.push({
      elsoszunet: cucc[0].id
    })
  }
}
