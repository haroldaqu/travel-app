const fetch = require("node-fetch")

// exports.handler = async function (event, context) {
//     console.log(event)
//     try {
//         const  response = await fetch(process.env.REACT_APP_RAPIDAPI_KEY)
//         const apiKey = response.json()
//         return {
//         statusCode: 200,
//         body: JSON.stringify(apiKey),
//         };
//     } catch (error){
//         console.log(error)
//         return {
//         statusCode: 404,
//         body: err.toString(),
//         };
//     }
// }

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};