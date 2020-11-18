// const fetch = require('node-fetch'); // FOR TESTING ONLY! REMOVE THIS FOR PRODUCTION CODE!
// ------------------------------------------
//  VARIABLES
// ------------------------------------------

const output = document.querySelector('#cities');

// Selected city div
const displayData = document.querySelector('#results');
const selectedCity = document.querySelector('#selected-city');
const selectedMeasurements = document.querySelector('#selected-measurements');
const selectedLocations = document.querySelector('#selected-locations');

// Louisville comparison div
const louMeasurements = document.querySelector('#lou-measurements');
const louLocations = document.querySelector('#lou-locations');

const minMeasures = document.querySelector('#min-measures');
const maxMeasures = document.querySelector('#max-measures');
const meanMeasures = document.querySelector('#mean-measures');
const medMeasures = document.querySelector('#med-measures');
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
  const myChoice = apiData.find((obj) => evt.target.value === obj.name);
  selectedCity.innerHTML = myChoice.name;
  selectedMeasurements.innerHTML = myChoice.count;
  selectedLocations.innerHTML = myChoice.locations;
}

// Populate dropdown with available cities
fetchData('https://api.openaq.org/v1/cities?country=US&limit=850').then(
  (res) => {
    apiData = res.results;
    let cityCode = '';
    let minMaxAvg = [];
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
        minMaxAvg.push({ name: cityObject.name, count: cityObject.count });
      }
    });
    output.innerHTML = cityCode;

    // Display national comparison data
    minMaxAvg.sort((a, b) => a.count - b.count);
    minMeasures.innerHTML = `${minMaxAvg[0].count} (${minMaxAvg[0].name})`;
    maxMeasures.innerHTML = `${minMaxAvg[minMaxAvg.length - 1].count} (${
      minMaxAvg[minMaxAvg.length - 1].name
    })`;
    meanMeasures.innerHTML = meanAvg(minMaxAvg);
    medMeasures.innerHTML = median(minMaxAvg);
  }
);

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

// Regex to exclude numbers and ALL CAPS (counties)
function hasLowercase(myString) {
  return /[a-z]/.test(myString);
}

function meanAvg(values) {
  let sum = values.reduce((a, b) => a + b.count, 0);
  return Math.round(sum / values.length);
}

function median(values) {
  const half = Math.floor(values.length / 2);
  if (values.length % 2) return values[half].count;
  return (values[half - 1].count + values[half].count) / 2.0;
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

output.addEventListener('change', (evt) => handleSelect(evt));
