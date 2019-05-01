// grabing helper function
import applicantApi from './applicant-api.js';

// referncing the tbody DOM node
const tbody = document.getElementById('applicants');

// using getAll to grab array from local storage
const applicants = applicantApi.getAll();

for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];

    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = applicant.name;
    tr.appendChild(nameCell);

    const incomeCell = document.createElement('td');
    incomeCell.textContent = applicant.income;
    tr.appendChild(incomeCell);

    const burritoCell = document.createElement('td');
    burritoCell.textContent = applicant.burrito;
    tr.appendChild(burritoCell);

    const catCell = document.createElement('td');
    catCell.textContent = applicant.cat;
    tr.appendChild(catCell);

    const catNumberCell = document.createElement('td');
    catNumberCell.textContent = applicant.catNumber;
    tr.appendChild(catNumberCell);

    const somethingInterestingCell = document.createElement('td');
    somethingInterestingCell.textContent = applicant.somethingInteresting;
    tr.appendChild(somethingInterestingCell);

    tbody.appendChild(tr);
}