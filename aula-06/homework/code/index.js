const axios = require('axios');

const BASE_URL = 'https://parallelum.com.br';

async function getDataAsync() {
  let responseData = await axios.get(`${BASE_URL}/fipe/api/v1/carros/marcas`)
    .then(function (response) {
      console.log(response.data);
      return response.data;
  })
  console.log(responseData)
}

function getDataSync() {
  let responseData = axios.get(`${BASE_URL}/fipe/api/v1/carros/marcas`)
    .then(function (response) {
      console.log(response.data);
      return response.data;
  })
  console.log(responseData)
}

getDataAsync();
getDataSync();