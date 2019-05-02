const applicantApi = {
    storage: localStorage,
    save(applicant) {
        // get our appliant array
        const applicants = applicantApi.getAll();
        // add applicant to the array
        applicants.push(applicant);
        // serialize to json
        const json = JSON.stringify(applicants);
        //save to local storage
        applicantApi.storage.setItem('applicants', json);
    },
    get(name) {
        // use get all to fetch applicants
        const applicants = applicantApi.getAll();

        for(let i = 0; i < applicants.length; i++) {
            const applicant = applicants[i];
            if(applicant.name === name) {
                return applicant;
            } 
        }
    },
    getAll() {
        // get from local storage
        const json = applicantApi.storage.getItem('applicants');
        // deserialize to object
        // return it
        let applicants = JSON.parse(json);
        if(!applicants) {
            applicants = [];
        }
        
        return applicants;
    }
};

export default applicantApi;