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
    const link = document.createElement('a');
    const searchParams = new URLSearchParams();

    searchParams.set('name', applicant.name);
  
    link.href = 'applicant.html?' + searchParams.toString();

    link.textContent = applicant.name;

    nameCell.appendChild(link);

    tr.appendChild(nameCell);

    // const incomeCell = document.createElement('td');
    // incomeCell.textContent = applicant.income;
    // tr.appendChild(incomeCell);

    // const burritoCell = document.createElement('td');
    // burritoCell.textContent = applicant.burrito;
    // tr.appendChild(burritoCell);

    tbody.appendChild(tr);
}