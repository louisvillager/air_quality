# Air Quality Measurements
### A JavaScript project for Code Louisville
---
Air Quality Measurements is a JavaScript project to demonstrate the retrieval and display of data from an external API. It references the [Open AQ Platform API](https://docs.openaq.org/), which contains data on air quality. Data referenced for this project relates to the number of measurements taken by cities within the United States and the number of measuring locations.

## Project Requirements
The following project requirements have been met:
-	Your application must have a responsive design through the use of media queries, Bootstrap, CSS Grid, Flexbox, and/or other similar approaches - we need to ensure that you can integrate your new JavaScript skill with your HTML/CSS skills you previously learned
-	Project is uploaded to your GitHub repository and shows at minimum 5 separate commits
-	Project includes a README file that explains the following:
    -	A one-paragraph or longer description of what your project is
    -	Which 3+ features you have included to meet the requirements
    -	Any special instructions required for the reviewer to run your project

### Features
- Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)
    - `fetch()` is used to retrieve data from the Open AQ Platform API and populate a drop-down menu with certain values, which can then be used to change data on the page.
- Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application
    - The number of measurements taken for each city is stored in an array, from which the minimum, maximum, mean, and median values are retrieved and displayed on the page. 
- Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format
    - Rather than validating user input or storing data per se, a regular expression is used to filter out certain results from the API.

## Installation and Running
This project was written using JavaScript, HTML5, and CSS3. JavaScript code was written to ES2015 standards. It relies on no external libraries or dependencies.

In order to run, `index.html` should be opened on a local server. On a successful call to the API, a list of cities will populate in the drop-down menu at the top of the page.

## License
MIT License

Copyright (c) 2020 Marc Rivers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.