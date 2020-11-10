// fetch from an api
// store in a JSON file?
// how best to otuput the JSON? in a .txt?

// const fetch = require('node-fetch'); // FOR TESTING ONLY! REMOVE THIS FOR PRODUCTION CODE!
const output = document.querySelector('#countries');
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
  console.log(apiData);
  const myChoice = apiData.find((obj) => evt.target.value === obj.name);
  console.log(myChoice);
  // Change innerHTML of comparison div in this function
}

fetchData('https://api.openaq.org/v1/cities?limit=200').then((res) => {
  apiData = res.results;
  let countryCode = '';
  res.results.forEach((countryObject) => {
    console.log(countryObject);
    countryCode = countryCode.concat(
      ' ',
      `<option value="${countryObject.name}">${countryObject.name}</option>`
    );
  });
  output.innerHTML = countryCode;
});
// do all DOM manipulation inside this .then statement

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

output.addEventListener('change', (evt) => handleSelect(evt));
