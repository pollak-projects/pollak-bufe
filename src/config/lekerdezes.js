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
