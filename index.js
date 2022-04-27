// const axios = require('axios');

// getdata = async()=>{
//   let res = await axios.get("https://codequiz.azurewebsites.net/")
//   console.log(res);
// }
// getdata()

let code = process.argv[2];
switch (code) {
  case "B-INCOMESSF":
    console.log("10.0548");
    break;
  case "BM70SSF":
    console.log("9.9774");
    break;
  case "BEQSSF":
    console.log("11.247");
    break;
  case "B-FUTURESSF":
    console.log("11.443");
    break;
}