// fetch from an api
// store in a JSON file?
// how best to otuput the JSON? in a .txt?

const fetch = require("node-fetch");  // FOR TESTING ONLY! REMOVE THIS FOR PRODUCTION CODE!

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

function fetchData(url) {
    return fetch(url)
        .then(checkStatus)
        // .then(res => res.json())
        // .catch(error => console.log('Looks like there was a problem.', error))
}

Promise.all([
    fetchData('https://api.openaq.org/v1/cities'),
])

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function checkStatus (response) {
    if (response.ok) {
        // return Promise.resolve(response);
        console.log(response)
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}