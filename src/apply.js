import getApplicant from './get-applicant.js';
import applicantApi from './applicant-api.js';

// reference needed dom nodes
const form = document.getElementById('dating-application');

//main event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const applicant = getApplicant(formData);
    applicantApi.save(applicant);
});
