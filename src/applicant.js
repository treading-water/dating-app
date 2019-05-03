//import our utility object for getting data
import applicantApi from './applicant-api.js';

//reference all the DOM elements we need to update
const name = document.getElementById('name');
const income = document.getElementById('income');
const burrito = document.getElementById('burrito');
const cat = document.getElementById('cat');
const catNumber = document.getElementById('cat-number');
const somethingInteresting = document.getElementById('something-interesting');

// get the applicant name
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('name');

//get our applicant from the api
const applicant = applicantApi.get(id);

// no applicant? head back to home page...
// if(!applicant) {
//     window.location = './';
// }

// mediate data into the element
name.textContent = applicant.name;
income.textContent = applicant.income;
burrito.textContent = applicant.burrito;
cat.textContent = applicant.cat;
catNumber.textContent = applicant.catNumber;
somethingInteresting.textContent = applicant.somethingInteresting;

