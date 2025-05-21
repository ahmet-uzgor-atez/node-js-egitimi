// npm ve libraries nasıl kullanılır (axios ve istek)
// npm
const axios = require("axios"); // ecmascript eski versiyon import methodu
require('dotenv').config();
// import axios from "axios";

const baseKeycloakUrl = "https://dev-kc.singlewindow.io";
const baseLogicustUrl = "https://dev-productcatalog.singlewindow.io/api/v1-0";
const tokenApiEndpoint = "auth/realms/agsw/protocol/openid-connect/token";
const tokenParams = new URLSearchParams();

console.log(process.env.USER_MAIL);
tokenParams.append("grant_type", "password");
tokenParams.append("username", process.env.USER_MAIL);
tokenParams.append("password", process.env.USER_PASSWORD);
tokenParams.append("client_id", "product-catalog");

// callback - promise - async- await
// PROMISE örneği
// const response = axios.post(`${baseKeycloakUrl}/${tokenApiEndpoint}`, tokenParams,  {timeout: 10000, timeoutErrorMessage: 'Beklenen süreyi aştı'});

// response.then((resp) => {
//     console.log('DATA =>', resp.data);
// }).catch((error) => {
//     console.log(error);
// });

// console.log('Sonraki =>',response);

async function getToken() {
  const awaitResponse = await axios.post(
    `${baseKeycloakUrl}/${tokenApiEndpoint}`,
    tokenParams,
    { timeout: 10000, timeoutErrorMessage: "Beklenen süreyi aştı" }
  ).catch((error) => {
      console.log(error.message);
      return { data: {} };
    });
  // console.log('Await response =>', awaitResponse.data);

  const userData = await axios
    .get(`${baseLogicustUrl}/users/self`, {
      headers: {
        Authorization: `Bearer ${awaitResponse.data.access_token}`,
      },
    })
    .catch((error) => {
      // console.log(error);
      return { data: {} };
    });

  console.log(userData.data);
}

getToken();
