// fetch from an api
// store in a JSON file?
// how best to otuput the JSON? in a .txt?

// const fetch = require('node-fetch'); // FOR TESTING ONLY! REMOVE THIS FOR PRODUCTION CODE!
const output = document.querySelector('#cities');
const displayData = document.querySelector('#results');
let apiData;

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

async function fetchData(url) {
  const data = await fetch(url);
  // .then(checkStatus)
  // .then((res) => res.json())
  // .then((data) => console.log(data))
  // .catch((error) => console.log('Looks like there was a problem.', error));
  return await data.json();
}

function handleSelect(evt) {
  console.log(evt.target.value);
  const myChoice = apiData.find((obj) => evt.target.value === obj.name);
  console.log(myChoice);
  // Change innerHTML of comparison div in this function
}

// Regex to exclude numbers and ALL CAPS (counties)
function hasLowercase(myString) {
  return /[a-z]/.test(myString);
}

fetchData('https://api.openaq.org/v1/cities?country=US&limit=1000').then(
  (res) => {
    apiData = res.results;
    let cityCode = '';
    res.results.forEach((cityObject) => {
      // Excluding results with numbers or ALL CAPS (counties)
      if (hasLowercase(cityObject.name)) {
        cityCode = cityCode.concat(
          ' ',
          `<option value="${cityObject.name}">${cityObject.name}</option>`
        );
      }
    });
    output.innerHTML = cityCode;
  }
);
// do all DOM manipulation inside this .then statement

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

output.addEventListener('change', (evt) => handleSelect(evt));
