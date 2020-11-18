// const fetch = require('node-fetch'); // FOR TESTING ONLY! REMOVE THIS FOR PRODUCTION CODE!
const output = document.querySelector('#cities');
const displayData = document.querySelector('#results');
const louMeasurements = document.querySelector('#lou-measurements');
const louLocations = document.querySelector('#lou-locations');
const selectedCity = document.querySelector('#selected-city')
const selectedMeasurements = document.querySelector('#selected-measurements');
const selectedLocations = document.querySelector('#selected-locations');
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
  // console.log(evt.target.value);
  const myChoice = apiData.find((obj) => evt.target.value === obj.name);
  // console.log(myChoice.count);
  // console.log(myChoice.locations);
  selectedCity.innerHTML = myChoice.name
  selectedMeasurements.innerHTML = myChoice.count
  selectedLocations.innerHTML = myChoice.locations
}

// Regex to exclude numbers and ALL CAPS (counties)
function hasLowercase(myString) {
  return /[a-z]/.test(myString);
}

// Populate dropdown with available cities
fetchData('https://api.openaq.org/v1/cities?country=US&limit=850').then(
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
        if (cityObject.name === 'Louisville') {
          louMeasurements.innerHTML = cityObject.count;
          louLocations.innerHTML = cityObject.locations;
        }
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
