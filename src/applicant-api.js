const applicantApi = {
    save(applicant) {
        // serialize to json
        const json = JSON.stringify(applicant);
        // save to local storage
        localStorage.setItem('applicant', json);
    },
    get() {
        // get from local storage
        const json = localStorage.getItem('applicant');
        //deserialize to object
        const applicant = JSON.parse(json);
        //return it
        return applicant;
    }
};

export default applicantApi;