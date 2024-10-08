export async function Burgercucc() {
    var requestOptions = {
    method: 'GET',
  };
  fetch("http://localhost/pollakbufe/nologin/burger", requestOptions)
    .then(response => response.text())
    .then(result => {
      const valasz = JSON.parse(result)
      return valasz[0]
  })
    .catch(error => console.log('error', error));
  }