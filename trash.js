const { randomInt } = require("crypto");

const countryArray = [
  {
    full: "Nigeria",
    code: "NG",
  },
  {
    full: "United Kingdom",

    code: "GB",
  },
  {
    full: "Australia",

    code: "AU",
  },
  {
    full: "United states of America",

    code: "US",
  },
  {
    full: "Dubai",

    code: "AE",
  },
  {
    full: "Ireland",
    code: "IE",
  },
  {
    full: "Turkey",
    code: "TR",
  },
  {
    full: "Ukraine",
    code: "UA",
  },
  {
    full: "South Africa",
    code: "ZA",
  },
  {
    full: "Maldives",
    code: "MV",
  },
];

let countryCodeString = null;
let countryFullString = null;

function countryCode() {
  for (let value of countryArray) {
    countryCodeString = value.code;
    countryFullString = value.full;
  }
}

countryCode();
console.log(countryFullString, countryCodeString);

console.log(randomInt(1, 100));
