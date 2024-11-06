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
      console.log(valasz)
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
  let id = basketData.get("szendvics");
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
  for (const element of basketData.entries()) {
    count++;
  }
  console.log(count)
  return count;
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
        console.log(valasz)
        resolve(valasz)
    }).catch(error => console.log('error', error));
  })
}

export async function Rendeles_Cucc(szunet) {
  basketData.append("szunet", szunet)
    var requestOptions = {  
    method: 'POST',
    body: basketData
  };
  return new Promise((resolve, reject) => {
    fetch(`http://localhost/pollakbufe/nologin/ujrendeles`, requestOptions)
      .then(async (result) => {
        location.replace("http://localhost:5173/kezdes")
    }).catch(error => console.log('error', error));
  })
}

export function AddItalToBasket(extra, id) {
  if(extra == 0){
    basketData.append("egyeb", id)
  }

  GetBasketCount()
}